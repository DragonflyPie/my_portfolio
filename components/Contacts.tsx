import React from "react";
import Footer from "./Footer";

interface ContactsRef {
  reference: React.Ref<HTMLDivElement>;
}

const Contacts = ({ reference }: ContactsRef) => {
  return (
    <div
      className="flex flex-col justify-between snap-center h-screen "
      ref={reference}
    >
      <div className="">Contactssdsfsd</div>
      <Footer />
    </div>
  );
};

export default Contacts;
