import { createSlice } from "@reduxjs/toolkit";

export const menuslisteSlice = createSlice({
  name: "listemenus",
  initialState: {
    menusData: [],
  },
  reducers: {
    getListeMenus: (state, { payload }) => {
      state.menusData = payload;
    },
    editListeMenus: (state, { payload }) => {
      state.menusData = state.menusData.map((menucompoReducer) => {
        if (menu._id === payload[1]) {
          return {
            ...menu,
            prefNbJ: payload[0].prefNbJ,
            prefNbMeal: payload[0].prefNbMeal,
            prefDayOne: payload[0].prefDayOne,
            menuJ: payload[0].menuJ,
          };
        } else {
          return recipe;
        }
      });
    },
    deleteListeMenu: (state, { payload }) => {
      state.menusData = state.menusData.filter((menu) => menu._id !== payload);
    },
  },
});

export const { getListeMenus, deleteListeMenu, editListeMenu } =
  menuslisteSlice.actions;
export default menuslisteSlice.reducer;
