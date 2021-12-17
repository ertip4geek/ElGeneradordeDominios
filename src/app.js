// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let pronoun = ["the", "her", "our"];
let adjetivo = ["ugly", "bastard", "fit"];
let noun = ["desk", "duck", "fork"];
let domainExt = [".com", ".cool"];
let domainGenerator = "";

for (let a = 0; a < pronoun.length; a++) {
  // let domainGenerator = pronoun[a];
  for (let i = 0; i < adjetivo.length; i++) {
    // let pronoun = adjetivo[i];
    for (let x = 0; x < domainExt.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        // domainGenerator = domainGenerator + (pronoun + adjetivo + domainExt);
        domainGenerator =
          domainGenerator +
          "<li>" +
          pronoun[a] +
          adjetivo[i] +
          noun[y] +
          domainExt[x] +
          "</li>";
        console.log(domainGenerator);
      }
    }
  }
}
let div = (document.querySelector(
  ".domain_generator" //clase en HTML file
).innerHTML = domainGenerator); //puede aplicar estilos y tags HTML

// document.getElementById("generate").addEventListener("click", setRandomName);
