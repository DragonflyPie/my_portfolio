import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "./ContactForm";

interface InputProps {
  id: "email" | "message" | "name";
  label: string;
  //   disabled?: boolean;
  //   type?: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}
const Input = ({ register, errors, id, label }: InputProps) => {
  return (
    <div className="group relative w-full md:max-w-lg">
      <label
        htmlFor={id}
        className="p-2 text-lg group-focus-within:font-medium"
      >
        {label}
        <span className="text-red-error">&#42;</span>
      </label>
      <input
        {...register(id)}
        id={id}
        className={` w-full rounded-md  border-transparent bg-white p-4 font-light outline-none disabled:cursor-not-allowed disabled:opacity-70 
        ${
          errors[id]
            ? "border-red-error focus:border-red-error"
            : "border-gray-300 focus:border-black"
        }`}
      />

      <p className="absolute text-sm text-red-error">{errors[id]?.message}</p>
    </div>
  );
};

export default Input;
