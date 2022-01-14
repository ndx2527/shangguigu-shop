<template>
  <div>
    <!-- <button @click="saveData">按钮</button> -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/components/ListContainer";
import Recommend from "@/components/Recommend";
import Rank from "@/components/Rank";
import Like from "@/components/Like";
import Floor from "@/components/Floor";
import Brand from "@/components/Brand";
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  data() {
    return {
      arr: [1, 2, 3, 5],
    };
  },
  methods: {
    // 页面中存储
    saveData() {
      // 点击按钮进行一些操作，然后保存数据
      this.$store.commit("saveDbSource", this.arr);
      console.log("数据已经保存");
    },
  },
};
</script>

<style>
</style>