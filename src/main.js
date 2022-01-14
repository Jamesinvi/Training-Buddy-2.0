import Vue from 'vue'
import Buefy from 'buefy'

import App from './App.vue'

import 'buefy/dist/buefy.css'
import router from './router/routes.js'
import store from './store/store.js'


// #region FIREBASE STUFF

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};

// Initialize Firebase
let fbInstance=firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export default fbInstance;
// #endregion







Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
