<template>
  <div id="app">
    <h1>Todo list</h1>
    <h2>{{numTask}}</h2>
    <TaskInput />
    <List/>
  </div>
</template>

<script>
import List from './components/List.vue';
import TaskInput from './components/TaskInput.vue';

export default {
  name: 'App',
  components: {
    List,
    TaskInput,
  },
};
</script>
