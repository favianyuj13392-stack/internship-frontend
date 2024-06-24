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
    <div class="absolute inset-0 bg-emerald-900/90"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-10">
        <h3
          class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white"
        >
          Job Vacancies
        </h3>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
      <ul
        class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block"
      >
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"
        >
          <router-link to="/">Jobstack</router-link>
        </li>
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
          aria-current="page"
        >
          Job Listing
        </li>
      </ul>
    </div>
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
  <section class="relative md:py-24 py-16">
    <div class="container">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <!--sidebar 
       
       -->
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
                <span class="inline-block text-sm text-slate-400">{{
                  item.day
                }}</span>
                <div>
                  <span
                    class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1"
                    >{{ item.type }}</span
                  >
                  <span class="text-sm font-medium inline-block me-1"
                    >Est. time:
                    <span class="text-slate-400">{{ item.time }}</span></span
                  >
                  <span class="text-sm font-medium inline-block me-1"
                    >Hourly:
                    <span class="text-slate-400">{{ item.salary }}</span></span
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
              <span class="inline-block me-1 font-semibold"
                ><i
                  class="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"
                ></i
                >Verified</span
              >
              <ul
                class="list-none inline-block me-1 text-yellow-400 space-x-0.5"
              >
                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                <li class="inline"><i class="mdi mdi-star text-lg"></i></li>
                <li class="inline text-slate-400 font-semibold">4.8</li>
              </ul>
              <span class="inline-block me-1 text-slate-400"
                ><i
                  class="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"
                ></i
                >{{ item.location }}</span
              >
            </div>

            <router-link
              to="/job-apply"
              class="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4"
              >Apply Now</router-link
            >
          </div>

          <a
            href=""
            class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3"
            ><i data-feather="bookmark" class="size-4"></i
          ></a>
        </div>
        <!--end content-->
        <div class="lg:col-span-8 md:col-span-6">
          <div class="grid grid-cols-1 gap-[30px]">
            <listings />
          </div>
          <pagination />
        </div>
      </div>
    </div>
  </section>
  <footers />
</template>

<script>
import navbar from "@/components/General/navbarGeneral.vue";

import explore from "@/components/explore-job.vue";
import footers from "@/components/footer/footer.vue";
import switcher from "@/components/switcher.vue";
export default {
  data() {
    return {
      datas: [
        {
          id: 1,
          image: "../../../assets/images/company/facebook-logo.png",
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
          image: "../../../assets/images/company/google-logo.png",
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
          image: "../../../assets/images/company/android.png",
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
          image: "../../../assets/images/company/lenovo-logo.pn",
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
          image: "../../../assets/images/company/facebook-logo.png",
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
          id: 6,
          image: "../../../assets/images/company/google-logo.png",
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
          id: 7,
          image: "../../../assets/images/company/android.png",
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
          id: 8,
          image: "../../../assets/images/company/lenovo-logo.pn",
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
      ],
    };
  },
  components: {
    navbar,

    explore,
    footers,
    switcher,
  },
};
</script>

<style lang="scss" scoped></style>
