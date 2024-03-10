<template>
  <section>
    <h1>Contacts</h1>
    <hr>
    <div class="row">
      <div class="column">
        <div class="content">
          <a target="_blank"  href="https://github.com/Emonity/task_manager">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Mountains">
          </a>
          <h3>GitHub</h3>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <a target="_blank"  href="https://t.me/emonity">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png" alt="Lights">
          </a>
          <h3>Telegram</h3>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <a target="_blank"  href="emonity3@gmail.com">
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-icon-PNG-Transparent-Background-letter-G-multiple-colors.png" alt="Nature">
          </a>
          <h3>Gmail</h3>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <a target="_blank"  href="emonity@bk.ru">
            <img src="https://cdn-icons-png.flaticon.com/512/6806/6806987.png" alt="Face">
          </a>
          <h3>Mail</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
  padding: 20px;
  font-family: Arial;
}

section {
  max-width: 1000px;
  margin: auto;
}

h1 {
  font-size: 50px;
  word-break: break-all;
}

.row {
  margin: 8px -16px;
}


.row,
.row > .column {
  padding: 8px;
}

.column {
  float: left;
  width: 25%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.content {
  background-color: white;
  padding: 10px;
}

img {
  width: 100%;
}


@media screen and (max-width: 900px) {
  .column {
    width: 50%;
  }
}


@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
<script setup>
</script>