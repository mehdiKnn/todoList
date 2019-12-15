import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquare , faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/tailwind.css'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


let firebaseConfig = {
  apiKey: "AIzaSyDuRnQiP7FzgkK8f4BNSRVPfUaoPPJ3y3M",
  authDomain: "todolist-5dbc0.firebaseapp.com",
  databaseURL: "https://todolist-5dbc0.firebaseio.com",
  projectId: "todolist-5dbc0",
  storageBucket: "todolist-5dbc0.appspot.com",
  messagingSenderId: "30850328518",
  appId: "1:30850328518:web:fe9bc851daea0a68f534c7"
};

// Get a Firestore instance
let test = firebase.initializeApp(firebaseConfig)
Vue.prototype.$fauth = test.auth()
Vue.prototype.$fireCol = test.firestore().collection('user')



// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }


library.add(   faCheckSquare, faSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
