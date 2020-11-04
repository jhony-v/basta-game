import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../theme";

const manageThemeSlice = createSlice({
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

const { actions, reducer } = manageThemeSlice;

export const manageThemeReducer = reducer;
export const manageThemeActions = actions;
