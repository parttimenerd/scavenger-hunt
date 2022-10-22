<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4137288, 49.0111429]"
    location-name="11.21/23 Chemie"
  >
    <template #location>
      Vielleicht folgt der Denkende aber auch dem Grundsatz: „Cogito, ergo sum“.
      Anhand eines ähnlich bekannten lateinischen Ausspruchs wurde auf der 1.
      NdW die Kernspinresonanzspektroskopie anschaulich, oder eher
      geschmacklich, erklärt. Das nächste Rätsel erwartet euch an der Fakultät
      des Dozenten.
    </template>
    <Question
      :answers="['A', 'B', 'C']"
      question="Etwas zum Knobeln"
      correct-answer="B"
      next-question="end"
      :hints="['Die Frage ist Bromthymolblau']"
    >
      <template #question>
        <p>
          Bei den Präsenz NdWs haben in der Vergangenheit auch Hochschulgruppen,
          Kultur in Karlsruhe und das Schülerlabor ihre Arbeit vorgestellt.
          Zurück in die Schulzeit geht es auch in diesem Rätsel mit einem
          beliebten Indikator aus dem Chemieunterricht, der eine seiner
          Indikationsfarben bereits im Namen trägt.
          Welcher Zusammenhang ist korrekt?
        </p>
        <img src="../assets/equations.png" style="width: 100%" />
      </template>
      <template #answer>
        <p>
          Die Chemie sollte auch bei der letzten hier vertretenen Fakultät
          stimmen, dort wartet das letzte Rätsel auf euch.
        </p>
      </template>
    </Question>
  </WithLocation>
</template>
