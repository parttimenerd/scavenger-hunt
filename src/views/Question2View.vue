<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4087174, 49.0123847]"
    location-name="Fachschaft Physik"
  >
    <template #location>
      <p>
        Vom ersten Orgateam stammt auch das Logo, das ohne Anspruch auf
        Vollständigkeit die Fakultäten am KIT widerspiegelt. Seine Form führt
        dich zur nächsten Station.
      </p>
      <p><img src="../assets/logo.png" /></p>
    </template>
    <Question
      :answers="['1.4s', '2.4s', '3.4s', '4.4s']"
      question="Wenn Federn fliegen"
      correct-answer="3.4s"
      next-question="question3"
      :hints="[
        'Bei einer Standardstockwerkhöhe von 3.3m muss man dafür noch nicht mal die Höhe des Gebäudes wissen.',
        't(h) = sqrt(2h/g)',
      ]"
    >
      <template #question>
        <p>
          Hier an der Physik finden im Moment unsere Sitzungen statt. Wir
          treffen uns ca. alle 2 Wochen und besprechen bei Bier und Mate
          anstehende Veranstaltungen, Vereinsangelegenheiten oder die besten
          Glühweinangebote. Komm doch einfach mal vorbei, den nächsten Termin
          erfährst du unter <a href="mailto:info@ndw-ka.de">info@ndw-ka.de</a>.
        </p>
        <p>
          Auf das Dach des Physikhochhauses dürfen wir leider nicht, aber nehmen
          wir das mal für einen Moment an. Wenn man eine Feder durch eine
          luftleere Röhre vom Dach fallen lässt, wie lange dauert es dann, bis
          sie unten ankommt?
        </p>
      </template>
      <template #answer>
        Das Physikhochhaus hat 18 Stockwerke und 18m * 3.3m, das Physikhochhaus
        ist damit etwa 59.4m hoch. Damit fällt die Feder nach Formel 3.4s lang.
      </template>
    </Question>
  </WithLocation>
</template>
