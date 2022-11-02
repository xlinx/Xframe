//<a-entity camera look-controls position="0 1.6 0"></a-entity>
import xlinx from "../utils/xlinx";

export class cameras {
  constructor() {
    this._init = (command) =>{
      let aScene=document.querySelector(command.sense);
      const a_entity=document.createElement('a-camera');
      a_entity.setAttribute('camera', '');
      a_entity.setAttribute('look-controls', '');
      a_entity.setAttribute('wasd-controls', '');
      a_entity.setAttribute('position', '0 10 0');
      aScene.appendChild(a_entity);
      //this.registerComponent();
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

  };
};

