var submit_button = document.querySelector('#submit-btn');
var clear_button = document.querySelector('#clear-btn');
var gif_area = document.querySelector('#gif-area');
var api_key = 'hdoLc0t0tqrmt8s8e1zOF7rsAUb0nXRs';

function getResults(e) {
    e.preventDefault();
    gif_area.innerHTML = "";
    var input = document.getElementById("search-bar").value;

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + api_key + "&limit=10");
    xhr.done(function(data) {
        for(var i = 0; i < data.data.length; i++) {
            url = data.data[i].images.fixed_height.url
            gif_area.innerHTML += "<img src=" + url + ">"
        }
    });
}

submit_button.addEventListener('click', getResults);
clear_button.addEventListener('click', function() {
    gif_area.innerHTML = "";
})