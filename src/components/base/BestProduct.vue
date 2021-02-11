<template>
  <div>
    <!--  -->
    <v-card
      class="mx-auto"
      max-width="1400"
    >
      <!--  -->
      <v-container>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title
              class="headline"
              color="red"
            >
              {{ tulisan }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <base-material-card
          title="Menu Terbaik "
          icon="mdi-food-apple"
          color="red"
          class="mt-12"
        />
        <v-row>
          <v-col
            v-for="data in bestProduct"
            :key="data.id"
            cols="12"
            lg="4"
            class="d-flex mb-6"
          >
            <!--  -->
            <v-card
              :loading="loading"
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
                v-if="data.gambar"
                :src="require(`@/assets/image/images/${data.gambar}`)"
                height="250"
              />
              <v-card-title>{{ data.nama }}</v-card-title>
              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  />

                  <div class="grey--text ml-4">
                    {{ data.rating }}
                  </div>
                </v-row>

                <div class="my-4 subtitle-1">
                  {{ data.cafe }}
                </div>

                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
              <v-divider class="mx-4" />
              <v-card-title>Harga : Rp{{ data.harga }}</v-card-title>
              <v-divider class="mx-4" />
              <v-card-title>Tutup Sampai : </v-card-title>
              <v-card-text>
                <v-chip-group
                  v-model="data.selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                  multiple
                >
                  <v-chip filter>
                    5:30PM
                  </v-chip>

                  <v-chip filter>
                    7:30PM
                  </v-chip>

                  <v-chip filter>
                    8:00PM
                  </v-chip>

                  <v-chip filter>
                    9:00PM
                  </v-chip>
                </v-chip-group>
              </v-card-text>
              <v-card-actions>
                <v-row>
                  <v-col
                    cols="12"
                    md="7"
                  >
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      :to="'/food/' + data.id"
                    >
                      Pesan
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    md="5"
                  >
                    <v-btn
                      class="d-flex flex-row-reverse "
                      color="deep-purple lighten-2"
                      text
                      to="/menu/testing"
                    >
                      Lihat Semua
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'BestProduct',
    props: {
      tulisan: {
        type: String,
        default: '',
      },
      harga: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: undefined,
      },
      image: {
        type: Boolean,
        default: false,
      },
      text: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        bestProduct: {
          id: 1,
          kode: 'K-01',
          nama: 'Sate Ayam',
          harga: 16000,
          rating: '4.3',
          is_ready: true,
          gambar: 'sate-ayam.jpg',
        },
        loading: true,
        selection: 1,
      }
    },

    computed: {
      classes () {
        return {
          'v-card--material--has-heading': this.hasHeading,
        }
      },
      hasHeading () {
        return Boolean(this.$slots.heading || this.title || this.icon)
      },
      hasAltHeading () {
        return Boolean(this.$slots.heading || (this.title && this.icon))
      },
    },
    mounted () {
      this.getBestProduct()
    },
    methods: {
      setBestProduct (data) {
        this.bestProduct = data
      },
      getBestProduct () {
        axios.get('http://localhost:3000/best-products').then(response => {
          this.setBestProduct(response.data)
        })
      },
    },
  }
</script>

<style lang="sass">
.v-card--material
  &__avatar
    position: relative
    top: -64px
    margin-bottom: -32px

  &__heading
    position: relative
    top: -40px
    transition: .3s ease
    z-index: 1
</style>
