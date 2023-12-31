import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./ContactForm";
import useResizeTextarea from "./useResizeTextarea";
import { FormEvent, useRef, useState } from "react";

interface InputProps {
  id: "email" | "message" | "name";
  label: string;
  //   disabled?: boolean;
  //   type?: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}
const TextareaInput = ({ register, errors, id, label }: InputProps) => {
  //   const [value, setValue] = useState("");
  //   const textareaRef = useRef<HTMLTextAreaElement>(null);
  //   useResizeTextarea(textareaRef.current, value);
  //   const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
  //     setValue(e.currentTarget.value);
  //   };
  return (
    <div className="group relative w-full space-y-1 md:max-w-lg">
      <label
        htmlFor={id}
        className="p-2 text-lg group-focus-within:font-medium"
      >
        {label}
        <span className="text-red-error">&#42;</span>
      </label>
      <textarea
        {...register(id)}
        id={id}
        rows={6}
        // ref={textareaRef}
        className={` w-full rounded-md border bg-white  p-4 font-light text-black outline-none disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blackish dark:text-whitish
        ${
          errors[id]
            ? "border-red-error focus:border-red-error "
            : "border-transparent dark:border-whitish"
        }`}

        // value={value}
        // onChange={handleChange}
      />

      <p className="absolute text-sm text-red-error">{errors[id]?.message}</p>
    </div>
  );
};

export default TextareaInput;
