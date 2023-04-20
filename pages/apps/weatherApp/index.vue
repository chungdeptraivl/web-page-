<template>
  <div>
    <h2 class="text-center my-3 font-weight-bold">
      Thiết Bị Tính Chiều Cao Của Bạn
    </h2>
    <b-form class="form-main" @submit.stop.prevent="onSubmit">
      <b-form-group id="example-input-group-1" label-for="example-input-1">
        <label class="text-white font-weight-bold">Chiều cao của bạn</label>
        <b-form-input
          id="example-input-1"
          v-model="$v.form.height.$model"
          height="example-input-1"
          :state="validateState('height')"
          aria-describedby="input-1-live-feedback"
          type="number"
          :min="minValue"
          :max="maxValue"
        ></b-form-input>

        <!-- <b-form-invalid-feedback id="input-1-live-feedback"
          >Chiều cao phải trên 10cm</b-form-invalid-feedback
        > -->
        <div v-if="!$v.form.height.$pending && $v.form.height.$error">
          <div v-if="$v.form.height.$error.required">
            Chiều cao không được để trống
          </div>
          <div v-if="$v.form.height.$error.minValue">
            Chiều cao phải lớn hơn 0
          </div>
          <div v-if="$v.form.height.$error.maxValue">
            Chiều cao phải nhỏ hơn 100
          </div>
        </div>
      </b-form-group>

      <b-form-group id="example-input-group-2" label-for="example-input-2">
        <label class="text-white font-weight-bold">Giới tính của bạn</label>
        <b-form-select
          id="example-input-2"
          v-model="$v.form.Gioitinh.$model"
          height="example-input-2"
          :options="Gioitinh"
          :state="validateState('Gioitinh')"
          aria-describedby="input-2-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-2-live-feedback"
          >Nhập giới tính mới tính được</b-form-invalid-feedback
        >
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minValue, maxValue } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      Gioitinh: [
        { value: null, text: 'Giới tính của bạn là ....' },
        { value: 'Nam', text: 'Nam' },
        { value: 'Nữ', text: 'Nữ' },
      ],
      form: {
        height: null,
        Gioitinh: null,
        minValue: 10,
        maxValue: 230,
      },
    }
  },
  validations: {
    form: {
      Gioitinh: {
        required,
      },
      height: {
        required,
        minValue: minValue(10),
        maxValue: maxValue(230),
      },
    },
  },
  methods: {
    validateState(height) {
      const { $dirty, $error } = this.$v.form[height]
      return $dirty ? !$error : null
    },
    resetForm() {
      this.form = {
        height: null,
        Gioitinh: null,
      }

      this.$nextTick(() => {
        this.$v.$reset()
      })
    },
    onSubmit() {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }

      alert(`Chiều cao của bạn là ${this.$v.form.height.$model}cm`)
      // eslint-disable-next-line no-console
      console.log(this.$v.form.height.$model)
    },
  },
}
</script>

<style>
.form-main {
  width: 500px;
  margin: auto;
  margin-top: 8%;
  background-color: rgb(60, 66, 72);
  padding: 30px 20px;
  border-radius: 10px;
}
</style>
