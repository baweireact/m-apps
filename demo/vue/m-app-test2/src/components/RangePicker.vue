<template>
  <a-range-picker
    :value="defaultValue"
    @change="change"
    :showTime="showTime"
  ></a-range-picker>
</template>

<script>
import moment from "moment"
export default {
  props: {
    value: {
      type: Array,
    },
  },
  data() {
    let date = this.value
    if (date && date.length)
      date = [moment(this.value[0]), moment(this.value[1])]
    return {
      defaultValue: date,
      showTime: {
        format: "HH:mm:ss",
        defaultValue: [
          moment("00:00:00", "HH:mm:ss"),
          moment("23:59:59", "HH:mm:ss"),
        ],
      },
    }
  },
  methods: {
    change(val) {
      let date = val
      if (val.length)
        date = [moment(val[0]).valueOf(), moment(val[1]).valueOf()]
      this.$emit("change", date)
      this.$emit("input", date)
    },
  },
  watch: {
    value(val) {
      if (val && val.length) {
        this.defaultValue = [moment(val[0]), moment(val[1])]
      }
    },
  },
}
</script>

<style scoped></style>
