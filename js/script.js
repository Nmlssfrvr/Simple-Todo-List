"use strict";

window.onload = function()
{
  AddTodo("First thing");
  AddTodo("Second thing");
  AddListenerForEnterOnload();
  if(IsTouchDevice())
    ShowCrosses();
  else
    HideCrosses();
}

function onAddTodo()
{
  let todoTextNode = document.getElementById("TodoText");
  if (todoTextNode?.value?.length !== 0) 
  {

    AddTodo(todoTextNode.value);
    todoTextNode.value = "";
  }
}

function AddTodo(todoText)
{
  let ul = document.getElementById("TodoList");
  let newSpan = document.createElement("span");
  newSpan.classList.add("deleteCross");
  newSpan.append("×");
  let newLi = document.createElement("li");
  let liCount = ul.getElementsByTagName("li").length + 1;
  newLi.appendChild(newSpan);
  newLi.append(todoText);
  AddDeleteListenerForCross(newSpan);
  AddCheckedListenerForLi(newLi);
  ul.appendChild(newLi);
}

function AddDeleteListenerForCrossesOnload()
{
  let crosses = document.getElementsByClassName("deleteCross");
  for(let cross of crosses)
  {
    AddDeleteListenerForCross(cross);
  }
}

function AddDeleteListenerForCross(crossSpan)
{
  crossSpan.addEventListener ("click",
  function ()
  {
    crossSpan.parentElement.remove();
    event.stopPropagation();
  });
}

function AddListenerForEnterOnload()
{
  let input = document.getElementById("TodoText");
  input.addEventListener("keypress", (KeyPressed) =>
  {
    if(KeyPressed.key === "Enter")
    {
      onAddTodo();
    }
  })
}

function AddCheckedListenerForLisOnload()
{
  let lis = document.getElementById("TodoList").getElementsByTagName("li");
  for(let li of lis)
  {
    AddCheckedListenerForLi(li);
  }
  
}

function AddCheckedListenerForLi(li)
{
  li.addEventListener("click", 
  function()
  {
    if (li.classList.contains("checked"))
      li.classList.remove("checked");
    else 
      li.classList.add("checked");
  })
}

function IsTouchDevice() 
{
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0)) || ("ontouchstart" in document.documentElement);
}

function ShowCrosses()
{
  let crosses = document.getElementsByClassName("deleteCross");
  for(let cross of crosses)
  {
    cross.style.visibility = "visible";
  }
}

function HideCrosses()
{
  let crosses = document.getElementsByClassName("deleteCross");
  for(let cross of crosses)
  {
    cross.style.visibility = "hidden";
  }
}