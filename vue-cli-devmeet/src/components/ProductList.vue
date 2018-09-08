<template>
        <!-- 7. We can use Angular-like double brackets to create an expression -->
        <div>
            <div v-for="elem in items" :key="elem.uuid">
                <p style="display: inline-block">{{ elem.title }}</p> 
                <button style="display: inline-block" @click="removeElem(elem.uuid)">X</button>
            </div>
        </div>
</template>

<script>
export default {
  name: "ProductList",
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    items: {
      type: Array
    }
  },
  methods: {
    removeElem(id) {
      this.$emit("test", id);
    }
  }
};
</script>

<style scoped>
</style>