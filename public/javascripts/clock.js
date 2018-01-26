

setInterval(
  function() { 
    document.querySelectorAll('.clock')[0].innerHTML = moment().format('hh:mm');
  }, 
1000);

