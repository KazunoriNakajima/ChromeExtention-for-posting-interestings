"use strict";
window.addEventListener("load", async () => {
  let url = "";
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
        "https://hooks.slack.com/services/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";
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
          alert("エラーレスポンスが帰ってきました");
        }
      });
    }
    const textForm = document.getElementById("text");
    sendMessage();
    textForm.value = "";
  });
});
