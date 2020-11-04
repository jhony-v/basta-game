import "styled-components/native"
import { ThemeBase } from "./theme/theme"

declare module "styled-components/native" {
    export interface DefaultTheme extends ThemeBase.Global {}
}