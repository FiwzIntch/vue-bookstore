<template>
  <section>
    <v-row>
      <v-col
        cols="12"
        class="body-1 font-weight-bold"
      >
        <p>ที่อยู่ในการจัดส่ง</p>
        <v-divider style="border-width:1px;"></v-divider>
      </v-col>
    </v-row>
    <v-row class="address mb-16">
      <v-col
        cols="12"
        md="6"
        lg="6"
        xl="5"
      >
        <span>ชื่อ</span>
        <v-text-field
          dense
          rounded
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="6"
        xl="5"
      >
        <span>นามสกุล</span>
        <v-text-field
          dense
          rounded
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        xl="10"
        cols="12"
      >
        <span>ประเทศ</span>
        <v-select
          v-model="country"
          :items="countrys"
          dense
          rounded
          outlined
          hide-details
        ></v-select>
      </v-col>
      <v-col
        xl="10"
        cols="12"
      >
        <span>ที่อยู่</span>
        <span class="red--text ml-1">(บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน)</span>
        <v-text-field
          dense
          rounded
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="6"
        xl="5"
      >
        <span>แขวง/ตำบล</span>
        <v-text-field
          dense
          rounded
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="6"
        xl="5"
      >
        <span>เขต/อำเภท</span>
        <v-text-field
          dense
          rounded
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="6"
        xl="5"
      >
        <span>จังหวัด</span>
        <v-text-field
          dense
          rounded
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="6"
        xl="5"
      >
        <span>รหัสไปรษณีย์</span>
        <v-text-field
          dense
          rounded
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        xl="10"
        cols="12"
      >
        <span>เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)</span>
        <v-text-field
          dense
          rounded
          outlined
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col
        cols="12"
        class="body-1 font-weight-bold "
      >
        <p>เลือกขนส่ง</p>
        <v-divider style="border-width:1px;"></v-divider>
      </v-col>
      <v-col cols="12">
        <v-radio-group
          v-model="radiosTransport"
          class="mt-1"
        >
          <div
            class="my-1"
            v-for="item in transports"
            :key="item.value"
          >
            <v-card
              outlined
              height="120"
              class="px-8 pt-10 card-shipping"
            >
              <v-radio
                :value="item.value"
                class="large-radio"
              >
                <template v-slot:label>
                  <v-row>
                    <v-col
                      cols="8"
                      class="text-sm-h5 subtitle-1 black--text font-weight-regular"
                    >
                      <v-img
                        v-if="item.img"
                        :lazy-src="item.img"
                        :src="item.img"
                        max-width="180"
                        max-height="50"
                        class="mx-2"
                      ></v-img>
                      <span
                        v-else
                        class="px-6"
                      >{{item.name}}</span>
                    </v-col>
                    <v-col
                      cols="4"
                      class="text-sm-h5 subtitle-1 black--text font-weight-bold text-right"
                    >
                      THB{{item.price}}
                    </v-col>
                  </v-row>
                </template>
              </v-radio>
            </v-card>
          </div>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col
        cols="12"
        class="body-1 font-weight-bold"
      >
        <p>วิธีชำระเงิน</p>
        <v-divider style="border-width:1px;"></v-divider>
      </v-col>
      <v-col cols="12">
        <v-radio-group
          v-model="radiosPayment"
          class="mt-1"
        >
          <div
            class="my-1"
            v-for="item in payments"
            :key="item.value"
          >
            <v-card
              outlined
              height="120"
              class="px-8 pt-12 card-shipping"
            >
              <v-radio
                :value="item.value"
                class="large-radio"
              >
                <template v-slot:label>
                  <Icon
                    style="font-size: 34px; color:black;"
                    class="mx-5"
                    :icon="item.icon"
                  /><span class="title black--text font-weight-regular">{{item.name}}</span>
                </template>
              </v-radio>
            </v-card>
          </div>
        </v-radio-group>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "Addressdetail",
  components: {
    Icon,
  },
  data() {
    return {
      radiosTransport: "free",
      radiosPayment: "crash",
      countrys: ["Thailand", "Japan", "Italy", "Spain", "China"],
      country: "Thailand",
      transports: [
        { name: "free shipping", price: "0.00", value: "free" },
        {
          name: "kerry",
          price: "40.00",
          img: require("@/assets/kerry.png"),
          value: "kerry",
        },
      ],
      payments: [
        {
          name: "Crash",
          icon: "ant-design:dollar-circle-outlined",
          value: "crash",
        },
        {
          name: "Credit/Debit",
          icon: "ant-design:credit-card-outlined",
          value: "credit",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.address div.col {
  padding-top: 4px;
  padding-bottom: 4px;
}
.address div.col .v-input {
  padding-top: 3px;
}
</style>
<style>
.large-radio i.v-icon.v-icon {
  font-size: 32px;
}
.card-shipping.v-sheet.v-card {
  border-color: #1976d2;
  border-radius: 8px;
}
</style>