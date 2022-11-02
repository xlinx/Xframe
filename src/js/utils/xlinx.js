// import p5 from 'p5';
/*
* author: @xlinx on http://decade.tw
* */
function xprint(msg1,obj, color) {
  if(msg1.startsWith("[DD]",0)&&!printOnce)
    return;
  color = color || "black";
  let bgc = "White";
  switch (color) {
    case "success":  color = "Green";      bgc = "LimeGreen";       break;
    case "info":     color = "Red"; bgc = "Turquoise";       break;
    case "error":    color = "Red";        bgc = "Black";           break;
    case "start":    color = "OliveDrab";  bgc = "PaleGreen";       break;
    case "warning":  color = "Tomato";     bgc = "Black";           break;
    case "end":      color = "Orchid";     bgc = "MediumVioletRed"; break;
    default: color = color;
  }
  console.log("%c=START=" + msg1, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
  // if (typeof msg2 == "object") {
  console.log(obj);
  // }
  console.log("%c=END=" + msg1, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
  global.printOnce=false;
  // return obj;
}
function hsl2rgb(h,s,l)
{
  let a= s*Math.min(l,1-l);
  let f= (n,k=(n+h/30)%12) => l - a*Math.max(Math.min(k-3,9-k,1),-1);
  return [f(0),f(8),f(4)];
}
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function HSLToHex(h,s,l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c/2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}
function RGBtoHSV(r, g, b) {
  if (arguments.length === 1) {
    g = r.g, b = r.b, r = r.r;
  }
  var max = Math.max(r, g, b), min = Math.min(r, g, b),
    d = max - min,
    h,
    s = (max === 0 ? 0 : d / max),
    v = max / 255;

  switch (max) {
    case min: h = 0; break;
    case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
    case g: h = (b - r) + d * 2; h /= 6 * d; break;
    case b: h = (r - g) + d * 4; h /= 6 * d; break;
  }

  return {
    h: h,
    s: s,
    v: v
  };
}
function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
    s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function double(n) {
  return n * 12;
}
function valueApproach(nowVal,destVal,speed) {
  return  ((nowVal * (1.0 - speed)) + (destVal * speed));
}
function calcPolygon(input) {
  //n: number of vertices = number of sides
  //r: radius (circumscribed circle)
  //a: counterclockwise rotation angle in radians
  //cx: center x (offset)
  //cy: center y (offset)
  //round: number of decimal places to keep (0-20)
  var output = []
  for (var i = 1; i <= input.n; i++) {
    output.push({
      x: ((input.r * Math.cos(input.a + 2 * i * Math.PI / input.n)) + input.cx).toFixed(input.round),
      y: ((input.r * Math.sin(input.a + 2 * i * Math.PI / input.n)) + input.cy).toFixed(input.round)
    })
  }
  return output
}
const mat3X = {
  // 移動矩陣
  translation(tx, ty) {
    return [
      1,  0, 0,
      0,  1, 0,
      tx, ty, 1
    ];
  },

  // 縮放矩陣
  scaling(sx, sy) {
    return [
      sx,  0,  0,
      0, sy,  0,
      0,  0,  1
    ];
  },

  // 旋轉矩陣
  rotation(degree) {
    const c = Math.cos(degree);
    const s = Math.sin(degree);
    return [
      c, s, 0,
      -s, c, 0,
      0, 0, 1,
    ];
  },

  // 反射矩陣（以 (x, y) 向量為鏡）
  reflection(x, y) {
    const uu = Math.pow(p5.createVector(x, y).mag(), 2);

    const xx = x * x;
    const yy = y * y;
    const xy2 = x * y * 2;

    return [
      (xx - yy) / uu, xy2 / uu, 0,
      xy2 / uu, (yy - xx) / uu, 0,
      0, 0, 1,
    ];
  },

  // 移動
  translate(m, tx, ty) {
    return this.multiply(m, this.translation(tx, ty));
  },

  // 縮放
  scale(m, sx, sy) {
    return this.multiply(m, this.scaling(sx, sy));
  },

  // 旋轉
  rotate(m, degree) {
    return this.multiply(m, this.rotation(degree));
  },

  // 反射（以 (x, y) 向量為鏡）
  reflect(m, x, y) {
    return this.multiply(m, this.reflection(x, y));
  },

  // 轉為 applyMatrix 可用參數
  forApplyMatrix(m) {
    return m.filter((elem, idx) => (idx + 1) % 3 !== 0);
  },


  // 矩陣相乘
  multiply(a, b) {
    const a00 = a[0], a01 = a[1], a02 = a[2];
    const a10 = a[3], a11 = a[4], a12 = a[5];
    const a20 = a[6], a21 = a[7], a22 = a[8];

    const b00 = b[0], b01 = b[1], b02 = b[2];
    const b10 = b[3], b11 = b[4], b12 = b[5];
    const b20 = b[6], b21 = b[7], b22 = b[8];

    return [
      b00 * a00 + b01 * a10 + b02 * a20,
      b00 * a01 + b01 * a11 + b02 * a21,
      b00 * a02 + b01 * a12 + b02 * a22,

      b10 * a00 + b11 * a10 + b12 * a20,
      b10 * a01 + b11 * a11 + b12 * a21,
      b10 * a02 + b11 * a12 + b12 * a22,

      b20 * a00 + b21 * a10 + b22 * a20,
      b20 * a01 + b21 * a11 + b22 * a21,
      b20 * a02 + b21 * a12 + b22 * a22
    ];
  }
};

export function forApplyMatrix(m) {
  return m.filter((elem, idx) => (idx + 1) % 3 !== 0);
};
//calcPolygon({n: 24, r: 50, a: 0, cx: 0, cy: 0, round: 0})
module.exports = {
  mat3X:mat3X,
  HSLToHex:HSLToHex,
  hslToHex:hslToHex,
  HSVtoRGB:HSVtoRGB,
  RGBtoHSV:RGBtoHSV,
  forApplyMatrix:forApplyMatrix,
  valueApproach:valueApproach,
  calcPolygon:calcPolygon,
  xprint:xprint,
  double: double,
  triple: function(n) {
    return n * 3;
  }
};


// glmatrix.vec3.create(this.box_poi_LU.x,this.box_poi_LU.y);
// this.marks_xyz.push({x:this.box_poi_LU.x,y:this.box_poi_LU.y});
// this.marks_matrix.push(m.copy());
// if(this.marks_matrix.length>50)
//   this.marks_matrix.shift();
// if(this.marks_xyz.length>50)
//   this.marks_xyz.shift();
// this.s.applyMatrix(this.marks_matrix[i].mat4);
// this.s.strokeWeight(2*this.s.noise(3));
// this.s.line(0,0,this.pixelWH.x,0);
