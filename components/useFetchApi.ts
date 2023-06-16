"use client";
import { useState } from "react";
import { FormData } from "./ContactForm";

export const useFetchMailApi = () => {
  const [emailState, setEmailState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const postMail = async (data: FormData) => {
    try {
      const req = await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setEmailState("success");
      if (!req.ok) {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setEmailState("error");
    }
  };

  return { postMail, emailState };
};
