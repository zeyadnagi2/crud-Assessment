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
  var website = {
    siteName: webName.value,
    siteUrl: webUrl.value,
  };

  websites.push(website);
  console.log(websites);
  clearInputs();
  localStorage.setItem("websites", JSON.stringify(websites));
  displayWebsites();
}

// clear inputs function
function clearInputs() {
  webName.value = null;
  webUrl.value = null;
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



