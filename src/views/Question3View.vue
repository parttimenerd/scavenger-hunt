<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation :location="[8.412615, 49.009845]" location-name="Ehrenhof">
    <template #location>
      <p>Jetzt soll es rattern im Kopf und auf zur nächsten Station.</p>
    </template>
    <Question
      :answers="[
        '10.11, 10.91, 11.30',
        '10.11, 10.91, 11.20',
        '10.91, 10.40, 30.42',
      ]"
      question="Rund um den Ehrenhof"
      correct-answer="10.11, 10.91, 11.30"
      next-question="question4"
      :hints="[
        'NdW Karlsruhe',
        'Der berühmte Erfinder ist Carl Benz.',
        'Der berühmte Wissenschaftler Heinrich Hertz.',
      ]"
    >
      <template #question>
        <p>
          Rund um den Ehrenhof hat unter anderem die 2. NdW stattgefunden und
          hier haben wir auch ein Hilfsmittel für das nächste Rätsel für euch
          versteckt. Bitte legt es, sobald ihr das Rätsel gelöst habt, wieder
          zurück und ermöglicht auch anderen ein funktionierendes Spiel, danke!
        </p>
        <p>
          <i
            >Eine Dose mit NdW Logo und Pyramide ist am Fahrradständer
            befestigt.</i
          >
        </p>
        <p>
          Setzt es zusammen und betrachte die zusammenhängende Kante mit den
          Augen eines berühmten Erfinders: Auf welche Gebäude zeigen die Ecken?
        </p>
      </template>
      <template #answer>
        In diesen 3 Gebäuden fand die 2., wie auch die aktuelle Nacht der
        Wissenschaft statt.
      </template>
    </Question>
  </WithLocation>
</template>
