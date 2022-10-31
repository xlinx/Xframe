import * as bootstrap from 'bootstrap';
import xlinx, {xprint} from "./utils/xlinx";
import {boxs} from "./ecs_components/boxs";


new boxs().init({sense:'a-scene',POI:[Math.random()*5,0,0]});

document.addEventListener("DOMContentLoaded", function(){

});
window.addEventListener("load", function(event) {
  const timer1000ms = setInterval(clock1000ms, 1000);
});

let updatePeriod=20,updatePeriod_count=updatePeriod;
let progressBar=document.getElementById('realtimePeriodCount');
function clock1000ms() {
  // new boxs().init({sense:'a-scene',POI:[Math.random()*5,0,0]});

  progressBar.ariaValueMax=updatePeriod;
  progressBar.innerHTML=updatePeriod_count+"sec";
  progressBar.ariaValueNow=updatePeriod_count;
  progressBar.style.width=updatePeriod_count/updatePeriod*100+"%";
  updatePeriod_count--;
  if(updatePeriod_count==0){
    updatePeriod_count=updatePeriod;
  }
}
function printOSVar(){
  document.querySelector('a-scene').setAttribute('code-that-does-this', '');
  document.querySelector('a-scene').setAttribute('hello-world', '');
  document.querySelector('a-scene').setAttribute('log', '');
}
