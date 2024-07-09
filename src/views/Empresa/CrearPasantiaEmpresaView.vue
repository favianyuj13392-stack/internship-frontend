<template>
    <navbar :container="'container'" :lightNav="'justify-end'" />

    <!-- Start -->
    <section class="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
        <div class="container mt-10">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-6">
                    <div
                        class="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 mb-6">
                        <img :src="data?.institucion.logoEmpresa ? data?.institucion.logoEmpresa : image"
                            class="rounded-full size-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                            alt="" />

                        <div class="md:ms-4 md:mt-0 mt-6">
                            <input type="text" class="text-l font-semibold p-2" v-model="data.pasantiasDto.titulo" placeholder="Título Pasantía" />
                            <div class="mt-2">
                                <span class="text-slate-400 font-medium me-2 inline-block"><i
                                        class="uil uil-building text-[18px] text-cyan-600 me-1"></i>
                                    {{ data?.institucion.nombre ? data?.institucion.nombre : "Lenovo pvt. ltd."
                                    }}</span>
                                <span class="text-slate-400 font-medium me-2 inline-block"><i
                                        class="uil uil-map-marker text-[18px] text-cyan-600 me-1"></i>
                                    {{
                                        data?.institucion.direccion ? data?.institucion.direccion : "Beijing, China"
                                    }}</span>
                            </div>
                        </div>
                    </div>
                    <!--detallesssss-->
                    <h5 class="text-lg font-semibold">Detalles de la pasantia:</h5>

                    <textarea class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full p-2"
                        placeholder="Escribe aquí..." v-model="data.pasantiasDto.descripcion">
                    </textarea>


                    <div class="flex items-center space-x-40 mt-6">
                        <h5 class="text-lg font-semibold">Áreas:</h5>
                        <button
                            @click="agregarArea()"
                            class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white w-full md:w-auto">
                            Agregar
                        </button>
                    </div>

                    <p class="text-slate-400 mt-4">
                        Áreas a las cuales esta dirigida la pasantía
                    </p>
                    <ul class="list-none">
                        <li v-for="item in this.data.pasantiasDto.areas" :key="item" class="text-slate-400 mt-2">
                            <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
                        </li>
                    </ul>

                    <div class="flex items-center space-x-40 mt-6">
                        <h5 class="text-lg font-semibold">Requisistos:</h5>
                        
                        <button
                        @click="agregarRequisitos()"

                            class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white w-full md:w-auto">
                            Agregar
                        </button>
                    </div>

                 

                    <ul class="list-none">
                        <li v-for="item in this.data.pasantiasDto.requisitos" :key="item" class="text-slate-400 mt-2">
                            <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
                        </li>
                    </ul>



                    <div class="flex items-center space-x-40 mt-6">
                        <h5 class="text-lg font-semibold">Funciones:</h5>
                        <button
                        @click="agregarFunciones()"

                            class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white w-full md:w-auto">
                            Agregar
                        </button>
                    </div>

                    <ul class="list-none">
                        <li v-for="item in this.data.pasantiasDto.funciones" :key="item" class="text-slate-400 mt-2">
                            <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
                        </li>
                    </ul>


                    <div class="flex items-center space-x-40 mt-6">
                        <h5 class="text-lg font-semibold">Beneficios:</h5>
                        <button
                        @click="agregarBeneficios()"

                            class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white w-full md:w-auto">
                            Agregar
                        </button>
                    </div>

                    <ul class="list-none">
                        <li v-for="item in this.data.pasantiasDto.beneficios" :key="item" class="text-slate-400 mt-2">
                            <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
                        </li>
                    </ul>

                    <div class="mt-5">
                        <router-link to="/job-apply"
                            class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white md:ms-2 w-full md:w-auto">Editar
                            Pasantia</router-link>
                    </div>
                </div>
                <!--end col-->

                <div class="lg:col-span-4 md:col-span-6">
                    <div class="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                        <div class="p-6">
                            <h5 class="text-lg font-semibold text-cyan-600" v-if="this.data.activoPasantia == true">
                                Aprobado</h5>
                            <h5 class="text-lg font-semibold text-red-600" v-if="this.data.activoPasantia == false">Sin
                                Aprobar</h5>

                        </div>
                        <div class="p-6">
                            <h5 class="text-lg font-semibold">Más información</h5>
                        </div>
                        <div class="p-6 border-t border-slate-100 dark:border-t-gray-700">
                            <ul class="list-none">
                                <li class="flex items-center">
                                    <i data-feather="user-check" class="size-5"></i>

                                    <div class="ms-4">
                                        <p class="font-medium">Employee Type:</p>
                                        <span class="text-purple-600 font-medium text-sm">{{
                                            data?.type ? data?.type : "Full Time"
                                            }}</span>
                                    </div>
                                </li>

                                <li class="flex items-center mt-3">
                                    <i data-feather="map-pin" class="size-5"></i>

                                    <div class="ms-4">
                                        <p class="font-medium">Location:</p>
                                        <span class="text-purple-600 font-medium text-sm">{{
                                            data?.country ? data?.country : "Beijing, China"
                                            }}</span>
                                    </div>
                                </li>

                                <li class="flex items-center mt-3">
                                    <i data-feather="monitor" class="size-5"></i>

                                    <div class="ms-4">
                                        <p class="font-medium">Job Type:</p>
                                        <span class="text-purple-600 font-medium text-sm">{{
                                            data?.job ? data?.job : "Back-end Developer"
                                            }}</span>
                                    </div>
                                </li>

                                <li class="flex items-center mt-3">
                                    <i data-feather="briefcase" class="size-5"></i>

                                    <div class="ms-4">
                                        <p class="font-medium">Experience:</p>
                                        <span class="text-purple-600 font-medium text-sm">2+ years</span>
                                    </div>
                                </li>

                                <li class="flex items-center mt-3">
                                    <i data-feather="book" class="size-5"></i>

                                    <div class="ms-4">
                                        <p class="font-medium">Qualifications:</p>
                                        <span class="text-purple-600 font-medium text-sm">MCA</span>
                                    </div>
                                </li>

                                <li class="flex items-center mt-3">
                                    <i data-feather="dollar-sign" class="size-5"></i>

                                    <div class="ms-4">
                                        <p class="font-medium">Salary:</p>
                                        <span class="text-purple-600 font-medium text-sm">$4000 - $4500</span>
                                    </div>
                                </li>

                                <li class="flex items-center mt-3">
                                    <i data-feather="clock" class="size-5"></i>

                                    <div class="ms-4">
                                        <p class="font-medium">Date posted:</p>
                                        <span class="text-purple-600 font-medium text-sm">28th Feb, 2023</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




                <!--end col-->
            </div>
            <!--end grid-->
        </div>
        <!--end container-->




        <!--end container-->
    </section>


    <section class="relative md:py-24 py-16">
        <div v-if="this.data.activoPasantia">
            <div v-if="this.data.postulantes" class="grid grid-cols-1 mt-10 pb-2 text-center">
                <h3 class="mb-2 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold text-red-400">
                    No hay aún postulantes
                </h3>

            </div>

            <div v-else>
                <div class="grid grid-cols-1 mt-10 pb-2 text-center">
                    <h3 class="mb-2 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
                        Pasantea aprobados en la pasantia
                    </h3>
                    <span>Pasantes aprobados: 2</span>
                    <span>Pasantes pendientes: 10</span>
                </div>
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in this.data.postulantes" :key="item.idPersona"
                        class="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
                        <div
                            class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                            <img :src="item.fotoPerfil" class="size-8" :alt="item.nombre" />
                        </div>
                        <div class="mt-4">
                            <router-link class="text-lg hover:text-cyan-600 font-semibold">
                                {{ item.nombre }} {{ item.apellidoPaterno }} {{ item.apellidoMaterno }}
                            </router-link>
                            <p class="text-slate-400 mt-2">{{ item.descripcion }}</p>
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                            <span class="text-slate-400">
                                <i class="fas fa-envelope pr-1"></i> {{ item.telefono }}
                            </span>
                            <span class="block font-semibold text-green-600"
                                v-if="postulantesEstado.find(e => e.idUsuarios === item.idPersona)?.activo">
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
    </section>




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
        const pasantiasAdministracionInstitucionStore = usePasantiasAdministracionInstitucionStore();
        return {
            pasantiasAdministracionInstitucionStore
        }
    },


    methods: {
        async agregarArea(){
            //agregar un area con swal
            const { value: area } = await Swal.fire({
                title: 'Agregar Area',
                input: 'text',
                inputLabel: 'Area',
                inputPlaceholder: 'Area',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Debes ingresar un area'
                    }
                }
            })

            if (area) {
                this.data.pasantiasDto.areas.push(area);
            }

        },


        async agregarRequisitos(){
            //agregar un area con swal
            const { value: requisito } = await Swal.fire({
                title: 'Agregar Requisito',
                input: 'text',
                inputLabel: 'Requisito',
                inputPlaceholder: 'Requisito',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Debes ingresar un requisito'
                    }
                }
            })

            if (requisito) {
                this.data.pasantiasDto.requisitos.push(requisito);
            }

      
        },

        async agregarFunciones(){
            //agregar un area con swal
            const { value: funcion } = await Swal.fire({
                title: 'Agregar Funcion',
                input: 'text',
                inputLabel: 'Funcion',
                inputPlaceholder: 'Funcion',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Debes ingresar una funcion'
                    }
                }
            })

            if (funcion) {
                this.data.pasantiasDto.funciones.push(funcion);
                console.log(this.data.pasantiasDto.funciones)
            }

      
    
        },

        async agregarBeneficios(){
            //agregar un area con swal
            const { value: beneficio } = await Swal.fire({
                title: 'Agregar Beneficio',
                input: 'text',
                inputLabel: 'Beneficio',
                inputPlaceholder: 'Beneficio',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Debes ingresar un beneficio'
                    }
                }
            })

            if (beneficio) {
                this.data.pasantiasDto.beneficios.push(beneficio);
            }
        },



        async fetchPasantiaActual() {
            let loader = this.$loading.show();
            const response = await this.pasantiasAdministracionInstitucionStore.fetchPasantiaInstitucionByUUID(this.$keycloak.tokenParsed.sub, this.id);
            if (response == null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo cargar la pasantia',
                })
                loader.hide();

                this.$router.push('/');
                return;

            }
            loader.hide();
            console.log(response)
            this.data = response;

        }
    },





    props: {
        id: {
            type: String,
            default: "",
        },
    },



    data() {
        return {
            data: {
                pasantiasDto: {
                    titulo: "",
                    descripcion: "",
                    areas: [],
                    requisitos: [],
                    calificaciones: [],
                    funciones: [],
                    beneficios: [],


                },
                institucion: {
                    nombre: "",
                    logoEmpresa: "",
                    direccion: "",
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
        //this.id = this.$route.params.id;

        //this.fetchPasantiaActual();
    },
};
</script>

<style lang="scss" scoped></style>