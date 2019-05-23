window.onload = function() {
  var element = document.querySelector("trix-editor");
  var pubBtn = document.getElementsByClassName("preview");
  var startRange = 0;
  var endRange = 0;
  var opened = false;
  element.addEventListener("trix-change", e => {
    // Get contents of editor to a string
    let content = element.editor.getDocument().toString();

    // Get cursor position, and use it to determine the last character typed
    let cursorPosition = element.editor.getPosition();
    let lastCharacterTyped = content.substring(
      cursorPosition - 1,
      cursorPosition
    );

    if (lastCharacterTyped === "@") {
      let currentState = JSON.stringify(element.editor);
      let currentText = JSON.parse(currentState).document[0].text[0].string;
      let matches = currentText.match(/\[.*?\]/g);
      let allVariables = [];
      for (let i = 0; i < matches.length; i++) {
        let result = matches[i].substring(1, matches[i].length - 1);
        allVariables.push(result);
      }
      let string = element.value;
      for (let i = 0; i < matches.length; i++) {
        string = string.replace(
          "[" + allVariables[i] + "]",
          `<button id="${allVariables[i]}" onclick="alert('${
            allVariables[i]
          }')">${allVariables[i]}</button>`
        );
      }
      console.log(string);
    }
  });

  pubBtn[0].addEventListener("click", () => {
    // console.log("Running fetch");
    // fetch("http://localhost:4000/graphql", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   credentials: "include",
    //   body: JSON.stringify({
    //     query: `mutation ($name: String) { createProcessTemplate(input:{name: $name }) {
    //           _id
    //           name
    //           description
    //       }
    //       }`,
    //     variables: {
    //       name: "Funny process 23"
    //     }
    //   })
    // })
    //   .then(data => data.json())
    //   .then(console.log);
    console.log("Click!");
  });
};
