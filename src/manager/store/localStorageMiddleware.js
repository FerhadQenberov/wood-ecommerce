const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
   
    if (action.type === 'user/addCard' || action.type==='user/removeCard') {

      localStorage.setItem('carts', JSON.stringify(store.getState().user.carts));
    }
    else if (action.type === 'blogForm/setBlog' || action.type==='blogForm/removeBlog' || action.type==='blogForm/update')  {

      localStorage.setItem('cart', JSON.stringify(store.getState().blogForm.cart));
   
  
    }
    return result;
  };
  
  export default localStorageMiddleware;