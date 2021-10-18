//Get by ID
//let h1 = document.getElementById('headerOne');
//h1.style.color = "red";

//Get by tag name
//let headingtwo = document.getElementsByTagName('h1');
////console.log(headingtwo);

//navigate multiple elements like an array
//headingtwo[0,1].style.color = 'red';

/*console.log(listItems[2].textContent);
listItems[1].textContent = 'Strawberries';
console.log(listItems);*/

//let doorItemsClone = [...doorItems];
//console.log("showLink")
//window.location.replace('4thpage.html')

let doorItems = document.getElementsByClassName('door');
console.log(doorItems);

var urls = ["2ndpage.html", "3rdpage.html", "4thpage.html"];
var random = Math.floor(Math.random()*urls.length);

doorItems.forEach(function(item){
    //get attribute
    //let link = document.getElementById('doors');
    //let showLink = link.getAttribute('href');
    //set attribute
    item.setAttribute('href', random);
    //window.location = urls[random];
    
})









