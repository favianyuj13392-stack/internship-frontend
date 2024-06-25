<template>
  <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
    <div class="lg:col-span-8 md:col-span-6">
      <h3
        class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold"
      >
        Empresas junto a nosotros
      </h3>
      <p class="text-slate-400 max-w-xl">
        Contamos con conexion de mas de 10 empresas reconocidas a nivel nacional
      </p>
    </div>
  </div>
  <!--end grid-->

  <div class="grid grid-cols-1 mt-7 relative">
    <div class="tiny-five-item">
      <div v-for="item in datas" :key="item" class="tiny-slide">
        <div
          class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1"
        >
          <img :src="item.image" alt="" />
          <div class="absolute inset-0 bg-slate-900/50"></div>

          <div class="absolute bottom-0 p-4">
            <a
              href=""
              class="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500"
              >{{ item.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--grid-->
</template>
<script>
import { tns } from "tiny-slider/src/tiny-slider";
import image01 from "../assets/images/work/01.jpg";
import image02 from "../assets/images/work/02.jpg";
export default {
  data() {
    return {
      datas: [
        {
          image: image01,
          name: "Product & Branding Design",
        },
        {
          image: image02,
          name: "Product & Branding Design",
        },
        {
          image: image01,
          name: "Product & Branding Design",
        },
        {
          image: image02,
          name: "Product & Branding Design",
        },
        {
          image: image01,
          name: "Product & Branding Design",
        },
        {
          image: image02,
          name: "Product & Branding Design",
        },
      ],
    };
  },
  mounted() {
    tns({
      container: ".tiny-five-item",
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      controlsText: [
        '<i class="mdi mdi-chevron-left "></i>',
        '<i class="mdi mdi-chevron-right"></i>',
      ],
      nav: false,
      speed: 400,
      gutter: 0,
      responsive: {
        1025: {
          items: 5,
        },

        992: {
          items: 4,
        },

        767: {
          items: 3,
        },

        425: {
          items: 1,
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped></style>
