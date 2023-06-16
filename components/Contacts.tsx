import React from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

interface ContactsRef {
  reference: React.Ref<HTMLDivElement>;
}

const Contacts = ({ reference }: ContactsRef) => {
  return (
    <div
      className="flex h-screen w-full snap-center scroll-m-6 flex-col justify-between pt-10"
      ref={reference}
    >
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contacts;
