<template>
  <div class="">
    <div class="header-todo">
      <form-modal :edit="editTask" class="my-3" />
      <b-form>
        <b-input-group class="search-todo">
          <b-form-input
            v-model="searchValue"
            placeholder="Search task"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              size="sm"
              text="Button"
              variant="success"
              style="font-weight: bold; color: #fff"
              @click="searchBtn"
              >{{ $t('search_btn') }}</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-form>
      <div>
        <b-form-select
          v-model="sortOption"
          :options="statusOptions"
          selected-variant="primary"
          class="form-control"
          @change="onSortOptionChanged"
        ></b-form-select>
      </div>
    </div>
    <b-table
      ref="selectableTable"
      class="tableTodoList"
      :items="searchResults.length > 0 ? searchResults : items"
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
            {{ $t('edit_btn') }}
          </b-button>
          <b-button
            variant="danger"
            style="font-weight: bold; color: #000"
            @click="clickDelete(data.item.id)"
          >
            {{ $t('delete_btn') }}
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
        >{{ $t('select_all_btn') }}</b-button
      >
      <b-button
        size="sm"
        class="p-2 ml-3"
        variant="info"
        style="font-weight: bold; color: #fff"
        @click="clearSelected"
        >{{ $t('clear_selected_btn') }}</b-button
      >
      <b-button
        size="sm"
        class="p-2 ml-3"
        variant="secondary"
        style="font-weight: bold; color: #fff"
        @click="clickDeleteAll"
        >{{ $t('clear_all_selected_btn') }}</b-button
      >
      <b-button
        size="sm"
        class="p-2 ml-3"
        variant="dark"
        style="font-weight: bold; color: #fff"
        @click="backTaskTable"
        >{{ $t('back_task_table') }}</b-button
      >
    </p>
    <!-- <p>
      Selected Rows:<br />
      {{ selected }}
    </p> -->
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
      searchValue: '',
      searchResults: [],
      sortOption: null,
      statusOptions: [
        { value: null, text: 'Sort By Status' },
        'New',
        'In-progress',
        'Done',
      ],
    }
  },

  watch: {
    searchValue(newValue) {
      // eslint-disable-next-line no-console
      console.log(newValue)
      const results = this.items.filter((item) => {
        if (item.name.includes(newValue)) {
          return item
        }
        return results
      })
      // eslint-disable-next-line no-console
      console.log(results)
    },
    sortOption(newValue) {
      // eslint-disable-next-line no-console
      console.log(newValue)
      const results = this.items.filter((item) => {
        if (item.status.includes(newValue)) {
          return item
        }
        return results
      })
      // eslint-disable-next-line no-console
      console.log(results)
    },
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
    validateInput(event) {},
    clickDelete(id) {
      // const searchIndex = this.searchResults.findIndex((item) => item.id === id)
      // if (searchIndex > -1) {
      //   this.searchResults.splice(searchIndex, 1)
      // } else {
      //   const itemIndex = this.items.findIndex((item) => item.id === id)
      //   if (itemIndex > -1) {
      //     this.items.splice(itemIndex, 1)
      //   }
      // }
      // eslint-disable-next-line no-console
      console.log(id)
      this.$store.dispatch('deleteTask', id)
    },
    clickDeleteAll() {
      // if (this.searchResults.length > 0) {
      //   this.searchResults.splice(0, this.searchResults.length)
      // } else {
      //   this.items.splice(0, this.items.length)
      // }
      // eslint-disable-next-line no-console
      console.log(this.selected)
      this.$store.dispatch('deleteSelected', this.selected)
    },
    clickEdit(itemEdit) {
      this.editTask = itemEdit
      // eslint-disable-next-line no-console
      console.log(this.editTask)
    },
    backTaskTable() {
      this.searchResults = []
      this.searchValue = ''
      this.sortOption = null
    },
    searchBtn() {
      const results = this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.searchValue.toLowerCase())
      })
      this.searchResults = results
      // eslint-disable-next-line no-console
      console.log(this.searchResults)
      this.searchValue = ''
    },
    onSortOptionChanged() {
      const results = this.items.filter((item) => {
        return item.status.includes(this.sortOption)
      })
      this.searchResults = results
      // eslint-disable-next-line no-console
      console.log(this.searchResults)
      // this.sortOption = ''
    },
  },
}
</script>

<style scoped>
.tableTodoList {
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
}

.tableTodoList::last-child {
  text-align: right;
}
.header-todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-todo {
  width: 700px;
}
</style>
