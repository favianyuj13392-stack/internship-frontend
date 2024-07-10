import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'


export const usePasantiasAdministracionInstitucionStore = defineStore({

    id: 'pasantiasAdministracionInstitucion',
    state: () => ({
        pasantias: []
    }),
    
    actions: {
        async fetchPasantiaInstitucionByUUID(uuid,id) {
            try {
                const response = await axios.get(RutaApi + '/usuario/'+uuid+'/pasantia/' + id+'/detalle')
                if (response.data.code == '200') {
                    return response.data.response
                } else {
                    return null;
                }
            } catch (error) {
                console.log(error)
            }
        },
        async postPasantiaInstitucion(uuid,idInstitucion, data) {
            try {
                const response = await axios.post(RutaApi + '/usuario/'+uuid+'/institucion/'+idInstitucion+'/pasantia', data)
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
