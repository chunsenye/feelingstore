<template>
  <div class="hello">
    <h3>feelings store</h3>
    <router-link to="/Sad"><sad></sad></router-link>
    <router-link to="/Happy"><happy></happy></router-link>
  </div>
</template>

<script>
  import Sad from "./Sad";
  import Happy from "./Happy";
  import VueRouter from 'vue-router'
  export default {
    name: "Home",
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    },
    components: {
      Sad: Sad,
      Happy: Happy
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
h3,img ,ul{  margin: 0;  padding: 0;}
ul {
  font-size: 0.2rem;
  list-style: none;
}
ul li {
  float: left;
  width: 1.6rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background: #aaa;
  text-align: center;
  box-shadow: 0 0 0.1rem 0.01rem black inset;
  border-radius: 0.03rem;
}
ul li:hover {
  background: #fff;
}
.banner img {
  width: 6.4rem;
  margin-bottom: 0.5rem;
}
h3{
  font-size: 0.4rem;
  margin: 0.2rem 0;
}
</style>
