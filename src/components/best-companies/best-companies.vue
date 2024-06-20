<template>
  <div class="container md:pb-16">
    <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
      <div class="lg:col-span-5 md:col-span-6 md:order-2 order-1">
        <div class="relative">
          <div class="relative flex justify-end">
            <img
              src="../../assets/images/about/ab03.jpg"
              class="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700"
              alt=""
            />
            <div class="absolute top-0 translate-y-2/4 start-0 text-center">
              <a
                @click="toggle"
                data-type="youtube"
                data-id="S_CGed6E610"
                class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white cursor-pointer"
              >
                <i
                  class="mdi mdi-play inline-flex items-center justify-center text-2xl"
                ></i>
              </a>
            </div>
          </div>
          <div class="absolute md:-start-5 start-0 -bottom-16">
            <img
              src="../../assets/images/about/ab04.jpg"
              class="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="lg:col-span-7 md:col-span-6 mt-14 md:mt-0 md:order-1 order-2">
        <div class="lg:me-5">
          <h3
            class="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold"
          >
            Find Best Companies.
          </h3>

          <p class="text-slate-400 max-w-xl">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>

          <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
            <div
              v-for="item in datas"
              :key="item"
              class="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800"
            >
              <div class="flex items-center">
                <div
                  class="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md"
                >
                  <img :src="item.image" class="size-8" alt="" />
                </div>

                <div class="ms-3">
                  <!--aquiii  
                  <router-link
                    :to="{ name: 'employer-detail', params: { id: item.id } }"
                    class="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500"
                    >{{ item.name }}</router-link
                  > -->
                  <span class="block text-sm text-emerald-600">{{
                    item.vacancy
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-12 grid-cols-1 mt-6">
            <div class="md:col-span-12">
              <a
                href=""
                class="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out"
                >See More Companies
                <i class="uil uil-arrow-right align-middle"></i
              ></a>
            </div>
          </div>
          <!--end grid-->
        </div>
      </div>
    </div>
  </div>
  <!--end container-->

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
  <!-- iframe end  -->
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      datas: [
        {
          id: 1,
          image: "../../assets/images/company/facebook-logo.png",
          name: "Facebook",
          vacancy: "5 Vacancy",
        },
        {
          id: 2,
          image: "../../assets/images/company/google-logo.png",
          name: "Google",
          vacancy: "5 Vacancy",
        },
        {
          id: 3,
          image: "../../assets/images/company/android.png",
          name: "Android",
          vacancy: "5 Vacancy",
        },
        {
          id: 4,
          image: "../../assets/images/company/lenovo.png",
          name: "Lenovo",
          vacancy: "5 Vacancy",
        },
        {
          id: 5,
          image: "../../assets/images/company/spotify.png",
          name: "Spotify",
          vacancy: "5 Vacancy",
        },
        {
          id: 6,
          image: "../../assets/images/company/linkedin.png",
          name: "Linkedin",
          vacancy: "5 Vacancy",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped></style>
