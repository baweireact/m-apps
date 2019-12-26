<template>
  <div class="m-address-dialog" :class="{active: visible}" @click="handleCancel">
    <div class="m-address-select">
      <div class="m-address-nav">
        <span
          v-for="(item,index) in address"
          :key="item.key"
          class="m-address-nav-item"
          :class="{active: currentIndex === index}"
          @click.stop="handleNav(item)"
        >{{item.value}}</span>
      </div>
      <div class="m-address-list">
        <div
          v-for="(value, key) in currentList"
          :key="key"
          class="m-address-item"
          :class="{active: address[currentIndex] && address[currentIndex].value === value}"
          @click.stop="handleSelect(value, key)"
        >{{value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import addressData from "../data/addressData";

export default {
  //props: ["visible", "address", "onSelectDone"],
  props: {
    visible: Boolean,
    initAddress: {
      type: Array
      //default: [{ historyIndex: 0, historyKey: 0, key: "select", value: "请选择" }]
    },
    onSelectDone: Function,
    onCancel: Function
  },
  data() {
    return {
      currentIndex: 0,
      currentList: {},
      currentKey: "0",
      historyAddress: []
    };
  },
  watch: {
    visible() {
      if (
        this.initAddress.length === 3 &&
        this.initAddress[2].value != "请选择"
      ) {
        this.currentList = addressData[this.initAddress[2].historyKey];
        this.currentIndex = 2
        this.currentKey = this.initAddress[2].historyKey
      } else {
        this.currentList = addressData[this.currentKey]
      }
      this.historyAddress = this.initAddress
    }
  },
  computed: {
    address() {
      if (this.initAddress.length === 0) {
        return [
          { historyIndex: 0, historyKey: 0, key: "select", value: "请选择" }
        ];
      } else {
        return this.initAddress;
      }
    }
  },
  methods: {
    handleNav(item) {
      this.currentList = addressData[item.historyKey];
      this.currentIndex = item.historyIndex;
      this.currentKey = item.historyKey;
    },
    handleSelect(value, key) {
      let address = [...this.address];
      let historyKey = this.currentKey;
      let historyIndex = this.currentIndex;
      this.currentKey += "," + key;
      this.currentList = addressData[this.currentKey];
      let isLast = false;
      if (this.currentIndex <= 1) {
        if (address[this.currentIndex].value !== value) {
          address[this.currentIndex] = {
            historyIndex,
            historyKey,
            key,
            value
          };
          this.currentIndex++;
          address[this.currentIndex] = {
            historyIndex: this.currentIndex,
            historyKey: this.currentKey,
            key: "select",
            value: "请选择"
          };
          address.length = this.currentIndex + 1;
        } else {
          this.currentIndex++;
        }
      } else {
        address[2].value = value;
        isLast = true;
      }
      this.$emit("onSelectDone", address, isLast);
    },
    handleCancel() {
      this.currentIndex = 0
      this.currentKey = '0'
      this.$emit('onCancel', this.historyAddress)
    }
  },
  mounted() {
    this.currentList = addressData[this.currentKey];
  }
};
</script>

<style>
</style>