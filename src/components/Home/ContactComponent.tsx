
"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        action="#"
        className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-900">
          Contact Us
        </h1>

        <div className="mb-6 mt-3">
          <Label htmlFor="email" className="mb-2 block">
            Your email
          </Label>

          <TextInput
            id="email"
            name="email"
            placeholder="name@company.com"
            type="email"
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="subject" className="mb-2 block">
            Subject
          </Label>

          <TextInput
            id="subject"
            name="subject"
            placeholder="Let us know how we can help you"
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="message" className="mb-2 block">
            Your message
          </Label>

          <Textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={6}
          />
        </div>

        <div className="mb-6">
          <Button type="submit" className="w-full">
            Send message
          </Button>
        </div>

        <div className="text-center">
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <a href="mailto:info@company.com" className="hover:underline">
              info@company.com
            </a>
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            <a href="tel:2124567890" className="hover:underline">
              212-456-7890
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
