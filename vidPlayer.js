//events ended

var media = document.querySelector('video');
var sel = document.querySelector('#selection');
var wrap = document.querySelector('#vidwrap');


var play = document.querySelector('#pauseplay');
var ret = document.querySelector('#return');

var buttons = document.querySelectorAll('.title');

function playPauseMedia() {
  if(media.paused) {
    play.setAttribute('data-icon','u');
    media.play();
  } else {
    play.setAttribute('data-icon','P');
    media.pause();
  }
}

function stopMedia() {
	media.src = "";
	sel.style.display = "block";
	wrap.style.display = "none";
}
function startMedia(e) {
	media.src = e.srcElement.dataset.src;
	sel.style.display = "none";
	wrap.style.display = "block";
}

media.addEventListener('ended', stopMedia);
ret.addEventListener('click', stopMedia);
for(let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', startMedia);
}
