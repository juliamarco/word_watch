import $ from 'jquery'

$(document).ready(() => {
  getTopWord();
  $('button').click( () => addWord() );
})

const getTopWord = () => {
  let url = 'https://wordwatch-api.herokuapp.com/api/v1/top_word';
  fetch(url)
  .then( response => response.json() )
  .then( data => {
    let word = Object.keys(data["word"]);
    let count = data["word"][word];
    $(".top-word h3").text(`Top word from Word Watch API: ${word}`);
    $("#word-count").text(`Count: ${count}`)
  })
}

const addWord = () => {
  let words = $('#input').val().split(" ");
  words.forEach( word => postWord(word) );
  $('#input').val("")
}

const postWord = (word) => {
  let url = 'https://wordwatch-api.herokuapp.com/api/v1/words';
  fetch(url, {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ word: {value: word }})
  })
}
