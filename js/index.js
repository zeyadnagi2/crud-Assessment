var webName = document.getElementById("webName");
var webUrl = document.getElementById("webUrl");

var tBody = document.getElementById("tBody");

var websites = [];

if (localStorage.getItem("websites")) {
  websites = JSON.parse(localStorage.getItem("websites"));
  displayWebsites();
}

// add function
function addWebsite() {
  var name = webName.value.trim();
  var url = webUrl.value.trim();

  var isNameValid = /^[a-zA-Z]+$/.test(name);
  var isUrlValid = /^www\.[a-zA-Z0-9\-]+\.com$/.test(url);

  updateInputClass(webName, isNameValid);
  updateInputClass(webUrl, isUrlValid);

  if (!isNameValid || !isUrlValid) return;

  var website = {
    siteName: name,
    siteUrl: url,
  };

  websites.push(website);
  localStorage.setItem("websites", JSON.stringify(websites));
  clearInputs();
  displayWebsites();

}

// update inputs colors
function updateInputClass(inputElement, isValid) {
  inputElement.classList.remove("is-valid", "is-invalid");
  inputElement.classList.add(isValid ? "is-valid" : "is-invalid");
}

// clear inputs function
function clearInputs() {
  webName.value = "";
  webUrl.value = "";

  webName.classList.remove("is-valid", "is-invalid");
  webUrl.classList.remove("is-valid", "is-invalid");
}

// display function
function displayWebsites() {
  var content = ``;

  for (var i = 0; i < websites.length; i++) {
    content += `<tr>
            <td>${i}</td>
            <td class="fw-semibold">${websites[i].siteName}</td>
            <td>
              <button class="btn btn-visit">
                <a href="https://${websites[i].siteUrl}"><i class="fa-solid fa-eye"></i> Visit </a>
              </button>
            </td>
            <td>
              <button onclick="deleteWebsite(${i})" class="btn btn-delete">
                <i class="fa-solid fa-trash-can"></i> Delete
              </button>
            </td>
          </tr>`;
  }

  tBody.innerHTML = content;
}

// delete function
function deleteWebsite(indexElement) {
  websites.splice(indexElement, 1);
  localStorage.setItem("websites", JSON.stringify(websites));
  displayWebsites();
}
