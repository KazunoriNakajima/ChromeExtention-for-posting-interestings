"use strict";

// fix
window.addEventListener("load", async () => {
  // localStorage.getItem("yourWebhookURL") = 0;  //for demo
  let yourWebhookURL = localStorage.getItem("yourWebhookURL");
  if (!yourWebhookURL) {
    // Prompt for one if a WebhookUR isn't found
    yourWebhookURL = window.prompt("slackのyourWebhookURLは？");
    localStorage.setItem("yourWebhookURL", yourWebhookURL);
  }
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  const URLEl = document.getElementsByClassName("URL");
  URLEl[0].innerText = "URL: " + tab.url;
  document.getElementById("btn-post").addEventListener("click", () => {
    function sendMessage() {
      let message = "";
      const messages = [
        "みんな見てね！",
        "面白い記事見つけたよ",
        "明日のinterestsで紹介したい",
      ];
      const webhookURL =
<<<<<<< HEAD
      // "https://hooks.slack.com/services/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";
      yourWebhookURL;
=======
        // "https://hooks.slack.com/services/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";
        yourWebhookURL;
>>>>>>> 5487341993c210e2bd9b78774223febeec3fe14f
      // "https://hooks.slack.com/services/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";
      console.log(webhookURL);
      for (let i = 1; i <= 3; i++) {
        const id = `message${i}`;
        const el = document.getElementById(id);
        if (el.checked) {
          message = messages[i - 1];
          el.checked = false;
        }
      }
      if (message) {
        message = message + "\n" + textForm.value;
      } else {
        message = textForm.value;
      }

<<<<<<< HEAD
      // if (document.getElementById)const impersonationUsername = 
=======
      // if (document.getElementById)const impersonationUsername =
>>>>>>> 5487341993c210e2bd9b78774223febeec3fe14f

      const data = {
        text: `<${tab.url}>\n${message}`,
      };
<<<<<<< HEAD
      if (document.getElementById("person2").checked){
        data["username"]= "MasashiMaeda(ジブリ好き)";
        data["icon_url"]="https://kazunorinakajima.github.io/digdig/T02DS9VKWLU-U02RZU1281G-227adde3fd71-512.png";
      }else if(document.getElementById("person3").checked){
        data["username"]= "ShimaBoo(魔神ブゥ好き)";
        data["icon_url"]="https://kazunorinakajima.github.io/digdig/shimaboo.png";
=======
      if (document.getElementById("person2").checked) {
        data["username"] = "MasashiMaeda(ジブリ好き)";
        data["icon_url"] =
          "https://kazunorinakajima.github.io/digdig/T02DS9VKWLU-U02RZU1281G-227adde3fd71-512.png";
      } else if (document.getElementById("person3").checked) {
        data["username"] = "ShimaBoo(魔神ブゥ好き)";
        data["icon_url"] =
          "https://kazunorinakajima.github.io/digdig/shimaboo.png";
>>>>>>> 5487341993c210e2bd9b78774223febeec3fe14f
      }
      fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify(data),
      }).then((responce) => {
        if (!responce.ok) {
<<<<<<< HEAD
          alert("エラーレスポンスが帰ってきました: "+ responce.status);
=======
          alert("エラーレスポンスが帰ってきました: " + responce.status);
>>>>>>> 5487341993c210e2bd9b78774223febeec3fe14f
        }
      });
    }
    const textForm = document.getElementById("text");
    sendMessage();
    textForm.value = "";
  });
  document.getElementById("btn-setting").addEventListener("click", () => {
    yourWebhookURL = window.prompt("slackのyourWebhookURLを入力");
    localStorage.setItem("yourWebhookURL", yourWebhookURL);
  });
  const impersonBox = document.getElementById("impersonation-box");
  impersonBox.style.display = "none";
<<<<<<< HEAD
  const impersonationButtonElement = document.getElementById("btn-impersonation");
  impersonationButtonElement.addEventListener("click", ()=>{
=======
  const impersonationButtonElement =
    document.getElementById("btn-impersonation");
  impersonationButtonElement.addEventListener("click", () => {
>>>>>>> 5487341993c210e2bd9b78774223febeec3fe14f
    if (impersonBox.style.display === "block") {
      impersonBox.style.display = "none";
    } else {
      impersonBox.style.display = "block";
    }
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 5487341993c210e2bd9b78774223febeec3fe14f
