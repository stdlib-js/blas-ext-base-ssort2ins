<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ssort2ins

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.



<section class="usage">

## Usage

To use in Observable,

```javascript
ssort2ins = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssort2ins@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ssort2ins = require( 'path/to/vendor/umd/blas-ext-base-ssort2ins/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssort2ins@v0.2.2-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ssort2ins;
})();
</script>
```

#### ssort2ins( N, order, x, strideX, y, strideY )

Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array `x` using insertion sort.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );

ssort2ins( x.length, 1.0, x, 1, y, 1 );

console.log( x );
// => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array `x` is sorted in **decreasing** order. If `order > 0.0`, the input strided array `x` is sorted in **increasing** order. If `order == 0.0`, the input strided arrays are left unchanged.
-   **x**: first input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: `x` index increment.
-   **y**: second input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: `y` index increment.

The `N` and `stride` parameters determine which elements in the strided arrays are accessed at runtime. For example, to sort every other element

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );

ssort2ins( 2, -1.0, x, 2, y, 2 );

console.log( x );
// => <Float32Array>[ 3.0, -2.0, 1.0, -4.0 ]

console.log( y );
// => <Float32Array>[ 2.0, 1.0, 0.0, 3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Sort every other element...
ssort2ins( 2, -1.0, x1, 2, y1, 2 );

console.log( x0 );
// => <Float32Array>[ 1.0, 4.0, 3.0, 2.0 ]

console.log( y0 );
// => <Float32Array>[ 0.0, 3.0, 2.0, 1.0 ]
```

#### ssort2ins.ndarray( N, order, x, strideX, offsetX, y, strideY, offsetY )

Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array the strided array using insertion sort and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );

ssort2ins.ndarray( x.length, 1.0, x, 1, 0, y, 1, 0 );

console.log( x );
// => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: `x` starting index.
-   **offsetY**: `y` starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );

ssort2ins.ndarray( 3, 1.0, x, 1, x.length-3, y, 1, y.length-3 );

console.log( x );
// => <Float32Array>[ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]

console.log( y );
// => <Float32Array>[ 0.0, 1.0, 2.0, 5.0, 3.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions leave `x` and `y` unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^2)`.
-   The algorithm is efficient for **small** strided arrays (typically `N <= 20`) and is particularly efficient for sorting strided arrays which are already substantially sorted.
-   The algorithm is **stable**, meaning that the algorithm does **not** change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided arrays are sorted **in-place** (i.e., the input strided arrays are **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssort2ins@v0.2.2-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var rand;
var sign;
var x;
var y;
var i;

x = new Float32Array( 10 );
y = new Float32Array( 10 ); // index array
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
    y[ i ] = i;
}
console.log( x );
console.log( y );

ssort2ins( x.length, -1.0, x, -1, y, -1 );
console.log( x );
console.log( y );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-ext/base/dsort2ins`][@stdlib/blas/ext/base/dsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/gsort2ins`][@stdlib/blas/ext/base/gsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/ssortins`][@stdlib/blas/ext/base/ssortins]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using insertion sort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ssort2ins.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ssort2ins

[test-image]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ssort2ins/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ssort2ins?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ssort2ins.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ssort2ins/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ssort2ins/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ssort2ins/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsort2ins]: https://github.com/stdlib-js/blas-ext-base-dsort2ins/tree/umd

[@stdlib/blas/ext/base/gsort2ins]: https://github.com/stdlib-js/blas-ext-base-gsort2ins/tree/umd

[@stdlib/blas/ext/base/ssortins]: https://github.com/stdlib-js/blas-ext-base-ssortins/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
