<template>
  <v-app>
    <bookheader />
    <bookcontent />
  </v-app>
</template>

<script>
import bookheader from "@/components/Header";
import bookcontent from "@/components/Content";
export default {
  name: "App",
  components: {
    bookheader,
    bookcontent,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
@media only screen and (max-width: 924px) {
  .small-device-justify {
    justify-content: center;
  }
  .small-device-text-center {
    text-align: center;
  }
}
</style>