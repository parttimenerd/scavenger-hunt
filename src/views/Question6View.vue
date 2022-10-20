<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[48.4093081,9.0131363]"
    location-name="Geistes und Sozialwissenschaften">
    <Question
      :answers="['Karl Wilhelm, Erträumer seiner Stadt (Westen)', 'Friedrich Engesser, Pionier des Stahlbrückenbaus (Norden)', 'Simon Moser, ehemaliger Leiter der Studium Generale (Osten)']"
      question="Der Denkende (Geistsoz)"
      correct-answer="Simon Moser, ehemaliger Leiter der Studium Generale (Osten)"
      next-question="question7"
    >
      <template #question>
        So wie der Denkende fühlt man sich wohl auch in der ein oder anderen Vorlesung ;) 
In Selbstreflexion versunken schaut der Denkende in den Spiegel. In welche Richtung zeigen seine Füße jetzt? 
      </template>
      <template #answer>
      Vielleicht folgt der Denkende aber auch dem Grundsatz: „Cogito, ergo sum“. Anhand eines ähnlich bekannten lateinischen Ausspruchs wurde auf der 1. NdW die Kernspinresonanzspektroskopie
      anschaulich, oder eher geschmacklich, erklärt. Das nächste Rätsel erwartet euch an der Fakultät des Dozenten. 
      </template>
    </Question>
  </WithLocation>
</template>
