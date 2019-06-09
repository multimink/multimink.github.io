window.onload=function() 
{
  timeCount();
}
function timeCount() 
{
  now=new Date ();
  then=new Date ('dec,31,2017,20:47:00');

  difference=(now-then);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  var countPart = document.getElementById('maincounter');

    countPart.getElementsByClassName('days')[0].innerHTML = days;
    countPart.getElementsByClassName('hours')[0].innerHTML = hours;
    countPart.getElementsByClassName('minutes')[0].innerHTML = mins;
    countPart.getElementsByClassName('seconds')[0].innerHTML = secs;

  setTimeout('timeCount()',1000);
}