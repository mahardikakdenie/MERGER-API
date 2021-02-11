<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          class="d-flex align-center"
          md="6"
        >
          <v-text-field
            v-model="q"
            append-icon="mdi-magnify"
            label="Cari"
            placeholder="Cari Disini"
            hide-details
            color="primary"
            @keyup="search"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="data in products"
          :key="data.id"
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
            <v-img
              v-if="data.gambar"
              :src="require(`@/assets/image/images/${data.gambar}`)"
              height="250"
            />
            <v-card-title>{{ data.nama }}</v-card-title>
            <v-spacer />
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
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
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
                  <!--  -->
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
                  <!--  -->
                  <v-btn
                    color="deep-purple lighten-2"
                    class="d-flex flex-row-reverse "
                    text
                    @click="getDetail(data.id)"
                  >
                    See Detail
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div>
        <!--  -->
        <v-dialog
          v-model="dialog.open"
          width="1000"
          :retain-focus="false"
        >
          <!--  -->
          <base-see-modal
            :products="detail"
            :dialog="dialog"
          />
        </v-dialog>
      </div>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Products',
    data () {
      return {
        user: {},
        products: {
          id: 1,
        },
        detail: {},
        selection: 1,
        img: null,
        name: '',
        dialog: {
          open: false,
          id: 0,
          title: '',
          gambar: null,
          harga: null,
        },
        q: this.$route.query.q || '',
      }
    },
    computed: {},
    watch: {
      q (newVal) {
        this.$router.push({ query: { ...this.$route.query, q: newVal } })
      },
      '$route.query.q': function (val) {
        this.q = val
      },
    },
    mounted () {
      this.getProducts()
    },
    methods: {
      setDetail (data) {
        this.detail = data
      },
      getDetail (id) {
        axios.get('http://localhost:3000/products/' + id).then(response => {
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
          this.getProducts()
        }, 700)
      },
      setProducts (data) {
        this.products = data
      },
      getProducts () {
        const params = {
          q: this.q,
        }
        axios
          .get('http://localhost:3000/products?', { params: params })
          .then(response => {
            this.setProducts(response.data)
          })
          .catch(e => {
            console.log(e)
          })
      },
    },
  }
</script>

<style></style>
