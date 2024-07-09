import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../views/General/Home.vue";
import Pasantias from "../views/General/Pasantias.vue";
import PasantiasDetalle from "../views/General/PasantiasDetalle.vue";
import Empresas from "../views/General/Empresas.vue";
import EmpresasDetalle from "../views/General/EmpresasDetalle.vue";
import Contactanos from "../views/General/Contactanos.vue";

//estudiante
import PerfilEstudiante from "@/views/Estudiante/PerfilEstudiante.vue";
import EditarPerfilEstudiante from "@/views/Estudiante/EditarPerfilEstudiante.vue";

//empresa
import PasantiasEmpresaView from "@/views/Empresa/PasantiasEmpresaView.vue";
import InformacionEmpresaView from "@/views/Empresa/EditarInformacionEmpresaView.vue";
import InformacionPasantiaEmpresaView from "@/views/Empresa/InformacionPasantiaEmpresaView.vue";

//administrador
import DashboardAdministrador from "@/views/Administrador/DashboardAdministrador.vue";
import SolicitudEmpresaAdministrador from "@/views/Administrador/SolicitudEmpresaAdministrador.vue";
import SolicitudPasantiaAdministrador from "@/views/Administrador/SolicitudPasantiaAdministrador.vue";
import PasantiaAdministrador from "@/views/Administrador/PasantiaAdministrador.vue";
import EmpresaAdministrador from "@/views/Administrador/EmpresaAdministrador.vue";
import EmpresaDetalleAdministrador from "@/views/Administrador/EmpresaDetalleAdministrador.vue";
import PasantiaDetalleAdministrador from "@/views/Administrador/PasantiaDetalleAdministrador.vue";
import EmpresaSolicitudUsuarioAdministrador from "@/views/Administrador/EmpresaSolicitudUsuarioAdministrador.vue";
//completar registro
import FinishRegisterEstudiante from "@/views/CompletarRegistro/CompletarRegistroEstudianteView.vue";
import FinishRegisterEmpresa from "@/views/CompletarRegistro/CompletarRegistroEmpresaView.vue";

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
      path: "/pasantias/:id/detalle",
      name: "pasantias-detalle",
      component: PasantiasDetalle,
    },
    {
      path: "/empresas",
      name: "empresas",
      component: Empresas,
    },
    {
      path: "/empresas/:id/detalle",
      name: "empresas-detalle",
      component: EmpresasDetalle,
    },
    {
      path: "/contactanos",
      name: "contactanos",
      component: Contactanos,
    },

    //estudiante
    {
      path: "/perfil/estudiante",
      name: "perfil-estudiante",
      component: PerfilEstudiante,
    },
    {
      path: "/perfil/estudiante/editar",
      name: "perfil-estudiante-editar",
      component: EditarPerfilEstudiante,
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
    },

    //administrador
    {
      path: "/administrador/dashboard",
      name: "DashboardAdministrador",
      component: DashboardAdministrador,
    },
    {
      path: "/administrador/empresa",
      name: "EmpresaAdministrador",
      component: EmpresaAdministrador,
    },
    {
      path: "/administrador/solicitud/empresa",
      name: "SolicitudEmpresaAdministrador",
      component: SolicitudEmpresaAdministrador,
    },
    {
      path: "/administrador/empresa/:id/detalle",
      name: "EmpresaDetalleAdministrador",
      component: EmpresaDetalleAdministrador,
    },
    {
      path: "/administrador/pasantia",
      name: "PasantiaAdministrador",
      component: PasantiaAdministrador,
    },
    {
      path: "/administrador/solicitud/pasantia",
      name: "SolicitudPasantiaAdministrador",
      component: SolicitudPasantiaAdministrador,
    },
    {
      path: "/administrador/pasantia/:id/detalle",
      name: "PasantiaDetalleAdministrador",
      component: PasantiaDetalleAdministrador,
    },
    {
      path: "/administrador/empresa/:idEmpresa/solicitud/:idSolicitud/usuario/:idUsuario",
      name: "EmpresaSolicitudUsuarioAdministrador",
      component: EmpresaSolicitudUsuarioAdministrador,
    },

    //completado de registro
    {
      path: "/finish/register-estudiante",
      name: "FinishRegisterEstudiante",
      component: FinishRegisterEstudiante,
    },
    {
      path: "/finish/register-empresa",
      name: "FinishRegisterEmpresa",
      component: FinishRegisterEmpresa,
    }
  ],
});

export default router;
