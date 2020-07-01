<template>
  <main>
    <gf-header />
    <router-view />
    <gf-footer />
  </main>
</template>

<script>
import GfFooter from "@/components/GfFooter";
import GfHeader from "@/components/GfHeader";

export default {
  name: "App",
  components: {
    GfHeader,
    GfFooter
  }
};
</script>

<style>
body {
  background-color: rgb(240, 240, 238);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.button-naranja {
  background-color: #e7a61a;
  -webkit-box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.84);
  -moz-box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.84);
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.84);
}
</style>
