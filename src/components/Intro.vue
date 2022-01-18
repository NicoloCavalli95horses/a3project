<template>
  <section id="intro">
    <div class="row flex center">
      <div class="box">
        <h1 class="title">Benvenuto in A<sup>3</sup></h1>
        <h3>{{ contents[i] }}</h3>

        <div class="flex center">
          <div v-for="iterator in contents.length" :key="iterator">
            <div class="dot" @click="i = iterator - 1" :class="{ active: i == iterator - 1 }"></div><!--start from 1-->
          </div>
        </div>
      </div>

      <div class="box">
        <div class="landing-img"></div>
      </div>
    </div>

    <div class="row flex space-around">
      <div class="flex column center icon-box" v-for="detail in details" :key="detail">
        <i :class="detail.icon"></i>
        <h2>{{ detail.title }}</h2>
        <div class="icon-description">
          <h4>{{ detail.description }}</h4>
        </div>
      </div>
    </div>

    <h5 class="author">
      <a href="mailto:nicolo.cavalli95@gmail.com"
        >Nicolò Cavalli © {{ showYear() }}</a
      >
    </h5>
  </section>
</template>

<script>
export default {
  props: [],
  data: function () {
    return {
      contents: [
        "Il progetto A3 offre alcuni strumenti per l'accessibilità, facilitando l'interazione con un documento locale come un PDF e fornendo strumenti per verificare leggibilità e comprensibilità di contenuti forniti dall'utente.",
        "Sfruttando la webcam del tuo dispositivo, il sistema può registrare movimenti o gesti a tua scelta permettendoti di interagire con il contenuto della pagina.",
        "Per configurare il sistema, dovrai selezionare delle immagini iniziali. Il contenuto della immagine verrà associato ad uno specifico comando di navigazione. Ad esempio, avvicinarsi allo schermo può essere associato all'ingrandimento del font.",
        "Le funzioni orientate alla leggibilità e alla comprensibilità non necessitano di alcuna configurazione: incolla il tuo testo sul form per calcolarne la complessità sintattica e ascolta il testo con la funzione text-to-speech."
      ],
      details: [
        {
          icon: "fas fa-robot fa-4x",
          title: "Machine Learning",
          description:
            "Una rete neurale convolutiva preallenata su un vasto dataset è utilizzata per effettuare il riconoscimento di una immagine con alta attendibilità.",
        },
        {
          icon: "fas fa-pen-alt fa-4x",
          title: "Complessità sintattica",
          description:
            "Attraverso l'indice Gulpease è possibile stimare la complessità di un paragrafo considerando il numero di frasi, il numero di parole e la loro lunghezza media.",
        },
        {
          icon: "fas fa-comment-dots fa-4x",
          title: "Text-to-speech",
          description:
            "È presente un sistema per effettuare la lettura automatica di un testo fornito dall'utente.",
        },
      ],
      i: 0,
    };
  },
  methods: {
    showYear() {
      this.date = new Date();
      return (this.year = this.date.getFullYear());
    },
  },
};
</script>

<style>
.row:nth-child(2) {
  margin-top: 50px;
}

.icon-box {
  width: 33%;
  padding: 50px;
}

.icon-description {
  height: 200px;
}

.box {
  width: 50%;
}

.landing-img {
  background-image: url("../assets/accessibility.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 600px;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 10px;
}

.dot:hover {
  cursor: pointer;
}

.active {
  background-color: var(--blue);
}

#intro span {
  min-width: 300px;
}

.fa,
.fas {
  color: var(--light-orange);
}

.author {
  position: fixed;
  letter-spacing: 1px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: rgba(0, 0, 0, 0.1);
}

.author h5 {
  color: var(--grey);
}

.title {
  font-size: 40pt;
}
</style>
