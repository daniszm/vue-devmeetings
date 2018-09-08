import axios from 'axios';

// Majestic 'store' is just a variable in our case
const store = {
    //3/ It holds a state itself
    state: {
        items: []
    },
    phrase: '',
    //6/ And methods to update
    async fetchProducts() {
        this.state.items = await axios.get("http://api.dataatwork.org/v1/jobs").then(res => res.data);
    },
    async findProduct(phrase) {
        this.state.items = await axios.get(`http://api.dataatwork.org/v1/jobs/autocomplete?contains=${phrase}`).then(res => res.data);
        /* eslint-disable */

        this.state.items.forEach(item => item.title = item.suggestion);
        console.log(this.state.items);
    },
    addProduct(product) {
        this.state.items.push(product);
    },
    removeElem(uuid) {
        this.state.items = this.state.items.filter(obj => obj.uuid != uuid);
    }
};

export default store;