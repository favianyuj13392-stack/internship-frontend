import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'

export const usePasantiasStore = defineStore({

    id: 'pasantias',
    state: () => ({
    }),

    actions: {
        async getPasantias(pagina, tamanio, terminoDeBusqueda) {

            try {
                const response = await axios.get(RutaApi + '/pasantia', {
                    params: {
                        pagina: pagina,
                        tamanio: tamanio,
                        terminoDeBusqueda: terminoDeBusqueda
                    }
                })
                if (response.data.code == '200') {
                    return response.data.response
                } else {
                    return null;
                }

            } catch (error) {
                console.log(error)
            }
        },

    },
})