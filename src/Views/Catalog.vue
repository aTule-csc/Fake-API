<template>
<div class="product-list">
  <div
  class="product"
  v-for="product in Store.products"
  :key="product.id"
  >
    <img :src="product.image">
    <h2> {{ product.title }}</h2>
    <p>{{ product.description}}</p>
    <p>{{ product.price}}</p>
    <p>{{ product.category}}</p>
  </div>
</div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent ({
    name: "Catalog"
  })
</script>
<script setup>
  import { onMounted } from 'vue';
  import {productsStore} from "@/stores/products";

  const Store = productsStore()



  onMounted(() =>{

    Store.fetchDataFromAPI()
  })
</script>
