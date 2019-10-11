<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" :checked="task.done" @chenge="toggleTaskStatus(task)">
        {{ task.name }}
      </li>
    </ul>

    <form @submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="新しいタスク">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTaskName: ''
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
  methods: {
    //タスクを追加
    addTask () {
      this.$store.commit('addTask', {
        name: this.newTaskName
      })
      this.newTaskName = ''
    },
    //タスクの完了状態を変更
    toggleTaskStatus (task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    }
  }
}
</script>
