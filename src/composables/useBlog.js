import { ref } from "vue";
import { format } from 'date-fns';

export default function useBlog() {
  const posts = ref();
  const post = ref();
  const url = "http://martinh3113.pythonanywhere.com/posts/";

  const getPosts = async () => {
    try {
      const data = await fetch(url);
      posts.value = await data.json();
    } catch (error) {
      console.log(error);
    }
  };

  const formatearfecha = (fecha) => {
    return format(new Date(fecha), "dd/MM/yyyy");
  };

  return {
    getPosts,
    posts,
    formatearfecha,
  };
}
