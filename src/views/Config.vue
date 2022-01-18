<template>
  <div id="target"></div>
   <Examples />
</template>

<script>
import Examples from "../components/Examples.vue";

export default {
  data: function () {
    return { }
  },
  components: { Examples },
  methods: { },
  mounted() {
    // Get tag
    const no_behaviour = document.querySelector("#Default");
    const down = document.querySelector("#Down");
    const up = document.querySelector("#Up");
    const zoom = document.querySelector("#Zoom");

    const webcamElement = document.getElementById("webcam");
    const prediction = document.querySelector("#prediction span");

    // Pre-trained KNN classifier model
    const classifier = knnClassifier.create();

    // Initialize net object
    let net;

    async function app() {
      net = await mobilenet.load();
      const webcam = await tf.data.webcam(webcamElement); // Store webcam data

      const addExample = async (classId) => {
        const img = await webcam.capture(); // Store webcam input
        const activation = net.infer(img, true); // Activate the model with the img input
        classifier.addExample(activation, classId); // User input provides examples
        img.dispose(); // Optimize memory allocation
      };

      no_behaviour.addEventListener("click", () => addExample(0));
      down.addEventListener("click", () => addExample(1));
      up.addEventListener("click", () => addExample(2));
      zoom.addEventListener("click", () => addExample(3));

      while (true) {
        // Keep checking for examples

        if (classifier.getNumClasses() > 0) {
          const img = await webcam.capture();
          const activation = net.infer(img, "conv_preds");
          const result = await classifier.predictClass(activation);
          const classes = [
            "nessuna azione (default)",
            "scroll verso il basso",
            "scroll verso l'alto",
            "ingrandimento (zoom)",
          ];

          // Display prediction
          prediction.innerHTML = `${classes[result.label]} (probabilità: ${
            result.confidences[result.label] * 100
          }%)`;

          // console.log(`${classes[result.label]} (probabilità: ${result.confidences[result.label] * 100}%)`);

          // Change CSS based on image recognition
          if (classes[result.label] == "ingrandimento (zoom)") {
            document.querySelector("#pdf-render").style.zoom = 1.3;
          }

          if (classes[result.label] == "nessuna azione (default)") {
            document.querySelector("#pdf-render").style.zoom = 1.0;
          }

          if (classes[result.label] == "scroll verso il basso") {
            window.scrollTo({
              top: window.pageYOffset + 20,
              left: 0,
              behavior: "smooth",
            });
          }

          if (classes[result.label] == "scroll verso l'alto") {
            window.scrollTo({
              top: window.pageYOffset - 20,
              left: 0,
              behavior: "smooth",
            });
          }

          img.dispose();
        }

        await tf.nextFrame();
      }
    }
    app();
  },
};
</script>
