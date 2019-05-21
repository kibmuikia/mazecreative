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
      "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Findex.circle-slack-loading-icon.svg?alt=media&token=4dd7195a-bb89-44e0-b243-46a06fc69245",
    logo192_p:
      "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Flogo%2Fmaze-logo-kib-192.png?alt=media&token=43d9e50b-d9b6-4ad2-af01-990dd92577f1",
    logo192:
      "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Flogo%2Fmaze-logo-192.png?alt=media&token=030d1abb-94bd-4434-9c57-c9dce0e895a0",
    socialmedia: [
      {
        site: "twitter",
        iconurl:
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fsocial-icons%2Ftwitter.svg?alt=media&token=fe3a8772-8e9b-4b0f-9986-8931aeaf1c4b",
        link: ""
      },
      {
        site: "facebook",
        iconurl:
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fsocial-icons%2Ffacebook.svg?alt=media&token=7e502419-b922-4330-90c2-486912f247f9",
        link: ""
      },
      {
        site: "instagram",
        iconurl:
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fsocial-icons%2Finstagram.svg?alt=media&token=41aa6bc8-4a0f-4fa7-9cef-6b0141d34880",
        link: ""
      }
    ]
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
    },
    logo192_p: state => {
      return state.logo192_p;
    },
    logo192: state => {
      return state.logo192;
    },
    socialmedia: state => {
      return state.socialmedia;
    }
  }, //end-[ getters ]
  mutations: {},
  actions: {},
  plugins: [vuexPersist.plugin]
});
