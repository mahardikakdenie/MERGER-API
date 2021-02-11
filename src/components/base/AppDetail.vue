<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    :color="$vuetify.theme.dark ? 'transparent ' : '#0A52AF '"
    flat
    height="75"
  >
    <v-toolbar
      color="transparent"
      elevation="0"
      dense
    >
      <!--  -->
      <div>
        <span>
          <v-img :src="require(`@/assets/image/img/logo.png`)" />
        </span>
      </div>
      <v-spacer />
    </v-toolbar>

    <v-spacer />
    <div class="mx-3" />
    <v-tooltip
      bottom
      :color="$vuetify.theme.dark ? 'primary' : '#0A52AF'"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ml-2"
          min-width="0"
          text
          v-bind="attrs"
          to="/"
          v-on="on"
        >
          <v-icon :color="$vuetify.theme.dark ? 'primary' : 'light'">
            mdi-view-dashboard
          </v-icon>
        </v-btn>
      </template>
      <span>Dashboard</span>
    </v-tooltip>
    <div class="mx-3" />
    <v-switch
      v-model="$vuetify.theme.dark"
      :prepend-icon="
        $vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-5'
      "
      class="ma-0 pa-0"
      :color="$vuetify.theme.dark ? 'success' : '#F5E007'"
      hide-details
      @click="toggle_dark_mode"
    />
  </v-app-bar>
</template>

<script>
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
      isSearch: false,
      text: '',
    }),

    computed: {
      ...mapState(['drawer']),
    },
    mounted () {
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
      searchBtn () {
        this.isSearch = !this.isSearch
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
