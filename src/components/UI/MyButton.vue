<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>

.btn {
  padding: 0.5em 2em; /* Расстояние от текста до края */
  font-size: 0.9em; /* Размер шрифта */
  background-color: #323e4e; /* Цвет фона */
  color: #fff; /* Цвет текста */
  border: none; /* Убираем рамку */
}

.btn:hover {
  background-color: #de3a31; /* Цвет фона при наведении */
}

.btn:disabled {
  background-color: #dfdfdf; /* Цвет фона заблокированной кнопки */
}

.btn:disabled:hover {
  animation: shakeX 1s; /* Название и время анимации */
}


</style>
