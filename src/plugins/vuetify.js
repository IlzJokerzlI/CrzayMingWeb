import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },

  theme: {
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        custom_brown: "#3D1308",
        custom_green: "#C5D86D",
        custom_red: "#F05D23",
        custom_orange: "#ff8c00",
        custom_grey: "#6E7E85",
        custom_white: "#F7F7F2",
        custom_beige: "#E4E6C3",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
