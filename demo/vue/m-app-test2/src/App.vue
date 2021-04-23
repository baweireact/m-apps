<template>
  <div id="app">
    <a-config-provider :locale="zhCN">
      <router-view/>
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN.js'
export default {
  data() {
    return {
      zhCN
    }
  },
}

</script>

