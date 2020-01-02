<template>
  <div>
    <div>
      <swiper v-if="bannerList.length > 0" :options="options">
        <swiper-slide v-for="(item,index) in bannerList" :key="index">
          <img :src="item" class="m-banner-img"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  data() {
    return {
      bannerList: [],
      options: {
        loop: true,
        effect: 'cube', //slide, fade,cube, coverflow, flip
        speed: 1000,
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  mounted() {
    Api.getBanner().then(res => {
      if (res.code === 200) {
        this.bannerList = res.data;
      }
    });
  }
};
</script>

<style>
</style>