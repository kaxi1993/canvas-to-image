# canvas-to-image

[![npm version](https://badge.fury.io/js/canvas-to-image.svg)](https://badge.fury.io/js/canvas-to-image)
[![npm](https://img.shields.io/npm/dt/canvas-to-image.svg?maxAge=2592000)](https://www.npmjs.com/package/canvas-to-image)
[![Bower version](https://badge.fury.io/bo/canvas-to-image.svg)](https://badge.fury.io/bo/canvas-to-image)

**canvas-to-image** extends [FileSaver](https://github.com/eligrey/FileSaver.js/) and simplifies way to download canvas as image.

**canvas-to-image** can be used for web-apps and also can be used for working with [node-webkit](https://github.com/nwjs/nw.js)


## Instalation

```bash
$ npm install canvas-to-image
$ bower install canvas-to-image
```

## Quick Start

```bash
downloadAs(canvasId, options);

options = {
    name: 'custom name', // default image
    type: 'jpg',         // default png, accepted values jpg or png
    quality: 0.4         // default 1, can select any value from 0 to 1 interval
}

```

**Download as jpg**
```bash
downloadAs('my-canvas', {
    name: 'myImage',
    type: 'jpg',
    quality: 0.7
});
```
**Download as png**
```bash
downloadAs('my-canvas', {
    name: 'myImage',
    type: 'png',
    quality: 1
});

or

downloadAs('my-canvas');
```

## Examples

```html
<html>
<head></head>
<body>
    <canvas id="my-canvas"></canvas>
    ...
    <script src="/canvas-to-image/js/canvas-to-image.min.js"></script>
    <script>
        downloadAs('my-canvas', {
            name: 'myJPG',
            type: 'jpg',
            quality: 0.5
        });

        downloadAs('my-canvas', { 
            name: 'myPNG',
            type: 'png',
            quality: 1
        });
        
        downloadAs('my-canvas', {});
    </script>
</body>
</html>
```

```bash
or using browserify
browserify -r canvas-to-image > bundle.js
```

```html
<html>
<head></head>
<body>
    <canvas id="my-canvas"></canvas>
    ...
    <script src="bundle.js"></script>
    <script>
        downloadAs('my-canvas', {
            name: 'myJPG',
            type: 'jpg',
            quality: 0.5
        });

        downloadAs('my-canvas', { 
            name: 'myPNG',
            type: 'png',
            quality: 1
        });
        
        downloadAs('my-canvas', {});
    </script>
</body>
</html>
```


## The MIT License (MIT)

Copyright (c) 2016 Lasha Kakhidze

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/kaxi1993/canvas-to-image/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
