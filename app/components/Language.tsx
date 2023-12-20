import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

interface Language {
  value: string;
  label: string;
  color?: string;
}

const languages: Language[] = [
  { value: "buenos-aires", label: "C" },
  { value: "sydney", label: "Python" },
  { value: "san-francisco", label: "C++" },
  { value: "london", label: "Java" },
  { value: "tokyo", label: "JavaScript" },
];

export default function Language() {
  return (
    <CheckboxGroup className="text-white">
      {languages.map((language) => (
        <Checkbox
          key={language.value}
          value={language.value}
          className="text-white"
          color="warning"
        >
          {language.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
