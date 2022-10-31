# A-FRAME w/ bootstrap, nodeJS, react and Parcel

Init [AFrame](https://aframe.io) Lib and Include [Bootstrap](https://getbootstrap.com)'s source Sass and individual JavaScript plugins with [Parcel](https://parceljs.org) by [DECADE.TW](https://decade.tw) w/TTUniversity.



## Entity-Component-System
Box = Position + Geometry + Material
Light Bulb = Position + Light + Geometry + Material + Shadow
Sign = Position + Geometry + Material + Text
VR Controller = Position + Rotation + Input + Model + Grab + Gestures
Ball = Position + Velocity + Physics + Geometry + Material
Player = Position + Camera + Input + Avatar + Identity

## react + aframe (not use)
accroding to [react-aframe](https://github.com/supermedium/aframe-react)
recommendtion. ==> using vanilla A-Frame and aframe-state-component with static templating over aframe-react. React wastes a lot of cycles and incurs a lot of memory garbage. aframe-react is often abused where it is too easy to place 3D/real-time logic at the React layer, causing poor performance (e.g., doing React renders on ticks). aframe-react applications frequently ignore the prescribed ECS framework of A-Frame. Internally, React does tons of computation to compute what changed, and flushes it to the entire application. It is apparent React ecosystem does not care much about memory as most examples allocate functions and objects in the render method, and where immutables are popular. With only ~10ms per frame to do all computation, there is little room for React's massive system.

## bootstrap + aframe
use to handle layout w/ whole HTML.

## How to use

```sh
git clone https://github.com/xlinx/Aframe_Bootstrap.git
cd into folder
npm install
npm parcelX

```
![DECADE.TW](https://decade.tw/wp-content/uploads/2021/09/DECADE_new.png)
