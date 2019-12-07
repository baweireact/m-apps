<template>
  <div class="m-news-wrap">
    <div class="m-news-serarch">
      <input type="text" placeholder="请输入关键词" v-model="search" @keyup.enter="handleSearch" />
    </div>
    <div class="m-news">
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="scroller">
        <div v-for="item in list" :key="item.id" class="m-news-item">
          <img :src="item.image" />
          <div class="m-news-info">{{item.name}}</div>
        </div>
      </scroller>
    </div>
    <button @click="handleTop" class="m-top">↑</button>
  </div>
</template>

<script>
import Api from "../api";

export default {
  data() {
    return {
      list: [],
      page: 0,
      search: ""
    };
  },
  methods: {
    refresh(done) {
      Api.news(`?page=1&size=10&search=${this.search}`).then(res => {
        if (res.code === 200) {
          this.list = res.data;
          this.page = 1;
          this.end = "";
          done()
        }
      });
    },
    infinite(done) {
        this.page++;
        Api.news(`?page=${this.page}&size=10&search=${this.search}`).then(res => {
          if (res.code === 200) {
            this.list = [...this.list, ...res.data];
            if (res.data.length < 10) {
              done(true)
            } else {
              done()
            }
          }
        });
    },
    handleSearch() {
      Api.news(`?page=1&size=10&search=${this.search}`).then(res => {
        if (res.code === 200) {
          this.list = res.data;
          this.page = 1;
        }
      });
    },
    handleTop() {
      this.$refs.scroller.scrollTo(0,0, true)
    }
  }
};
</script>

<style>
</style>