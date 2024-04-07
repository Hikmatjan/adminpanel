import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    authModal: false,
  },
  reducers: {
    setauthModal(state) {
      state.authModal = !state.authModal;
    },
  },
});
export default ModalSlice.reducer;
export const { setauthModal } = ModalSlice.actions;
