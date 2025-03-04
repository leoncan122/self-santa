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
    
    const {data, loading, error, fetch} = useApi<GiftResponse, AddGiftParams>(addGift);

    const onSubmit: SubmitHandler<AddGiftFormValues> = (data: AddGiftFormValues) => {
        fetch(data);
      };

    if (data) {
        return (
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.link}</p>
          </div>
        );
      }

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

