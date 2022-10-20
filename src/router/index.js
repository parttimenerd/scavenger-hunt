import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Question1View from "../views/Question1View.vue";
import Question2View from "../views/Question2View.vue";
import Question3View from "../views/Question3View.vue";
import Question4View from "../views/Question4View.vue";
import Question5View from "../views/Question5View.vue";
import Question6View from "../views/Question6View.vue";
import Question7View from "../views/Question7View.vue";
import EndView from "../views/EndView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/question1",
      name: "question1",
      component: Question1View,
    },
    {
      path: "/question2",
      name: "question2",
      component: Question2View,
    },
    {
      path: "/question3",
      name: "question3",
      component: Question3View,
    },
    {
      path: "/question4",
      name: "question4",
      component: Question4View,
    },
    {
      path: "/question5",
      name: "question5",
      component: Question5View,
    },
    {
      path: "/question6",
      name: "question6",
      component: Question6View,
    },
    {
      path: "/question7",
      name: "question7",
      component: Question7View,
    },
    {
      path: "/end",
      name: "end",
      component: EndView,
    },
  ],
});

export default router;
