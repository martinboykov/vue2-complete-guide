<template>
  <div class="row">
    <div class="wrapper">
      <h1>The Super Quiz</h1>
      <hr />
      <transition
        :name="animationType"
        mode="out-in"
        enter-active-class="animate__animated animate__flipInY"
        leave-active-class="animate__animated animate__flipOutY"
      >
        <div class="quiz" v-if="stateQuestion" key="question">
          <p class="question">{{ quizes[quizCounter].question }}</p>
          <div class="answers-wrapper">
            <span
              class="answer"
              v-for="(answer, index) in quizes[quizCounter].answers"
              :key="index"
              @click="onAnswerChosen(answer)"
              >{{ answer.value }}</span
            >
          </div>
        </div>
        <div class="success" v-else key="success">
          <h2>Thats Correct!</h2>
          <hr />
          <button class="btn btn-primary" @click="setNextQuestion">
            Next Question
          </button>
          <br>
          <button class="btn btn-primary" @click="restart">Restart</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      quizes: [
        {
          question: "What is 14 - 27?",
          answers: [
            { id: 1, value: "-18", isCorrect: false },
            { id: 2, value: "-19", isCorrect: false },
            { id: 3, value: "-6", isCorrect: false },
            { id: 4, value: "-13", isCorrect: true },
          ],
        },
        {
          question: "What is 11 - 17?",
          answers: [
            { id: 1, value: "-28", isCorrect: false },
            { id: 2, value: "-9", isCorrect: false },
            { id: 3, value: "-8", isCorrect: true },
            { id: 4, value: "-11", isCorrect: false },
          ],
        },
      ],
      stateQuestion: true,
      quizCounter: 0,
      animationType: "flip",
    };
  },
  methods: {
    onAnswerChosen(answer) {
      if (!answer.isCorrect) {
        alert("Answer is not correct!");
      } else {
        this.stateQuestion = false;
      }
    },
    setNextQuestion() {
      if (this.quizes.length === this.quizCounter + 1) {
        alert("That was last question!");
        return;
      }
      this.quizCounter++;
      this.stateQuestion = true;
    },
    restart() {
      this.quizCounter = 0;
      this.stateQuestion = true;
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
.quiz,
.success {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgb(235, 234, 234);
  border-radius: 5px;
}
.question {
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: rgb(235, 234, 234);
  font-weight: 700;
}
.answers-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: 100%;
  gap: 50px;
  padding: 20px;
}
.answer {
  background: lightblue;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
}
h2 {
  padding: 0;
  margin: 0;
}
.success {
  padding: 20px;
  background-color: rgb(219, 253, 219);
}
/* flip */
.flip-enter {
  opacity: 0;
}
.flip-enter-active {
  animation: flip-in 0.8s ease-out forwards;
  transition: opacity 0.8s ease-out;
}
.flip-leave {
}
.flip-leave-active {
  animation: flip-out 0.8s ease-out forwards;
  transition: opacity 0.8s ease-out;
  opacity: 0;
  position: absolute;
}
.flip-move {
  transition: transform 1s;
}
</style>
