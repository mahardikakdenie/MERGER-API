<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />
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
    },

    data: () => ({}),

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
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      toggle_dark_mode: function () {
        localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
      },
    },
  }
</script>
