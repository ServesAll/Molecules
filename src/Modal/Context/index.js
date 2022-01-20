import React, { useReducer } from "react";
const ModalContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "isModalActive":
      return {
        ...state,
        isModalActive: action.data,
      };
    default:
      return state;
  }
}

const ModalProvider = ({ children, value }) => {
  const [{ isModalActive }, dispatch] = useReducer(reducer, {
    isModalActive: false,
  });

  return (
    <ModalContext.Provider
      value={{
        ...value,
        isModalActive,
        dispatch,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  return React.useContext(ModalContext);
};

export { ModalContext, ModalProvider, useModalContext };
