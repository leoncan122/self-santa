import { AddLinkFormValues } from "./form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { ADD_LINK } from "./form.model";
import { useApi } from "../../../hooks/useApi";
import "./AddLink.css";
import { addGift, addLink } from "../../../services/gifts.service";

export const AddLink = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddLinkFormValues>({
    resolver: zodResolver(ADD_LINK),
    mode: "onBlur",
  });

  const { data, loading, error, fetch } = useApi<AddLinkFormValues, null>(addLink, {
    autoFetch: false,
  });

  const onSubmit: SubmitHandler<AddLinkFormValues> = (data: AddLinkFormValues) => {
    console.log(data);
  };

  const handleVerifyLink = () => {
    fetch();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="url-form">
        <InputForm
          name="url"
          control={control}
          label="Url"
          type="text"
          error={errors.url}
        />
        <button onClick={handleSubmit(onSubmit)} type="button" className="verify-btn">
          verify link
        </button>
      </div>
    </>
  );
};
