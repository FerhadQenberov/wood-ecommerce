import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};


export const BlogAdd = createSlice({
  name: 'blogForm',
  initialState,
  reducers: {
    setBlog: (state, action) => {
      const { id, name, text, img } = action.payload;
      state.cart.push({ id, name, text, img });
    },
    removeBlog: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    update: (state, action) => {
    const {id, name, text, img}=action.payload;
   
    const fid=state.cart.find(f=>f.id==id)
   if (fid) {
    fid.id=id
    fid.name=name
    fid.text=text
    fid.img=img
    
   }
     

   
    },
  },
});

export const { setBlog, removeBlog, update } = BlogAdd.actions;
export default BlogAdd.reducer;
