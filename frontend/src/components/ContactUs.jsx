import React, { useState } from "react";

// Environment variables for university emails
const AGU_EMAIL = import.meta.env.VITE_AGU_EMAIL;
const MU_PLEVEN_EMAIL = import.meta.env.VITE_MU_EMAIL;
const UTP_SOFIA_EMAIL = import.meta.env.VITE_UTP_EMAIL;
const UMG_EMAIL = import.meta.env.VITE_UMG_EMAIL;

const universities = [
  {
    id: "agricultural-university-plovdiv",
    name: "Agricultural University – Plovdiv",
    email: AGU_EMAIL,
  },
  {
    id: "medical-university-pleven",
    name: "Medical University of Pleven",
    email: MU_PLEVEN_EMAIL,
  },
  {
    id: "utp-sofia",
    name: "University of Telecommunications and Post (UTP), Sofia",
    email: UTP_SOFIA_EMAIL,
  },
  {
    id: "umg-sofia",
    name: "University of Mining and Geology “St. Ivan Rilski”, Sofia",
    email: UMG_EMAIL,
  },
];

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    universityId: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedUniversity = universities.find(
      (uni) => uni.id === formData.universityId
    );

    if (!selectedUniversity) {
      alert("Please select a valid university.");
      return;
    }

    const payload = {
      sender: formData.email,
      receiver_email: selectedUniversity.email,
      subject: `${formData.subject} - ${selectedUniversity.name}`,
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
        {/* University Dropdown */}
        <div>
          <label
            htmlFor="universityId"
            className="block text-gray-700 font-medium mb-1"
          >
            Select University
          </label>
          <select
            id="universityId"
            required
            value={formData.universityId}
            onChange={handleChange}
            className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="" disabled>
              Select University
            </option>
            {universities.map((uni) => (
              <option key={uni.id} value={uni.id}>
                {uni.name}
              </option>
            ))}
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