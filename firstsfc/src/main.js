import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import Comment from './components/Comment.vue'
import Commentform from './components/Commentform.vue'
import RestApi from './components/RestApi.vue'

const app = createApp(App)
app.component('PersonalProfile', PersonalProfile)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('comment', Comment)
app.component('comment-form', Commentform)
app.component('rest-api', RestApi)
app.mount('#app')