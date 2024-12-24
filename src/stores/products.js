import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),

  actions: {
    fetchDataFromAPI() {
      fetch(' https://fakestoreapi.com//products ')
        .then((res) => res.json())
        .then((json) => (this.products = json))
    },
  },
})
