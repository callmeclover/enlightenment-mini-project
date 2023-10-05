window.onload = () => {
    document.getElementById('enl').classList.toggle("light")
  }
  
  function typeWriter(text, n, elem) {
    if (n < (text.length)) {
      $('.' + elem).html(text.substring(0, n + 1));
      n++;
      setTimeout(function() {
        typeWriter(text, n, elem)
      }, 100);
    }
  }
  
  window.onload = (function(e) {
    e.stopPropagation();
  
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
  