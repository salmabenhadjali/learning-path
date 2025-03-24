<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <hr />
    <button @click="changeName">Change name</button>
    <p>My name is {{ name }}</p>
    <p>My age is {{ age }}</p>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :userName="name"
          @resetUserName="name = $event"
          :resetFn="resetName"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" :changeAge="changeAge"></app-user-edit>
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
      age: 27,
    }
  },
  methods: {
    changeName() {
      this.name = 'Bastien'
    },
    resetName() {
      this.name = 'Max1'
    },
    changeAge() {
      this.age = 30
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

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
