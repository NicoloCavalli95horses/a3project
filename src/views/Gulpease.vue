<template>
  <section id="gulpease">
    <Form @text="handleText" />
    <div v-if="userInput">
      <ReadingMode :userInput="userInput" />
      <TextComplexity :userInput="userInput" />
    </div>
  </section>


</template>

<script>
import Form from '../components/Form.vue'
import ReadingMode from '../components/ReadingMode.vue'
import TextComplexity from '../components/TextComplexity.vue'

export default {
  name: 'App',
  components: { Form, ReadingMode, TextComplexity },
  data(){
    return{
        userInput: null,
        date: [],
        year: 0
      }
  },
  methods: {
    handleText(userText){
      this.userInput = userText
    }
  }

}
</script>

<style>

</style>
