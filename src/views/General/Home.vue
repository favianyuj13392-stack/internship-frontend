<template>
  <navbar
    :lightLogo="true"
    :lightNav="'nav-light justify-end'"
    :container="'container'"
  />
  <!-- Hero Start -->
  <section
    class="relative h-screen flex justify-center items-center bg-[url('../../assets/images/hero/bg.jpg')] bg-cover"
  >
    <div class="absolute inset-0 bg-slate-900/30"></div>
    <div class="container z-1">
      <div class="grid grid-cols-1 text-center mt-10 relative">
        <h4
          class="lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 font-bold text-white"
        >
          Find & Hire Experts <br />
          for any Job
        </h4>
        <p class="text-white/50 text-lg max-w-xl mx-auto">
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we've helped recruit excellent applicants over the years.
        </p>

        <div class="d-flex" id="reserve-form">
          <div class="md:w-5/6 mx-auto">
            <div class="lg:col-span-10 mt-8">
              <div
                class="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3"
              >
                <form action="#">
                  <div class="registration-form text-dark text-start">
                    <div
                      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6"
                    >
                      <div class="filter-search-form relative filter-border">
                        <i class="uil uil-briefcase-alt icons"></i>
                        <input
                          name="name"
                          type="text"
                          id="job-keyword"
                          class="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                          placeholder="Search your Keywords"
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

                      <input
                        type="submit"
                        id="search"
                        name="search"
                        style="height: 60px"
                        class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100"
                        value="Search"
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

        <div class="mt-4">
          <span class="text-white/60"
            ><span class="text-white">Popular Searches :</span> Designer,
            Developer, Web, IOS, PHP Senior Engineer</span
          >
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Hero End -->
</template>

<script>
import navbar from "@/components/navbar/navbar.vue";
export default {
  data() {
    return {
      options: [
        "Afghanistan",
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
      selected: "Afghanistan",
    };
  },
  components: {
    navbar,
  },
};
</script>

<style lang="scss" scoped></style>
