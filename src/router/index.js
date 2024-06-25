import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../views/General/Home.vue";
import Pasantias from "../views/General/Pasantias.vue";
import PasantiasDetalle from "../views/General/PasantiasDetalle.vue";
import Empresas from "../views/General/Empresas.vue";
import EmpresasDetalle from "../views/General/EmpresasDetalle.vue";
import Contactanos from "../views/General/Contactanos.vue";








import PasantiasEmpresaView from "@/views/Empresa/PasantiasEmpresaView.vue";
import InformacionEmpresaView from "@/views/Empresa/EditarInformacionEmpresaView.vue";
import InformacionPasantiaEmpresaView from "@/views/Empresa/InformacionPasantiaEmpresaView.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/1",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/pasantias",
      name: "Pasantias",
      component: Pasantias,
    },
    {
      path: "/pasantias/detalle",
      name: "pasantias-detalle",
      component: PasantiasDetalle,
    },
    {
      path: "/empresas",
      name: "empresas",
      component: Empresas,
    },
    {
      path: "/empresas/detalle",
      name: "empresas-detalle",
      component: EmpresasDetalle,
    },
    {
      path: "/contactanos",
      name: "contactanos",
      component: Contactanos,
    },
    











    //empresa
    {
      path: "/empresa/administrador/pasantias",
      name: "PasantiasEmpresaView",
      component: PasantiasEmpresaView,
    },
    {
      path: "/empresa/administrador/informacion",
      name: "InformacionEmpresaView",
      component: InformacionEmpresaView,
    },
    {
      path: "/empresa/administrador/pasantias/informacion/:id",
      name: "InformacionPasantiaEmpresaView",
      component: InformacionPasantiaEmpresaView,
      props: true,
    }
  ],
});

export default router;
