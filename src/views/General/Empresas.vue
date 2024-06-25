<template>
  <navbar
    :container="'container'"
    :lightNav="'nav-light justify-end'"
    :lightLogo="true"
  />
  <!-- Start Hero -->
  <section
    class="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover"
  >
    <div class="absolute inset-0 bg-cyan-900/90"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-10">
        <h3
          class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white"
        >
          Empresas asociadas
        </h3>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
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

  <section class="relative -mt-[42px] md:pb-24 pb-16">
    <div class="container z-1">
      <div class="d-flex" id="reserve-form">
        <div class="md:w-5/6 mx-auto">
          <div class="lg:col-span-10">
            <div
              class="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3"
            >
              <form action="#">
                <div class="registration-form text-dark text-start">
                  <div
                    class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6"
                  >
                    <div class="filter-search-form relative filter-border">
                      <i class="uil uil-briefcase-alt icons"></i>
                      <input
                        name="name"
                        type="text"
                        id="job-keyword"
                        class="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        placeholder="Buscar empresa"
                      />
                    </div>

                    <div
                      class="filter-search-form relative filter-border bg-gray-50 dark:bg-slate-800"
                    >
                      <i class="uil uil-map-marker icons"></i>
                      <v-select
                        :options="options"
                        v-model="selected"
                        class="ms-10"
                      ></v-select>
                    </div>

                    <div
                      class="multiple2 filter-search-form relative filter-border bg-gray-50 dark:bg-slate-800"
                    >
                      <i class="uil uil-briefcase-alt icons"></i>
                      <v-select
                        :options="options2"
                        v-model="selected2"
                        multiple
                        class="ms-10 multiple"
                      ></v-select>
                    </div>

                    <input
                      type="submit"
                      id="search"
                      name="Buscar"
                      style="height: 60px"
                      class="btn bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white searchbtn submit-btn w-100"
                      value="Buscar"
                    />
                  </div>
                  <!--end grid-->
                </div>
                <!--end container-->
              </form>
            </div>
          </div>
          <!--ed col-->
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
    <!-- JOBGRIDDONNN-->
    <div class="container mt-10">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        <div
          v-for="item in datas"
          :key="item"
          class="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div
                class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md"
              >
                <img :src="item.image" class="size-8" alt="" />
              </div>

              <div class="ms-3">
                <router-link
                  to="/Empresas/Detalle"
                  class="block text-[20px] font-semibold hover:text-cyan-600 transition-all duration-500"
                  >{{ item.name }}</router-link
                >
                <span class="block text-sm text-slate-400">junto a UCB</span>
              </div>
            </div>

            <span
              class="bg-cyan-600/10 group-hover:bg-cyan-600 inline-block text-cyan-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500"
              ><i
                class="mdi mdi-check-decagram mdi-18px text-blue-500 me-1 group-hover:text-white"
              ></i
              >Verificado</span
            >
          </div>

          <div class="mt-6">
            <p
              class="text-slate-400 text-lg hover:text-cyan-600 transition-all duration-500"
            >
              Descripcion de la empresa
            </p>
            <div class="py-2">
              <span
                v-for="language in item.language"
                :key="language"
                class="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1"
                >{{ language }}</span
              >
            </div>
          </div>

          <div class="mt-1">
            <div class="mt-2 mb-2">
              <span class="text-slate-400 text-sm"
                ><span
                  class="text-slate-900 dark:text-white font-semibold inline-block"
                  >10 pasantias disponibles</span
                >
                de 40
              </span>
            </div>
            <div
              class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
            >
              <div
                class="bg-cyan-600 h-[6px] rounded-full"
                style="width: 55%"
              ></div>
            </div>
            <div class="mt-2">
              <h6 class="text-base font-medium">
                <i class="uil uil-map-marker"></i> La Paz, Bolivia
              </h6>
            </div>
          </div>
        </div>

        <!--end content-->
      </div>
      <!--end grid-->

      <!--PAGINACIONNN-->
      <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
        <div class="md:col-span-12 text-center">
          <nav aria-label="Page navigation example">
            <ul class="inline-flex items-center -space-x-px">
              <li>
                <a
                  href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                >
                  <i
                    class="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                  >1</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                  >2</a
                >
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="z-10 size-[40px] inline-flex justify-center items-center text-white bg-cyan-600 border border-cyan-600"
                  >3</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                  >4</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                  >5</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-cyan-600 dark:hover:border-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-600"
                >
                  <i
                    class="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"
                  ></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!--end col-->
      </div>
      <!--end grid-->
      <!--FIN DE PAGINACION-->
    </div>

    <!--FIIINDE JOB-->
  </section>
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/General/navbarGeneral.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import footers from "@/components/footer/footer.vue";
import switcher from "@/components/switcher.vue";
export default {
  data() {
    return {
      options: [
        "Miraflores",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Canada",
        "Cape Verde",
        "Denmark",
        "Djibouti",
        "Eritrea",
        "Estonia",
        "Gambia",
      ],
      selected: "Miraflores",
      options2: ["Tecnologia", "Freelancer", "Remote Work", "Office Work"],
      selected2: [],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
        },
      ],
    };
  },
  components: {
    navbar,
    vSelect,

    footers,
    switcher,
  },
};
</script>

<style lang="scss" scoped>
.vs__selected .multiple {
  height: 1rem;
  background-color: rgb(68, 83, 83);
}
.multiple2 {
}
</style>
