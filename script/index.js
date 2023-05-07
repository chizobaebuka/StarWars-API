function main() {
  fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .then((data) => {
      let results = data.results;
      getAPI(results);
    });

  const getAPI = (results) => {
    results.forEach((item, i) => {
      createCard(item.name, item.gender, item.height, i);
    });
  };

  function createCard(name, gender, height, i) {
    let extension;
    let card = document.createElement("div");
    card.className = "card";
    if (i == 5 || i == 7) {
      extension = ".jpeg";
    } else {
      extension = ".jpg";
    }
    card.innerHTML = `
      <div class="card1">
      <img class="card-image" src="./images/image${i}${extension}">
        <h4 class="card-title">${name}</h4>
        <button 
        onclick="document.getElementById('modal-container').style.display='block'" 
          class="btn-primary rounded-pill" data-name="${name}" data-gender="${gender}" data-height="${height}">
          VIEW DETAILS
        </button>
    </div>`;

    document.getElementById("card-container").appendChild(card);

    let button = document.querySelectorAll(".btn-primary");
    button.forEach((item) => {
      item.addEventListener("click", (e) => {
        createModal(e);
      });
    });
  }

  function createModal(e) {
    let modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div id="my-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span onclick="document.getElementById('modal-container').style.display='none'" class="close">&times;</span>
          <h2>CHARACTER DETAILS</h2>
        </div>
        <div class="modal-body">
          <p class="modal-name">${e.target.dataset.name}</p>
          <p class="modal-gender">${e.target.dataset.gender}</p>
          <p class="modal-height">${e.target.dataset.height}</p>
        </div>
        <div class="modal-footer">
          <button onclick="document.getElementById('modal-container').style.display='none'" class="btn-secondary">CLOSE</button>
        </div>
      </div>
    </div>`;
    document.getElementById("modal-container").appendChild(modal);
  }

}

main();

// module.exports = { main };
