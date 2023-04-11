<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <b-button v-b-toggle.sidebar-footer variant="success" class="btn-sidebar"
      >Select App</b-button
    >
    <b-sidebar
      id="sidebar-footer"
      aria-label="Sidebar with custom footer"
      no-header
      shadow
    >
      <template #footer="{ hide }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Footer</strong>
          <b-button size="sm" variant="danger" @click="hide">Close</b-button>
        </div>
      </template>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title" class="header-text-sidebar">
            My Apps
          </h4>
          <hr class="my-5" />
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item class="item-sidebar">
                <nuxt-link to="/apps/todoApp" @click="hide"
                  >Todo App Basic</nuxt-link
                >
              </b-nav-item>
              <b-nav-item class="item-sidebar">
                <nuxt-link to="/apps/todoAppVueX" @click="hide"
                  >Todo App Improve</nuxt-link
                >
              </b-nav-item>
              <b-nav-item class="item-sidebar">
                <nuxt-link to="/apps/weatherApp" @click="hide"
                  >Weather App</nuxt-link
                >
              </b-nav-item>
              <b-nav-item class="item-sidebar">
                <nuxt-link to="/apps/calculatorApp" @click="hide"
                  >Calculator App</nuxt-link
                >
              </b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<style scoped>
.btn-sidebar {
  font-size: 1.05rem;
  font-weight: bold;
}

a {
  text-align: start;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

a:hover {
  margin-left: 0.5rem;
  background-color: #ccc;
  color: rgba(0, 0, 0, 0.7);
}

.header-text-sidebar {
  font-size: 30px;
  font-weight: bold;
}

.item-sidebar {
  margin-top: 20px;
}
</style>
