<template>
  <v-app-bar
    app
    color="white"
    elevation="2"
    height="75"
  >
    <v-spacer class="mx-10"></v-spacer>

    <div
      class="font-weight-bold display-1 px-4"
      :style="{cursor: 'pointer'}"
      @click="$router.push({ name: 'Home'})"
    >Book</div>

    <v-spacer class="mx-5"></v-spacer>

    <v-tabs
      background-color="transparent"
      color="black"
      hide-slider
      class="bookTab"
    >
      <v-tab
        class="font-weight-medium subtitle-1"
        v-show="!isSearch"
      >สินค้าใหม่</v-tab>
      <v-tab
        class="font-weight-medium subtitle-1"
        v-show="!isSearch"
      >สินค้าขายดี</v-tab>
      <v-tab
        class="font-weight-medium subtitle-1"
        v-show="!isSearch"
      >สินค้าลดราคา</v-tab>
      <v-tab
        class="font-weight-medium subtitle-1"
        v-show="!isSearch"
      >สินค้าแนะนำ</v-tab>
      <v-text-field
        v-if="isSearch"
        class="mt-2"
        filled
        rounded
        dense
        placeholder="ค้นหาสินค้า"
        append-icon="mdi-magnify mt-3 primary--text"
        height="55"
      ></v-text-field>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-btn
      v-if="!isSearch"
      icon
      @click="isSearch = true"
    >
      <v-icon color="black">mdi-magnify</v-icon>
    </v-btn>
    <v-btn
      v-else
      icon
      @click="isSearch = false"
      class="ml-5"
    >
      <v-icon color="black">mdi-window-close</v-icon>
    </v-btn>

    <v-btn
      icon
      class="mx-1"
      v-popover:myname
    >
      <v-badge
        content="1"
        color="primary"
        overlap
      >
        <Icon
          icon="fluent:cart-24-regular"
          :horizontalFlip="true"
          style="font-size: 30px; color:black;"
        />
      </v-badge>
    </v-btn>

    <popover
      name="myname"
      width="380"
      class="px-3"
    >
      <div class="text-center">
        <h3 class="mt-4 mb-2">ตระกร้าของฉัน</h3>
        <p class="body-2 grey--text">1 สินค้าในตระกร้า</p>
        <v-btn
          rounded
          depressed
          color="primary"
          width="280"
          outlined
          class="font-weight-bold"
          @click="$router.push({name:'Order'})"
        >ดูหรือแก้ไขตระกร้าของฉัน
        </v-btn>
      </div>
      <v-divider class="my-5"></v-divider>
      <v-row class="text-center my-1 mx-1">
        <v-col
          cols="2"
          class="my-auto"
        >
          <span class="title">1</span>
          <span class="body-2 mx-2">x</span>
        </v-col>
        <v-col cols="3">
          <v-img
            lazy-src="@/assets/book_detail_front.jpg"
            max-height="120"
            max-width="60"
            src="@/assets/book_detail_front.jpg"
          ></v-img>
        </v-col>
        <v-col
          cols="5"
          class="text-left"
        > <span class="caption">รสชาติของผลไม้ที่ยังไม่สุกงอม</span>
        </v-col>
        <v-col
          cols="2"
          class="text-left"
        >
          <v-btn
            class="mb-2"
            outlined
            fab
            color="grey"
            style="display: block"
            height="25"
            width="25"
          >
            <v-icon
              small
              color="grey"
            >mdi-window-close</v-icon>
          </v-btn>
          <v-btn
            class="mb-2"
            outlined
            fab
            color="grey"
            height="25"
            width="25"
          >
            <v-icon
              small
              color="
            grey"
            >mdi-pencil-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider class="my-5"></v-divider>
      <div class="text-center">
        <span class="grey--text font-weight-bold">ยอดรวม:</span>
        <span class="title font-weight-bold mx-2">THB499.00</span>
        <v-btn
          rounded
          depressed
          color="primary"
          width="280"
          class="font-weight-bold mt-2 mb-8"
          @click="$router.push({name:'Payment'})"
        >ไปชำระเงิน
        </v-btn>
      </div>
    </popover>
    <v-avatar class="mx-4">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>

    <v-spacer class="mx-10"></v-spacer>

  </v-app-bar>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "DesktopHeader",
  components: { Icon },
  data() {
    return {
      isSearch: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.bookTab.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  color: black;
}
.vue-popover {
  border: thin solid rgba(0, 0, 0, 0.12);
}
</style>
