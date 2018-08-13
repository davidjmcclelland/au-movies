function reply(){
    console.log("reply");
   var greetingElem = document.getElementById("greeting");
   var firstPart = greetingElem.innerText;
   var lastPart = " World!";
   greetingElem.innerText = firstPart + lastPart;
}
reply();