//based on a country name, give two fun facts about that country
function getCountryFacts(name, country) {
  const url =
    "http://localhost:3000/facts?name=" + name + "&country=" + country;

  return fetch(url).then((res) => res.text());
}

const form = document.getElementById("personForm");
const helloBox = document.getElementById("helloBox");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const country = document.getElementById("country").value.trim();
  if (name && country) {
    getCountryFacts(name, country)
      .then((facts) => {
        helloBox.textContent = `Hello ${name}, you are from ${country}. Here are some facts about your country: ${facts}`;
        helloBox.style.display = "block";
      })
      .catch(() => {
        helloBox.textContent = `Hello ${name}, you are from ${country}. Sorry, could not fetch facts right now.`;
        helloBox.style.display = "block";
      });
  } else {
    helloBox.style.display = "none";
  }
});
