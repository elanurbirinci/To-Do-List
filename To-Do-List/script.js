document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      addItem(input.value);
    }
      
  });
  
  document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
  });
  
  addItem = (input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");
  
    item.className = "item";
    text.textContent = input;
  
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", () => {
      checkIcon.style.color = "limegreen";
    })
    div.appendChild(checkIcon);
  
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", () => {
      item.remove();
    })
    div.appendChild(trashIcon);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
  }


 
    setInterval(()=>{
        const time=document.querySelector("#time");
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let day_night="AM";
    if(hours>12){
        day_night="PM";
        hours=hours-12;
    }
    if(hours<10){
        hours="0"+ hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    time.textContent=hours+":"+minutes+":"+seconds+" "+day_night;
    });
   