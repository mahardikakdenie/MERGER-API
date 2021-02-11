<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <div>
      <v-breadcrumbs
        :items="items"
        large
      />
    </div>

    <v-spacer />
    <v-badge
      color="primary"
      :content="keranjang.length ? keranjang.length : '0'"
      overlap
    >
      <v-btn
        icon
        to="/keranjang"
      >
        <v-icon color="primary">
          mdi-cart
        </v-icon>
      </v-btn>
    </v-badge>
    <div class="mx-3" />
    <v-switch
      v-model="$vuetify.theme.dark"
      prepend-icon="mdi-theme-light-dark"
      class="ma-0 pa-0"
      color="success"
      hide-details
      @click="toggle_dark_mode"
    />
  </v-app-bar>
</template>

<script>
  import axios from 'axios'
  // Components
  // import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'DashboardCoreAppBar',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      updateKeranjang: {
        type: Object,
        defaults: null,
        default: () => ({}),
      },
    },
    data: () => ({
      keranjang: {
        jumlahKeranjang: '0',
      },
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          to: '/',
        },
        {
          text: 'Menu',
          disabled: false,
          to: '/menu/index',
        },
        {
          text: 'Food',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),

    computed: {
      ...mapState(['drawer']),
    },
    mounted () {
      this.getKeranjang()
      const theme = localStorage.getItem('dark_theme')
      if (theme) {
        if (theme === 'true') {
          this.$vuetify.theme.dark = true
        } else {
          this.$vuetify.theme.dark = false
        }
      }
    },
    methods: {
      setKeranjang (data) {
        this.keranjang = data
      },
      getKeranjang () {
        axios.get('http://localhost:3000/keranjangs').then(response => {
          this.setKeranjang(response.data)
        })
      },
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      toggle_dark_mode: function () {
        localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
      },
    },
  }
</script>
