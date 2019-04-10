
export default {
    name: 'product',
    template:
    `
        <div class="container productContent" v-if="product">
            <img v-bind:src="'images/products/' + product.product_image" v-bind:alt="product.product_name">
            <h3>{{product.product_name}}</h3>
            <p class="price" v-if="product.product_available == 1">{{product.product_price}}</p>
            <p class="notinstock" v-if="product.product_available != 1">Sorry, this product is not available for order right now...</p>
            <p>{{product.product_description}}</p>
            <router-link v-bind:to="'edit-product_id' + product.product_id" v-bind:key="product.product_id" v-if="authenticated"><button class="btn">Edit</button></router-link>
            <button class="btn" v-on:click="deleteProduct">Delete</button>
        </div>
    `,
    data() {
        return {
            authenticated: false,
            product: ''
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
                    if(response.data) {
                        that.authenticated = true;
                    } else {
                        localStorage.clear();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        deleteProduct() {

            let that = this;

            // create form data to do a POST request
            let deleteQuery = new FormData();

            deleteQuery.append("product_id", this.product.product_id);

            axios({
                method: 'post',
                url: 'admin/delete-product.php',
                data: deleteQuery
                })
                .then(function (response) {
                    //console.log(response);
                    that.$router.push("/");
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.getIndividualData();
        if(localStorage.getItem('current_user_id') && localStorage.getItem('access_token')) {
            this.checkSession();
        }
    }
}
