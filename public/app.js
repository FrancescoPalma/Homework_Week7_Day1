var button = document.getElementById('add-button');

var handleClick = function() {

  var quoteInput = document.getElementById('quote')
  var quote = quoteInput.value;

  var authorInput = document.getElementById('author')
  var author = authorInput.value;

  var li = document.createElement('li');
  li.innerText = quote + ' ' + '|' + ' ' + author;

  var ul = document.getElementById('list');
  ul.appendChild(li);

}           

button.onclick = handleClick;

quote1 = {
  text: "That's cool.",
  author: 'Rick'
}

quote2 = {
  text: "If you pronounce my name correctly we might become friends.",
  author: 'Zsolt'
}

quote3 = {
  text: "No Pikachu? Sad.",
  author: 'Valerie'
}

quote4 = {
  text: "Bang!",
  author: 'Tony'
}

quotes = [quote1, quote2, quote3, quote4];
