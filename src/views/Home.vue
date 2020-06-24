<template>
  <div>
    <div class="introduction">
      <h1 class="display-4 custom_brown--text font-weight-black">Welcome</h1>
    </div>

    <div class="custom_white px-4 py-12">
      <v-container>
        <v-row align="center" justify="space-around" class="my-12 mx-md-12">
          <v-card flat class="transparent ml-md-12 my-12" width="440">
            <h1
              class="a col-11 pa-0 ma-0 font-weight-light custom_brown--text"
              style="font-size:700%"
            >
              What's
            </h1>
            <h1
              class="text-right font-weight-bold col-11 pa-0 ma-0 custom_brown--text"
              style="font-size:500%"
            >
              Up?
            </h1>
            <p class="ma-0 pt-8 text-right headline custom_brown--text">
              Visit my github to see all my projects
            </p>
          </v-card>

          <v-card flat class="transparent mx-md-12 my-12">
            <v-img
              src="../assets/github_logo.svg"
              max-height="200"
              max-width="200"
              alt="github_icon"
            ></v-img>
            <v-btn
              block
              tile
              elevation="0"
              ripple="false"
              color="custom_red"
              class="custom_white--text mt-12 pa-7 headline"
              href="https://github.com/"
              target="_blank"
            >
              Let's Go
            </v-btn>
          </v-card>
        </v-row>
      </v-container>
    </div>

    <div class="portfolio_work custom_grey"></div>
    <v-container class="focuses custom_beige pa-0" fluid>
      <div class="d-flex justify-center py-8">
        <div
          class="d-flex align-center justify-center flex-wrap pa-0 ma-0"
          style="width: 50vw; min-width: 330px"
        >
          <v-hover
            v-slot:default="{ hover }"
            v-for="focus in focuses"
            :key="focus.title"
          >
            <v-card width="300" height="300" class="ma-4" flat tile>
              <div
                :class="[
                  'd-flex',
                  'align-center',
                  'justify-center',
                  focus.background_color,
                  focus.font_color + '--text'
                ]"
                style="height: 100%; width: 100%"
              >
                <div style="text-align:center">
                  <v-icon
                    size="120"
                    class="pa-1"
                    :color="focus.font_color"
                    v-if="focus.title != 'Focuses'"
                  >
                    {{ focus.icon }}
                  </v-icon>
                  <h1 :class="['pa-2', focus.font_size]">
                    {{ focus.title }}
                  </h1>
                </div>
              </div>

              <v-fade-transition>
                <div
                  v-if="hover && focus.title != 'Focuses'"
                  class="d-flex  custom_orange v-card--reveal white--text display-1 pa-4"
                >
                  <p :class="[focus.background_color + '--text']">
                    {{ focus.content }}
                  </p>
                </div>
              </v-fade-transition>
            </v-card>
          </v-hover>
        </div>
      </div>
    </v-container>

    <!-- ABOUT ME Section -->
    <div class="custom_white d-flex justify-center pa-6">
      <div style="text-align:center">
        <h1 class="font-weight-light display-2 pt-12">ABOUT ME</h1>

        <div class="py-10 d-flex align-center justify-center">
          <v-avatar x-large size="250px" class="mr-4">
            <img src="../assets/my_photo.png" alt="my_photo" />
          </v-avatar>

          <div style="width:300px" class="ml-4">
            <p class="title font-weight-light">
              <bold>"</bold>Hi! I am Arvin, <br />
              a programmer currently studying in Bina Nusantara University<bold
                >"</bold
              >
            </p>
          </div>
        </div>

        <!-- Other Interests Section -->
        <div>
          <h1 class="display-1 font-weight-light">
            Other Interests
          </h1>

          <v-divider></v-divider>

          <div class="py-4">
            <v-avatar
              x-large
              tile
              v-for="interest in interests"
              :key="interest.title"
              class="mx-3"
            >
              <img
                :src="interest.src"
                :alt="interest.alt"
                :style="{ width: interest.size, height: interest.size }"
              />
            </v-avatar>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTACT Section -->
    <div class="custom_green d-flex justify-center px-8 py-12">
      <div>
        <h1 class="font-weight-light display-2">CONTACT</h1>

        <div class="mt-4 mb-10" style="text-align:center">
          <v-btn
            v-for="contact in contacts"
            :key="contact.title"
            class="mx-4"
            :href="contact.link"
            target="_blank"
            color="transparent"
            large
            fab
            elevation="2"
          >
            <v-avatar height="45px" tile color="transparent">
              <img :src="contact.src" :alt="contact.alt" />
            </v-avatar>
          </v-btn>
        </div>
        <v-divider></v-divider>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import assets from "../assets/gimp_logo.svg";

export default {
  data: () => ({
    focuses: [
      {
        title: "Focuses",
        icon: "",
        content: "",
        font_size: "display-3",
        font_color: "custom_white",
        background_color: "custom_brown"
      },
      {
        title: "User Friendly",
        icon: "accessibility_new",
        content:
          "A simple and easy to use program for users according to their needs",
        font_size: "",
        font_color: "custom_brown",
        background_color: "custom_white"
      },

      {
        title: "Performance",
        icon: "speed",
        content: "Fast execution to prevent users from getting bored",
        font_size: "",
        font_color: "custom_brown",
        background_color: "custom_white"
      },
      {
        title: "Efficiency",
        icon: "settings",
        content:
          "Minimize works to only what needs to be done, preventing over-work",
        font_size: "",
        font_color: "custom_brown",
        background_color: "custom_white"
      }
    ],

    interests: [
      {
        title: "music",
        src: require("@/assets/music_logo.svg"),
        alt: "music_logo",
        size: "33px"
      },
      {
        title: "language",
        src: require("@/assets/language_logo.svg"),
        alt: "language_logo",
        size: "35px"
      },
      {
        title: "inkscape",
        src: require("@/assets/inkscape_logo.svg"),
        alt: "inkscape_logo",
        size: "40px"
      },
      {
        title: "gimp",
        src: require("@/assets/gimp_logo.svg"),
        alt: "gimp_logo",
        size: "45px"
      }
    ],

    contacts: [
      {
        title: "gmail",
        src: require("@/assets/gmail_logo.svg"),
        alt: "gmail_logo",
        link:
          "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLPlzCchDfrvcgBZzWsJlQRJHcmvslMHbbgpJdrPNWjZtrqnGnbmBwRdTXWWrdgZsqtCph"
      },

      {
        title: "instagram",
        src: require("@/assets/instagram_logo.svg"),
        alt: "instagram_logo",
        link: "https://www.instagram.com/xiao_ming857/"
      }
    ]
  })
};
</script>

<style lang="scss">
.introduction {
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
  background: linear-gradient(#c5d86d, rgba(240, 244, 195, 0.7)),
    url(../assets/macbook_background.jpg);
  background-size: cover;
}

.portfolio_work {
  height: 50vh;
}

.v-card--reveal {
  height: 100%;
  width: 100%;
  bottom: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
}
</style>
