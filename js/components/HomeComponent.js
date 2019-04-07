
export default {
    name: 'home',
    template:
    `
        <div class="container mainContent">

            <section id="mainAdminBar" v-if="authenficated">
                <p class="welcome">Hello, {{userName}}</p>
                <div>
                    <router-link to="newproduct"><button class="btn">Add new product</button></router-link>
                    <button class="btn" v-on:click="logout">Log out</button>
                </div>          
            </section>

            <section id="catgoryFilter">
                <h3>Filter by category</h3>
                <div class="category" v-for="category in categories">
                    <input type="checkbox" v-bind:value="category.category_id" v-bind:id="'category_id' + category.category_id" v-on:click="filterByCategory" /> 
                    <label v-bind:for="'category_id' + category.category_id">{{category.category_name}}</label>
                </div>
                <button class="btn" v-on:click="dropFilter">Drop filter</button>
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
            authenficated: false,
            userName: '',
            categories: [],
            products: [],
            filters: []
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
        },
        filterByCategory(e) {
            this.filters.push(e.target.value);
            let that = this;

            let filtersPrepared = '';
            that.filters.forEach(function(filter) {
                filtersPrepared += 'categories[]=' + filter + '&';
            });
            
            axios.get(`admin/filter-category.php?${filtersPrepared}`)
                .then(function (response) {
                    //console.log(response); 
                    that.products = response.data;
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
                    that.authenficated = true;
                    that.userName = localStorage.getItem('current_user_name');
                } else {
                    localStorage.clear();
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        },
        logout() {
            if(localStorage.getItem('current_user_id') && localStorage.getItem('access_token')) {

                let that = this;

                // create form data to do a POST request
                let sessionInfo = new FormData();

                sessionInfo.append("user_id", localStorage.getItem('current_user_id'));
                sessionInfo.append("access_token", localStorage.getItem('access_token'));

                axios({
                    method: 'post',
                    url: 'admin/auth/logout.php',
                    data: sessionInfo
                    })
                .then(function (response) {
                    console.log(response);
                    localStorage.clear();
                    that.$router.go();
                })
                .catch(function (error) {
                    console.log(error);
                });

            } else {
                this.authenficated = true;
                localStorage.clear();
                this.$router.go();
            }
        },
        dropFilter() {
            this.$router.go();
        }
    },
    mounted() {
        this.$root.$on('searchedProducts', (searchedProducts) => {
            this.products = searchedProducts;
        });
        this.getAllData();
        if(localStorage.getItem('current_user_id') && localStorage.getItem('access_token')) {
            this.checkSession();
        }
    }
}
