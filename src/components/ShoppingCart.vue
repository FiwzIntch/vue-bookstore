<template>
  <section>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="tbl-cart"
    >
      <template v-slot:item.name="{ item }">
        <v-row>
          <v-col cols="5">
            <v-img
              lazy-src="@/assets/book_detail_front.jpg"
              max-height="140"
              max-width="80"
              src="@/assets/book_detail_front.jpg"
              class="img"
            ></v-img>
          </v-col>
          <v-col
            cols="7"
            class="pt-8"
          >
            <span class="font-weight-bold black--text">{{item.name}}</span>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.price="{ item }">
        <span class="subtitle-1 font-weight-bold span-number">{{item.price}}</span>
      </template>
      <template v-slot:item.quantity="{ item }">
        <v-row>
          <v-col
            cols="12"
            class="black--text font-weight-bold mt-10 span-number"
          >
            <v-text-field
              :value="item.quantity"
              solo
              flat
              type="number"
              background-color="#EEEEEE"
            ></v-text-field>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.total="{ item }">
        <span class="subtitle-1 font-weight-bold span-number">{{item.total}}</span>
      </template>
      <template v-slot:item.action="{ item }">
        <div class="btn-action">
          <v-btn
            class="mb-2"
            outlined
            fab
            color="grey"
            :value="item.action"
            x-small
            :style="{display:'block'}"
          >
            <v-icon color="grey">mdi-window-close</v-icon>
          </v-btn>
          <v-btn
            outlined
            fab
            color="grey"
            :value="item.action"
            x-small
          >
            <v-icon color="grey">mdi-pencil-outline</v-icon>
          </v-btn>
        </div>

      </template>
    </v-data-table>
    <v-divider></v-divider>
    <v-row
      class="my-2 small-device-justify"
      no-gutters
    >
      <v-col
        cols="12"
        lg="4"
        md="5"
        sm="4"
        class="py-2 px-1"
      >
        <v-btn
          rounded
          height="40"
          style="width:100%"
          outlined
          class="mx-1 font-weight-bold grey--text text--darken-2"
          @click="$router.push({name:'Home'})"
        >
          ซื้อสินค้าต่อไป
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        md="5"
        sm="4"
        class="py-2 px-1"
      >
        <v-btn
          rounded
          height="40"
          style="width:100%"
          dark
          class="mx-1 font-weight-bold"
        >
          ล้างตระกร้าสินค้า
        </v-btn>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  name: "Shoppingcart",
  data() {
    return {
      headers: [
        {
          text: "สินค้า",
          width: 300,
          sortable: false,
          value: "name",
          class: "subtitle-1 font-weight-bold black--text",
        },
        {
          text: "ราคา",
          value: "price",
          class: "subtitle-1 font-weight-bold black--text",
          sortable: false,
        },
        {
          text: "จำนวน",
          value: "quantity",
          width: 90,
          class: "subtitle-1 font-weight-bold black--text",
          sortable: false,
        },
        {
          text: "ยอดรวม",
          value: "total",

          class: "subtitle-1 font-weight-bold black--text",
          sortable: false,
        },
        {
          text: "",
          value: "action",
          class: "subtitle-1 font-weight-bold black--text",
          width: 60,
          sortable: false,
        },
      ],
      items: [
        {
          name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
          price: "THB499.00",
          quantity: 1,
          total: "THB499.00",
          action: "",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.img {
  display: inline-block;
  margin: 24px 10px;
}
.span-text {
  margin-left: 12px;
  position: relative;
  bottom: 150px;
}
.span-number {
  position: relative;
  bottom: 55px;
}
.btn-action {
  position: relative;
  bottom: 35px;
}
.btn-action button {
  border-width: 2px;
  width: 30px;
  height: 30px;
}
.v-divider {
  border-width: 1px;
}
</style>
<style>
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  border-bottom-width: 2px !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover {
  background: transparent !important;
}
</style>
