import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const body = document.getElementById("app");
  let dogJSON;

  let dogs = [
    "finnish/lapphund",
    "husky",
    "malamute",
    "retriever/golden",
    "collie/border"
  ];
  let breed;
  let url;
  
    async function loopDogs() {
    for (let item of dogs) {
      breed = item;
      await getDogs(breed);
    }
  }

  async function getDogs() {
    //console.log(breed)
    url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    //console.log(breed);

    const res = await fetch(url);
    dogJSON = await res.json();
    //console.log(dogJSON)
    let src = dogJSON.message;
    let txt;
    let name;

    if (src.substring(30, 31) === "h") {
      const url2 =
        "https://en.wikipedia.org/api/rest_v1/page/summary/Husky?redirect=false";
      const res2 = await fetch(url2);
      const wiki = await res2.json();
      name = wiki.title;
      txt = wiki.extract;
    } else if (src.substring(30, 31) === "m") {
      const url2 =
        "https://en.wikipedia.org/api/rest_v1/page/summary/Alaskan_Malamute?redirect=false";
      const res2 = await fetch(url2);
      const wiki = await res2.json();
      name = wiki.title;
      txt = wiki.extract;
    } else if (src.substring(30, 31) === "f") {
      const url2 =
        "https://en.wikipedia.org/api/rest_v1/page/summary/Finnish_Lapphund?redirect=false";
      const res2 = await fetch(url2);
      const wiki = await res2.json();
      name = wiki.title;
      txt = wiki.extract;
    } else if (src.substring(30, 31) === "r") {
      const url2 =
        "https://en.wikipedia.org/api/rest_v1/page/summary/Golden_Retriever?redirect=false";
      const res2 = await fetch(url2);
      const wiki = await res2.json();
      name = wiki.title;
      txt = wiki.extract;
    } else if (src.substring(30, 31) === "c") {
      const url2 =
        "https://en.wikipedia.org/api/rest_v1/page/summary/Border_Collie?redirect=false";
      const res2 = await fetch(url2);
      const wiki = await res2.json();
      name = wiki.title;
      txt = wiki.extract;
    }

    const cont = document.createElement("div");
    cont.classList.add("container");
    const wikiItem = document.createElement("div");
    wikiItem.classList.add("wiki-item");
    const wikiHeader = document.createElement("h1");
    wikiHeader.innerText = name;
    wikiHeader.classList.add("wiki-header");
    const wikiContent = document.createElement("div");
    wikiContent.classList.add("wiki-content");
    const wikiText = document.createElement("p");
    wikiText.innerText = txt;
    wikiText.classList.add("wiki-text");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const img = document.createElement("img");
    img.classList.add("wiki-img");

    img.src = src;
    img.append(src);
    imgContainer.append(img);
    wikiContent.append(imgContainer);
    wikiContent.append(wikiText);
    wikiItem.append(wikiHeader);
    wikiItem.append(wikiContent);
    cont.append(wikiItem);
    body.append(cont);
  }
  loopDogs()
}
