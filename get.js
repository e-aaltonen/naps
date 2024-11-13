
function processResponse(response){
  var msg = document.createElement("p");
  msg.innerHTML = "";
 
  for (let r in response){
      msg.innerHTML += response[r] + "\n<br>";
  };
  
  document.getElementById("container").appendChild(msg);
  var output = document.getElementById("container");
  navigator.clipboard.writeText(output.textContent);
  
  if (response) {
    console.log(response);
  };
};

document.addEventListener('DOMContentLoaded', function() {
  var buttonActive = document.getElementById('active');
  var buttonAll = document.getElementById('all');

  buttonActive.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {data: "active"}, response => {

        processResponse(response);
      });
    });
  });

  buttonAll.addEventListener('click', function(){
    chrome.tabs.query({}, tabs => {
      for(let tid in tabs){
        chrome.tabs.sendMessage(tabs[tid].id, {data: "all"}, response => {
          processResponse(response);
        });
      };
    });
  });
});

