<template>
  <div class="flex center column">

    <div class="tools">
      <div class="flex">

        <!--Text size-->
        <div class="flex start tool-box">
          <h2>Grandezza <span>({{ textSize }}px)</span></h2>
          <input v-model="textSize" type="range" min="14" max="40" step="1" />
       
        </div>

        <!--Text-to-speech-->
        <div class="flex start tool-box">
          <h2>Leggi testo</h2>
          <div class="flex center">
             <input class="checkbox" v-model="speech_check" @click="playSpeech" type="checkbox" id="speech-check"/>
          </div>
         
        </div>

      </div>
    </div>

    
    <div class="container z-index-5">
      <p id="target" ref="text" v-bind:style="{fontSize: textSize+'px', lineHeight: lineHeight}">
        {{ userInput }}
      </p>
    </div>

  </div>
</template>

<script>
export default {
  props: ["userInput"],
  data(){
    return{
      textSize: 18,
      lineHeight: 2,
      definition_checked: false,
      speech_check: false,
      msg: new SpeechSynthesisUtterance(),
      ttSpeech: window.speechSynthesis
    }
  },
  
  methods: {
    playSpeech(){
        
        if(!this.speech_check){    
            this.msg.text = "Modalità lettura attivata. " + this.$refs.text.innerHTML  // intro + get #target content
            this.ttSpeech.speak(this.msg)
        }
        else{
            this.ttSpeech.cancel()
        }

        
    }
}
};
</script>

<style scoped>
h2 {
  font-size: 18pt;
}
h2 span {
  font-family: var(--mainFont);
  color: var(--fontColor);
  font-size: 14pt;
}

.container, .tools {
  margin-top: 20px;
  width: 60%;
}

.container::-webkit-scrollbar, .tools::-webkit-scrollbar {
  display: none;
}

.container{
  background-color: white;
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  height: 400px;
  margin-top: 20px;
  overflow: scroll;
}

.container p {
  padding: 20px;
}

.tools {
  height: auto;
}

.tools .flex {
  margin-right: 10px;
}

.checkbox {
    width: 30px;
    height: 30px;
}

.tool-box{
  padding: 10px;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  background-color: white;
}

</style>