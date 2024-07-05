import { defineStore } from 'pinia'
import axios from 'axios'
import RutaApi from '@/assets/rutaApi.js'

export const useEmpresasAdminStore = defineStore({
        
    id: 'empresas',
    state: () => ({
    }),

    actions: {
        async getEmpresas(pageValue,sizeValue,searchValue, active, kkid) {
            try {                    //añade los params page, size

                const response = await axios.get(RutaApi + '/admin/'+kkid+'/institucion',
                    {
                        params: {
                            page: pageValue,
                            size: sizeValue,
                            search: searchValue,
                            active: active
                        }
                    }
                )


                if (response.data.code == '200') {
                    this.empresas = response.data.response
                    return response.data.response
                } else {
                    return null;
                }
            } catch (error) {
                console.log(error)
            }
        },
        async getEmpresaById(id,kkid) {
            try {
                const response = await axios.get(RutaApi + '/admin/'+kkid+'/institucion/' + id)
                console.log(response)
                if (response.data.code == '200') {
                    return response.data.response
                } else {
                    return null;
                }
            } catch (error) {
                console.log(error)
            }
        },


        async getEmpresasRelacionadas(id, kkid) {
            try {
                const response = await axios.get(RutaApi + '/admin/'+ kkid+'/institucion/' + id + '/relacionadas')
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