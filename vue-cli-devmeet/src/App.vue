<template>
  <div id="app">
   <!-- 1. Here we have some content -->
    <h1>Vue.js</h1>

    <p>is ready to start an adventure</p>

    <!-- 6. If element matches the selector we added, Vue will create a binding -->
    <div id="app">
        <!-- 7. We can use Angular-like double brackets to create an expression -->
        <div v-for="elem in items" :key="elem.id">
            <p style="display: inline-block">{{ elem.name }}</p> 
            <button style="display: inline-block" @click="removeElem(elem.id)">X</button>
        </div>
        <form @submit.prevent="onSubmit()">
          <!-- <button @click="addElem()">Add</button> -->
          <label>Your:</label>
          <input type="text" name="productName" v-model="newProduct.name" v-validate="'required|min:4'">
          <div v-show="errors.has('productName')">
            {{errors.first('productName')}}
          </div>

          <button>Add</button>
        </form>
    </div>  
  </div>  
</template>

<script>
import uuid from 'uuid/v4';

export default {
  name: "app",
  data() {
    return {
      items: [
        {
          id: 0,
          name: "Nazwa 1"
        },
        {
          id: 1,
          name: "Nazwa 2"
        },
        {
          id: 2,
          name: "Nazwa 3"
        }
      ],
      newProduct: {
        name: ''
      }
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.items.push({
          id: uuid(),
          ...this.newProduct
        });
        this.newProduct.name = "";
        this.validator.reset();
    })
    },

    addElem() {
      let currentId = this.items[this.items.length - 1].id;
      let newId = currentId + 1;
      const inputObj = {
        id: newId,
        name: this.inputText
      };
      console.log(inputObj);
      this.items.push(inputObj);
      this.inputText = "";
    },

    removeElem(id) {
      this.items = this.items.filter(obj => obj.id != id);
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
