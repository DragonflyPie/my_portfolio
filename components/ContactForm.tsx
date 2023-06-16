"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
import TextareaInput from "./TextareaInput";
import { useEffect, useState } from "react";
import { useFetchMailApi } from "./useFetchApi";

const schema = yup
  .object({
    name: yup
      .string()
      .max(30, "Maximum 30 symbols")
      .required("This field is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("This field is required"),
    message: yup.string().required("This field is required"),
  })
  .required("This field is required");

export type FormData = yup.InferType<typeof schema>;

const ContactForm = () => {
  const { emailState, postMail } = useFetchMailApi();
  const {
    register,
    handleSubmit,
    reset,

    formState: {
      errors,
      isValid,
      isSubmitSuccessful,
      isSubmitting,
      isSubmitted,
    },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  useEffect(() => {
    if (emailState === "success") reset();
    console.log(123);
  }, [emailState]);

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     const kek = await postMail(data);
  //     console.log("successsssss", kek);
  //     setEmailState("success");
  //   } catch (error) {
  //     setEmailState("error");
  //   } finally {
  //     console.log(isSubmitted, isSubmitSuccessful);
  //   }
  // };

  return (
    <form
      onSubmit={handleSubmit(postMail)}
      className="flex h-full flex-col items-center gap-5 bg-slate-100 p-3 md:p-5"
    >
      {emailState === "error" ? (
        <h1>SOSISKA</h1>
      ) : emailState === "success" ? (
        <h1>sardelka</h1>
      ) : (
        ""
      )}
      <Input
        id={"name"}
        label="Your Name"
        register={register}
        errors={errors}
      />
      <Input
        id={"email"}
        label="Your Email"
        register={register}
        errors={errors}
      />
      <TextareaInput
        id={"message"}
        label={"Your Message"}
        register={register}
        errors={errors}
      />

      {/* <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input {...register("message")} />
      <p>{errors.message?.message}</p>

      <input type="submit" /> */}
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-4 w-full rounded bg-green-700 p-2 text-white duration-300 hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-500 md:max-w-lg"
      >
        {isSubmitting ? "Submitting..." : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
