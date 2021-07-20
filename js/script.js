window.onload = function()
{
  
  AddTodo("First thing");
  AddTodo("Second thing");
  AddDeleteListenerForCrossesOnload();
  AddListenerForEnterOnload();
  AddCheckedListenerForLisOnload();
}


function onAddTodo()
{
  let TodoTextNode = document.getElementById("TodoText");
  if (TodoTextNode?.value?.length !== 0) 
  {

    AddTodo(TodoTextNode.value);
    TodoTextNode.value = "";
  }
}

function AddTodo(TodoText)
{
  let ul = document.getElementById("TodoList");
  let newSpan = document.createElement("span");
  newSpan.classList.add("deleteRow");
  newSpan.append("×");
  let newLi = document.createElement("li");
  let LiCount = ul.getElementsByTagName("li").length + 1;
  newLi.appendChild(newSpan);
  newLi.append(TodoText);
  AddDeleteListenerForCross(newSpan);
  AddCheckedListenerForLi(newLi);
  ul.appendChild(newLi);
}

function AddDeleteListenerForCrossesOnload()
{
  let crosses = document.getElementsByClassName("deleteRow");
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