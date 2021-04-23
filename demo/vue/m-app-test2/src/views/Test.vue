<template>
  <a-range-picker
    :showTime="showTime"
    @change="onChange"
    @ok="onOk"
  ></a-range-picker>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      showTime: {
        format: "HH:mm:ss",
        defaultValue: [
          moment("00:00:00", "HH:mm:ss"),
          moment("23:59:59", "HH:mm:ss"),
        ],
      },
    };
  },
  methods: {
    onChange(value, dateString) {
      console.log("Selected Time: ", value);
      console.log("Formatted Selected Time: ", dateString);
    },
    onOk(value) {
      console.log("onOk: ", value);
      console.log(value.map((item) => item.format("YYYY-MM-DD HH:mm:ss")));
    },
  },
};
</script>

<style scoped>
</style>