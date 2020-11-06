import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../theme";
import { ThemeBase } from "../../theme/theme";

export interface ManageThemeState {
    status : boolean;
    theme : ThemeBase.Global
}

const manageThemeSlice = createSlice<ManageThemeState,SliceCaseReducers<ManageThemeState>>({
    name : "manageThemeSlice",
    initialState : {
        status : true,
        theme : lightTheme
    },
    reducers : {
        toggleTheme : (state) =>  {
            state.theme = state.status ? darkTheme : lightTheme;
            state.status = !state.status;
        }
    }
})

export const { actions: manageThemeActions, reducer: manageThemeReducer } = manageThemeSlice;
