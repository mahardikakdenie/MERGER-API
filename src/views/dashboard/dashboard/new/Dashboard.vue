<template>
  <v-app>
    <v-toolbar class="white">
      <v-toolbar-items>
        <img
          :src="imageLink.logo"
          alt="Vuetify.js"
          height="100%"
        >
      </v-toolbar-items>

      <v-spacer />
      <v-toolbar-items>
        <v-btn
          flat
          href="#helo"
        >
          Open jobs
        </v-btn>
        <!--<v-btn flat>Blog</v-btn>-->
        <v-btn
          flat
          class="pink lighten-3"
          to="/login"
        >
          Sign In
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax
          :src="imageLink.first"
          height="500"
          background-opacity="10"
        >
          <v-row class="mt-12">
            <v-row
              align="center"
              justify="center"
              class="white--text"
            >
              <v-row
                align="center"
                justify="center"
                class="white--text"
              >
                <v-card
                  elevation="0"
                  color="transparent"
                >
                  <v-card-title class="d-flex justify-center">
                    <h1
                      class=" b-3 text-center"
                      color="black"
                    >
                      Your story starts with us.
                    </h1>
                  </v-card-title>
                </v-card>
              </v-row>
            </v-row>
          </v-row>
          <v-row class="d-flex justify-center mb-12">
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/dashboard"
            >
              Get Started
            </v-btn>
          </v-row>
        </v-parallax>
      </section>

      <section style="background-color: #e2e8f0 ">
        <v-parallax>
          <v-content>
            <v-container>
              <v-row
                class="my-5"
                justify="center"
              >
                <v-row class="d-flex justify-center mt-12">
                  <v-col
                    class="justify-center"
                    cols="12"
                    sm="4"
                  >
                    <v-card
                      class="d-flex align-content-center justify-center"
                      color="transparent"
                    >
                      <v-card-text>
                        <div class="text-center">
                          <h2
                            id="helo"
                            class="headline black--text"
                          >
                            Portofolio
                          </h2>
                          <span class="subheading black--text">
                            curriculum vitae
                          </span>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="4"
                        >
                          <v-card
                            class="transparent"
                            color="#BDBDB4 "
                          >
                            <v-card-text class="text-center">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2"
                              >
                                public
                              </v-icon>
                            </v-card-text>
                            <v-card-text
                              primary-title
                              class="layout justify-center"
                            >
                              Reach the world
                            </v-card-text>
                            <v-card-text>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Beatae, magni.
                            </v-card-text>
                          </v-card>
                        </v-col>
                        <v-col
                          cols="12"
                          md="4"
                        >
                          <v-card color="transparent">
                            <v-card-text class="text-center">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2"
                              >
                                flash_on
                              </v-icon>
                            </v-card-text>
                            <v-card-text
                              primary-title
                              class="layout justify-center"
                            >
                              Reach the world
                            </v-card-text>
                            <v-card-text>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Modi iste a eveniet ducimus est,
                              impedit quae laboriosam deleniti quasi
                              praesentium!
                            </v-card-text>
                          </v-card>
                        </v-col>
                        <v-col
                          cols="12"
                          md="4"
                        >
                          <v-card class="transparent">
                            <v-card-text class="text-center">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2"
                              >
                                share
                              </v-icon>
                            </v-card-text>
                            <v-card-text
                              primary-title
                              class="layout justify-center"
                            >
                              Reach the world
                            </v-card-text>
                            <v-card-text>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Fugiat maiores aspernatur atque
                              est a corrupti cum ex quo. Commodi non quia, eaque
                              ex expedita repudiandae nihil provident porro
                              aliquam? Eos!
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </v-row>
            </v-container>
          </v-content>
        </v-parallax>
      </section>

      <section>
        <v-parallax
          :src="imageLink.main"
          height="380"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col>
              <div class="headline white--text mb-3 text-center">
                Endorfine is a social network that allows everyone to reach a
                huge audience with a tap
              </div>
              <em>With the power of Endorfine you don't need to be famous or post
                pics of cute cats in order to get visibility</em>
            </v-col>
            <v-col>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get more info
              </v-btn>
            </v-col>
          </v-row>
        </v-parallax>
      </section>

      <section>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="mt-5 text-center"
            >
              <div class="headline">
                Are you amazed? Stay tuned!
              </div>
              <br>
              <div>
                We are lunching the beta in a few time. If you want to be one of
                the first Endorfine users we will email you as soon as we're
                ready. In the beginning only few people will test before the
                launch. Let us know how Endorfine will help you!
              </div>
            </v-col>
            <v-col
              cols="8"
              offset="2"
            >
              <v-card class="elevation-0 transparent">
                <v-card-text>
                  <v-col
                    v-if="!subscribed"
                    cols="12"
                  >
                    <v-text-field
                      v-model="email"
                      box
                      label="Email address"
                      :rules="emailRules"
                      hint="Enter your email!"
                      persistent-hint
                    />
                  </v-col>
                  <v-col
                    v-if="!subscribed"
                    cols="12"
                  >
                    <v-text-field
                      box
                      multi-line
                      label="Bio and curiosities"
                    />
                  </v-col>
                  <v-col
                    v-if="!subscribed"
                    cols="12"
                    class="text-center"
                  >
                    <v-btn
                      class="blue lighten-2 mb-5"
                      dark
                      large
                      @click="subscribe"
                    >
                      Get in touch
                    </v-btn>
                  </v-col>
                  <v-col
                    v-if="subscribed"
                    cols="12"
                    class="text-center"
                  >
                    <v-btn
                      class="green lighten-2 mb-5"
                      dark
                      large
                    >
                      Welcome on board!
                    </v-btn>
                  </v-col>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section>
        <v-parallax
          :src="imageLink.social_cover"
          height="380"
        >
          <v-row
            align="center"
            justify="center"
          >
            <div class="headline white--text mb-3 text-center">
              We are dropping cool news and opportunities on socials
            </div>
          </v-row>
          <v-row
            justify="space-around"
            align="center"
          >
            <v-icon
              x-large
              dark
            >
              fab fa-facebook-f
            </v-icon>

            <v-icon
              x-large
              dark
            >
              fab fa-twitter
            </v-icon>

            <v-icon
              x-large
              dark
            >
              fab fa-reddit-alien
            </v-icon>

            <v-icon
              x-large
              dark
            >
              fab fa-instagram
            </v-icon>

            <v-icon
              x-large
              dark
            >
              fab fa-discord
            </v-icon>
          </v-row>
        </v-parallax>
      </section>

      <section>
        <v-container>
          <v-row
            justify="center"
            class="my-5"
          >
            <v-col
              cols="12"
              sm="4"
            >
              <v-card class="elevation-0 transparent">
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline">
                    Company info
                  </div>
                </v-card-title>
                <v-card-text>
                  We are not a company. We hate companies. Just imagine us like
                  the guys from the Silicon Valley series.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              offset-sm="1"
            >
              <v-card class="elevation-0 transparent">
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline">
                    We are hiring
                  </div>
                </v-card-title>
                <v-card-text>
                  Are you a creative person? Do you like techy stuff? Complete
                  the email form by writing your skills and interests
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="text-center"
            >
              <img
                height="200px"
                :src="imageLink.logo"
              >
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-row align="center">
          <v-col
            cols="12"
            class="text-center"
          >
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">
                favorite
              </v-icon>
              using
              <a
                class="white--text"
                href="https://vuetifyjs.com"
                target="_blank"
              >Vuetify</a>
            </div>
          </v-col>
        </v-row>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        title: 'Endorfine',
        imageLink: {
          main:
            'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea',
          sub_main:
            'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5',
          logo:
            'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df',
          social_cover:
            'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4',
          first:
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
          pict:
            'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          img:
            'https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg',
        },
        email: '',
        emailRules: [
          v => {
            return !!v || 'E-mail is required'
          },
          v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            'E-mail must be valid',
        ],
        subscribed: false,
      }
    },

    computed: {
      imgHeight: function () {
        var offset = 320
        console.log('new image height is ' + (this.pageHeight - offset))
        return this.pageHeight - offset
      },
    },

    mounted: function () {
      this.$vuetify.theme.dark = true
    },
    methods: {
      subscribe: function () {
        this.subscribed = !this.subscribed
      },
    },
  }
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #cc0909;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
