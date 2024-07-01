import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'

export const useEstudiantesStore = defineStore({

    id: 'estudiantes',
    state: () => ({
       
    }),

    actions: {
        async postEstudiante(estudiante) {
            
            try{
                const response = await axios.post(RutaApi + '/usuario', estudiante)
                if(response.data.code == '200'){
                    return response.data.response
                }else{
                    return null;
                }

            } catch (error) {
                console.log(error)
            }
        },
    },
})