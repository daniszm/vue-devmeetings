import axios from 'axios';

// Majestic 'store' is just a variable in our case
const store = {
    //3/ It holds a state itself
    state: {
        items: []
    },
    //6/ And methods to update
    async fetchProducts() {
        this.state.items = await axios.get("http://api.dataatwork.org/v1/jobs").then(res => res.data);
    },
    addProduct(product) {
        this.state.items.push(product);
    },
    removeElem(uuid) {
        this.state.items = this.state.items.filter(obj => obj.uuid != uuid);
    }
};

export default store;