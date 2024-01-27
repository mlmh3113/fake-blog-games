<template>
    <div class="flex flex-col md:grid md:grid-cols-12 grid-rows-auto gap-2 dark:text-white  ">

        <div id="main-post" class=" col-span-10 flex flex-col gap-2 p-2">

            <div class="flex flex-row gap-2">
                <img class="w-2/3" :src=posts[0].image alt="jj">


                <div class="flex flex-col gap-2">
                    <a href="">
                        <h2 class="text-3xl text-semibold hover:text-sky-500 :hover:underline">{{ posts[0].title }}</h2>
                    </a>

                    <h3>{{ posts[0].sub_title }}</h3>
                    <p>{{ posts[0].content }}</p>

                    <div>
                        <span
                            class="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700">
                            <p class="whitespace-nowrap text-sm">{{ posts[0].category_name }}</p>
                        </span>


                    </div>

                    <div>
                        <p>{{ formatearfecha(posts[0].created_at) }}</p>
                    </div>

                </div>

            </div>


        </div>

        <div id="all-posts" class="flex flex-col md:flex-row col-span-10 gap-4 py-12 mx-6 border-b-[1px] border-slate-100">

            <div class="flex flex-col gap-1 w-full md:w-1/3 py-3  " v-for="post in posts.slice(0, 3)" :key="post.id">

                <div class="flex flex-row md:flex-col">
                    <a href="#"><img class="object-fill h-48 w-96 mx-auto " :src="post.image" alt="{{ post.title }}"></a>


                    <div class="flex flex-col gap-2">

                        <a href="">
                            <h2 class="text-2xl text-semibold hover:text-sky-500">{{ post.title }}</h2>
                        </a>

                        <p>{{ post.sub_title.substring(0, 25) }}...</p>
                        <p class="sm:hidden">{{ post.content.substring(0, 60) }}...</p>



                        <p>{{ post.category_name }}</p>
                    </div>


                </div>

            </div>

        </div>

        <Aside/>





    </div>
</template>

<script setup>
import useBlog from '../composables/useBlog';
import Aside from './Aside.vue';


defineProps({
    posts: Object
})

const { formatearfecha } = useBlog();

</script>

<style scoped></style>