<template>
  <navbar :container="'container'" :lightNav="'justify-end'" />
  <section class="relative lg:mt-24 mt-[74px]">
    <div class="lg:container container-fluid">
      <div class="relative shrink-0">
        <img
          src="@/assets/images/hero/bg5.jpg"
          class="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700"
          alt=""
        />
      </div>

      <div class="md:flex mx-4 -mt-12">
        <div class="md:w-full">
          <div class="relative flex items-end justify-between">
            <div class="relative flex items-end">
              <img
                :src="data?.image ? data?.image : image"
                class="size-28 rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                alt=""
              />
              <div class="ms-4">
                <h5 class="text-lg font-semibold">
                  {{ data?.name ? data?.name : "Mr. Calvin carlo" }}
                </h5>
                <p class="text-slate-400">
                  {{ data?.position ? data?.position : "Web Designer" }}
                </p>
              </div>
            </div>

            <div class="">
              <router-link
                to="/perfil/estudiante/editar"
                class="btn btn-icon rounded-full bg-cyan-600/5 hover:bg-cyan-600 border-cyan-600/10 hover:border-cyan-600 text-cyan-600 hover:text-white"
                ><i data-feather="settings" class="size-4"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end -->
  </section>
  <!-- End Hero -->

  <section class="relative mt-12 md:pb-24 pb-16">
    <div class="container">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div class="lg:col-span-8 md:col-span-7">
          <h5 class="text-xl font-semibold">
            {{ data?.name ? data?.name : "Mr. Calvin carlo" }}
          </h5>
          <p class="text-slate-400 mt-4">
            Obviously I'M Web Developer. Web Developer with over 3 years of
            experience. Experienced with all stages of the development cycle for
            dynamic web projects. The as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p class="text-slate-400 mt-4">
            Data Structures and Algorithms are the heart of programming.
            Initially most of the developers do not realize its importance but
            when you will start your career in software development, you will
            find your code is either taking too much time or taking too much
            space.
          </p>

          <h4 class="mt-6 text-xl font-semibold">Skills :</h4>
          <div class="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-slate-400">WordPress</span>
                <span class="text-slate-400">84%</span>
              </div>
              <div
                class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
              >
                <div
                  class="bg-cyan-600 h-[6px] rounded-full"
                  style="width: 84%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <span class="text-slate-400">JavaScript</span>
                <span class="text-slate-400">79%</span>
              </div>
              <div
                class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
              >
                <div
                  class="bg-cyan-600 h-[6px] rounded-full"
                  style="width: 79%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <span class="text-slate-400">HTML</span>
                <span class="text-slate-400">95%</span>
              </div>
              <div
                class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
              >
                <div
                  class="bg-cyan-600 h-[6px] rounded-full"
                  style="width: 95%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <span class="text-slate-400">Figma</span>
                <span class="text-slate-400">85%</span>
              </div>
              <div
                class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
              >
                <div
                  class="bg-cyan-600 h-[6px] rounded-full"
                  style="width: 85%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <span class="text-slate-400">Photoshop</span>
                <span class="text-slate-400">70%</span>
              </div>
              <div
                class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
              >
                <div
                  class="bg-cyan-600 h-[6px] rounded-full"
                  style="width: 70%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-2">
                <span class="text-slate-400">Illustration</span>
                <span class="text-slate-400">65%</span>
              </div>
              <div
                class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]"
              >
                <div
                  class="bg-cyan-600 h-[6px] rounded-full"
                  style="width: 65%"
                ></div>
              </div>
            </div>
          </div>

          <h4 class="mt-6 text-xl font-semibold">Experience :</h4>

          <div class="flex mt-6">
            <div class="text-slate-400 font-semibold min-w-[80px] text-center">
              <img
                src="@/assets/images/company/shree-logo.png"
                class="size-16 mx-auto mb-2 block"
                alt=""
              />
              2019-22
            </div>

            <div class="ms-4">
              <h5 class="text-lg font-medium mb-0">Full Stack Developer</h5>
              <span class="text-slate-400 company-university"
                >Shreethemes - India</span
              >
              <p class="text-slate-400 mt-2 mb-0">
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text.
              </p>
            </div>
          </div>

          <div class="flex mt-6">
            <div class="text-slate-400 font-semibold min-w-[80px] text-center">
              <img
                src="@/assets/images/company/circle-logo.png"
                class="size-16 mx-auto mb-2 block"
                alt=""
              />
              2017-19
            </div>

            <div class="ms-4">
              <h5 class="text-lg font-medium mb-0">Back-end Developer</h5>
              <span class="text-slate-400 company-university"
                >CircleCI - U.S.A.</span
              >
              <p class="text-slate-400 mt-2 mb-0">
                It seems that only fragments of the original text remain in the
                Lorem Ipsum texts used today. One may speculate that over the
                course of time certain letters were added or deleted at various
                positions within the text.
              </p>
            </div>
          </div>

          <div class="rounded-md shadow dark:shadow-gray-700 p-6 mt-6">
            <h5 class="text-xl font-semibold">Contact Me:</h5>

            <form>
              <div class="grid grid-cols-12 gap-2">
                <div class="md:col-span-6 col-span-12">
                  <label for="name" class="font-semibold">Your Name:</label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                    placeholder="Name :"
                  />
                </div>

                <div class="md:col-span-6 col-span-12">
                  <label for="email" class="font-semibold">Your Email:</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                    placeholder="Email :"
                  />
                </div>

                <div class="col-span-12">
                  <label for="subject" class="font-semibold"
                    >Your Question:</label
                  >
                  <input
                    name="subject"
                    id="subject"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                    placeholder="Subject :"
                  />
                </div>

                <div class="col-span-12">
                  <label for="comments" class="font-semibold"
                    >Your Comment:</label
                  >
                  <textarea
                    name="comments"
                    id="comments"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-2 textarea"
                    placeholder="Message :"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                id="submit"
                name="send"
                class="btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <!--end col-->

        <!--Inicio de profieee-->
        <div class="lg:col-span-4 md:col-span-5">
          <div
            class="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20"
          >
            <h5 class="text-lg font-semibold">Personal Detail:</h5>
            <ul class="list-none mt-4">
              <li class="flex justify-between mt-3 items-center font-medium">
                <span
                  ><i
                    data-feather="mail"
                    class="size-4 text-slate-400 me-3 inline"
                  ></i
                  ><span class="text-slate-400 me-3">Email :</span></span
                >

                <span>thomas@mail.com</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span
                  ><i
                    data-feather="gift"
                    class="size-4 text-slate-400 me-3 inline"
                  ></i
                  ><span class="text-slate-400 me-3">D.O.B. :</span></span
                >

                <span>31st Dec, 1996</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span
                  ><i
                    data-feather="home"
                    class="size-4 text-slate-400 me-3 inline"
                  ></i
                  ><span class="text-slate-400 me-3">Address :</span></span
                >

                <span>15 Razy street</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span
                  ><i
                    data-feather="map-pin"
                    class="size-4 text-slate-400 me-3 inline"
                  ></i
                  ><span class="text-slate-400 me-3">City :</span></span
                >

                <span>London</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span
                  ><i
                    data-feather="globe"
                    class="size-4 text-slate-400 me-3 inline"
                  ></i
                  ><span class="text-slate-400 me-3">Country :</span></span
                >

                <span>UK</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span
                  ><i
                    data-feather="server"
                    class="size-4 text-slate-400 me-3 inline"
                  ></i
                  ><span class="text-slate-400 me-3">Postal Code :</span></span
                >

                <span>521452</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span
                  ><i
                    data-feather="phone"
                    class="size-4 text-slate-400 me-3 inline"
                  ></i
                  ><span class="text-slate-400 me-3">Mobile :</span></span
                >

                <span>(+125) 1542-8452</span>
              </li>

              <li class="flex justify-between mt-3">
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

              <li
                class="mt-3 w-full bg-white p-3 rounded-md shadow dark:shadow-gray-700 dark:bg-slate-900"
              >
                <div class="flex items-center mb-3">
                  <i data-feather="file-text" class="size-8 text-slate-400"></i>
                  <span class="font-medium ms-2">calvin-carlo-resume.pdf</span>
                </div>

                <a
                  href="@/assets/images/calvin-carlo-resume.pdf"
                  class="btn bg-cyan-600 hover:bg-cyan-700 border-cyan-600 dark:border-cyan-600 text-white rounded-md w-full"
                  download
                  ><i class="uil uil-file-download-alt"></i> Download CV</a
                >
              </li>
            </ul>
          </div>
        </div>
        <!--fin de profieee-->
      </div>
    </div>
  </section>
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/General/navbarGeneral.vue";
import footers from "@/components/footer/footer.vue";
import switcher from "@/components/General/switcher.vue";
import image from "@/assets/images/team/01.jpg";
export default {
  data() {
    return {
      id: "",
      data: "",
      image,
      datas: [
        {
          id: 1,
          image: "@/assets/images/team/01.jpg",
          name: "Steven Townsend",
          position: "Web Designer",
          type: ["Design", "UI", "Digital"],
          salary: "$4k - $4.5k",
          experience: "2 Years",
          class: "uil uil-star",
        },
        {
          id: 2,
          image: "@/assets/images/team/02.jpg",
          name: "Tiffany Betancourt",
          position: "Web Designer",
          type: ["Design", "UI", "Digital"],
          salary: "$4k - $4.5k",
          experience: "2 Years",
          class: "",
        },
        {
          id: 3,
          image: "@/assets/images/team/03.jpg",
          name: "Jacqueline Burns",
          position: "Web Designer",
          type: ["Design", "UI", "Digital"],
          salary: "$4k - $4.5k",
          experience: "2 Years",
          class: "",
        },
        {
          id: 4,
          image: "@/assets/images/team/03.jpg",
          name: "Mari Harrington",
          position: "Web Designer",
          type: ["Design", "UI", "Digital"],
          salary: "$4k - $4.5k",
          experience: "2 Years",
          class: "",
        },
        {
          id: 5,
          image: "@/assets/images/team/03.jpg",
          name: "Floyd Glasgow",
          position: "Web Designer",
          type: ["Design", "UI", "Digital"],
          salary: "$4k - $4.5k",
          experience: "2 Years",
          class: "",
        },
        {
          id: 6,
          image: "@/assets/images/team/03.jpg",
          name: "Donna Schultz",
          position: "Web Designer",
          type: ["Design", "UI", "Digital"],
          salary: "$4k - $4.5k",
          experience: "2 Years",
          class: "",
        },
        {
          id: 7,
          image: "@/assets/images/team/07.jpg",
          name: "Joshua Morris",
          position: "Web Designer",
          type: ["Design", "UI", "Digital"],
          salary: "$4k - $4.5k",
          experience: "2 Years",
          class: "uil uil-star",
        },
        {
          id: 8,
          image: "@/assets/images/team/08.jpg",
          name: "Rosaria Vargas",
          position: "Web Designer",
          type: ["Design", "UI", "Digital"],
          salary: "$4k - $4.5k",
          experience: "2 Years",
          class: "uil uil-star",
        },
      ],
    };
  },
  components: {
    navbar,
    switcher,
    footers,
  },
  mounted() {
    this.id = this.$route.params.id;
    this.data = this.datas.find((item) => item.id === parseInt(this.id));
  },
};
</script>

<style lang="scss" scoped></style>
