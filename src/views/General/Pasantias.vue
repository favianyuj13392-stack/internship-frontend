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
          Pasantías
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
  <section class="relative md:py-24 py-16">
    <div class="container">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div class="lg:col-span-4 md:col-span-6">
          <div
            class="shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20"
          >
            <form>
              <div class="grid grid-cols-1 gap-3">
                <div>
                  <label for="searchname" class="font-semibold"
                    >Buscar pasantia</label
                  >
                  <div class="relative mt-2">
                    <i
                      class="uil uil-search text-lg absolute top-[5px] start-3"
                    ></i>
                    <input
                      name="search"
                      id="searchname"
                      type="text"
                      class="form-input border border-slate-100 dark:border-slate-800 ps-10"
                      placeholder="Nombre de pasantia"
                    />
                  </div>
                </div>

                <div>
                  <label class="font-semibold">Categories</label>
                  <select
                    class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1"
                  >
                    <option value="WD">Web Designer</option>
                    <option value="WD">Web Developer</option>
                    <option value="UI">UI / UX Desinger</option>
                  </select>
                </div>

                <div>
                  <label class="font-semibold">Location</label>
                  <select
                    class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1"
                  >
                    <option value="NY">New York</option>
                    <option value="MC">North Carolina</option>
                    <option value="SC">South Carolina</option>
                  </select>
                </div>

                <div>
                  <label class="font-semibold">Job Types</label>
                  <div class="block mt-2">
                    <div class="flex justify-between">
                      <div class="inline-flex items-center mb-0">
                        <input
                          class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          value=""
                          id="fulltime"
                        />
                        <label
                          class="form-checkbox-label text-slate-400"
                          for="fulltime"
                          >Full Time</label
                        >
                      </div>

                      <span
                        class="bg-cyan-600/10 text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5"
                        >3</span
                      >
                    </div>
                    <div class="flex justify-between">
                      <div class="inline-flex items-center mb-0">
                        <input
                          class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          value=""
                          id="parttime"
                        />
                        <label
                          class="form-checkbox-label text-slate-400"
                          for="parttime"
                          >Part Time</label
                        >
                      </div>

                      <span
                        class="bg-cyan-600/10 text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5"
                        >7</span
                      >
                    </div>
                    <div class="flex justify-between">
                      <div class="inline-flex items-center mb-0">
                        <input
                          class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          value=""
                          id="Freelancing"
                        />
                        <label
                          class="form-checkbox-label text-slate-400"
                          for="Freelancing"
                          >Freelancing</label
                        >
                      </div>

                      <span
                        class="bg-cyan-600/10 text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5"
                        >4</span
                      >
                    </div>
                    <div class="flex justify-between">
                      <div class="inline-flex items-center mb-0">
                        <input
                          class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          value=""
                          id="fixedprice"
                        />
                        <label
                          class="form-checkbox-label text-slate-400"
                          for="fixedprice"
                          >Fixed Price</label
                        >
                      </div>

                      <span
                        class="bg-cyan-600/10 text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5"
                        >6</span
                      >
                    </div>
                    <div class="flex justify-between">
                      <div class="inline-flex items-center mb-0">
                        <input
                          class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          value=""
                          id="Remote"
                        />
                        <label
                          class="form-checkbox-label text-slate-400"
                          for="Remote"
                          >Remote</label
                        >
                      </div>

                      <span
                        class="bg-cyan-600/10 text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5"
                        >7</span
                      >
                    </div>
                    <div class="flex justify-between">
                      <div class="inline-flex items-center mb-0">
                        <input
                          class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          type="checkbox"
                          value=""
                          id="hourlybasis"
                        />
                        <label
                          class="form-checkbox-label text-slate-400"
                          for="hourlybasis"
                          >Hourly Basis</label
                        >
                      </div>

                      <span
                        class="bg-cyan-600/10 text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5"
                        >44</span
                      >
                    </div>
                  </div>
                </div>

                <div>
                  <label class="font-semibold">Salary</label>
                  <div class="block mt-2">
                    <div>
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          name="radio-colors"
                          value="1"
                          checked
                        />
                        <span class="text-slate-400">10k - 15k</span>
                      </label>
                    </div>
                    <div>
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          name="radio-colors"
                          value="1"
                        />
                        <span class="text-slate-400">15k - 25k</span>
                      </label>
                    </div>
                    <div>
                      <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50 me-2"
                          name="radio-colors"
                          value="1"
                        />
                        <span class="text-slate-400">more than 25K</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <input
                    type="submit"
                    class="btn bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white rounded-md w-full"
                    value="Aplicar filtros"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <!--end col-->

        <!--TARTJETAZOOO-->
        <div class="lg:col-span-8 md:col-span-6">
          <div class="grid lg:grid-cols-2 md:grid-cols-2 gap-[30px]">
            <div
              v-for="item in datas"
              :key="item"
              class="group p-6 rounded-lg border border-cyan-600/20 dark:border-cyan-600/40 bg-white dark:bg-slate-900 hover:bg-cyan-600/[0.02] hover:dark:bg-cyan-600/5 hover:shadow-md hover:shadow-cyan-600/5 transition-all duration-500"
            >
              <div class="flex justify-between items-start">
                <div>
                  <div
                    class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2"
                  >
                    <img :src="item.image" class="size-8" alt="" />
                  </div>
                  <router-link
                    class="text-lg hover:text-cyan-600 font-semibold transition-all duration-500"
                    >{{ item.name }}</router-link
                  >
                </div>

                <div class="flex items-center">
                  <router-link
                    to="/pasantias/detalle"
                    class="btn btn-icon rounded-full bg-cyan-600/5 group-hover:bg-cyan-600 border-cyan-600/10 text-cyan-600 group-hover:text-white ms-1"
                    ><i class="uil uil-arrow-up-right"></i
                  ></router-link>
                </div>
              </div>

              <div class="mt-3">
                <router-link
                  class="text-xl hover:text-cyan-600 font-semibold transition-all duration-500"
                  >{{ item.job }}</router-link
                >
                <p class="text-slate-400 mt-2">
                  Looking for an experienced Web Designer for an our company.
                </p>

                <div class="mt-3">
                  <a href="">
                    <span
                      class="bg-rose-500/5 hover:bg-rose-500/20 dark:bg-rose-500/10 hover:dark:bg-rose-500/30 inline-block text-rose-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500"
                      >{{ item.type }}</span
                    >
                  </a>
                  <a href="">
                    <span
                      class="bg-purple-600/5 hover:bg-yellow-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500"
                      >{{ item.salary }}</span
                    >
                  </a>
                  <a href="">
                    <span
                      class="bg-cyan-600/5 hover:bg-cyan-600/20 dark:bg-cyan-600/10 hover:dark:bg-cyan-600/30 inline-block text-cyan-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500"
                      ><i class="uil uil-map-marker"></i>
                      {{ item.location }}</span
                    >
                  </a>
                </div>
              </div>
            </div>
            <!--end content-->
          </div>
          <!--end grid-->
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
      </div>
    </div>
  </section>
  <footers />
  <switcher />
</template>
<script>
import navbar from "@/components/General/navbarGeneral.vue";

import explore from "@/components/General/Home/explore-job.vue";
import footers from "@/components/footer/footer.vue";
import switcher from "@/components/General/switcher.vue";
export default {
  data() {
    return {
      datas: [
        {
          id: 1,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Facebook",
          job: "Web Designer / Developer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 2,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Google",
          job: "Marketing Director",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 3,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Android",
          job: "Application Developer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 4,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Lenovo",
          job: "Senior Product Designer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 5,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Spotify",
          job: "C++ Developer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 6,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Linkedin",
          job: "Php Developer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 7,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Circle CI",
          job: "Web Designer / Developer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 8,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Skype",
          job: "Marketing Director",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 9,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Snapchat",
          job: "Application Developer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 10,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Shreethemes",
          job: "Senior Product Designer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 11,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Telegram",
          job: "C++ Developer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
        },
        {
          id: 12,
          image:
            "https://tja.ucb.edu.bo/wp-content/uploads/2020/09/cropped-logo-UCB.png",
          name: "Whatsapp",
          job: "Php Developer",
          title: "Looking for an experienced Web Designer for an our company.",
          type: "Full Time",
          salary: "$4,000 - $4,500",
          location: "Australia",
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
