<template>
  <div class="container">
    <div
      class="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1"
    >
      <div class="counter-box text-center">
        <h1
          class="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white flex justify-center"
        >
          <count-up class="counter-value" :start-val="105" :end-val="350"
            >1010</count-up
          >
          :)
        </h1>
        <h5 class="counter-head text-sm font-semibold text-slate-400 uppercase">
          Estudiantes
        </h5>
      </div>
      <!--end counter box-->

      <div class="counter-box text-center">
        <h1
          class="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white flex justify-center"
        >
          <count-up class="counter-value" :start-val="2" :end-val="157"
            >2</count-up
          >+
        </h1>
        <h5 class="counter-head text-sm font-semibold text-slate-400 uppercase">
          Pasantias
        </h5>
      </div>
      <!--end counter box-->

      <div class="counter-box text-center">
        <h1
          class="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white flex justify-center"
        >
          <count-up class="counter-value" :start-val="-100" :end-val="10"
            >0</count-up
          >+
        </h1>
        <h5 class="counter-head text-sm font-semibold text-slate-400 uppercase">
          Empresas
        </h5>
      </div>
      <!--end counter box-->
    </div>
  </div>
  <!--end container-->
</template>

<script>
import CountUp from "vue-countup-v3";
export default {
  data() {
    return {};
  },
  components: {
    CountUp,
  },
};
</script>

<style lang="scss" scoped></style>
