import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        done: true
      }
    ],
    nextTaskId: 3
  },
  mutations: {
    //タスクを追加
    addTask (state, { name }) {
      state.task.push({
        id: state.nextTaskId,
        name,
        done: false
      })

      state.nextTaskId++
    },
    //タスクの完了状態を変更
    toggleTaskStatus (state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })

      filtered.forEach(task => {
        task.done = !task.done
      })
    }
  }
})

export default store