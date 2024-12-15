// import React from 'react';

// const CardProjects = () => {
//   const projectData = [
//     {
//       title: 'Project 1',
//       description: 'A brief description of Project 1.',
//       image: '/images/img1.png',
//       link: 'https://plumbing-seven-mu.vercel.app/',
//     },
//     {
//       title: 'Project 2',
//       description: 'A brief description of Project 2.',
//       image: 'https://via.placeholder.com/600x400',
//       link: 'https://yourprojectlink.com/project2',
//     },
//     // Add more projects as needed
//   ];

//   return (
//     <>
//       <div className="max-w-[1280px] w-full mx-auto">
//       <div className="">
//         <h1 className="text-3xl font-bold mb-6">My Projects</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projectData.map((project, index) => (
//             <div key={index} className="">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 object-cover "
//               />

//                 <a
//                   href={project.link}
//                   className=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >

//                 </a>


//               <div className="p-46 flex items-center justify-between py-[13px] px-[4px] bg-[#F0F0F0]">
//                 <div className="">
//                 <h2 className="text-xl font-semibold">{project.title}</h2>
//                 <p className="text-gray-600 mt-2">{project.description}</p>
//                 </div>
//                 <div className="">
//                     <button className='text-white  bg-[#1E3A8A] px-4 py-2 rounded-full text-lg font-semibold'>View</button>
//                 </div>
//               </div>


//             </div>

//           ))}
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default CardProjects;


import React from 'react';

const CardProjects = () => {


  const projectData = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      image: '/images/img1.png',
      link: 'https://plumbing-seven-mu.vercel.app/',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      image: 'https://via.placeholder.com/600x400',
      link: 'https://yourprojectlink.com/project2',
    },
    {
      title: "",
      description: "",
      image: '',
      link: '',
    },
    {
      title: "",
      description: "",
      image: '',
      link: '',
    },
    {
      title: "",
      description: "",
      image: '',
      link: '',
    },
    {
      title: "",
      description: "",
      image: '',
      link: '',
    },
    {
      title: "",
      description: "",
      image: '',
      link: '',
    },
    {
      title: "",
      description: "",
      image: '',
      link: '',
    },
  ];



  return (
    <div className="max-w-[1280px] w-full mx-auto">
      <div>
        <h1 className="text-2xl mb-6 uppercase tracking-wider text-[19px] font-normal underline underline-offset-[9px] font-poppins text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="text-2xl text-white font-bold mb-4">{project.title}</h2>
                <a
                  href={project.link}
                  className="text-white bg-[#1E3A8A] px-6 py-2 rounded-full text-lg font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
