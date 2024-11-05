window.onload = function () {
  console.log("Hello Everyone");
  const API_URL = "https://restcountries.com/v3.1/all";
  const Root = document.getElementById("root");
  Root.className = "flex flex-row flex-wrap justify-evenly items-center gap-6";
  const search = document.getElementById("search");
  search.type = "text";

  // document.body.appendChild(document.createElement("input"))
  // search.type = "text"
  search.className = "border border-2 rounded p-2 mb-4";

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data
        .sort((a, b) => (a.name.common < b.name.common ? -1 : 1))
        .forEach((country) => {
          const card = document.createElement("div");
          card.classList.add(
            "rounded",
            "border",
            "border-2",
            "hover:bg-slate-200",
            "p-4",
            "cursor-pointer "
          );
          const img = card.appendChild(document.createElement("img"));
          img.src = country.flags.svg;
          img.alt = country.name.common;
          img.className = "w-full h-48 object-cover";
          const countryName = card.appendChild(document.createElement("h2"));
          countryName.textContent = country.name.common;
          countryName.className = "text-3xl font-bold text-center";

          Root.appendChild(card);
        });
    });
};
