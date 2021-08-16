const getNasaData = async () => {
  const data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=jEaXnhH8Ejlsr5rVyAa0Nopvcp1O8b2eEFK0DdTB&start_date=2021-07-15&end_date=2021-08-11"
  );
  const formattedJson = await data.json();
  formattedJson.forEach((element) => {
    console.log(element);
    let container = document.createElement("div");
    let image = document.createElement("img");
    let secondContainer = document.createElement("div");
    let title = document.createElement("h4");
    let description = document.createElement("p");
    let body = document.querySelector(".mainContainer");
    container.className = "card";
    image.className = "card-img-top";
    secondContainer.className = "card-body";
    title.className = "card-title";
    description.className = "card-text";
    title.innerHTML = element.title;
    image.src = element.url;
    description.innerHTML = element.explanation;
    body.append(container);
    container.appendChild(image);
    body.append(secondContainer);
    secondContainer.appendChild(title);
    secondContainer.appendChild(description);
  });
};

getNasaData();
