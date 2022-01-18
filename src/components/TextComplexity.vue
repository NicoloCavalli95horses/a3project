<template>
  <div class="absolute sidebar flex space-around column z-index-10">
    <div class="trafficLight flex center">
      <div class="circle" :class="red"></div>
      <div class="circle" :class="yellow"></div>
      <div class="circle" :class="green"></div>
    </div>

    <div class="info">
      <h2 class="padding">
        Indice Gulpease: <span>{{ index }}</span> <br /><br />
        Informazioni: <br /><span>{{ complexity }}</span>
      </h2>
    </div>

    <button @click="gulpease(userInput)" :disabled="clicked">Calcola</button>
  </div>
</template>

<script>
export default {
  props: ["userInput"],
  data() {
    return {
      word: [],
      clicked: false,
      totalWords: 0,
      totalWordLength: 0,
      totalSentences: [],
      index: 0,
      complexity: "",
      show: true,
      red: "",
      yellow: "",
      green: "",
    };
  },
  methods: {
    gulpease(userInput) {
      this.word = userInput.split(" "); // spezza il testo in parole. Rimangono coppie di parole collegate da apici (es. dell'assoluto)
      this.totalWords = this.word.length; // numero totale di parole
      //var totalWordLength = 0; // numero di lettere in totale (in caratteri)

      for (let i = 0; i < this.totalWords; i++) {
        this.totalWordLength += this.word[i].length;
      }

      this.totalSentences = userInput.split(/[\.\:\?] \n?|[;!\(\n]+/); // tutte le frasi in un array
      this.totalSentences = this.totalSentences.length; // la lunghezza dell'array è il numero di frasi

      // https://it.wikipedia.org/wiki/Indice_Gulpease
      this.index = Math.round(
        89 -
          (10 * this.totalWordLength) / this.totalWords +
          (300 * this.totalSentences) / this.totalWords
      );

      switch (true) {
        case this.index <= 40:
          this.red = "red";
          this.complexity =
            "La leggibilità è molto scarsa. Si consiglia di semplificare la sintassi accorciando le frasi e utilizzando termini più comuni.";
          break;

        case this.index <= 60:
          this.yellow = "yellow";
          this.complexity =
            "La leggibilità è scarsa. Si consiglia di semplificare la sintassi accorciando le frasi.";
          break;

        case this.index <= 80:
          this.yellow = "yellow";
          this.complexity =
            "La leggibiltà è buona. Si consiglia di semplificare alcuni termini poco comuni.";
          break;

        case this.index >= 81:
          this.green = "green";
          this.complexity = "La leggibilità è molto buona, ottimo lavoro.";
          break;
      }

      this.clicked = true;
      return this.complexity;
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 18pt;
}
h2 span {
  font-family: var(--mainFont);
  font-size: 12pt;
  color: var(--grey);
}
.sidebar {
  transform: translateY(-100%);
  height: 450px;
  left: 50px;
}

.trafficLight {
  padding: 10px;
}

.trafficLight,
.info {
  border-radius: 50%;
  background-color: white;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
}

.info {
  padding: 10px;
  width: 220px;
  height: 300px;
  background-color: white;
}

span {
  font-weight: bold;
}

.circle {
  width: 40px;
  height: 40px;
  margin: 0 5px 0 5px;
  border-radius: 50%;
  background-color: #f4f4f4;
}

.green {
  background-color: #77dd77;
  -webkit-box-shadow: -1px 5px 54px 0px #9af59a;
  -moz-box-shadow: -1px 5px 54px 0px #9af59a;
  -o-box-shadow: -1px 5px 54px 0px #9af59a;
  box-shadow: -1px 5px 54px 0px #9af59a;
}

.red {
  background-color: #ff6961;
  -webkit-box-shadow: -1px 5px 54px 0px #fc8f89;
  -moz-box-shadow: -1px 5px 54px 0px #fc8f89;
  -o-box-shadow: -1px 5px 54px 0px #fc8f89;
  box-shadow: -1px 5px 54px 0px #fc8f89;
}

.yellow {
  background-color: #fdfd96;
  -webkit-box-shadow: -1px 5px 54px 0px #f3f3ae;
  -moz-box-shadow: -1px 5px 54px 0px #f3f3ae;
  -o-box-shadow: -1px 5px 54px 0px #f3f3ae;
  box-shadow: -1px 5px 54px 0px #f3f3ae;
}
</style>
