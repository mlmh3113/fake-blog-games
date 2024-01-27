<template>

    <div class=" col-start-11 col-end-13 row-start-1 row-end-3 overscroll-auto focus:overscroll-contain dark:text-white ">

        <div>

            <h2 class="text-3xl font-semibold">Most Popular</h2>

            <div v-for="post in posts" :key="post.id">
                <img :src="post.image" alt="hola">

                <p>{{ post.title }}</p>

            </div>


          


        </div>

        <Footer />
    </div>

</template>

<script setup>
import { onMounted , computed  } from 'vue';
import Footer from './Footer.vue';
import useBlog from '../composables/useBlog';


const { posts,  getPosts } = useBlog();

onMounted(() => {
    getPosts();
});






</script>

<style  scoped></style>