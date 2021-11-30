<template>
  <div>
    <v-card
      outlined
      class="ml-2 px-3 py-4 card-summary"
      color="#eff8ff"
    >
      <v-list
        dense
        color="#eff8ff"
      >
        <v-subheader class="headline font-weight-bold black--text mb-5">สรุปคำสั่งซื้อ</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="body-1 font-weight-bold">
                <p>ยอดรวม</p>
                <p>ค่าส่ง</p>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="body-2 text-right font-weight-bold">
                <p>THB499.00</p>
                <p>THB1.00</p>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mb-6"></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="body-1 font-weight-bold">
                <p>ยอดสุทธิ</p>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title class="title text-right font-weight-bold">
                <p>THB500.00</p>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-card-actions class="justify-center">
        <v-btn
          rounded
          depressed
          color="primary"
          height="50"
          class="font-weight-bold"
          @click="$router.push({name:'Payment'})"
          style="width:100%"
        >
          <v-icon
            v-if="isIcon"
            size="20"
            class="mx-3"
          >
            mdi-lock
          </v-icon>
          {{text}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Ordersummary",
  props: {
    text: String,
    isIcon: Boolean,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.card-summary .v-list-item__content p {
  margin-bottom: 20px;
}
</style>