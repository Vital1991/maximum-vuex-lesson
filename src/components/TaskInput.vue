<template>
  <div class="task-input">
    <input v-model="task" type="text">
    <button @click="onClick">Добавить</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskInput',
  data() {
    return {
      task: '',
    };
  },
  methods: {
    ...mapActions(['addTask']),
    onClick() {
      this.addTask(this.task);
      this.task = '';
    },
  },
};
</script>
