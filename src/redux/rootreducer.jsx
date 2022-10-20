import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkMode: false,
  users: [
    {
      id: 1,
      username: "meshu",
      fname: "Melashu",
      img: "https://images.unsplash.com/photo-1665504953014-7c0cf6c384e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      lname: "Amare",
      email: "mehsu102@gmail.com",
      phone: "+251980631983",
      status: "approved",
    },
    {
      id: 2,
      username: "Bini",
      fname: "Biniam",
      img: "https://plus.unsplash.com/premium_photo-1661774723035-de53c21c9838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      lname: "Ewentu",
      email: "bini@gmail.com",
      phone: "+251980631983",
      status: "pending",
    },
    {
      id: 3,
      username: "Haymi",
      fname: "Haymanot",
      phone: "+251980631983",

      lname: "Addis",
      img: "https://img.freepik.com/free-photo/excited-beautiful-girl-smiling-pointing-fingers-upper-left-corner-looking-pleased-logo_1258-19008.jpg?w=740&t=st=1665602757~exp=1665603357~hmac=abf578db01e4f8d4b9d9ef58611e69a3bd20c64055220655352c8a8d8c40df94",
      email: "haymi@gmail.com",
      status: "approved",
    },
    {
      id: 4,
      username: "mekedi",
      phone: "+251980631983",

      fname: "Mekedes",
      lname: "Birara",
      img: "https://images.unsplash.com/photo-1665546142211-383c4a582142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      email: "mekedi@gmail.com",
      status: "pending",
    },
    {
      id: 0,
      username: "Biza",
      phone: "+251980631983",
      fname: "Bezawit",
      img: "https://images.unsplash.com/photo-1665546142211-383c4a582142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",

      lname: "Negess",
      email: "Biza@gmail.com",
      status: "pending",
    },
    {
      id: 5,
      username: "sami",
      fname: "Samuel",
      phone: "+251980631983",
      img: "https://images.unsplash.com/photo-1665546142211-383c4a582142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",

      lname: "Godadaw",
      email: "sami@gmail.com",
      status: "approved",
    },
    {
      id: 6,
      username: "Atsi",
      img: "https://images.unsplash.com/photo-1665546142211-383c4a582142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",

      fname: "Atsdweyen",
      lname: "Endriyas",
      email: "atsi@yahoo.com",
      phone: "+251980631983",
      status: "pending",
    },
    {
      id: 7,
      username: "tesfa",
      fname: "Tesefahun",
      phone: "+251980631983",
      lname: "Amare",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      email: "tesefa@yahoo.com",
      status: "pending",
    },
    {
      id: 8,
      username: "Nini",
      fname: "Ninisha",
      lname: "Solomon",
      phone: "+251980631983",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      email: "nini@yahoo.com",
      status: "approved",
    },
    {
      id: 9,
      username: "sol",
      fname: "Solomon",
      lname: "Alebachew",
      phone: "+251980631983",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      email: "sol@yahoo.com",
      status: "pending",
    },
  ],

  products: [
    {
      id: "0001",
      product: "Shoe",
      model: "V35",
      selling: "1520 Br",
      purchase: "1200 Br",
      quantity: "123",
      exDate: "23 October,2023",
      purchaseDate: "15 October,2019",
      status: "approved",
    },
    {
      id: "0002",
      product: "Bakini",
      model: "V35",
      selling: "1520 Br",
      purchase: "1200 Br",
      quantity: "123",
      exDate: "23 October,2023",
      purchaseDate: "15 October,2019",
      status: "pending",
    },
    {
      id: "0003",
      product: "Viona",
      model: "V35",
      selling: "1520 Br",
      purchase: "1200 Br",
      quantity: "123",
      exDate: "23 October,2023",
      purchaseDate: "15 October,2019",
      status: "approved",
    },
    {
      id: "0004",
      product: "Stokini",
      model: "V35",
      selling: "1520 Br",
      purchase: "1200 Br",
      quantity: "123",
      exDate: "23 October,2023",
      purchaseDate: "15 October,2019",
      status: "pending",
    },
    {
      id: "0005",
      product: "Monilak",
      model: "V35",
      selling: "1520 Br",
      purchase: "1200 Br",
      quantity: "123",
      exDate: "23 October,2023",
      purchaseDate: "15 October,2019",
      status: "pending",
    },
    {
      id: "0006",
      product: "Evaliti",
      model: "V35",
      selling: "1520 Br",
      purchase: "1200 Br",
      quantity: "123",
      exDate: "23 October,2023",
      purchaseDate: "15 October,2019",
      status: "approved",
    },
  ],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    deleteUser: (state, { payload }) => {
      const filteredUser = state.users.filter((user) => user.id !== payload);
      state.users = filteredUser;
    },
    deleteProduct: (state, { payload }) => {
      const filteredProducts = state.products.filter(
        (product) => product.id !== payload
      );
      state.products = filteredProducts;
    },
    darkMode: (state) => {
      state.darkMode = true;
    },
    lightMode: (state) => {
      state.darkMode = false;
    },
    toggle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

const getUsers = (state) => state.admin.users;
const getProducts = (state) => state.admin.products;
const getDarkMode = (state) => state.admin.darkMode;
export const { addUser, addProduct,deleteProduct, deleteUser, darkMode, lightMode, toggle } =
  adminSlice.actions;
export { getUsers, getProducts, getDarkMode };
export default adminSlice.reducer;
