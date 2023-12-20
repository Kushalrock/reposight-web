import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

interface Difficulty {
  value: string;
  label: string;
}

const difficulties: Difficulty[] = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export default function Difficulty() {
  return (
    <CheckboxGroup className="text-white">
      {difficulties.map((difficulty) => (
        <Checkbox
          key={difficulty.value}
          value={difficulty.value}
          className="text-white"
          color="warning"
        >
          {difficulty.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
