import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalAmount: 0,
  totalQty: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const isItemExist = state.carts.find((item) => item.id === newItem.id);
      if (isItemExist) {
        const tempCart = state.carts.map((item) => {
          if(item.id === newItem.id){
            let tempQty = item.quantity + newItem.quantity;
            let tempTotalPrice = tempQty * item.sale_price;
            return{
              ...item,quantity: tempQty, totalPrice: tempTotalPrice
            }
          }else{
            return item;
          }
        });
        state.carts = tempCart;
      } else {
       state.carts.push(newItem);
      }
    },
    removeFromCart: (state,action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload.id);
      state.carts = tempCart;
    },
    clearCart : (state) => {
      state.carts = [];
    },
    getCartTotal:(state) => {
      state.totalAmount = state.carts.reduce((cartTotal,cartItem) => {
        return cartTotal += Number(cartItem.totalPrice);
      },0)
    },
    getTotalQty:(state) => {
      state.totalQty = state.carts.reduce((totalQty,item) => {
        return totalQty += Number(item.quantity);
      },0)
    },
    toggleQuantity : (state,action) => {
      const tempCart = state.carts.map((item) => {
        if(item.id === action.payload.id){
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;
          if(action.payload.type === "INC"){
            tempQty++;
            tempTotalPrice = tempQty * item.sale_price;
          }
          if(action.payload.type === "DEC"){
            tempQty--;
            if(tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.sale_price;
          }
          return {
            ...item,
            quantity: tempQty,
            totalPrice: tempTotalPrice
          }
        }
        else{
          return item;
        }
      });
      state.carts = tempCart;
    }
  },
});

export const { addToCart,removeFromCart,clearCart,toggleQuantity, getCartTotal, getTotalQty } = cartSlice.actions;
export default cartSlice.reducer;
