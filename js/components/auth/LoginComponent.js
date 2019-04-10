
export default {
    name: 'login',
    template:
    `
        <div class="container loginContent">
            <div id="loginForm">
                <label for="user_email">Email: *</label>
                <input type="email" name="user_email" id="user_email" v-model="user_email" required>
                <label for="user_password">Password: *</label>
                <input type="password" name="user_password" id="user_password" v-model="user_password" required>
                <button class="btn" v-on:click="login">Login</button>
                <p v-if="message">{{message}}</p>
            </div>
        </div>
    `,
    data() {
        return {
            user_email: 'admin@email.dog',
            user_password: 'password',
            message: ''
        }
    },
    methods: {
        login() {
            let that = this;

            // create form data to do a POST request
            let loginCredentials = new FormData();

            loginCredentials.append("user_email", this.user_email);
            loginCredentials.append("user_password", this.user_password);

            axios({
                method: 'post',
                url: 'admin/auth/login.php',
                data: loginCredentials
                })
                .then(function (response) {
                    //console.log(response);
                    
                    if(response.data[0] == "Welcome!") {
                        that.message = response.data[0];
                        localStorage.setItem('current_user_id', response.data[1]);
                        localStorage.setItem('current_user_name', response.data[2]);
                        localStorage.setItem('access_token', response.data[3]);
                        that.$router.push("/");
                    } else {
                        that.message = response.data;
                    }
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
                    that.$router.push("/");
                } else {
                    localStorage.clear();
                }
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    },
    mounted() {
        if(localStorage.getItem('current_user_id') && localStorage.getItem('access_token')) {
            this.checkSession();
        }
    }
}
