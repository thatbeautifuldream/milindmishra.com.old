"use client";

import { AnimateBlur } from "~/components/animation/animate-blur";
import { sendEmail } from "~/actions/send-email";

export default function Resume() {
  return (
    <AnimateBlur>
      <form
        className="flex flex-col items-center justify-center"
        action={async (formData) => {
          const name = formData.get("name") as string;
          const email = formData.get("email") as string;
          await sendEmail({
            name,
            email,
          });
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="m-2 w-1/2 rounded-md border border-gray-300 p-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="m-2 w-1/2 rounded-md border border-gray-300 p-2"
        />
        <button className="m-2 rounded-md bg-blue-500 p-2 text-white">
          Request Resume 📄
        </button>
      </form>
    </AnimateBlur>
  );
}
