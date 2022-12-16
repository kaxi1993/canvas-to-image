# canvas-to-image

[![npm version](https://badge.fury.io/js/canvas-to-image.svg)](https://badge.fury.io/js/canvas-to-image)
[![npm](https://img.shields.io/npm/dt/canvas-to-image.svg?maxAge=2592000)](https://www.npmjs.com/package/canvas-to-image)

**canvas-to-image** extends [FileSaver](https://github.com/eligrey/FileSaver.js/) and simplifies way to save canvas as image.

## Installation

```bash
npm install canvas-to-image
```

## Quick Start

```js
import canvasToImage from 'canvas-to-image';

canvasToImage(canvasEl, options);

canvasEl // canvas html element or id attribute of canvas 

options = {
  name: 'custom name', // default image
  type: 'jpg',         // default png, accepted values jpg or png
  quality: 0.4         // default 1, can select any value from 0 to 1 range
}

```

**Download as jpg**
```js
const canvasEl = document.getElementById('myCanvas');

canvasToImage(canvasEl, {
  name: 'myImage',
  type: 'jpg',
  quality: 0.7
});
```
**Download as png**
```js
canvasToImage('myCanvas', {
  name: 'myImage',
  type: 'png',
  quality: 1
});

or

canvasToImage('myCanvas');
```

## Examples

```js
import React, { useRef, useEffect } from 'react';
import canvasToImage from 'canvas-to-image';


const Canvas = props => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  }, []);

  const handleDownload = async () => {
    canvasToImage(canvasRef.current);
  };

  return (
    <div>
      <canvas ref={canvasRef} {...props} />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default Canvas;
```

```html
<html>
<head></head>
<body>
  <canvas id="myCanvas"></canvas>
  ...
  <script src="./canvas-to-image/js/canvas-to-image.min.js"></script>
  <script>
    const canvasEl = document.getElementById('myCanvas');

    canvasToImage(canvasEl, {
      name: 'myJPG',
      type: 'jpg',
      quality: 0.5
    });

    canvasToImage('myCanvas', { 
      name: 'myPNG',
      type: 'png',
      quality: 1
    });

    canvasToImage('myCanvas');
  </script>
</body>
</html>
```

## License
Copyright (c) 2020 Lasha Kakhidze. This code is released under the [MIT](https://github.com/kaxi1993/canvas-to-image/blob/master/LICENSE) license.
***
