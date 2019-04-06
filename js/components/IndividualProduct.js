
export default {
    name: 'product',
    template:
    `
        <div class="container productContent" v-if="product">
            <img v-bind:src="'images/products/' + product.product_image" v-bind:alt="product.product_name">
            <h3>{{product.product_name}}</h3>
            <p class="price" v-if="product.product_available">{{product.product_price}}</p>
            <p class="notinstock" v-if="!product.product_available">Sorry, this product is not available for order right now...</p>
            <p>{{product.product_description}}</p>
        </div>
    `,
    data() {
        return {
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
        }
    },
    mounted() {
        this.getIndividualData();
    },
}
