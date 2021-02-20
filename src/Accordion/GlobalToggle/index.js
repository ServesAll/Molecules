import React, {useReducer} from 'react';
const AccordionContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'isActive':
      return {
        isActive: action.data,
      };
    case 'isActiveHeight':
      return {
        isActiveHeight: action.data,
      };
    default:
      return state;
  }
}

const AccordionProvider = ({children, value}) => {
  const [{isActive, isActiveHeight}, dispatch] = useReducer(reducer, {
    isActive: false,
    isActiveHeight: false,
  });

  return (
    <AccordionContext.Provider
      value={{
        ...value,
        isActive,
        isActiveHeight,
        dispatch,
      }}>
      {children}
    </AccordionContext.Provider>
  );
};

const useAccordionContext = () => {
  return React.useContext(AccordionContext);
};

export {AccordionContext, AccordionProvider, useAccordionContext};
