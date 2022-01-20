<template>
  <div id="nav">
    <div class="flex center">
      <Logo />
      <router-link to="/">Ciao</router-link> |
      <router-link to="/config">Interazione PDF con Webcam</router-link> |
      <router-link to="/gulpease">Strumenti per l'accessibilità</router-link>
    </div>
    <div>
      <button><a href="#" download>Download tesi</a></button>
    </div>
  </div>
  <router-view />
</template>

<script>
import Logo from "./components/Logo.vue";

export default {
  name: "App",
  components: { Logo },
  data: function () {
    return {};
  },
  methods: { },
};
</script>

<style>
#app {
  /* background: linear-gradient(90deg, rgba(238, 174, 202, 1) 0%, rgb(172, 211, 255) 100%); */
  height: 100vh;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(70, 70, 70, 0.1);
  padding: 30px;
  position: fixed;
  z-index: 10;
  text-align: left;
}

#nav a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--light-blue);
  letter-spacing: 2px;
}

#nav a.router-link-exact-active {
  color: #444;
}

#nav button a {
  color: white;
}

</style>
