<template>
  <div class="container">
    <router-link :to="`/preview/${id}`" target="_blank">Preview</router-link>
    <VueTrix v-model="editorContent"/>
  </div>
</template>

<script>
import VueTrix from "vue-trix";
import { saveDoc, getDoc } from "../apollo/queries";
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
      id: this.$route.params.id,
      getDoc: ""
    };
  },
  created() {
    this.$apollo
      .query({
        query: getDoc(this.$route.params.id, "EDIT")
      })
      .then(data => {
        console.log(data.data.getDoc.content);
        this.editorContent = JSON.parse(data.data.getDoc.content);
      });
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
        this.savePreviewDataToDb();
      });
    },
    savePreviewDataToDb() {
      this.$apollo
        .mutate({
          mutation: saveDoc(
            this.id,
            this.previewContent.replace(/\"/g, '\\"'),
            "PREVIEW"
          )
        })
        .then(data => {
          console.log(data.data.saveDoc.modifiedID);
        })
        .catch(error => {
          console.error(error);
        });
    },
    saveEditDataToDb() {
      this.$apollo
        .mutate({
          mutation: saveDoc(this.id, this.jsonContent, "EDIT")
        })
        .then(data => {
          this.savePreviewDataToDb();
        })
        .catch(error => {
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

