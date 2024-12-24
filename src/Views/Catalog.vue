<template>
  <div class="product-list">
    <div class="product" v-for="product in Store.products" :key="product.id">
      <img class="image" :src="product.image" />
      <h2>{{ product.title }}</h2>
      <p>Desc: {{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Rating: {{ product.rating.rate }} <img class="star" src="@/assets/star-icon.svg" /></p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Catalog',
})
</script>
<script setup>
import { onMounted } from 'vue'
import { productsStore } from '@/stores/products'

const Store = productsStore()

onMounted(() => {
  Store.fetchDataFromAPI()
})
</script>

<style scoped>
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product {
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 14px 1px #d1d1d1;
}
.product:hover {
  background-color: #f3f3f3;
}
.image {
  width: 70%;
}
.star {
  width: 13px;
}
</style>
