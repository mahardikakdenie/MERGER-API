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
              :src="require(`@/assets/image/images/${products.gambar}`)"
              height="500"
              width="500"
              style="border-radius: 50px"
            />
          </template>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <!--  -->
          <v-card>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>
                  <h1>Nama : {{ products.nama }}</h1>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <h2>Harga : {{ products.harga }}</h2>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <br>
            <v-divider />
            <v-list-item>
              <v-list-item-content>
                <v-expansion-panels class="mr-6">
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Deskirpsi
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-list-item-content>
            </v-list-item>
            <br>
            <v-divider />
            <v-list-item>
              <v-list-content>
                <v-list-item-title>
                  Restourant : {{ products.cafe }}
                </v-list-item-title>
                <v-list-item-title>
                  <v-rating
                    value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  />
                </v-list-item-title>
              </v-list-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <h2>
                    Status :
                    {{ products.is_ready ? 'Tersedia' : 'Tutup / Habis' }}
                  </h2>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <div class="d-flex flex-row-reverse mt-12">
            <v-btn
              color="primary"
              text
              prepend
              @click="dialog.open = false"
            >
              Kembali
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'SeeModal',
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
