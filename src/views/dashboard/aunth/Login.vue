<template>
  <v-app>
    <v-img :src="require(`@/assets/register_bg_2.png`)">
      <!--  -->
      <v-container class="mt-12">
        <v-row justify="center">
          <v-col
            cols="12"
            lg="6"
          >
            <base-material-card
              icon="mdi-account"
              color="primary"
            >
              <template v-slot:heading>
                <div class="display-2 font-weight-light">
                  Login
                </div>
              </template>
              <v-card>
                <v-list-item>
                  <v-list-item-content>
                    <v-text-field
                      label="Username Or Email"
                      placeholder="Masukan Username Or Email "
                      prepend-icon="mdi-account-circle"
                      autocomplete="off"
                    />
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-text-field
                      label="Masukan Password"
                      placeholder="Masukan Password"
                      prepend-icon="mdi-lock"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      autocomplete="off"
                      @click:append="see"
                    />
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-checkbox label="Remember Me" />
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn
                      text
                      color="red"
                    >
                      Forgot Password ?
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
                <br>
                <v-list-item class="d-flex justify-end">
                  <v-list-item-action>
                    <div>
                      <v-btn color="primary">
                        Login
                      </v-btn>
                    </div>
                  </v-list-item-action>
                </v-list-item>
                <br>
              </v-card>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-app>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      showPassword: false,
    }),
    methods: {
      see () {
        this.showPassword = !this.showPassword
      },
    },
  }
</script>

<style></style>
