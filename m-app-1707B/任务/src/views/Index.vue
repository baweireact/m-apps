<template>
  <div>
    <div>
      <router-link to="/index/home" class="m-nav-item">首页</router-link>
      <router-link to="/index/my_book" class="m-nav-item">书包</router-link>
      <router-link to="/index/news" class="m-nav-item">新闻</router-link>
      <router-link to="/index/task" class="m-nav-item">任务</router-link>
    </div>
    <transition name="m-slide">
      <router-view class="m-router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      console.log(to);
    }
  },
  methods: {

  }
};
</script>

<style>
.m-router {
  position: absolute;
  width: 100%;
}

/* 新路由动画 */
.m-slide-enter-active {
  animation: new-router 1s ease-in-out;
}

/* 老路由动画 */
.m-slide-leave-active {
  animation: old-router 1s ease-in-out;
}

@keyframes new-router {
  0% {
    transform: scale(2, 2) rotate(-5deg) translate(100%, 0);
    opacity: 0;
  }
  50% {
    color: red;
  }
  100% {

  }
}

@keyframes old-router {
  0% {
    transform: translate(100px)
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>