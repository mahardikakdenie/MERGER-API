<template>
  <div>
    <!--  -->
    <base-hero />
    <!--  -->
    <base-best-product tulisan="Best Product" />
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        items: {
          kota: {
            kabupaten: 'sumedang,Majalengka',
          },
        },
        loading: true,
        bestProduct: {
          id: 1,
          kode: 'K-01',
          nama: 'Sate Ayam',
          harga: 16000,
          rating: '4.3',
          is_ready: true,
          gambar: 'sate-ayam.jpg',
          selection: 1,
        },
      }
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

<style></style>
