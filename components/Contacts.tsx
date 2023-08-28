import React from "react";
import ContactForm from "./ContactForm";
import dictionary from "../intl/dictionary.json";
import { useRouter } from "next/router";

interface ContactsRef {
  reference: React.Ref<HTMLDivElement>;
}

const Contacts = ({ reference }: ContactsRef) => {
  const { locale } = useRouter();
  const lang = locale as "en" | "ru";
  return (
    <div
      className="flex min-h-[calc(100vh-88px)] w-full scroll-m-6 flex-col items-center md:py-4 "
      ref={reference}
    >
      <h3 className="py-6 font-outline text-2xl">
        {dictionary.contacts.heading[lang]}
      </h3>
      <ContactForm />
    </div>
  );
};

export default Contacts;
