import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/tailwind.scss";
import "@/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "@/assets/libs/@iconscout/unicons/css/line.css";
import authConfig from '../auth_config.json'
import Keycloak from 'keycloak-js'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';



const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
  store.$keycloak = app.config.globalProperties.$keycloak
})
app.use(pinia)
app.use(router)


app.use(LoadingPlugin, {
  color: '#0891b2',
  loader: 'dots',
  width: 64,
  height: 64,
  backgroundColor: '#ffffff',
  opacity: 0.5,
  zIndex: 999,
  isFullPage: true,
  canCancel: false,
});

















const keycloak = new Keycloak({
    url: authConfig.url,
    realm: authConfig.realm,
    clientId: authConfig.clientId,
});

keycloak.authenticated = false;


app.config.globalProperties.$keycloak = keycloak;
app.config.globalProperties.$keycloak_loaded = false;





try {
    keycloak.onReady = (auth) => {
            app.config.globalProperties.$keycloak = keycloak;
        app.config.globalProperties.$keycloak_loaded = true;
        
  
        app.mount("#app");
        console.log("Keycloak is ready", keycloak);

        

    };

    const keycloakVar= await keycloak.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        redirectUri: window.location.origin,
    });



    



    
} catch (error) {
    console.error("Keycloak error", error);
    
}


 



  
  


