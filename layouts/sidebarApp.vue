<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-brand class="p-2 text-center">
        <sidebar />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            class="mr-4 p-2"
            style="font-size: 1.05rem; font-weight: bold"
            href="/"
            >Home</b-nav-item
          >
          <b-nav-item
            class="mr-4 p-2"
            style="font-size: 1.05rem; font-weight: bold"
            href="apps"
            >My Apps</b-nav-item
          >
          <b-nav-item
            class="mr-4 p-2"
            style="font-size: 1.05rem; font-weight: bold"
            href="/profile"
            >My Profile</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse> 
    </b-navbar>
    <nuxt />
  </div>
</template>

<script>

import Sidebar from "@/components/sidebar.vue"

export default {
    Sidebar
}
</script>

<style scoped>
</style>
