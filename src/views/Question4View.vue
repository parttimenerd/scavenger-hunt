<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4112982, 49.0106016]"
    location-name="Fachschaft E-Technik"
  >
    <template #location>
      <p>
        Am Ehrenhof ist auch ein Hörsaal nach einem anderen berühmten
        Wissenschaftlicher benannt, er gehört zur nächsten Fakultät.
      </p>
    </template>
    <Question
      :answers="['0', '1']"
      question="Etwas Schaltungstechnik"
      correct-answer="0"
      next-question="question5"
      :hints="['x = 0', 'Im NdW Logo ist eine Zahl hervorgehoben']"
    >
      <template #question>
        <p>
          Auch die 3. NdW fand am Ehrenhof statt. Zum ersten Mal war bei dieser
          NdW auch das KD<sup>2</sup> Lab mit dabei und hat Experimente für die
          Besucher angeboten, allerdings nicht die ganze Nacht, sondern nur bis
          <math>1<mi>x</mi></math> Uhr.
        </p>
        <img src="../assets/circuit.png"/>
        <p>Was kommt am Ende dieser Schaltung heraus?</p>
      </template>
      <template #answer> </template>
    </Question>
  </WithLocation>
</template>
