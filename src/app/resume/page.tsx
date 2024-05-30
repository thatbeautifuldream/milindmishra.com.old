"use client";

import { toast } from "sonner";
import { AnimateBlur } from "~/components/animation/animate-blur";
import { sendEmail } from "~/actions/send-email";

async function formAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const data = await sendEmail({
    name,
    email,
  });
  if (!data) {
    toast.error("Failed to send email.");
    return;
  }
  toast.success("Email sent successfully.");
}

export default function Resume() {
  return (
    <AnimateBlur>
      <form action={formAction} className="flex flex-col space-y-4">
        <div className="isolate -space-y-px rounded-md shadow-sm">
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-primary"
            >
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-primary placeholder:text-primary/50 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Mishra Ji"
            />
          </div>
          <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-primary"
            >
              Email
            </label>
            <input
              required
              type="text"
              name="email"
              id="email"
              className="block w-full border-0 p-0 text-primary placeholder:text-primary/50 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="mishraji@gmail.com"
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-background shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Request Resume
        </button>
      </form>
    </AnimateBlur>
  );
}
