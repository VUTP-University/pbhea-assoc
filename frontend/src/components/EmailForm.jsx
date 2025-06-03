import React from 'react';

const Email = () => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">
      
      <form className="space-y-5">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />
        </div>

      
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Subject of your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            
          ></textarea>
        </div>

        <div>
          <label htmlFor="file" className="block text-gray-700 font-medium mb-1">Attach File</label>
          <input
            type="file"
            id="file"
            className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
            
          />
        </div>

        
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Email;
