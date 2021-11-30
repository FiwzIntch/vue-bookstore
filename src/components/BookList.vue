<template>
  <section class="bookList">
    <v-row class="mb-1">
      <v-col
        cols="8"
        class="font-weight-bold headline"
      >{{text}}</v-col>
      <v-col
        cols="4"
        class="body-1 text-right text-decoration-underline "
      ><span>ดู{{text}}ทั้งหมด</span></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="pa-0">
        <v-slide-group
          v-model="model"
          center-active
          show-arrows
          prev-icon="mdi-arrow-left-drop-circle"
          next-icon="mdi-arrow-right-drop-circle"
        >
          <v-slide-item
            v-for="n in 6"
            :key="n"
          >
            <v-hover
              v-slot="{ hover }"
              open-delay="200"
            >
              <v-card
                :elevation="hover ? 5 : 0"
                :class="{ 'on-hover': hover }"
                class="ma-1"
                :width="widthCard"
                @click="$router.push({ name: 'Detail' })"
              >
                <v-card-title class="pb-0 body-2 light-green--text text--darken-2 titleList">
                  <v-icon
                    class="mx-2 font-weight-light"
                    color="light-green darken-2"
                    size="20"
                  >
                    mdi-checkbox-marked-circle
                  </v-icon> มีสินค้า
                </v-card-title>

                <v-card-title class="pt-2 pb-3 justify-center">
                  <v-list-item-avatar
                    tile
                    width="160"
                    height="220"
                    class="mr-0 mb-0"
                  >
                    <v-img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1614223174l/57201706._SY475_.jpg"></v-img>
                  </v-list-item-avatar>
                  <!-- section hover -->
                  <v-btn
                    class="mx-2 btnHeart"
                    fab
                    dark
                    x-small
                    color="grey"
                    outlined
                    v-if="hover"
                  >
                    <v-icon dark>
                      mdi-heart-outline
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-2 btnEqualizer "
                    fab
                    dark
                    x-small
                    color="grey"
                    outlined
                    v-if="hover"
                  >
                    <v-icon dark>
                      mdi-equalizer
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="btnAddCart"
                    rounded
                    color="primary"
                    dark
                    outlined
                    x-large
                    v-if="hover"
                  >
                    <v-icon class="mx-3">mdi-cart-outline</v-icon>
                    <span class="subtitle-1 text-capitalize font-weight-bold mr-2">add to cart</span>
                  </v-btn>
                  <!-- section hover -->
                </v-card-title>

                <v-card-text class="titleList">
                  <v-row class="mx-0 my-1">
                    <v-rating
                      :value="4"
                      dense
                      half-increments
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      empty-icon="$ratingFull"
                      readonly
                      size="18"
                    ></v-rating>
                    <div class="ms-4">
                      Reviews (4)
                    </div>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class="font-weight-bold black--text">รสชาติของผลไม้ที่ยังไม่สุกงอม</v-col>
                  </v-row>
                  <v-row>
                    <v-col class="body-1 text-decoration-line-through">THB599.00</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class="title font-weight-bold black--text">THB499.00</v-col>
                  </v-row>

                </v-card-text>
              </v-card>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </section>

</template>

<script>
export default {
  name: "Booklist",
  props: {
    text: {
      type: String,
      default: "สินค้า",
    },
  },
  data() {
    return {
      img: "@/assets/book_list.jpg",
      widthCard: 280,
    };
  },
  mounted() {
    switch (this.$vuetify.breakpoint.name) {
      case "xl":
        this.widthCard = 310;
        break;
      default:
        this.widthCard = 280;
        break;
    }
  },
  methods: {},
};
</script>

<style>
.bookList .v-slide-group__next,
.v-slide-group__prev {
  min-width: 0px;
}
.bookList .titleList {
  padding-left: 55px;
  padding-right: 55px;
}
.btnHeart {
  border-width: 2px;
  position: absolute;
  top: 25px;
  left: 255px;
}
.btnEqualizer {
  border-width: 2px;
  position: absolute;
  top: 65px;
  left: 255px;
}
.btnAddCart {
  border-width: 2px;
  position: relative;
  left: 7px;
}
@media only screen and (max-width: 924px) {
  .bookList {
    margin: 0px 15px;
  }
}
@media only screen and (max-width: 1904px) {
  .bookList .titleList {
    padding-left: 35px;
    padding-right: 35px;
  }
  .btnHeart {
    border-width: 2px;
    position: absolute;
    top: 25px;
    left: 230px;
  }
  .btnEqualizer {
    border-width: 2px;
    position: absolute;
    top: 65px;
    left: 230px;
  }
}
</style>