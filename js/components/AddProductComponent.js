
export default {
    name: 'add-product',
    template:
    `
        <div class="container">
            <form action="http://localhost:8080/Sport_Check/admin/add-product.php" method="post" class="addProduct" enctype="multipart/form-data">
                <label for="product_image">Product Image: *</label>
                <input type="file" name="product_image" id="product_image" required />

                <label for="product_name">Product Name: *</label>
                <input type="text" name="product_name" id="product_name" required />

                <label for="product_price">Product Price: *</label>
                <input type="text" name="product_price" id="product_price" required />

                <label for="product_available">Available for order</label>
                <select name="product_available" required>
                    <option value="0">Not in stock</option>
                    <option value="1">Available</option>
                </select>
                
                <label for="product_description">Product description *</label>
                <textarea name="product_description" required></textarea>

                <label for="category_id">Product Category: *</label>
                <select name="category_id" required>
                    <option v-bind:value="category.category_id" v-for="category in categories">{{category.category_name}}</option>
                </select>

                <button v-on:click="addProduct" class="btn">Submit</button>
            </form>
        </div>
    `,
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        getCategories() {
            let that = this;    
            axios.get('admin/read-all.php')
                .then(function (response) {
                    //console.log(response); 
                    that.categories = JSON.parse(response.data[0]);
                })
                .catch(function (error) {
                    console.log(error);
            });
        },
        addProduct() {
            this.$router.push("/");
        }
    },
    mounted() {
        this.getCategories();
    },
}
