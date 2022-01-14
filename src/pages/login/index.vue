<template>
  <div>
    登录页面
    <button @click="goHome">跳转home页面</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>