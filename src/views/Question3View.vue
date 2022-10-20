<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.412615, 49.009845]"
    location-name="Ehrenhof">
    <Question
      :answers="['10.11, 10.91, 11.30', '10.11, 10.91', '10.91']"
      question="Rund um den Ehrenhof"
      correct-answer="10.11, 10.91, 11.30"
      next-question="question4"
    >
      <template #question>
       <p>Rund um den Ehrenhof hat unter anderem die 2. NdW stattgefunden und hier haben wir auch ein Hilfsmittel für das nächste Rätsel für euch versteckt. Bitte legt es, sobald ihr das Rätsel gelöst habt, wieder zurück und ermöglicht auch anderen ein funktionierendes Spiel, danke! 
</p>
<p><i>Eine Dose mit NdW Logo und Pyramide ist am Fahrradständer befestigt.</i></p>
<p>Setzt es zusammen (Tipp: NdW Karlsruhe) und betrachte die zusammenhängende Kante mit den Augen eines berühmten Erfinders (Tipp: Benz): Auf welche Gebäude zeigen die Ecken? 
</p>

      </template>
      <template #answer>
        In diesen 3 Gebäuden fand die 2., wie auch die aktuelle, Nacht der Wissenschaft statt.
        <p>Am Ehrenhof ist auch ein Hörsaal nach einem anderen berühmten Wissenschaftlicher benannt (Tipp: Hertz), er gehört zur nächsten Fakultät. </p>
      </template>
    </Question>
  </WithLocation>
</template>
