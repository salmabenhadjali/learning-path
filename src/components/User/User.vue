<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <hr />
    <button @click="changeName">Change name</button>
    <p>My name is {{ name }}</p>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :userName="name"
          @resetUserName="name = $event"
          :resetFn="resetName"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data() {
    return {
      name: 'Salma',
    }
  },
  methods: {
    changeName() {
      this.name = 'Bastien'
    },
    resetName() {
      this.name = 'Max1'
    },
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
