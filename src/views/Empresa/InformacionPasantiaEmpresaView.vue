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
              :src="
                data?.institucion.logoEmpresa
                  ? data?.institucion.logoEmpresa
                  : image
              "
              class="rounded-full size-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
              alt=""
            />

            <div class="md:ms-4 md:mt-0 mt-6">
              <h5 class="text-xl font-semibold">
                {{
                  data?.pasantiasDto.titulo
                    ? data?.pasantiasDto.titulo
                    : "Back-End Developer"
                }}
              </h5>
              <div class="mt-2">
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i
                    class="uil uil-building text-[18px] text-cyan-600 me-1"
                  ></i>
                  {{
                    data?.institucion.nombre
                      ? data?.institucion.nombre
                      : "Lenovo pvt. ltd."
                  }}</span
                >
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i
                    class="uil uil-map-marker text-[18px] text-cyan-600 me-1"
                  ></i>
                  {{
                    data?.institucion.direccion
                      ? data?.institucion.direccion
                      : "Beijing,    China"
                  }}</span
                >
              </div>
            </div>
          </div>

          <div class="flex justify-center mb-4">
            <span class="relative inline-block">
              <input
                type="checkbox"
                class="checkbox opacity-0 absolute"
                id="cual"
                @change="cambioContendor($event)"
              />
              <label
                class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
                for="cual"
              >
                <i class="uil uil-user text-[20px] text-cyan-500"></i>
                <i class="uil uil-file-alt text-[20px] text-cyan-500"></i>
                <span
                  class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"
                ></span>
              </label>
            </span>
          </div>
          <!--detallesssss div-->
          <div v-if="contenedor">
            <h5 class="text-lg font-semibold">Detalles de la pasantia:</h5>

            <p class="text-slate-400 mt-4">
              {{
                this.data.pasantiasDto.descripcion
                  ? this.data.pasantiasDto.descripcion
                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }}
            </p>

            <h5 class="text-lg font-semibold mt-6">Áreas:</h5>
            <p class="text-slate-400 mt-4">
              Áreas a las cuales esta dirigida la pasantía
            </p>
            <ul class="list-none">
              <li
                v-for="item in this.data.pasantiasDto.areas"
                :key="item"
                class="text-slate-400 mt-2"
              >
                <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
              </li>
            </ul>

            <h5 class="text-lg font-semibold mt-6">
              Requisistos necesarios y calificaciones:
            </h5>

            <ul class="list-none">
              <li
                v-for="item in this.data.pasantiasDto.requisitos"
                :key="item"
                class="text-slate-400 mt-2"
              >
                <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
              </li>
            </ul>

            <h5 class="text-lg font-semibold mt-6">Funciones:</h5>

            <ul class="list-none">
              <li
                v-for="item in this.data.pasantiasDto.funciones"
                :key="item"
                class="text-slate-400 mt-2"
              >
                <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
              </li>
            </ul>

            <h5 class="text-lg font-semibold mt-6">Beneficios:</h5>

            <ul class="list-none">
              <li
                v-for="item in this.data.pasantiasDto.beneficios"
                :key="item"
                class="text-slate-400 mt-2"
              >
                <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
              </li>
            </ul>

            <div class="mt-5">
              <router-link
                :to="'/empresa/administrador/pasantias/' + this.id + '/editar'"
                class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white md:ms-2 w-full md:w-auto"
                >Editar Pasantia</router-link
              >
            </div>
          </div>
          <!--detallesssss usuario-->
          <div v-else>
            <div v-if="this.data.activoPasantia">
              <div
                v-if="this.data.postulantes.length <= 0"
                class="grid grid-cols-1 mt-10 pb-2 text-center"
              >
                <h3
                  class="mb-2 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold text-red-400"
                >
                  No hay aún postulantes
                </h3>
              </div>

              <div v-else>
              
                <div class="grid grid-cols-1 text-center">
                  <h3
                    class="mb-2 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold"
                  >
                    Postulantes a la pasantia
                  </h3>  
                  <span>Pasantes aprobados: 3</span>
                  <span>Pasantes pendientes: 0</span>
                </div>
                <div
                  class="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-8 gap-[30px]"
                >
                 
                  <!--end content-->


                  <div
      v-for="item in this.listaPostulantes"
      :key="item"
      class="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow dark:shadow-gray-700 text-center p-6"
    >
      <img
         :src="item.persona.fotoPerfil"
        class="size-20 rounded-full shadow dark:shadow-gray-700 mx-auto"
     :alt="item.persona.nombre"
      />

      <div class="mt-2">
        <router-link
        @click="redirectTO(index)"
         class="hover:text-cyan-600 font-semibold text-lg"
          >  {{ item.persona.nombre }}
                        {{ item.persona.apellidoPaterno }}
                        {{ item.persona.apellidoMaterno }}</router-link
        >
        <p class="text-sm text-slate-400">{{ item.position }}</p>
      </div>

      <ul class="mt-2 list-none">
        <li v-for="type in item.type" :key="type" class="inline me-1">
          <span
            class="bg-cyan-600/10 inline-block text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full"
            >{{ type }}</span
          >
        </li>
      </ul>

      <div class="flex justify-between mt-2">
                <div class="block">
                  <span class="text-slate-400">
                        <i class="fas fa-phone pr-1"></i>
                        {{ item.persona.telefono }}
                      </span> </div>
                <div class="block">
                  <span
                        class="block font-semibold text-cyan-600 text-sm"
                        v-if="item.aplicacionPasantia.activo"
                      >
                        Aprobado
                      </span>
                      <span
                        class="block font-semibold text-yellow-600 text-sm"
                        v-else
                      >
                        Pendiente
                      </span> </div>
            </div>

      <div class="mt-3">
        <button
        @click="mostrarInformacionPaante(item.persona.idPersona,2,item)"
        
        class="btn btn-sm bg-cyan-600 hover:bg-cyan-700 border-cyan-600 dark:border-cyan-600 text-white rounded-md"
          >Perfil</button
        >
        <button

          @click="mostrarInformacionPaante(item.persona.idPersona,1,item)"
                      
          class="btn btn-sm btn-icon bg-cyan-600/5 hover:bg-cyan-600 border-cyan-600/10 hover:border-cyan-600 text-cyan-600 hover:text-white rounded-full ms-1"
          ><i class="uil uil-eye text-[20px]"></i
        ></button>
      </div>
     
      <span class="w-24  text-white text-center absolute -start-[20px] top-2">
        <a
          href="javascript:void(0)"
          class="text-slate-500 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
          ><i class="uil uil-trash-alt"></i
        ></a>
      </span>

      <span class="absolute top-[10px] end-4">
        <a
          href="javascript:void(0)"
          class="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"
          ><i class="mdi mdi-heart"></i
        ></a>
      </span>
    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="lg:col-span-4 md:col-span-5">
          <div class="">
            <h5
              class="text-lg font-semibold text-cyan-600"
              v-if="this.data.activoPasantia == true"
            >
              Aprobado
            </h5>
            <h5
              class="text-lg font-semibold text-red-600"
              v-if="this.data.activoPasantia == false"
            >
              Sin Aprobar
            </h5>
          </div>
          <div
            class="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20"
          >
            <div class="w-full leading-[0] border-0">
              <iframe
                :src="mapSrc"
                style="border: 0"
                class="w-full h-[350px] rounded-md shadow dark:shadow-gray-700"
                allowfullscreen
              ></iframe>
            </div>

            <ul class="list-none mt-4">
              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Dirección:</span>
                <span class="font-medium">{{
                  data.institucion.direccion
                }}</span>
              </li>

              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Correo:</span>
                <span class="font-medium">{{
                  this.data.institucion.correo
                }}</span>
              </li>

              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Sectores:</span>
                <div class="flex flex-wrap ml-16">
                  <span
                    class="font-medium"
                    v-for="sector in this.data.institucion.sectores"
                    >{{ sector }}</span
                  >
                </div>
              </li>

              <li
                class="flex justify-between mt-2"
                v-if="this.data.institucion.redesSociales.web"
              >
                <span class="text-slate-400 font-medium">Website:</span>
                <span class="font-medium">{{
                  this.data.institucion.redesSociales.web
                }}</span>
              </li>

              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Social:</span>

                <ul class="list-none text-end space-x-0.5">
                  <li
                    class="inline"
                    v-for="(url, name) in data.institucion.redesSociales"
                    :key="name"
                  >
                    <a
                      :href="url"
                      target="_blank"
                      class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:text-white text-slate-400"
                    >
                      <i
                        :class="`uil uil-${name}`"
                        :title="name"
                        class="align-middle"
                      ></i>
                    </a>
                  </li>
                </ul>
                <!--end icon-->
              </li>
            </ul>
          </div>
        </div>

        <!--end col-->
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <!--end container-->
  </section>
  <!-- Segundo moda empresa -->
  <div id="myModalCurriculum" class="modal" v-if="showFormularioCV">
    <!-- Modal para preview de curriculum -->
    <div class="modal" v-if="this.Modal == 1">
  <div
    class="modal-content p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900"
  >
    <span class="close" @click="showFormularioCV = false">&times;</span>
    <h5 class="text-lg font-semibold mb-4">Fecha de postulacion:</h5>
    <input
      type="text"
      v-model="this.pdfTitle"
      placeholder="Título del PDF"
      disabled
      class="form-input border border-slate-100 dark:border-slate-800 w-full"
    />
    <div class="mt-4">
      <iframe
        :src="this.pdfUrl"
        width="100%"
        height="600px"
        class="border border-slate-100 dark:border-slate-800 rounded-md"
      ></iframe>
    </div>
  </div>
</div>
    <!-- Modal para perfil -->
    <div class="modal" v-if="this.Modal == 2">
  <div
    class="modal-content p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900"
  >
    <span class="close" @click="showFormularioCV=false">&times;</span>
    <h5 class="text-lg font-semibold mb-4">Título del chiii</h5>
    <input
      type="text"
      v-model="pdfTitle"
      placeholder="Título del PDF"
      disabled
      class="form-input border border-slate-100 dark:border-slate-800 w-full"
    />
    <div class="mt-4">
      <iframe
        :src="webUrl"
        width="100%"
        height="600px"
        class="border border-slate-100 dark:border-slate-800 rounded-md"
      ></iframe>
    </div>
    <div class="mt-4">
      <button
        @click="savePDF"
        class="bg-blue-600 text-white p-2 rounded-md"
      >
        Guardar
      </button>
    </div>
  </div>
</div>
  </div>
  <!--end section-->
  <!-- End -->
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/Empresa/NavBarEmpresa.vue";

import footers from "@/components/footer/footer.vue";

import switcher from "@/components/General/switcher.vue";

import { usePasantiasAdministracionInstitucionStore } from "@/stores/Instituciones/PasantiasAdministracionInstitucionStore.js";
import Swal from "sweetalert2";
export default {
  setup() {
    const pasantiasAdministracionInstitucionStore =
      usePasantiasAdministracionInstitucionStore();
    return {
      pasantiasAdministracionInstitucionStore,
    };
  },

  computed: {
    mapSrc() {
      // Construir la URL del mapa de Google con la dirección
      const direccionEncoded = encodeURIComponent(
        this.data.institucion.direccion
      );
      return `https://www.google.com/maps/embed/v1/place?q=${direccionEncoded}&key=AIzaSyCoOVExrC3ADb7HXkXLyBZB3zyVqClHZ7w`;
      // Reemplaza TU_API_KEY con tu propia clave de API de Google Maps
    },
  },

  methods: {
    cambioContendor() {
      if (this.contenedor) {
        this.contenedor = false;
      } else {
        this.contenedor = true;
      }
    },

    async fetchPasantiaActual() {
      let loader = this.$loading.show();
      const response =
        await this.pasantiasAdministracionInstitucionStore.fetchPasantiaInstitucionByUUID(
          this.$keycloak.tokenParsed.sub,
          this.id
        );
      if (response == null) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo cargar la pasantia",
        });
        loader.hide();

        this.$router.push("/");
        return;
      }
      loader.hide();
      console.log("lo que me devuelve" + response);
      this.data = response;
      console.log(this.data);
      console.log(this.data.postulantes);
      this.listaPostulantes = this.data.postulantes;
    },
    mostrarInformacionPaante(id, numero,informacion){
      this.Modal=numero;
      this.showFormularioCV=true;
      this.pdfUrl=informacion.aplicacionPasantia.urlCurriculum;
      this.pdfTitle=informacion.aplicacionPasantia.fechaAplicacion;
      this.idEstudiante=id;
      this.idSolicitud=informacion.aplicacionPasantia.idSolicitud;
      this.webUrl = `/empresa/estudiante/${idEstudiante}/solicitud/${idSolicitud}`;
       
    },
    redirectTO(index){
      this.$router.push(
        { name: 'PerfilEstudianteEmpresa', params: 
          { 
            idEstudiante: this.postulantes[index].idPersona, 
            idSolicitud: this.postulantesEstado[index].idAplicacionPasantias
          } 
        }
      );
    },
  },

  props: {
    id: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      webUrl: "",
      listaPostulantes: "",
      pdfUrl: "",
      pdfTitle: "",
      Modal: 0,
      showFormularioCV:false,
      contenedor: false,
      postulantesEstado: [
        {
          idUsuarios: 1,
          activo: true,
        },
        {
          idUsuarios: 2,
          activo: false,
        },
      ],
      data: {
        activoPasantia: true,

        postulantes: [
          {
            idPersona: 1,
            nombre: "Juan",
            apellidoPaterno: "Perez",
            apellidoMaterno: "Garcia",
            fotoPerfil: "https://randomuser.me/api/port",
            telefono: "123456789",
            descripcion: "Estudiante de la carrera de Ingenieria de Sistemas",
          },
        ],

        pasantiasDto: {
          titulo: "",
          descripcion: "",
          areas: [],
          requisitos: [],
          calificaciones: [],
        },
        institucion: {
          nombre: "",
          logoEmpresa: "",
          direccion: "",
          correo: "",
          redesSociales: {
            web: "",
            facebook: "",
            twitter: "",
            linkedin: "",
            instagram: "",
          },
          sectores: [],
        },
      },
      id: "",
      image:
        "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",

      datas: [
        {
          id: 1,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Facebook",
          day: "2 days ago",
          type: "Full Time",
          job: "Web Designer / Developer",
          country: "Australia",
          vacancy: "21 applied",
          vacancy2: "of 40 vacancy",
        },
        {
          id: 2,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Google",
          day: "2 days ago",
          type: "Part Time",
          job: "Marketing Director",
          country: "USA",
          vacancy: "21 applied",
          vacancy2: "of 40 vacancy",
        },
        {
          id: 3,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Android",
          day: "2 days ago",
          type: "Remote",
          job: "Application Developer",
          country: "China",
          vacancy: "21 applied",
          vacancy2: "of 40 vacancy",
        },
        {
          id: 4,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Lenovo",
          day: "2 days ago",
          type: "WFH",
          job: "Senior Product Designer",
          country: "Dubai",
          vacancy: "21 applied",
          vacancy2: "of 40 vacancy",
        },
        {
          id: 5,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Spotify",
          day: "2 days ago",
          type: "Full Time",
          job: "C++ Developer",
          country: "India",
          vacancy: "21 applied",
          vacancy2: "of 40 vacancy",
        },
        {
          id: 6,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Linkedin",
          day: "2 days ago",
          type: "Remote",
          job: "Php Developer",
          country: "Pakistan",
          vacancy: "21 applied",
          vacancy2: "of 40 vacancy",
        },
        {
          id: 7,
          job: "Software Engineering",
          day: "Posted 3 Days ago",
          type: "Full Time",
          salary: "$950 - $1100/mo",
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Circle CI Ltd.",
          location: "Australia",
        },
        {
          id: 8,
          job: "Web Developer",
          day: "Posted 3 Days ago",
          type: "Remote",
          salary: "$2500 - $2600/mo",
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Skype Ltd.",
          location: "America",
        },
        {
          id: 9,
          job: "UX/UI Designer",
          day: "Posted 3 Days ago",
          type: "Freelance",
          salary: "$3500 - $3600/mo",
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Snapchat Ltd.",
          location: "Canada",
        },
        {
          id: 10,
          job: "Human Resource(HR)",
          day: "Posted 3 Days ago",
          type: "Part Time",
          salary: "$2000 - $2500/mo",
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Shreethemes Ltd.",
          location: "UK",
        },
        {
          id: 11,
          job: "Web Designer",
          day: "Posted 3 Days ago",
          type: "Full Time",
          salary: "$1500 - $1600/mo",
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Telegram Ltd.",
          location: "China",
        },
        {
          id: 12,
          job: "Graphic Designer",
          day: "Posted 3 Days ago",
          type: "Part time",
          salary: "$500 - $600/mo",
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Whatsapp Ltd.",
          location: "India",
        },
      ],
      datas1: [
        "Participate in requirements analysis",
        "Write clean, scalable code using C# and .NET frameworks",
        "Test and deploy applications and systems",
        "Revise, update, refactor and debug code",
        "Improve existing software",
        "Develop documentation throughout the software development life cycle (SDLC",
        "Serve as an expert on applications and provide technical support",
      ],
      datas2: [
        "Proven experience as a .NET Developer or Application Developer",
        "good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.",
        "Experience designing, developing and creating RESTful web services and APIs",
        "Basic know how of Agile process and practices",
        "Good understanding of object-oriented programming.",
        "Good understanding of concurrent programming.",
        "Sound knowledge of            application architecture and design.",
        "Excellent problem solving and analytical skills",
      ],
    };
  },
  components: {
    navbar,
    footers,
    switcher,
  },
  mounted() {
    this.id = this.$route.params.id;

    this.fetchPasantiaActual();
  },
};
</script>

<style scoped>
.modal {
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

.modal-content {
  position: relative;
  top: 15%;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  /* Could be more or less, depending on screen size */
  max-width: 600px;
  /* Max width */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation-name: animatetop;
  animation-duration: 0.4s;
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 300px;
    opacity: 1;
  }
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
