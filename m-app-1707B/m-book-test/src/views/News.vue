<template>
  <div class="m-news">
    <div class="m-news-search">
      <input type="text" placeholder="请输入关键词" v-model="search" @keyup.enter="handleSearch" />
    </div>
    <div class="m-news-content" @scroll="handleScroll">
      <div id="top"></div>
      
      <div v-for="item in newsList" :key="item.id" class="m-news-item">
        <img :src="item.image" />
        <div class="m-news-info">{{item.name}}</div>
      </div>
      <div class="m-end">{{end}}</div>
      <!-- <button @click="handleTop" class="m-top">↑</button> -->
      <a href="#top" class="m-top">顶部</a>
    </div>
  </div>
</template>

<script>
import Api from "../api";

let isUpdated = true;
export default {
  data() {
    return {
      newsList: [],
      page: 1,
      end: "",
      search: ''
    };
  },
  methods: {
    handleScroll(e) {
      let { scrollTop, clientHeight, scrollHeight } = e.target;
      if (
        scrollTop + clientHeight + 200 > scrollHeight &&
        isUpdated &&
        this.end === ""
      ) {
        console.log("快到底了");
        this.page++;
        isUpdated = false;
        Api.news(`?page=${this.page}&size=10&search=${this.search}`).then(res => {
          if (res.data.length < 10) {
            this.end = "我是有底线的~";
          }
          this.newsList = [...this.newsList, ...res.data];
        });
      }
    },
    handleSearch() {
      Api.news(`?page=1&size=10&search=${this.search}`).then(res => {
        if (res.code === 200) {
          this.newsList = res.data;
          this.end = ''
          this.page = 1
        }
      });
    },
    handleTop() {
      window.document.getElementById('top').scrollIntoView(true)
    }
  },
  updated() {
    isUpdated = true;
  },
  mounted() {
    Api.news("?page=1&size=10").then(res => {
      if (res.code === 200) {
        this.newsList = res.data;
      }
    });
  }
};
</script>

<style>
</style>