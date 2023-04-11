<template>
  <h1>这是登录页</h1>
  <Welcome  msg="job"/>
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
import Welcome from './Welcome.vue'
export default{
  name:'login',
  components:{Welcome},
  methods: {
    goHome(){
      this.$router.push('welcome')
      console.log("111", this);
    }
  }
}
//钩子函数实现
// import {useRouter} from 'vue-router'
// const router = useRouter()
// const goHome =() => {
//   router.push('/welcome')
// }
</script>
<style scoped>

</style>