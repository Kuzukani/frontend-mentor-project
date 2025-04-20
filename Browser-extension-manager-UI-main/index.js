function attachEvent() {
  document.querySelectorAll(".toggle-button").forEach((e) => {
    e.addEventListener("click", (e) => {
      setToggleList(e.target.dataset.id, data);
    });
  });
  document.querySelectorAll(".remove-button").forEach((e) => {
    e.addEventListener("click", (e) => {
      setRemoveList(e.target.dataset.id, data);
    });
  });
}

function setRemoveList(target) {
  data = data.filter((e) => {
    return target != e.id;
  });
  generateHtml(data);
}

function setToggleList(target) {
  data = data.map((e) => {
    if (e.id == target) {
      return { ...e, isActive: !e.isActive };
    }
    return e;
  });
  generateHtml(data);
}

function generateHtml() {
  if (extensionMenu == 0) {
    generateHtmlAll();
    attachEvent();
  } else if (extensionMenu == 1) {
    generateHtmlActive();
    attachEvent();
  } else if (extensionMenu == 2) {
    generateHtmlNotActive();
    attachEvent();
  }
}

function generateHtmlAll() {
  let HTML = "";
  data.forEach((e) => {
    HTML += `
      <div class="list-item">
          <div class="info">
            <div class="img">
              <img
                src="${e.logo}"
                alt="${e.name}"
              />
            </div>
            <div class="description">
              <h3>${e.name}</h3>
              <p>${e.description}</p>
            </div>
          </div>
          <div class="action">
            <button data-id="${e.id}" class="remove-button">Remove</button>
            <div class="toggle-button" style="background-color:${
              e.isActive ? "var(--Red-400);" : "var(--Neutral-600)"
            }" data-id="${e.id}">
              <div class="toggle" style="${
                e.isActive ? "left:20px;" : "left:0;"
              }" data-id="${e.id}"></div>
            </div>
          </div>
        </div>
      `;
  });
  document.querySelector(".list").innerHTML = HTML;
}

function generateHtmlActive() {
  let HTML = "";
  data.forEach((e) => {
    if (e.isActive) {
      HTML += `
      <div class="list-item">
          <div class="info">
            <div class="img">
              <img
                src="${e.logo}"
                alt="${e.name}"
              />
            </div>
            <div class="description">
              <h3>${e.name}</h3>
              <p>${e.description}</p>
            </div>
          </div>
          <div class="action">
            <button data-id="${e.id}" class="remove-button">Remove</button>
            <div class="toggle-button" style="background-color:${
              e.isActive ? "var(--Red-400);" : "var(--Neutral-600)"
            }" data-id="${e.id}">
              <div class="toggle" style="${
                e.isActive ? "left:20px;" : "left:0;"
              }" data-id="${e.id}"></div>
            </div>
          </div>
        </div>
      `;
    }
  });
  document.querySelector(".list").innerHTML = HTML;
}

function generateHtmlNotActive() {
  let HTML = "";
  data.forEach((e) => {
    if (e.isActive == false) {
      HTML += `
      <div class="list-item">
          <div class="info">
            <div class="img">
              <img
                src="${e.logo}"
                alt="${e.name}"
              />
            </div>
            <div class="description">
              <h3>${e.name}</h3>
              <p>${e.description}</p>
            </div>
          </div>
          <div class="action">
            <button data-id="${e.id}" class="remove-button">Remove</button>
            <div class="toggle-button" style="background-color:${
              e.isActive ? "var(--Red-400);" : "var(--Neutral-600)"
            }" data-id="${e.id}">
              <div class="toggle" style="${
                e.isActive ? "left:20px;" : "left:0;"
              }" data-id="${e.id}"></div>
            </div>
          </div>
        </div>
      `;
    }
  });
  document.querySelector(".list").innerHTML = HTML;
}

async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data; // Now properly returning the data
  } catch (error) {
    console.error("Error loading JSON:", error);
    return null; // Handle errors gracefully
  }
}

let extensionMenu = 0;
let isLightTheme = true;
let data = await fetchData();

document.querySelector(".theme-toggle").addEventListener("click", () => {
  isLightTheme = !isLightTheme;
  if (isLightTheme) {
    document.querySelector(".theme").href = "./style-light.css";
    document.querySelector(".theme-icon").src = "assets/images/icon-moon.svg";
  } else {
    document.querySelector(".theme").href = "./style-dark.css";
    document.querySelector(".theme-icon").src = "assets/images/icon-sun.svg";
  }
});

//extension menu
const extension = document.querySelectorAll(".extension-button");
extension.forEach((e) => {
  e.addEventListener("click", (e) => {
    extensionMenu = e.target.dataset.button;
    extension.forEach((e, i) => {
      if (i == extensionMenu) {
        e.classList.add("active");
      } else {
        e.classList.remove("active");
      }
    });
    generateHtml(data);
  });
});

generateHtml(data);
