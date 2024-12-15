// import React from 'react';

// const AboutMe = () => {
//   return (
//     <div className="flex items-center justify-center  bg-gray-100">
//       <div className="max-w-[1280px] w-full px-4 py-6 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl mb-6 uppercase tracking-wider text-[19px] font-normal underline underline-offset-[9px] font-poppins text-center">About Me</h1>
//         {/* <p className="text-lg leading-relaxed">
//           I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
//           <br /><br />
//           Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more than willing to follow my fascinations wherever they take me. I’m a passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead, I have an almost impulsive need to act on them.
//           <br /><br />
//           You can read more about my biography, experience, skills, education, and much more in the PDF attached below:
//         </p> */}
//         {/* 
// <p className="text-lg leading-relaxed">
//   I’m Kajal, a B.Tech graduate in Information Technology from GNDEC, with a passion for front-end development and a focus on React. 
//   <br /><br />
//   Eager to embark on my career as a React Developer, I am driven by a love for coding and a commitment to continuous learning. 
//   <br /><br />
//   My goal is to craft engaging and user-friendly web experiences, and I am excited to bring my skills and enthusiasm to new challenges. 
//   <br /><br />
//   I am ready to contribute to impactful projects and grow in the dynamic field of web development.
// </p> */}

//         <p className="text-lg leading-relaxed">
//           I’m Kajal, a B.Tech graduate in Information Technology from GNDEC, passionate about front-end development with a particular focus on React.
//           <br /><br />
//           As I embark on my journey into the tech industry, I’m eager to leverage my skills in coding and my enthusiasm for continuous learning. My primary goal is to design and build engaging, user-friendly web experiences that make a difference.
//           <br /><br />
//           Driven by a love for creative problem-solving and a desire to tackle new challenges, I am excited about the opportunity to contribute to impactful projects and grow as a React Developer.
//           <br /><br />
//           I look forward to applying my skills and energy to create innovative solutions and deliver high-quality work in the ever-evolving field of web development.
//         </p>


//       </div>
//     </div>
//   );
// }

// export default AboutMe;

// src/components/aboutMe.jsx


import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[1280px] w-full px-4 py-6 min-h-[70vh] bg-inherit"> {/* Updated: Use 'bg-inherit' to inherit the background color */}
        <h1 className="text-2xl mb-6 uppercase tracking-wider text-[19px] font-normal underline underline-offset-[9px] font-poppins text-center">
          About Me
        </h1>
        <p className="text-lg leading-relaxed">
          I’m Kajal, a B.Tech graduate in Information Technology from GNDEC, passionate about front-end development with a particular focus on React.
          <br /><br />
          As I embark on my journey into the tech industry, I’m eager to leverage my skills in coding and my enthusiasm for continuous learning. My primary goal is to design and build engaging, user-friendly web experiences that make a difference.
          <br /><br />
          Driven by a love for creative problem-solving and a desire to tackle new challenges, I am excited about the opportunity to contribute to impactful projects and grow as a React Developer.
          <br /><br />
          I look forward to applying my skills and energy to create innovative solutions and deliver high-quality work in the ever-evolving field of web development.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
