<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-brand class="ml-4 p-2 text-center" href="/">
        <img src="../assets/img/logo.png" style="width: 150px" alt="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            class="mr-4 p-2"
            style="font-size: 1.05rem; font-weight: bold"
            href="/"
            >{{ $t('home_item') }}</b-nav-item
          >
          <b-nav-item
            class="mr-4 p-2"
            style="font-size: 1.05rem; font-weight: bold"
            href="apps"
            >{{ $t('app_item') }}</b-nav-item
          >
          <b-nav-item
            class="mr-4 p-2"
            style="font-size: 1.05rem; font-weight: bold"
            href="/profile"
            >{{ $t('profile_item') }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <language-change class="change-language" />
    <nuxt />
  </div>
</template>

<script>
import LanguageChange from '~/components/LanguageChange.vue'

export default {
  components: {
    LanguageChange,
  },
}
</script>

<style>
.change-language {
  position: absolute;
  right: 10px;
  margin-top: 10px;
}
</style>
