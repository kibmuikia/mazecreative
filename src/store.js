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
        info:
          "We combine your business goals with online marketing strategy that drives and breeds business growth. Digital marketing is by far the most measurable marketing medium in our world today, we’ll help you devise and implement a future-proof digital strategy that lets you thrive.",
        subservices: [
          {
            title: "SEO",
            description:
              "Search engine optimization will help your website perform well in search engines. SEO includes a whole range of techniques that are used to boost the ranking of the site."
          },
          {
            title: "Social Media",
            description:
              "Growing your followers on social media will help you increase word of mouth and referrals. Our social media marketing services will help you increase your followers with relevant people. We will ensure that your followers match the demographics, interests, and behaviors of your typical customers."
          },
          {
            title: "Content Marketing",
            description:
              "Our agency’s content marketing services will help you increase website traffic from your online marketing channels. We craft compelling, valuable content that gets to heart of your readers, that will earn trust with your audience."
          },
          {
            title: "Email Marketing",
            description:
              "Our email marketing services help you speed up your sales cycle. The goal of email marketing is to move your prospects from one stage of your sales funnel to the next."
          },
          {
            title: "PPC - Google Search Ads",
            description:
              "(Paid Per Click) Why not use the Google Search Network to place ads on the search engine results pages. When your audience searches for businesses like yours, your ads will appear to direct traffic to your website"
          }
        ]
      },
      {
        title: "Branding",
        info:
          "From your logo and color palette to your unique voice, we’ll make sure your brand is built to last. We create and evolve brands through great design."
      },
      {
        title: "Web Design",
        info:
          "Your website is the most important component of your marketing strategy, whether you're at work or not, your website is always working for your business."
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
    ],
    team: [
      {
        name: "David Owino",
        title: "C.E.O",
        function:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pic:
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fteam%2Ftakephoto%20(1).jpg?alt=media&token=f408ed54-d93c-4d77-9172-f1083db9dc83"
      },
      {
        name: "Junie Samoey",
        title: "General Manager",
        function:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pic:
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fteam%2Fjunie-tinyjpg.jpg?alt=media&token=99cfb210-0839-4997-95a8-c96698c653a7"
      },
      {
        name: "Kibuthi Allan",
        title: "Systems Developer",
        function:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pic:
          "https://firebasestorage.googleapis.com/v0/b/maze-media-creative.appspot.com/o/images%2Fteam%2Fman.svg?alt=media&token=dc53e0a2-f37f-44c6-9dd9-bf789fbb8cc2"
      }
    ],
    aboutsummary: [
      {
        title: "mission",
        description:
          "To consistently deliver great performance by providing superior services that help businesses unlock the potential of their brand in turn grow their sales."
      },
      {
        title: "vision",
        description:
          "We will be a leading creative design agency where creativity meets business growth under the fundamental concept of diversification which will enable us to achieve superior returns for our clients and employees."
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
    },
    team: state => {
      return state.team;
    },
    aboutsummary: state => {
      return state.aboutsummary;
    }
  }, //end-[ getters ]
  mutations: {},
  actions: {},
  plugins: [vuexPersist.plugin]
});
