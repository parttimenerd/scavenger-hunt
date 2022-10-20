<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4137388, 49.012552]"
    location-name="Alte Chemie, KIT">
    <Question
      :answers="['1', '2', '3', '4']"
      question="Wie alles begann"
      correct-answer="3"
      next-question="question2"
    >
      <template #question>
        Wie viele Hörsäle wurden bei dieser 1. NdW bespielt?
      </template>
      <template #answer>
        Die 1. NdW wurde von einem 10-köpfigen Orgateam auf die Beine gestellt und von über 1000 Gästen besucht. Vom ersten Orgateam stammt auch das Logo, das ohne Anspruch auf Vollständigkeit die Fakultäten am KIT widerspiegelt. Seine Form führt dich zur nächsten Station. 
      </template>
    </Question>
  </WithLocation>
</template>
