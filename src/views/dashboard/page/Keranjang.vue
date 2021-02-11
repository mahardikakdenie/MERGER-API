<template>
  <v-app>
    <!--  -->
    <v-container>
      <v-row>
        <v-col>
          <!--  -->
          <base-material-card
            title="Keranjang saya"
            icon="mdi-cart"
            class="px-6 py-3"
          >
            <div>
              <v-breadcrumbs
                :items="items"
                large
              />
            </div>
            <br>
            <br>
            <!--  -->
            <template>
              <!--  -->
              <v-simple-table>
                <template v-slot:default>
                  <!--  -->
                  <thead>
                    <th class="text-left primary--text">
                      No
                    </th>
                    <th class="text-left primary--text">
                      Foto
                    </th>
                    <th class="text-left primary--text">
                      Makanan
                    </th>
                    <th class="text-left primary--text">
                      Keterangan
                    </th>
                    <th class="text-left primary--text">
                      Jumlah
                    </th>
                    <th class="text-left primary--text">
                      Harga
                    </th>
                    <th class="text-left primary--text">
                      Total Harga
                    </th>
                    <th class="text-left primary--text">
                      Hapus
                    </th>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(data, i) in Keranjang"
                      :key="i"
                    >
                      <td class="text-left">
                        {{ i + 1 }}
                      </td>
                      <td>
                        <v-img
                          v-if="data.gambar"
                          :src="
                            require(`@/assets/image/images/${data.products.gambar}`)
                          "
                          height="150"
                          width="200"
                        />
                      </td>
                      <td>
                        {{ data.products.nama }}
                      </td>
                      <td>{{ data.keterangan ? data.keterangan : ' - ' }}</td>
                      <td>{{ data.Jumlah_Pemesanan }}</td>
                      <td>{{ data.products.harga }}</td>
                      <td>
                        Rp.{{ data.products.harga * data.Jumlah_Pemesanan }}
                      </td>
                      <td>
                        <v-tooltip
                          bottom
                          color="red"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              icon
                              v-bind="attrs"
                              @click="hapus(data.id)"
                              v-on="on"
                            >
                              <!--  -->
                              <v-icon color="red">
                                mdi-trash-can
                              </v-icon>
                            </v-btn>
                          </template>
                          <span>Delete</span>
                        </v-tooltip>
                      </td>
                    </tr>
                    <tr align="right">
                      <td
                        colspan="6"
                        align="right"
                      >
                        <strong>Total Harga :</strong>
                      </td>
                      <td align="right">
                        <strong>{{ totalHarga }}</strong>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </base-material-card>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-wrap-reverse justify-md-end">
        <v-col cols="6">
          <base-material-card
            icon="mdi-food"
            title="CheckOut"
          >
            <!--  -->
            <v-card>
              <!--  -->
              <v-card-action>
                <v-text-field
                  v-model="nama"
                  label="Nama"
                  placeholder=" Masukan Nama"
                  prepend-icon="mdi-account-circle"
                  :rules="Rules"
                />
              </v-card-action>
              <v-card-action>
                <v-text-field
                  v-model="noMeja"
                  label="Meja"
                  placeholder=" Masukan No Meja"
                  prepend-icon="mdi-chair-school"
                  :rules="Rules"
                />
              </v-card-action>
              <v-card-action>
                <v-btn
                  text
                  @click="CheckOut"
                >
                  Pesan
                </v-btn>
              </v-card-action>
            </v-card>
          </base-material-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Keranjang',
    data () {
      return {
        nama: '',
        noMeja: '',
        Keranjang: {},
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
            text: 'Keranjang',
            disabled: true,
            href: 'breadcrumbs_link_2',
          },
        ],
        Rules: [value => value !== '' || 'Form Harus Di isi '],
      }
    },
    computed: {
      totalHarga () {
        return this.Keranjang.reduce(function (items, data) {
          return items + data.products.harga * data.Jumlah_Pemesanan
        }, 0)
      },
    },
    mounted () {
      this.getKeranjang()
    },
    methods: {
      CheckOut () {
        if (this.nama && this.noMeja) {
          axios
            .post('http://localhost:3000/pesanans', {
              nama: this.nama,
              noMeja: this.noMeja,
              Keranjang: this.Keranjang,
            })
            .then(() => {
              this.Keranjang.map(item => {
                axios
                  .delete('http://localhost:3000/keranjangs/' + item.id)
                  .catch(error => {
                    console.log(error)
                  })
              })
              this.$router.push({ path: '/menu/index' })
              this.$toast.success('Sukses Dipesan', {
                type: 'success',
                position: 'top-right',
                duration: 3000,
                dismissible: true,
              })
            })
        } else {
          this.$toast.error('Nama dan No meja Harus di isi', {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })
        }
      },
      reloadPage () {
        window.location.reload()
      },
      hapus (id) {
        axios
          .delete('http://localhost:3000/keranjangs/' + id)
          .then(() => {
            this.reloadPage()
            this.$toast.error('sukses Hapus Keranjang', {
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            })
          // update
          })
          .catch(E => {
            console.log(E)
          })
      },
      setKeranjang (data) {
        this.Keranjang = data
      },
      getKeranjang () {
        axios
          .get('http://localhost:3000/keranjangs')
          .then(response => {
            this.setKeranjang(response.data)
          })
          .catch(e => {
            console.log(e)
          })
      },
    },
  }
</script>

<style></style>
