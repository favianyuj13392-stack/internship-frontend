<template>
  <navbar :container="'container'" :lightNav="'justify-end'" />

  <section class="relative py-20 w-full min-h-screen bg-slate-50 dark:bg-slate-900">
    <div class="container mx-auto px-4">
      <!-- Encabezado -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">
            Padrón Oficial de <span class="text-cyan-600">Estudiantes</span>
          </h1>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Gestión y validación de estudiantes habilitados para prácticas preprofesionales (USEI).
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <button
            @click="descargarPlantilla"
            class="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center gap-2 shadow-sm"
          >
            <i class="uil uil-file-download-alt text-cyan-600 text-lg"></i>
            Descargar Plantilla
          </button>
          <button
            @click="mostrarModalCarga = true"
            class="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-semibold hover:bg-cyan-700 transition flex items-center gap-2 shadow-sm"
          >
            <i class="uil uil-cloud-upload text-lg"></i>
            Cargar Padrón (Excel/CSV)
          </button>
        </div>
      </div>

      <!-- Filtros y Búsqueda -->
      <div class="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="md:col-span-2">
            <label class="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Buscar</label>
            <div class="relative">
              <input
                v-model="filtroSearch"
                @input="debounceBuscar"
                type="text"
                placeholder="Buscar por correo, nombre o código..."
                class="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-cyan-600 dark:text-white"
              />
              <i class="uil uil-search absolute left-3 top-2.5 text-slate-400 text-lg"></i>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Carrera</label>
            <select
              v-model="filtroCarrera"
              @change="cargarPadron"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-cyan-600 dark:text-white"
            >
              <option :value="null">Todas las carreras</option>
              <option v-for="carrera in adminStore.carreras" :key="carrera.idcarreras" :value="carrera.idcarreras">
                {{ carrera.nombre }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">Estado</label>
            <select
              v-model="filtroEstado"
              @change="cargarPadron"
              class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-cyan-600 dark:text-white"
            >
              <option :value="null">Todos los estados</option>
              <option value="ACTIVO">Activo</option>
              <option value="INACTIVO">Inactivo</option>
              <option value="EGRESADO">Egresado</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Tabla de Estudiantes -->
      <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-slate-500 uppercase text-xs font-semibold">
              <tr>
                <th class="px-6 py-4">Estudiante</th>
                <th class="px-6 py-4">Correo Institucional</th>
                <th class="px-6 py-4">Carrera</th>
                <th class="px-6 py-4">Código / Ingreso</th>
                <th class="px-6 py-4">Estado</th>
                <th class="px-6 py-4">Último Acceso</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-700">
              <tr v-if="adminStore.cargandoPadron">
                <td colspan="6" class="px-6 py-12 text-center text-slate-400">
                  <i class="uil uil-spinner-alt animate-spin text-3xl mb-2"></i>
                  <p>Cargando padrón...</p>
                </td>
              </tr>
              <tr v-else-if="adminStore.padron.length === 0">
                <td colspan="6" class="px-6 py-12 text-center text-slate-400">
                  <i class="uil uil-folder-open text-4xl mb-2"></i>
                  <p>No se encontraron estudiantes en el padrón con los filtros seleccionados.</p>
                </td>
              </tr>
              <tr
                v-for="item in adminStore.padron"
                :key="item.idpadron"
                class="hover:bg-slate-50 dark:hover:bg-slate-750 transition"
              >
                <td class="px-6 py-4 font-medium text-slate-900 dark:text-white">
                  {{ item.nombres }} {{ item.apellidos }}
                </td>
                <td class="px-6 py-4 text-cyan-600 dark:text-cyan-400 font-mono text-xs">
                  {{ item.correo }}
                </td>
                <td class="px-6 py-4 text-slate-600 dark:text-slate-300">
                  {{ item.nombreCarrera || '—' }}
                </td>
                <td class="px-6 py-4 text-slate-500 dark:text-slate-400 text-xs">
                  <span>{{ item.codigoEstudiante || 'S/C' }}</span>
                  <span v-if="item.anioIngreso" class="ml-1 text-slate-400">({{ item.anioIngreso }})</span>
                </td>
                <td class="px-6 py-4">
                  <button
                    @click="alternarEstado(item)"
                    :class="{
                      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400': item.estado === 'ACTIVO',
                      'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400': item.estado === 'INACTIVO',
                      'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400': item.estado === 'EGRESADO'
                    }"
                    class="px-2.5 py-1 rounded-full text-xs font-semibold hover:opacity-80 transition cursor-pointer"
                  >
                    {{ item.estado }}
                  </button>
                </td>
                <td class="px-6 py-4 text-slate-400 text-xs">
                  {{ formatearFecha(item.ultimoAcceso) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Paginación -->
        <div class="px-6 py-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <span class="text-xs text-slate-500">
            Total: <strong>{{ adminStore.totalPadron }}</strong> estudiantes registrados
          </span>
          <div class="flex gap-2">
            <button
              :disabled="paginaActual <= 0"
              @click="cambiarPagina(paginaActual - 1)"
              class="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-xs font-medium disabled:opacity-50"
            >
              Anterior
            </button>
            <span class="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400">
              Página {{ paginaActual + 1 }} de {{ adminStore.totalPaginasPadron || 1 }}
            </span>
            <button
              :disabled="paginaActual + 1 >= adminStore.totalPaginasPadron"
              @click="cambiarPagina(paginaActual + 1)"
              class="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-xs font-medium disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal de Carga de Padrón -->
  <div v-if="mostrarModalCarga" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-6 border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-5">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <i class="uil uil-cloud-upload text-cyan-600 text-xl"></i> Cargar Padrón de Estudiantes
        </h3>
        <button @click="cerrarModalCarga" class="text-slate-400 hover:text-slate-600 text-2xl">&times;</button>
      </div>

      <!-- Zona de Arrastrar Archivo -->
      <div
        @dragover.prevent
        @drop.prevent="onDropArchivo"
        @click="$refs.fileInput.click()"
        class="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 text-center cursor-pointer hover:border-cyan-600 transition bg-slate-50 dark:bg-slate-900/50 mb-5"
      >
        <input ref="fileInput" type="file" accept=".xlsx, .xls, .csv" @change="onSelectArchivo" class="hidden" />
        <i class="uil uil-file-upload-alt text-4xl text-cyan-600 mb-2"></i>
        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {{ archivoSeleccionado ? archivoSeleccionado.name : 'Haz clic o arrastra tu archivo Excel (.xlsx) o CSV aquí' }}
        </p>
        <p class="text-xs text-slate-400 mt-1">Formato soportado: .xlsx, .csv (Máx. 10MB)</p>
      </div>

      <!-- Opciones -->
      <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl space-y-3 mb-5 border border-slate-200 dark:border-slate-700">
        <div class="flex items-center gap-2">
          <input type="checkbox" id="sincro" v-model="sincronizacionCompleta" class="rounded text-cyan-600" />
          <label for="sincro" class="text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
            <strong>Sincronización completa:</strong> Marcar como INACTIVO a estudiantes ausentes en este archivo.
          </label>
        </div>
      </div>

      <!-- Resumen de Simulación -->
      <div v-if="resumen" class="mb-5 space-y-4">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500">Resultado de la Simulación</h4>
        <div class="grid grid-cols-4 gap-3 text-center">
          <div class="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <span class="block text-2xl font-bold text-emerald-600">{{ resumen.totalNuevos }}</span>
            <span class="text-xs text-emerald-800 dark:text-emerald-300 font-medium">Nuevos</span>
          </div>
          <div class="bg-blue-50 dark:bg-blue-950/40 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <span class="block text-2xl font-bold text-blue-600">{{ resumen.totalActualizados }}</span>
            <span class="text-xs text-blue-800 dark:text-blue-300 font-medium">Actualizados</span>
          </div>
          <div class="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg border border-slate-200 dark:border-slate-600">
            <span class="block text-2xl font-bold text-slate-600 dark:text-slate-200">{{ resumen.totalSinCambios }}</span>
            <span class="text-xs text-slate-600 dark:text-slate-300 font-medium">Sin cambios</span>
          </div>
          <div class="bg-rose-50 dark:bg-rose-950/40 p-3 rounded-lg border border-rose-200 dark:border-rose-800">
            <span class="block text-2xl font-bold text-rose-600">{{ resumen.totalErrores }}</span>
            <span class="text-xs text-rose-800 dark:text-rose-300 font-medium">Errores</span>
          </div>
        </div>

        <!-- Errores expandibles -->
        <div v-if="resumen.errores && resumen.errores.length > 0" class="border border-rose-200 bg-rose-50/50 rounded-lg p-3 max-h-40 overflow-y-auto">
          <p class="text-xs font-bold text-rose-800 mb-2">Detalle de errores en el archivo:</p>
          <ul class="text-xs text-rose-700 space-y-1">
            <li v-for="(err, idx) in resumen.errores" :key="idx">
              • Fila {{ err.fila }} [{{ err.campo }}]: {{ err.motivo }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Botones de Acción -->
      <div class="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
        <button
          @click="cerrarModalCarga"
          class="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
        >
          Cancelar
        </button>
        <button
          v-if="!resumen || resumen.totalErrores > 0"
          :disabled="!archivoSeleccionado || procesando"
          @click="ejecutarSimulacion"
          class="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-900 transition disabled:opacity-50 flex items-center gap-2"
        >
          <i v-if="procesando" class="uil uil-spinner-alt animate-spin"></i>
          Simular Validación
        </button>
        <button
          v-else
          :disabled="procesando"
          @click="ejecutarAplicacion"
          class="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition disabled:opacity-50 flex items-center gap-2"
        >
          <i v-if="procesando" class="uil uil-spinner-alt animate-spin"></i>
          Confirmar y Aplicar Importación
        </button>
      </div>
    </div>
  </div>

  <footers />
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import navbar from "@/components/Administrador/navbarAdministrador.vue"
import footers from "@/components/footer/footer.vue"
import { useEstudiantesAdminStore } from "@/stores/Administradores/estudiantesAdminStore"
import Swal from 'sweetalert2'

const { appContext } = getCurrentInstance()
const keycloak = appContext.config.globalProperties.$keycloak
const adminStore = useEstudiantesAdminStore()

const uuid = ref(keycloak?.idTokenParsed?.sub || '')
const filtroSearch = ref('')
const filtroCarrera = ref(null)
const filtroEstado = ref(null)
const paginaActual = ref(0)
let debounceTimeout = null

const mostrarModalCarga = ref(false)
const archivoSeleccionado = ref(null)
const sincronizacionCompleta = ref(false)
const resumen = ref(null)
const procesando = ref(false)

onMounted(async () => {
  await adminStore.fetchCarreras()
  await cargarPadron()
})

const cargarPadron = async () => {
  await adminStore.fetchPadron(uuid.value, {
    carreraId: filtroCarrera.value,
    estado: filtroEstado.value,
    search: filtroSearch.value,
    page: paginaActual.value,
    size: 15
  })
}

const debounceBuscar = () => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    paginaActual.value = 0
    cargarPadron()
  }, 400)
}

const cambiarPagina = (nuevaPagina) => {
  paginaActual.value = nuevaPagina
  cargarPadron()
}

const alternarEstado = async (item) => {
  const nuevoEstado = item.estado === 'ACTIVO' ? 'INACTIVO' : 'ACTIVO'
  const confirmacion = await Swal.fire({
    title: `¿Cambiar estado a ${nuevoEstado}?`,
    text: `El estudiante ${nuevoEstado === 'INACTIVO' ? 'perderá' : 'obtendrá'} acceso a convocatorias.`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, cambiar',
    cancelButtonText: 'Cancelar'
  })

  if (confirmacion.isConfirmed) {
    try {
      await adminStore.actualizarEstudiantePadron(uuid.value, item.idpadron, {
        estado: nuevoEstado
      })
      item.estado = nuevoEstado
      Swal.fire('Actualizado', `Estado cambiado a ${nuevoEstado}`, 'success')
    } catch (e) {
      Swal.fire('Error', 'No se pudo actualizar el estado', 'error')
    }
  }
}

const descargarPlantilla = async () => {
  try {
    await adminStore.descargarPlantilla(uuid.value)
  } catch (e) {
    Swal.fire('Error', 'No se pudo descargar la plantilla', 'error')
  }
}

const onSelectArchivo = (event) => {
  archivoSeleccionado.value = event.target.files[0]
  resumen.value = null
}

const onDropArchivo = (event) => {
  if (event.dataTransfer.files.length > 0) {
    archivoSeleccionado.value = event.dataTransfer.files[0]
    resumen.value = null
  }
}

const cerrarModalCarga = () => {
  mostrarModalCarga.value = false
  archivoSeleccionado.value = null
  resumen.value = null
  procesando.value = false
}

const ejecutarSimulacion = async () => {
  if (!archivoSeleccionado.value) return
  procesando.value = true
  try {
    resumen.value = await adminStore.importarPadron(
      uuid.value,
      archivoSeleccionado.value,
      'SIMULACION',
      sincronizacionCompleta.value
    )
  } catch (e) {
    Swal.fire('Error de Validación', e.message || 'Error al validar archivo', 'error')
  } finally {
    procesando.value = false
  }
}

const ejecutarAplicacion = async () => {
  if (!archivoSeleccionado.value) return
  procesando.value = true
  try {
    const res = await adminStore.importarPadron(
      uuid.value,
      archivoSeleccionado.value,
      'APLICADO',
      sincronizacionCompleta.value
    )
    Swal.fire(
      'Importación Exitosa',
      `Se registraron ${res.totalNuevos} nuevos y ${res.totalActualizados} actualizados.`,
      'success'
    )
    cerrarModalCarga()
    await cargarPadron()
  } catch (e) {
    Swal.fire('Error de Importación', e.message || 'Error al aplicar archivo', 'error')
  } finally {
    procesando.value = false
  }
}

const formatearFecha = (fechaStr) => {
  if (!fechaStr) return 'Nunca'
  return new Date(fechaStr).toLocaleString('es-BO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
