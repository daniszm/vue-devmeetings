<template>
        <!-- 7. We can use Angular-like double brackets to create an expression -->
        <div>
          <div>
          <form @submit.prevent="searchSubmit()">
            <label>Szukaj:</label>
            <input name="nameToSearch" v-model="searchProduct.title" type="text">
            <button>Szukaj</button>
          </form>
          </div>
            <div v-for="elem in items" :key="elem.uuid">
                <p style="display: inline-block">{{ elem.title }}</p> 
                <button style="display: inline-block" @click="removeElem(elem.uuid)">X</button>
            </div>
        </div>
</template>

<script>
export default {
  name: "ProductList",
  data () {
    return {
      searchProduct: {
        "title": ""
      }
    }
  },
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    items: {
      type: Array
    }
  },
  methods: {
    removeElem(uuid) {
      this.$emit("removeElem", uuid);
    },
    searchSubmit() {
      this.$emit("searchElem", this.searchProduct.title);
    }
  }
};
</script>

<style scoped>
</style>