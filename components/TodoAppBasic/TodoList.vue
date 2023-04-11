<template>
  <div class="container">
    <h2 class="text-center my-5">My Todo List Basic</h2>
    <task-modal class="my-4" :edit="editTask" @submit="clickAdd" />

    <table class="table">
      <thead>
        <tr class="text-center" style="background-color: #ccc">
          <th>ID</th>
          <th>Name</th>
          <th class="text-left">Status</th>
          <th class="text-left">Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id" class="text-center">
          <th>{{ task.id }}</th>
          <th>{{ task.name }}</th>
          <th class="text-left">{{ task.status }}</th>
          <th class="text-left" style="word-break: break-word; max-width: 500px;">
            {{ task.description }}
          </th>
          <th>
            <b-button
              v-b-modal.modal-prevent-closing
              variant="warning"
              @click="clickEdit(task)"
            >
              Edit
            </b-button>
            <b-button variant="danger" @click="clickDelete(task)"
              >Delete</b-button
            >
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
      };
      // eslint-disable-next-line array-callback-return
      this.tasks?.map((el, index) => {
        localStorage.setItem(`name${index}`, el.name)
        localStorage.setItem(`status${index}`, el.status)
        localStorage.setItem(`description${index}`, el.description)
      });
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
  border: 1px solid #ccc;
  border-collapse: collapse;
}
</style>
