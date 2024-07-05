<template>
  <navbar
    :container="'container'"
    :lightLogo="true"
    :lightNav="'nav-light justify-end'"
  />
  <!-- Start Hero -->
  <section
    class="relative table w-full py-40 bg bg-center bg-no-repeat bg-cover"
    :style="{ backgroundImage: `url(${data?.fotoInstitucion ? data.fotoInstitucion : image})` }"
  >
    <div class="absolute inset-0 bg-cyan-900/60"></div>
  </section>
  <!--end section-->
  <div class="relative">
    <div
      class="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900"
    >
      <svg
        class="w-full h-auto"
        viewBox="0 0 2880 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
  <!-- End Hero -->

  <section class="relative mb:pb-24 pb-16 -mt-16 z-1">
    <div class="container">
      <div class="grid grid-cols-1">
        <div
          class="md:flex justify-between items-center shadow dark:shadow-gray-700 rounded-md p-6 bg-white dark:bg-slate-900"
        >
          <div class="flex items-center">
            <img
              :src="data?.logoEmpresa ? data?.logoEmpresa : logoEmpresa"
              class="size-20 p-3 shadow dark:shadow-gray-700 rounded-md bg-slate-50 dark:bg-slate-800"
              alt=""
            />

            <div class="ms-4">
              <h5 class="text-xl font-bold">
                {{ data?.nombre ? data?.nombre : "Skype" }}
              </h5>
              <h6 class="text-base text-slate-400">
                <i class="uil uil-map-marker"></i>
                {{ data?.direccion ? data.direccion : "Canberra, Australia" }}
              </h6>
            </div>
          </div>

          <div class="md:mt-0 mt-4">
            <a
              href=""
              class="btn btn-sm bg-cyan-600 hover:bg-cyan-700 border-cyan-600 dark:border-cyan-600 text-white rounded-md"
              >Ver Pasantías</a
            >
          </div>
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
    <!--IMFOMACION DEL LA EMPRESAS-->

    <div class="container mt-12">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div class="lg:col-span-8 md:col-span-7">
          <h5 class="text-xl font-semibold">
            Acerca de {{ data?.nombre ? data?.nombre : "Skype" }}
          </h5>
          <p class="text-slate-400 mt-2">
            {{ data?.descripcion ? data?.descripcion : "Skype is a telecommunications application that specializes in providing video chat and voice calls between computers, tablets, mobile devices, the Xbox One console, and smartwatches over the Internet." }}
          </p>

          <div class="grid grid-cols-12 gap-6 mt-6">
            <div class="col-span-12">
              <img
                :src="data?.fotoInstitucion ? data?.fotoInstitucion : fotoInstitucion"
                class="rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
            </div>
            <div class="col-span-6" v-for="imagen in data?.fotos" v-bind:key="imagen">
              <img
                :src="imagen"
                class="rounded-md shadow dark:shadow-gray-700"
                alt=""
              />
            </div>
          </div>

          <h5 class="text-xl font-semibold mt-6">Pasantias disponibles:</h5>

          <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
            <div
              class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800"
            >
              <div class="p-6">
                <a
                  href=""
                  class="title h5 text-lg font-semibold hover:text-cyan-600"
                  >Software Engineering</a
                >
                <p class="text-slate-400 mt-2">
                  <i class="uil uil-clock text-cyan-600"></i> Posted 3 Days ago
                </p>

                <div class="flex justify-between items-center mt-4">
                  <span
                    class="bg-cyan-600/5 text-cyan-600 text-xs font-bold px-2.5 py-0.5 rounded h-5"
                    >Full Time</span
                  >

                  <p class="text-slate-400">
                    <i class="uil uil-usd-circle text-cyan-600"></i> $950 -
                    $1100/mo
                  </p>
                </div>
              </div>

              <div
                class="flex items-center p-6 border-t border-gray-100 dark:border-gray-700"
              >
                <img
                  src="@/assets/images/company/skype.png"
                  class="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900"
                  alt=""
                />

                <div class="ms-3">
                  <h6 class="mb-0 font-semibold text-base">Skype</h6>
                  <span class="text-slate-400 text-sm">Australia</span>
                </div>
              </div>
            </div>
            <!--end content-->

            <div
              class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800"
            >
              <div class="p-6">
                <a
                  href=""
                  class="title h5 text-lg font-semibold hover:text-cyan-600"
                  >Web Developer</a
                >
                <p class="text-slate-400 mt-2">
                  <i class="uil uil-clock text-cyan-600"></i> Posted 3 Days ago
                </p>

                <div class="flex justify-between items-center mt-4">
                  <span
                    class="bg-cyan-600/5 text-cyan-600 text-xs font-bold px-2.5 py-0.5 rounded h-5"
                    >Remote</span
                  >

                  <p class="text-slate-400">
                    <i class="uil uil-usd-circle text-cyan-600"></i> $2500 -
                    $2600/mo
                  </p>
                </div>
              </div>

              <div
                class="flex items-center p-6 border-t border-gray-100 dark:border-gray-700"
              >
                <img
                  src="@/assets/images/company/skype.png"
                  class="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900"
                  alt=""
                />

                <div class="ms-3">
                  <h6 class="mb-0 font-semibold text-base">Skype</h6>
                  <span class="text-slate-400 text-sm">America</span>
                </div>
              </div>
            </div>
            <!--end content-->
          </div>

          <div class="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
            <h5 class="text-xl font-semibold">Leave A Comment:</h5>

            <form class="mt-8">
              <div class="grid lg:grid-cols-12 lg:gap-6">
                <div class="lg:col-span-6 mb-5">
                  <div class="text-start">
                    <label for="name" class="font-semibold">Your Name:</label>
                    <div class="form-icon relative mt-2">
                      <i
                        data-feather="user"
                        class="size-4 absolute top-3 start-4"
                      ></i>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-input ps-11"
                        placeholder="Name :"
                      />
                    </div>
                  </div>
                </div>

                <div class="lg:col-span-6 mb-5">
                  <div class="text-start">
                    <label for="email" class="font-semibold">Your Email:</label>
                    <div class="form-icon relative mt-2">
                      <i
                        data-feather="mail"
                        class="size-4 absolute top-3 start-4"
                      ></i>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        class="form-input ps-11"
                        placeholder="Email :"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1">
                <div class="mb-5">
                  <div class="text-start">
                    <label for="comments" class="font-semibold"
                      >Your Comment:</label
                    >
                    <div class="form-icon relative mt-2">
                      <i
                        data-feather="message-circle"
                        class="size-4 absolute top-3 start-4"
                      ></i>
                      <textarea
                        name="comments"
                        id="comments"
                        class="form-input ps-11 h-28"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                id="submit"
                name="send"
                class="btn bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white rounded-md w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <!--end col-->

        <div class="lg:col-span-4 md:col-span-5">
          <div
            class="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20"
          >
            <div class="w-full leading-[0] border-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                style="border: 0"
                class="w-full h-[350px] rounded-md shadow dark:shadow-gray-700"
                allowfullscreen
              ></iframe>
            </div>

            <ul class="list-none mt-4">
              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Founded:</span>
                <span class="font-medium">2003</span>
              </li>

              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Founder:</span>
                <span class="font-medium">Niklas Zennström</span>
              </li>

              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Headquarters:</span>
                <span class="font-medium">Luxembourg</span>
              </li>

              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium"
                  >Number of employees:</span
                >
                <span class="font-medium">788</span>
              </li>

              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Website:</span>
                <span class="font-medium">https://skype.com</span>
              </li>

              <li class="flex justify-between mt-2">
                <span class="text-slate-400 font-medium">Social:</span>

                <ul class="list-none text-end space-x-0.5">
                  <li class="inline">
                    <a
                      href="https://dribbble.com/shreethemes"
                      target="_blank"
                      class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:text-white text-slate-400"
                      ><i
                        class="uil uil-dribbble align-middle"
                        title="dribbble"
                      ></i
                    ></a>
                  </li>
                  <li class="inline">
                    <a
                      href="https://www.behance.net/shreethemes"
                      target="_blank"
                      class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:text-white text-slate-400"
                      ><i class="uil uil-behance" title="Behance"></i
                    ></a>
                  </li>
                  <li class="inline">
                    <a
                      href="http://linkedin.com/company/shreethemes"
                      target="_blank"
                      class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:text-white text-slate-400"
                      ><i class="uil uil-linkedin" title="Linkedin"></i
                    ></a>
                  </li>
                  <li class="inline">
                    <a
                      href="https://www.facebook.com/shreethemes"
                      target="_blank"
                      class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:text-white text-slate-400"
                      ><i
                        class="uil uil-facebook-f align-middle"
                        title="facebook"
                      ></i
                    ></a>
                  </li>
                  <li class="inline">
                    <a
                      href="https://www.instagram.com/shreethemes/"
                      target="_blank"
                      class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:text-white text-slate-400"
                      ><i
                        class="uil uil-instagram align-middle"
                        title="instagram"
                      ></i
                    ></a>
                  </li>
                  <li class="inline">
                    <a
                      href="https://twitter.com/shreethemes"
                      target="_blank"
                      class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:text-white text-slate-400"
                      ><i
                        class="uil uil-twitter align-middle"
                        title="twitter"
                      ></i
                    ></a>
                  </li>
                  <li class="inline">
                    <a
                      href="mailto:support@shreethemes.in"
                      class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white dark:text-white text-slate-400"
                      ><i
                        class="uil uil-envelope align-middle"
                        title="email"
                      ></i
                    ></a>
                  </li>
                </ul>
                <!--end icon-->
              </li>
            </ul>

            <div class="mt-4 pt-2 border-t dark:border-t-gray-700">
              <h5 class="text-lg font-semibold">Contact us</h5>

              <form>
                <div class="grid grid-cols-1 gap-2">
                  <div>
                    <label for="name2" class="font-semibold">Your Name:</label>
                    <input
                      name="name"
                      id="name2"
                      type="text"
                      class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                      placeholder="Name :"
                    />
                  </div>

                  <div>
                    <label for="email2" class="font-semibold"
                      >Your Email:</label
                    >
                    <input
                      name="email"
                      id="email2"
                      type="email"
                      class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                      placeholder="Email :"
                    />
                  </div>

                  <div>
                    <label for="subject" class="font-semibold"
                      >Your Question:</label
                    >
                    <input
                      name="subject"
                      id="subject"
                      class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                      placeholder="Subject :"
                    />
                  </div>

                  <div>
                    <label for="comments2" class="font-semibold"
                      >Your Comment:</label
                    >
                    <textarea
                      name="comments"
                      id="comments2"
                      class="form-input border border-slate-100 dark:border-slate-800 mt-2 textarea"
                      placeholder="Message :"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  id="submit2"
                  name="send"
                  class="btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>

      <!--- MAS EMPREASA RELACIONADA-->

      <!--end container-->

      <!--end container-->
      <!-- FIN DE EMPRESAS RELACINADAS-->
      <!--end grid-->
    </div>
    <div class="grid grid-cols-1 pb-8 py-10 text-center">
      <h3
        class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold"
      >
        Usuarios de la empresa
      </h3>

      <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
        Todos los usuarios que tienen acceso a la empresa
      </p>
    </div>
    <div class="container">
      <div
        class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]"
      >
        <div
          v-for="item in datas"
          :key="item"
          class="group px-3 py-5 rounded-md shadow dark:shadow-gray-700 hover:shadow-cyan-600/10 dark:hover:shadow-cyan-600/10 text-center bg-white dark:bg-slate-900 hover:bg-cyan-600/5 dark:hover:bg-cyan-600/5 transition duration-500"
        >
          <router-link>
            <i
              class="uil uil-trash-alt size-8 bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500"
            ></i>
          </router-link>
          <div
            class="size-16 bg-cyan-600/5 group-hover:bg-cyan-600 text-cyan-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto"
          >
            <i class="uil uil-user"></i>
          </div>

          <div class="content mt-1">
            <a
              href=""
              class="title text-lg font-semibold hover:text-cyan-600"
              >{{ item.name }}</a
            >
            <p class="text-slate-400 mt-1">
              {{ item.name2 }} <br />
              {{ item.job }}
            </p>
          </div>
        </div>

        <!--end content-->
      </div>
      <!--end grid-->
    </div>
    <!--FIN DE LA INFROMACION DE LA EMPRESA-->
  </section>
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/Administrador/navbarAdministrador.vue";

import footers from "@/components/footer/footer.vue";

import switcher from "@/components/General/switcher.vue";
import { useEmpresasAdminStore } from "@/stores/Administradores/empresasAdminStore"; 
import Swal from "sweetalert2";
export default {
  methods: {
    async getEmpresaById(id) {
      const loader = this.$loading.show();
      try {
        const empresa = await this.empresasStore.getEmpresaById(id, this.$keycloak.idTokenParsed.sub)
        console.log(empresa);
        if(empresa){
          this.data = empresa;
          return;
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo obtener la empresa",
        });
      } catch (error) {
        console.log(error);
      }finally{
        loader.hide();
      }
    }
  },
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      empresasStore: useEmpresasAdminStore(),
      data: "",
      id: "",
      image:
        "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",

      datas: [
        {
          id: 1,
          icon: "uil uil-use",
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Daniel Aldazosa",
          name2: "@ucb.edu.bo",
          day: "2 days ago",
          type: "Full Time",
          job: "Web Designer / Developer",
          country: "Australia",
          vacancy: "21 applied",
          vacancy2: "of 40 vacancy",
          job: "7777761",
          location: "Rush",
          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",
          location: "Rush",
          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",
          location: "Rush",
          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",
          location: "Rush",
          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",
          location: "Rush",
          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",
          location: "Rush",
          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",

          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",

          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",

          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",

          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",

          title: "Digital Marketing Solutions for Tomorrow",
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
          job: "6 Jobs",

          title: "Digital Marketing Solutions for Tomorrow",
        },
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
    this.getEmpresaById(this.id);  
  },
};
</script>

<style lang="scss" scoped></style>
