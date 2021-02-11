<template>
  <div>
    <!--  -->
    <!-- Dekstop  -->
    <v-container>
      <v-row
        class="d-none d-sm-flex"
        align-content-lg="center"
      >
        <!--  -->
        <v-col
          cols="12"
          md="6"
          class="mb-12 mt-12"
        >
          <!--  -->
          <v-card
            elevation="0"
            color="transparent"
            class="pa-md-1 mx-lg-2 text-left"
            width="100%"
            height="20"
          >
            <!--  -->
            <section class="mb-12 ml-8">
              <!--  -->
              <h2 class="font-weight-light mb-2 headline">
                <strong>Delicious Food Menu,</strong>
                <br>In Your Mind
              </h2>
              <p>Ayo Segera Pesan Menu Yang Anda Inginkan</p>
              <!--  -->
              <div class="text-left">
                <v-btn
                  class="ma-2"
                  color="red"
                  to="/menu/testing"
                  rounded
                >
                  <span class="mr-1">
                    <v-icon light>mdi-cart-outline</v-icon>
                  </span>
                  Pesan
                </v-btn>
              </div>
            </section>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          lg="6"
        >
          <!--  -->
          <v-img
            :src="myImage"
            max-height="450"
            max-width="450"
          />
        </v-col>
      </v-row>
    </v-container>

    <!--  -->
    <!-- Mobile -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myImage: require('@/assets/image/Hero.png'),
      }
    },
  }
</script>

<style></style>
