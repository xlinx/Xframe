import xlinx from "../utils/xlinx";

export class skys {
  constructor() {
    this._init = (command) =>{
      let aScene=document.querySelector(command.sense);
        const a_entity_Box=document.createElement('a-sky');
        a_entity_Box.setAttribute('color', command.color);
        aScene.appendChild(a_entity_Box);
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

