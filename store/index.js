export const state = () => ({
  title: [
    'selected',
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
    { key: 'description', label: 'Description' },
    'Action',
  ],

  tasks: [
    {
      id: 1,
      name: 'Task 1',
      status: 'New',
      description: 'Task 1 description',
    },
    {
      id: 2,
      name: 'Task 2',
      status: 'Im-progress',
      description: 'Task 2 description',
    },
    {
      id: 3,
      name: 'Task 3',
      status: 'Done',
      description: 'Task 3 description',
    },
  ],
})

export const mutations = {
  clickAdd(state, item) {
    const index = state.tasks.findIndex((task) => task.id === item.id)
    if (index >= 0) {
      state.tasks.splice(index, 1, item)
    } else {
      state.tasks.push(item)
    }
    // eslint-disable-next-line no-useless-return
    return
  },

  deleteTask(state, id) {
    for (let i = 0; i < state.tasks.length; i++) {
      if (id === state.tasks[i].id) {
        state.tasks.splice(i, 1)
      }
    }
  },

  deleteSelected(state, item) {
    for (let i = 0; i < state.tasks.length; i++) {
      for (let j = 0; j < item.length; j++) {
        if (item[j].id === state.tasks[i].id) {
          state.tasks.splice(i, 1)
        }
      }
    }
  },
}

export const getters = {
  title: (state) => {
    return state.title
  },

  tasks: (state) => {
    return state.tasks
  },

  listId: (state) => {
    return state.tasks.map((t) => t.id)
  },
}

export const actions = {
  clickAdd({ commit }, data) {
    commit('clickAdd', data)
  },

  deleteTask({ commit }, data) {
    commit('deleteTask', data)
  },

  deleteSelected({ commit }, data) {
    commit('deleteSelected', data)
  },
}
