import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className=" h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center mt-4 p-24"
    >
      <span>Dear JohnDoe</span>
      <textarea
        rows={6}
        name="user_message"
        className=" bg-transparent border-b-2 border-b-black outline-none resize-none"
      ></textarea>
      <span>My Email Address is</span>
      <input
        type="text"
        name="user_email"
        className=" bg-transparent border-b-2 border-b-black outline-none"
      />
      <span>Regards</span>
      <button className=" bg-purple-200 rounded  font-semibold text-gray-600 p-4">
        send
      </button>
      {success && (
        <span className=" text-green-600 font-semibold">
          your message has sent sucessfully
        </span>
      )}
      {error && (
        <span className=" text-green-600 font-semibold">
          something went wrong
        </span>
      )}
    </form>
  );
}
