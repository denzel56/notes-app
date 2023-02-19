import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  noteItem: {}
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    noteState: (state, action) => {
      state.noteItem = {
        ...action.payload,
      };
    }
  },
});

export const { noteState } = noteSlice.actions;

export const noteStateSelector = (state: any) => state.note.noteItem;

export default noteSlice.reducer;
