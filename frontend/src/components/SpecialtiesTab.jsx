import React, { useEffect, useState } from 'react';


const SpecialtiesTab = ({ level }) => {
  const [specialties, setSpecialties] = useState([]);

  const BACKEND_API = import.meta.env.VITE_BACKEND_API;

  useEffect(() => {
    fetch(`${BACKEND_API}/api/programs`)
      .then(res => res.json())
      .then(data => setSpecialties(data[level] || []));
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