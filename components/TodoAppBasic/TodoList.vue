<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div class="container">
    <h2 class="text-center my-5">{{ $t('todo_basic_header') }}</h2>
    <task-modal class="my-4 btn-todo" :edit="editTask" @submit="clickAdd" />

    <table class="table">
      <thead>
        <tr class="text-center" style="background-color: #ccc">
          <th>ID</th>
          <th>{{ $t('name') }}</th>
          <th class="text-left">{{ $t('status') }}</th>
          <th class="text-left">{{ $t('description') }}</th>
          <th>{{ $t('action') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id" class="text-center">
          <th>{{ task.id }}</th>
          <th>{{ task.name }}</th>
          <th class="text-left">{{ task.status }}</th>
          <th
            class="text-left"
            style="word-break: break-word; max-width: 500px"
          >
            {{ task.description }}
          </th>
          <th>
            <b-button
              v-b-modal.modal-prevent-closing
              class="btn-todo"
              variant="warning"
              @click="clickEdit(task)"
            >
              {{ $t('edit_btn') }}
            </b-button>
            <b-button
              class="btn-todo"
              variant="danger"
              @click="clickDelete(task)"
            >
              {{ $t('delete_btn') }}
            </b-button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TaskModal from '@/components/TodoAppBasic/TaskModal.vue'

export default {
  components: {
    TaskModal,
  },

  data() {
    return {
      searchText: '',
      editTask: {},
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
    }
  },

  methods: {
    clickAdd(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id)
      if (this.tasks.name === 0) return
      if (index >= 0) {
        this.tasks.splice(index, 1, task)
      } else {
        this.tasks.push(task)
      }
      // eslint-disable-next-line array-callback-return
      this.tasks?.map((el, index) => {
        localStorage.setItem(`name${index}`, el.name)
        localStorage.setItem(`status${index}`, el.status)
        localStorage.setItem(`description${index}`, el.description)
      })
    },

    clickDelete(taskDelete) {
      // eslint-disable-next-line no-console
      console.log(taskDelete)

      for (let i = 0; i < this.tasks.length; i++) {
        if (taskDelete.id === this.tasks[i].id) {
          this.tasks.splice(i, 1)
        }
      }
    },

    clickEdit(taskEdit) {
      this.editTask = taskEdit
      // eslint-disable-next-line no-console
      console.log(taskEdit)
    },
  },
}
</script>

<style scoped>
.table {
  max-width: 100%;
}

table,
th {
  border: 1px solid #eee;
  border-collapse: collapse;
}

.btn-todo {
  color: #000;
  font-weight: bold;
}
</style>
