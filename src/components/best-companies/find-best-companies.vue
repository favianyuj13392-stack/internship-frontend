<template>
    <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Find Best Companies</h3>

        <p class="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.</p>
    </div><!--end grid-->

    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

        <div v-for="item in datas" :key="item" class="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
            <div
                class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                <img :src="item.image" class="size-8" alt="">
            </div>

            <div class="mt-4">

                <router-link :to="{ name: 'employer-detail', params: { id: item.id } }"
                    class="text-lg hover:text-emerald-600 font-semibold">{{ item.name }}</router-link>
                <p class="text-slate-400 mt-2">{{ item.desc }}</p>
            </div>

            <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                <span class="text-slate-400"><i class="uil uil-map-marker"></i> {{ item.country }}</span>
                <span class="block font-semibold text-emerald-600">{{ item.jobs }}</span>
            </div>
        </div><!--end content-->


    </div><!--end grid-->

    <div class="grid md:grid-cols-12 grid-cols-1 mt-6">
        <div class="md:col-span-12 text-center">
            <a href=""
                class="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See
                More Companies <i class="uil uil-arrow-right align-middle"></i></a>
        </div>
    </div><!--end grid-->
</template>

<script>
export default {
    data() {
        return {
            datas: [
                {
                    id: 1,
                    image: require('../../assets/images/company/facebook-logo.png'),
                    name: 'Facebook',
                    country: 'USA',
                    desc: 'Digital Marketing Solutions for Tomorrow',
                    jobs: '6 Jobs'
                },
                {
                    id: 2,
                    image: require('../../assets/images/company/google-logo.png'),
                    name: 'Google',
                    country: 'China',
                    desc: 'Digital Marketing Solutions for Tomorrow',
                    jobs: '6 Jobs'
                },
                {
                    id: 3,
                    image: require('../../assets/images/company/android.png'),
                    name: 'Android',
                    country: 'Dubai',
                    desc: 'Digital Marketing Solutions for Tomorrow',
                    jobs: '6 Jobs'
                },
                {
                    id: 4,
                    image: require('../../assets/images/company/lenovo-logo.png'),
                    name: 'Lenovo',
                    country: 'Pakistan',
                    desc: 'Digital Marketing Solutions for Tomorrow',
                    jobs: '6 Jobs'
                },
                {
                    id: 5,
                    image: require('../../assets/images/company/spotify.png'),
                    name: 'Spotify',
                    country: 'Australia',
                    desc: 'Digital Marketing Solutions for Tomorrow',
                    jobs: '6 Jobs'
                },                           
                {
                    id: 6,
                    image: require('../../assets/images/company/linkedin.png'),
                    name: 'Linkedin',
                    country: 'India',
                    desc: 'Digital Marketing Solutions for Tomorrow',
                    jobs: '6 Jobs'
                },
                {
                    id: 7,
                    image: require('../../assets/images/company/circle-logo.png'),
                    name: 'Circle CI',
                    country: 'Rush',
                    desc: 'Digital Marketing Solutions for Tomorrow',
                    jobs: '6 Jobs'
                },
                {
                    id: 8,
                    image: require('../../assets/images/company/skype.png'),
                    name: 'skype',
                    country: 'Turkey',
                    desc: 'Digital Marketing Solutions for Tomorrow',
                    jobs: '6 Jobs'
                },
            ]

        }
    },
}
</script>

<style lang="scss" scoped></style>