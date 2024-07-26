<template>
  <div id="myModalCurriculum" class="modal">
    <div
      class="modal-content p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900"
      ref="myModalCurriculum"
    >
      <span class="close" @click="$emit('cancel')">&times;</span>

      <div class="grid grid-cols-1 gap-4">
        <div>
          <h5 class="text-lg font-semibold mt-4">Tus curriculums:</h5>
          <div class="mt-4 max-h-40vh overflow-y-auto">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">CV</th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" id="dateCV">Fecha de carga</th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(curri, index) in paginatedCv" :key="index" :class="{'bg-cyan-600 text-white': selectedCv === index, 'bg-white': selectedCv !== index}" @click="selectCv(index)">
                  <td class="px-5 py-5 border-b border-gray-200 text-sm">
                    <input
                      type="radio"
                      :id="curri.idCurriculums"
                      :value="index"
                      v-model="selectedCv"
                      @change="selectCv(index)"
                    />
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 text-sm">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <i data-feather="file" class="size-8 text-slate-400"></i>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">{{ curri.titulo }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 text-sm" id="dateCVData">
                    <p class="text-gray-900 whitespace-no-wrap">{{ curri.fechaCreacion }}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 text-sm">
                    <button 
                      @click="downloadPDF(curri.pdfCurriculum)" 
                      class="btn bg-teal-600 hover:bg-teal-700 text-white rounded-md"
                    >
                      Ver currículum
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex justify-between items-center mt-4" id="pagination" v-if="cv.length > itemsPerPage">
            <button
              @click="previousPage"
              :disabled="currentPage === 1"
              class="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md"
            >
              Anterior
            </button>
            <span>Página {{ currentPage }} de {{ totalPages }}</span>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md"
            >
              Siguiente
            </button>
          </div>

          <h5 class="text-lg font-semibold mb-4">
            ¿No encuentras tu curriculum? Sube uno nuevo
            <i
              @click="goToModificar()"
              class="uil uil-file-download-alt cursor-pointer text-cyan-600 hover:text-cyan-700"
            ></i>
          </h5>

          <div class="mt-10">
            <a
              @click="aplicarPasantia()"
              class="btn bg-teal-600 hover:bg-teal-700 border-teal-600 dark:border-teal-600 text-white rounded-md w-full"
            >Aplicar Pasantia</a>
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
        ],
        currentPage: 1,
        itemsPerPage: 3,
      };
    },
    computed: {
      paginatedCv() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.cv.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.cv.length / this.itemsPerPage);
    },
  },
    methods: {
      nextPage() {
        this.selectCv(null);
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      previousPage() {
        this.selectCv(null);
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },

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
            let confirm = false;
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
              console.log(result);
                if (!result.isConfirmed) {
                  confirm = false;
                    return;
                }
                confirm = true;
            });
            if (!confirm) {
                return;
            }
            this.selectedCv = this.selectedCv + ((this.currentPage - 1) * this.itemsPerPage);
            console.log(this.cv[this.selectedCv]);


            let loader = this.$loading.show();
            const response = await this.aplicacionesStore.postAplicacion(
                this.$keycloak.idTokenParsed.sub,
                this.pasantiaId,
                this.cv[this.selectedCv].idCurriculums
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
                text: "No se encontraron curriculums, por favor sube un curriculum desde tu perfil para poder aplicar a la pasantía",
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
        console.log(this.selectedCv);
      },
      
    },
  }
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    position: relative;
    top: 10%;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    max-width: 1000px;
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

@media (max-width: 640px) {
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }
  th,
  td {
    text-align: left;
    padding: 8px!important;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  #dateCVData, #dateCV {
    display: none;
  }
  /*CSS para la paginación*/
  #pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}


  </style>
  