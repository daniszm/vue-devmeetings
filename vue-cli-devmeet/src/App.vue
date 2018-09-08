<template>
  <div id="app">
        <!-- 7. We can use Angular-like double brackets to create an expression -->
        <ProductList :items="sharedState.items" @removeElem="removeElem" @searchElem="searchElem"></ProductList>
        <FormComponent @submit-form="onAddProduct"></FormComponent>
    </div>   
</template>

<script>
import ProductList from './components/ProductList'
import FormComponent from './components/FormComponent'
import axios from 'axios'
import store from './components/store/store';

export default {
  name: "app",
  components: {
    ProductList,
    FormComponent,
    axios
  },
  created() {
    store.fetchProducts();
  },
  data() {
    return {
      sharedState: store.state
    };
  },
  methods: {
    onAddProduct(product) {
      store.addProduct(product);
    },
    removeElem(uuid) {
      store.removeElem(uuid);
    },
    searchElem(searchName) {
      store.findProduct(searchName);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
