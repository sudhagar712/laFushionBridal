import React, { useEffect, useState } from "react";
import { FaAward, FaLeaf, FaThumbsUp, FaUserMd } from "react-icons/fa";


const Counter = ({ icon: Icon, target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // in ms
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
     
      <div className="flex flex-row bg-yellow-50 p-4 items-center text-center space-y-2">
        <Icon className="text-4xl text-amber-900" />
        <div className="text-3xl font-semibold text-black">
          {target >= 1000 ? `${count}k+` : `${count}+`}
        </div>
        <div className="text-gray-500 text-sm">{label}</div>
      </div>
    </>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-[#f8f2ef] md:py-12">
      <div className="max-w-10xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
        <Counter icon={FaAward} target={10} label="Years of Experience" />
        <Counter icon={FaLeaf} target={100} label="Natural Products" />
        <Counter icon={FaThumbsUp} target={56} label="Satisfied Clients" />
        <Counter icon={FaUserMd} target={5} label="Specialists Team" />
      </div>
    </div>
  );
};

export default StatsSection;
