
export default {
    name: 'home',
    template:
    `
        <div class="container mainContent">

            <section id="catgoryFilter">
                <h3>Filter by category</h3>
                <div class="category" v-for="category in categories">
                    <input type="checkbox" v-bind:value="category.category_id" v-bind:id="'category_id' + category.category_id" /> 
                    <label v-bind:for="'category_id' + category.category_id">{{category.category_name}}</label>
                </div>
            </section>

            <section id="products">
                <router-link v-bind:to="'product_id' + product.product_id" class="toProduct" v-for="product in products" v-bind:key="product.product_id">
                    <div class="product">
                        <img v-bind:src="'images/products/' + product.product_image" v-bind:alt="product.product_name">
                        <h3>{{product.product_name}}</h3>
                        <p class="price">{{product.product_price}}</p>
                    </div>
                </router-link>
            </section>

        </div>
    `,
    data() {
        return {
            categories: [],
            products: []
        }
    },
    methods: {
        getAllData() {      
            let that = this;    
            axios.get('admin/read-all.php')
                .then(function (response) {
                    //console.log(response); 
                    that.categories = JSON.parse(response.data[0]);
                    that.products = JSON.parse(response.data[1]);
                })
                .catch(function (error) {
                    console.log(error);
            });
        }
    },
    mounted() {
        this.getAllData();
    },
}
