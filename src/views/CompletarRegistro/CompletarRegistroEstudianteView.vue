<template>
  <section
    class="py-20 w-full table relative bg-[url('../../assets/images/hero/bg2.jpg')] bg-top bg-no-repeat bg-cover">
    <div class="absolute inset-0 bg-slate-900/70"></div>
    <div class="container relative">
      <div class="grid grid-cols-1 text-center">
        <h3 class="mb-4 md:text-[26px] text-2xl text-white font-medium">
          Completa tus datos
        </h3>

        <p class="text-white/80 max-w-xl mx-auto">
          Porfavor completa tus datos para incrementar tus posibilidades de obtener tu pasantía sońada
        </p>

        <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
          class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-cyan-600 mx-auto mt-10 cursor-pointer">
          <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
        </a>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->

  <!-- iframe start  -->
  <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
    <div class="h-[100%] flex items-center justify-center">
      <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500"
        frameborder="0"></iframe>
    </div>
    <button class="text-slate-400 absolute top-[20px] right-[20px]">
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
        stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
        @click="toggle">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <section class="relative lg:mt-24 mt-[74px] pb-16">
    <div class="lg:container container-fluid">
      <div class="profile-banner relative text-transparent">
        <input id="pro-banner" name="profile-banner" type="file" class="hidden" @change="loadFile2" />
        <div class="relative shrink-0">
          <img :src="this.imageSrc2" class="h-64 w-full object-scale-down lg:rounded-xl shadow dark:shadow-gray-700"
            id="profile-banner" alt="" />
          <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
        </div>
      </div>

      <div class="md:flex mx-4 -mt-12">
        <div class="md:w-full">
          <div class="relative flex items-end">
            <div class="profile-pic text-center">
              <input id="pro-img" name="profile-image" type="file" class="hidden" @change="loadFile" />
              <div>
                <div class="relative size-28 max-w-[112px] max-h-[112px] mx-auto">
                  <img :src="this.imageSrc"
                    class="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                    id="profile-image" alt="" />
                  <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                </div>
              </div>
            </div>
            <div class="ms-4">
              <h5 class="text-lg font-semibold">{{ estudianteDto.persona.nombre+' '+estudianteDto.persona.apellidoPaterno+' '+estudianteDto.persona.apellidoMaterno }}</h5>
              <p class="text-slate-400">Estudiante</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end -->
    <!--inicio de profie-->
    <div class="container mt-16">
      <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
        
        
        
        
        
        
        <div v-if="paginaFormulario==1" class="lg:col-span-12">
          <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <h5 class="text-lg font-semibold mb-4">Personal Detail :</h5>
            <div>
              <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-4">
                <div class="lg:col-span-6">
                  <label class="form-label font-medium">Nombres : <span class="text-red-600">*</span></label>
                  <input type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                    v-model="estudianteDto.persona.nombre"  
                  placeholder="Nombres:" id="firstname" name="name" required="" />
                </div>
                <div class="lg:col-span-4">
                  <label class="form-label font-medium">Ci :<span class="text-red-600">*</span></label>
                  <input type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                  v-model="estudianteDto.persona.ci"  
 
                  placeholder="Ci" name="address" required="" />
                </div>


                <div class="lg:col-span-6">
                  <label class="form-label font-medium">Apellido Paterno : <span class="text-red-600">*</span></label>
                  <input type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                  v-model="estudianteDto.persona.apellidoPaterno"  
  
                  placeholder="Apellido Paterno:" id="lastname" name="name" required="" />
                </div>

                <div class="lg:col-span-6">
                  <label class="form-label font-medium">Apellido  Materno : <span class="text-red-600">*</span></label>
                  <input type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                  v-model="estudianteDto.persona.apellidoMaterno"  
  
                  placeholder="Apellido Paterno:" id="lastname" name="name" required="" />
                </div>


                <div class="lg:col-span-6">
                  <label class="form-label font-medium">Email : <span class="text-red-600">*</span></label>
                  <input type="email" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                  v-model="estudianteDto.correo"  
  
                  placeholder="Email" name="email" required="" />
                </div>

                <div class="lg:col-span-6">
                  <label class="form-label font-medium" for="birthday">Fecha de Nacimiento :<span class="text-red-600">*</span></label>
                  <input type="date" id="birthday" name="birthday"
                  v-model="estudianteDto.persona.fechaDeNacimiento"  
  
                  class="form-input border border-slate-100 dark:border-slate-800 mt-2" />
                </div>

                <div class="lg:col-span-4">
                  <label class="form-label font-medium">Número Celular :<span class="text-red-600">*</span></label>
                  <input type="number" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                  v-model="estudianteDto.persona.telefono"  
  
                  placeholder="Número Celular" name="address" required="" />
                </div>

                <div class="lg:col-span-3">
                  <label class="form-label font-medium">Carrera :</label>
                  <select
                  v-model="estudianteDto.idCarreras"

                    class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-2">
                    <option value="1">Ing. en Sistemas</option>
                    <option value="2">Psicopedagogía</option>
                    <option value="3">Comunicación Social</option>
                  </select>
                </div>



                <div class="lg:col-span-6">
                  <label class="form-label font-medium" for="birthday">Año de Ingreso a la Universidad :<span class="text-red-600">*</span></label>
                  <input type="number" id="birthday" name="birthday"
                  v-model="estudianteDto.persona.anioIngresoUniversidad"  
                  @input="validateInputYear"
                  class="form-input border border-slate-100 dark:border-slate-800 mt-2" />
                </div>

                

              <!--

                <div class="lg:col-span-6">
                  <label class="form-label font-medium" for="multiple_files">Subir Curriculum:</label>
                  <input
                    class="relative form-input border border-slate-100 dark:border-slate-800 file:h-10 file:-mx-3 file:-my-2 file:cursor-pointer file:rounded-none file:border-0 file:px-3 file:text-neutral-700 bg-clip-padding px-3 py-1.5 file:me-3 mt-2"
                    id="multiple_files" type="file" multiple />
                </div>
-->

              </div>
              <!--end grid-->

              <div class="grid grid-cols-1">
                <div class="mt-5">
                  <label class="form-label font-medium">Descripción : <span class="text-red-600">*</span> </label>
                  <textarea name="comments" id="comments"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-2 textarea"
                    v-model="estudianteDto.persona.descripcion"
                    placeholder="Descripción :"></textarea>
                </div>
              </div>
              <!--end row-->
              <div class="grid grid-cols-2 gap-4 mt-5">
                <input  id="submit" name="send"
                @click="this.$keycloak.logout()"
                      class="btn border-red-600 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer"
                      value="Cancelar" />

                <input  id="submit" name="send"
                @click="paginaFormulario=2"
                      class="btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md cursor-pointer"
                      value="Siguiente" />
        </div>
              
             
            </div>
            <!--end form-->
          </div>
        </div>

        <div class="lg:col-span-12">
          <div v-if="paginaFormulario==2" class="lg:col-span-6">
          <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <div class="grid grid-cols-1 gap-4">
              <div>
                <h5 class="text-lg font-semibold mb-4">Skills :</h5>
                <div>
                  <div class="grid grid-cols-1 gap-4">
                    <div class="">
                      <label class="form-label font-medium" for="WordPress">WordPress</label>
                      <input type="number" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                        placeholder="First Name:" id="WordPress" name="number" required="" />
                    </div>

              

                    
                  </div>

                  <div class="grid grid-cols-1 gap-4 mt-5">
                <input  id="submit" name="send"
                @click="agregarHabilidad()"
                      class="btn border-green-600 bg-green-600 hover:bg-green-700 text-white rounded-md cursor-pointer"
                      value="Agregar Nueva Habilildad" />

                  </div>

                  
        <div class="grid grid-cols-2 gap-4 mt-5">
                <input  id="submit" name="send"
                @click="paginaFormulario=1"
                      class="btn border-red-600 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer"
                      value="Atrás" />

                <input  id="submit" name="send"
                @click="paginaFormulario=3"
                      class="btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md cursor-pointer"
                      value="Siguiente" />
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="paginaFormulario==3" class="lg:col-span-6">
          <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <div class="grid grid-cols-1 gap-4">
              <div>
                <h5 class="text-lg font-semibold mb-4">Experience :</h5>

                <div>
                  <div>
                    <div v-if="imageSrc === null ? 'hidden' : ''"
                      class="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Supports JPG, PNG and MP4 videos. Max file size : 10MB.
                    </div>
                    <div v-else
                      class="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      <img class="preview-content" style="object-fit: scale-down;" :src="imageSrc" />
                    </div>
                    <input type="file" id="input-file" name="input-file" accept="image/*" @change="loadFile" hidden />
                    <label
                      class="btn-upload btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md mt-5 cursor-pointer cursor-pointer"
                      for="input-file">Upload Image</label>
                  </div>
                  <div>
                    <div class="grid grid-cols-12 mt-6 gap-4">
                      <div class="col-span-12">
                        <label class="form-label font-medium">Job Title <span class="text-red-600">*</span></label>
                        <input name="name" id="JobTitle" type="text"
                          class="form-input border border-slate-100 dark:border-slate-800" placeholder="Title :" />
                      </div>
                      <!--end col-->

                      <div class="col-span-12">
                        <label class="form-label font-medium">Company Name
                          <span class="text-red-600">*</span></label>
                        <input name="name" id="CompanyName" type="text"
                          class="form-input border border-slate-100 dark:border-slate-800" placeholder="Company :" />
                      </div>
                      <!--end col-->

                      <div class="col-span-12">
                        <label class="form-label font-medium">Year <span class="text-red-600">*</span></label>
                        <input name="number" id="Year" type="number"
                          class="form-input border border-slate-100 dark:border-slate-800" placeholder="Year :" />
                      </div>
                      <!--end col-->

                      <div class="col-span-12">
                        <label class="form-label font-medium">
                          Description :
                        </label>
                        <textarea name="comments" id="Description"
                          class="form-input border border-slate-100 dark:border-slate-800 textarea"
                          placeholder="Description :"></textarea>
                      </div>
                      <!--end col-->
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-4 mt-5">
                <input  id="submit" name="send"
                @click="paginaFormulario=2"
                      class="btn border-red-600 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer"
                      value="Atrás" />

                <input  id="submit" name="send"
                @click="paginaFormulario=4"
                      class="btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md cursor-pointer"
                      value="Siguiente" />
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        </div>
               

        


        <div v-if="paginaFormulario==4" class="lg:col-span-12">
          <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <h5 class="text-lg font-semibold mb-4">Contact Info :</h5>

                <div>
                  <div class="grid grid-cols-1 gap-4">
                    <div>
                      <label class="form-label font-medium">Phone No. :</label>
                      <input name="number" id="number" type="number"
                        class="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Phone :" />
                    </div>

                    <div>
                      <label class="form-label font-medium">Website :</label>
                      <input name="url" id="url" type="url"
                        class="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Url :" />
                    </div>
                  </div>
                  <!--end grid-->

                  <button
                    class="btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md mt-5 cursor-pointer">
                    Add
                  </button>
                </div>
              </div>
              <!--end col-->

              <div>
                <h5 class="text-lg font-semibold mb-4">Change password :</h5>
                <div>
                  <div class="grid grid-cols-1 gap-4">
                    <div>
                      <label class="form-label font-medium">Old password :</label>
                      <input type="password" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                        placeholder="Old password" required="" />
                    </div>

                    <div>
                      <label class="form-label font-medium">New password :</label>
                      <input type="password" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                        placeholder="New password" required="" />
                    </div>

                    <div>
                      <label class="form-label font-medium">Re-type New password :</label>
                      <input type="password" class="form-input border border-slate-100 dark:border-slate-800 mt-2"
                        placeholder="Re-type New password" required="" />
                    </div>
                  </div>
                  <!--end grid-->

                 
      </div>
              </div>
              <!--end col-->
            </div>
            <div class="grid grid-cols-2 gap-4 mt-5">
                <input  id="submit" name="send"
                @click="paginaFormulario=3"
                      class="btn border-red-600 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer"
                      value="Atrás" />

                <input  id="submit" name="send"
                @click="paginaFormulario=5"
                      class="btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md cursor-pointer"
                      value="Siguiente" />
        </div>
            <!--end row-->
          </div>
        </div>

        <div v-if="paginaFormulario==5" class="lg:col-span-12">
          <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <h5 class="text-lg font-semibold mb-4">Social Media :</h5>

            <div class="md:flex">
              <div class="md:w-1/3">
                <span class="font-medium">Twitter</span>
              </div>

              <div class="md:w-2/3 mt-4 md:mt-0">
                <form>
                  <div class="form-icon relative">
                    <i data-feather="twitter" class="size-4 absolute top-5 start-4"></i>
                    <input type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12"
                      placeholder="Twitter Profile Name" id="twitter_name" name="name" required="" />
                  </div>
                </form>

                <p class="text-slate-400 mt-1">
                  Add your Twitter username (e.g. jennyhot).
                </p>
              </div>
            </div>

            <div class="md:flex mt-8">
              <div class="md:w-1/3">
                <span class="font-medium">Facebook</span>
              </div>

              <div class="md:w-2/3 mt-4 md:mt-0">
                <form>
                  <div class="form-icon relative">
                    <i data-feather="facebook" class="size-4 absolute top-5 start-4"></i>
                    <input type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12"
                      placeholder="Facebook Profile Name" id="facebook_name" name="name" required="" />
                  </div>
                </form>

                <p class="text-slate-400 mt-1">
                  Add your Facebook username (e.g. jennyhot).
                </p>
              </div>
            </div>

            <div class="md:flex mt-8">
              <div class="md:w-1/3">
                <span class="font-medium">Instagram</span>
              </div>

              <div class="md:w-2/3 mt-4 md:mt-0">
                <form>
                  <div class="form-icon relative">
                    <i data-feather="instagram" class="size-4 absolute top-5 start-4"></i>
                    <input type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12"
                      placeholder="Instagram Profile Name" id="insta_name" name="name" required="" />
                  </div>
                </form>

                <p class="text-slate-400 mt-1">
                  Add your Instagram username (e.g. jennyhot).
                </p>
              </div>
            </div>

            <div class="md:flex mt-8">
              <div class="md:w-1/3">
                <span class="font-medium">Linkedin</span>
              </div>

              <div class="md:w-2/3 mt-4 md:mt-0">
                <form>
                  <div class="form-icon relative">
                    <i data-feather="linkedin" class="size-4 absolute top-5 start-4"></i>
                    <input type="text" class="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12"
                      placeholder="Linkedin Profile Name" id="linkedin_name" name="name" required="" />
                  </div>
                </form>

                <p class="text-slate-400 mt-1">Add your Linkedin username.</p>
              </div>
            </div>

            <div class="md:flex mt-8">
              <div class="md:w-1/3">
                <span class="font-medium">Youtube</span>
              </div>

              <div class="md:w-2/3 mt-4 md:mt-0">
                <form>
                  <div class="form-icon relative">
                    <i data-feather="youtube" class="size-4 absolute top-5 start-4"></i>
                    <input type="url" class="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12"
                      placeholder="Youtube url" id="you_url" name="url" required="" />
                  </div>
                </form>

                <p class="text-slate-400 mt-1">Add your Youtube url.</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-5">
                <input  id="submit" name="send"
                @click="paginaFormulario=4"
                      class="btn border-red-600 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer"
                      value="Atrás" />

                <input  id="submit" name="send"
                @click="paginaFormulario=6"
                      class="btn border-cyan-600 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md cursor-pointer"
                      value="Siguiente" />
        </div>
          </div>
        </div>


        <!--
          <div class="lg:col-span-12">
            <div
              class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900"
            >
              <h5 class="text-lg font-semibold mb-5">Account Notifications :</h5>
  
              <div class="flex justify-between pb-4">
                <h6 class="mb-0 font-medium">When someone mentions me</h6>
                <div class="">
                  <input
                    class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    id="noti1"
                  />
                  <label class="form-check-label" for="noti1"></label>
                </div>
              </div>
              <div
                class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700"
              >
                <h6 class="mb-0 font-medium">When someone follows me</h6>
                <div class="">
                  <input
                    class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    checked
                    id="noti2"
                  />
                  <label class="form-check-label" for="noti2"></label>
                </div>
              </div>
              <div
                class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700"
              >
                <h6 class="mb-0 font-medium">When shares my activity</h6>
                <div class="">
                  <input
                    class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    id="noti3"
                  />
                  <label class="form-check-label" for="noti3"></label>
                </div>
              </div>
              <div
                class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700"
              >
                <h6 class="mb-0 font-medium">When someone messages me</h6>
                <div class="">
                  <input
                    class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    id="noti4"
                  />
                  <label class="form-check-label" for="noti4"></label>
                </div>
              </div>
            </div>
          </div>
  
          <div class="lg:col-span-12">
            <div
              class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900"
            >
              <h5 class="text-lg font-semibold mb-5">
                Marketing Notifications :
              </h5>
  
              <div class="flex justify-between pb-4">
                <h6 class="mb-0 font-medium">There is a sale or promotion</h6>
                <div class="">
                  <input
                    class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    id="noti5"
                  />
                  <label class="form-check-label" for="noti5"></label>
                </div>
              </div>
              <div
                class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700"
              >
                <h6 class="mb-0 font-medium">Company news</h6>
                <div class="">
                  <input
                    class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    id="noti6"
                  />
                  <label class="form-check-label" for="noti6"></label>
                </div>
              </div>
              <div
                class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700"
              >
                <h6 class="mb-0 font-medium">Weekly jobs</h6>
                <div class="">
                  <input
                    class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    checked
                    id="noti7"
                  />
                  <label class="form-check-label" for="noti7"></label>
                </div>
              </div>
              <div
                class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700"
              >
                <h6 class="mb-0 font-medium">Unsubscribe News</h6>
                <div class="">
                  <input
                    class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-cyan-600 focus:border-cyan-300 focus:ring focus:ring-offset-0 focus:ring-cyan-200 focus:ring-opacity-50"
                    type="checkbox"
                    value=""
                    checked
                    id="noti8"
                  />
                  <label class="form-check-label" for="noti8"></label>
                </div>
              </div>
            </div>
          </div>


          -->



<!--
        <div class="lg:col-span-12">
          <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <h5 class="text-lg font-semibold mb-5 text-red-600">
              Delete Account :
            </h5>

            <p class="text-slate-400 mb-4">
              Do you want to delete the account? Please press below "Delete"
              button
            </p>

            <a @click="showAlert"
              class="btn border-red-600 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer">Delete</a>
          </div>
        </div>



-->




      </div>
    </div>
    <!--fin de edicion de profie-->
  </section>
  <!-- End Hero -->

  <switcher />
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import switcher from "@/components/General/switcher.vue";
export default {

  components: {

    switcher,
  },

  mounted() {
    //reload images




  },
  data() {
    return {
      isActive: false,
      imageSrc: "https://cdn-icons-png.flaticon.com/512/84/84099.png",
      image: "https://cdn-icons-png.flaticon.com/512/84/84099.png",
      imageSrc2: "https://cdn-icons-png.flaticon.com/512/84/84099.png",
      image2: "https://cdn-icons-png.flaticon.com/512/84/84099.png",


      paginaFormulario:1,


      estudianteDto: {
        "idUsuarios": 10001,
        "kc_UUID": "asdkasdja-sdajfsdbkfasd-32",
        "correo": "daniel.aldazosa@ucb.edu.bo",
        "fechaRegistro": "2024-06-28",
        "horaRegistro": "11:50:07",
        "idRoles": 1,
        "idPersonas": 100001,
        "idCarreras": 1,
        "persona": {
            "idPersona": 100001,
            "nombre": "Daniel Ignacio",
            "apellidoPaterno": "Aldazosa",
            "apellidoMaterno": "Miranda",
            "telefono": 60176430,
            "ci": "6959943",
            "fotoPerfil": "https://backend-sistemas.serverbb.online/api/v1/public/files/download/blob_20240520-221153808",
            "anioIngresoUniversidad": 2020,
            "descripcion": "slkdf sldklfjsald flskdfs dlfksdfjskdf sdfskdfjsldjk",
            "fechaDeNacimiento": "2002-12-17",
            
            
            "habilidades": "{\"habilidades\": \"todas\"}",
            
            
            "habilidadesSeleccionada": "{\"habilidades_seleccionadas\": \"todas\"}",
            
            
            "experiencia": "{\"trabajo\": \"mucho\"}",




            





            "redesSociales": "{\"facebook\": \"facebook.com\"}"
        },
        "carrera": {
            "idCarreras": 1,
            "nombre": "Ing. Sistemas",
            "descripcion": "INGENIERIA EN SISTEMAS"
        }
      },
     
      

    };
  },
  watch:{
    'estudianteDto.idCarreras'(newValue){
     this.estudianteDto.carrera.idCarreras=newValue;
    }
  },

  beforeMount(){
    if(!this.$keycloak.authenticated){
      this.$router.push('/')
    }
    this.estudianteDto.persona.anioIngresoUniversidad =2000; 
    this.estudianteDto.kc_UUID = this.$keycloak.idTokenParsed.sub;
  },
  methods: {

    validateInputYear(event) {
      const value = event.target.value;
      // Limita la entrada a 4 dígitos numéricos
      if (/^\d{0,4}$/.test(value)) {
        this.estudianteDto.persona.anioIngresoUniversidad = value;
      } else {
        event.target.value = this.estudianteDto.persona.anioIngresoUniversida;
      }
    },
  


    //detener video
    toggle() {
      this.isActive = !this.isActive;
      //parar video de youtube
      const iframe = document.querySelector("iframe");
      const video = document.querySelector("video");
      if (iframe) {
        const iframeSrc = iframe.src
        iframe.src = iframeSrc
      }
      if (video) {
        video.pause();
      }

    },
    loadFile(event) {
      this.image = document.getElementById(event.target.name);
      this.imageSrc = URL.createObjectURL(event.target.files[0]);
    },
    loadFile2(event) {
      this.image2 = document.getElementById(event.target.name);
      this.imageSrc2 = URL.createObjectURL(event.target.files[0]);
    },
    showAlert() {
      // Use sweetalert2
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "red",
          cancelButtonColor: "blue",
          confirmButtonText: "Delete",
        })
        .then((result) => {
          if (result.isConfirmed) {
            toast.error("Deleted!", {
              autoClose: 1000,
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>