var input = document.getElementById("input");
var parent = document.getElementById("parent");
var btn = document.getElementById("btn");
var edit = document.getElementById("btnEdit");
var clear = document.getElementById("btnCA");
var counter = 0;

btn.addEventListener("click",AddToDo);
function AddToDo() {
  if (input.value == "") {
    alert("Cannot Input Blank Content!");
  } else {
  var li = document.createElement("li");
  var text = document.createTextNode(input.value);
  var x = document.createElement("button");
  var y = document.createElement("button");
  var ecnt = 0;

  y.innerHTML = "Done";
  x.innerHTML="x";
  
  color(x);
  color(y);
  x.style.visibility="hidden"; 
  y.style.visibility="hidden"; 

  li.appendChild(text);
  li.appendChild(x);
  li.appendChild(y);
  parent.appendChild(li);
  
  cnt(++counter);
  input.value = "";
  
  y.addEventListener("click",done); 
  x.addEventListener("click",remove);
  clear.addEventListener("click",clearAll);
  edit.addEventListener("click",editSave);
  }
  
function color(el) {
  el.style.borderWidth = "1px";
  el.style.margin="3px";
  if (el.innerHTML == "x") {
  el.style.backgroundColor="red";
  } 
  else if (el.innerHTML == "Done") {
  el.style.backgroundColor="green";
  }
}

function cnt(n) {
  if (n != 0) {
  edit.style.visibility="visible";
  clear.style.visibility="visible";
  } else {
  edit.style.visibility="hidden"; 
  clear.style.visibility="hidden";
  }
}

  function done() {
   li.style.textDecoration = "line-through";
   li.style.color="green";
   li.removeChild(y);
  }
  
    function remove() {
    parent.removeChild(li);
    cnt(--counter);
  }
  
    function clearAll() {
    parent.innerHTML ="";
    cnt(counter=0);
  }
  
    function editSave() {
      if (ecnt == 0) {
      input.readOnly = true;
      edit.innerHTML="SAVE";
      x.style.visibility="visible"; 
      y.style.visibility="visible";
      ecnt++;
      } else {
      input.readOnly = false;
      edit.innerText="EDIT";
      x.style.visibility="hidden"; 
      y.style.visibility="hidden";
      ecnt--;
      }
    }
}//end of to do function
