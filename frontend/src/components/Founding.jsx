import React from "react";

const cards = [
  {
    title: "University of Telecommunications and Post (UTP), Sofia",
    bullets: [
      "A modern university specializing in digital leadership, cybersecurity, logistics, and smart technologies.",
      "Actively involved in innovation, entrepreneurship, and cooperation with business and government.",
      "Known for international partnerships and EU project participation.",
    ],
    image: "/src/assets/img/logo_utp.png",
    url: "https://www.utp.bg/en/",
  },
  {
    title: "University of Mining and Geology “St. Ivan Rilski”, Sofia",
    bullets: [
      "A respected technical university with expertise in mining, geology, energy, and environmental protection.",
      "Pioneer in geoscience education and applied research with a growing global footprint.",
      "Focused on sustainable development and digital transformation in resource management.",
    ],
    image: "/src/assets/img/logo_mgu.png",
    url: "https://www.mgu.bg/en/",
  },
  {
    title: "Medical University of Pleven",
    bullets: [
      "One of the most advanced medical universities in Southeast Europe.",
      "Offers English-taught programs in Medicine and Healthcare attracting international students.",
      "Recognized for its robotic surgery training center and digital health research.",
    ],
    image: "/src/assets/img/logo_mu.png",
    url: "https://www.mu-pleven.bg/index.php/en/",
  },
  {
    title: "Agricultural University – Plovdiv",
    bullets: [
      "The leading agricultural higher education institution in Bulgaria.",
      "Strong emphasis on biotechnology, agribusiness, climate-smart agriculture, and food innovation.",
      "Promotes international mobility, green transition, and sustainable food systems.",
    ],
    image: "/src/assets/img/logo_au.png",
    url: "https://www.au-plovdiv.bg/en/",
  },
];

const Founding = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01] bg-white"
        >
          <div className="flex flex-row justify-center mt-4">
            <img
              src={card.image}
              alt={card.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-center mb-3 secondary_text">
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none secondary_text"
              >
                {card.title}
              </a>
            </h3>
            <ul className="list-disc list-inside info_text text-justify text-sm space-y-1">
              {card.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Founding;
