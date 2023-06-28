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
