import React, { useReducer } from "react";
const AccordionContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "isActive":
      return {
        ...state,
        isActive: action.data,
      };
    case "isActiveHeight":
      return {
        ...state,
        isActiveHeight: action.data,
      };
    case "setScroller":
      return {
        ...state,
        scrollRef: action.data,
      };
    default:
      return state;
  }
}

const AccordionProvider = ({ children, value }) => {
  const [{ isActive, isActiveHeight, scrollRef }, dispatch] = useReducer(
    reducer,
    {
      isActive: false,
      isActiveHeight: false,
      scrollRef: false,
    }
  );

  return (
    <AccordionContext.Provider
      value={{
        ...value,
        isActive,
        isActiveHeight,
        scrollRef,
        dispatch,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

const useAccordionContext = () => {
  return React.useContext(AccordionContext);
};

export { AccordionContext, AccordionProvider, useAccordionContext };
