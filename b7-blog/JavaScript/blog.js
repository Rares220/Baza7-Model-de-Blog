const liNewest = document.getElementById("s2-navbar-newest");
const liOldest = document.getElementById("s2-navbar-oldest");
const liPopular = document.getElementById("s2-navbar-popular");

const article1 = document.getElementById("article1");
const article2 = document.getElementById("article2");
const article3 = document.getElementById("article3");
const article4 = document.getElementById("article4");
const article5 = document.getElementById("article5");
const article6 = document.getElementById("article6");
const article7 = document.getElementById("article7");
const article8 = document.getElementById("article8");
const article9 = document.getElementById("article9");
const article10 = document.getElementById("article10");

// N E W E S T
liNewest.addEventListener("click", () => {
  article1.style.order = "10";
  article2.style.order = "9";
  article3.style.order = "8";
  article4.style.order = "7";
  article5.style.order = "6";
  article6.style.order = "5";
  article7.style.order = "4";
  article8.style.order = "3";
  article9.style.order = "2";
  article10.style.order = "1";

  if(liOldest.classList.contains("js-selected") || liPopular.classList.contains("js-selected")){
    liOldest.classList.remove("js-selected");
    liPopular.classList.remove("js-selected");
  }
  if(liNewest.classList.contains("js-selected")){
    article8.style.color="black";
  }
  else{
    liNewest.classList.add("js-selected");
  }
});

// O L D E S T
liOldest.addEventListener("click", () => {
  article1.style.order = "1";
  article2.style.order = "2";
  article3.style.order = "3";
  article4.style.order = "4";
  article5.style.order = "5";
  article6.style.order = "6";
  article7.style.order = "7";
  article8.style.order = "8";
  article9.style.order = "9";
  article10.style.order = "10";

  if(liNewest.classList.contains("js-selected") || liPopular.classList.contains("js-selected")){
    liNewest.classList.remove("js-selected");
    liPopular.classList.remove("js-selected");
  }
  if(liOldest.classList.contains("js-selected")){
    article8.style.color="black";
  }
  else{
    liOldest.classList.add("js-selected");
  }
});

// P O P U L A R
liPopular.addEventListener("click", () => {
  article1.style.order = "3";
  article2.style.order = "7";
  article3.style.order = "2";
  article4.style.order = "1";
  article5.style.order = "10";
  article6.style.order = "5";
  article7.style.order = "4";
  article8.style.order = "8";
  article9.style.order = "6";
  article10.style.order = "9";

  if(liNewest.classList.contains("js-selected") || liOldest.classList.contains("js-selected")){
    liNewest.classList.remove("js-selected");
    liOldest.classList.remove("js-selected");
  }
  if(liPopular.classList.contains("js-selected")){
    article8.style.color="black";
  }
  else{
    liPopular.classList.add("js-selected");
  }
});