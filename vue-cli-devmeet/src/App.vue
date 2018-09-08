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
        <button @click="addElem()">Add</button>
        <label>Your:</label>
        <input type="text" v-model="inputText">
        {{ inputText }}
    </div>  
  </div>  
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      inputText: "",
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
      ]
    };
  },
  methods: {
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
