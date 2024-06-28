<template>
  <navbar
    :container="'container'"
    :lightNav="'nav-light justify-end'"
    :lightLogo="true"
  />
  <!-- Start Hero -->
  <section
    class="py-20 w-full table relative bg-[url('../../assets/images/hero/bg2.jpg')] bg-top bg-no-repeat bg-cover"
  >
    <div class="absolute inset-0 bg-slate-900/70"></div>
    <div class="container relative">
      <div class="grid grid-cols-1 text-center">
        <h3 class="mb-4 md:text-[26px] text-2xl text-white font-medium">
          Solicitudes de pasantias
        </h3>

        <p class="text-white/80 max-w-xl mx-auto">
          Lugar donde podras las solicitudes de pasantias.
        </p>

        <a
          @click="toggle"
          data-type="youtube"
          data-id="S_CGed6E610"
          class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-cyan-600 mx-auto mt-10 cursor-pointer"
        >
          <i
            class="mdi mdi-play inline-flex items-center justify-center text-2xl"
          ></i>
        </a>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->

  <!-- iframe start  -->
  <div
    :class="isActive ? 'fixed' : 'hidden'"
    class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999"
  >
    <div class="h-[100%] flex items-center justify-center">
      <iframe
        src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed"
        width="700"
        height="500"
        frameborder="0"
      ></iframe>
    </div>
    <button class="text-slate-400 absolute top-[20px] right-[20px]">
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        @click="toggle"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
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
                        placeholder="Buscar pasantia"
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
                      class="filter-search-form relative filter-border bg-gray-50 dark:bg-slate-800"
                    >
                      <i class="uil uil-briefcase-alt icons"></i>
                      <v-select
                        :options="options2"
                        v-model="selected2"
                        class="ms-10"
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
    <div class="container md:mt-16 mt-16">
      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"
      >
        <div
          v-for="item in datas"
          :key="item"
          class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-500"
        >
          <div class="p-6">
            <router-link
              class="title h5 text-lg font-semibold hover:text-cyan-600"
              >{{ item.name }}</router-link
            >
            <router-link
              to="/administrador/pasantia/detalle"
              class="btn btn-icon rounded-full bg-cyan-600/5 group-hover:bg-cyan-600 border-cyan-600/10 text-cyan-600 group-hover:text-white ms-1 ml-3"
              ><i class="uil uil-arrow-up-right"></i
            ></router-link>
            <p class="text-slate-400 mt-2">
              <i class="uil uil-clock text-cyan-600"></i> {{ item.day }}
            </p>

            <div class="flex justify-between items-center mt-4">
              <span
                class="bg-cyan-600/5 text-cyan-600 text-xs font-bold px-2.5 py-0.5 rounded h-5"
                >{{ item.type }}</span
              >

              <p class="text-slate-400">
                <i class="uil uil-usd-circle text-cyan-600"></i>
                {{ item.salary }}
              </p>
            </div>
          </div>

          <div
            class="flex items-center p-6 border-t border-gray-100 dark:border-gray-700"
          >
            <img
              :src="item.image"
              class="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900"
              alt=""
            />

            <div class="ms-3">
              <router-link>
                <h6 class="mb-0 font-semibold text-base">
                  {{ item.company }}
                </h6></router-link
              >
              <span class="text-slate-400 text-sm">{{ item.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--end container-->

    <!--FIIINDE JOB-->
  </section>
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/Administrador/navbarAdministrador.vue";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import footers from "@/components/footer/footer.vue";

import switcher from "@/components/General/switcher.vue";
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
      options2: ["Facebook", "Freelancer", "Remote Work", "Office Work"],
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
        },
        {
          id: 2,
          image:
            "https://seeklogo.com/images/T/Tigo-logo-BDF99BD6CC-seeklogo.com.png",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
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
          language: [
            "HTML",
            "CSS",
            "SASS",
            "SCSS",
            "Photoshop",
            "Graphics",
            "Bootstrap",
          ],
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
          salary: "$950 - $1100/mo",

          company: "Facebook Ltd.",
          location: "Australia",
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
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.jhess {
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Puedes ajustar la opacidad según tus necesidades */
}
</style>
