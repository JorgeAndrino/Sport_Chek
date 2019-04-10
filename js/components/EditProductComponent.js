
export default {
    name: 'edit-product',
    template:
    `
        <div class="container productContent" v-if="product">
            <form action="http://localhost:8080/Sport_Check/admin/edit-product.php" method="post" class="addProduct" enctype="multipart/form-data">
                
                <input type="hidden" name="product_id" v-bind:value="product.product_id" />

                <img v-bind:src="'images/products/' + product.product_image" v-bind:alt="product.product_name" v-if="!newImage">

                <label for="product_name">Product Name: *</label>
                <input type="text" name="product_name" id="product_name" v-bind:value="product.product_name" />

                <label for="product_price">Product Price: *</label>
                <input type="text" name="product_price" id="product_price" v-bind:value="product.product_price" />

                <label for="product_available">Available for order</label>
                <select name="product_available">
                    <option v-bind:value="product.product_available ? '1' : '0'">{{product.product_available ? 'Available' : 'Not in stock'}}</option>
                    <option v-bind:value="!product.product_available ? '1' : '0'">{{!product.product_available ? 'Available' : 'Not in stock'}}</option>
                </select>
                
                <label for="product_description">Product description *</label>
                <textarea name="product_description" v-bind:value="product.product_description" rows="10"></textarea>

                <button v-on:click="addImage" type="button" class="btn">Replace an image</button>

                <button v-on:click="addCategory" type="button" class="btn">Change category</button>

                <div v-if="newImage">
                    <label for="product_image">Product Image: *</label>
                    <input type="file" name="product_image" id="product_image" required />
                </div>

                <div v-if="newCategory">
                    <label for="category_id">Product Category: *</label>
                    <select name="category_id" required>
                        <option v-bind:value="category.category_id" v-for="category in categories">{{category.category_name}}</option>
                    </select>
                </div>

                <button v-on:click="editProduct" class="btn">Submit</button>
            </form>
        </div>
    `,
    data() {
        return {
            product: '',
            categories: [],
            newImage: false,
            newCategory: false
        }
    },
    methods: {
        getIndividualData() {      
            let that = this;    
            axios.get(`admin/read-individual.php?product_id=${this.$route.params.id}`)
                .then(function (response) {
                    //console.log(response); 
                    that.product = response.data[0];
                })
                .catch(function (error) {
                    console.log(error);
            });
        },
        checkSession() {
            if(localStorage.getItem('current_user_id') && localStorage.getItem('access_token')) {
                
                let that = this;

                // create form data to do a POST request
                let sessionInfo = new FormData();

                sessionInfo.append("user_id", localStorage.getItem('current_user_id'));
                sessionInfo.append("access_token", localStorage.getItem('access_token'));

                axios({
                    method: 'post',
                    url: 'admin/auth/session.php',
                    data: sessionInfo
                    })
                    .then(function (response) {
                        //console.log(response);
                        if(!response.data) {
                            that.$router.push("/login");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                localStorage.clear();
                this.$router.push("/login");
            }
        },
        addImage() {
            this.newImage = true;
        },
        addCategory() {
            let that = this;    
            axios.get('admin/read-all.php')
                .then(function (response) {
                    //console.log(response); 
                    that.categories = JSON.parse(response.data[0]);
                })
                .catch(function (error) {
                    console.log(error);
            });
            this.newCategory = true;
        },
        editProduct() {
            this.$router.push("/product_id" + this.product.product_id);
        }
    },
    mounted() {
        this.getIndividualData();
        this.checkSession();
    }
}
