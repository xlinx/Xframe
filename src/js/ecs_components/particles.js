// <a-entity position="0 2.25 -15" particle-system="color: #EF0000,#44CC00"></a-entity>
import xlinx from "../utils/xlinx";
export class particles {
  constructor() {
    this._init = (command) =>{
      let aScene=document.querySelector(command.sense);
      const a_entity=document.createElement('a-entity');
      a_entity.setAttribute(command.ComponentName,command.ComponentValue);
      a_entity.setAttribute('id', 'a-entity_id1');
      aScene.appendChild(a_entity);
      a_entity.startParticles();
      this.registerComponent(command);
    }
    this._render = (command) =>{
      // console.log('[1][code-that-does-this][]',command);
    }
  }

  init(command) {
    return this._init(command);
  };
  render(command) {
    return this._render(command);
  };

  registerComponent(command) {
    AFRAME.registerComponent(command.ComponentName, {
      init: function () {
        xlinx.xprint("[1][DECADE][addEventListener][text]", this.el, 'red');
        this.el.components['particle-system'].startParticles();
        //this.el.components['particle-system'].stopParticles();
      }
    });
  };

};

