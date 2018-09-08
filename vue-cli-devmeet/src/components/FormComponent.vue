<template>
        <form @submit.prevent="onSubmit()">
          <!-- <button @click="addElem()">Add</button> -->
          <label>Your:</label>
          <input type="text" name="productName" v-model="newProduct.name" v-validate="'required|min:4'">
          <div v-show="errors.has('productName')">
            {{errors.first('productName')}}
          </div>
          <button>Add</button>
        </form>
</template>

<script>
import uuid from "uuid/v4";
export default {
  name: "FormComponent",
  // The case is, we have to define props (inputs)
  data() {
    return {
      newProduct: {
        name: ""
      }
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        let obj = {
          id: uuid(),
          ...this.newProduct
        };
        this.$emit("submit-form", obj);
        this.newProduct.name = "";
        this.$validator.reset();
      });
    }
  }
};
</script>

<style scoped>
</style>