window.addEventListener("load", async () => {
  let url = "";
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  const URLEl = document.getElementsByClassName("URL");
  URLEl[0].innerText = "URL: " + tab.url;
  document.getElementById("btn-post").addEventListener("click", () => {
    function sendMessage(message) {
      const webhookURL =
        "https://hooks.slack.com/services/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";
      const messages = document.getElementsByName("q");
      for (let i = 0; i < messages.length; i++) {
        // messages[i].
      }
      const data = {
        text: `<${tab.url}>` + `\n` + message,
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
    sendMessage("test");
  });
});
