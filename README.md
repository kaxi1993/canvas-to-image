# canvas-to-image

[![npm version](https://badge.fury.io/js/canvas-to-image.svg)](https://badge.fury.io/js/canvas-to-image)
[![Bower version](https://badge.fury.io/bo/canvas-to-image.svg)](https://badge.fury.io/bo/canvas-to-image)

**canvas-to-image** extends [FileSaver](https://github.com/eligrey/FileSaver.js/) and simplifies way to download canvas as image.

**canvas-to-image** can be used for web-apps and also can be used for working with [node-webkit](https://github.com/nwjs/nw.js)


## Instalation

```bash
$ bower install canvas-to-image
$ npm install canvas-to-image
```

## Quick Start

```bash
downloadAs(canvasID, imageName, imageType);
```

**Download as jpg**
```bash
downloadAs('my-canvas', 'myImage', 'jpg');
```
**Download as png**
```bash
downloadAs('my-canvas', 'myImage', 'png');
or
downloadAs('my-canvas'); // default type png, name image
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
	    downloadAs('my-canvas', 'myImage', 'jpg');

	    downloadAs('my-canvas');
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


	<script src="bundle.js"></script>
	<script>
		var downloadAs = require('canvas-to-image');
		
		downloadAs('my-canvas', 'myImage', 'jpg');

	    downloadAs('my-canvas');
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
