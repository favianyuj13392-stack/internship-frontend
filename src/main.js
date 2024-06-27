import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/tailwind.scss";
import "@/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "@/assets/libs/@iconscout/unicons/css/line.css";
import authConfig from '../auth_config.json'
import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'


const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
  store.$keycloak = app.config.globalProperties.$keycloak
})
app.use(pinia)
app.use(router)

    app.use(VueKeycloakJs, {
        init:{
          onLoad:'check-sso',
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
          redirectUri: window.location.origin,
        },
        config:{
          realm: authConfig.realm,
          url: authConfig.url,
          clientId: authConfig.clientId,
        },
        logout: {
          redirectUri: window.location.origin,
        },
        onReady: (keycloak) => {
          console.log(keycloak)
          app.mount('#app')
    
        },
      })



  
  


