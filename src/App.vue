<template>
  <div id="app">
    <Profile />
    <GoUp />
  </div>
</template>

<script>
import Profile from "@/views/Profile.vue";
import GoUp from "@/components/GoUp.vue";

export default {
  name: "App",
  components: { Profile, GoUp }
};
</script>
