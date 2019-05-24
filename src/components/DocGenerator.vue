<template>
  <div class="container">
    <router-link :to="`/preview/${id}`" target="_blank">Preview</router-link>
    <VueTrix v-model="editorContent"/>
  </div>
</template>

<script>
import VueTrix from "vue-trix";
import { saveDoc } from "../apollo/queries";
export default {
  name: "DocGenerator",
  components: {
    VueTrix
  },
  data() {
    return {
      editorContent: "",
      previewContent: "",
      jsonContent: "",
      id: null
    };
  },
  methods: {
    updateEditorContent() {
      var element = document.querySelector("trix-editor");
      element.addEventListener("trix-change", () => {
        let string = element.value;
        let currentState = JSON.stringify(element.editor);
        let currentText = JSON.parse(currentState).document[0].text[0].string;
        let matches = currentText.match(/\[.*?\]/g);
        let allVariables = [];
        if (matches && matches.length > 0) {
          for (let i = 0; i < matches.length; i++) {
            let result = matches[i].substring(1, matches[i].length - 1);
            allVariables.push(result);
          }
          for (let i = 0; i < matches.length; i++) {
            string = string.replace(
              "[" + allVariables[i] + "]",
              `<button id="${allVariables[i]}" onclick="alert('${
                allVariables[i]
              }')">${allVariables[i]}</button>`
            );
          }
        }
        this.previewContent = string;
        this.jsonContent = JSON.stringify(element.editor);
        this.saveEditDataToDb();
      });
    },
    preview() {
      console.log(this.realContent);
    },
    savePreviewDataToDb() {
      this.$apollo
        .mutate({
          mutation: saveDoc(this.id, this.previewContent, "PREVIEW")
        })
        .then(data => {
          // Result
          console.log(data.data.saveDoc.modifiedID);
          this.id = data.data.saveDoc.modifiedID;
        })
        .catch(error => {
          // Error
          console.error(error);
        });
    },
    saveEditDataToDb() {
      this.$apollo
        .mutate({
          mutation: saveDoc(
            this.id,
            this.jsonContent.replace(/\"/g, '\\"'),
            "EDIT"
          )
        })
        .then(data => {
          // Result
          this.id = data.data.saveDoc.modifiedID;
          this.savePreviewDataToDb();
        })
        .catch(error => {
          // Error
          console.error(error);
        });
    }
  },
  watch: {
    editorContent: {
      handler: "updateEditorContent"
    }
  }
};
</script>

<style scoped>
@import "../assets/css/trix.css";
.container {
  height: 100%;
}
</style>

