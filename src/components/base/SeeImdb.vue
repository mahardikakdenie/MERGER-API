<template>
  <v-app>
    <!--  -->
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <!--  -->
          <template>
            <!--   -->
            <v-img
              :src="products.Poster"
              height="500"
              width="700"
              style="border-radius: 80px"
            />
          </template>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <!--  -->
          <v-card color="primary">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>
                  <h1>Nama : {{ products.Title }}</h1>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <h2>Genre : {{ products.Genre }}</h2>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <br>
          <v-divider />
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-expansion-panels class="mr-6">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Description
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Plot : {{ products.Plot }}
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      Actors : {{ products.Actors }}
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      Writer : {{ products.Writer }}
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      Production : {{ products.Production }}
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      Runtime : {{ products.Runtime }}
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <br>
          <v-divider />
          <v-card>
            <v-list-item>
              <v-list-content>
                <v-list-item-title>
                  Language : {{ products.Language }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  />
                </v-list-item-subtitle>
              </v-list-content>
            </v-list-item>
          </v-card>
          <br>
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  Released : {{ products.Released }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <br>
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  Country : {{ products.Country }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-row class="mb-12">
          <v-col class="d-flex flex-row-reverse align-self-md mb-12">
            <v-btn
              color="primary"
              prepend
              @click="dialog.open = false"
            >
              Kembali
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'SeeImdb',
    props: {
      products: {
        type: Object,
        defaults: null,
        default: () => ({}),
      },
      dialog: {
        type: Object,
        defaults: null,
        default: () => ({}),
      },
    },
  }
</script>

<style></style>
