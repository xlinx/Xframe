import xlinx from "../utils/xlinx";

export class boxs {
  constructor() {
    this._init = (command) =>{
      let aScene=document.querySelector(command.sense);
      for(let i=0;i<3;i++){
        const a_entity_Box=document.createElement('a-box');
        a_entity_Box.classList.add('clickable');
        a_entity_Box.setAttribute('code-to-attach-to-box', '');
        a_entity_Box.setAttribute('id', 'aBox_id_'+i);
        a_entity_Box.setAttribute('height', '1');
        a_entity_Box.setAttribute('width', '1');
        a_entity_Box.setAttribute('depth', '0');
        a_entity_Box.setAttribute('position', `${command.POI[0]}+${i*3} 0.5 -3`);
        a_entity_Box.setAttribute('rotation', `0 90 0`);
        a_entity_Box.setAttribute('color', '#4CC3D9');
        aScene.appendChild(a_entity_Box);
      }
      // this.registerComponent();
    }
    this._render = (command) =>{

    }
  }

  init(command) {
    return this._init(command);
  };
  render(command) {
    return this._render(command);
  };
  registerComponent(command) {
    AFRAME.registerComponent('code-that-does-this', {
      init: function () {
        // Code here.
        console.log('[1][code-that-does-this][]',this.el);
        xlinx.xprint("[1][DECADE][addEventListener][text]", this.el, 'red');

      }
    });

    AFRAME.registerComponent('code-to-attach-to-box', {
      init: function () {
        // Code here.
        console.log('[2][code-to-attach-to-box][]',this.el);
        xlinx.xprint("[2][DECADE][addEventListener][text]", this.el, 'red');

      }
    });
  };
};

