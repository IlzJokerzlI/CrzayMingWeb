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
    <v-container class="focuses custom_beige" fluid>
      <v-row justify="center" class="pa-6">
        <v-flex xs12 sm10 md9 lg6 xl6>
          <v-row justify="center">
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
                    focus.title == 'Focuses' ? 'custom_brown' : 'custom_white',
                    focus.title == 'Focuses'
                      ? 'custom_white--text'
                      : 'custom_brown--text'
                  ]"
                  style="height: 100%; width: 100%"
                >
                  <div style="text-align:center">
                    <v-icon
                      size="120"
                      class="pa-1"
                      color="custom_brown"
                      v-if="focus.title != 'Focuses'"
                    >
                      {{ focus.icon }}
                    </v-icon>
                    <h1 class="pa-2">
                      {{ focus.title }}
                    </h1>
                  </div>
                </div>

                <v-fade-transition>
                  <div
                    v-if="hover && focus.title != 'Focuses'"
                    class="d-flex  custom_orange v-card--reveal white--text display-1 pa-4"
                  >
                    <p>
                      {{ focus.content }}
                    </p>
                  </div>
                </v-fade-transition>
              </v-card>
            </v-hover>
          </v-row>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
    focuses: [
      {
        title: "Focuses",
        icon: "",
        content: ""
      },
      {
        title: "User Friendly",
        icon: "accessibility_new",
        content:
          "A simple and easy to use program for users according to their needs"
      },

      {
        title: "Performance",
        icon: "speed",
        content: "Fast execution to prevent users from getting bored"
      },
      {
        title: "Efficiency",
        icon: "settings",
        content:
          "Minimize works to only what needs to be done, preventing over-work"
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
    url(../assets/macbook-pro-92904.jpg);
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
