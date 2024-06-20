<template>
    <!-- Start Footer -->
    <footer class="relative bg-slate-900 dark:bg-slate-800">
            <div class="container">
                <div class="grid grid-cols-1">
                    <div class="relative py-12">
                        <!-- Subscribe -->
                        <div class="relative w-full">
                            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div class="md:col-span-3">
                                    <a href="#" class="flex justify-center md:justify-start focus:outline-none">
                                        <img src="../../assets/images/logo-light.png" class="" alt="">
                                    </a>
                                </div><!--end col-->
                        
                                <div class="md:col-span-9">
                                    <ul class="list-disc footer-list md:text-end text-center">
                                        <li v-for="item in datas" :key="item" class="inline-block me-3"><router-link :to="item.link" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">{{item.name}}</router-link></li>
                                    </ul><!--end icon-->
                                </div><!--end col-->
                            </div><!--end grid-->
                        </div>
                        <!-- Subscribe -->
                    </div>
                </div>
            </div><!--end container-->

            <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div class="container text-center">
                    <div class="grid md:grid-cols-2 items-center gap-6">
                        <div class="md:text-start text-center">
                            <p class="mb-0 text-gray-300 font-medium">© {{date}} Jobstack. Design & Develop with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>

                        <ul class="list-none md:text-end text-center">
                            <li v-for="item in icons" :key="item" class="inline me-1"><a :href="item.link" target="_blank" class="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white"><i :class="item.icon" title="Buy Now"></i></a></li>
                        </ul><!--end icon-->
                    </div><!--end grid-->
                </div><!--end container-->
            </div>
        </footer><!--end footer-->
        <!-- End Footer -->
</template>

<script>
    export default {
        data() {
            return {
                date: new Date().getFullYear(),
                icons:[
                    {
                        icon: 'uil uil-shopping-cart align-middle',
                        link: 'https://1.envato.market/jobstack-vue'
                    },
                    {
                        icon: 'uil uil-dribbble align-middle',
                        link: 'https://dribbble.com/shreethemes'
                    },
                    {
                        icon: 'uil uil-behance',
                        link: 'https://www.behance.net/shreethemes'
                    },
                    {
                        icon: 'uil uil-linkedin',
                        link: 'http://linkedin.com/company/shreethemes'
                    },
                    {
                        icon: 'uil uil-facebook-f align-middle',
                        link: 'https://www.facebook.com/shreethemes'
                    },
                    {
                        icon: 'uil uil-instagram align-middle',
                        link: 'https://www.instagram.com/shreethemes/'
                    },
                    {
                        icon: 'uil uil-twitter align-middle',
                        link: 'https://twitter.com/shreethemes'
                    },
                    {
                        icon: 'uil uil-envelope align-middle',
                        link: 'mailto:support@shreethemes.in'
                    },
                ],
                datas: [
                    {
                        name: 'Home',
                        link: '/'
                    },
                    {
                        name: 'How it works',
                        link: 'services'
                    },
                    {
                        name: 'Create a job',
                        link: '/'
                    },
                    {
                        name: 'About us',
                        link: 'aboutus'
                    },
                    {
                        name: 'Contact us',
                        link: 'contact'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>