//HighOrderFunctions
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//todo functions
// Create a "close" button and append it to each list item
showTodos()
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    let getLocalStorageDataTodos = JSON.parse(localStorage.getItem('Todos')); 
    map(getLocalStorageDataTodos,function(element){
      localStorage.removeItem(element);
    })
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '' || inputValue.trim() == 0) {
    alert("You must write something!");
  } else {
    let getLocalStorageDataTodos = localStorage.getItem("Todos") || [] //getting localstorage
    listArrayTodos = JSON.parse(getLocalStorageDataTodos);  //transforming json string into a js object
    listArrayTodos.push(inputValue); //pushing or adding new value in array
    localStorage.setItem("Todos", JSON.stringify(listArrayTodos)); //transforming js object into a json string 
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function showTodos() {
	let getLocalStorageDataTodos = JSON.parse(localStorage.getItem('Todos')); 
  var li = document.createElement("LI");
  document.getElementById("myUL").appendChild(li);
  
  
   map(getLocalStorageDataTodos,function(element){
    var todo  = $('<li>'+element +'</li>')
    todo.appendTo($('#myUL'))
  })
}
//Login & Register

//get needed items
const loginBtn = $("#login");
const regBtn = $("#register");
var userNameLog = document.getElementById("userLog");
var userNameReg = document.getElementById("userReg");
var userPassLog = document.getElementById("passLog");
var userPassReg = document.getElementById("passReg");

//register function
var addUser = function () { //when user click on add button
  let userEnteredValueName = userNameReg.value; //getting input field value
  let userEnteredValuePass = userPassReg.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("Users") || [] //getting localstorage
  listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  listArray.push({ userName: userEnteredValueName, userPassword: userEnteredValuePass }); //pushing or adding new value in array
  localStorage.setItem("Users", JSON.stringify(listArray)); //transforming js object into a json string
}



regBtn.click(function () {
  addUser()
}
)