import xlinx from "../utils/xlinx";
//              <a-plane rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
export class planes {
  constructor() {
    this._init = (command) =>{
      let aScene=document.querySelector(command.sense);
      const a_entity_Box=document.createElement('a-plane');
      a_entity_Box.setAttribute('rotation', "-90 0 0");
      a_entity_Box.setAttribute('width', "111");
      a_entity_Box.setAttribute('height', "111");
      a_entity_Box.setAttribute('color', command.color);
      aScene.appendChild(a_entity_Box);
      // this.registerComponent();
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
    AFRAME.registerComponent('', {
      init: function () {
      },

      tick: function () {
        // Don't call query selector in here, query beforehand.
        for (let i = 0; i < this.entities.length; i++) {
          // Do something with entities.
        }
      }
    });
  };
};

