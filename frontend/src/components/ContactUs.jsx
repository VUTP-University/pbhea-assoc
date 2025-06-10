import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    university: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, university: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      sender: formData.email,
      receiver_email: "karastoqnov.alexandar@gmail.com",
      subject: `${formData.subject} - ${formData.university}`,
      email_body: formData.message,
    };

    const BACKEND_API = import.meta.env.VITE_BACKEND_API;

    try {
      const response = await fetch(`${BACKEND_API}/api/send_email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="mx-auto w-full bg-white rounded-xl shadow-md p-8">
      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Dropdown menu */}
        <div className="flex gap-2 mb-2">
          <select
            id="university"
            required
            value={formData.university}
            onChange={handleSelectChange}
            className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="" disabled>
              Select University
            </option>
            <option value="University of Telecommunications and Post (UTP), Sofia">
              University of Telecommunications and Post (UTP), Sofia
            </option>
            <option value="University of Mining and Geology “St. Ivan Rilski”, Sofia">
              University of Mining and Geology “St. Ivan Rilski”, Sofia
            </option>
            <option value="Medical University of Pleven">
              Medical University of Pleven
            </option>
            <option value="Agricultural University – Plovdiv">
              Agricultural University – Plovdiv
            </option>
          </select>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 font-medium mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          ></textarea>
        </div>

        {/* File upload is ignored for now since backend does not support it */}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
