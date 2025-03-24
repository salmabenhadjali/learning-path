<template>
  <div class="container">
    <navbar></navbar>
    <div class="row">
      <div class="col-xs-2">
        <!-- Without keep alive -->
        <!-- <router-view /> -->

        <!-- With keep alive -->
        <keep-alive>
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/User/Navbar/Navbar.vue'

export default {
  data() {
    return {
      selectedComponent: 'appGame',
    }
  },
  components: {
    navbar: Navbar,
  },
}
</script>

<style></style>
