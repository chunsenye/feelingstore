<template>
<div class="main">
     <h2>sad</h2>
     <ul>
         <li>泪水流量: {{tear}}/ml*s <label @click="tear++">+</label><label @click="tear--">-</label> </li>
         <li>脸扭曲度: {{face}}ugly <label @click="face++">+</label><label @click="face--">-</label> </li>
         <li>哭声分贝: {{voice}}dB <label @click="voice++">+</label><label @click="voice--">-</label> </li>
         <li>狂暴程度: 
             <select>
                <option v-for="item in aaa" :key="item">{{item}}</option>
             </select>
         </li>
         <br>
         <li>总价:  {{tear*10+face*8+voice*7}}元  <router-link to="/Buy"><label class="sum"> 购买</label></router-link></li>
     </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      tear: 10,
      face: 4,
      voice: 70,
      aaa: ["扔东西", "打别人", "打自己", "扔自己"]
    };
  }
};
</script>
<style scoped>
.main {
  font-size: 0.2rem;
}
h2 {
  margin: 0;
  font-size: 0.3rem;
}
ul {
  list-style: none;
  text-align: left;
  margin: 0.2rem auto;
  width: 2.6rem;
  user-select: none;
}
ul li {
  margin-bottom: 0.2rem;
}
label {
  margin: 0 0.1rem;
  color: red;
  background: #aaa;
  padding: 0 0.1rem;
  font-size: 0.2rem;
  border-radius: 0.1rem;
}
select{font-size: 0.16rem;height: 0.3rem;width: 1rem;}
.sum{
    display: block;
    color: #fff;
    width: 0.4rem;
    height: 0.3rem;
    float: right;
    margin-right: 0.3rem;
}
.sum:hover{
  background: rgb(128, 186, 212);
}
</style>
