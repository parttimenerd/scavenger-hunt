<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4137388, 49.012552]"
    location-name="Alte Chemie, KIT"
  >
    <template #location>
      <p>
        Gehe dort hin, wo die NdW 2016 zum ersten Mal stattfand. Wenn du es
        nicht weißt, nutze die Karte oder finde den Ort in dem auf "Tipp"
        drückst.
      </p>
      <p><i>Am Rande: Wir speichern deine Ortsdaten nirgendwo.</i></p>
    </template>
    <Question
      :answers="['1', '2', '3', '4']"
      question="Wie alles begann"
      correct-answer="3"
      next-question="question2"
      :hints="['Aller guten Dinge sind...']"
    >
      <template #question>
        Wie viele Hörsäle wurden bei dieser 1. NdW bespielt?
      </template>
      <template #answer>
        Die erste NdW wurde von einem 10-köpfigen Orgateam auf die Beine gestellt
        und von über 1000 Gästen besucht.
      </template>
    </Question>
  </WithLocation>
</template>
