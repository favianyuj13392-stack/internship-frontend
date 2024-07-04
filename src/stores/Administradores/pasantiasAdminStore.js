import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'

export const usePasantiasAdminStore = defineStore({
    id: 'pasantiasAdmin',
    state: () => ({
    }),

    actions: {
        async getPasantias(pagina, tamanio, terminoDeBusqueda, active, kkid) {

            try {
                const response = await axios.get(RutaApi + '/admin/'+kkid+'/pasantia', {
                    params: {
                        pagina: pagina,
                        tamanio: tamanio,
                        terminoDeBusqueda: terminoDeBusqueda,
                        active: active
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