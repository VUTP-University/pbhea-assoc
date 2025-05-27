import React from 'react';

const About = () => {
  return (
    <div className="bg-white w-full p-8 rounded-2xl shadow-lg text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <img
          src="src/assets/img/logo_pbhea.png"
          alt="PBHEA Logo"
          className="w-full mx-auto object-contain rounded-lg"
        />
        <div className="text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            The Association “Positioning Bulgarian Higher Education Abroad” (PBHEA) was established with the mission to promote and enhance the prestige and quality of Bulgarian higher education on the international stage.
            <br /><br />
            We unite the efforts of leading Bulgarian higher education institutions and their partners to:
            <br />• Build a positive and recognizable image of Bulgaria as an educational destination;
            <br />• Support the export of Bulgarian higher education through international programs and initiatives;
            <br />• Facilitate the attraction of international students and the creation of academic partnerships;
            <br />• Actively participate in national and European policies in the field of education and science.
            <br /><br />
            The association is an independent and expert platform serving as a bridge between higher education, government institutions, business, and international partners.
            Our vision is for Bulgaria to become a global leader in accessible, high-quality, and innovative higher education.
          </p>
          <p className="mt-6 text-gray-700 text-2xl font-semibold">Join us in this mission!</p>
        </div>
      </div>
                {/* Contact Info */}
                <div className="mt-6 text-gray-800 text-md leading-relaxed bg-gray-50 p-4 rounded-md shadow">
            <p className="text-lg font-medium">📬 Need Assistance?</p>
            <p>For questions or guidance, contact us at:</p>
            <p>📧 <a href="mailto:admissions@utp.bg" className="text-blue-700 hover:underline">admissions@utp.bg</a></p>
            <p>📞 +359 2 123 4567</p>
          </div>
    </div>
    
  );
};

export default About;