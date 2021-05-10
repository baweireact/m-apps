<template>
  <input :value="defaultValue" @input="handleInput" placeholder="请输入"/>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      defaultValue: this.value
    }
  },
  methods: {
    handleInput(e) {
      this.defaultValue = e.target.value
      this.$emit('change', this.defaultValue)
      this.$emit('input', this.defaultValue)
    }
  },
  watch: {
    value() {
      this.defaultValue= this.value
    }
  }
}
</script>

<style>

</style>