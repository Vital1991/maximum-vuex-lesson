<template>
  <ul class="list">
    <li v-for="(task, i) in list" :key="i">{{ task }}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapState(['list']),
  },
};
</script>
