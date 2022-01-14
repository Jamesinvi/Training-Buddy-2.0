<template>

  <form>
    <div class="box">
      <h1 class="title">Login </h1>
      <b-field  label="Email" label-position="on-border">
        <b-input v-model="email" placeholder="Your email"></b-input>
      </b-field>
      <b-field label="Password" label-position="on-border">
        <b-input v-model="password" placeholder="Your password"  type="password"></b-input>
      </b-field>        
      <p id="error" v-show="error">{{ error }}</p>
      <p>No account?</p>
      <router-link :to="{ path: '/register' }">Create a new one.</router-link>
      <br />
      <div class="buttons">
            <b-button type="is-primary"  v-on:click="login" expanded>Login</b-button>
      </div>
    </div>
  </form>
</template>

<script>
// @ is an alias to /src
import fbInstance from "/src/main.js"
import 'firebase/compat/auth';

export default {
  name: 'Login',  
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods:{
    login(){
      fbInstance
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(async () => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          this.error = err.message;
          console.log(err.message);
        });
    },
  }
}
</script>


<style scoped>
.box {
  margin: 10px;
  box-shadow: 0px 0 9px rgba(173, 173, 173, 0.8);
}

</style>