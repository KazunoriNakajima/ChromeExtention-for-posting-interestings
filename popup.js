"use strict";

// fix
window.addEventListener("load", async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  let yourWebhookURL = localStorage.getItem("yourWebhookURL");
  if (!yourWebhookURL) {
    // Prompt for one if a username isn't found
    yourWebhookURL = window.prompt("slackのyourWebhookURLは？");
    localStorage.setItem("yourWebhookURL", yourWebhookURL);
  }


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
      yourWebhookURL;
      // "https://hooks.slack.com/services/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";
        // "https://hooks.slack.com/services/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";
      // "https://hooks.slack.com/services/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";
      // "https://hooks.slack.com/services/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";
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
      const data = {
        text: `<${tab.url}>\n${message}`,

        username: "masashi",
        // icon_url: "image/T02DS9VKWLU-U02RZU1281G-227adde3fd71-512.png",
      };
      fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify(data),
      }).then((responce) => {
        if (!responce.ok) {
          alert("エラーレスポンスが帰ってきました");
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
  const impersonationButtonElement = document.getElementById("btn-impersonation");
  impersonationButtonElement.addEventListener("click", ()=>{
    if (impersonBox.style.display === "block") {
      impersonBox.style.display = "none";
    } else {
      impersonBox.style.display = "block";
    }
  });
});