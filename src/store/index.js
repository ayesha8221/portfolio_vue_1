<<<<<<< HEAD
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: null,
    product: null,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product))
    },   
  },
});
=======
import { createStore } from 'vuex'; 

export default createStore({
  state: {
    categories: null,
    category: null,
  },
  mutations: {
    setCategories: (state, categories) => {
      state.categories = categories;
    },
    setCategory: (state, category) => {
      state.category = category;
    },
  },
  actions: {
    getCategories: async (context) => {
      fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((categories) => context.commit("setCategories", categories));
    },
    getCategory: async (context, id) => {
      fetch("http://localhost:3000/categories/" + id)
      .then((res) => res.json())
      .then((category) => context.commit("setCategory", category))
    }
},
});
>>>>>>> bd7d5ba2cf1295672b6a910625452f725bb14369
