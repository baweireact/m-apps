<template>
  <div>
    <draggable v-model="myArray" group="people" @end="handleEnd">
      <transition-group type="transition" :name="'flip-list'">
      <div
        v-for="(element, index) in myArray"
        :key="element.id"
        class="m-drag-item"
      >
        {{ index }}:{{ element.name }},{{element.order}}
      </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
//https://github.com/SortableJS/Vue.Draggable
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      myArray: [
        {
          name: 'vue.draggable',
          order: 1,
        },
        {
          name: 'draggable',
          order: 2,
        },
        {
          name: 'component',
          order: 3,
        },
        {
          name: 'for',
          order: 4,
        },
        {
          name: 'vue.js 2.0',
          order: 5,
        },
        {
          name: 'based',
          order: 6,
        },
        {
          name: 'on',
          order: 7,
        },
        {
          name: 'Sortablejs',
          order: 8,
        },
      ],
    }
  },
  components: {
    draggable,
  },
  methods: {
    handleEnd(e) {
      console.log('结束', e, this.myArray)
    },
  },
}
</script>

<style>
.m-drag-item {
  border: 1px solid #ddd;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
}
</style>
