<template>
  <navbar :container="'container'" :lightNav="'justify-end'" />

  <!-- Start -->
  <section class="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
    <div class="container mt-10">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div class="lg:col-span-8 md:col-span-6">
          <div
            class="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 mb-6"
          >
            <img
              :src="this.instituto.logoEmpresa"
              class="rounded-full size-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
              :alt="this.instituto.nombre"
            />

            <div class="md:ms-4 md:mt-0 mt-6">
              <h5 class="text-xl font-semibold">
                {{ this.pasantia.titulo }}
              </h5>
              <div class="mt-2">
                <router-link :to="{ name: 'EmpresaDetalleAdministrador', params: { id: this.instituto.idInstituciones
 } }"
                >
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i
                    class="uil uil-building text-[18px] text-cyan-600 me-1"
                  ></i
                  >{{ this.instituto.nombre }}
                </span></router-link>
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i class="uil-fast-mail text-[18px] text-cyan-600 me-1"></i>
                  {{ this.instituto.correo }}
                </span>
              </div>
            </div>
          </div>
          <!--detallesssss-->
          <h5 class="text-lg font-semibold">Descripción de la pasantia:</h5>

          <p class="text-slate-400 mt-4" v-for="paragraph in parsedData">
            {{ paragraph }}
          </p>

          <h5 class="text-lg font-semibold mt-6">Areas:</h5>

          <ul class="list-none">
            <li
              v-for="item in pasantia.areas"
              :key="item"
              class="text-slate-400 mt-2"
            >
              <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
            </li>
          </ul>

          <h5 class="text-lg font-semibold mt-6">Detalles de la pasantia:</h5>

          <ul class="list-none">
            <li
              v-for="funcion in pasantia.funciones"
              class="text-slate-400 mt-2"
            >
              <i class="uil uil-arrow-right text-cyan-600 me-1"></i>
              {{ funcion }}
            </li>
          </ul>
          <h5 class="text-lg font-semibold mt-6">
            Requisistos de la pasantia:
          </h5>
          <ul class="list-none">
            <li
              v-for="requisito in pasantia.requisitos"
              :key="item"
              class="text-slate-400 mt-2"
            >
              <i class="uil uil-arrow-right text-cyan-600 me-1"></i>
              {{ requisito }}
            </li>
          </ul>
        </div>
        <!--end col-->

        <div class="lg:col-span-4 md:col-span-6">
          <div
            class="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20"
          >
            <div class="p-6">
              <h5 class="text-lg font-semibold">Más información</h5>
            </div>

            <div
              class="p-6 border-t border-b border-slate-100 dark:border-t-gray-700 dark:border-b-gray-700"
            >
              <ul class="list-none">
                <li class="flex items-center">
                  <i data-feather="user-check" class="size-5"></i>

                  <div class="ms-4">
                    <p class="font-medium">Inicio de postulacion:</p>
                    <span class="text-purple-600 font-medium text-sm">{{
                      this.pasantia.fechaIngreso
                    }}</span>
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <i data-feather="clock" class="size-5"></i>

                  <div class="ms-4">
                    <p class="font-medium">Cierre de pasantia:</p>
                    <span class="text-purple-600 font-medium text-sm">{{
                      this.pasantia.fechaCierre
                    }}</span>
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <i data-feather="map-pin" class="size-5"></i>

                  <div class="ms-4">
                    <p class="font-medium">Ubicación:</p>
                    <span class="text-purple-600 font-medium text-sm">
                      {{ this.instituto.direccion }}</span
                    >
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <i data-feather="briefcase" class="size-5"></i>

                  <div class="ms-4">
                    <p class="font-medium">Sectores:</p>
                    <div v-for="item in instituto.sectores" :key="item">
                      <i class="uil uil-arrow-right text-purple-600 me-1"></i>
                      <span class="text-purple-600 font-medium text-sm">{{
                        item
                      }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="p-4" v-if="!activo">
              <button
                @click="aprobarPasantia()"
                class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white md:ms-2 w-full md:w-auto"
              >
                Aprobar
              </button>
              <button
                @click="rechazarPasantia()"
                class="btn rounded-md bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white md:ms-2 w-full md:w-auto"
              >
                Rechazar
              </button>
            </div>
            <div class="p-4" v-else>
              <button
                @click="observar()"
                class="btn rounded-md bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white md:ms-2 w-full md:w-auto"
              >
                Observacion
              </button>
            </div>
          </div>
        </div>
        <!--end col-->

        <!--end grid-->
      </div>
      <div v-if="activo">
        <div
          v-if="this.postulantes.length ===0 || this.postulantesEstado.length ===0"
          class="grid grid-cols-1 mt-10 pb-2 text-center"
        >
          <h3
            class="mb-2 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold text-red-400"
          >
            No hay aún postulantes
          </h3>
        </div>

        <div v-else>
          <div class="grid grid-cols-1 mt-10 pb-2 text-center">
            <h3
              class="mb-2 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold"
            >
              Solicitudes de aplicación a la pasantía
            </h3>
            <span>Pasantes aprobados: {{aprobados}}</span>
            <span>Pasantes pendientes: {{ pendientes }}</span>
          </div>
          <div
            class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"
          >
            <div
              v-for="(item,index) in postulantes"
              :key="item.idPersona"
              class="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6"
            >
              <div
                class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12"
              >
                <img :src="item.fotoPerfil" class="size-8" :alt="item.nombre" />
              </div>
              <div class="mt-4">
                <div
                @click="redirectTO(index)"
                class="text-lg hover:text-cyan-600 font-semibold">
                  {{ item.nombre }} {{ item.apellidoPaterno }}
                  {{ item.apellidoMaterno }}
                </div>
                <p class="text-slate-400 mt-2">{{ item.descripcion }}</p>
              </div>
              <div
                class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between"
              >
                <span class="text-slate-400">
                  <i class="fas fa-phone pr-1"></i> {{ item.telefono }}
                </span>
                <span
                  class="block font-semibold text-green-600"
                  v-if="getEstado(index)"
                >
                  Aprobado
                </span>
                <span class="block font-semibold text-yellow-600" v-else>
                  Pendiente
                </span>
              </div>
            </div>
            <!--end content-->
          </div>
        </div>
      </div>
      <!--end grid  activo -->
    </div>
    <!--end container-->

    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/Administrador/navbarAdministrador.vue";
import { usePasantiasAdminStore } from "@/stores/Administradores/pasantiasAdminStore";
import footers from "@/components/footer/footer.vue";
import { usePasantiasStore } from "@/stores/Pasantias/pasantiasStore";
import switcher from "@/components/General/switcher.vue";
import Swal from "sweetalert2";
export default {
  setup() {
    const pasantiasStore = usePasantiasAdminStore();
    return { pasantiasStore };
  },
  data() {
    return {
      parsedData: [],
      activo: false,
      data: "",
      postulantes: "",
      instituto: "",
      postulantesEstado: "",
      pasantia: "",
      id: "",
      image:
        "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",

      datas: [],
    };
  },
  components: {
    navbar,
    footers,
    switcher,
  },
  methods:{
    redirectTO(index){
      this.$router.push(
        { name: 'PerfilEstudianteAdministrador', params: 
          { 
            idEstudiante: this.postulantes[index].idPersona, 
            idSolicitud: this.postulantesEstado[index].idAplicacionPasantias
          } 
        }
      );
    },
    getEstado(index) {
      return this.postulantesEstado[index].activo;
    },
    async rechazarPasantia() {
  try {
    const result = await Swal.fire({
      title: "¿Estás seguro de rechazar esta pasantía?",
      text: "¡Se eliminará de manera permanente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, elimínala!",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminada!",
        text: "Tu archivo ha sido eliminado.",
        icon: "success",
      });

      let loader;
      if (this.$loading && typeof this.$loading.show === 'function') {
        loader = this.$loading.show();
      } else {
        console.error("El componente de carga no está disponible.");
      }

      try {
        if (!this.pasantiasStore || typeof this.pasantiasStore.rechazarPasantia !== 'function') {
          throw new Error("pasantiasStore.rechazarPasantia no está definido o no es una función.");
        }
        if (!this.id) {
          throw new Error("this.id no está definido.");
        }
        if (!this.$keycloak || !this.$keycloak.idTokenParsed || !this.$keycloak.idTokenParsed.sub) {
          throw new Error("this.$keycloak.idTokenParsed.sub no está definido.");
        }

        const response = await this.pasantiasStore.rechazarPasantia(
          this.id,
          this.$keycloak.idTokenParsed.sub
        );
        Swal.fire({
          icon: "success",
          title: "Pasantía rechazada",
          text: "La pasantía fue rechazada con éxito",
        });
        this.$router.push("/administrador/solicitud/pasantia");
       
      } catch (error) {
        console.error("Error rechazando la pasantía:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "ERROR: " + error.message,
        });
      } finally {
        if (loader && typeof loader.hide === 'function') {
          loader.hide();
        }
      }
    }
  } catch (error) {
    console.error("Error mostrando el diálogo de confirmación:", error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "ERROR: " + error.message,
    });
  }
}
,
    observar() {
    },
    async aprobarPasantia() {
      Swal.fire({
        icon: "success",
        title: "Pasantia aprobada",
        text: "La pasantia fue aprobada con exito",
      });
      let loader = this.$loading.show();
      try {
        const response = await this.pasantiasStore.aceptarPasantia(
          this.id,
          this.$keycloak.idTokenParsed.sub
        );
        Swal.fire({
          icon: "success",
          title: "Pasantia aprobada",
          text: "La pasantia fue aprobada con exito",
        });
        this.fetchPasantia();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "ERROR: " + error,
        });
      } finally {
        loader.hide();
      }
    },
    async fetchPasantia() {
      let loader = this.$loading.show();
      try {
        const response = await this.pasantiasStore.obtenerPasantiaPorId(
          this.id,
          this.$keycloak.idTokenParsed.sub
        );

        this.data = response;
        this.parsedData = this.data.pasantiasDto.descripcion.split("\n");
        this.activo = this.data.estadoPasantia;
        this.instituto = this.data.institucionesDto;
        this.pasantia = this.data.pasantiasDto;
        this.postulantes = this.data.listaPostulantes;
        this.postulantesEstado = this.data.aplicacionPasantiasDto;
        if (this.data.pasantiasDto == null) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontro la pasantia",
          });
          this.$router.push("/pasantias");
          return;
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "ERROR: " + error,
        });
      } finally {
        loader.hide();
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchPasantia();
    
  },
  computed: {
    aprobados() {
      return this.postulantesEstado.filter((e) => e.activo).length;      
    },
    pendientes() {
      return this.postulantesEstado.filter((e) => !e.activo).length;
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
