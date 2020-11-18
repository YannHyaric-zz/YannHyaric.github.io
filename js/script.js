$(document).ready(function () {
  // typing text animation script
  if (document.getElementsByTagName("html")[0].getAttribute("lang") == "br") {
    var typed = new Typed(".typing", {
      strings: ["Desenvolvedor", "Programador", "Engenheiro de Software"],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });
  } else if (
    document.getElementsByTagName("html")[0].getAttribute("lang") == "fr"
  ) {
    var typed = new Typed(".typing", {
      strings: ["Développeur", "Programmeur", "Ingénieur logiciel"],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });
  } else {
    var typed = new Typed(".typing", {
      strings: ["Developer", "Programmer", "Software Engineer"],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });
  }
});
