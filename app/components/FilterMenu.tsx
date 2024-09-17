// import React from "react";
// import { Accordion, AccordionItem } from "@nextui-org/react";
// import Language from "./Language";
// import Difficulty from "./Difficulty";
// import Domain from "./Domain";
// interface AppProps {}

// const FilterMenu: React.FC<AppProps> = () => {
//   return (
//     <Accordion
//       variant="shadow"
//       selectionMode="multiple"
//       className="w-[210px] absolute left-6 top-24 bg-[#3c3c3c] text-white "
//     >
//       <AccordionItem
//         key="1"
//         aria-label="Accordion 1"
//         className="w-[175px] text-white"
//         title="Language"
//       >
//         <Language></Language>
//       </AccordionItem>
//       <AccordionItem
//         key="2"
//         aria-label="Accordion 2"
//         className="w-[175px] text-red-500 "
//         title="Difficulty"
//       >
//         <Difficulty></Difficulty>
//       </AccordionItem>
//       <AccordionItem
//         key="3"
//         aria-label="Accordion 3"
//         className="w-[175px] text-white"
//         title="Domain"
//       >
//         <Domain></Domain>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default FilterMenu;

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Language from "./Language";
import Difficulty from "./Difficulty";
import Domain from "./Domain";

interface AppProps {
  className?: string;
}

const FilterMenu: React.FC<AppProps> = ({ className }) => {
  return (
    <Accordion
      variant="shadow"
      selectionMode="multiple"
      className={`w-[210px] ${className || ""} bg-[#3c3c3c] text-white`}
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        className="w-[175px] text-white"
        title={<span className="text-white">Language</span>}
      >
        <Language />
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        className="w-[175px] text-white "
        title={<span className="text-white">Difficulty</span>}
      >
        <Difficulty />
      </AccordionItem>
    
    </Accordion>
  );
};

export default FilterMenu;
