<template>
  <div>
    <select v-model="selectedLocale" @change="changeLocale">
      <option v-for="locale in locales" :key="locale.code" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ngôn ngữ được chọn hiện tại.
      selectedLocale: this.$i18n.locale,
      // danh sách các ngôn ngữ được hỗ trợ.
      locales: this.$i18n.locales,
    }
  },
  methods: {
    // phương thức được gọi khi người dùng thay đổi ngôn ngữ, sử dụng
    changeLocale() {
      // để thay đổi ngôn ngữ hiện tại của ứng dụng.
      this.$i18n.setLocale(this.selectedLocale)
    },
  },
}
</script>
