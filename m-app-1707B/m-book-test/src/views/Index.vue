<template>
  <div>
    <div>
      <router-link to="/index/home" class="m-nav-item">首页</router-link>
      <router-link to="/index/my_book" class="m-nav-item">书包</router-link>
    </div>
    <transition name="fade">
      <router-view class="m-router"/>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.m-router{position: absolute;width: 100%;}

.fade-enter-active {
  transition: all 0.5s linear;
  /* animation: bounce-in 2s linear; */
}
.fade-enter{
  transform: translateX(100%)
}

.fade-leave-active {
  transition: all 0.5s linear;
}
.fade-leave-to{
  transform: translateX(-100%)
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>