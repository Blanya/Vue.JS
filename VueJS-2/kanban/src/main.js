import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false; //Mettre en développement

//let app =
new Vue({
  render: h => h(App),
}).$mount('#app')  //Envoyer un composant app dans le #app ( changement component )