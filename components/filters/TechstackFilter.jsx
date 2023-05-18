import React from "react";

import DropDownComponent from "../CandidatesDropdown/DropDownComponent";

const techSelectItems = [
  {
    label: "React",
    key: "1",
    checked: false,
  },
  {
    label: "Js",
    key: "2",
    checked: false,
  },
  {
    label: "Angular",
    key: "3",
    checked: false,
  },
];

const TechstackFilter = ({ overlayClassName }) => {
  return (
    <>
      <h5>Techstack </h5>
      <DropDownComponent
        placeHolder={"React JS"}
        itemDropDown={techSelectItems}
        overlayClassName={overlayClassName}
      />
    </>
  );
};

export default TechstackFilter;
