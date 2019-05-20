import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "maze-media-creative-app",
  storage: window.sessionStorage
  // reducer: state => ({ post: state.post, user: state.user })
});

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
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fproducts%2Fg-g-logo-compressor.jpg?alt=media&token=1bd4c25f-499b-4298-9524-873d489aea79",
        description: "Revamping communications"
      },
      {
        title: "Mabinti Solutions Limited",
        url:
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fproducts%2Fmabinti-solutions-logo-compressor.jpg?alt=media&token=6baae4f6-fe04-43ea-a577-706b3c2f05e7",
        description: "Where simplicity results in greatness"
      },
      {
        title: "Sahara Adventures",
        url:
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fproducts%2Fsahara-adventures-logo-compressor.jpg?alt=media&token=b259c85a-2675-4a2d-8f30-361b928b6bc2",
        description: "Take a trip to greatness"
      }
    ],
    lazyimage:
      "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Findex.circle-slack-loading-icon.svg?alt=media&token=4dd7195a-bb89-44e0-b243-46a06fc69245"
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
  actions: {},
  plugins: [vuexPersist.plugin]
});
