<template>
  <main id="profile" class="container-fluid">
    <div class="row">
      <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3 p-md-0">
        <b-card tag="div" class="intro">
          <b-card-header header-class="cover-photo">
            <h5 class="text-white">{{ craftDesc }}</h5>
          </b-card-header>

          <img
            class="profile-picture"
            src="../assets/profile.jpg"
            alt="picture of me"
          />

          <b-card-text>
            <h3>{{ name }}</h3>

            <p class="my-craft">{{ craft }}</p>

            <p class="email">
              <small>JrD1sso@gmail.com</small>
            </p>

            <ul class="tags">
              <li v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
          </b-card-text>
        </b-card>

        <b-card class="about-me">
          <h5>About Me</h5>

          <div class="bio">
            <p v-for="(line, i) in bio" :key="i">{{ line }}</p>
          </div>

          <ul class="links">
            <li v-for="website in websites" :key="website.name">
              <a
                class="link"
                :href="website.url"
                target="_blank"
                rel="noopener"
              >
                <span>{{ website.name }}</span>
              </a>
            </li>
          </ul>
        </b-card>

        <hr class="bg-light" />

        <h5 class="worksTitle text-center">Some of my works</h5>
        <div id="posts-container" v-if="myPosts.length">
          <PostProfile v-for="post in myPosts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostProfile from "@/components/PostProfile.vue";
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      name: "Mohamed Idriss",
      craft: "Front-end developer",
      craftDesc: "<I make clean websites />",
      bio: [
        "Hi there!! 👋🏾",
        "I'm a Nubian guy who lives in Alexandria and graduated from its faculty of Science, CS department.",
        "I've worked before as a call center representative and in sales (at: We GSM, ElMaqam Restaurant, Shick, Solo for Men Clothes, MG for Bags & Shoes), and some freelance work in design.",
        "And I've participated in many student activities that helped me improve my public speaking, team working, media, and soft skills in general (such as: Resala, Daleel Science, Inception Project, Hashtag English Project, CAC, Hult Prize, ...).",
        "My most liked website design is the modern, clean ones; it feels so relaxing for the eyes, safe, and without exaggerating it feels home!"
      ],
      skills: [
        "Html5",
        "Css3",
        "Js",
        "Vue2",
        "Vue3",
        "Sass",
        "Git",
        "Jquery",
        "Bootstrap",
        "Tailwind",
        "Adobe premiere",
        "Photoshop essentials",
        "a bit of After effects & Illustrator",
        "B2 in English"
      ],
      websites: [
        { url: "https://github.com/jrd1sso", name: "Github" },
        { url: "https://www.instagram.com/jrd1sso", name: "Instagram" },
        { url: "https://www.facebook.com/jrD1sso", name: "Facebook" },
        {
          url: "https://www.facebook.com/DissoMakes",
          name: "Videos"
        }
      ],

      myPosts: []
    };
  },
  components: {
    PostProfile
  },
  created() {
    axios
      .get("./db/myPosts.json")
      .then(response => (this.myPosts = response.data.slice().reverse()));
  }
};
</script>
