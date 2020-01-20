window.onload = function() {
  let textArea = this.document.getElementById("textArea");
  bigger = () => {
    this.setInterval(growBigger, 500);
  };
  growBigger = () => {
    //textArea.style.fontSize = "2rem";
    let oldfontsize = textArea.style.fontSize;
    if (!oldfontsize) oldfontsize = "12pt";
    let newfontsize = this.parseInt(oldfontsize) + 2;
    textArea.style.fontSize = newfontsize + "pt";
  };
  ischecked = id => {
    let chkbox = this.document.getElementById(id);
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
};
