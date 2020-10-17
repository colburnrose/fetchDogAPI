"use strict";

function getDogImage(input) {
  const options = { method: "GET" };
  let URL = `https://dog.ceo/api/breeds/image/random/${input}`;

  fetch(URL, options)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong!"));
}

function displayResults(responseObj) {
  console.log(responseObj);

  let images = responseObj.message;
  let result = getImages(images);
  $(".results-img").html(result);
}

function getImages(images) {
  let result = "";
  for (let i = 0; i < images.length; i++) {
    result += `<img src="${images[i]}" class="results-img"/>`;
  }
  return result;
}

// FUNC: watchForm()
function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let quantity = $(".quantity").val();
    getDogImage(quantity);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
