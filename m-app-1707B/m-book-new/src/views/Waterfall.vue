<template>
  <div class="m-news-wrap">
    <div class="m-news-serarch">
      <input type="text" placeholder="请输入关键词" v-model="search" @keyup.enter="handleSearch" />
    </div>
    <div class="m-waterfall js-waterfall" @scroll="handleScroll">
      <div id="m-waterfall-top"></div>
      <div>
        <div v-for="item in list" :key="item.id" class="m-waterfall-item-wrap js-waterfall-item-wrap">
          <div class="m-waterfall-item">
            <img :src="item.image" class="m-waterfall-img" :height="imageHeight(item.image)" />
            <div class="m-waterfall-info">{{item.id}} {{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="m-waterfall-end">{{end}}</div>
    </div>
    <el-backtop target=".js-waterfall"></el-backtop>
  </div>
</template>

<script>
import Api from "../api";

let isUpdated = true;
export default {
  data() {
    return {
      list: [],
      page: 1,
      search: "",
      end: ""
    };
  },
  methods: {
    handleScroll(e) {
      console.log(
        e.target.clientHeight,
        e.target.scrollTop,
        e.target.scrollHeight
      );
      let { scrollTop, clientHeight, scrollHeight } = e.target;
      if (
        scrollTop + clientHeight + 200 > scrollHeight &&
        isUpdated &&
        this.end === ""
      ) {
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
      document.getElementById("m-waterfall-top").scrollIntoView(true);
      Api.news(`?page=1&size=10&search=${this.search}`).then(res => {
        if (res.code === 200) {
          this.list = res.data;
          this.page = 1;
          this.end = "";
        }
      });
    },
    waterFall() {
      let items = document.getElementsByClassName("js-waterfall-item-wrap");
      items = Array.from(items);
      items[0].style.top = 0; //第一个元素
      items[0].style.left = 0;
      items[1].style.top = 0; //第二个元素
      items[1].style.left = "50%";

      let arr = [];
      arr.push(items[0].offsetHeight); //第一个元素
      arr.push(items[1].offsetHeight); //第二个元素
      for (let i = 2; i < items.length; i++) {
        let minHeight = arr[0];
        let index = 0;
        for (let j = 0; j < arr.length; j++) {
          if (minHeight > arr[j]) {
            minHeight = arr[j];
            index = j;
          }
        }
        items[i].style.top = arr[index] + "px";
        items[i].style.left = items[index].offsetLeft + "px";
        arr[index] = arr[index] + items[i].offsetHeight;
      }
    },
    imageHeight(url) {
      let size = url.slice(url.lastIndexOf("/") + 1).split("x");
      //真实宽度 / 真实高度 = 原始宽度  / 原始高度
      //真实高度 = 真实宽度 / 原始宽度 * 原始高度
      let height =
        ((window.document.body.clientWidth / 2 - 20) / size[0]) * size[1];
      return height;
    }
  },
  updated() {
    isUpdated = true;
    this.waterFall();
  },
  mounted() {
    Api.news("?page=1&size=10").then(res => {
      if (res.code === 200) {
        this.list = res.data;
      }
    });
  }
};
</script>

<style>
</style>