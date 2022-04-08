const text = document.querySelector('.text');

// $& - спецсимвол, вставляет все найденное совпадение.

text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

text.addEventListener('mouseover', function(event) {
    if (event.target.tagName != 'SPAN') return;
    event.target.classList.add('active');

});


text.addEventListener('touchmove', function(event) {
    if (event.target.tagName != 'SPAN') return;
    event.target.classList.add('active');

});
