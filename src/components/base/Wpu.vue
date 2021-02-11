<template>
  <v-app>
    <v-container>
      <!--  -->
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
            @keyup="Search"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(data, i) in pizza"
          :key="i"
          class="max-width"
          cols="12"
          lg="4"
        >
          <!--  -->
          <v-card>
            <!--  -->
            <template slot="progress">
              <v-progress-linear
                color="red"
                height="10"
                indeterminate
              />
            </template>
            <v-img
              :src="require(`@/assets/image/img/pizza/${data.gambar}`)"
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
                  4
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
            <v-card-title>Harga : {{ data.harga }}</v-card-title>
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
                    :to="'/pizza/' + data.id + '/detail'"
                  >
                    Pesan
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  md="5"
                >
                  <!--  -->
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Wpu',
    data: () => ({
      pizza: {},
      q: '',
    }),
    watch: {
      q (newVal) {
        this.$router.push({ query: { ...this.$route.query, q: newVal } })
      },
      '$route.query.q': function (val) {
        this.q = val
      },
    },
    mounted () {
      this.getPizza()
      this.getResult()
    },
    methods: {
      Search () {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        this.timer = setTimeout(() => {
          this.getResult()
        }, 700)
      },
      setPizza (data) {
        this.pizza = data
      },
      getPizza () {
        axios.get('http://localhost:3000/menu').then(response => {
          this.setPizza(response.data)
        })
      },
      getResult () {
        axios.get('http://localhost:3000/menu?q=' + this.q).then(response => {
          this.setPizza(response.data)
        })
      },
    },
  }
</script>

<style></style>
