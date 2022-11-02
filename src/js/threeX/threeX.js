import * as THREE from 'three';
// const THREE = require('three');
//<a-entity camera look-controls position="0 1.6 0"></a-entity>
import xlinx from "../utils/xlinx";

export class threeX {
  constructor() {
    this._init = (command) =>{
      this.resized = true;
      window.addEventListener('resize', function() {
        this.resized = true;
      })
      this.rootElement=document.getElementById(command.root);

      this.camera = new THREE.PerspectiveCamera( 70, this.rootElement.parentElement.offsetWidth / this.rootElement.parentElement.offsetHeight, 0.01, 10 );
      this.camera.position.z = 1;

      this.three_scene = new THREE.Scene();

      const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
      const material = new THREE.MeshNormalMaterial();

      this.meshX = new THREE.Mesh( geometry, material );
      this.three_scene.add( this.meshX );

      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
      this.renderer.setSize( this.rootElement.parentElement.offsetWidth, this.rootElement.parentElement.offsetHeight );
      this.renderer.setAnimationLoop( this._animation );
      this.rootElement.appendChild( this.renderer.domElement );
      this.renderer.render( this.three_scene, this.camera );


    }
    this._animation=( time ) =>{
      // if (this.resized) resize();
      this.meshX.rotation.x = time / 2000;
      this.meshX.rotation.y = time / 1000;
      this.renderer.render( this.three_scene, this.camera );


    }
    function resize() {
      this.resized = false

      // update the size
      this.renderer.setSize(this.rootElement.parentElement.offsetWidth, this.rootElement.parentElement.offsetHeight)

      // update the camera
      const canvas = this.renderer.domElement
      camera.aspect = canvas.clientWidth/canvas.clientHeight
      camera.updateProjectionMatrix()
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



