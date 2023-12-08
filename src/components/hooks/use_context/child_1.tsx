import { useContext } from "react";
import { DarkThemeContext } from "./parent";

export const Child1: React.FC = () => {
  const darkTheme = useContext(DarkThemeContext);
  const theme = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={theme}>Child 1</div>;
};
