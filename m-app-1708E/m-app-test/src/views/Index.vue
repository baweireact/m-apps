<template>
  <div>
    <div>
      <router-link to="/index/home" class="m-nav-item">首页</router-link>
      <router-link to="/index/my_book" class="m-nav-item">书包</router-link>
    </div>
    <transition name="slide">
      <router-view class="m-router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.m-router{position: absolute;width: 100%;}
.slide-enter-active{transition: all 0.5s linear;}
.slide-enter{transform: translateX(100%)}
/* .slide-leave-active{transition: all 1s ease-in-out;}
.slide-leave-to{transform: translateX(-100%)} */

.slide-leave-active{animation: slide 0.5s linear;}

@keyframes slide {
  0% {transform: translateX(0)}
  100% { transform: translateX(-100%)}
}


</style>