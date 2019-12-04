<template>
  <div class="m-work" :class="workType">
    {{work}}
  </div>
</template>

<script>
export default {
  props: ["work", "workType"]
}
</script>

<style>

</style>