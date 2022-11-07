<script setup>
import { store } from "../stores/store";
import { computed } from "vue";

const questionCount = computed(() => new Set(store.correctQuestions).size);
</script>

<template>
  <h2>Glückwunsch...</h2>
  <p>
    ... du hast {{ questionCount }} Frage{{
      questionCount != 1 ? "n" : ""
    }}
    richtig beantwortet
  </p>
  <p>
    Könnt ihr auch die Zunge rollen? Postet ein Foto von eurer Gruppe, egal ob
    mit oder ohne gerollte Zunge, auf Social Media und verlinkt uns mit
    @ndw_karlsruhe.
  </p>
  <p>
    Zur Belohnung gibt es auf der NdW im November 2022 einen Kaffee aufs Haus.
  </p>
  <p>
    Wir hoffen dir hat dieses kleine Quiz Spaß gemacht! Die NdW findet am 18.
    November 2022 statt. Wir freuen uns auf dich!
  </p>
  <p>
    <a href="https://ndw-ka.de/"
      ><img src="../assets/ndw.jpg" style="width: 100%"
    /></a>
  </p>

  <div class="d-flex">
    <a href="https://www.ndw-ka.de/" class="btn btn-primary flex-fill">
      Zur Nacht der Wissenschaft
    </a>
  </div>
</template>
