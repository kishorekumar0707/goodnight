(function() {
    let i = 10;
    
    function countdown(callback) {
      setTimeout(function() {
        document.getElementById('countdown').innerText = i--;
        if (i >= 1) {
          countdown(callback);
        } else {
          callback();
        }
      }, 1000);
    }
    
    countdown(function() {
      setTimeout(function() {
        document.getElementById('countdown').innerText = "GOOD NIGHT";
      }, 1000);
    });
  })();