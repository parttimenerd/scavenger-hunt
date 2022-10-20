<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4112982, 49.0106016]"
    location-name="Fachschaft E-Technik">
    <Question
      :answers="['0', '1']"
      question="Etwas Schaltungstechnik"
      correct-answer="0"
      next-question="question5"
    >
      <template #question>
        <p>
        Auch die 3. NdW fand am Ehrenhof statt. Zum ersten Mal war bei dieser NdW auch das KD2 Lab mit dabei und hat Experimente für die Besucher angeboten, allerdings nicht die ganze Nacht, sondern nur bis 1:00 Uhr. 
        </p>
        <img src="../assets/circuit.png" style="width: 100%"/>
        <p>Was kommt am Ende dieser Schaltung heraus?</p>
      </template>
      <template #answer>
        <p></p>
        <p>„Frisch also! Mut(h)ig ans Werk!“ (Schiller, Die Räuber)
Folgt dem Stilmittel zur nächsten Fakultät. </p>
      </template>
    </Question>
  </WithLocation>
</template>
