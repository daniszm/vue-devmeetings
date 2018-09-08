<template>
  <div id="app">
        <!-- 7. We can use Angular-like double brackets to create an expression -->
        <ProductList :items="items" @test="removeElem"></ProductList>
        <FormComponent @submit-form="onSubmit"></FormComponent>
    </div>   
</template>

<script>
import ProductList from './components/ProductList'
import FormComponent from './components/FormComponent'
import axios from 'axios'

export default {
  name: "app",
  components: {
    ProductList,
    FormComponent,
    axios
  },
  async created() {
    this.items = await axios.get("http://api.dataatwork.org/v1/jobs").then(res => res.data);
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    onSubmit(obj) {
        this.items.push(obj);
    },
    addElem() {
      let currentId = this.items[this.items.length - 1].id;
      let newId = currentId + 1;
      const inputObj = {
        id: newId,
        name: this.inputText
      };
      this.items.push(inputObj);
      this.inputText = "";
    },

    removeElem(uuid) {
        this.items = this.items.filter(obj => obj.uuid != uuid);
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
