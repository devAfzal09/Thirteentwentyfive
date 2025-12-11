import React from "react";
// import { Input, Textarea, Button } from "@heroui/react";
import {
  MailAdd01Icon,
  AiPhone01Icon,
  MapsGlobal01Icon
} from "hugeicons-react";

export default function Contact() {
   return (
    <div className="w-full py-20 bg-[#D8EFFF] mt-8">
      <h1 className="text-center text-4xl font-bold mb-12">
        Reach Us At Anytime
      </h1>

      <div className="w-full px-5  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE CARDS */}
        <div className="flex flex-col gap-6">

          {/* Email */}
          <div className="flex items-center h-[16vh] gap-4 p-6  bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-4 rounded-xl bg-gray-900 text-white shadow-md">
              <MailAdd01Icon size={28} />
            </div>
            <div>
              <p className="text-gray-600">
                Feel free to email us if you have any questions or need more details!
              </p>
              <a
                href="mailto:contact@demazetech.com"
                className="text-blue-600 font-medium hover:underline block mt-2"
              >
                contact@threety.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center h-[16vh] gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-4 rounded-xl bg-gray-900 text-white shadow-md">
              <AiPhone01Icon size={28} />
            </div>
            <div>
              <p className="text-gray-600">
                Feel free to book a call if that’s more convenient and easier for you.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline block mt-2"
              >
                Book with Calendly
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center h-[16vh] gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-4 rounded-xl bg-gray-900 text-white shadow-md">
              <MapsGlobal01Icon size={28} />
            </div>
            <div>
              <p className="text-gray-600">
                xyz address
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline block mt-2"
              >
                Office Location
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <form className="flex flex-col gap-6">

            {/* Name */}
            <div>
              <label className="font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="jane@framer.com"
                className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="font-medium text-gray-700">Subject Of Interest</label>
              <input
                type="text"
                placeholder="Regarding Project"
                className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-medium text-gray-700">How may we assist you?</label>
              <textarea
                placeholder="Give us more info..."
                rows={6}
                className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
