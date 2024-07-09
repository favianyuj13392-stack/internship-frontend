import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'

export const useCurriculumsStore = defineStore({
    id: 'curriculums',
    state: () => ({
    }),
    actions:{
        async postCurriculum(data,uuid){
            const formData = new FormData();
            formData.append('file', data);
            try{
                const response = await axios.post(RutaApi + '/estudiante/'+uuid+'/curriculum',formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                if(response.data.code == '200'){
                    return response.data.response
                }else{
                    return null;
                }
            }catch(error){
                console.log(error)
            }
        }
    }
});