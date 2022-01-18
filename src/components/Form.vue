<template>
  <div id="form">
    <div v-if="show">
      <h1 class="left">Complessità sintattica e text-to-speech</h1>
      <div class="row flex center">
        <div class="img"></div>
        <div class="flex column textarea-box">
          <textarea v-model="text" placeholder="Incolla il tuo testo qua..."></textarea>
          <button @click="hide" class="top">Analizza</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      text: "",
    };
  },
  methods: {
    hide() {
      this.$emit("text", this.text); // evento 'text' con parametro this.text
      this.show = false;
    },
  },
};
</script>

<style>
#form .row {
  margin: 0;
}
textarea {
  margin-top: 100px;
  width: 100%;
  height: 230px;
  resize: none;
  overflow: scroll;
  border-radius: var(--borderRadius);
  font-size: 14pt;
  box-shadow: var(--boxShadow);
  border: 1.5em solid white;
}

textarea::placeholder {
  color: var(--grey);
  
}

textarea:focus {
  outline: none;
}

textarea::-webkit-scrollbar {
  display: none;
}

textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#form .img {
  width: 66%;
  height: 480px;
  background-image: url('../assets/accessibility2.jpg');
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  margin-right: 10px;
}

.textarea-box {
  width: 33%;
  margin-left: 10px;
}
</style>
