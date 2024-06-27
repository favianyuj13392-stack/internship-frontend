<template>
  <navbar :container="'container'" :lightNav="'justify-end'" />
  <!-- Google Map -->
  <div class="container-fluid relative mt-20">
    <div class="grid grid-cols-1">
      <div class="w-full leading-[0] border-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1237.2603610040005!2d-68.1126686331831!3d-16.523058166077593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1719299088191!5m2!1ses-419!2sbo"
          style="border: 0"
          class="w-full h-[500px]"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!--end grid-->
  </div>
  <!--end container-->
  <!-- Google Map -->

  <!-- Start Section-->

  <!--end section-->
  <!-- End Section-->
  <footers />
  <switcher />
</template>

<script>
import navbar from "@/components/Administrador/navbarAdministrador.vue";
import footers from "@/components/footer/footer.vue";

import switcher from "@/components/General/switcher.vue";
export default {
  data() {
    return {
      datas: [
        {
          icon: "uil uil-phone",
          name: "Telefono",
          desc: "Lunes a jueves de 08:30 a las 16:00",
          href: "tel:+ 591 (2) 2782222",
          title: "+ 591 (2) 2782222",
        },
        {
          icon: "uil uil-envelope",
          name: "Email",
          desc: "Comunicate con nosotros atraves de correo electronico",
          href: "email :pzapata@ucb.edu.bo",
          title: "pzapata@ucb.edu.bo",
        },
        {
          icon: "uil uil-map-marker",
          name: "Ubicación",
          desc: "Av. 14 de Septiembre Nº 4807 esq. calle 2 de Obrajes",
          href: "https://maps.app.goo.gl/kYtnX1WQKetvAHqf7",
          title: "Ver en Google Maps",
        },
      ],
    };
  },
  components: {
    navbar,
    footers,
    switcher,
  },
};
</script>

<style lang="scss" scoped></style>
