<template>
  <div class="home">
    <h1>Home</h1>
      <PostList v-if="showPosts" :posts="posts"/>
      <button @click="showPosts = !showPosts">toggle posts</button>
      <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      {title: 'welcome to the blog', body: 'lorem ipsum lorem lorem lorem lorem ipsum jkkjkjkjk', id: 1},
      {title: 'top 5 css tips', body: 'lorem ipsum', id: 2}
    ])
    
    const showPosts = ref(true)
    

    return { posts, showPosts }    
  }
}
</script>
