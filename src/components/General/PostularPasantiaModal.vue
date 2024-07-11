<template>
    <div id="myModalCurriculum" class="modal">
      <div
        class="modal-content p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900"
      >
        <span class="close" @click="$emit('cancel')">&times;</span>
  
        <div class="grid grid-cols-1 gap-4">
          <div>
            <h5 class="text-lg font-semibold mb-4">Selecciona un cv para aplicar a la Pasantía:</h5>
            <div class="mt-4">
              <input
                type="text"
                class="form-input border border-slate-100 dark:border-slate-800 w-full"
              />
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