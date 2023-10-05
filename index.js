function typeWriter(text, n, elem) {
  if (n < (text.length)) {
    $('.' + elem).html(text.substring(0, n + 1));
    n++;
    setTimeout(function() {
      typeWriter(text, n, elem)
    }, 25);
  }
}

window.onload = (function(e) {
  e.stopPropagation();
  
  document.getElementById('enl').classList.toggle("light")
  document.getElementById('display').classList.toggle('fadein')

  var text = $('.test').data('text');
  typeWriter(text, 0, 'test');
  setTimeout(() => {
    var text = $('.pssst').data('text');
    typeWriter(text, 0, 'pssst');
  }, 4000)
  setTimeout(() => {
    var text = $('.underlinedlinkth').data('text');
    typeWriter(text, 0, 'underlinedlinkth');
  }, 4500)
  setTimeout(() => {
    var text = $('.underlinedlinkjl').data('text');
    typeWriter(text, 0, 'underlinedlinkjl');
  }, 5000)
});

//document.onclick = () => {
//	document.getElementById('display').classList.toggle('fadeout')
//}

