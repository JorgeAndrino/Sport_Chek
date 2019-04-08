
// components 
import HomeComponent from './components/HomeComponent.js'; 
import NotFoundComponent from './components/NotFoundComponent.js';
import IndividualProductComponent from './components/IndividualProductComponent.js';
import LoginComponent from './components/auth/LoginComponent.js';
import AddProductComponent from './components/AddProductComponent.js';

// routes
const routes = [
    { path: '/', name: "home", component: HomeComponent },
    { path: '/product_id:id', name: "product", component: IndividualProductComponent },
    { path: '/login', name: "login", component: LoginComponent },
    { path: '/add-product', name: "add-product", component: AddProductComponent },
    { path: "/404*", name: "notfound", component: NotFoundComponent },
    { path: "*", redirect: '/404' }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    data() {
        return {
            searchRequest: '',
            searchedProducts: []
        }
    },
    methods: {
        filterBySearch() {
            this.$router.push("/");
            let that = this;    
            axios.get(`admin/user-search.php?searchRequest=${this.searchRequest}`)
                .then(function (response) {
                    //console.log(response); 
                    that.searchedProducts = response.data;
                    that.$emit('searchedProducts', that.searchedProducts);
                })
                .catch(function (error) {
                    console.log(error);
            });
        }
    },
    components: {
    },
    router: router
}).$mount('#app');