<template>
  <div>
    <div v-for="(weekItem, weekIndex) in weekList" :key="weekItem.id">
      <el-checkbox
        v-model="weekItem.checked"
        :indeterminate="weekItem.isIndeterminate"
        @change="handleWeek(weekIndex, $event)"
      >{{weekItem.week}}</el-checkbox>
      <span
        v-for="(hourItem, hourIndex) in weekItem.hours"
        :key="hourItem.id"
        class="m-hour-item"
        :class="{active: hourItem.checked}"
        @click="handleHour(weekIndex, hourIndex)"
      >{{hourItem.hour}}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    weekList() {
      return this.$store.state.weekList;
    }
  },
  methods: {
    handleWeek(weekIndex, checked) {
      let week = this.weekList[weekIndex];
      let hours = week.hours;
      week.checked = checked;
      hours.forEach(item => {
        item.checked = checked;
      });
      let count = hours.filter(item => item.checked).length;
      week.isIndeterminate = count > 0 && count < hours.length;
      this.$store.commit({
        type: "setState",
        key: "weekList",
        value: this.weekList
      });
    },
    handleHour(weekIndex, hourIndex) {
      let week = this.weekList[weekIndex];
      let hours = week.hours;
      hours[hourIndex].checked = !hours[hourIndex].checked;
      week.checked = hours.every(item => item.checked);
      let count = hours.filter(item => item.checked).length;
      week.isIndeterminate = count > 0 && count < hours.length;
      this.$store.commit({
        type: "setState",
        key: "weekList",
        value: this.weekList
      });
    }
  },
  updated() {
    this.$store.dispatch({ type: "updateWeekList" });
  },
  mounted() {
    this.$store.dispatch({ type: "getWeekList" });
  }
};
</script>

<style>
</style>