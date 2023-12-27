import React from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

interface Domain {
  value: string;
  label: string;
}

const domains: Domain[] = [
  { value: "web-development", label: "Web Dev" },
  { value: "data-science", label: "Data Science" },
  { value: "mobile-apps", label: "Mobile Apps" },
  { value: "cloud-computing", label: "Cloud Comp" },
  { value: "artificial-intelligence", label: "AI" },
];

export default function Domain() {
  return (
    <CheckboxGroup className="text-white">
      {domains.map((domain) => (
        <Checkbox
          key={domain.value}
          value={domain.value}
          className="text-white"
          color="warning"
        >
          {<span className="text-white">{domain.label}</span>}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
