import {createSlice} from "@reduxjs/toolkit";
import {presets} from "./presets";

export const activeThemeSlice = createSlice({
    name: "activeTheme",
    initialState: {
        value: 1,
    },
    reducers: {
        increment: (state) => {
            state.value = (state.value + 1) % presets.length
        }
    }
})

export const { increment } = activeThemeSlice.actions
export default activeThemeSlice.reducer