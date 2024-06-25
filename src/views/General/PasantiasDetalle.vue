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
              :src="data?.image ? data?.image : image"
              class="rounded-full size-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
              alt=""
            />

            <div class="md:ms-4 md:mt-0 mt-6">
              <h5 class="text-xl font-semibold">
                {{ data?.job ? data?.job : "Back-End Developer" }}
              </h5>
              <div class="mt-2">
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i
                    class="uil uil-building text-[18px] text-cyan-600 me-1"
                  ></i>
                  {{ data?.name ? data?.name : "Lenovo pvt. ltd." }}</span
                >
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i
                    class="uil uil-map-marker text-[18px] text-cyan-600 me-1"
                  ></i>
                  {{
                    data?.country ? data?.country : "Beijing,    China"
                  }}</span
                >
              </div>
            </div>
          </div>
          <!--detallesssss-->
          <h5 class="text-lg font-semibold">Detalles de la pasantia:</h5>

          <p class="text-slate-400 mt-4">
            One disadvantage of Lorum Ipsum is that in Latin certain letters
            appear more frequently than others - which creates a distinct visual
            impression. Moreover, in Latin only words at the beginning of
            sentences are capitalized.
          </p>
          <p class="text-slate-400 mt-4">
            This means that Lorem Ipsum cannot accurately represent, for
            example, German, in which all nouns are capitalized. Thus, Lorem
            Ipsum has only limited suitability as a visual filler for German
            texts. If the fill text is intended to illustrate the
            characteristics of different typefaces.
          </p>
          <p class="text-slate-400 mt-4">
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
          </p>

          <h5 class="text-lg font-semibold mt-6">Areas:</h5>
          <p class="text-slate-400 mt-4">
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
          </p>
          <ul class="list-none">
            <li v-for="item in datas1" :key="item" class="text-slate-400 mt-2">
              <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
            </li>
          </ul>

          <h5 class="text-lg font-semibold mt-6">
            Requisistos necesarios y calificaciones:
          </h5>
          <p class="text-slate-400 mt-4">
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
          </p>
          <ul class="list-none">
            <li v-for="item in datas1" :key="item" class="text-slate-400 mt-2">
              <i class="uil uil-arrow-right text-cyan-600 me-1"></i>{{ item }}
            </li>
          </ul>

          <div class="mt-5">
            <router-link
              to="/job-apply"
              class="btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white md:ms-2 w-full md:w-auto"
              >Postula ahora</router-link
            >
          </div>
        </div>
        <!--end col-->

        <div class="lg:col-span-4 md:col-span-6">
          <div
            class="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20"
          >
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
                    <span class="text-purple-600 font-medium text-sm"
                      >2+ years</span
                    >
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
                    <span class="text-purple-600 font-medium text-sm"
                      >$4000 - $4500</span
                    >
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <i data-feather="clock" class="size-5"></i>

                  <div class="ms-4">
                    <p class="font-medium">Date posted:</p>
                    <span class="text-purple-600 font-medium text-sm"
                      >28th Feb, 2023</span
                    >
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

    <div class="container lg:mt-24 mt-16">
      <div v-if="related" class="grid grid-cols-1 pb-8 text-center">
        <h3
          class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold"
        >
          Related Vacancies
        </h3>

        <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 30000+ companies worldwide.
        </p>
      </div>
      <!--end grid-->

      <div v-else class="grid grid-cols-1 pb-8 text-center">
        <h3
          class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold"
        >
          Pasantias similares
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">
          Conoce mas pasantias con areas similares a tu busqueda actual
        </p>
      </div>
      <!--end grid-->

      <div
        v-if="jobs"
        class="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]"
      >
        <div
          v-for="item in datas.slice(0, 3)"
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
                  to="/employer-detail"
                  class="block text-[16px] font-semibold hover:text-cyan-600 transition-all duration-500"
                  >{{ item.name }}</router-link
                >
                <span class="block text-sm text-slate-400">{{ item.day }}</span>
              </div>
            </div>

            <span
              class="bg-cyan-600/10 group-hover:bg-cyan-600 inline-block text-cyan-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500"
              >{{ item.type }}</span
            >
          </div>

          <div class="mt-6">
            <router-link
              to="/job-detail-one"
              class="text-lg hover:text-cyan-600 font-semibold transition-all duration-500"
              >{{ item.job }}</router-link
            >
            <h6 class="text-base font-medium">
              <i class="uil uil-map-marker"></i> {{ item.country }}
            </h6>
          </div>

          <div class="mt-6">
            <div
              class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
            >
              <div
                class="bg-cyan-600 h-[6px] rounded-full"
                style="width: 55%"
              ></div>
            </div>
            <div class="mt-2">
              <span class="text-slate-400 text-sm"
                ><span
                  class="text-slate-900 dark:text-white font-semibold inline-block"
                  >{{ item.vacancy }}</span
                >
                {{ item.vacancy2 }}</span
              >
            </div>
          </div>
        </div>
        <!--end content-->
      </div>
      <!--end grid-->

      <div v-else class="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
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
                  class="block text-[16px] font-semibold hover:text-cyan-600 transition-all duration-500"
                  >{{ item.name }}</router-link
                >
                <span class="block text-sm text-slate-400">{{ item.day }}</span>
              </div>
            </div>

            <span
              class="bg-cyan-600/10 group-hover:bg-cyan-600 inline-block text-cyan-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500"
              >{{ item.type }}</span
            >
          </div>

          <div class="mt-6">
            <router-link
              class="text-lg hover:text-cyan-600 font-semibold transition-all duration-500"
              >{{ item.job }}</router-link
            >
            <h6 class="text-base font-medium">
              <i class="uil uil-map-marker"></i> {{ item.country }}
            </h6>
          </div>

          <div class="mt-6">
            <div
              class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
            >
              <div
                class="bg-yellow-400 h-[6px] rounded-full"
                style="width: 55%"
              ></div>
            </div>
            <div class="mt-2">
              <span class="text-slate-400 text-sm"
                ><span
                  class="text-slate-900 dark:text-white font-semibold inline-block"
                  >{{ item.vacancy }}</span
                >
                {{ item.vacancy2 }}</span
              >
            </div>
          </div>
        </div>
        <!--end content-->
      </div>
      <!--end grid-->

      <div v-if="seemore" class="grid md:grid-cols-12 grid-cols-1 mt-8">
        <div class="md:col-span-12 text-center">
          <router-link
            to="job-grid-two"
            class="btn btn-link text-slate-400 hover:text-cyan-600 after:bg-cyan-600 duration-500 ease-in-out"
            >See More Jobs <i class="uil uil-arrow-right align-middle"></i
          ></router-link>
        </div>
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
export default {
  data() {
    return {
      data: "",
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
    this.data = this.datas.find((item) => item.id === parseInt(this.id));
  },
};
</script>

<style lang="scss" scoped></style>
