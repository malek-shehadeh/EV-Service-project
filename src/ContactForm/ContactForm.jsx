import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const ContactForm = () => {
  return (
    <div className="pt-24">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 p-4">
            <div className="relative z-10 bg-white p-8 mt-4 sm:mt-0 rounded-lg shadow-md">
              <em className="block text-lg font-medium mb-4">
                Enough about Us. Let’s Talk about Your Charger Project Now.
              </em>
              <div className="text-gray-600 text-sm mb-4"></div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Professional feedback within 8 hours</li>
                <li>Full capabilities to rely on</li>
                <li>Best possible service for you</li>
                <li>Fast delivery in 35-40 days</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-6/12 p-4 relative">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url('../images/bg_mes.jpg')" }}
            ></div>
            <div className="relative z-20 bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-md">
              <div className="flex items-center text-white mb-4">
                <em className="text-xl font-medium">
                  Contact Our
                  <br />
                  Technical Experts
                </em>
              </div>
              <form
                method="post"
                id="email_form"
                action="/inquiryStore"
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="AbbsiyssLPSSIOGCSdgWLqgF2z5FYkhCAcPBXJFL"
                />
                <div className="hidden">
                  <input
                    name="my_name_w7kcNM1xKU7DggfP"
                    type="text"
                    id="my_name_w7kcNM1xKU7DggfP"
                  />
                  <input
                    name="valid_from"
                    type="text"
                    value="eyJpdiI6IktRaktXd1FWaHZpUVpRaDUvVm81RkE9PSIsInZhbHVlIjoiWWRqNUg2REtHcVBjZWh1L0Y3MWtuUT09IiwibWFjIjoiY2UzMDM2NWI2ZWU1YzM1ZDMyZjc3YTMyMDZkYWQzNmY3MmViNDA4OWE2MGEzZjFlZTM2NzQ3MzhlYzFiMjc0MCIsInRhZyI6IiJ9"
                  />
                </div>
                <div className="space-y-4">
                  <input
                    required
                    type="text"
                    name="msg_name"
                    className="block w-full bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none"
                    placeholder="Name *"
                  />
                  <input
                    required
                    type="email"
                    name="msg_email"
                    id="msg_email"
                    className="block w-full bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none"
                    placeholder="Email *"
                  />
                  <input
                    type="text"
                    name="msg_phone"
                    id="msg_phone"
                    className="block w-full bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none"
                    placeholder="Tel/Whatsapp"
                  />
                  <textarea
                    required
                    id="meText"
                    placeholder="Enter product details (such as color, size, materials etc.) and other specific requirements to receive an accurate quote."
                    maxLength="3000"
                    name="msg_content"
                    className="block w-full bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none h-24"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
                >
                  Send Your Inquiry
                </button>
              </form>
              <div className="text-white text-xs mt-4">
                *We respect your confidentiality and all information are
                protected.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
