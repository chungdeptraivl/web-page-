<template>
  <div class="container">
    <h2 class="text-center my-5">{{ $t('todo_improve_header') }}</h2>
    <form-todo />
  </div>
</template>

<script>
import FormTodo from '~/components/TodoAppImprove/FormTodo.vue'
export default {
  components: { FormTodo },

}
</script>

<style>

</style>