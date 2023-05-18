import React from "react";

import DropDownComponent from "../CandidatesDropdown/DropDownComponent";

const vacancyItems = [
  {
    label: "Front end developer",
    key: "1",
    checked: false,
  },
  {
    label: "Back end developer",
    key: "2",
    checked: false,
  },
  {
    label: "Java developer",
    key: "3",
    checked: false,
  },
  {
    label: "Node developer",
    key: "4",
    checked: false,
  },
];

const VacancyFilter = ({ overlayClassName }) => {
  return (
    <>
      <h5>Vacancy </h5>
      <DropDownComponent
        placeHolder={"Select vacancy"}
        itemDropDown={vacancyItems}
        overlayClassName={overlayClassName}
      />
    </>
  );
};

export default VacancyFilter;
