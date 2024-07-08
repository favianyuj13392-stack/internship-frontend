import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'


export const usePasantiasAdministracionInstitucionStore = defineStore({

    id: 'pasantiasAdministracionInstitucion',
    state: () => ({
        pasantias: []
    }),
    
    actions: {
        async fetchPasantiaInstitucionByUUID(id) {
            try {
                const response = await axios.get(RutaApi + '/pasantia/institucion/usuario/' + id)
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
