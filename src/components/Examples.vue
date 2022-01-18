<template>
  <section id="config" v-show="hideAll()">
    <div class="left">
      <h1>Configura la tua webcam</h1>
    </div>

    <div class="flex inline-center top">
      <div class="video flex start column">
        <video
          autoplay
          playsinline
          muted
          id="webcam"
          width="320"
          height="320"
        ></video>
      </div>

      <div class="examples-box flex column">
        <div class="flex column space-between">
          <div
            class="config-box"
            v-for="setting in settings"
            :key="setting"
            :class="{ none: setting.counter >= threshold }"
          >
            <h2>{{ setting.title }}</h2>
            <h4>{{ setting.explanation }}</h4>
            <div class="flex center">
              <button :id="setting.id" @click="setting.counter++">
                Aggiungi esempio ({{ setting.counter }}/{{ threshold }})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex center top">
      <h2 id="prediction">Azione riconosciuta: <span></span></h2>
    </div>
  </section>

  <div
    v-show="this.settings[this.settings.length - 1].counter >= this.threshold"
  >
    <Test />
    <!--show if the last counter is greater than the threshold -->
  </div>
</template>

<script>
import Test from "./Test.vue"

export default {
  components: { Test },
  data: function () {
    return {
      i: 0,
      threshold: 5,
      settings: [
        {
          title: "Scroll verso il basso",
          explanation:
            "Identifica una postura o un'azione che vuoi associare allo scroll verso il basso. Le immagini devono essere essere omogenee tra loro. Consiglio: scatta 5 foto tenendo alzata la tua mano destra.",
          id: "Down",
          counter: 0,
        },
        {
          title: "Scroll verso l'alto",
          explanation:
            "Identifica una postura o un'azione che vuoi associare allo scroll verso l'alto. Le immagini devono essere omogenee tra loro. Consiglio: scatta 5 foto tenendo alzata la tua mano sinistra",
          id: "Up",
          counter: 0,
        },
        {
          title: "Ingrandimento del testo",
          explanation:
            "Identifica una postura o un'azione che vuoi associare all'ingrandimento del testo. Le immagini devono essere omogenee tra loro. Consiglio: scatta 5 foto avvicinandoti allo schermo e strizzando leggermente gli occhi.",
          id: "Zoom",
          counter: 0,
        },
        {
          title: "Nessun comportamento (default)",
          explanation:
            "La maggior parte del tempo il sistema non eseguirà comandi. Aggiungi esempi di immagini che il sistema associerà all'assenza di comandi. Consiglio: rimani ad una normale distanza dal pc e tieni un atteggiamento rilassato.",
          id: "Default",
          counter: 0,
        },
      ],
    };
  },
  methods: {
    increase(counter) {
      counter >= this.threshold ? (counter = 0) : counter++;
    },
    hideAll() {
      if (this.settings[this.settings.length - 1].counter >= this.threshold) {
        let fragment = document.createDocumentFragment();
        let webcam = document.querySelector("#webcam");
        fragment.appendChild(webcam);
        document.querySelector("#target").appendChild(fragment);
        webcam.classList.add("test-webcam");

        return false;
      }
      return true;
    },
  },
};
</script>

<style>
#config button {
  margin: 10px;
  width: 200px;
  height: 60px;
}

video {
  border-radius: 4px;
  width: 320px;
  height: 320px;
  background-color: rgb(117, 117, 117);
}

.examples-box {
  margin-left: 15px;
  width: 600px;
  height: 320px;
  overflow-y: hidden;
  border-radius: var(--borderRadius);
  background-color: white;
  box-shadow: var(--boxShadow);
  padding: 10px;
}

.examples-box::-webkit-scrollbar {
  display: none;
}

.examples-box {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.examples-box > div {
  min-width: 100%;
}

#config button {
  color: white;
  width: 90%;
}

#config .top {
  margin-top: 50px;
}

.test-webcam {
  position: fixed;
  max-width: 120px;
  max-height: 120px;
  bottom: 50px;
  left: 50px;
  border-radius: 50%;
  z-index: 10;
}

#prediction span {
  color: var(--grey);
  font-family: var(--mainFont);
  font-size: 13pt;
}

.config-box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 320px;
}
</style>
