<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { store } from "../stores/store";
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  nextQuestion: {
    type: String,
    required: true,
  },
  hints: {
    type: Array,
    required: false,
  },
});

const route = useRoute();
const state = ref("question");

const doAnswer = (answer) => {
  if(answer === props.correctAnswer) {
    store.correctQuestions.push(route.name);
    state.value = "correct";
  } else {
    state.value = "incorrect";
  }
};
</script>
<template>
  <div>
    <h1>{{ question }}</h1>
    <div>
      <div v-if="state === 'question'">
        <div class="mt-3 mb-4 ms-3">
          <slot name="question"></slot>
        </div>
        <div v-if="props.hints" class="mb-4 ms-3">
          <details v-for="hint in props.hints" :key="hint">
            <summary class="btn btn-secondary">Tipp</summary>
              {{ hint }}
            </details>
        </div>
        <div class="d-flex">
         <div class="btn-group-vertical flex-fill" role="group" aria-label="Antwortmöglichkeiten">
            <button v-for="answer in props.answers" :key="answer" type="button" class="btn btn-outline-primary" @click="() => doAnswer(answer)">
              {{ answer }}
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="state === 'correct'">
          <h2 class="text-success">Richtig</h2>
          Deine Antwort ist richtig!
        </div>
        <div v-else>
          <h2 class="text-danger">Falsch</h2>
          <p>
            Richtig wäre {{ correctAnswer }} gewesen.
          </p>
        </div>
        <p class="mt-3">
            <slot name="answer"></slot>
        </p>
          <div class="d-flex">
              <router-link class="btn btn-primary flex-fill" :to="{name: nextQuestion}">
                {{ nextQuestion === 'end' ? 'Fertig' : 'Zur nächsten Frage' }}
              </router-link>
            </div>
      </div>
    </div>
  </div>
</template>
