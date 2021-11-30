<template>
  <section>
    <carousel />
    <booklist :text="bestselling" />
    <booklist :text="reccommend" />
  </section>
</template>

<script>
import carousel from "../components/Carousel";
import booklist from "../components/BookList";
export default {
  name: "Home",
  components: {
    carousel,
    booklist,
  },

  data() {
    return {
      bestselling: "สินค้าขายดี",
      reccommend: "สินค้าแนะนำ",
    };
  },

  mounted() {},
  methods: {},
};
</script>
