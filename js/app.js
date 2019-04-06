
// components 
import HomeComponent from './components/HomeComponent.js'; 
import NotFoundComponent from './components/NotFoundComponent.js';
import IndividualProduct from './components/IndividualProduct.js';

// routes
const routes = [
    { path: '/', name: "home", component: HomeComponent },
    { path: '/product_id:id', name: "product", component: IndividualProduct },
    { path: "/404*", name: "notfound", component: NotFoundComponent },
    { path: "*", redirect: '/404' }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    data: {
    },
    methods: {
    },
    components: {
    },
    router: router
}).$mount('#app');