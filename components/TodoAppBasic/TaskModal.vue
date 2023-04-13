<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing class="btn-todo">{{
      $t('add_btn')
    }}</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="My Todo List"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Task Name">
          <b-form-input
            id="name-input"
            v-model="list.name"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Status:">
          <b-form-select
            id="status-select"
            v-model="list.status"
            :options="statusOptions"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Description:">
          <b-form-textarea
            id="description-textarea"
            v-model="list.description"
          ></b-form-textarea>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    edit: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      list: {
        id: Math.floor(Math.random() * 10000),
        name: '',
        status: '',
        description: '',
      },
      name: '',
      nameState: null,
      submittedNames: [],
      statusOptions: ['New', 'In-progress', 'Done'],
    }
  },

  watch: {
    edit() {
      if (this.edit) {
        this.list = Object.assign({}, this.edit)
      } else {
        this.list = {}
      }
    },
  },

  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvent) {
      this.$emit('submit', this.list)
      // eslint-disable-next-line no-console
      console.log(this.list)

      this.list = {
        id: Math.floor(Math.random() * 10000),
        name: '',
        status: '',
        description: '',
      }
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
  },
}
</script>

<style>
.btn-todo {
  color: #fff;
  font-weight: bold;
}
</style>
