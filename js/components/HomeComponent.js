
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
            categories: [
                {
                    "category_id": "1",
                    "category_name": "Shoes"
                },
                {
                    "category_id": "2",
                    "category_name": "Gear"
                }
            ],
            products: [
                {
                    "product_id": "1",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "adidas Men's Ultraboost 19 Running",
                    "product_price": "420"
                },
                {
                    "product_id": "2",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "adidas Originals Women's Classic Trefoil Hat",
                    "product_price": "420"
                },
                {
                    "product_id": "3",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "Nike Men's LeBron XVI 'Equality' Basketball Shoes",
                    "product_price": "420"
                },
                {
                    "product_id": "4",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "Under Armour Women's Aura Training Shoes",
                    "product_price": "420"
                },
                {
                    "product_id": "5",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "The North Face Recon 30L Day Pack",
                    "product_price": "420"
                },
                {
                    "product_id": "6",
                    "product_image": "capix-villain-20-bmx-bike-2018.png",
                    "product_name": "PUMA Women's SG x PUMA Demi Sports Bra",
                    "product_price": "420"
                },
                {
                    "product_id": "7",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "McKINLEY Boys' Phoenix Youth Rain Pants",
                    "product_price": "420"
                },
                {
                    "product_id": "8",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "Champion Men's Powerblend Fleece Full Zip Hoodie",
                    "product_price": "420"
                },
                {
                    "product_id": "9",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "Just a random product name",
                    "product_price": "420"
                },
                {
                    "product_id": "10",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "Lorem Ipsum dolor Sit Amet",
                    "product_price": "420"
                },
                {
                    "product_id": "11",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "I am Sick and Excited about",
                    "product_price": "420"
                },
                {
                    "product_id": "12",
                    "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                    "product_name": "this Project at The Same Time, Weird",
                    "product_price": "420"
                }
            ]
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
