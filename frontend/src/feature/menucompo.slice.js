import { createSlice } from "@reduxjs/toolkit";

export const menucompoSlice = createSlice({
  name: "compo",
  initialState: {
    compoListe: [],
  },
  reducers: {
    setCompo: (state, { payload }) => {
      state.compoListe = payload;
    },
    createCompo: (state, { payload }) => {
      state.compoListe.push(payload);
    },
    resetCompo: (state, {}) => {
      state.compoListe = [];
    },
  },
});

export const { setCompo, createCompo, resetCompo } = menucompoSlice.actions;
export default menucompoSlice.reducer;
