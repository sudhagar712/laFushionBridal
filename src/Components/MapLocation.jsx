import React from "react";

const MapLocation = () => {
  return (
    <section className="px-4 py-10 bg-white mb-[100px]">
      <div className="text-center">
        <h2 className="text-yellow-400    text-3xl md:text-6xl font-cursive text-center mb-12 drop-shadow-md">
          Vists Our Studio
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="La Fusion Bridal Studio Map"
            src="https://www.google.com/maps?q=La%20Fusion%20Bridal%20Studio,%20No.%2093,%201st%20Floor,%20MG%20Road%20Corner%20&%20KBSN%20Kofi%20Bar%20Upstairs,%20Vysial%20St,%20Puducherry,%20605001&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96"
          ></iframe>
        </div>

        <p className="text-center text-gray-900 mt-10 text-md ">
          La Fusion Bridal Studio, No. 93, 1st Floor, MG Road Corner & KBSN Kofi
          Bar Upstairs, Vysial St, Puducherry, 605001
        </p>
      </div>
    </section>
  );
};

export default MapLocation;
