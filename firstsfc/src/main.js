import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)
app.component('PersonalProfile', PersonalProfile)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.mount('#app')