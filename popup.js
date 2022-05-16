// document.getElementById("btn").addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: onRun,
//   });
// });

// function onRun() {
//   document.body.style.backgroundColor = "#fcc";
// }

// window.addEventListener("load", async () => {
document.getElementById("btn").addEventListener("click", async () => {
  let url = "";
  // async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  //   return tab;
  // }
  // chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  //   url = tabs[0].url;
  //   console.log(tabs);
  // });
  const URLEl = document.getElementsByClassName("URL");
  URLEl[0].innerText = "URL: " + typeof tab;
});
