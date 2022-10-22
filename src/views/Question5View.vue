<script setup>
import Question from "../components/Question.vue";
import WithLocation from "../components/WithLocation.vue";
</script>

<template>
  <WithLocation
    :location="[8.4093418, 49.0111333]"
    location-name="Mathe-Fachschaft"
  >
    <Question
      :answers="['17.11.22', '18.11.22', '16.11.22']"
      question="Wann findet die NdW statt?"
      correct-answer="18.11.22"
      next-question="question6"
    >
      <template #location>
        <p>
          „Frisch also! Mut(h)ig ans Werk!“ (Schiller, Die Räuber) Folgt dem
          Stilmittel zur nächsten Fakultät.
        </p>
      </template>
      <template #question>
        <div>
          <span class="T4">N</span><span class="T8">a</span
          ><span class="T5">ch</span> <span class="T6">d</span
          ><span class="T9">e</span><span class="T6">r</span
          ><span class="T4"> k</span><span class="T8">o</span
          ><span class="T4">mpl</span><span class="T8">e</span
          ><span class="T4">tt d</span><span class="T8">i</span
          ><span class="T4">g</span><span class="T8">i</span
          ><span class="T4">t</span><span class="T8">a</span
          ><span class="T4">l</span><span class="T8">e</span
          ><span class="T4">n </span><span class="T12">N</span
          ><span class="T10">a</span><span class="T13">ch</span
          ><span class="T12">t </span><span class="T6">d</span
          ><span class="T9">e</span><span class="T6">r</span
          ><span class="T4"> W</span><span class="T8">i</span
          ><span class="T4">ss</span><span class="T8">e</span
          ><span class="T4">ns</span><span class="T5">ch</span
          ><span class="T8">a</span><span class="T4">ft 2020 w</span
          ><span class="T8">u</span><span class="T4">rd</span
          ><span class="T8">e</span><span class="T4"> 2021 </span
          ><span class="T9">ei</span><span class="T6">n</span
          ><span class="T4"> kl</span><span class="T8">ei</span
          ><span class="T4">n</span><span class="T8">e</span
          ><span class="T4">s St</span><span class="T8">u</span
          ><span class="T4">d</span><span class="T8">io</span>
          <span class="T8">i</span><span class="T4">m M</span
          ><span class="T8">a</span><span class="T4">th</span
          ><span class="T8">e</span><span class="T4">b</span
          ><span class="T8">au</span> <span class="T8">au</span
          ><span class="T4">fg</span><span class="T8">e</span
          ><span class="T4">b</span><span class="T8">au</span
          ><span class="T4">t, </span><span class="T8">au</span
          ><span class="T4">s </span><span class="T6">d</span
          ><span class="T9">e</span><span class="T6">m</span>
          <span class="T6">d</span><span class="T9">ie</span
          ><span class="T4"> 7. N</span><span class="T6">d</span
          ><span class="T4">W für </span><span class="T8">eu</span
          ><span class="T5">ch</span><span class="T4"> g</span
          ><span class="T8">e</span><span class="T4">str</span
          ><span class="T8">ea</span><span class="T4">mt w</span
          ><span class="T8">u</span><span class="T4">rd</span
          ><span class="T8">e</span><span class="T4">. </span
          ><span class="T6">D</span><span class="T9">ie</span
          ><span class="T6">s</span><span class="T9">e</span
          ><span class="T6">s</span><span class="T4"> J</span
          ><span class="T8">a</span><span class="T4">hr s</span
          ><span class="T8">e</span><span class="T4">h</span
          ><span class="T8">e</span><span class="T4">n w</span
          ><span class="T8">i</span><span class="T4">r </span
          ><span class="T8">u</span><span class="T4">ns h</span
          ><span class="T8">o</span><span class="T4">ff</span
          ><span class="T8">e</span><span class="T4">ntl</span
          ><span class="T8">i</span><span class="T5">ch</span
          ><span class="T4"> w</span><span class="T8">ie</span
          ><span class="T4">d</span><span class="T8">e</span
          ><span class="T4">r </span><span class="T8">i</span
          ><span class="T4">n Präs</span><span class="T8">e</span
          ><span class="T4">n</span>z, h<span class="T7">e</span>rzl<span
            class="T7"
            >i</span
          ><span class="T14">ch</span><span class="T7">e</span>

          <span class="T8"> Ei</span><span class="T4">nl</span
          ><span class="T8">a</span><span class="T4">d</span
          ><span class="T8">u</span><span class="T4">ng z</span
          ><span class="T8">u</span><span class="T6">r</span
          ><span class="T4"> N</span><span class="T8">a</span
          ><span class="T5">ch</span><span class="T4">t </span
          ><span class="T6">d</span><span class="T9">e</span
          ><span class="T6">r</span><span class="T4"> W</span
          ><span class="T8">i</span><span class="T4">ss</span
          ><span class="T8">e</span><span class="T4">ns</span
          ><span class="T5">ch</span><span class="T8">a</span
          ><span class="T4">ft </span><span class="T8">a</span
          ><span class="T4">m, j</span><span class="T8">a</span
          ><span class="T4"> w</span><span class="T8">a</span
          ><span class="T4">nn d</span><span class="T8">e</span
          ><span class="T4">nn? </span>
        </div>
        <p class="P2"> </p>
        <p class="P4">
          <span class="T3">Σ</span
          ><span class="T15">(Nacht der Wissenschaft)</span
          ><span class="T1"> </span><span class="T15">4*</span
          ><span class="T18">Σ</span
          ><span class="T15">(Nacht der Wissenschaft).</span
          ><span class="T1"> </span>
        </p>
        <p class="P4">
          <span class="T16">2*</span><span class="T11">Σ</span
          ><span class="T15">(Nacht der Wissenschaft)</span
          ><span class="T17">+1</span><span class="T15">.</span>
        </p>
        <p class="P4">
          <span class="T19">Σ</span
          ><span class="T15">(Nacht der Wissenschaft) </span
          ><span class="T19">Σ</span
          ><span class="T15">(Nacht der Wissenschaft)</span>
        </p>
        <p class="P5"> </p>
        <p class="P1">
          <span class="T1">rot = 1, gelb = </span><span class="T2">2</span
          ><span class="T1">, </span><span class="T2">blau = 5, </span
          ><span class="T1">grün = 2</span>
        </p>
        <p>Wann findet die NdW statt?</p>
      </template>
      <template #answer>
        <p>
          <a href="https://ndw-ka.de/"
            ><img src="../assets/ndw.jpg" style="width: 100%"
          /></a>
        </p>
      </template>
    </Question>
  </WithLocation>
</template>

<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
}
td,
th {
  vertical-align: top;
  font-size: 12pt;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
}
ol,
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
span.footnodeNumber {
  padding-right: 1em;
}
span.annotation_style_by_filter {
  font-size: 95%;
  font-family: Arial;
  background-color: #fff000;
  margin: 0;
  border: 0;
  padding: 0;
}
span.heading_numbering {
  margin-right: 0.8rem;
}
* {
  margin: 0;
}
.gr1 {
  font-size: 12pt;
  font-family: "Liberation Serif";
  writing-mode: horizontal-tb;
  direction: ltr;
  padding-top: 0.0091in;
  padding-bottom: 0.0091in;
  padding-left: 0.0091in;
  padding-right: 0.0091in;
  vertical-align: top;
}
.P1 {
  font-size: 12pt;
  font-family: "Liberation Serif";
  writing-mode: horizontal-tb;
  direction: ltr;
  color: #000000;
  font-style: italic;
}
.P2 {
  font-size: 12pt;
  font-family: "Liberation Serif";
  writing-mode: horizontal-tb;
  direction: ltr;
  color: #000000;
  font-style: normal;
}
.P3 {
  font-size: 12pt;
  font-family: "Liberation Serif";
  writing-mode: horizontal-tb;
  direction: ltr;
  color: #000000;
}
.P4 {
  font-size: 12pt;
  font-family: "Liberation Serif";
  writing-mode: horizontal-tb;
  direction: ltr;
  color: #c9211e;
  font-style: normal;
}
.P5 {
  font-size: 12pt;
  font-family: "Liberation Serif";
  writing-mode: horizontal-tb;
  direction: ltr;
  color: #c9211e;
  font-style: normal;
}
.P6 {
  font-size: 12pt;
  font-family: "Liberation Serif";
  writing-mode: horizontal-tb;
  direction: ltr;
  text-align: center !important;
}
.P7 {
  font-size: 12pt;
  font-family: "Liberation Serif";
  writing-mode: horizontal-tb;
  direction: ltr;
  text-align: center !important;
}
.T1 {
  font-family: "Liberation Serif";
}
.T10 {
  color: #2a6099;
  text-decoration: none !important;
  background-color: transparent;
}
.T11 {
  color: #2a6099;
  font-family: "Liberation Serif";
  font-size: 15pt;
}
.T12 {
  text-decoration: none !important;
  background-color: transparent;
}
.T13 {
  text-decoration: none !important;
  background-color: #ffffa6;
}
.T14 {
  background-color: #ffffa6;
}
.T15 {
  color: #000000;
  font-family: "Liberation Serif";
}
.T16 {
  color: #000000;
  font-family: "Liberation Serif";
  font-size: 12pt;
}
.T17 {
  color: #000000;
  font-family: "Liberation Serif";
}
.T18 {
  color: #ffff00;
  font-family: "Liberation Serif";
  font-size: 15pt;
  background-color: transparent;
}
.T19 {
  color: #127622;
  font-family: "Liberation Serif";
  font-size: 15pt;
}
.T2 {
  font-family: "Liberation Serif";
}
.T3 {
  font-family: "Liberation Serif";
  font-size: 15pt;
}
.T4 {
  font-style: normal;
}
.T5 {
  font-style: normal;
  background-color: #ffffa6;
}
.T6 {
  font-style: normal;
  background-color: #ff6d6d;
}
.T7 {
  color: #2a6099;
}
.T8 {
  color: #2a6099;
  font-style: normal;
}
.T9 {
  color: #2a6099;
  font-style: normal;
  background-color: #ff6d6d;
}
</style>
