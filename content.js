// Listen for messages

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // If the received message has the expected format...
    console.log(request.data);
    
    var responseList = [];
    var itm = document.getElementsByClassName('col2');

    let itemlist = document.createElement("p");
    
    for (let el in itm){
        if(itm[el].innerHTML){
            var leftText = itm[el].parentElement.children[0].textContent;
            
            if(leftText === "Item Name"){
                itemlist.innerHTML += itm[el].innerHTML;
            };
            console.log(itemlist.innerHTML);
            if(leftText === "Item Number"){
                itemlist.innerHTML = itm[el].innerHTML + " " + itemlist.innerHTML;
            };
            console.log(itemlist.innerHTML);
        };
    };
    responseList.push(itemlist.innerHTML);

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
