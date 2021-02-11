<template>
  <v-app>
    <!--  -->
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
          class="mt-6"
        >
          <base-material-card
            :title="detail.nama"
            icon="mdi-food"
          >
            <div>
              <v-breadcrumbs
                :items="items"
                large
              />
            </div>
            <div class="d-flex justify-end mr-8">
              <v-badge
                color="primary"
                :content="keranjang ? keranjang.length : '0'"
                overlap
              >
                <v-btn
                  icon
                  to="/keranjangs"
                >
                  <v-icon color="primary">
                    mdi-cart-outline
                  </v-icon>
                </v-btn>
              </v-badge>
            </div>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <!--  -->
                <v-list-item>
                  <v-list-item-content>
                    <v-img
                      :src="
                        require(`@/assets/image/img/pizza/${detail.gambar}`)
                      "
                      style="border-radius:10px"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <!--  -->
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>
                      <h2>Nama : {{ detail.nama }}</h2>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <h3>Harga : {{ detail.harga }}</h3>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <h2>Kategori : {{ detail.kategori }}</h2>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <h4>Cafe : {{ detail.cafe }}</h4>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="d-flex flex-row-reverse">
                  <v-list-item-action>
                    <div>
                      <v-btn
                        text
                        color="primary"
                        @click="getShow(detail.id)"
                      >
                        Detail
                      </v-btn>
                    </div>
                  </v-list-item-action>
                </v-list-item>
              </v-col>
            </v-row>
          </base-material-card>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col
          cols="12"
          md="5"
        >
          <!--  -->
          <base-material-card
            title="Pesan"
            icon="mdi-send"
          >
            <v-card>
              <v-list-item>
                <v-list-item-content>
                  <v-text-field
                    v-model="pesan.jumlah"
                    label="Jumlah Pesan"
                    placeholder="Masukan Jumlah Pemesanan"
                    type="number"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-text-field
                      v-model="pesan.keterangan"
                      label="Masukan Keterangan"
                      placeholder="Seperti Tambah garam, dan lain lain"
                      type="text"
                    />
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="d-flex justify-end ml-12">
                <v-list-item-action>
                  <div>
                    <v-btn
                      text
                      class="primary"
                      @click="send"
                    >
                      pesan
                    </v-btn>
                  </div>
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </base-material-card>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog.open"
        width="500"
      >
        <v-row>
          <v-col>
            <v-card>
              <v-card-title class="headline mb-5">
                <h2>{{ show.nama }}</h2>
              </v-card-title>

              <v-card-text>
                <h4>Deskripsi :</h4>
                {{ show.deskripsi }}
              </v-card-text>
              <v-divider />
              <v-card-text>
                Rating :
                <v-rating
                  value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                />
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  text
                  @click="dialog.open = false"
                >
                  Kembali
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'PizzaDetail',
    data: () => ({
      detail: {},
      keranjang: {},
      show: {},
      pesan: {
        jumlah: '',
        keterangan: '',
      },
      dialog: {
        open: false,
        id: 0,
        title: '',
        gambar: null,
        harga: null,
      },
      items: [
        {
          text: 'Pizza',
          disabled: false,
          to: '/pizza',
        },
        {
          text: 'Detail',
          disabled: false,
          to: '/pizza',
        },
        {
          text: 'FoodDetail',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
    mounted () {
      this.getDetail()
      this.getKeranjang()
    },
    methods: {
      setKeranjang (data) {
        this.keranjang = data
      },
      getKeranjang () {
        axios.get('http://localhost:3000/keranjangPizza').then(response => {
          this.setKeranjang(response.data)
        })
      },
      send () {
        if (this.pesan.jumlah) {
          axios
            .post('http://localhost:3000/keranjangPizza', {
              Jumlah: this.pesan.jumlah,
              Keterangan: this.pesan.keterangan,
              products: this.detail,
            })
            .then(() => {
              this.$router.push({ path: '/keranjangs' })
              this.$toast.success('Sukses Masuk Keranjang', {
                type: 'success',
                position: 'top-right',
                duration: 3000,
                dismissible: true,
              })
            })
        } else {
          this.$toast.error('Masukan Jumlah Pemesanan ', {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })
        }
      },
      setShow (data) {
        this.show = data
      },
      getShow (id) {
        axios.get('http://localhost:3000/menu/' + id).then(response => {
          this.setShow(response.data)
          this.dialog.open = true
        })
      },
      setDetail (Data) {
        this.detail = Data
      },
      getDetail () {
        axios
          .get('http://localhost:3000/menu/' + this.$route.params.id)
          .then(response => {
            this.setDetail(response.data)
          })
      },
    },
  }
</script>

<style></style>
