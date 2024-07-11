<template>
    <div id="myModalCurriculum" class="modal">
      <div
        class="modal-content p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900"
      >
        <span class="close" @click="$emit('cancel')">&times;</span>
  
        <div class="grid grid-cols-1 gap-4">
          <div>
            <h5 class="text-lg font-semibold mb-4">Selecciona un cv para aplicar a la Pasantía:</h5>
            <div class="mt-3">
                <a
                  @click="this.$router.push('/perfil/estudiante')"
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
                  @click="this.$router.push('/perfil/estudiante')"
                  class="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-md w-full"
                  >Aplicar Pasantia</a
                >
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
          {
            idCurriculums: 2,
            titulo: "Curriculum 2",
            pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            fechaCreacion: "2021-10-10",
          },
            {
                idCurriculums: 3,
                titulo: "Curriculum 3",
                pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fechaCreacion: "2021-10-10",
            },
            {
                idCurriculums: 4,
                titulo: "Curriculum 4",
                pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fechaCreacion: "2021-10-10",
            },
            {
                idCurriculums: 5,
                titulo: "Curriculum 5",
                pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fechaCreacion: "2021-10-10",
            },
            {
                idCurriculums: 6,
                titulo: "Curriculum 6",
                pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fechaCreacion: "2021-10-10",
            },
            {
                idCurriculums: 7,
                titulo: "Curriculum 7",
                pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fechaCreacion: "2021-10-10",
            },
            {
                idCurriculums: 8,
                titulo: "Curriculum 8",
                pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fechaCreacion: "2021-10-10",
            },
            {
                idCurriculums: 9,
                titulo: "Curriculum 9",
                pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fechaCreacion: "2021-10-10",
            },
            {
                idCurriculums: 10,
                titulo: "Curriculum 10",
                pdfCurriculum: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fechaCreacion: "2021-10-10",
            }
        ],
      };
    },
    methods: {
      handleFileUploadPDF(e) {
        this.pdfFile = e.target.files[0];
        this.showTitleModal = true;
      },
      savePDF() {
        this.showFormularioCV = false;
        this.showTitleModal = false;
        this.pdfTitle = "";
        this.pdfFile = null;
      },
      selectCv(index) {
        this.selectedCv = index;
      },
      downloadPDF(pdfUrl) {
        // lógica para descargar PDF
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
  