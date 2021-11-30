<template>
  <section>
    <v-row class="my-14">
      <v-col cols="12">
        <v-card
          class="mx-auto"
          elevation="0"
        >
          <v-row class="small-device-justify">
            <v-col
              xl="4"
              lg="5"
              md="6"
              sm="8"
              cols="8"
            >
              <v-img
                max-height="560"
                max-width="380"
                class="mx-4"
                :src="imageShow"
              ></v-img>
            </v-col>
            <v-col
              xl="8"
              lg="7"
              md="6"
              sm="12"
              cols="12"
            >
              <v-row class="text-md-h5 text-xl-h4 my-4 font-weight-bold small-device-text-center">
                <v-col
                  cols="12"
                  class="pa-1"
                >{{ bookName }}</v-col>
              </v-row>
              <v-row class="subtitle-1 my-2 small-device-text-center">
                <v-col
                  cols="12"
                  class="pa-0"
                >ผู้เขียน : โชนัมจู</v-col>
                <v-col
                  cols="12"
                  class="pa-0"
                >สำนักพิมพ์ : Piccolo </v-col>
                <v-col
                  cols="12"
                  class="pa-0"
                >หมวดหมู่ : วรรณกรรมเรื่องสั้น</v-col>
                <v-col
                  cols="12"
                  class="pa-0"
                >ประเภทของสินค้า : Books</v-col>
                <v-col
                  cols="12"
                  class="pa-0"
                >บาร์โค้ด : 9786161840488</v-col>
              </v-row>
              <v-row class="headline my-10 small-device-text-center">
                <v-col cols="12">
                  <span class="mr-5">ราคา</span>
                  <span class="text-md-h5 text-xl-h4 font-weight-bold mr-3">THB499.00</span>
                  <span class="text-md-h6 text-xl-h5 font-weight-bold text-decoration-line-through grey--text">THB599.00</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-row class="small-device-justify">
                    <v-col
                      xl="2"
                      lg="2"
                      md="2"
                      sm="3"
                      cols="3"
                      class="font-weight-bold"
                    >
                      <v-text-field
                        v-model="number"
                        type="number"
                        solo
                        flat
                        background-color="#EEEEEE"
                        class="quantity"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      xl="3"
                      lg="4"
                      md="5"
                      cols="10"
                      class="text-center"
                    >
                      <v-btn
                        rounded
                        color="primary"
                        dark
                        height="50"
                        style="width:100%"
                      >
                        Add
                      </v-btn>
                    </v-col>
                    <v-col
                      xl="3"
                      lg="4"
                      md="5"
                      cols="10"
                      class="text-center"
                    >
                      <v-btn
                        rounded
                        color="warning"
                        dark
                        height="50"
                        style="width:100%"
                      >
                        <v-icon class="mr-4">mdi-heart</v-icon>
                        Wishlist
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="small-device-justify">
                <v-col cols="12"></v-col>
                <span class="mx-2 mt-2 title">แชร์ : </span>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="success"
                  depressed
                >
                  <Icon
                    icon="uiw:mail"
                    style="font-size: 24px;"
                  />
                </v-btn>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="#22303C"
                  depressed
                >
                  <Icon
                    icon="dashicons:twitter-alt"
                    style="font-size: 24px;"
                  />
                </v-btn>

                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="primary"
                  depressed
                >
                  <Icon
                    icon="brandico:facebook"
                    style="font-size: 24px;"
                  />
                </v-btn>

                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="red"
                  depressed
                >
                  <Icon
                    icon="entypo-social:google"
                    style="font-size: 24px;"
                  />
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="ml-9 small-device-justify">
            <v-col
              xl="3"
              lg="4"
              md="6"
              sm="6"
              cols="8"
            >
              <v-row no-gutters>
                <v-col
                  cols="6"
                  v-for="(img, index) in images"
                  :key="index"
                  class="Img"
                >
                  <v-img
                    :class="(img.url == imageShow ? 'Img' : 'disabledImg')"
                    :lazy-src="img.url"
                    max-height="360"
                    max-width="180"
                    :src="img.url"
                    @click="changeImage(img.url)"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-tabs
                v-model="tab"
                color="black"
              >
                <v-tabs-slider color="primary"></v-tabs-slider>
                <v-tab
                  href="#tab-1"
                  class="font-weight-bold subtitle-1"
                >
                  เกี่ยวกับสินค้า
                </v-tab>
                <v-tab
                  href="#tab-2"
                  class="font-weight-bold subtitle-1"
                >
                  รายละเอียด
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item value="tab-1">
                  <v-card flat>
                    <v-card-text>
                      <v-row class="col-12 col-sm-12 col-md-10">
                        <v-col
                          cols="12"
                          class="subtitle-1 black--text"
                        ><b>รายละเอียด : </b>{{bookName}}</v-col>
                        <v-col
                          xl="9"
                          md="12"
                          cols="12"
                          class="body-1"
                        >{{title1}}</v-col>
                        <v-col
                          xl="9"
                          md="12"
                          cols="12"
                          class="body-1"
                        >{{title2}}</v-col>
                      </v-row>

                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item value="tab-2"> </v-tab-item>
              </v-tabs-items>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="my-14">
      <v-col
        cols="12"
        class="mx-6"
      >
        <booklist />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue2";

import booklist from "../components/BookList";
export default {
  name: "Detail",
  components: {
    Icon,
    booklist,
  },
  data() {
    return {
      bookName: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
      imageShow: require("@/assets/book_detail_front.jpg"),
      number: 1,
      tab: null,
      title1: `ก่อนที่ชีวิตของเด็กสาววัยย่างสิบหกปีทั้งสี่คนจะได้สัมผัสกับความหวานหอมจากผลไม้รสชาติที่สุดในชีวิต พวกเธอจะต้องต่อสู้กับความจริงปวดที่ค่อยๆ 
      กัดเซาะจิตใจและผ่านพ้นช่วงชีวิตซึ่งเต็มไปด้วยความยากลำบากนานา`,
      title2: `ทั้งความคิดที่ว่าตัวเองโดดเดี่ยว แม้อยู่ในกลุ่มเพื่อนที่เหมือนจะรักกันดี หรือแม้จะมีครอบครัวที่พร้อมหน้า 
      ความรู้สึกที่ว่าไม่มีใครจริงใจสักคนนั้นกัดกินจิตใจทีละน้อยจนก่อเกิดความหวาดระแวงขึ้น ตอนนี้พวกเธอจึงทำได้เพียงพยายามในแบบของตนเอง
      เพื่อผ่านพ้นความไม่คุ้นเคยที่ยากเข็ญไปให้ได้ ไม่ว่าวิธีเหล่านั้นจะถูกหรือผิด... แล้ววันหนึ่งเมื่อถึงเวลาอาจจะไม่ทั้งหมด
      แต่อย่างน้อยก็จะมีหนึ่งคนที่พูดออกมาได้อย่างเต็มปากเต็มคำว่า "นี่เป็นผลไม้อร่อยที่สุดเท่าที่ฉันเคยกินมาตั้งแต่เกิดเลย"`,
      images: [
        {
          name: "img1",
          url: require("@/assets/book_detail_front.jpg"),
        },
        {
          name: "img2",
          url: require("@/assets/book_detail_back.jpg"),
        },
      ],
    };
  },
  mounted() {},
  methods: {
    changeImage(url) {
      this.imageShow = url;
    },
  },
};
</script>
<style scoped>
.Img {
  cursor: pointer;
}
.disabledImg {
  opacity: 0.5;
}
</style>
<style>
.quantity.v-text-field.v-text-field--solo .v-input__control input {
  text-align: center;
}
</style>