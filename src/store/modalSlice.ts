import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  isModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalState: (state) => {
      state.isModal = !state.isModal;
    }
  },
});

export const { modalState } = modalSlice.actions;

export const modalStateSelector = (state: any) => state.modal.isModal;

export default modalSlice.reducer;
