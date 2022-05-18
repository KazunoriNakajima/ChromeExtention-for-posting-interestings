"use strict";

window.addEventListener("load", async () => {
  let yourWebhookURL = localStorage.getItem("yourWebhookURL");
  if (!yourWebhookURL) {
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
      const webhookURL = yourWebhookURL;
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
      };
      fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify(data),
      }).then((responce) => {
        if (!responce.ok) {
          alert("エラーレスポンスが帰ってきました: " + responce.status);
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
});
