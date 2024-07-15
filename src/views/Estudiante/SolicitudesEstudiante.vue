<template>
  <navbar :container="'container'" :lightNav="'justify-end'" />
  <!-- Start -->
  <section
    class="py-8 h-[700px] items-center flex relative contendorPrincipal"
    id="home"
  >
    <div class="container relative">
      <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div class="lg:col-span-7 md:col-span-6">
          <div class="lg:me-8">
            <h4
              class="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold"
            >
              Encuentra
              <span
                class="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-cyan-600 relative inline-block"
                ><span class="relative text-white font-bold"
                  >tu pasantia</span
                ></span
              >
              <br class="sm:mt-10" />
            </h4>
            <h4
              class="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold"
            >
              soñada
              <span
                class="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-cyan-500 relative inline-block"
                ><span class="relative text-white font-bold"
                  >con UCB</span
                ></span
              >
            </h4>

            <p class="text-slate-400 text-lg max-w-xl">
              Haz contacto con las mejores empresas a nivel nacional, junto a la
              Universidad Católica Boliviana.
            </p>
          </div>
        </div>

        <div class="lg:col-span-5 md:col-span-6">
          <div class="relative">
            <div class="relative flex justify-end">
              <img
                src="../../assets/images/about/ab01.jpg"
                class="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700"
                alt=""
              />
              <div
                class="absolute lg:bottom-20 -bottom-24 xl:-end-20 lg:-end-10 end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 z-2"
              >
                <h5 class="text-lg font-semibold mb-3">Más de 100 pasantias</h5>

                <ul class="list-none relative">
                  <li class="inline-block relative">
                    <a href=""
                      ><img
                        src="../../assets/images/team/01.jpg"
                        class="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
                        alt=""
                    /></a>
                  </li>
                  <li class="inline-block relative -ms-3">
                    <a href=""
                      ><img
                        src="../../assets/images/team/02.jpg"
                        class="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
                        alt=""
                    /></a>
                  </li>
                  <li class="inline-block relative -ms-3">
                    <a href=""
                      ><img
                        src="../../assets/images/team/03.jpg"
                        class="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
                        alt=""
                    /></a>
                  </li>
                  <li class="inline-block relative -ms-3">
                    <a href=""
                      ><img
                        src="../../assets/images/team/04.jpg"
                        class="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
                        alt=""
                    /></a>
                  </li>
                  <li class="inline-block relative -ms-3">
                    <a href=""
                      ><img
                        src="../../assets/images/team/05.jpg"
                        class="size-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500"
                        alt=""
                    /></a>
                  </li>
                  <li class="inline-block relative -ms-3">
                    <a
                      to="/pasantias"
                      class="btn btn-icon table-cell rounded-full bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white hover:z-1 hover:scale-105"
                      ><i class="uil uil-plus"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="absolute md:-start-5 start-0 -bottom-16">
              <img
                src="../../assets/images/about/ab04.jpg"
                class="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl"
                alt=""
              />

              <div
                class="absolute flex justify-between items-center -top-6 md:-start-10 start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-max"
              >
                <i class="uil uil-bell text-[24px] text-amber-500"></i>
                <p class="text-lg font-semibold mb-0 ms-2">
                  Recibe notificaciones!
                </p>
              </div>
            </div>

            <div
              class="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tl to-cyan-600/5 via-cyan-600/50 from-cyan-600 bottom-1/2 translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -z-1 rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Start -->
  <section class="relative bg-slate-50 dark:bg-slate-800 py-16 lg:mt-0 mt-0 mt-0">
    <div class="container">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3
          class="mb-0 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold"
        >
          Solicitudes aprobadas
        </h3>
      </div>
      <!--end grid-->

      <div
        class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"
      >
        <div
          v-for="item in datas"
          :key="item"
          class="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit"
        >
          <div class="p-6">
            <div class="flex items-center">
              <div
                class="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md"
              >
                <img :src="item.image" class="size-8" alt="" />
              </div>

              <div class="ms-3">
                <router-link
                  class="inline-block text-[16px] font-semibold hover:text-green-600 transition-all duration-500 me-1"
                >
                  Empresa : {{ item.name }}</router-link
                >

                <div>
                  <span
                    class="bg-green-600/10 inline-block text-green-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1"
                    >{{ item.type }}</span
                  >
                </div>
              </div>
            </div>

            <p class="text-slate-400 py-3">{{ item.title }}</p>

            <div>
              <span
                v-for="language in item.language"
                :key="language"
                class="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1"
                >{{ language }}</span
              >
            </div>
          </div>

          <div
            class="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center"
          >
            <div class="lg:inline-block flex justify-between">
              <span class="inline-block me-1 text-slate-400"
                ><i
                  class="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"
                ></i
                >{{ item.location }}</span
              >
            </div>

            <router-link
              to="/job-apply"
              class="btn btn-sm rounded-md bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
              >Ver pasantia</router-link
            >
          </div>
        </div>
        <!--end content-->
      </div>
      <!--end grid-->
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3
          class="mt-10 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold"
        >
          Solicitudes pendientes
        </h3>
      </div>
      <!--end grid-->

      <div
        class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"
      >
        <div
          v-for="item in datas"
          :key="item"
          class="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit"
        >
          <div class="p-6">
            <div class="flex items-center">
              <div
                class="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md"
              >
                <img :src="item.image" class="size-8" alt="" />
              </div>

              <div class="ms-3">
                <router-link
                  class="inline-block text-[16px] font-semibold hover:text-yellow-600 transition-all duration-500 me-1"
                  >{{ item.name }}</router-link
                >
               
                <div>
                  <span
                    class="bg-yellow-600/10 inline-block text-yellow-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1"
                    >{{ item.type }}</span
                    >
                </div>
              </div>
            </div>

            <p class="text-slate-400 py-3">{{ item.title }}</p>

            <div>
              <span
                v-for="language in item.language"
                :key="language"
                class="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1"
                >{{ language }}</span
              >
            </div>
          </div>

          <div
            class="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center"
          >
            <div class="lg:inline-block flex justify-between">
              
              <span class="inline-block me-1 text-slate-400"
                ><i
                  class="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"
                ></i
                >{{ item.location }}</span
              >
            </div>

            <router-link
              to="/job-apply"
              class="btn btn-sm rounded-md bg-yellow-600 hover:bg-yellow-700 border-yellow-600 hover:border-yellow-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
              >Ver pasantia</router-link
            >
          </div>

         
        </div>
        <!--end content-->
      </div>

      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/General/navbarGeneral.vue";
import footers from "@/components/footer/footer.vue";
import switcher from "@/components/General/switcher.vue";
import Navbar from "@/components/navbar/navbar.vue";
export default {
  components: {
    navbar,
    footers,
    switcher,
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          image: "../../assets/images/company/facebook-logo.png",
          name: "Web Designer",
          day: "2 days ago",
          type: "Full Time",
          time: "1 to 3 months",
          salary: "$16 - $20",
          title: "Looking for an experienced Web Designer for an our company.",
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
          location: "Australia",
        },
        {
          id: 2,
          image: "../../assets/images/company/facebook-logo.png",
          name: "Marketing Director",
          day: "2 days ago",
          type: "Part Time",
          time: "1 to 3 months",
          salary: "$16 - $20",
          title: "Looking for an experienced Web Designer for an our company.",
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
          location: "USA",
        },
        {
          id: 3,
          image: "../../assets/images/company/facebook-logo.png",
          name: "App Developer",
          day: "2 days ago",
          type: "Remote",
          time: "1 to 3 months",
          salary: "$16 - $20",
          title: "Looking for an experienced Web Designer for an our company.",
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
          location: "China",
        },
        {
          id: 4,
          image: "../../assets/images/company/facebook-logo.png",
          name: "Product Designer",
          day: "2 days ago",
          type: "WFH",
          time: "1 to 3 months",
          salary: "$16 - $20",
          title: "Looking for an experienced Web Designer for an our company.",
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
          location: "Dubai",
        },
        {
          id: 5,
          image: "../../assets/images/company/facebook-logo.png",
          name: "C++ Developer",
          day: "2 days ago",
          type: "Full Time",
          time: "1 to 3 months",
          salary: "$16 - $20",
          title: "Looking for an experienced Web Designer for an our company.",
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
          location: "India",
        },
        {
          id: 6,
          image: "../../assets/images/company/facebook-logo.png",
          name: "Php Developer",
          day: "2 days ago",
          type: "Remote",
          time: "1 to 3 months",
          salary: "$16 - $20",
          title: "Looking for an experienced Web Designer for an our company.",
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
          location: "Pakistan",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .contendorPrincipal {
    margin-top: 3rem;
  }
}
</style>
