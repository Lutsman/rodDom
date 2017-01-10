
if(!$.cookie('limit')){
  $.cookie('limit', new Date(), {
      expires: 15
  });
}
var now = new Date($.cookie('limit'));

var timeend = new Date(now.getFullYear(), now.getMonth(), now.getDate()+15);

today = new Date();

today = Math.floor((timeend-today)/1000);
/*------------Таймер------------------------*/
var limit = today; // в секундах

function processTimer(){

  if (limit > 7) {
    setTimeout("processTimer()",1000);
    limit--;
  } else {
  // alert("Время вышло");
  }
  var limit_str = "";
  var deys = parseInt((limit / 3600) / 24);
  var hours = parseInt((limit-(deys*3600*24))/3600);
  var minutes = parseInt( ((limit-(deys*3600*24))- (hours*3600))/60);
  var seconds = parseInt(limit-(deys*3600*24+hours*3600+minutes*60));
  if (deys < 10) deys = "0" + deys;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  limit_str = "<div class='timer_block'><div class='deys'>"+deys+"</div><div class='hours'>"+hours+"</div><div class='minutes'>"+minutes+"</div><div class=seconds>"+seconds+"</div></div>";
  // вывод времени
  el_timer = document.getElementById("timer");
  if (el_timer) el_timer.innerHTML = limit_str;
}
  //Запуск таймера
    processTimer();

