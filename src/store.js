import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    services: [
      {
        title: "Digital Marketing",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        title: "Branding",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        title: "Web Design",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      }
    ],
    samples: [
      {
        title: "G & G Communications and Consultancy",
        url:
          "https://firebasestorage.googleapis.com/v0/b/maze-creative.appspot.com/o/products%2Fg-g-logo.jpg?alt=media&token=6cffd2a6-2837-473a-890b-71de32fc1ec0",
        description: "Revamping communications"
      },
      {
        title: "Mabinti Solutions Limited",
        url:
          "https://firebasestorage.googleapis.com/v0/b/maze-creative.appspot.com/o/products%2Fmabinti-solutions-logo.jpg?alt=media&token=e88a11b6-5a40-4fb1-b8e2-210ad81e53d2",
        description: "Where simplicity results in greatness"
      },
      {
        title: "Sahara Adventures",
        url:
          "https://firebasestorage.googleapis.com/v0/b/maze-creative.appspot.com/o/products%2Fsahara-adventures-logo.jpg?alt=media&token=ca79289a-7c63-49bd-8596-8892f330f3b7",
        description: "Take a trip to greatness"
      }
    ],
    lazyimage:
      "https://firebasestorage.googleapis.com/v0/b/maze-creative.appspot.com/o/index.circle-slack-loading-icon.svg?alt=media&token=ad9009d3-a358-4cdb-b061-0581a86b0ff9"
  },
  getters: {
    services: state => {
      return state.services;
    },
    samples: state => {
      return state.samples;
    },
    lazyimage: state => {
      return state.lazyimage;
    }
  }, //end-[ getters ]
  mutations: {},
  actions: {}
});
