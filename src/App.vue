<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css"/>
    <link href="http://fonts.cdnfonts.com/css/codec-pro" rel="stylesheet">
    <b-navbar :fixed-top= 'true'>
      <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img
                  src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
              >
          </b-navbar-item>
      </template>
      <template #start>
          <b-navbar-item  tag="router-link" :to="'/'">
              Home
          </b-navbar-item>
          <b-navbar-item  tag="router-link" :to="'/about'">
              About
          </b-navbar-item>
      </template>
      <template #end>
          <b-navbar-item tag="div">
              <div class="buttons">
                  <router-link to="Login" tag="b-button" class="button is-primary">Sign up</router-link>
                  <router-link to="Login" tag="b-button" class="button is-Light">Log in</router-link>
              </div>
          </b-navbar-item>
      </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Codec Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
