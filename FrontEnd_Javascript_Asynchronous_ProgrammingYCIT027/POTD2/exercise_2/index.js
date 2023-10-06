// Remove unnecessary elements from the DOM. Refer to the above webpage to see what exactly you do and do not need.
document.querySelector("p").remove();
document.querySelector("h2").remove();

// Add a browser name at the marked location; use the window.navigator object.
document.getElementById("browserName").textContent =
  "Browser name: " + window.navigator.userAgent;

//   Add the calculated area using the outerWidth and outerHeight in the marked location, available in the window object.
document.getElementById("windowSize").textContent =
  "Area of the window: " + window.outerWidth * window.outerHeight;

//   Add URL information: "The URL information is as follows:" element in separate elements.

const urlInformations = document.getElementById("URL");
const hostname = document.createElement("span");
hostname.textContent = "Hostname: " + window.location.hostname;
const url = document.createElement("span");
url.textContent = "URL: " + window.location.href;
urlInformations.innerHTML = "The URL information is as follows:<br><br>";
urlInformations.appendChild(hostname);
urlInformations.innerHTML += "<br><br>";
urlInformations.appendChild(url);
