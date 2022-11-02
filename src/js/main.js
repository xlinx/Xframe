import * as bootstrap from 'bootstrap';
import xlinx, {xprint} from "./utils/xlinx";
import {boxs} from "./ecs_components/boxs";
import {skys} from "./ecs_components/skys";
import {planes} from "./ecs_components/planes";
import {particles} from "./ecs_components/particles";
import {cameras} from "./ecs_components/cameras";
import {threeX} from "./threeX/threeX";




document.addEventListener("DOMContentLoaded", function(){

});
window.addEventListener("load", function(event) {
  new cameras().init({sense:'a-scene'});
  new skys().init({color:"#000010",sense:'a-scene'});
  new planes().init({color:"rgba(6,167,6,0.18)",sense:'a-scene'});
  new boxs().init({sense:'a-scene',POI:[Math.random()*11,0,0]});
// new particles().init({sense:'a-scene',ComponentName:'particle-system',ComponentValue:'color: #EF0000,#44CC00'});
  new threeX().init({root:'threeX_render_root'});

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
