export const renderTips = () => {
  const tips = [
      {
          type: "Tip1",
          tip: "🐼", 
      },
      {
          type: "Tip2",
          tip: "🟡",
      },
      {
          type: "Tip3",
          tip: "😊",
      },
      {
          type: "Tip4",
          tip: "😴",
      },
      {
          type: "Tip5",
          tip: "😴",
      },
      {
          type: "Tip6",
          tip: "😎"
      },  
    
  ];
  var tipsCopy = tips.slice();

  const chooseTip = () => {
    if(tipsCopy.length == 0) {
      tipsCopy = tips.slice();
    }
    var index = Math.floor(Math.random() * tipsCopy.length);
    var tip = tipsCopy[index];
    tipsCopy.splice(index, 1);

    let tipSpan = document.createElement("span");
    let tipType = document.createElement("STRONG");
    let tipText = document.createElement("span");
    tipType.innerHTML = "🛒 " + tip.type + ": ";
    tipText.innerHTML = tip.tip;
    tipSpan.appendChild(tipType);
    tipSpan.appendChild(tipText);
    return tipSpan;
  };

  const tipSequence = () => {
    var newTip = chooseTip();
    setTimeout(function() {
      try {
        var tipElement = document.getElementById("tips");
        tipElement.classList.add("hide");
        setTimeout(function() {
          // tipElement.innerHTML = newTip;
          tipElement.innerHTML = "";
          tipElement.appendChild(newTip);
          tipElement.classList.remove("hide");
          tipSequence();
        }, 100);
      }
      catch(error) {
        return;
      }
    }, 1000);
  }

  let newTip = chooseTip();
  var tipElement = document.getElementById("tips");
  tipElement.innerHTML = "";
  tipElement.appendChild(newTip);
  tipSequence();
}