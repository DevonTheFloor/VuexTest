function displayItems() {
    const items = document.getElementById("items-display");
    var searchItems = new XMLHttpRequest();
    searchItems.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let itemsList = JSON.parse(this.responseText);
console.log(itemsList);
            console.log(itemsList);
            items.innerHTML = itemsList;
        } else {
            console.log("error");
        }
    };
    searchItems.open("GET" , "http://localhost:3000/api/furniture/");
    searchItems.send();
}
