import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        labelIds: [1, 3],
        done: true
      }
    ],
    labels: [
      {
        id: 1,
        text: '買い物'
      },
      {
        id: 2,
        text: '食料'
      },
      {
        id: 3,
        text: '本'
      }
    ],
    nextTaskId: 3,
    nextLabelId: 4,
    //選択されているラベルid
    filter: null
  },
  getters: {
    //タスクをフィルタリング
    filteredTasks (state) {
      if (!state.filter) {
        return state.tasks
      }
      //選択されているラベルのタスクidを返す
      return state.tasks.filter(task => {
        return task.labelIds.indexOf(state.filter) >= 0
      })
    }
  },
  mutations: {
    //タスクを追加
    addTask (state, { name, labelIds }) {
      state.task.push({
        id: state.nextTaskId,
        name,
        labelIds,
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
    },
    //ラベルを追加する
    addLabel (state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      })

      state.nextLabelId++
    },
    //フィルタリング対象のラベルを変更
    changeFilter (state, { filter }) {
      state.filter = filter
    }
  }
})

export default store