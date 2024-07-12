import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'

export const useEstudiantesAdminStore = defineStore({
    id: 'estudiantesAdmin',
    state: () => ({
        estudiantes: [],
        totalEstudiantes: 0,
        estudiante: {},
    }),
    actions: {
        async fetchUserByUUID(uuid,id) {
            try {
                const response = await axios.get(RutaApi + '/admin/'+uuid+'/estudiante/' + id)
                if (response.data.code == '200') {
                    return response.data.response
                } else {
                    return null;
                }
            } catch (error) {
                console.log(error)
            }
        },
        async getSolicitudByIdSolitud(uuid,id) {
            try {
                const response = await axios.get(RutaApi + '/admin/'+uuid+'/solicitud/' + id)
                if (response.data.code == '200') {
                    return response.data.response
                } else {
                    return null;
                }
            } catch (error) {
                console.log(error)
            }

        }
    }

});