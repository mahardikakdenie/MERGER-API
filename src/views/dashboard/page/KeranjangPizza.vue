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
            <!--  -->
            <div>
              <v-breadcrumbs
                :items="item"
                large
              />
            </div>
            <div class="d-flex justify-end mr-8">
              <v-badge
                color="primary"
                :content="keranjang ? keranjang.length : '0'"
                overlap
              >
                <v-btn icon>
                  <v-icon color="primary">
                    mdi-cart-outline
                  </v-icon>
                </v-btn>
              </v-badge>
            </div>
            <br>
            <template>
              <v-simple-table>
                <!--  -->
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
                      v-for="(data, i) in keranjang"
                      :key="i"
                    >
                      <td>{{ i + 1 }}</td>
                      <td>
                        <v-img
                          v-if="data.gambar"
                          :src="
                            require(`@/assets/image/img/pizza/${data.products.gambar}`)
                          "
                          height="150"
                          width="200"
                        />
                      </td>
                      <td>{{ data.products.nama }}</td>
                      <td>{{ data.Keterangan ? data.Keterangan : ' - ' }}</td>
                      <td>{{ data.Jumlah }}</td>
                      <td>{{ data.products.harga }}</td>
                      <td>{{ data.Jumlah * data.products.harga }}</td>
                      <td>
                        <v-tooltip
                          bottom
                          color="red"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              icon
                              v-bind="attrs"
                              v-on="on"
                              @click="del(data.id)"
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
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'KeranjangPizza',
    data: () => ({
      keranjang: {},
      item: [
        {
          text: 'Menu',
          disabled: false,
          to: '/pizza',
        },
        {
          text: 'Keranjang',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
    computed: {
      totalHarga () {
        return this.keranjang.reduce(function (items, data) {
          return items + data.products.harga * data.Jumlah
        }, 0)
      },
    },
    mounted () {
      this.getKeranjang()
    },
    methods: {
      del (id) {
        axios.delete('http://localhost:3000/keranjangPizza/' + id).then(() => {
          this.$toast.error('Berhasil Di hapus ', {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })
          // update
          this.getKeranjang()
        })
      },
      setKeranjang (data) {
        this.keranjang = data
      },
      getKeranjang () {
        axios.get('http://localhost:3000/keranjangPizza').then(response => {
          this.setKeranjang(response.data)
        })
      },
    },
  }
</script>

<style></style>
