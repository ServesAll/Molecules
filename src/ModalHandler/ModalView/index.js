import React from "react";
import { Box } from "@servesall/atoms";

const App = (props) => {
  const { screens, component, screenIndex } = props;

  if (!screens) return null;
  return (
    <Box>
      {screens.map((screen, index) => (
        <Box key={screen.id} index={index} active_screen_index={screenIndex}>
          {React.isValidElement(screen[component]) &&
            React.cloneElement(screen[component], {
              ...props,
            })}
          {!React.isValidElement(screen[component]) && screen[component]}
        </Box>
      ))}
    </Box>
  );
};

export default App;
