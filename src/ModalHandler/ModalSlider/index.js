import React from "react";
import { Box } from "@servesall/atoms";
import Slider from "./Slider";

const App = (props) => {
  const { screens, component, screenIndex } = props;
  return (
    <Box>
      {screens.map((screen, index) => (
        <Slider key={screen.id} index={index} active_screen_index={screenIndex}>
          {React.isValidElement(screen[component]) &&
            React.cloneElement(screen[component], {
              ...props,
            })}
          {!React.isValidElement(screen[component]) && screen[component]}
        </Slider>
      ))}
    </Box>
  );
};

export default App;
