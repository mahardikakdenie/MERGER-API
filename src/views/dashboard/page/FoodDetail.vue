<template>
  <v-app>
    <!--  -->
    <v-container>
      <base-material-card
        title="Food Detail"
        icon="mdi-food-fork-drink"
      >
        <!--  -->
        <div>
          <v-breadcrumbs
            :items="items"
            large
          />
        </div>
        <v-row>
          <v-col class="ml-6">
            <!--  -->
            <v-card>
              <v-img
                v-if="data.gambar"
                :src="require(`@/assets/image/images/${products.gambar}`)"
                height="450"
                class="img-fluid shadow"
                style="border-radius: 100px"
              />
            </v-card>
          </v-col>
          <v-col class="ml-6 mt-6">
            <!--  -->
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>
                  <strong><h1>{{ products.nama }}</h1></strong>
                </v-list-item-title>
                <br>
                <v-list-item-subtitle>
                  Harga : {{ products.harga }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
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
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
            <br>
            <v-list-item-group>
              <v-list-item-action-text>
                <validation-provider
                  v-slot="{ errors }"
                  name="JumlahPemesanan"
                >
                  <v-text-field
                    v-model="pesan.jumlah"
                    placeholder="Masukan Jumlah Pemesanan"
                    :rules="emailRules"
                    :error-messages="errors"
                    label="Jumlah Pemesanan"
                    type="number"
                    required
                  />
                </validation-provider>
              </v-list-item-action-text>
              <v-list-item-action-text>
                <validation-provider name="Keterangan">
                  <v-textarea
                    v-model="pesan.keterangan"
                    placeholder="keterangan seperti:Pedas,Nasi Setengah,.."
                    label="Keterangan"
                    required
                  />
                </validation-provider>
              </v-list-item-action-text>
              <v-list-item-action>
                <v-btn
                  text
                  @click="Pemesanan"
                >
                  Pesan
                </v-btn>
              </v-list-item-action>
            </v-list-item-group>
          </v-col>
        </v-row>
      </base-material-card>
      <!--  -->
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'FoodDetail',
    data () {
      return {
        products: {},
        keranjang: 0,
        pesan: {
          jumlah: '',
          keterangan: '',
        },
        items: [
          {
            text: 'Menu',
            disabled: false,
            to: '/menu/index',
          },
          {
            text: 'Home',
            disabled: false,
            to: '/menu/testing',
          },
          {
            text: 'FoodDetail',
            disabled: true,
            href: 'breadcrumbs_link_2',
          },
        ],
        emailRules: [value => value !== '' || 'Form Harus Di isi '],
      }
    },
    mounted () {
      this.getFood()
    },
    methods: {
      reloadPage () {
        window.location.reload()
      },
      Pemesanan () {
        if (this.pesan.jumlah) {
          axios
            .post('http://localhost:3000/keranjangs', {
              Jumlah_Pemesanan: this.pesan.jumlah,
              keterangan: this.pesan.keterangan,
              products: this.products,
            })
            .then(() => {
              this.$router.push({ path: '/keranjang' })
              this.$toast.success('Sukses Masuk Keranjang', {
                type: 'success',
                position: 'top-right',
                duration: 3000,
                dismissible: true,
              })
              this.reloadPage()
            })
            .catch(e => {
              console.log(e)
            })
        } else {
          this.$toast.error('Jumlah Pemesanan Tidak Boleh Kosong', {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })
        }
      },
      setKeranjang (data) {
        this.keranjang = data
      },
      getKeranjang () {
        axios.get('http://localhost:3000/keranjangs').then(Response => {
          this.setKeranjang(Response.data)
        })
      },
      setFood (data) {
        this.products = data
      },
      getFood () {
        axios
          .get('http://localhost:3000/products/' + this.$route.params.id)
          .then(response => {
            this.setFood(response.data)
          })
          .catch(e => {
            console.log(e)
          })
      },
    },
  }
</script>

<style></style>
