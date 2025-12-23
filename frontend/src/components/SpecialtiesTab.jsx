import React, { useEffect, useState } from 'react';


const SpecialtiesTab = ({ level }) => {
  const [specialties, setSpecialties] = useState([]);

  const BACKEND_API = import.meta.env.VITE_BACKEND_API;

  useEffect(() => {
    fetch(`${BACKEND_API}/api/programs`)
  .then(async res => {
    const text = await res.text();   // <-- get raw text
    console.log("Raw response:", text);
    try {
      const data = JSON.parse(text); // try parsing manually
      setSpecialties(data[level] || []);
    } catch(e) {
      console.error("JSON parse failed:", e);
    }
  })
  .catch(err => console.error("Fetch error:", err));
  }, [level]);

  return (
    <div className="space-y-2">
      {specialties.map((spec, idx) => (
        <div key={idx} className="p-4 rounded shadow btn_primary">
          <a
            href={spec.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline text-decoration-none"
          >
            {spec.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SpecialtiesTab;