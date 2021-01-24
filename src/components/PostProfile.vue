<template>
  <div class="post-card">
    <b-card tag="article">
      <b-card-header>
        <img
          class="post-photo"
          :src="require('../assets/images/' + post.id + '.png')"
          :alt="post.alt ? post.alt : 'preview photo'"
        />
      </b-card-header>

      <div class="post-body">
        <div class="d-flex justify-content-between align-items-center">
          <ul class="tags">
            <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
          </ul>

          <p class="post-date">
            {{ post.date }}
          </p>
        </div>

        <b-card-text
          ><a :href="post.url" target="_blank">Preview</a></b-card-text
        >
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PostProfile",
  props: {
    post: Object
  }
};
</script>
