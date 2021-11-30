<template>
  <section>
    <v-row class="my-14 col-xl-10 col-12 mx-auto">
      <v-col
        cols="12"
        style="font-size:1.9rem !important"
        class="font-weight-bold"
      >ชำระเงิน</v-col>
      <v-col
        cols="12"
        xl="8"
        lg="8"
        md="7"
        sm="12"
      >
        <addressdetail />
      </v-col>
      <v-col
        cols="12"
        xl="4"
        lg="4"
        md="5"
        sm="12"
      >
        <ordersummary
          :text="txtBtn"
          :isIcon="true"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import addressdetail from "@/components/AddressDetail";
import ordersummary from "@/components/OrderSummary";
export default {
  name: "Payment",
  components: {
    addressdetail,
    ordersummary,
  },
  data() {
    return {
      txtBtn: "ชำระเงิน",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
</style>