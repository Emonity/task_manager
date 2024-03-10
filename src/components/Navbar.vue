<template>
  <div class="navbar">
    <div @click="$router.push('/')">Home</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Contacts</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/about')">Task manager</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/')">Home</my-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  font-size: large;
  height: 50px;
  background: #cecece;
  box-shadow: 2px 2px 4px #a1a1a1;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
