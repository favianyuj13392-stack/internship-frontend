<template>
    <div id="myModalCurriculum"  class="modal" >
      <div
        class="modal-content p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900"
        ref="myModalCurriculum"
      >
        <span class="close" @click="$emit('cancel')">&times;</span>
  
        <div class="grid grid-cols-1 gap-4">
          <div>
            <h5 class="text-lg font-semibold mb-4">Selecciona un cv para aplicar a la Pasantía:</h5>
            <div class="mt-3">
                <a
                  @click="goToModificar()"
                  class="btn bg-indigo-500 hover:bg-indigo-700 border-indigo-500 dark:border-indigo-500 text-white rounded-md w-full"
                  ><i class="uil uil-file-download-alt"></i> Modificar
                  curriculums</a
                >
            </div>
            <div class="mt-4" style="max-height: 40vh; overflow-y: auto;">
              <div v-for="(curri, index) in cv" :key="index">
                <div
                  @click="selectCv(index)"
                  :class="['mt-3 w-full p-3 rounded-md shadow', selectedCv === index ? 'bg-emerald-500 dark:bg-blue-800' : 'bg-white dark:bg-slate-900']"
                >
                  <div class="relative">
                    <div class="flex items-center mb-3 grid">
                      <i data-feather="file" class="size-8 text-slate-400"></i>
                      <span
                      :class="selectedCv === index ? 'text-white' : 'font-medium ms-2'"
                        

                      
                      >{{ curri.titulo }}</span>
                      <span 
                        :class="selectedCv === index ? 'text-white' : 'text-slate-400 ms-2'"
                      >Fecha de carga: {{ curri.fechaCreacion }}</span>
                    </div>
                  </div>
                  <a
                    @click.stop="downloadPDF(curri.pdfCurriculum)"
                    class="btn bg-cyan-600 hover:bg-cyan-700 border-cyan-600 dark:border-cyan-600 text-white rounded-md w-full"
                    download
                  >
                    <i class="uil uil-file-download-alt"></i> Descargar CV
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-10">
                <a
                  @click="aplicarPasantia()"
                  class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md w-full"
                  >Aplicar Pasantia</a
                >
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  import { useCurriculumsStore } from "@/stores/Estudiantes/curriculumsStore";
  import {useAplicacionesStore} from "@/stores/Estudiantes/aplicacionesStore";
  export default {
    setup() {
      const curriculumsStore = useCurriculumsStore();
        const aplicacionesStore = useAplicacionesStore();
      return { curriculumsStore, aplicacionesStore};
    },
    props: {
      pasantiaId: {
        type: Number,
        required: true,
      },
    },
    mounted() {
      this.getCurriculum();
    },
    data() {
      return {
        showTitleModal: false,
        pdfTitle: "",
        pdfFile: null,
        selectedCv: null,
        cv: [
          {
            idCurriculums: 1,
            titulo: "Curriculum 1",
            pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            fechaCreacion: "2021-10-10",
          },
          
        ],
      };
    },
    methods: {

        downloadPDF(url){
            window.open(url, '_blank');
            },

            goToModificar() {
                document.body.style.overflow = "auto";

                this.$router.push("/perfil/estudiante");
            },

        async aplicarPasantia() {
            if (this.selectedCv === null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debes seleccionar un CV para aplicar a la pasantía',
                });
                return;
            }
            await Swal.fire({
                title: '¿Estás seguro de aplicar a esta pasantía?',
                text: 'Una vez aplicada no podrás deshacer esta acción',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, aplicar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (!result.isConfirmed) {
                    window.scrollTo(0, 0);

                    this.$emit('cancel');
                    return;
                }
            });



            let loader = this.$loading.show();
            const response = await this.aplicacionesStore.postAplicacion(
                this.$keycloak.idTokenParsed.sub,
                this.pasantiaId,
                this.cv[this.selectedCv].idCurriculums,
            );
            console.log(response);
            loader.hide();
            if (response.response == null ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.errorMessage,
                });
                window.scrollTo(0, 0);
                this.$emit('cancel');
                return;
            }

            Swal.fire({
                icon: 'success',
                title: '¡Aplicación exitosa!',
                text: 'Tu aplicación ha sido enviada con éxito',
            });
            window.scrollTo(0, 0);

            this.$emit('cancel');
            return


        },


        async getCurriculum() {
            let loader = this.$loading.show(
                {
                    isFullPage: false,
                    container:  this.$refs.myModalCurriculum,
                  

                }
            );
            if (!this.$keycloak.authenticated) {
                loader.hide();
                 Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se pudo cargar la información del usuario",
                });
                this.$keycloak.logout();
                this.$router.push("/");
                return;
            }
            const response = await this.curriculumsStore.getCurriculum(
                this.$keycloak.idTokenParsed.sub
            );
            if (response == null) {
                loader.hide();
                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se pudo cargar la información del usuario",
                });
                this.$keycloak.logout();
                this.$router.push("/");
                return;
            }

            if (response.length == 0) {
                loader.hide();
                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se encontraron curriculums, por favor sube un curriculum desde las configuraciones de tu perfil para poder aplicar a la pasantía",
                });
                window.scrollTo(0, 0);

                this.$emit('cancel');
                return;
            }

            this.cv = response;
            console.log(this.cv);
            loader.hide();
            },
        

      
      selectCv(index) {
        this.selectedCv = index;
      },
      
    },
  };
  </script>
  
  <style scoped>
  .modal {
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
  }
  
  .modal-content {
    position: relative;
    top: 20%;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    /* Could be more or less, depending on screen size */
    max-width: 600px;
    /* Max width */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    animation-name: animatetop;
    animation-duration: 0.4s;
  }
  
  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 300px;
      opacity: 1;
    }
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  