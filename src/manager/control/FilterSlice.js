import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'formFilter',
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = formSlice.actions;
export const formReducer = formSlice.reducer;

export default formSlice; // Slice'ı dışa aktarıyoruz
