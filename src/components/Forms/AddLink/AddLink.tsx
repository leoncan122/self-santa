import { AddLinkFormValues } from "./form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { ADD_LINK } from "./form.model";
import { useApi } from "../../../hooks/useApi";
import "./AddLink.css";
import { addLink, AddLinkParams, GiftResponse } from "../../../services/gifts.service";


export const AddLink = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddLinkFormValues>({
    resolver: zodResolver(ADD_LINK),
    mode: "onBlur",
  });

  const { loading, error, fetch } = useApi<GiftResponse, AddLinkParams>(addLink, {
    autoFetch: false,
    params: { link: "" },
  });

  const onSubmit: SubmitHandler<AddLinkFormValues> = (data: AddLinkFormValues) => {
      const params: AddLinkParams = { link: data.url };
      fetch(params);
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
