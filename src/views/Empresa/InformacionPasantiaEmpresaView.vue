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
                >Editar Pasantia</router-link
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
  
     


      <!--end container-->
    </section>

  
    <section class="relative md:py-24 py-16" >
      <h3
            class="md:text-3xl text-2xl md:leading-snug leading-normal font-semibold text-center mb-8 dark:text-slate-100 text-slate-900"
          >Postulantes</h3>


      <div class="container" >
       

        <div v-if="lists" class="container lg:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Candidates
            </h3>

            <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions on the web. Get
                your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
            <div v-for="item in datas.slice(0, 4)" :key="item"
            class="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow dark:shadow-gray-700 text-center p-6">
            <img :src="item.image" class="size-20 rounded-full shadow dark:shadow-gray-700 mx-auto" alt="">

            <div class="mt-2">
                <router-link  class="hover:text-emerald-600 font-semibold text-lg">{{ item.name }}</router-link>
                <p class="text-sm text-slate-400">{{ item.position }}</p>
            </div>

            <ul class="mt-2 list-none">
                <li v-for="type in item.type" :key="type" class="inline me-1"><span
                        class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{{ type }}</span>
                </li>
            </ul>

            <div class="flex justify-between mt-2">
                <div class="block">
                    <span class="text-slate-400">Salery:</span>
                    <span class="block text-sm font-semibold">{{ item.salary }}</span>
                </div>
                <div class="block">
                    <span class="text-slate-400">Experience:</span>
                    <span class="block text-sm font-semibold">{{ item.experience }}</span>
                </div>
            </div>

            <div class="mt-3">
                <router-link 
                    class="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Profile</router-link>
                <a href=""
                    class="btn btn-sm btn-icon bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full ms-1"><i
                        class="uil uil-hipchat text-[20px]"></i></a>
            </div>

            <span
                class="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1"><i
                    :class="item.class"></i></span>

            <span class="absolute top-[10px] end-4">
                <a href="javascript:void(0)"
                    class="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i
                        class="mdi mdi-heart"></i></a>
            </span>
        </div><!--end content-->
            
        </div><!--end grid-->
    </div><!--end container-->


    <div v-else class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div v-for="item in datas" :key="item"
            class="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow dark:shadow-gray-700 text-center p-6">
            <img :src="item.image" class="size-20 rounded-full shadow dark:shadow-gray-700 mx-auto" alt="">

            <div class="mt-2">
                <router-link  class="hover:text-emerald-600 font-semibold text-lg">{{ item.name }}</router-link>
                <p class="text-sm text-slate-400">{{ item.position }}</p>
            </div>

            <ul class="mt-2 list-none">
                <li v-for="type in item.type" :key="type" class="inline me-1"><span
                        class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{{ type }}</span>
                </li>
            </ul>

            <div class="flex justify-between mt-2">
                <div class="block">
                    <span class="text-slate-400">Salery:</span>
                    <span class="block text-sm font-semibold">{{ item.salary }}</span>
                </div>
                <div class="block">
                    <span class="text-slate-400">Experience:</span>
                    <span class="block text-sm font-semibold">{{ item.experience }}</span>
                </div>
            </div>

            <div class="mt-3">
                <router-link 
                    class="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Profile</router-link>
                <a href=""
                    class="btn btn-sm btn-icon bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full ms-1"><i
                        class="uil uil-hipchat text-[20px]"></i></a>
            </div>

            <span
                class="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1"><i
                    :class="item.class"></i></span>

            <span class="absolute top-[10px] end-4">
                <a href="javascript:void(0)"
                    class="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i
                        class="mdi mdi-heart"></i></a>
            </span>
        </div><!--end content-->
    </div><!--end grid-->

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
  export default {




    props:{
      id: {
        type: String,
        default: "",
      },
    },



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
  