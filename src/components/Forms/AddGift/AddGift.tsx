import { AddGiftFormValues } from "./form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import  { InputForm } from "../CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { ADD_GIFT_SCHEMA } from "./form.model";
import { useApi } from "../../../hooks/useApi";
import './AddGift.css';
import { addGift, AddGiftParams, GiftResponse } from "../../../services/gifts.service";
// import { AddLink } from "../AddLink";
export const AddGift = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<AddGiftFormValues>({
        resolver: zodResolver(ADD_GIFT_SCHEMA),
        mode: 'onBlur',
    }); 
    const params: AddGiftParams = {
      title: 'Example Gift',
      price: '20.00',
      description: 'This is an example gift',
      url: 'http://example.com'
    };
    const {data, loading, error, fetch} = useApi<GiftResponse,AddGiftParams>(addGift, {autoFetch: false, params});

    const onSubmit: SubmitHandler<AddGiftFormValues> = (data: AddGiftFormValues) => {
        console.log("enviando formulario", data, fetch);
        fetch();
      };

    

    if (loading) {
        return <div>Loading...</div>;
      }
    
    if (error) {
    return <div>Error: {error.message}</div>;
    }

    return (
        <section className="addgift-page">
            <h1>
               Lets add a new gift
            </h1>
            <h3>Encourage your friends to support you</h3>

            <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
                {/* <AddLink /> */}
                <InputForm
                    name="title"
                    control={control}
                    label="Title"
                    type="text"
                    error={errors.title}
                />
                <InputForm
                    name="price"
                    control={control}
                    label="Price"
                    type="text"
                    error={errors.price}
                />
                <InputForm
                    name="description"
                    control={control}
                    label="Description"
                    type="text"
                    error={errors.description}
                />
                <InputForm
                  name="url"
                  control={control}
                  label="Url"
                  type="text"
                  error={errors.url}
                />
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </form>
        </section>
    );
}

