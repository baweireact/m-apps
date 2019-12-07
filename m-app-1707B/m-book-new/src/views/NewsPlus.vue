<template>
  <div class="m-news-wrap">
    <div class="m-news-serarch">
      <input type="text" placeholder="请输入关键词" v-model="search" @keyup.enter="handleSearch" />
    </div>
    <div class="m-news js-news-plus" v-infinite-scroll="handleScroll">
      <div v-for="item in list" :key="item.id" class="m-news-item">
        <img :src="item.image" class="m-news-img" />
        <div class="m-news-info">{{item.name}}</div>
      </div>
      <div class="m-end">{{end}}</div>
    </div>
    <el-backtop target=".js-news-plus"></el-backtop>
  </div>
</template>

<script>
import Api from "../api";

let isUpdated = true;
export default {
  data() {
    return {
      list: [],
      page: 0,
      search: "",
      end: ""
    };
  },
  methods: {
    handleScroll() {
      if (isUpdated && this.end === "") {
        this.page++;
        isUpdated = false;
        Api.news(`?page=${this.page}&size=10&search=${this.search}`).then(
          res => {
            if (res.code === 200) {
              this.list = [...this.list, ...res.data];
              if (res.data.length < 10) {
                this.end = "我是有底线的~";
              }
            }
          }
        );
      }
    },
    handleSearch() {
      document.getElementById("top").scrollIntoView(true);
      Api.news(`?page=1&size=10&search=${this.search}`).then(res => {
        if (res.code === 200) {
          this.list = res.data;
          this.page = 1;
          this.end = "";
        }
      });
    }
  },
  updated() {
    isUpdated = true;
  }
};
</script>

<style>
</style>