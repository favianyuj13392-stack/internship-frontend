<template>
  <navbar
    :container="'container'"
    :lightLogo="true"
    :lightNav="'nav-light justify-end'"
  />
  <!-- Start Hero -->
  <section
    class="relative table w-full py-40 bg-[url('@/assets/images/hero/bg4.jpg')] bg-center bg-no-repeat bg-cover"
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

  <section class="relative mb:pb-14 pb-16 -mt-3 z-1">
    <div class="container mt-10">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div class="lg:col-span-4 md:col-span-6">
          <div
            class="p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20"
          >
            <div class="relative flex justify-end">
              <router-link
                class="btn rounded-md bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white ms-0 w-auto"
                >Aprobar</router-link
              >
            </div>
            <div class="flex justify-center">
              <div
                class="size-20 bg-cyan-600/5 group-hover:bg-cyan-600 text-cyan-600 group-hover:text-white rounded-md text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto"
              >
                <i class="uil uil-user text-[70px]"></i>
              </div>
            </div>

            <div class="md:ms-4 mt-4">
              <h5 class="text-xl font-semibold">
                {{ data?.job ? data?.job : "Juana Perez" }}
              </h5>
              <div class="mt-1">
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i
                    class="uil uil-building text-[18px] text-cyan-600 me-1"
                  ></i>
                  {{ data?.name ? data?.name : "Directora" }}</span
                >
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i
                    class="uil uil-envelope text-[18px] text-cyan-600 me-1"
                  ></i>
                  {{ data?.country ? data?.country : " @ucb.edu.bo" }}</span
                >
                <span class="text-slate-400 font-medium me-2 inline-block"
                  ><i class="uil uil-phone text-[18px] text-cyan-600 me-1"></i>
                  {{ data?.country ? data?.country : "7777761" }}</span
                >
              </div>
            </div>

            <div
              class="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-2 sticky top-20 mt-5"
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
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="lg:col-span-8 md:col-span-6">
          <div class="lg:col-span-8 md:col-span-7">
            <h5 class="text-xl font-semibold">Company Story</h5>
            <p class="text-slate-400 mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
            <p class="text-slate-400 mt-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage.
            </p>

            <div class="grid grid-cols-12 gap-6 mt-6">
              <div class="col-span-12">
                <img
                  src="@/assets/images/company/1.jpg"
                  class="rounded-md shadow dark:shadow-gray-700"
                  alt=""
                />
              </div>
              <div class="col-span-6">
                <img
                  src="@/assets/images/company/2.jpg"
                  class="rounded-md shadow dark:shadow-gray-700"
                  alt=""
                />
              </div>
              <div class="col-span-6">
                <img
                  src="@/assets/images/company/3.jpg"
                  class="rounded-md shadow dark:shadow-gray-700"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
    <!--IMFOMACION DEL LA EMPRESAS-->

    <!--FIN DE LA INFROMACION DE LA EMPRESA-->
  </section>
  <!-- Start -->

  <!--end section-->
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/Administrador/navbarAdministrador.vue";

import footers from "@/components/footer/footer.vue";

import switcher from "@/components/General/switcher.vue";
export default {
  props: {
    jobs: {
      type: Boolean,
      required: true,
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
    this.data = this.datas.find((item) => item.id === parseInt(this.id));
  },
};
</script>

<style lang="scss" scoped></style>
