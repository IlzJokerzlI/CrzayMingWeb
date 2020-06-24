<template>
  <div>
    <!-- Nav Bar Section -->
    <nav>
      <v-app-bar app flat color="custom_green">
        <v-toolbar-title>
          <v-avatar tile class="mr-5">
            <img src="../assets/logo.png" />
          </v-avatar>
          <span class="font-weight-light">Crazy</span>
          <span class="font-weight-bold">Ming</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn
            text
            :ripple="false"
            tile
            color="custom_brown"
            @click="$vuetify.goTo('#home', options)"
          >
            <span>Home</span>
          </v-btn>
          <v-btn
            text
            :ripple="false"
            tile
            color="custom_brown"
            @click="$vuetify.goTo('#portfolio', options)"
          >
            <span>Work</span>
          </v-btn>
          <v-btn
            text
            :ripple="false"
            tile
            color="custom_brown"
            @click="$vuetify.goTo('#about', options)"
          >
            <span>About</span>
          </v-btn>
          <v-btn
            text
            :ripple="false"
            tile
            color="custom_brown"
            @click="$vuetify.goTo('#contact', options)"
          >
            <span>Contact</span>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </nav>

    <!-- Introduction Section -->
    <div class="introduction" id="home">
      <h1 class="display-4 custom_brown--text font-weight-black">Welcome</h1>
    </div>

    <!-- Portfolio 1 Section -->
    <div class="custom_white px-4 py-12" id="portfolio">
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
            <p class="ma-0 py-8 text-right headline custom_brown--text">
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
              :ripple="false"
              color="custom_red"
              class="custom_white--text mt-12 pa-7 headline"
              href="https://github.com/IlzJokerzlI"
              target="_blank"
            >
              Let's Go
            </v-btn>
          </v-card>
        </v-row>
      </v-container>
    </div>

    <!-- Portfolio 2 Section -->
    <v-card class="custom_grey" tile flat>
      <v-content fluid class="ma-0 pa-4">
        <v-row justify="center" align-content="center" align="center">
          <v-col cols="8" class="ma-0 pa-0">
            <v-tabs
              v-model="tab"
              dark
              background-color="transparent"
              show-arrows="true"
              centered
              grow
            >
              <v-tabs-slider color="custom_white"></v-tabs-slider>
              <v-tab v-for="work in works" :key="work.title">
                {{ work.title }}
              </v-tab>
            </v-tabs>

            <v-tabs-items
              v-model="tab"
              class="transparent custom_white--text pa-12"
            >
              <v-tab-item v-for="work in works" :key="work.title">
                <div class="d-flex justify-center">
                  <div style="text-align: center; width:60%; min-width: 300px">
                    <div>
                      <v-avatar size="120px" color="custom_beige">
                        <img
                          :src="work.source"
                          :alt="work.alt"
                          style="height: 90%; width: 90%"
                        />
                      </v-avatar>

                      <h1 class="font-weight-light display-3">
                        {{ work.title }}
                      </h1>

                      <v-rating
                        class="pa-0 ma-0"
                        :value="work.rating"
                        background-color="grey"
                        color="yellow"
                        readonly
                        dense
                        small
                      >
                      </v-rating>
                    </div>

                    <div>
                      <h3 class="font-weight-medium headline pt-5">
                        Project Count
                      </h3>
                      <h1 class="font-weight-black">
                        {{ work.numOfProjects }}
                      </h1>
                    </div>

                    <div class="pt-12">
                      <h1 class="font-weight-light">Latest Work</h1>

                      <v-divider class="custom_orange lighten-1"></v-divider>

                      <h2 class="pt-8">{{ work.lastWorkTitle }}</h2>
                      <v-chip
                        v-if="work.lastWorkStatus"
                        class="lighten-1 mt-1"
                        :color="changeStatusColor(work.lastWorkStatus)"
                      >
                        {{ work.lastWorkStatus }}
                      </v-chip>

                      <p class="pt-8 title font-weight-light">
                        "{{ work.lastWorkDesc }}"
                      </p>
                      <v-btn
                        color="custom_red custom_white--text"
                        :href="work.link"
                        :ripple="false"
                        target="_blank"
                      >
                        Visit
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-content>
    </v-card>

    <!-- About Section -->
    <v-container class="focuses custom_beige pa-0" fluid id="about">
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
                  class="d-flex  custom_orange v-card--reveal white--text headline text-center pa-4"
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
        <h1 class="font-weight-light display-1 pt-12">ABOUT ME</h1>

        <d-row>
          <div class="py-10">
            <v-avatar x-large size="250px">
              <img src="../assets/my_photo.png" alt="my_photo" />
            </v-avatar>
          </div>
          <div style="width:300px">
            <p class="title font-weight-light">
              <bold>"</bold>Hi! I am Arvin, <br />
              a programmer currently studying in Bina Nusantara University<bold
                >"</bold
              >
            </p>
          </div>
        </d-row>

        <!-- Other Interests Section -->
        <div class="py-5">
          <h1 class="headline font-weight-light">
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
    <div class="custom_green d-flex justify-center px-8 py-12" id="contact">
      <div>
        <h1 class="font-weight-light display-1 text-center">CONTACT</h1>

        <div class="mt-4 mb-10" style="text-align:center">
          <v-btn
            v-for="contact in contacts"
            :key="contact.title"
            class="mx-4"
            :href="contact.link"
            target="_blank"
            color="transparent"
            fab
            elevation="2"
          >
            <v-avatar height="40px" tile color="transparent">
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

export default {
  data: () => ({
    scroll_duration: 1000,
    scroll_offset: 0,
    tab: null,

    works: [
      {
        title: "Java",
        source: require("@/assets/java_logo.svg"),
        alt: "java_logo",
        rating: "2",
        numOfProjects: 2,
        lastWorkTitle: "Jialat Zipper",
        lastWorkDesc: "A simple zipper application",
        lastWorkStatus: "completed",
        link: "https://github.com/IlzJokerzlI/JavaFinalProject"
      },

      {
        title: "C++",
        source: require("@/assets/cpp_logo.svg"),
        alt: "cpp_logo",
        rating: "3",
        numOfProjects: 1,
        lastWorkTitle: "Compagnie Search",
        lastWorkDesc: "A data finder",
        lastWorkStatus: "completed",
        link: "https://github.com/IlzJokerzlI/CompagnieSearch"
      },

      {
        title: "Python",
        source: require("@/assets/python_logo.svg"),
        alt: "python_logo",
        rating: "3",
        numOfProjects: 1,
        lastWorkTitle: "Regression Visualization",
        lastWorkDesc:
          "An application used to visualize regression lines from a given data",
        lastWorkStatus: "completed",
        link:
          "https://github.com/IlzJokerzlI/RegressionFinalProject/tree/master/CompMathFinalProject"
      },

      {
        title: "Vue",
        source: require("@/assets/vue_logo.svg"),
        alt: "vue_logo",
        rating: "2",
        numOfProjects: 1,
        lastWorkTitle: "Crazy Ming Website",
        lastWorkDesc: "A portfolio website",
        lastWorkStatus: "ongoing",
        link: "https://github.com/IlzJokerzlI/CrzayMingWeb"
      },

      {
        title: "Flutter",
        source: require("@/assets/flutter_logo.svg"),
        alt: "flutter_logo",
        rating: "4",
        numOfProjects: 0,
        lastWorkTitle: "Empty",
        lastWorkDesc: "",
        lastWorkStatus: "",
        link: ""
      }
    ],

    focuses: [
      {
        title: "Focuses",
        icon: "",
        content: "",
        font_size: "display-2",
        font_color: "custom_white",
        background_color: "custom_brown"
      },
      {
        title: "User Friendly",
        icon: "accessibility_new",
        content:
          "A simple and easy to use program for users according to their needs",
        font_size: "display-1",
        font_color: "custom_brown",
        background_color: "custom_white"
      },

      {
        title: "Performance",
        icon: "speed",
        content: "Fast execution to prevent users from getting bored",
        font_size: "display-1",
        font_color: "custom_brown",
        background_color: "custom_white"
      },
      {
        title: "Efficiency",
        icon: "settings",
        content:
          "Minimize works to only what needs to be done, preventing over-work",
        font_size: "display-1",
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
  }),

  methods: {
    changeStatusColor: function(status) {
      if (status == "completed") {
        return "custom_green";
      } else if (status == "ongoing") {
        return "custom_orange";
      } else {
        return "transparent";
      }
    }
  },

  computed: {
    options() {
      return {
        duration: this.scroll_duration,
        offset: this.scroll_offset
      };
    }
  }
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

.font--title2 {
  font-size: 40px;
}

.font--title1 {
  font-size: 30px;
}

.font--paragraph {
  font-size: 18px;
}

.font--header {
  font-size: 20px;
}
</style>
