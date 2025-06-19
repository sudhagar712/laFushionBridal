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
     
      <div className="flex flex-col p-4 mb-3   bg-white   mt-5 shadow-lg  md:p-10  items-center ">
        <Icon className="text-4xl  text-yellow-300" />
        <div className="text-3xl font-semibold text-black">
          {target >= 1000 ? `${count}k+` : `${count}+`}
        </div>
        <div className="text-gray-500 text-[10px] md:text-sm">{label}</div>
      </div>
    </>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-gray-200 md:py-12    md:px-10">
      <hr />
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 px-4 text-center">
        <Counter icon={FaAward} target={10} label="Years of Experience" />
        <Counter icon={FaLeaf} target={100} label="Natural Products" />
        <Counter icon={FaThumbsUp} target={56} label="Satisfied Clients" />
        <Counter icon={FaUserMd} target={5} label="Specialists Team" />
      </div>
    </div>
  );
};

export default StatsSection;
