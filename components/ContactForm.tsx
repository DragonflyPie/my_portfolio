"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
import TextareaInput from "./TextareaInput";
import { useEffect, useState } from "react";
import { useFetchMailApi } from "./useFetchApi";
import { useRouter } from "next/router";
import dictionary from "../intl/dictionary.json";

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
  const { locale } = useRouter();
  const lang = locale as "en" | "ru";
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
      className="flex h-full min-w-full grow flex-col items-center  gap-6 p-3 lg:min-w-[600px] lg:gap-10"
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
        label={dictionary.contacts.name[lang]}
        register={register}
        errors={errors}
      />
      <Input
        id={"email"}
        label={dictionary.contacts.email[lang]}
        register={register}
        errors={errors}
      />
      <TextareaInput
        id={"message"}
        label={dictionary.contacts.message[lang]}
        register={register}
        errors={errors}
      />

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
