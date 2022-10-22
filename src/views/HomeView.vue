<script setup></script>

<template>
  <div class="quiz-container">
    <h1>Willkommen zum NdW-Campusquiz</h1>
    <p>
      Die Nacht der Wissenschaft ist eine Nacht voller Vorträge, Experimente und
      Exponate, mit denen Karlsruher Forschende ihre Themen
      populärwissenschaftlich einem breiten Publikum präsentieren.
    </p>
    <p>
      Alles fing im Januar 2016 an, aber wo? Begib dich zur ersten NdW Location
      und starte mit uns zu einem Quiz quer über den Campus.
    </p>
    <p>
      <a href="https://ndw-ka.de/"
        ><img src="../assets/ndw.jpg" style="width: 100%"
      /></a>
    </p>
    <router-link :to="{ name: 'question1' }" class="btn btn-primary">
      Starten
    </router-link>
  </div>
</template>

<style scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
}
</style>
