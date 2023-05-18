import React, { createContext } from "react";
import { useState } from "react";

export const HeaderContext = createContext();

const Context = (props) => {
  const [questionBankEdit, setQuestionBankEdit] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        questionBankEdit,
        setQuestionBankEdit,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};
export default Context;
