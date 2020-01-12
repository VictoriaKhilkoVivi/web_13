<template>
    <router-link to="/Forma"><button class="butt3">ADD CONTACTS</button></router-link>
</template>

<script>
import Forma from '@/views/Forma'
export default {
  name: 'app',
  components: {
    Forma
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.butt3 {
    text-transform: uppercase;
    width: 190px;
    margin: 10px auto;
    color: #fff;
    background-color: #f21f02;
    text-align: center;
    border-radius: 30px;
    border: none;
    height: 33px;
}
.butt3 span {
    line-height: 1em;
    font-size: 14px;
}
</style>
