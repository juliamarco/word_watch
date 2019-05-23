import $ from 'jquery'

$(document).ready(() => {
  getTopWord();
})

const getTopWord = () => {
  let url = 'http://localhost:3000/api/v1/top_word';
  fetch(url)
  .then( response => response.json() )
  .then( data => {
    let word = Object.keys(data["word"]);
    let count = data["word"][word];
    $(".top-word h3").text(`Top word from Word Watch API: ${word}`);
    $("#word-count").text(`Count: ${count}`)
  })
}
