import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LayoutThemeProvider: React.FC = ({ children }) => {
  const theme = useSelector<RootState>((state) => state.manageTheme.theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default LayoutThemeProvider;
