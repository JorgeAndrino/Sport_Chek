
export default {
    name: 'product',
    template:
    `
        <div class="container productContent">
            <img v-bind:src="'images/products/' + product.product_image" v-bind:alt="product.product_name">
            <h3>{{product.product_name}}</h3>
            <p class="price">{{product.product_price}}</p>
            <p>{{product.product_description}}</p>
        </div>
    `,
    data() {
        return {
            product: {
                "product_id": "1",
                "product_image": "champion-mens-powerblend-fleece-full-zip-hoodie.png",
                "product_name": "adidas Men's Ultraboost 19 Running",
                "product_description" : "The adidas Men’s Ultra Boost 19 Running Shoes combine comfort and performance to reinvent your run. They have a seamless adidas Primeknit 360 upper that’s engineered with motion weave technology to stretch and support your foot. Optimised Boost maximises energy return, and a 3D heel frame provides a locked-down fit that allows natural heel movement.",
                "product_price": "420"
            }
        }
    },
    methods: {
    },
    mounted() {
        console.log(this.$route.params.id);
    },
}
