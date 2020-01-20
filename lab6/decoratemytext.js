window.onload = function() {
  "use strict"; //use strict mode

  //get relevant HTML elements using their ids // onubstrusive
  const textArea = this.document.getElementById("textArea");
  const decorateBtn = this.document.getElementById("decorateBtn");
  const chkbox = this.document.getElementById("bling");

  //* Method definitions *//

  const startGrowing = () => {
    this.setInterval(growBigger, 500);
  };
  const growBigger = () => {
    //textArea.style.fontSize = "2rem";
    let oldfontsize = textArea.style.fontSize;
    if (!oldfontsize) oldfontsize = "12pt";
    let newfontsize = this.parseInt(oldfontsize) + 2;
    textArea.style.fontSize = newfontsize + "pt";
  };

  const decorate = () => {
    if (chkbox.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "green";
      textArea.style.textDecoration = "underline";
      this.window.document.body.style.background =
        "url(hundred-dollar-bill.jpg)";
    } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
      this.window.document.body.style.background = "white";
    }
  };

  //Use by reference
  decorateBtn.onclick = startGrowing;
  chkbox.onchange = decorate;
};
