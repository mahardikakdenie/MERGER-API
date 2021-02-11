<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          v-for="data in Imdb.Search"
          :key="data"
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
                  4.5
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                {{ data.Year }}
              </div>

              <div>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div>
            </v-card-text>
            <v-divider class="mx-4" />
            <v-card-title>Harga : Rp{{ data.Type }}</v-card-title>
            <v-divider class="mx-4" />
            <v-card-title>Tutup Sampai : </v-card-title>
            <!-- <v-card-text>
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
            </v-card-text> -->
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
                  >
                    See Detail
                  </v-btn>
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
  export default {
    name: 'CardImdb',
    props: {
      imdb: {
        type: Object,
        defaults: null,
        default: () => ({}),
      },
    },
  }
</script>

<style></style>
