<template>


<Main :posts="posts" />


</template>

<script setup>
import useBlog from '../composables/useBlog';
import Main from '../components/Main.vue'


const { posts , getPosts } = useBlog();

getPosts();

</script>


<style scoped>

</style>