<template>
  <navbar :container="'container'" :lightNav="'justify-end'" />
  <!-- Google Map -->
  <section class="relative py-20 w-full">
    <div class="absolute inset-0 bg-cyan-600/5 dark:bg-cyan-600/10"></div>
    <div class="container z-1">
      <div class="grid grid-cols-1 text-center relative">
        <h4
          class="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold"
        >
          Dashboard <span class="text-cyan-600 font-bold">de la</span>
          <br />
          <span class="text-cyan-600 font-bold">INTERNSHIP</span> by UCB
        </h4>

        <div class="d-flex">
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
              <i class="uil uil-chart-line text-[20px] text-cyan-500"></i>
              <i class="uil uil-chart-pie-alt text-[20px] text-cyan-500"></i>
              <span
                class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"
              ></span>
            </label>
          </span>
        </div>

        <!--end grid-->

        <div class="absolute -top-10 start-1/2 -translate-x-1/2">
          <div
            class="size-10 animate-[bounce_2s_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md"
          >
            <img
              src="https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png"
              class="size-9"
              alt=""
            />
          </div>
        </div>

        <div class="absolute top-[20%] start-10">
          <div
            class="size-10 animate-[spin_5s_linear_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md"
          >
            <img
              src="https://lpz.ucb.edu.bo/wp-content/uploads/2022/04/ICO.png"
              class="size-9 w-19"
              alt=""
            />
          </div>
        </div>

        <div class="absolute top-[20%] end-1">
          <div
            class="size-10 bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md"
          >
            <img
              src="https://lpz.ucb.edu.bo/wp-content/uploads/2022/04/COM.png"
              class="size-9 w-19"
              alt=""
            />
          </div>
        </div>

        <div class="absolute top-3/4 start-1">
          <div
            class="size-10 bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md"
          >
            <img
              src="https://lpz.ucb.edu.bo/wp-content/uploads/2022/04/SIS.png"
              class="size-9 w-15"
              alt=""
            />
          </div>
        </div>

        <div class="absolute top-3/4 end-10">
          <div
            class="size-10 animate-[spin_5s_linear_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md"
          >
            <img
              src="https://lpz.ucb.edu.bo/wp-content/uploads/2022/04/CPO.png"
              class="size-9 w-19"
              alt=""
            />
          </div>
        </div>

        <div class="absolute -bottom-16 start-1/2 -translate-x-1/2">
          <div
            class="size-10 animate-pulse bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md"
          >
            <img
              src="https://lpz.ucb.edu.bo/wp-content/uploads/2023/01/web-Acreditada-IAC-CINDA.jpg"
              class="size-9"
              alt=""
            />
          </div>
        </div>
      </div>
      <!--end grid-->
    </div>
    <section class="relative md:py-24 py-16">
      <!-- Start -->
      <div v-if="contenedor" class="container">
        <div
          class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]"
        >
          <div
            v-for="item in datas"
            :key="item"
            class="group px-3 py-10 rounded-md shadow dark:shadow-gray-700 hover:shadow-cyan-600/10 dark:hover:shadow-cyan-600/10 text-center bg-white dark:bg-slate-900 hover:bg-cyan-600/5 dark:hover:bg-cyan-600/5 transition duration-500"
          >
            <div
              class="size-16 bg-cyan-600/5 group-hover:bg-cyan-600 text-cyan-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto"
            >
              <i :class="item.icon"></i>
            </div>

            <div class="content mt-6">
              <a href="" class="title text-lg font-semibold hover:text-cyan-600"
                >{{ item.name }} <br />
                {{ item.name2 }}</a
              >
              <p class="text-slate-400 mt-3">{{ item.job }}</p>
            </div>
          </div>
          <!--end content-->
        </div>
        <!--end grid-->
      </div>
      <!--end container-->
      <!-- Start -->
      <div v-else class="container">
        <!--end grid-->
        <div
          class="bg-white flex justify-center dark:bg-cyan-700 rounded-md shadow dark:shadow-gray-700 transition duration-500"
        >
          <img
            src="https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png"
            class="size-60 m-2"
            alt=""
          />
        </div>
      </div>
      <!--end container-->
    </section>
    <!--end container-->
  </section>
  <!--end section-->

  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/Administrador/navbarAdministrador.vue";
import footers from "@/components/footer/footer.vue";

import switcher from "@/components/General/switcher.vue";
export default {
  data() {
    return {
      contenedor: false,
      datas: [
        {
          icon: "uil uil-phone",
          name: "Telefono",
          desc: "Lunes a jueves de 08:30 a las 16:00",
          href: "tel:+ 591 (2) 2782222",
          title: "+ 591 (2) 2782222",
          icon: "uil uil-gitlab",
          name: "Business",
          name2: "Development",
          job: "74 Jobs",
        },
        {
          icon: "uil uil-envelope",
          name: "Email",
          desc: "Comunicate con nosotros atraves de correo electronico",
          href: "email :pzapata@ucb.edu.bo",
          title: "pzapata@ucb.edu.bo",
          icon: "uil uil-gitlab",
          name: "Business",
          name2: "Development",
          job: "74 Jobs",
        },
        {
          icon: "uil uil-map-marker",
          name: "Ubicación",
          desc: "Av. 14 de Septiembre Nº 4807 esq. calle 2 de Obrajes",
          href: "https://maps.app.goo.gl/kYtnX1WQKetvAHqf7",
          title: "Ver en Google Maps",
          icon: "uil uil-gitlab",
          name: "Business",
          name2: "Development",
          job: "74 Jobs",
        },
        {
          icon: "uil uil-map-marker",
          name: "Ubicación",
          desc: "Av. 14 de Septiembre Nº 4807 esq. calle 2 de Obrajes",
          href: "https://maps.app.goo.gl/kYtnX1WQKetvAHqf7",
          title: "Ver en Google Maps",
          icon: "uil uil-gitlab",
          name: "Business",
          name2: "Development",
          job: "74 Jobs",
        },
        {
          icon: "uil uil-map-marker",
          name: "Ubicación",
          desc: "Av. 14 de Septiembre Nº 4807 esq. calle 2 de Obrajes",
          href: "https://maps.app.goo.gl/kYtnX1WQKetvAHqf7",
          title: "Ver en Google Maps",
          icon: "uil uil-gitlab",
          name: "Business",
          name2: "Development",
          job: "74 Jobs",
        },
      ],
    };
  },
  methods: {
    cambioContendor() {
      if (this.contenedor) {
        this.contenedor = false;
      } else {
        this.contenedor = true;
      }
    },
  },
  components: {
    navbar,
    footers,
    switcher,
  },
};
</script>

<style lang="scss" scoped>
img {
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.1));
}
</style>
