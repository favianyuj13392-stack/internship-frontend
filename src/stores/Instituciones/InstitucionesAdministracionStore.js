import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'

export const useInstitucionesAdministracionStore = defineStore({
    id: 'institucionesAdministracion',
    state: () => ({
        
    }),

    actions: {
        
        async fetchInstitucionByUUID(id) {
            try {
                const response = await axios.get(RutaApi + '/usuario/' + id+'/institucion')
                if (response.data.code == '200') {
                    return response.data.response
                } else {
                    return null;
                }
            } catch (error) {
                console.log(error)
            }
        },

        async fetchPasantiasInstitucionByUUID(id) {
            try {
                const response = await axios.get(RutaApi + '/institucion/usuario/' + id+'/pasantias')
                if (response.data.code == '200') {
                    return response.data.response
                } else {
                    return null;
                }
            } catch (error) {
                console.log(error)
            }
        }
    
    },
})