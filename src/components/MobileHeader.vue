<template>
  <div>
    <v-card
      class="mx-auto"
      color="#FFF"
    >
      <v-app-bar
        color="primary"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-spacer v-if="!isSearch"></v-spacer>

        <v-text-field
          v-if="isSearch"
          class="mt-6"
          filled
          rounded
          dense
          placeholder="ค้นหาสินค้า"
          append-icon="mdi-magnify"
        ></v-text-field>

        <v-btn
          v-if="!isSearch"
          icon
          @click="isSearch = true"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          v-else
          icon
          @click="isSearch = false"
          class="ml-5"
        >
          <v-icon>mdi-window-close</v-icon>
        </v-btn>

        <v-btn
          icon
          class="mx-1"
          @click="$router.push({name:'Order'})"
        >
          <v-badge
            content="1"
            color="red"
            overlap
          >
            <Icon
              icon="fluent:cart-24-regular"
              :horizontalFlip="true"
              style="font-size: 30px;"
            />
          </v-badge>
        </v-btn>

      </v-app-bar>
    </v-card>
    <v-navigation-drawer
      width="160"
      v-model="drawer"
      absolute
      temporary
    >
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar
              size="80"
              class="mx-auto"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
      </template>
      <v-divider></v-divider>
      <v-tabs
        hide-slider
        vertical
        class="mobile-menu"
      >
        <v-tab>สินค้าใหม่</v-tab>
        <v-tab>สินค้าขายดี</v-tab>
        <v-tab>สินค้าลดราคา</v-tab>
        <v-tab>สินค้าแนะนำ</v-tab>
      </v-tabs>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "MobileHeader",
  components: { Icon },
  data() {
    return {
      isSearch: false,
      drawer: false,
      group: null,
    };
  },
  methods: {},
};
</script>
<style scoped>
.mobile-menu .v-tab {
  justify-content: start;
}
</style>