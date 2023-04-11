<template>
  <div class="">
    <div class="header-todo">
      <form-modal :edit="editTask" class="my-3" />
      <b-input-group class="search-todo">
        <b-form-input
          placeholder="Search task"
        ></b-form-input>
        <b-input-group-append>
          <b-button
            size="sm"
            text="Button"
            variant="success"
            style="font-weight: bold; color: #fff"
            >Search</b-button
          >
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-table
      ref="selectableTable"
      style="background-color: #eee; border-radius: 8px; overflow: hidden"
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      selectable
      @row-selected="onRowSelected"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(Action)="data">
        <div>
          <b-button
            v-b-modal.modal-prevent-closing
            variant="warning"
            style="font-weight: bold; color: #000"
            @click="clickEdit(data.item)"
          >
            Edit
          </b-button>
          <b-button
            variant="danger"
            style="font-weight: bold; color: #000"
            @click="clickDelete(data.item.id)"
          >
            Delete
          </b-button>
        </div>
      </template>
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
    <p>
      <b-button
        size="sm"
        class="p-2"
        variant="primary"
        style="font-weight: bold; color: #fff"
        @click="selectAllRows"
        >Select all</b-button
      >
      <b-button
        size="sm"
        class="p-2 ml-3"
        variant="info"
        style="font-weight: bold; color: #fff"
        @click="clearSelected"
        >Clear selected</b-button
      >
      <b-button
        size="sm"
        class="p-2 ml-3"
        variant="dark"
        style="font-weight: bold; color: #fff"
        @click="clickDeleteAll"
        >Clear All Selected</b-button
      >
    </p>
    <p>
      Selected Rows:<br />
      {{ selected }}
    </p>
  </div>
</template>

<script>
import FormModal from '@/components/TodoAppImprove/FormModal.vue'
export default {
  components: { FormModal },
  data() {
    return {
      editTask: {},
      fields: [],
      items: [],
      selectMode: 'multi',
      selected: [],
    }
  },

  created() {
    this.fields = this.$store.getters.title
    this.items = this.$store.getters.tasks
  },

  methods: {
    onRowSelected(items) {
      this.selected = items
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected()
    },
    clickDelete(id) {
      // eslint-disable-next-line no-console
      console.log(id)
      this.$store.dispatch('deleteTask', id)
    },
    clickDeleteAll() {
      // eslint-disable-next-line no-console
      console.log(this.selected)
      this.$store.dispatch('deleteSelected', this.selected)
    },
    clickEdit(itemEdit) {
      this.editTask = itemEdit
      // eslint-disable-next-line no-console
      console.log(this.editTask)
    },
  },
}
</script>

<style scoped>
.header-todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-todo {
  max-width: 500px;
}
</style>
