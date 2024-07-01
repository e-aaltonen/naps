// Listen for messages

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // If the received message has the expected format...
    console.log(request.data);
    
    var responseList = [];
    var spec = document.getElementsByClassName('col2 ng-binding');

    let speclista = document.createElement("p");
    
    for (let el in spec){
        if(spec[el].innerHTML){
            var leftText = spec[el].parentElement.children[0].textContent;
            
            if(leftText === "Specification Name"){
                speclista.innerHTML += spec[el].innerHTML;
            };
            console.log(speclista.innerHTML);
            if(leftText === "CT Specification Number"){
                speclista.innerHTML = spec[el].innerHTML + " " + speclista.innerHTML;
            };
            console.log(speclista.innerHTML);
        };
    };
    responseList.push(speclista.innerHTML);

    var spanHL = document.getElementsByClassName('highlighted');
    //console.log(bolds.length);
    
    for (let el in spanHL){
        if(spanHL[el].innerHTML){
            if(spanHL[el].parentElement.className != "highlighted"){
                responseList.push(spanHL[el].innerHTML);
            };
        };
    };
    
    for (let el in responseList){
        console.log(responseList[el]);
    };

    console.log(responseList);
    
    sendResponse(responseList);
});
