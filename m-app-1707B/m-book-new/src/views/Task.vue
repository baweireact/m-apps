<template>
  <div>
    <div class="m-task-header">
      <button @click="handleTask()">全部任务</button>
      <button @click="handleTask('doing')">进行中的任务</button>
      <button @click="handleTask('reject')">强制终止的任务</button>
      <button @click="handleTask('done')">已完成的任务</button>
      <input type="text" placeholder="请输入搜索内容" class="m-task-search" v-model="search" @keyup.enter="handleSearch">
    </div>
    <div v-for="item in taskList" :key="item.id" class="m-task-list-item">
      <Icon :type="item.type" classname="m-task-icon"></Icon>
      <div class="m-task-info">
        <div class="m-task-content">
          {{item.name}}
          <Stars :count="item.stars"></Stars>
        </div>
        <Work :work="item.work"></Work>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon'
import Stars from '../components/Stars'
import Work from '../components/Work'

export default {
  data() {
    return {
      taskList: [],
      search: '',
      type: ''
    }
  },
  components: {
    Icon,
    Stars,
    Work,
  },
  methods: {
    handleTask(type) {
      this.taskList = this.$store.getters.getTaskList(type, this.search)
      this.type = type
      console.log(this.taskList)
    },
    handleSearch() {
      this.taskList = this.$store.getters.getTaskList(this.type, this.search)
      console.log(this.taskList)
    },
    initTaskList() {
      this.taskList = this.$store.state.taskList
    }
  },
  mounted() {
    this.$store.dispatch({ type: 'getTaskList', callback: this.initTaskList})
  }
}
</script>

<style>

</style>