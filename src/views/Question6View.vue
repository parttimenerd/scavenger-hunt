<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4068894, 49.0129795]"
    location-name="Skultur 'der Denkende' in der Engesserstraße"
  >
    <template #location>
      <p>
        Bis dahin warten aber noch ein paar Fakultäten auf euch. Die nächste ist
        auf dem Campus unter anderem durch die Verlaufsform einer berühmten
        Skulptur vertreten, auf geht‘s dort hin!
      </p>
    </template>
    <Question
      :answers="[
        'Karl Wilhelm, Erträumer seiner Stadt',
        'Friedrich Engesser, Pionier des Stahlbrückenbaus',
        'Simon Moser, ehemaliger Leiter der Studium Generale',
      ]"
      question="Der Denkende"
      correct-answer="Simon Moser, ehemaliger Leiter der Studium Generale (Osten)"
      next-question="question7"
      :hints="[
        'Karl Wilhelm: Westen',
        'Friedrich Engesser: Norden',
        'Simon Moser: Osten',
      ]"
    >
      <template #question>
        So wie der Denkende fühlt man sich wohl auch in der ein oder anderen
        Vorlesung ;) In Selbstreflexion versunken schaut der Denkende in den
        Spiegel. In welche Richtung zeigen seine Füße jetzt?
      </template>
      <template #answer>
        Vielleicht folgt der Denkende aber auch dem Grundsatz: „Cogito, ergo
        sum“. Anhand eines ähnlich bekannten lateinischen Ausspruchs wurde auf
        der ersten NdW die Kernspinresonanzspektroskopie anschaulich, oder eher
        geschmacklich, erklärt. Das nächste Rätsel erwartet euch an der Fakultät
        des Dozenten.
      </template>
    </Question>
  </WithLocation>
</template>
