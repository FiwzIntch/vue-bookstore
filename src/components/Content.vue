<template>
  <v-main>
    <v-container class="pa-0">
      <v-row>
        <v-col
          xl="11"
          cols="12"
          class="mx-auto"
        >
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: "Content",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

