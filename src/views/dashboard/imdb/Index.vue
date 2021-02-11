<template>
  <v-app>
    <v-container>
      <!--  -->
      <v-row>
        <v-col
          cols="12"
          md="4"
          lg="4"
        >
          <v-text-field
            v-model="s"
            append-icon="mdi-magnify"
            class="d-flex justify-center ml-4"
            label="Cari"
            placeholder="Cari Disini"
            color="secondary"
            hide-details
            @keyup="search"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div v-if="s === ''">
            <v-card>
              <v-card-text class="text-center ">
                Telusuri Film
              </v-card-text>
            </v-card>
          </div>
          <div v-else>
            <!--  -->
            <v-row>
              <v-col
                v-for="data in imdb.Search"
                :key="data.imdbID"
                cols="12"
                lg="4"
                class="d-flex mb-6"
              >
                <!--  -->
                <v-card
                  class="mx-auto my-12"
                  max-width="374"
                >
                  <!--  -->
                  <template slot="progress">
                    <v-progress-linear
                      color="red"
                      height="10"
                      indeterminate
                    />
                  </template>
                  <v-img
                    :src="data.Poster"
                    height="250"
                  />
                  <v-card-title>{{ data.Title }}</v-card-title>
                  <v-card-text>
                    <div class="my-4 subtitle-1">
                      {{ data.Year }}
                    </div>
                    <div>
                      Small plates, salads & sandwiches - an intimate setting
                      with 12 indoor seats plus patio seating.
                    </div>
                  </v-card-text>
                  <v-divider class="mx-4" />
                  <v-card-title>{{ data.Type }}</v-card-title>
                  <v-divider class="mx-4" />
                  <v-card-actions>
                    <v-row>
                      <v-col
                        cols="12"
                        md="5"
                      >
                        <!--  -->
                        <v-btn
                          color="deep-purple lighten-2"
                          class="d-flex flex-row-reverse "
                          text
                          @click="getDetail(data.imdbID)"
                        >
                          See Detail
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <div>
            <!--  -->
            <v-dialog
              v-model="dialog.open"
              width="1000"
              height="800"
              :retain-focus="false"
            >
              <!--  -->
              <base-see-imdb
                :products="detail"
                :dialog="dialog"
              />
            </v-dialog>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'IndexImdb',
    data () {
      return {
        imdb: [{}],
        detail: {},
        dialog: {
          open: false,
          id: 0,
          title: '',
          gambar: null,
          harga: null,
        },
        loading: false,
        selection: 1,
        s: this.$route.query.s || '',
      }
    },
    watch: {
      s (newVal) {
        this.$router.push({ query: { ...this.$route.query, s: newVal } })
      },
      '$route.query.s': function (val) {
        this.s = val
      },
    },
    mounted () {
      this.getImdb()
    },
    methods: {
      setDetail (data) {
        this.detail = data
      },
      getDetail (id) {
        axios
          .get('http://www.omdbapi.com/?apikey=379591eb&i=' + id)
          .then(response => {
            this.setDetail(response.data)
            this.dialog.open = true
          })
      },
      search () {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        this.timer = setTimeout(() => {
          this.getImdb()
        }, 1000)
      },
      setImdb (data) {
        this.imdb = data
        console.log(this.imdb)
      },
      getImdb () {
        axios
          .get('http://www.omdbapi.com/?apikey=379591eb&s=' + this.s)
          .then(response => {
            if (response.data.Search) {
              this.setImdb(response.data)
            } else if (this.s !== '' && response.data.Response) {
              this.$toast.error('Movie not found!', {
                type: 'error',
                position: 'top-right',
                duration: 3000,
                dismissible: true,
              })
            }
          })
      },
    },
  }
</script>

<style></style>
