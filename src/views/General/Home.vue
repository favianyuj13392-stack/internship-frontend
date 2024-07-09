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
          INTERNSHIP <br />
          by Universidad Católica Boliviana
        </h4>
        <p class="text-white/50 text-lg max-w-xl mx-auto">
          Únete a nosotros en esta emocionante etapa de tu educación, donde el
          aprendizaje se transforma en experiencia y las conexiones se
          convierten en oportunidades concretas para el futuro.
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
                          placeholder="Busca tu interes..."
                        />
                      </div>

                      <div
                        class="filter-search-form relative filter-border bg-gray-50 dark:bg-slate-800"
                      >
                        <i class="uil uil-graduation-cap icons"></i>
                        <vSelect
                          :options="options"
                          v-model="selected"
                          class="ms-10"
                        ></vSelect>
                      </div>

                      <input
                        type="submit"
                        id="search"
                        name="search"
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

        <div class="mt-4">
          <span class="text-white/60"
            ><span class="text-white"
              >Tu primer paso en el mundo laboral por :</span
            >
            Universidad Católica Boliviana "San Pablo"</span
          >
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!--end section-->
  <!-- Hero End

    <h1>hola</h1>
    


    <company />



  <div class="container md:py-10 py-10">
      <services />
    </div>

    <popularjob />
    <company />
 -->
  <section class="relative md:py-16 py-16">
    <div class="container md:py-10 py-10">
      <services />
    </div>

    <question />
    <cta />
    <company />
    <explore />
  </section>

  <switcher />
  <footers />
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import navbar from "@/components/General/navbarGeneral.vue";
import counter from "@/components/General/Home/counter.vue";
import services from "@/components/General/Home/job-services.vue";
import popularjob from "@/components/General/Home/popular-job.vue";
import company from "@/components/General/Home/best-companies.vue";
import cta from "@/components/General/Home/two-job-cta.vue";
import question from "@/components/General/Home/job-questions.vue";
import explore from "@/components/General/Home/explore-job.vue";
import switcher from "@/components/General/switcher.vue";
import footers from "@/components/footer/footer.vue";





import {useAuthStore} from "@/stores/authStore.js";


export default {
  setup(){
    const authStore = useAuthStore();
    return{
      authStore
    }
  },

  async beforeMount() {
    if(!this.$keycloak.authenticated){
      return;
    }
    let loader = this.$loading.show( );
    try {
     const existencia = await this.authStore.checkExistencia(this.$keycloak.tokenParsed.sub);
     console.log(existencia);
      if(this.$keycloak.tokenParsed.resource_access['internship-cliente'] == undefined && existencia==false){
        this.$router.push("/finish/register-empresa");
        loader.hide();
        return;
      }
      if(existencia==false){
        this.$router.push("/finish/register-empresa");
        loader.hide();
        return;
      }
     if(existencia==false && this.$keycloak.tokenParsed.resource_access['internship-cliente'].roles.includes("ESTUDIANTE")){
        this.$router.push("/finish/register-estudiante");
        loader.hide();
        return;
     }else if(existencia==false && this.$keycloak.tokenParsed.resource_access['internship-cliente'].roles.includes("ADMIN")){
        this.$router.push("/administrador/dashboard");
        loader.hide();
        return;
     }else if(existencia==true && this.$keycloak.tokenParsed.resource_access['internship-cliente'].roles.includes("EMPRESA")){
        this.$router.push("/empresa/administrador/informacion");
        loader.hide();
        return;
     }
      loader.hide();
    } catch (error) {
      loader.hide();
      console.log(error);
    }
  },

  data() {
    return {
      options: [
        "Ingenieria de Sistemas",
        "Comunicación",
        "Psicopedagogia",
        "Administracion",
      ],
      selected: "Ingenieria de Sistemas",
    };
  },
  components: {
    navbar,
    switcher,
    footers,
    vSelect,
    services,
    popularjob,
    cta,
    company,
    question,
    explore,
    counter,
  },
};
</script>

<style lang="scss" scoped>
.map-marker-icon {
  color: #00ff00;
}
</style>
