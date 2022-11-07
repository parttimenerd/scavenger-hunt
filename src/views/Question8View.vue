<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4136097, 49.0124293]"
    location-name="30.43 Biologie"
  >
    <template #location>
      Die Chemie sollte auch bei der letzten hier vertretenen Fakultät stimmen,
      dort wartet das letzte Rätsel auf euch.
    </template>
    <Question
      :answers="[
        'x₁ = r, x₂ = R, x₃ = r',
        'x₁ = R, x₂ = R, x₃ = r',
        'x₁ = R, x₂ = r, x₃ = R',
      ]"
      question="Vererbungslehre"
      correct-answer="x₁ = R, x₂ = r, x₃ = R"
      next-question="end"
    >
      <template #question>
        <p>
          Die NdW entwickelt sich stetig weiter, gleich einer Evolution, und
          wird gestaltet vom aktuellen Orgateam. Jedes neue Mitglied bringt auch
          neue Ansätze mit und manche Ideen vererben sich weiter, genau wie ein
          Gen, z.B. das zum Zungerollen. So entsteht immer eine neue, etwas
          andere NdW. Aber wie war das jetzt nochmal mit der Vererbung?
        </p>
        <img src="../assets/genetics.png" />
      </template>
      <template #answer>
        <p>Fragt den Biologen in eurer Nähe.</p>
      </template>
    </Question>
  </WithLocation>
</template>
