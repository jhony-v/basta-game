import { lightTheme } from ".";

export namespace ThemeBase {
    export type Global = typeof lightTheme;
    export type ColorsTypes = readonly (keyof typeof lightTheme.colors)
}