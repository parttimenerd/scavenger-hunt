<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4087174, 49.0123847]"
    location-name="Fachschaft Physik">
    <Question
      :answers="['1', '2', '200']"
      question="Wenn Federn fliegen"
      correct-answer="200"
      next-question="question3"
    >
      <template #question>
       <p>Hier an der Physik finden im Moment unsere Sitzungen statt. Wir treffen und ca. alle 2 Wochen und besprechen bei Bier und Mate anstehende Veranstaltungen, Vereinsangelegenheiten oder die besten Glühweinangebote. Komm doch einfach mal vorbei, den nächsten Termin erfährst du unter <a href="mailto:info@ndw-ka.de">info@ndw-ka.de</a>.</p>
      <p> Auf das Dach des Physikhochhauses dürfen wir leider nicht, aber nehmen wir das mal für einen Moment an. Wenn man eine Feder durch eine luftleere Röhre vom Dach fallen lässt, wie lange dauert es dann, bis sie unten ankommt? 
       </p><p> <i>Bei einer Standard Stockwerkhöhe von ?? muss man dafür noch nicht mal die Höhe des Gebäudes wissen.</i></p>
      </template>
      <template #answer>
        To be done
      </template>
    </Question>
  </WithLocation>
</template>
