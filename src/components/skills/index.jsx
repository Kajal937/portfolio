import React from 'react';
import { data } from '@/utils/data/data';

const Skills = () => {
  return (
    <div className="max-w-[1280px] w-full mx-auto p-4">
      <h1 className="text-2xl mb-6 uppercase tracking-wider text-[19px] font-normal underline underline-offset-[9px] font-poppins text-center">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.map((v, index) => (
          <div key={index} className="border border-solid border-gray-100 py-5 px-4 flex flex-col items-center">
            <img className="max-w-[50px] mx-auto" src={v?.img} alt={v?.h2} />
            <h2 className="mt-2 text-center">{v?.h2}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
