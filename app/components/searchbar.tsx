// import React from "react";

// const Searchbar = () => {
//   return (
//     <div className="mt-8" >
//       {" "}
//       <div className="relative flex items-center w-full">
//         <input
//           type="text"
//           placeholder="Search"
//           className="rounded-full py-2 pl-8 pr-14 lg:w-[55rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black-500"
//         />
//         <div className="absolute inset-y-0 right-0 flex items-center pr-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10 17l5-5m0 0l-5-5m5 5h-8"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;

// import React, { useState } from "react";

// const Searchbar = () => {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <div className="mt-8 relative">
//       <div
//         className={`flex items-center w-full transition-transform ${
//           isFocused ? "scale-110" : "scale-100"
//         }`}
//       >
//         <input
//           type="text"
//           placeholder="Search"
//           className={`rounded-full py-2 pl-8 pr-14 lg:w-[55rem] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black-500 backdrop-filter ${
//             isFocused ? "backdrop-blur-md" : ""
//           }`}
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//         />
//         <div className="absolute inset-y-0 right-0 flex items-center pr-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10 17l5-5m0 0l-5-5m5 5h-8"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;

import React, { useState } from "react";


const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="mt-8 relative flex flex-row ">
      <div
        className={`flex items-center w-full transition-transform ${
          isFocused ? "scale-110" : "scale-100"
        }`}
      >
        <input
          type="text"
          placeholder="Search"
          className={`rounded-md py-2 pl-8 pr-14 lg:w-[50rem] bg-white focus:outline-none focus:ring-2 focus:ring-black-500`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 17l5-5m0 0l-5-5m5 5h-8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
