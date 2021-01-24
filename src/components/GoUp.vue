<template>
  <div>
    <button class="go-up" @click="scrollTop" v-if="scrolled">
      <span>&#x2191;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "GoUp",
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    onScroll() {
      if (window.top.scrollY > 500) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
