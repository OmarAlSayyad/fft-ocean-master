// threejs.org/license
"use strict";
var THREE = {
    REVISION: "72"
};
"function" === typeof define && define.amd ? define("three", THREE) : "undefined" !== typeof exports && "undefined" !== typeof module && (module.exports = THREE);
void 0 !== self.requestAnimationFrame && void 0 !== self.cancelAnimationFrame || function() {
    for(var a1 = 0, b = [
        "ms",
        "moz",
        "webkit",
        "o"
    ], c = 0; c < b.length && !self.requestAnimationFrame; ++c)self.requestAnimationFrame = self[b[c] + "RequestAnimationFrame"], self.cancelAnimationFrame = self[b[c] + "CancelAnimationFrame"] || self[b[c] + "CancelRequestAnimationFrame"];
    void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout && (self.requestAnimationFrame = function(b) {
        var c = Date.now(), g = Math.max(0, 16 - (c - a1)), f = self.setTimeout(function() {
            b(c + g);
        }, g);
        a1 = c + g;
        return f;
    });
    void 0 === self.cancelAnimationFrame && void 0 !== self.clearTimeout && (self.cancelAnimationFrame = function(a1) {
        self.clearTimeout(a1);
    });
}();
void 0 === Math.sign && (Math.sign = function(a1) {
    return 0 > a1 ? -1 : 0 < a1 ? 1 : +a1;
});
void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
    get: function() {
        return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
    }
});
THREE.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.MinEquation = 103;
THREE.MaxEquation = 104;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.NeverDepth = 0;
THREE.AlwaysDepth = 1;
THREE.LessDepth = 2;
THREE.LessEqualDepth = 3;
THREE.EqualDepth = 4;
THREE.GreaterEqualDepth = 5;
THREE.GreaterDepth = 6;
THREE.NotEqualDepth = 7;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.UVMapping = 300;
THREE.CubeReflectionMapping = 301;
THREE.CubeRefractionMapping = 302;
THREE.EquirectangularReflectionMapping = 303;
THREE.EquirectangularRefractionMapping = 304;
THREE.SphericalReflectionMapping = 305;
THREE.RepeatWrapping = 1E3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.HalfFloatType = 1025;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGBEFormat = THREE.RGBAFormat;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.RGB_PVRTC_4BPPV1_Format = 2100;
THREE.RGB_PVRTC_2BPPV1_Format = 2101;
THREE.RGBA_PVRTC_4BPPV1_Format = 2102;
THREE.RGBA_PVRTC_2BPPV1_Format = 2103;
THREE.Projector = function() {
    console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");
    this.projectVector = function(a1, b) {
        console.warn("THREE.Projector: .projectVector() is now vector.project().");
        a1.project(b);
    };
    this.unprojectVector = function(a1, b) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
        a1.unproject(b);
    };
    this.pickingRay = function(a1, b) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().");
    };
};
THREE.CanvasRenderer = function() {
    console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
    this.domElement = document.createElement("canvas");
    this.clear = function() {};
    this.render = function() {};
    this.setClearColor = function() {};
    this.setSize = function() {};
};
THREE.Color = function(a1) {
    return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(a1);
};
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function(a1) {
        a1 instanceof THREE.Color ? this.copy(a1) : "number" === typeof a1 ? this.setHex(a1) : "string" === typeof a1 && this.setStyle(a1);
        return this;
    },
    setHex: function(a1) {
        a1 = Math.floor(a1);
        this.r = (a1 >> 16 & 255) / 255;
        this.g = (a1 >> 8 & 255) / 255;
        this.b = (a1 & 255) / 255;
        return this;
    },
    setRGB: function(a1, b, c) {
        this.r = a1;
        this.g = b;
        this.b = c;
        return this;
    },
    setHSL: function() {
        function a1(a1, c, d) {
            0 > d && (d += 1);
            1 < d && (d -= 1);
            return d < 1 / 6 ? a1 + 6 * (c - a1) * d : .5 > d ? c : d < 2 / 3 ? a1 + 6 * (c - a1) * (2 / 3 - d) : a1;
        }
        return function(b, c, d) {
            b = THREE.Math.euclideanModulo(b, 1);
            c = THREE.Math.clamp(c, 0, 1);
            d = THREE.Math.clamp(d, 0, 1);
            0 === c ? this.r = this.g = this.b = d : (c = .5 >= d ? d * (1 + c) : d + c - d * c, d = 2 * d - c, this.r = a1(d, c, b + 1 / 3), this.g = a1(d, c, b), this.b = a1(d, c, b - 1 / 3));
            return this;
        };
    }(),
    setStyle: function(a1) {
        var b = function(b) {
            b = parseFloat(b);
            1 > b && console.warn("THREE.Color: Alpha component of color " + a1 + " will be ignored.");
            return b;
        }, c;
        if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a1)) {
            var d = c[2];
            switch(c[1]){
                case "rgb":
                    if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/.exec(d)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, this;
                    if (c = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(d)) return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, this;
                    break;
                case "rgba":
                    if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b(c[4]), this;
                    if (c = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d)) return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, b(c[4]), this;
                    break;
                case "hsl":
                    if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(d)) {
                        var d = parseFloat(c[1]), e = parseInt(c[2], 10) / 100, g = parseInt(c[3], 10) / 100;
                        return this.setHSL(d, e, g);
                    }
                    break;
                case "hsla":
                    if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d)) return d = parseFloat(c[1]), e = parseInt(c[2], 10) / 100, g = parseInt(c[3], 10) / 100, b(c[4]), this.setHSL(d, e, g);
            }
        } else if (c = /^\#([A-Fa-f0-9]+)$/.exec(a1)) {
            b = c[1];
            c = b.length;
            if (3 === c) return this.r = parseInt(b.charAt(0) + b.charAt(0), 16) / 255, this.g = parseInt(b.charAt(1) + b.charAt(1), 16) / 255, this.b = parseInt(b.charAt(2) + b.charAt(2), 16) / 255, this;
            if (6 === c) return this.r = parseInt(b.charAt(0) + b.charAt(1), 16) / 255, this.g = parseInt(b.charAt(2) + b.charAt(3), 16) / 255, this.b = parseInt(b.charAt(4) + b.charAt(5), 16) / 255, this;
        }
        a1 && 0 < a1.length && (b = THREE.ColorKeywords[a1], void 0 !== b ? this.setHex(b) : console.warn("THREE.Color: Unknown color " + a1));
        return this;
    },
    clone: function() {
        return new this.constructor(this.r, this.g, this.b);
    },
    copy: function(a1) {
        this.r = a1.r;
        this.g = a1.g;
        this.b = a1.b;
        return this;
    },
    copyGammaToLinear: function(a1, b) {
        void 0 === b && (b = 2);
        this.r = Math.pow(a1.r, b);
        this.g = Math.pow(a1.g, b);
        this.b = Math.pow(a1.b, b);
        return this;
    },
    copyLinearToGamma: function(a1, b) {
        void 0 === b && (b = 2);
        var c = 0 < b ? 1 / b : 1;
        this.r = Math.pow(a1.r, c);
        this.g = Math.pow(a1.g, c);
        this.b = Math.pow(a1.b, c);
        return this;
    },
    convertGammaToLinear: function() {
        var a1 = this.r, b = this.g, c = this.b;
        this.r = a1 * a1;
        this.g = b * b;
        this.b = c * c;
        return this;
    },
    convertLinearToGamma: function() {
        this.r = Math.sqrt(this.r);
        this.g = Math.sqrt(this.g);
        this.b = Math.sqrt(this.b);
        return this;
    },
    getHex: function() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6);
    },
    getHSL: function(a1) {
        a1 = a1 || {
            h: 0,
            s: 0,
            l: 0
        };
        var b = this.r, c = this.g, d = this.b, e = Math.max(b, c, d), g = Math.min(b, c, d), f, h = (g + e) / 2;
        if (g === e) g = f = 0;
        else {
            var k = e - g, g = .5 >= h ? k / (e + g) : k / (2 - e - g);
            switch(e){
                case b:
                    f = (c - d) / k + (c < d ? 6 : 0);
                    break;
                case c:
                    f = (d - b) / k + 2;
                    break;
                case d:
                    f = (b - c) / k + 4;
            }
            f /= 6;
        }
        a1.h = f;
        a1.s = g;
        a1.l = h;
        return a1;
    },
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    },
    offsetHSL: function(a1, b, c) {
        var d = this.getHSL();
        d.h += a1;
        d.s += b;
        d.l += c;
        this.setHSL(d.h, d.s, d.l);
        return this;
    },
    add: function(a1) {
        this.r += a1.r;
        this.g += a1.g;
        this.b += a1.b;
        return this;
    },
    addColors: function(a1, b) {
        this.r = a1.r + b.r;
        this.g = a1.g + b.g;
        this.b = a1.b + b.b;
        return this;
    },
    addScalar: function(a1) {
        this.r += a1;
        this.g += a1;
        this.b += a1;
        return this;
    },
    multiply: function(a1) {
        this.r *= a1.r;
        this.g *= a1.g;
        this.b *= a1.b;
        return this;
    },
    multiplyScalar: function(a1) {
        this.r *= a1;
        this.g *= a1;
        this.b *= a1;
        return this;
    },
    lerp: function(a1, b) {
        this.r += (a1.r - this.r) * b;
        this.g += (a1.g - this.g) * b;
        this.b += (a1.b - this.b) * b;
        return this;
    },
    equals: function(a1) {
        return a1.r === this.r && a1.g === this.g && a1.b === this.b;
    },
    fromArray: function(a1) {
        this.r = a1[0];
        this.g = a1[1];
        this.b = a1[2];
        return this;
    },
    toArray: function(a1, b) {
        void 0 === a1 && (a1 = []);
        void 0 === b && (b = 0);
        a1[b] = this.r;
        a1[b + 1] = this.g;
        a1[b + 2] = this.b;
        return a1;
    }
};
THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
THREE.Quaternion = function(a1, b, c, d) {
    this._x = a1 || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._w = void 0 !== d ? d : 1;
};
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    get x () {
        return this._x;
    },
    set x (a){
        this._x = a;
        this.onChangeCallback();
    },
    get y () {
        return this._y;
    },
    set y (a){
        this._y = a;
        this.onChangeCallback();
    },
    get z () {
        return this._z;
    },
    set z (a){
        this._z = a;
        this.onChangeCallback();
    },
    get w () {
        return this._w;
    },
    set w (a){
        this._w = a;
        this.onChangeCallback();
    },
    set: function(a1, b, c, d) {
        this._x = a1;
        this._y = b;
        this._z = c;
        this._w = d;
        this.onChangeCallback();
        return this;
    },
    clone: function() {
        return new this.constructor(this._x, this._y, this._z, this._w);
    },
    copy: function(a1) {
        this._x = a1.x;
        this._y = a1.y;
        this._z = a1.z;
        this._w = a1.w;
        this.onChangeCallback();
        return this;
    },
    setFromEuler: function(a1, b) {
        if (!1 === a1 instanceof THREE.Euler) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var c = Math.cos(a1._x / 2), d = Math.cos(a1._y / 2), e = Math.cos(a1._z / 2), g = Math.sin(a1._x / 2), f = Math.sin(a1._y / 2), h = Math.sin(a1._z / 2), k = a1.order;
        "XYZ" === k ? (this._x = g * d * e + c * f * h, this._y = c * f * e - g * d * h, this._z = c * d * h + g * f * e, this._w = c * d * e - g * f * h) : "YXZ" === k ? (this._x = g * d * e + c * f * h, this._y = c * f * e - g * d * h, this._z = c * d * h - g * f * e, this._w = c * d * e + g * f * h) : "ZXY" === k ? (this._x = g * d * e - c * f * h, this._y = c * f * e + g * d * h, this._z = c * d * h + g * f * e, this._w = c * d * e - g * f * h) : "ZYX" === k ? (this._x = g * d * e - c * f * h, this._y = c * f * e + g * d * h, this._z = c * d * h - g * f * e, this._w = c * d * e + g * f * h) : "YZX" === k ? (this._x = g * d * e + c * f * h, this._y = c * f * e + g * d * h, this._z = c * d * h - g * f * e, this._w = c * d * e - g * f * h) : "XZY" === k && (this._x = g * d * e - c * f * h, this._y = c * f * e - g * d * h, this._z = c * d * h + g * f * e, this._w = c * d * e + g * f * h);
        if (!1 !== b) this.onChangeCallback();
        return this;
    },
    setFromAxisAngle: function(a1, b) {
        var c = b / 2, d = Math.sin(c);
        this._x = a1.x * d;
        this._y = a1.y * d;
        this._z = a1.z * d;
        this._w = Math.cos(c);
        this.onChangeCallback();
        return this;
    },
    setFromRotationMatrix: function(a1) {
        var b = a1.elements, c = b[0];
        a1 = b[4];
        var d = b[8], e = b[1], g = b[5], f = b[9], h = b[2], k = b[6], b = b[10], l = c + g + b;
        0 < l ? (c = .5 / Math.sqrt(l + 1), this._w = .25 / c, this._x = (k - f) * c, this._y = (d - h) * c, this._z = (e - a1) * c) : c > g && c > b ? (c = 2 * Math.sqrt(1 + c - g - b), this._w = (k - f) / c, this._x = .25 * c, this._y = (a1 + e) / c, this._z = (d + h) / c) : g > b ? (c = 2 * Math.sqrt(1 + g - c - b), this._w = (d - h) / c, this._x = (a1 + e) / c, this._y = .25 * c, this._z = (f + k) / c) : (c = 2 * Math.sqrt(1 + b - c - g), this._w = (e - a1) / c, this._x = (d + h) / c, this._y = (f + k) / c, this._z = .25 * c);
        this.onChangeCallback();
        return this;
    },
    setFromUnitVectors: function() {
        var a1, b;
        return function(c, d) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            b = c.dot(d) + 1;
            1E-6 > b ? (b = 0, Math.abs(c.x) > Math.abs(c.z) ? a1.set(-c.y, c.x, 0) : a1.set(0, -c.z, c.y)) : a1.crossVectors(c, d);
            this._x = a1.x;
            this._y = a1.y;
            this._z = a1.z;
            this._w = b;
            this.normalize();
            return this;
        };
    }(),
    inverse: function() {
        this.conjugate().normalize();
        return this;
    },
    conjugate: function() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this.onChangeCallback();
        return this;
    },
    dot: function(a1) {
        return this._x * a1._x + this._y * a1._y + this._z * a1._z + this._w * a1._w;
    },
    lengthSq: function() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    },
    length: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    },
    normalize: function() {
        var a1 = this.length();
        0 === a1 ? (this._z = this._y = this._x = 0, this._w = 1) : (a1 = 1 / a1, this._x *= a1, this._y *= a1, this._z *= a1, this._w *= a1);
        this.onChangeCallback();
        return this;
    },
    multiply: function(a1, b) {
        return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a1, b)) : this.multiplyQuaternions(this, a1);
    },
    multiplyQuaternions: function(a1, b) {
        var c = a1._x, d = a1._y, e = a1._z, g = a1._w, f = b._x, h = b._y, k = b._z, l = b._w;
        this._x = c * l + g * f + d * k - e * h;
        this._y = d * l + g * h + e * f - c * k;
        this._z = e * l + g * k + c * h - d * f;
        this._w = g * l - c * f - d * h - e * k;
        this.onChangeCallback();
        return this;
    },
    multiplyVector3: function(a1) {
        console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
        return a1.applyQuaternion(this);
    },
    slerp: function(a1, b) {
        if (0 === b) return this;
        if (1 === b) return this.copy(a1);
        var c = this._x, d = this._y, e = this._z, g = this._w, f = g * a1._w + c * a1._x + d * a1._y + e * a1._z;
        0 > f ? (this._w = -a1._w, this._x = -a1._x, this._y = -a1._y, this._z = -a1._z, f = -f) : this.copy(a1);
        if (1 <= f) return this._w = g, this._x = c, this._y = d, this._z = e, this;
        var h = Math.acos(f), k = Math.sqrt(1 - f * f);
        if (.001 > Math.abs(k)) return this._w = .5 * (g + this._w), this._x = .5 * (c + this._x), this._y = .5 * (d + this._y), this._z = .5 * (e + this._z), this;
        f = Math.sin((1 - b) * h) / k;
        h = Math.sin(b * h) / k;
        this._w = g * f + this._w * h;
        this._x = c * f + this._x * h;
        this._y = d * f + this._y * h;
        this._z = e * f + this._z * h;
        this.onChangeCallback();
        return this;
    },
    equals: function(a1) {
        return a1._x === this._x && a1._y === this._y && a1._z === this._z && a1._w === this._w;
    },
    fromArray: function(a1, b) {
        void 0 === b && (b = 0);
        this._x = a1[b];
        this._y = a1[b + 1];
        this._z = a1[b + 2];
        this._w = a1[b + 3];
        this.onChangeCallback();
        return this;
    },
    toArray: function(a1, b) {
        void 0 === a1 && (a1 = []);
        void 0 === b && (b = 0);
        a1[b] = this._x;
        a1[b + 1] = this._y;
        a1[b + 2] = this._z;
        a1[b + 3] = this._w;
        return a1;
    },
    onChange: function(a1) {
        this.onChangeCallback = a1;
        return this;
    },
    onChangeCallback: function() {}
};
THREE.Quaternion.slerp = function(a1, b, c, d) {
    return c.copy(a1).slerp(b, d);
};
THREE.Vector2 = function(a1, b) {
    this.x = a1 || 0;
    this.y = b || 0;
};
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function(a1, b) {
        this.x = a1;
        this.y = b;
        return this;
    },
    setX: function(a1) {
        this.x = a1;
        return this;
    },
    setY: function(a1) {
        this.y = a1;
        return this;
    },
    setComponent: function(a1, b) {
        switch(a1){
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            default:
                throw Error("index is out of range: " + a1);
        }
    },
    getComponent: function(a1) {
        switch(a1){
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw Error("index is out of range: " + a1);
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y);
    },
    copy: function(a1) {
        this.x = a1.x;
        this.y = a1.y;
        return this;
    },
    add: function(a1, b) {
        if (void 0 !== b) return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a1, b);
        this.x += a1.x;
        this.y += a1.y;
        return this;
    },
    addScalar: function(a1) {
        this.x += a1;
        this.y += a1;
        return this;
    },
    addVectors: function(a1, b) {
        this.x = a1.x + b.x;
        this.y = a1.y + b.y;
        return this;
    },
    addScaledVector: function(a1, b) {
        this.x += a1.x * b;
        this.y += a1.y * b;
        return this;
    },
    sub: function(a1, b) {
        if (void 0 !== b) return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a1, b);
        this.x -= a1.x;
        this.y -= a1.y;
        return this;
    },
    subScalar: function(a1) {
        this.x -= a1;
        this.y -= a1;
        return this;
    },
    subVectors: function(a1, b) {
        this.x = a1.x - b.x;
        this.y = a1.y - b.y;
        return this;
    },
    multiply: function(a1) {
        this.x *= a1.x;
        this.y *= a1.y;
        return this;
    },
    multiplyScalar: function(a1) {
        this.x *= a1;
        this.y *= a1;
        return this;
    },
    divide: function(a1) {
        this.x /= a1.x;
        this.y /= a1.y;
        return this;
    },
    divideScalar: function(a1) {
        0 !== a1 ? (a1 = 1 / a1, this.x *= a1, this.y *= a1) : this.y = this.x = 0;
        return this;
    },
    min: function(a1) {
        this.x > a1.x && (this.x = a1.x);
        this.y > a1.y && (this.y = a1.y);
        return this;
    },
    max: function(a1) {
        this.x < a1.x && (this.x = a1.x);
        this.y < a1.y && (this.y = a1.y);
        return this;
    },
    clamp: function(a1, b) {
        this.x < a1.x ? this.x = a1.x : this.x > b.x && (this.x = b.x);
        this.y < a1.y ? this.y = a1.y : this.y > b.y && (this.y = b.y);
        return this;
    },
    clampScalar: function() {
        var a1, b;
        return function(c, d) {
            void 0 === a1 && (a1 = new THREE.Vector2, b = new THREE.Vector2);
            a1.set(c, c);
            b.set(d, d);
            return this.clamp(a1, b);
        };
    }(),
    floor: function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    },
    ceil: function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    },
    round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    },
    roundToZero: function() {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        return this;
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    },
    dot: function(a1) {
        return this.x * a1.x + this.y * a1.y;
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y;
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y);
    },
    normalize: function() {
        return this.divideScalar(this.length());
    },
    distanceTo: function(a1) {
        return Math.sqrt(this.distanceToSquared(a1));
    },
    distanceToSquared: function(a1) {
        var b = this.x - a1.x;
        a1 = this.y - a1.y;
        return b * b + a1 * a1;
    },
    setLength: function(a1) {
        var b = this.length();
        0 !== b && a1 !== b && this.multiplyScalar(a1 / b);
        return this;
    },
    lerp: function(a1, b) {
        this.x += (a1.x - this.x) * b;
        this.y += (a1.y - this.y) * b;
        return this;
    },
    lerpVectors: function(a1, b, c) {
        this.subVectors(b, a1).multiplyScalar(c).add(a1);
        return this;
    },
    equals: function(a1) {
        return a1.x === this.x && a1.y === this.y;
    },
    fromArray: function(a1, b) {
        void 0 === b && (b = 0);
        this.x = a1[b];
        this.y = a1[b + 1];
        return this;
    },
    toArray: function(a1, b) {
        void 0 === a1 && (a1 = []);
        void 0 === b && (b = 0);
        a1[b] = this.x;
        a1[b + 1] = this.y;
        return a1;
    },
    fromAttribute: function(a1, b, c) {
        void 0 === c && (c = 0);
        b = b * a1.itemSize + c;
        this.x = a1.array[b];
        this.y = a1.array[b + 1];
        return this;
    }
};
THREE.Vector3 = function(a1, b, c) {
    this.x = a1 || 0;
    this.y = b || 0;
    this.z = c || 0;
};
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(a1, b, c) {
        this.x = a1;
        this.y = b;
        this.z = c;
        return this;
    },
    setX: function(a1) {
        this.x = a1;
        return this;
    },
    setY: function(a1) {
        this.y = a1;
        return this;
    },
    setZ: function(a1) {
        this.z = a1;
        return this;
    },
    setComponent: function(a1, b) {
        switch(a1){
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            default:
                throw Error("index is out of range: " + a1);
        }
    },
    getComponent: function(a1) {
        switch(a1){
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw Error("index is out of range: " + a1);
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y, this.z);
    },
    copy: function(a1) {
        this.x = a1.x;
        this.y = a1.y;
        this.z = a1.z;
        return this;
    },
    add: function(a1, b) {
        if (void 0 !== b) return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a1, b);
        this.x += a1.x;
        this.y += a1.y;
        this.z += a1.z;
        return this;
    },
    addScalar: function(a1) {
        this.x += a1;
        this.y += a1;
        this.z += a1;
        return this;
    },
    addVectors: function(a1, b) {
        this.x = a1.x + b.x;
        this.y = a1.y + b.y;
        this.z = a1.z + b.z;
        return this;
    },
    addScaledVector: function(a1, b) {
        this.x += a1.x * b;
        this.y += a1.y * b;
        this.z += a1.z * b;
        return this;
    },
    sub: function(a1, b) {
        if (void 0 !== b) return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a1, b);
        this.x -= a1.x;
        this.y -= a1.y;
        this.z -= a1.z;
        return this;
    },
    subScalar: function(a1) {
        this.x -= a1;
        this.y -= a1;
        this.z -= a1;
        return this;
    },
    subVectors: function(a1, b) {
        this.x = a1.x - b.x;
        this.y = a1.y - b.y;
        this.z = a1.z - b.z;
        return this;
    },
    multiply: function(a1, b) {
        if (void 0 !== b) return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a1, b);
        this.x *= a1.x;
        this.y *= a1.y;
        this.z *= a1.z;
        return this;
    },
    multiplyScalar: function(a1) {
        this.x *= a1;
        this.y *= a1;
        this.z *= a1;
        return this;
    },
    multiplyVectors: function(a1, b) {
        this.x = a1.x * b.x;
        this.y = a1.y * b.y;
        this.z = a1.z * b.z;
        return this;
    },
    applyEuler: function() {
        var a1;
        return function(b) {
            !1 === b instanceof THREE.Euler && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");
            void 0 === a1 && (a1 = new THREE.Quaternion);
            this.applyQuaternion(a1.setFromEuler(b));
            return this;
        };
    }(),
    applyAxisAngle: function() {
        var a1;
        return function(b, c) {
            void 0 === a1 && (a1 = new THREE.Quaternion);
            this.applyQuaternion(a1.setFromAxisAngle(b, c));
            return this;
        };
    }(),
    applyMatrix3: function(a1) {
        var b = this.x, c = this.y, d = this.z;
        a1 = a1.elements;
        this.x = a1[0] * b + a1[3] * c + a1[6] * d;
        this.y = a1[1] * b + a1[4] * c + a1[7] * d;
        this.z = a1[2] * b + a1[5] * c + a1[8] * d;
        return this;
    },
    applyMatrix4: function(a1) {
        var b = this.x, c = this.y, d = this.z;
        a1 = a1.elements;
        this.x = a1[0] * b + a1[4] * c + a1[8] * d + a1[12];
        this.y = a1[1] * b + a1[5] * c + a1[9] * d + a1[13];
        this.z = a1[2] * b + a1[6] * c + a1[10] * d + a1[14];
        return this;
    },
    applyProjection: function(a1) {
        var b = this.x, c = this.y, d = this.z;
        a1 = a1.elements;
        var e = 1 / (a1[3] * b + a1[7] * c + a1[11] * d + a1[15]);
        this.x = (a1[0] * b + a1[4] * c + a1[8] * d + a1[12]) * e;
        this.y = (a1[1] * b + a1[5] * c + a1[9] * d + a1[13]) * e;
        this.z = (a1[2] * b + a1[6] * c + a1[10] * d + a1[14]) * e;
        return this;
    },
    applyQuaternion: function(a1) {
        var b = this.x, c = this.y, d = this.z, e = a1.x, g = a1.y, f = a1.z;
        a1 = a1.w;
        var h = a1 * b + g * d - f * c, k = a1 * c + f * b - e * d, l = a1 * d + e * c - g * b, b = -e * b - g * c - f * d;
        this.x = h * a1 + b * -e + k * -f - l * -g;
        this.y = k * a1 + b * -g + l * -e - h * -f;
        this.z = l * a1 + b * -f + h * -g - k * -e;
        return this;
    },
    project: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.multiplyMatrices(b.projectionMatrix, a1.getInverse(b.matrixWorld));
            return this.applyProjection(a1);
        };
    }(),
    unproject: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.multiplyMatrices(b.matrixWorld, a1.getInverse(b.projectionMatrix));
            return this.applyProjection(a1);
        };
    }(),
    transformDirection: function(a1) {
        var b = this.x, c = this.y, d = this.z;
        a1 = a1.elements;
        this.x = a1[0] * b + a1[4] * c + a1[8] * d;
        this.y = a1[1] * b + a1[5] * c + a1[9] * d;
        this.z = a1[2] * b + a1[6] * c + a1[10] * d;
        this.normalize();
        return this;
    },
    divide: function(a1) {
        this.x /= a1.x;
        this.y /= a1.y;
        this.z /= a1.z;
        return this;
    },
    divideScalar: function(a1) {
        0 !== a1 ? (a1 = 1 / a1, this.x *= a1, this.y *= a1, this.z *= a1) : this.z = this.y = this.x = 0;
        return this;
    },
    min: function(a1) {
        this.x > a1.x && (this.x = a1.x);
        this.y > a1.y && (this.y = a1.y);
        this.z > a1.z && (this.z = a1.z);
        return this;
    },
    max: function(a1) {
        this.x < a1.x && (this.x = a1.x);
        this.y < a1.y && (this.y = a1.y);
        this.z < a1.z && (this.z = a1.z);
        return this;
    },
    clamp: function(a1, b) {
        this.x < a1.x ? this.x = a1.x : this.x > b.x && (this.x = b.x);
        this.y < a1.y ? this.y = a1.y : this.y > b.y && (this.y = b.y);
        this.z < a1.z ? this.z = a1.z : this.z > b.z && (this.z = b.z);
        return this;
    },
    clampScalar: function() {
        var a1, b;
        return function(c, d) {
            void 0 === a1 && (a1 = new THREE.Vector3, b = new THREE.Vector3);
            a1.set(c, c, c);
            b.set(d, d, d);
            return this.clamp(a1, b);
        };
    }(),
    floor: function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    },
    ceil: function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    },
    round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    },
    roundToZero: function() {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
        return this;
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    },
    dot: function(a1) {
        return this.x * a1.x + this.y * a1.y + this.z * a1.z;
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    },
    normalize: function() {
        return this.divideScalar(this.length());
    },
    setLength: function(a1) {
        var b = this.length();
        0 !== b && a1 !== b && this.multiplyScalar(a1 / b);
        return this;
    },
    lerp: function(a1, b) {
        this.x += (a1.x - this.x) * b;
        this.y += (a1.y - this.y) * b;
        this.z += (a1.z - this.z) * b;
        return this;
    },
    lerpVectors: function(a1, b, c) {
        this.subVectors(b, a1).multiplyScalar(c).add(a1);
        return this;
    },
    cross: function(a1, b) {
        if (void 0 !== b) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a1, b);
        var c = this.x, d = this.y, e = this.z;
        this.x = d * a1.z - e * a1.y;
        this.y = e * a1.x - c * a1.z;
        this.z = c * a1.y - d * a1.x;
        return this;
    },
    crossVectors: function(a1, b) {
        var c = a1.x, d = a1.y, e = a1.z, g = b.x, f = b.y, h = b.z;
        this.x = d * h - e * f;
        this.y = e * g - c * h;
        this.z = c * f - d * g;
        return this;
    },
    projectOnVector: function() {
        var a1, b;
        return function(c) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            a1.copy(c).normalize();
            b = this.dot(a1);
            return this.copy(a1).multiplyScalar(b);
        };
    }(),
    projectOnPlane: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            a1.copy(this).projectOnVector(b);
            return this.sub(a1);
        };
    }(),
    reflect: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            return this.sub(a1.copy(b).multiplyScalar(2 * this.dot(b)));
        };
    }(),
    angleTo: function(a1) {
        a1 = this.dot(a1) / (this.length() * a1.length());
        return Math.acos(THREE.Math.clamp(a1, -1, 1));
    },
    distanceTo: function(a1) {
        return Math.sqrt(this.distanceToSquared(a1));
    },
    distanceToSquared: function(a1) {
        var b = this.x - a1.x, c = this.y - a1.y;
        a1 = this.z - a1.z;
        return b * b + c * c + a1 * a1;
    },
    setEulerFromRotationMatrix: function(a1, b) {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
    },
    setEulerFromQuaternion: function(a1, b) {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
    },
    getPositionFromMatrix: function(a1) {
        console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
        return this.setFromMatrixPosition(a1);
    },
    getScaleFromMatrix: function(a1) {
        console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
        return this.setFromMatrixScale(a1);
    },
    getColumnFromMatrix: function(a1, b) {
        console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
        return this.setFromMatrixColumn(a1, b);
    },
    setFromMatrixPosition: function(a1) {
        this.x = a1.elements[12];
        this.y = a1.elements[13];
        this.z = a1.elements[14];
        return this;
    },
    setFromMatrixScale: function(a1) {
        var b = this.set(a1.elements[0], a1.elements[1], a1.elements[2]).length(), c = this.set(a1.elements[4], a1.elements[5], a1.elements[6]).length();
        a1 = this.set(a1.elements[8], a1.elements[9], a1.elements[10]).length();
        this.x = b;
        this.y = c;
        this.z = a1;
        return this;
    },
    setFromMatrixColumn: function(a1, b) {
        var c = 4 * a1, d = b.elements;
        this.x = d[c];
        this.y = d[c + 1];
        this.z = d[c + 2];
        return this;
    },
    equals: function(a1) {
        return a1.x === this.x && a1.y === this.y && a1.z === this.z;
    },
    fromArray: function(a1, b) {
        void 0 === b && (b = 0);
        this.x = a1[b];
        this.y = a1[b + 1];
        this.z = a1[b + 2];
        return this;
    },
    toArray: function(a1, b) {
        void 0 === a1 && (a1 = []);
        void 0 === b && (b = 0);
        a1[b] = this.x;
        a1[b + 1] = this.y;
        a1[b + 2] = this.z;
        return a1;
    },
    fromAttribute: function(a1, b, c) {
        void 0 === c && (c = 0);
        b = b * a1.itemSize + c;
        this.x = a1.array[b];
        this.y = a1.array[b + 1];
        this.z = a1.array[b + 2];
        return this;
    }
};
THREE.Vector4 = function(a1, b, c, d) {
    this.x = a1 || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1;
};
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(a1, b, c, d) {
        this.x = a1;
        this.y = b;
        this.z = c;
        this.w = d;
        return this;
    },
    setX: function(a1) {
        this.x = a1;
        return this;
    },
    setY: function(a1) {
        this.y = a1;
        return this;
    },
    setZ: function(a1) {
        this.z = a1;
        return this;
    },
    setW: function(a1) {
        this.w = a1;
        return this;
    },
    setComponent: function(a1, b) {
        switch(a1){
            case 0:
                this.x = b;
                break;
            case 1:
                this.y = b;
                break;
            case 2:
                this.z = b;
                break;
            case 3:
                this.w = b;
                break;
            default:
                throw Error("index is out of range: " + a1);
        }
    },
    getComponent: function(a1) {
        switch(a1){
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw Error("index is out of range: " + a1);
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y, this.z, this.w);
    },
    copy: function(a1) {
        this.x = a1.x;
        this.y = a1.y;
        this.z = a1.z;
        this.w = void 0 !== a1.w ? a1.w : 1;
        return this;
    },
    add: function(a1, b) {
        if (void 0 !== b) return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a1, b);
        this.x += a1.x;
        this.y += a1.y;
        this.z += a1.z;
        this.w += a1.w;
        return this;
    },
    addScalar: function(a1) {
        this.x += a1;
        this.y += a1;
        this.z += a1;
        this.w += a1;
        return this;
    },
    addVectors: function(a1, b) {
        this.x = a1.x + b.x;
        this.y = a1.y + b.y;
        this.z = a1.z + b.z;
        this.w = a1.w + b.w;
        return this;
    },
    addScaledVector: function(a1, b) {
        this.x += a1.x * b;
        this.y += a1.y * b;
        this.z += a1.z * b;
        this.w += a1.w * b;
        return this;
    },
    sub: function(a1, b) {
        if (void 0 !== b) return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a1, b);
        this.x -= a1.x;
        this.y -= a1.y;
        this.z -= a1.z;
        this.w -= a1.w;
        return this;
    },
    subScalar: function(a1) {
        this.x -= a1;
        this.y -= a1;
        this.z -= a1;
        this.w -= a1;
        return this;
    },
    subVectors: function(a1, b) {
        this.x = a1.x - b.x;
        this.y = a1.y - b.y;
        this.z = a1.z - b.z;
        this.w = a1.w - b.w;
        return this;
    },
    multiplyScalar: function(a1) {
        this.x *= a1;
        this.y *= a1;
        this.z *= a1;
        this.w *= a1;
        return this;
    },
    applyMatrix4: function(a1) {
        var b = this.x, c = this.y, d = this.z, e = this.w;
        a1 = a1.elements;
        this.x = a1[0] * b + a1[4] * c + a1[8] * d + a1[12] * e;
        this.y = a1[1] * b + a1[5] * c + a1[9] * d + a1[13] * e;
        this.z = a1[2] * b + a1[6] * c + a1[10] * d + a1[14] * e;
        this.w = a1[3] * b + a1[7] * c + a1[11] * d + a1[15] * e;
        return this;
    },
    divideScalar: function(a1) {
        0 !== a1 ? (a1 = 1 / a1, this.x *= a1, this.y *= a1, this.z *= a1, this.w *= a1) : (this.z = this.y = this.x = 0, this.w = 1);
        return this;
    },
    setAxisAngleFromQuaternion: function(a1) {
        this.w = 2 * Math.acos(a1.w);
        var b = Math.sqrt(1 - a1.w * a1.w);
        1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a1.x / b, this.y = a1.y / b, this.z = a1.z / b);
        return this;
    },
    setAxisAngleFromRotationMatrix: function(a1) {
        var b, c, d;
        a1 = a1.elements;
        var e = a1[0];
        d = a1[4];
        var g = a1[8], f = a1[1], h = a1[5], k = a1[9];
        c = a1[2];
        b = a1[6];
        var l = a1[10];
        if (.01 > Math.abs(d - f) && .01 > Math.abs(g - c) && .01 > Math.abs(k - b)) {
            if (.1 > Math.abs(d + f) && .1 > Math.abs(g + c) && .1 > Math.abs(k + b) && .1 > Math.abs(e + h + l - 3)) return this.set(1, 0, 0, 0), this;
            a1 = Math.PI;
            e = (e + 1) / 2;
            h = (h + 1) / 2;
            l = (l + 1) / 2;
            d = (d + f) / 4;
            g = (g + c) / 4;
            k = (k + b) / 4;
            e > h && e > l ? .01 > e ? (b = 0, d = c = .707106781) : (b = Math.sqrt(e), c = d / b, d = g / b) : h > l ? .01 > h ? (b = .707106781, c = 0, d = .707106781) : (c = Math.sqrt(h), b = d / c, d = k / c) : .01 > l ? (c = b = .707106781, d = 0) : (d = Math.sqrt(l), b = g / d, c = k / d);
            this.set(b, c, d, a1);
            return this;
        }
        a1 = Math.sqrt((b - k) * (b - k) + (g - c) * (g - c) + (f - d) * (f - d));
        .001 > Math.abs(a1) && (a1 = 1);
        this.x = (b - k) / a1;
        this.y = (g - c) / a1;
        this.z = (f - d) / a1;
        this.w = Math.acos((e + h + l - 1) / 2);
        return this;
    },
    min: function(a1) {
        this.x > a1.x && (this.x = a1.x);
        this.y > a1.y && (this.y = a1.y);
        this.z > a1.z && (this.z = a1.z);
        this.w > a1.w && (this.w = a1.w);
        return this;
    },
    max: function(a1) {
        this.x < a1.x && (this.x = a1.x);
        this.y < a1.y && (this.y = a1.y);
        this.z < a1.z && (this.z = a1.z);
        this.w < a1.w && (this.w = a1.w);
        return this;
    },
    clamp: function(a1, b) {
        this.x < a1.x ? this.x = a1.x : this.x > b.x && (this.x = b.x);
        this.y < a1.y ? this.y = a1.y : this.y > b.y && (this.y = b.y);
        this.z < a1.z ? this.z = a1.z : this.z > b.z && (this.z = b.z);
        this.w < a1.w ? this.w = a1.w : this.w > b.w && (this.w = b.w);
        return this;
    },
    clampScalar: function() {
        var a1, b;
        return function(c, d) {
            void 0 === a1 && (a1 = new THREE.Vector4, b = new THREE.Vector4);
            a1.set(c, c, c, c);
            b.set(d, d, d, d);
            return this.clamp(a1, b);
        };
    }(),
    floor: function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        this.w = Math.floor(this.w);
        return this;
    },
    ceil: function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        this.w = Math.ceil(this.w);
        return this;
    },
    round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        this.w = Math.round(this.w);
        return this;
    },
    roundToZero: function() {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
        this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
        return this;
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        this.w = -this.w;
        return this;
    },
    dot: function(a1) {
        return this.x * a1.x + this.y * a1.y + this.z * a1.z + this.w * a1.w;
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    },
    normalize: function() {
        return this.divideScalar(this.length());
    },
    setLength: function(a1) {
        var b = this.length();
        0 !== b && a1 !== b && this.multiplyScalar(a1 / b);
        return this;
    },
    lerp: function(a1, b) {
        this.x += (a1.x - this.x) * b;
        this.y += (a1.y - this.y) * b;
        this.z += (a1.z - this.z) * b;
        this.w += (a1.w - this.w) * b;
        return this;
    },
    lerpVectors: function(a1, b, c) {
        this.subVectors(b, a1).multiplyScalar(c).add(a1);
        return this;
    },
    equals: function(a1) {
        return a1.x === this.x && a1.y === this.y && a1.z === this.z && a1.w === this.w;
    },
    fromArray: function(a1, b) {
        void 0 === b && (b = 0);
        this.x = a1[b];
        this.y = a1[b + 1];
        this.z = a1[b + 2];
        this.w = a1[b + 3];
        return this;
    },
    toArray: function(a1, b) {
        void 0 === a1 && (a1 = []);
        void 0 === b && (b = 0);
        a1[b] = this.x;
        a1[b + 1] = this.y;
        a1[b + 2] = this.z;
        a1[b + 3] = this.w;
        return a1;
    },
    fromAttribute: function(a1, b, c) {
        void 0 === c && (c = 0);
        b = b * a1.itemSize + c;
        this.x = a1.array[b];
        this.y = a1.array[b + 1];
        this.z = a1.array[b + 2];
        this.w = a1.array[b + 3];
        return this;
    }
};
THREE.Euler = function(a1, b, c, d) {
    this._x = a1 || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._order = d || THREE.Euler.DefaultOrder;
};
THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
THREE.Euler.DefaultOrder = "XYZ";
THREE.Euler.prototype = {
    constructor: THREE.Euler,
    get x () {
        return this._x;
    },
    set x (a){
        this._x = a;
        this.onChangeCallback();
    },
    get y () {
        return this._y;
    },
    set y (a){
        this._y = a;
        this.onChangeCallback();
    },
    get z () {
        return this._z;
    },
    set z (a){
        this._z = a;
        this.onChangeCallback();
    },
    get order () {
        return this._order;
    },
    set order (a){
        this._order = a;
        this.onChangeCallback();
    },
    set: function(a1, b, c, d) {
        this._x = a1;
        this._y = b;
        this._z = c;
        this._order = d || this._order;
        this.onChangeCallback();
        return this;
    },
    clone: function() {
        return new this.constructor(this._x, this._y, this._z, this._order);
    },
    copy: function(a1) {
        this._x = a1._x;
        this._y = a1._y;
        this._z = a1._z;
        this._order = a1._order;
        this.onChangeCallback();
        return this;
    },
    setFromRotationMatrix: function(a1, b, c) {
        var d = THREE.Math.clamp, e = a1.elements;
        a1 = e[0];
        var g = e[4], f = e[8], h = e[1], k = e[5], l = e[9], n = e[2], p = e[6], e = e[10];
        b = b || this._order;
        "XYZ" === b ? (this._y = Math.asin(d(f, -1, 1)), .99999 > Math.abs(f) ? (this._x = Math.atan2(-l, e), this._z = Math.atan2(-g, a1)) : (this._x = Math.atan2(p, k), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(l, -1, 1)), .99999 > Math.abs(l) ? (this._y = Math.atan2(f, e), this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-n, a1), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(p, -1, 1)), .99999 > Math.abs(p) ? (this._y = Math.atan2(-n, e), this._z = Math.atan2(-g, k)) : (this._y = 0, this._z = Math.atan2(h, a1))) : "ZYX" === b ? (this._y = Math.asin(-d(n, -1, 1)), .99999 > Math.abs(n) ? (this._x = Math.atan2(p, e), this._z = Math.atan2(h, a1)) : (this._x = 0, this._z = Math.atan2(-g, k))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)), .99999 > Math.abs(h) ? (this._x = Math.atan2(-l, k), this._y = Math.atan2(-n, a1)) : (this._x = 0, this._y = Math.atan2(f, e))) : "XZY" === b ? (this._z = Math.asin(-d(g, -1, 1)), .99999 > Math.abs(g) ? (this._x = Math.atan2(p, k), this._y = Math.atan2(f, a1)) : (this._x = Math.atan2(-l, e), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
        this._order = b;
        if (!1 !== c) this.onChangeCallback();
        return this;
    },
    setFromQuaternion: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeRotationFromQuaternion(b);
            this.setFromRotationMatrix(a1, c, d);
            return this;
        };
    }(),
    setFromVector3: function(a1, b) {
        return this.set(a1.x, a1.y, a1.z, b || this._order);
    },
    reorder: function() {
        var a1 = new THREE.Quaternion;
        return function(b) {
            a1.setFromEuler(this);
            this.setFromQuaternion(a1, b);
        };
    }(),
    equals: function(a1) {
        return a1._x === this._x && a1._y === this._y && a1._z === this._z && a1._order === this._order;
    },
    fromArray: function(a1) {
        this._x = a1[0];
        this._y = a1[1];
        this._z = a1[2];
        void 0 !== a1[3] && (this._order = a1[3]);
        this.onChangeCallback();
        return this;
    },
    toArray: function(a1, b) {
        void 0 === a1 && (a1 = []);
        void 0 === b && (b = 0);
        a1[b] = this._x;
        a1[b + 1] = this._y;
        a1[b + 2] = this._z;
        a1[b + 3] = this._order;
        return a1;
    },
    toVector3: function(a1) {
        return a1 ? a1.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z);
    },
    onChange: function(a1) {
        this.onChangeCallback = a1;
        return this;
    },
    onChangeCallback: function() {}
};
THREE.Line3 = function(a1, b) {
    this.start = void 0 !== a1 ? a1 : new THREE.Vector3;
    this.end = void 0 !== b ? b : new THREE.Vector3;
};
THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function(a1, b) {
        this.start.copy(a1);
        this.end.copy(b);
        return this;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.start.copy(a1.start);
        this.end.copy(a1.end);
        return this;
    },
    center: function(a1) {
        return (a1 || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5);
    },
    delta: function(a1) {
        return (a1 || new THREE.Vector3).subVectors(this.end, this.start);
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end);
    },
    distance: function() {
        return this.start.distanceTo(this.end);
    },
    at: function(a1, b) {
        var c = b || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a1).add(this.start);
    },
    closestPointToPointParameter: function() {
        var a1 = new THREE.Vector3, b = new THREE.Vector3;
        return function(c, d) {
            a1.subVectors(c, this.start);
            b.subVectors(this.end, this.start);
            var e = b.dot(b), e = b.dot(a1) / e;
            d && (e = THREE.Math.clamp(e, 0, 1));
            return e;
        };
    }(),
    closestPointToPoint: function(a1, b, c) {
        a1 = this.closestPointToPointParameter(a1, b);
        c = c || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a1).add(this.start);
    },
    applyMatrix4: function(a1) {
        this.start.applyMatrix4(a1);
        this.end.applyMatrix4(a1);
        return this;
    },
    equals: function(a1) {
        return a1.start.equals(this.start) && a1.end.equals(this.end);
    }
};
THREE.Box2 = function(a1, b) {
    this.min = void 0 !== a1 ? a1 : new THREE.Vector2(Infinity, Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector2(-Infinity, -Infinity);
};
THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function(a1, b) {
        this.min.copy(a1);
        this.max.copy(b);
        return this;
    },
    setFromPoints: function(a1) {
        this.makeEmpty();
        for(var b = 0, c = a1.length; b < c; b++)this.expandByPoint(a1[b]);
        return this;
    },
    setFromCenterAndSize: function() {
        var a1 = new THREE.Vector2;
        return function(b, c) {
            var d = a1.copy(c).multiplyScalar(.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this;
        };
    }(),
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.min.copy(a1.min);
        this.max.copy(a1.max);
        return this;
    },
    makeEmpty: function() {
        this.min.x = this.min.y = Infinity;
        this.max.x = this.max.y = -Infinity;
        return this;
    },
    empty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y;
    },
    center: function(a1) {
        return (a1 || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5);
    },
    size: function(a1) {
        return (a1 || new THREE.Vector2).subVectors(this.max, this.min);
    },
    expandByPoint: function(a1) {
        this.min.min(a1);
        this.max.max(a1);
        return this;
    },
    expandByVector: function(a1) {
        this.min.sub(a1);
        this.max.add(a1);
        return this;
    },
    expandByScalar: function(a1) {
        this.min.addScalar(-a1);
        this.max.addScalar(a1);
        return this;
    },
    containsPoint: function(a1) {
        return a1.x < this.min.x || a1.x > this.max.x || a1.y < this.min.y || a1.y > this.max.y ? !1 : !0;
    },
    containsBox: function(a1) {
        return this.min.x <= a1.min.x && a1.max.x <= this.max.x && this.min.y <= a1.min.y && a1.max.y <= this.max.y ? !0 : !1;
    },
    getParameter: function(a1, b) {
        return (b || new THREE.Vector2).set((a1.x - this.min.x) / (this.max.x - this.min.x), (a1.y - this.min.y) / (this.max.y - this.min.y));
    },
    isIntersectionBox: function(a1) {
        return a1.max.x < this.min.x || a1.min.x > this.max.x || a1.max.y < this.min.y || a1.min.y > this.max.y ? !1 : !0;
    },
    clampPoint: function(a1, b) {
        return (b || new THREE.Vector2).copy(a1).clamp(this.min, this.max);
    },
    distanceToPoint: function() {
        var a1 = new THREE.Vector2;
        return function(b) {
            return a1.copy(b).clamp(this.min, this.max).sub(b).length();
        };
    }(),
    intersect: function(a1) {
        this.min.max(a1.min);
        this.max.min(a1.max);
        return this;
    },
    union: function(a1) {
        this.min.min(a1.min);
        this.max.max(a1.max);
        return this;
    },
    translate: function(a1) {
        this.min.add(a1);
        this.max.add(a1);
        return this;
    },
    equals: function(a1) {
        return a1.min.equals(this.min) && a1.max.equals(this.max);
    }
};
THREE.Box3 = function(a1, b) {
    this.min = void 0 !== a1 ? a1 : new THREE.Vector3(Infinity, Infinity, Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity);
};
THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function(a1, b) {
        this.min.copy(a1);
        this.max.copy(b);
        return this;
    },
    setFromPoints: function(a1) {
        this.makeEmpty();
        for(var b = 0, c = a1.length; b < c; b++)this.expandByPoint(a1[b]);
        return this;
    },
    setFromCenterAndSize: function() {
        var a1 = new THREE.Vector3;
        return function(b, c) {
            var d = a1.copy(c).multiplyScalar(.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this;
        };
    }(),
    setFromObject: function() {
        var a1 = new THREE.Vector3;
        return function(b) {
            var c = this;
            b.updateMatrixWorld(!0);
            this.makeEmpty();
            b.traverse(function(b) {
                var e = b.geometry;
                if (void 0 !== e) {
                    if (e instanceof THREE.Geometry) for(var g = e.vertices, e = 0, f = g.length; e < f; e++)a1.copy(g[e]), a1.applyMatrix4(b.matrixWorld), c.expandByPoint(a1);
                    else if (e instanceof THREE.BufferGeometry && void 0 !== e.attributes.position) for(g = e.attributes.position.array, e = 0, f = g.length; e < f; e += 3)a1.set(g[e], g[e + 1], g[e + 2]), a1.applyMatrix4(b.matrixWorld), c.expandByPoint(a1);
                }
            });
            return this;
        };
    }(),
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.min.copy(a1.min);
        this.max.copy(a1.max);
        return this;
    },
    makeEmpty: function() {
        this.min.x = this.min.y = this.min.z = Infinity;
        this.max.x = this.max.y = this.max.z = -Infinity;
        return this;
    },
    empty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    },
    center: function(a1) {
        return (a1 || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5);
    },
    size: function(a1) {
        return (a1 || new THREE.Vector3).subVectors(this.max, this.min);
    },
    expandByPoint: function(a1) {
        this.min.min(a1);
        this.max.max(a1);
        return this;
    },
    expandByVector: function(a1) {
        this.min.sub(a1);
        this.max.add(a1);
        return this;
    },
    expandByScalar: function(a1) {
        this.min.addScalar(-a1);
        this.max.addScalar(a1);
        return this;
    },
    containsPoint: function(a1) {
        return a1.x < this.min.x || a1.x > this.max.x || a1.y < this.min.y || a1.y > this.max.y || a1.z < this.min.z || a1.z > this.max.z ? !1 : !0;
    },
    containsBox: function(a1) {
        return this.min.x <= a1.min.x && a1.max.x <= this.max.x && this.min.y <= a1.min.y && a1.max.y <= this.max.y && this.min.z <= a1.min.z && a1.max.z <= this.max.z ? !0 : !1;
    },
    getParameter: function(a1, b) {
        return (b || new THREE.Vector3).set((a1.x - this.min.x) / (this.max.x - this.min.x), (a1.y - this.min.y) / (this.max.y - this.min.y), (a1.z - this.min.z) / (this.max.z - this.min.z));
    },
    isIntersectionBox: function(a1) {
        return a1.max.x < this.min.x || a1.min.x > this.max.x || a1.max.y < this.min.y || a1.min.y > this.max.y || a1.max.z < this.min.z || a1.min.z > this.max.z ? !1 : !0;
    },
    clampPoint: function(a1, b) {
        return (b || new THREE.Vector3).copy(a1).clamp(this.min, this.max);
    },
    distanceToPoint: function() {
        var a1 = new THREE.Vector3;
        return function(b) {
            return a1.copy(b).clamp(this.min, this.max).sub(b).length();
        };
    }(),
    getBoundingSphere: function() {
        var a1 = new THREE.Vector3;
        return function(b) {
            b = b || new THREE.Sphere;
            b.center = this.center();
            b.radius = .5 * this.size(a1).length();
            return b;
        };
    }(),
    intersect: function(a1) {
        this.min.max(a1.min);
        this.max.min(a1.max);
        return this;
    },
    union: function(a1) {
        this.min.min(a1.min);
        this.max.max(a1.max);
        return this;
    },
    applyMatrix4: function() {
        var a1 = [
            new THREE.Vector3,
            new THREE.Vector3,
            new THREE.Vector3,
            new THREE.Vector3,
            new THREE.Vector3,
            new THREE.Vector3,
            new THREE.Vector3,
            new THREE.Vector3
        ];
        return function(b) {
            a1[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
            a1[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
            a1[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
            a1[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
            a1[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
            a1[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
            a1[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
            a1[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
            this.makeEmpty();
            this.setFromPoints(a1);
            return this;
        };
    }(),
    translate: function(a1) {
        this.min.add(a1);
        this.max.add(a1);
        return this;
    },
    equals: function(a1) {
        return a1.min.equals(this.min) && a1.max.equals(this.max);
    }
};
THREE.Matrix3 = function() {
    this.elements = new Float32Array([
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
    ]);
    0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
};
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function(a1, b, c, d, e, g, f, h, k) {
        var l = this.elements;
        l[0] = a1;
        l[3] = b;
        l[6] = c;
        l[1] = d;
        l[4] = e;
        l[7] = g;
        l[2] = f;
        l[5] = h;
        l[8] = k;
        return this;
    },
    identity: function() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
    },
    clone: function() {
        return (new this.constructor).fromArray(this.elements);
    },
    copy: function(a1) {
        a1 = a1.elements;
        this.set(a1[0], a1[3], a1[6], a1[1], a1[4], a1[7], a1[2], a1[5], a1[8]);
        return this;
    },
    multiplyVector3: function(a1) {
        console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
        return a1.applyMatrix3(this);
    },
    multiplyVector3Array: function(a1) {
        console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
        return this.applyToVector3Array(a1);
    },
    applyToVector3Array: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length);
            for(var e = 0; e < d; e += 3, c += 3)a1.fromArray(b, c), a1.applyMatrix3(this), a1.toArray(b, c);
            return b;
        };
    }(),
    applyToBuffer: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length / b.itemSize);
            for(var e = 0; e < d; e++, c++)a1.x = b.getX(c), a1.y = b.getY(c), a1.z = b.getZ(c), a1.applyMatrix3(this), b.setXYZ(a1.x, a1.y, a1.z);
            return b;
        };
    }(),
    multiplyScalar: function(a1) {
        var b = this.elements;
        b[0] *= a1;
        b[3] *= a1;
        b[6] *= a1;
        b[1] *= a1;
        b[4] *= a1;
        b[7] *= a1;
        b[2] *= a1;
        b[5] *= a1;
        b[8] *= a1;
        return this;
    },
    determinant: function() {
        var a1 = this.elements, b = a1[0], c = a1[1], d = a1[2], e = a1[3], g = a1[4], f = a1[5], h = a1[6], k = a1[7], a1 = a1[8];
        return b * g * a1 - b * f * k - c * e * a1 + c * f * h + d * e * k - d * g * h;
    },
    getInverse: function(a1, b) {
        var c = a1.elements, d = this.elements;
        d[0] = c[10] * c[5] - c[6] * c[9];
        d[1] = -c[10] * c[1] + c[2] * c[9];
        d[2] = c[6] * c[1] - c[2] * c[5];
        d[3] = -c[10] * c[4] + c[6] * c[8];
        d[4] = c[10] * c[0] - c[2] * c[8];
        d[5] = -c[6] * c[0] + c[2] * c[4];
        d[6] = c[9] * c[4] - c[5] * c[8];
        d[7] = -c[9] * c[0] + c[1] * c[8];
        d[8] = c[5] * c[0] - c[1] * c[4];
        c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];
        if (0 === c) {
            if (b) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this;
        }
        this.multiplyScalar(1 / c);
        return this;
    },
    transpose: function() {
        var a1, b = this.elements;
        a1 = b[1];
        b[1] = b[3];
        b[3] = a1;
        a1 = b[2];
        b[2] = b[6];
        b[6] = a1;
        a1 = b[5];
        b[5] = b[7];
        b[7] = a1;
        return this;
    },
    flattenToArrayOffset: function(a1, b) {
        var c = this.elements;
        a1[b] = c[0];
        a1[b + 1] = c[1];
        a1[b + 2] = c[2];
        a1[b + 3] = c[3];
        a1[b + 4] = c[4];
        a1[b + 5] = c[5];
        a1[b + 6] = c[6];
        a1[b + 7] = c[7];
        a1[b + 8] = c[8];
        return a1;
    },
    getNormalMatrix: function(a1) {
        this.getInverse(a1).transpose();
        return this;
    },
    transposeIntoArray: function(a1) {
        var b = this.elements;
        a1[0] = b[0];
        a1[1] = b[3];
        a1[2] = b[6];
        a1[3] = b[1];
        a1[4] = b[4];
        a1[5] = b[7];
        a1[6] = b[2];
        a1[7] = b[5];
        a1[8] = b[8];
        return this;
    },
    fromArray: function(a1) {
        this.elements.set(a1);
        return this;
    },
    toArray: function() {
        var a1 = this.elements;
        return [
            a1[0],
            a1[1],
            a1[2],
            a1[3],
            a1[4],
            a1[5],
            a1[6],
            a1[7],
            a1[8]
        ];
    }
};
THREE.Matrix4 = function() {
    this.elements = new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ]);
    0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
};
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(a1, b, c, d, e, g, f, h, k, l, n, p, m, q, t, r) {
        var u = this.elements;
        u[0] = a1;
        u[4] = b;
        u[8] = c;
        u[12] = d;
        u[1] = e;
        u[5] = g;
        u[9] = f;
        u[13] = h;
        u[2] = k;
        u[6] = l;
        u[10] = n;
        u[14] = p;
        u[3] = m;
        u[7] = q;
        u[11] = t;
        u[15] = r;
        return this;
    },
    identity: function() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    },
    clone: function() {
        return (new THREE.Matrix4).fromArray(this.elements);
    },
    copy: function(a1) {
        this.elements.set(a1.elements);
        return this;
    },
    extractPosition: function(a1) {
        console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
        return this.copyPosition(a1);
    },
    copyPosition: function(a1) {
        var b = this.elements;
        a1 = a1.elements;
        b[12] = a1[12];
        b[13] = a1[13];
        b[14] = a1[14];
        return this;
    },
    extractBasis: function(a1, b, c) {
        var d = this.elements;
        a1.set(d[0], d[1], d[2]);
        b.set(d[4], d[5], d[6]);
        c.set(d[8], d[9], d[10]);
        return this;
    },
    makeBasis: function(a1, b, c) {
        this.set(a1.x, b.x, c.x, 0, a1.y, b.y, c.y, 0, a1.z, b.z, c.z, 0, 0, 0, 0, 1);
        return this;
    },
    extractRotation: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            var c = this.elements;
            b = b.elements;
            var d = 1 / a1.set(b[0], b[1], b[2]).length(), e = 1 / a1.set(b[4], b[5], b[6]).length(), g = 1 / a1.set(b[8], b[9], b[10]).length();
            c[0] = b[0] * d;
            c[1] = b[1] * d;
            c[2] = b[2] * d;
            c[4] = b[4] * e;
            c[5] = b[5] * e;
            c[6] = b[6] * e;
            c[8] = b[8] * g;
            c[9] = b[9] * g;
            c[10] = b[10] * g;
            return this;
        };
    }(),
    makeRotationFromEuler: function(a1) {
        !1 === a1 instanceof THREE.Euler && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var b = this.elements, c = a1.x, d = a1.y, e = a1.z, g = Math.cos(c), c = Math.sin(c), f = Math.cos(d), d = Math.sin(d), h = Math.cos(e), e = Math.sin(e);
        if ("XYZ" === a1.order) {
            a1 = g * h;
            var k = g * e, l = c * h, n = c * e;
            b[0] = f * h;
            b[4] = -f * e;
            b[8] = d;
            b[1] = k + l * d;
            b[5] = a1 - n * d;
            b[9] = -c * f;
            b[2] = n - a1 * d;
            b[6] = l + k * d;
            b[10] = g * f;
        } else "YXZ" === a1.order ? (a1 = f * h, k = f * e, l = d * h, n = d * e, b[0] = a1 + n * c, b[4] = l * c - k, b[8] = g * d, b[1] = g * e, b[5] = g * h, b[9] = -c, b[2] = k * c - l, b[6] = n + a1 * c, b[10] = g * f) : "ZXY" === a1.order ? (a1 = f * h, k = f * e, l = d * h, n = d * e, b[0] = a1 - n * c, b[4] = -g * e, b[8] = l + k * c, b[1] = k + l * c, b[5] = g * h, b[9] = n - a1 * c, b[2] = -g * d, b[6] = c, b[10] = g * f) : "ZYX" === a1.order ? (a1 = g * h, k = g * e, l = c * h, n = c * e, b[0] = f * h, b[4] = l * d - k, b[8] = a1 * d + n, b[1] = f * e, b[5] = n * d + a1, b[9] = k * d - l, b[2] = -d, b[6] = c * f, b[10] = g * f) : "YZX" === a1.order ? (a1 = g * f, k = g * d, l = c * f, n = c * d, b[0] = f * h, b[4] = n - a1 * e, b[8] = l * e + k, b[1] = e, b[5] = g * h, b[9] = -c * h, b[2] = -d * h, b[6] = k * e + l, b[10] = a1 - n * e) : "XZY" === a1.order && (a1 = g * f, k = g * d, l = c * f, n = c * d, b[0] = f * h, b[4] = -e, b[8] = d * h, b[1] = a1 * e + n, b[5] = g * h, b[9] = k * e - l, b[2] = l * e - k, b[6] = c * h, b[10] = n * e + a1);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return this;
    },
    setRotationFromQuaternion: function(a1) {
        console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
        return this.makeRotationFromQuaternion(a1);
    },
    makeRotationFromQuaternion: function(a1) {
        var b = this.elements, c = a1.x, d = a1.y, e = a1.z, g = a1.w, f = c + c, h = d + d, k = e + e;
        a1 = c * f;
        var l = c * h, c = c * k, n = d * h, d = d * k, e = e * k, f = g * f, h = g * h, g = g * k;
        b[0] = 1 - (n + e);
        b[4] = l - g;
        b[8] = c + h;
        b[1] = l + g;
        b[5] = 1 - (a1 + e);
        b[9] = d - f;
        b[2] = c - h;
        b[6] = d + f;
        b[10] = 1 - (a1 + n);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return this;
    },
    lookAt: function() {
        var a1, b, c;
        return function(d, e, g) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            void 0 === b && (b = new THREE.Vector3);
            void 0 === c && (c = new THREE.Vector3);
            var f = this.elements;
            c.subVectors(d, e).normalize();
            0 === c.length() && (c.z = 1);
            a1.crossVectors(g, c).normalize();
            0 === a1.length() && (c.x += 1E-4, a1.crossVectors(g, c).normalize());
            b.crossVectors(c, a1);
            f[0] = a1.x;
            f[4] = b.x;
            f[8] = c.x;
            f[1] = a1.y;
            f[5] = b.y;
            f[9] = c.y;
            f[2] = a1.z;
            f[6] = b.z;
            f[10] = c.z;
            return this;
        };
    }(),
    multiply: function(a1, b) {
        return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a1, b)) : this.multiplyMatrices(this, a1);
    },
    multiplyMatrices: function(a1, b) {
        var c = a1.elements, d = b.elements, e = this.elements, g = c[0], f = c[4], h = c[8], k = c[12], l = c[1], n = c[5], p = c[9], m = c[13], q = c[2], t = c[6], r = c[10], u = c[14], w = c[3], v = c[7], B = c[11], c = c[15], x = d[0], H = d[4], I = d[8], z = d[12], D = d[1], G = d[5], O = d[9], C = d[13], F = d[2], K = d[6], L = d[10], E = d[14], J = d[3], y = d[7], P = d[11], d = d[15];
        e[0] = g * x + f * D + h * F + k * J;
        e[4] = g * H + f * G + h * K + k * y;
        e[8] = g * I + f * O + h * L + k * P;
        e[12] = g * z + f * C + h * E + k * d;
        e[1] = l * x + n * D + p * F + m * J;
        e[5] = l * H + n * G + p * K + m * y;
        e[9] = l * I + n * O + p * L + m * P;
        e[13] = l * z + n * C + p * E + m * d;
        e[2] = q * x + t * D + r * F + u * J;
        e[6] = q * H + t * G + r * K + u * y;
        e[10] = q * I + t * O + r * L + u * P;
        e[14] = q * z + t * C + r * E + u * d;
        e[3] = w * x + v * D + B * F + c * J;
        e[7] = w * H + v * G + B * K + c * y;
        e[11] = w * I + v * O + B * L + c * P;
        e[15] = w * z + v * C + B * E + c * d;
        return this;
    },
    multiplyToArray: function(a1, b, c) {
        var d = this.elements;
        this.multiplyMatrices(a1, b);
        c[0] = d[0];
        c[1] = d[1];
        c[2] = d[2];
        c[3] = d[3];
        c[4] = d[4];
        c[5] = d[5];
        c[6] = d[6];
        c[7] = d[7];
        c[8] = d[8];
        c[9] = d[9];
        c[10] = d[10];
        c[11] = d[11];
        c[12] = d[12];
        c[13] = d[13];
        c[14] = d[14];
        c[15] = d[15];
        return this;
    },
    multiplyScalar: function(a1) {
        var b = this.elements;
        b[0] *= a1;
        b[4] *= a1;
        b[8] *= a1;
        b[12] *= a1;
        b[1] *= a1;
        b[5] *= a1;
        b[9] *= a1;
        b[13] *= a1;
        b[2] *= a1;
        b[6] *= a1;
        b[10] *= a1;
        b[14] *= a1;
        b[3] *= a1;
        b[7] *= a1;
        b[11] *= a1;
        b[15] *= a1;
        return this;
    },
    multiplyVector3: function(a1) {
        console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
        return a1.applyProjection(this);
    },
    multiplyVector4: function(a1) {
        console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a1.applyMatrix4(this);
    },
    multiplyVector3Array: function(a1) {
        console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
        return this.applyToVector3Array(a1);
    },
    applyToVector3Array: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length);
            for(var e = 0; e < d; e += 3, c += 3)a1.fromArray(b, c), a1.applyMatrix4(this), a1.toArray(b, c);
            return b;
        };
    }(),
    applyToBuffer: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length / b.itemSize);
            for(var e = 0; e < d; e++, c++)a1.x = b.getX(c), a1.y = b.getY(c), a1.z = b.getZ(c), a1.applyMatrix4(this), b.setXYZ(a1.x, a1.y, a1.z);
            return b;
        };
    }(),
    rotateAxis: function(a1) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
        a1.transformDirection(this);
    },
    crossVector: function(a1) {
        console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
        return a1.applyMatrix4(this);
    },
    determinant: function() {
        var a1 = this.elements, b = a1[0], c = a1[4], d = a1[8], e = a1[12], g = a1[1], f = a1[5], h = a1[9], k = a1[13], l = a1[2], n = a1[6], p = a1[10], m = a1[14];
        return a1[3] * (+e * h * n - d * k * n - e * f * p + c * k * p + d * f * m - c * h * m) + a1[7] * (+b * h * m - b * k * p + e * g * p - d * g * m + d * k * l - e * h * l) + a1[11] * (+b * k * n - b * f * m - e * g * n + c * g * m + e * f * l - c * k * l) + a1[15] * (-d * f * l - b * h * n + b * f * p + d * g * n - c * g * p + c * h * l);
    },
    transpose: function() {
        var a1 = this.elements, b;
        b = a1[1];
        a1[1] = a1[4];
        a1[4] = b;
        b = a1[2];
        a1[2] = a1[8];
        a1[8] = b;
        b = a1[6];
        a1[6] = a1[9];
        a1[9] = b;
        b = a1[3];
        a1[3] = a1[12];
        a1[12] = b;
        b = a1[7];
        a1[7] = a1[13];
        a1[13] = b;
        b = a1[11];
        a1[11] = a1[14];
        a1[14] = b;
        return this;
    },
    flattenToArrayOffset: function(a1, b) {
        var c = this.elements;
        a1[b] = c[0];
        a1[b + 1] = c[1];
        a1[b + 2] = c[2];
        a1[b + 3] = c[3];
        a1[b + 4] = c[4];
        a1[b + 5] = c[5];
        a1[b + 6] = c[6];
        a1[b + 7] = c[7];
        a1[b + 8] = c[8];
        a1[b + 9] = c[9];
        a1[b + 10] = c[10];
        a1[b + 11] = c[11];
        a1[b + 12] = c[12];
        a1[b + 13] = c[13];
        a1[b + 14] = c[14];
        a1[b + 15] = c[15];
        return a1;
    },
    getPosition: function() {
        var a1;
        return function() {
            void 0 === a1 && (a1 = new THREE.Vector3);
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            var b = this.elements;
            return a1.set(b[12], b[13], b[14]);
        };
    }(),
    setPosition: function(a1) {
        var b = this.elements;
        b[12] = a1.x;
        b[13] = a1.y;
        b[14] = a1.z;
        return this;
    },
    getInverse: function(a1, b) {
        var c = this.elements, d = a1.elements, e = d[0], g = d[4], f = d[8], h = d[12], k = d[1], l = d[5], n = d[9], p = d[13], m = d[2], q = d[6], t = d[10], r = d[14], u = d[3], w = d[7], v = d[11], d = d[15];
        c[0] = n * r * w - p * t * w + p * q * v - l * r * v - n * q * d + l * t * d;
        c[4] = h * t * w - f * r * w - h * q * v + g * r * v + f * q * d - g * t * d;
        c[8] = f * p * w - h * n * w + h * l * v - g * p * v - f * l * d + g * n * d;
        c[12] = h * n * q - f * p * q - h * l * t + g * p * t + f * l * r - g * n * r;
        c[1] = p * t * u - n * r * u - p * m * v + k * r * v + n * m * d - k * t * d;
        c[5] = f * r * u - h * t * u + h * m * v - e * r * v - f * m * d + e * t * d;
        c[9] = h * n * u - f * p * u - h * k * v + e * p * v + f * k * d - e * n * d;
        c[13] = f * p * m - h * n * m + h * k * t - e * p * t - f * k * r + e * n * r;
        c[2] = l * r * u - p * q * u + p * m * w - k * r * w - l * m * d + k * q * d;
        c[6] = h * q * u - g * r * u - h * m * w + e * r * w + g * m * d - e * q * d;
        c[10] = g * p * u - h * l * u + h * k * w - e * p * w - g * k * d + e * l * d;
        c[14] = h * l * m - g * p * m - h * k * q + e * p * q + g * k * r - e * l * r;
        c[3] = n * q * u - l * t * u - n * m * w + k * t * w + l * m * v - k * q * v;
        c[7] = g * t * u - f * q * u + f * m * w - e * t * w - g * m * v + e * q * v;
        c[11] = f * l * u - g * n * u - f * k * w + e * n * w + g * k * v - e * l * v;
        c[15] = g * n * m - f * l * m + f * k * q - e * n * q - g * k * t + e * l * t;
        c = e * c[0] + k * c[4] + m * c[8] + u * c[12];
        if (0 === c) {
            if (b) throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this;
        }
        this.multiplyScalar(1 / c);
        return this;
    },
    translate: function(a1) {
        console.error("THREE.Matrix4: .translate() has been removed.");
    },
    rotateX: function(a1) {
        console.error("THREE.Matrix4: .rotateX() has been removed.");
    },
    rotateY: function(a1) {
        console.error("THREE.Matrix4: .rotateY() has been removed.");
    },
    rotateZ: function(a1) {
        console.error("THREE.Matrix4: .rotateZ() has been removed.");
    },
    rotateByAxis: function(a1, b) {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    },
    scale: function(a1) {
        var b = this.elements, c = a1.x, d = a1.y;
        a1 = a1.z;
        b[0] *= c;
        b[4] *= d;
        b[8] *= a1;
        b[1] *= c;
        b[5] *= d;
        b[9] *= a1;
        b[2] *= c;
        b[6] *= d;
        b[10] *= a1;
        b[3] *= c;
        b[7] *= d;
        b[11] *= a1;
        return this;
    },
    getMaxScaleOnAxis: function() {
        var a1 = this.elements;
        return Math.sqrt(Math.max(a1[0] * a1[0] + a1[1] * a1[1] + a1[2] * a1[2], Math.max(a1[4] * a1[4] + a1[5] * a1[5] + a1[6] * a1[6], a1[8] * a1[8] + a1[9] * a1[9] + a1[10] * a1[10])));
    },
    makeTranslation: function(a1, b, c) {
        this.set(1, 0, 0, a1, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
        return this;
    },
    makeRotationX: function(a1) {
        var b = Math.cos(a1);
        a1 = Math.sin(a1);
        this.set(1, 0, 0, 0, 0, b, -a1, 0, 0, a1, b, 0, 0, 0, 0, 1);
        return this;
    },
    makeRotationY: function(a1) {
        var b = Math.cos(a1);
        a1 = Math.sin(a1);
        this.set(b, 0, a1, 0, 0, 1, 0, 0, -a1, 0, b, 0, 0, 0, 0, 1);
        return this;
    },
    makeRotationZ: function(a1) {
        var b = Math.cos(a1);
        a1 = Math.sin(a1);
        this.set(b, -a1, 0, 0, a1, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
    },
    makeRotationAxis: function(a1, b) {
        var c = Math.cos(b), d = Math.sin(b), e = 1 - c, g = a1.x, f = a1.y, h = a1.z, k = e * g, l = e * f;
        this.set(k * g + c, k * f - d * h, k * h + d * f, 0, k * f + d * h, l * f + c, l * h - d * g, 0, k * h - d * f, l * h + d * g, e * h * h + c, 0, 0, 0, 0, 1);
        return this;
    },
    makeScale: function(a1, b, c) {
        this.set(a1, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
        return this;
    },
    compose: function(a1, b, c) {
        this.makeRotationFromQuaternion(b);
        this.scale(c);
        this.setPosition(a1);
        return this;
    },
    decompose: function() {
        var a1, b;
        return function(c, d, e) {
            void 0 === a1 && (a1 = new THREE.Vector3);
            void 0 === b && (b = new THREE.Matrix4);
            var g = this.elements, f = a1.set(g[0], g[1], g[2]).length(), h = a1.set(g[4], g[5], g[6]).length(), k = a1.set(g[8], g[9], g[10]).length();
            0 > this.determinant() && (f = -f);
            c.x = g[12];
            c.y = g[13];
            c.z = g[14];
            b.elements.set(this.elements);
            c = 1 / f;
            var g = 1 / h, l = 1 / k;
            b.elements[0] *= c;
            b.elements[1] *= c;
            b.elements[2] *= c;
            b.elements[4] *= g;
            b.elements[5] *= g;
            b.elements[6] *= g;
            b.elements[8] *= l;
            b.elements[9] *= l;
            b.elements[10] *= l;
            d.setFromRotationMatrix(b);
            e.x = f;
            e.y = h;
            e.z = k;
            return this;
        };
    }(),
    makeFrustum: function(a1, b, c, d, e, g) {
        var f = this.elements;
        f[0] = 2 * e / (b - a1);
        f[4] = 0;
        f[8] = (b + a1) / (b - a1);
        f[12] = 0;
        f[1] = 0;
        f[5] = 2 * e / (d - c);
        f[9] = (d + c) / (d - c);
        f[13] = 0;
        f[2] = 0;
        f[6] = 0;
        f[10] = -(g + e) / (g - e);
        f[14] = -2 * g * e / (g - e);
        f[3] = 0;
        f[7] = 0;
        f[11] = -1;
        f[15] = 0;
        return this;
    },
    makePerspective: function(a1, b, c, d) {
        a1 = c * Math.tan(THREE.Math.degToRad(.5 * a1));
        var e = -a1;
        return this.makeFrustum(e * b, a1 * b, e, a1, c, d);
    },
    makeOrthographic: function(a1, b, c, d, e, g) {
        var f = this.elements, h = b - a1, k = c - d, l = g - e;
        f[0] = 2 / h;
        f[4] = 0;
        f[8] = 0;
        f[12] = -((b + a1) / h);
        f[1] = 0;
        f[5] = 2 / k;
        f[9] = 0;
        f[13] = -((c + d) / k);
        f[2] = 0;
        f[6] = 0;
        f[10] = -2 / l;
        f[14] = -((g + e) / l);
        f[3] = 0;
        f[7] = 0;
        f[11] = 0;
        f[15] = 1;
        return this;
    },
    equals: function(a1) {
        var b = this.elements;
        a1 = a1.elements;
        for(var c = 0; 16 > c; c++)if (b[c] !== a1[c]) return !1;
        return !0;
    },
    fromArray: function(a1) {
        this.elements.set(a1);
        return this;
    },
    toArray: function() {
        var a1 = this.elements;
        return [
            a1[0],
            a1[1],
            a1[2],
            a1[3],
            a1[4],
            a1[5],
            a1[6],
            a1[7],
            a1[8],
            a1[9],
            a1[10],
            a1[11],
            a1[12],
            a1[13],
            a1[14],
            a1[15]
        ];
    }
};
THREE.Ray = function(a1, b) {
    this.origin = void 0 !== a1 ? a1 : new THREE.Vector3;
    this.direction = void 0 !== b ? b : new THREE.Vector3;
};
THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function(a1, b) {
        this.origin.copy(a1);
        this.direction.copy(b);
        return this;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.origin.copy(a1.origin);
        this.direction.copy(a1.direction);
        return this;
    },
    at: function(a1, b) {
        return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a1).add(this.origin);
    },
    recast: function() {
        var a1 = new THREE.Vector3;
        return function(b) {
            this.origin.copy(this.at(b, a1));
            return this;
        };
    }(),
    closestPointToPoint: function(a1, b) {
        var c = b || new THREE.Vector3;
        c.subVectors(a1, this.origin);
        var d = c.dot(this.direction);
        return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin);
    },
    distanceToPoint: function(a1) {
        return Math.sqrt(this.distanceSqToPoint(a1));
    },
    distanceSqToPoint: function() {
        var a1 = new THREE.Vector3;
        return function(b) {
            var c = a1.subVectors(b, this.origin).dot(this.direction);
            if (0 > c) return this.origin.distanceToSquared(b);
            a1.copy(this.direction).multiplyScalar(c).add(this.origin);
            return a1.distanceToSquared(b);
        };
    }(),
    distanceSqToSegment: function() {
        var a1 = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
        return function(d, e, g, f) {
            a1.copy(d).add(e).multiplyScalar(.5);
            b.copy(e).sub(d).normalize();
            c.copy(this.origin).sub(a1);
            var h = .5 * d.distanceTo(e), k = -this.direction.dot(b), l = c.dot(this.direction), n = -c.dot(b), p = c.lengthSq(), m = Math.abs(1 - k * k), q;
            0 < m ? (d = k * n - l, e = k * l - n, q = h * m, 0 <= d ? e >= -q ? e <= q ? (h = 1 / m, d *= h, e *= h, k = d * (d + k * e + 2 * l) + e * (k * d + e + 2 * n) + p) : (e = h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 * n) + p) : (e = -h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 * n) + p) : e <= -q ? (d = Math.max(0, -(-k * h + l)), e = 0 < d ? -h : Math.min(Math.max(-h, -n), h), k = -d * d + e * (e + 2 * n) + p) : e <= q ? (d = 0, e = Math.min(Math.max(-h, -n), h), k = e * (e + 2 * n) + p) : (d = Math.max(0, -(k * h + l)), e = 0 < d ? h : Math.min(Math.max(-h, -n), h), k = -d * d + e * (e + 2 * n) + p)) : (e = 0 < k ? -h : h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 * n) + p);
            g && g.copy(this.direction).multiplyScalar(d).add(this.origin);
            f && f.copy(b).multiplyScalar(e).add(a1);
            return k;
        };
    }(),
    isIntersectionSphere: function(a1) {
        return this.distanceToPoint(a1.center) <= a1.radius;
    },
    intersectSphere: function() {
        var a1 = new THREE.Vector3;
        return function(b, c) {
            a1.subVectors(b.center, this.origin);
            var d = a1.dot(this.direction), e = a1.dot(a1) - d * d, g = b.radius * b.radius;
            if (e > g) return null;
            g = Math.sqrt(g - e);
            e = d - g;
            d += g;
            return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c);
        };
    }(),
    isIntersectionPlane: function(a1) {
        var b = a1.distanceToPoint(this.origin);
        return 0 === b || 0 > a1.normal.dot(this.direction) * b ? !0 : !1;
    },
    distanceToPlane: function(a1) {
        var b = a1.normal.dot(this.direction);
        if (0 === b) return 0 === a1.distanceToPoint(this.origin) ? 0 : null;
        a1 = -(this.origin.dot(a1.normal) + a1.constant) / b;
        return 0 <= a1 ? a1 : null;
    },
    intersectPlane: function(a1, b) {
        var c = this.distanceToPlane(a1);
        return null === c ? null : this.at(c, b);
    },
    isIntersectionBox: function() {
        var a1 = new THREE.Vector3;
        return function(b) {
            return null !== this.intersectBox(b, a1);
        };
    }(),
    intersectBox: function(a1, b) {
        var c, d, e, g, f;
        d = 1 / this.direction.x;
        g = 1 / this.direction.y;
        f = 1 / this.direction.z;
        var h = this.origin;
        0 <= d ? (c = (a1.min.x - h.x) * d, d *= a1.max.x - h.x) : (c = (a1.max.x - h.x) * d, d *= a1.min.x - h.x);
        0 <= g ? (e = (a1.min.y - h.y) * g, g *= a1.max.y - h.y) : (e = (a1.max.y - h.y) * g, g *= a1.min.y - h.y);
        if (c > g || e > d) return null;
        if (e > c || c !== c) c = e;
        if (g < d || d !== d) d = g;
        0 <= f ? (e = (a1.min.z - h.z) * f, f *= a1.max.z - h.z) : (e = (a1.max.z - h.z) * f, f *= a1.min.z - h.z);
        if (c > f || e > d) return null;
        if (e > c || c !== c) c = e;
        if (f < d || d !== d) d = f;
        return 0 > d ? null : this.at(0 <= c ? c : d, b);
    },
    intersectTriangle: function() {
        var a1 = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Vector3;
        return function(e, g, f, h, k) {
            b.subVectors(g, e);
            c.subVectors(f, e);
            d.crossVectors(b, c);
            g = this.direction.dot(d);
            if (0 < g) {
                if (h) return null;
                h = 1;
            } else if (0 > g) h = -1, g = -g;
            else return null;
            a1.subVectors(this.origin, e);
            e = h * this.direction.dot(c.crossVectors(a1, c));
            if (0 > e) return null;
            f = h * this.direction.dot(b.cross(a1));
            if (0 > f || e + f > g) return null;
            e = -h * a1.dot(d);
            return 0 > e ? null : this.at(e / g, k);
        };
    }(),
    applyMatrix4: function(a1) {
        this.direction.add(this.origin).applyMatrix4(a1);
        this.origin.applyMatrix4(a1);
        this.direction.sub(this.origin);
        this.direction.normalize();
        return this;
    },
    equals: function(a1) {
        return a1.origin.equals(this.origin) && a1.direction.equals(this.direction);
    }
};
THREE.Sphere = function(a1, b) {
    this.center = void 0 !== a1 ? a1 : new THREE.Vector3;
    this.radius = void 0 !== b ? b : 0;
};
THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function(a1, b) {
        this.center.copy(a1);
        this.radius = b;
        return this;
    },
    setFromPoints: function() {
        var a1 = new THREE.Box3;
        return function(b, c) {
            var d = this.center;
            void 0 !== c ? d.copy(c) : a1.setFromPoints(b).center(d);
            for(var e = 0, g = 0, f = b.length; g < f; g++)e = Math.max(e, d.distanceToSquared(b[g]));
            this.radius = Math.sqrt(e);
            return this;
        };
    }(),
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.center.copy(a1.center);
        this.radius = a1.radius;
        return this;
    },
    empty: function() {
        return 0 >= this.radius;
    },
    containsPoint: function(a1) {
        return a1.distanceToSquared(this.center) <= this.radius * this.radius;
    },
    distanceToPoint: function(a1) {
        return a1.distanceTo(this.center) - this.radius;
    },
    intersectsSphere: function(a1) {
        var b = this.radius + a1.radius;
        return a1.center.distanceToSquared(this.center) <= b * b;
    },
    clampPoint: function(a1, b) {
        var c = this.center.distanceToSquared(a1), d = b || new THREE.Vector3;
        d.copy(a1);
        c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
        return d;
    },
    getBoundingBox: function(a1) {
        a1 = a1 || new THREE.Box3;
        a1.set(this.center, this.center);
        a1.expandByScalar(this.radius);
        return a1;
    },
    applyMatrix4: function(a1) {
        this.center.applyMatrix4(a1);
        this.radius *= a1.getMaxScaleOnAxis();
        return this;
    },
    translate: function(a1) {
        this.center.add(a1);
        return this;
    },
    equals: function(a1) {
        return a1.center.equals(this.center) && a1.radius === this.radius;
    }
};
THREE.Frustum = function(a1, b, c, d, e, g) {
    this.planes = [
        void 0 !== a1 ? a1 : new THREE.Plane,
        void 0 !== b ? b : new THREE.Plane,
        void 0 !== c ? c : new THREE.Plane,
        void 0 !== d ? d : new THREE.Plane,
        void 0 !== e ? e : new THREE.Plane,
        void 0 !== g ? g : new THREE.Plane
    ];
};
THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function(a1, b, c, d, e, g) {
        var f = this.planes;
        f[0].copy(a1);
        f[1].copy(b);
        f[2].copy(c);
        f[3].copy(d);
        f[4].copy(e);
        f[5].copy(g);
        return this;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        for(var b = this.planes, c = 0; 6 > c; c++)b[c].copy(a1.planes[c]);
        return this;
    },
    setFromMatrix: function(a1) {
        var b = this.planes, c = a1.elements;
        a1 = c[0];
        var d = c[1], e = c[2], g = c[3], f = c[4], h = c[5], k = c[6], l = c[7], n = c[8], p = c[9], m = c[10], q = c[11], t = c[12], r = c[13], u = c[14], c = c[15];
        b[0].setComponents(g - a1, l - f, q - n, c - t).normalize();
        b[1].setComponents(g + a1, l + f, q + n, c + t).normalize();
        b[2].setComponents(g + d, l + h, q + p, c + r).normalize();
        b[3].setComponents(g - d, l - h, q - p, c - r).normalize();
        b[4].setComponents(g - e, l - k, q - m, c - u).normalize();
        b[5].setComponents(g + e, l + k, q + m, c + u).normalize();
        return this;
    },
    intersectsObject: function() {
        var a1 = new THREE.Sphere;
        return function(b) {
            var c = b.geometry;
            null === c.boundingSphere && c.computeBoundingSphere();
            a1.copy(c.boundingSphere);
            a1.applyMatrix4(b.matrixWorld);
            return this.intersectsSphere(a1);
        };
    }(),
    intersectsSphere: function(a1) {
        var b = this.planes, c = a1.center;
        a1 = -a1.radius;
        for(var d = 0; 6 > d; d++)if (b[d].distanceToPoint(c) < a1) return !1;
        return !0;
    },
    intersectsBox: function() {
        var a1 = new THREE.Vector3, b = new THREE.Vector3;
        return function(c) {
            for(var d = this.planes, e = 0; 6 > e; e++){
                var g = d[e];
                a1.x = 0 < g.normal.x ? c.min.x : c.max.x;
                b.x = 0 < g.normal.x ? c.max.x : c.min.x;
                a1.y = 0 < g.normal.y ? c.min.y : c.max.y;
                b.y = 0 < g.normal.y ? c.max.y : c.min.y;
                a1.z = 0 < g.normal.z ? c.min.z : c.max.z;
                b.z = 0 < g.normal.z ? c.max.z : c.min.z;
                var f = g.distanceToPoint(a1), g = g.distanceToPoint(b);
                if (0 > f && 0 > g) return !1;
            }
            return !0;
        };
    }(),
    containsPoint: function(a1) {
        for(var b = this.planes, c = 0; 6 > c; c++)if (0 > b[c].distanceToPoint(a1)) return !1;
        return !0;
    }
};
THREE.Plane = function(a1, b) {
    this.normal = void 0 !== a1 ? a1 : new THREE.Vector3(1, 0, 0);
    this.constant = void 0 !== b ? b : 0;
};
THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function(a1, b) {
        this.normal.copy(a1);
        this.constant = b;
        return this;
    },
    setComponents: function(a1, b, c, d) {
        this.normal.set(a1, b, c);
        this.constant = d;
        return this;
    },
    setFromNormalAndCoplanarPoint: function(a1, b) {
        this.normal.copy(a1);
        this.constant = -b.dot(this.normal);
        return this;
    },
    setFromCoplanarPoints: function() {
        var a1 = new THREE.Vector3, b = new THREE.Vector3;
        return function(c, d, e) {
            d = a1.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
            this.setFromNormalAndCoplanarPoint(d, c);
            return this;
        };
    }(),
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.normal.copy(a1.normal);
        this.constant = a1.constant;
        return this;
    },
    normalize: function() {
        var a1 = 1 / this.normal.length();
        this.normal.multiplyScalar(a1);
        this.constant *= a1;
        return this;
    },
    negate: function() {
        this.constant *= -1;
        this.normal.negate();
        return this;
    },
    distanceToPoint: function(a1) {
        return this.normal.dot(a1) + this.constant;
    },
    distanceToSphere: function(a1) {
        return this.distanceToPoint(a1.center) - a1.radius;
    },
    projectPoint: function(a1, b) {
        return this.orthoPoint(a1, b).sub(a1).negate();
    },
    orthoPoint: function(a1, b) {
        var c = this.distanceToPoint(a1);
        return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c);
    },
    isIntersectionLine: function(a1) {
        var b = this.distanceToPoint(a1.start);
        a1 = this.distanceToPoint(a1.end);
        return 0 > b && 0 < a1 || 0 > a1 && 0 < b;
    },
    intersectLine: function() {
        var a1 = new THREE.Vector3;
        return function(b, c) {
            var d = c || new THREE.Vector3, e = b.delta(a1), g = this.normal.dot(e);
            if (0 === g) {
                if (0 === this.distanceToPoint(b.start)) return d.copy(b.start);
            } else return g = -(b.start.dot(this.normal) + this.constant) / g, 0 > g || 1 < g ? void 0 : d.copy(e).multiplyScalar(g).add(b.start);
        };
    }(),
    coplanarPoint: function(a1) {
        return (a1 || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant);
    },
    applyMatrix4: function() {
        var a1 = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Matrix3;
        return function(d, e) {
            var g = e || c.getNormalMatrix(d), g = a1.copy(this.normal).applyMatrix3(g), f = this.coplanarPoint(b);
            f.applyMatrix4(d);
            this.setFromNormalAndCoplanarPoint(g, f);
            return this;
        };
    }(),
    translate: function(a1) {
        this.constant -= a1.dot(this.normal);
        return this;
    },
    equals: function(a1) {
        return a1.normal.equals(this.normal) && a1.constant === this.constant;
    }
};
THREE.Math = {
    generateUUID: function() {
        var a1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = Array(36), c = 0, d;
        return function() {
            for(var e = 0; 36 > e; e++)8 === e || 13 === e || 18 === e || 23 === e ? b[e] = "-" : 14 === e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a1[19 === e ? d & 3 | 8 : d]);
            return b.join("");
        };
    }(),
    clamp: function(a1, b, c) {
        return a1 < b ? b : a1 > c ? c : a1;
    },
    clampBottom: function(a1, b) {
        return a1 < b ? b : a1;
    },
    euclideanModulo: function(a1, b) {
        return (a1 % b + b) % b;
    },
    mapLinear: function(a1, b, c, d, e) {
        return d + (a1 - b) * (e - d) / (c - b);
    },
    smoothstep: function(a1, b, c) {
        if (a1 <= b) return 0;
        if (a1 >= c) return 1;
        a1 = (a1 - b) / (c - b);
        return a1 * a1 * (3 - 2 * a1);
    },
    smootherstep: function(a1, b, c) {
        if (a1 <= b) return 0;
        if (a1 >= c) return 1;
        a1 = (a1 - b) / (c - b);
        return a1 * a1 * a1 * (a1 * (6 * a1 - 15) + 10);
    },
    random16: function() {
        return (65280 * Math.random() + 255 * Math.random()) / 65535;
    },
    randInt: function(a1, b) {
        return a1 + Math.floor(Math.random() * (b - a1 + 1));
    },
    randFloat: function(a1, b) {
        return a1 + Math.random() * (b - a1);
    },
    randFloatSpread: function(a1) {
        return a1 * (.5 - Math.random());
    },
    degToRad: function() {
        var a1 = Math.PI / 180;
        return function(b) {
            return b * a1;
        };
    }(),
    radToDeg: function() {
        var a1 = 180 / Math.PI;
        return function(b) {
            return b * a1;
        };
    }(),
    isPowerOfTwo: function(a1) {
        return 0 === (a1 & a1 - 1) && 0 !== a1;
    },
    nextPowerOfTwo: function(a1) {
        a1--;
        a1 |= a1 >> 1;
        a1 |= a1 >> 2;
        a1 |= a1 >> 4;
        a1 |= a1 >> 8;
        a1 |= a1 >> 16;
        a1++;
        return a1;
    }
};
THREE.Spline = function(a1) {
    function b(a1, b, c, d, e, g, f) {
        a1 = .5 * (c - a1);
        d = .5 * (d - b);
        return (2 * (b - c) + a1 + d) * f + (-3 * (b - c) - 2 * a1 - d) * g + a1 * e + b;
    }
    this.points = a1;
    var c = [], d = {
        x: 0,
        y: 0,
        z: 0
    }, e, g, f, h, k, l, n, p, m;
    this.initFromArray = function(a1) {
        this.points = [];
        for(var b = 0; b < a1.length; b++)this.points[b] = {
            x: a1[b][0],
            y: a1[b][1],
            z: a1[b][2]
        };
    };
    this.getPoint = function(a1) {
        e = (this.points.length - 1) * a1;
        g = Math.floor(e);
        f = e - g;
        c[0] = 0 === g ? g : g - 1;
        c[1] = g;
        c[2] = g > this.points.length - 2 ? this.points.length - 1 : g + 1;
        c[3] = g > this.points.length - 3 ? this.points.length - 1 : g + 2;
        l = this.points[c[0]];
        n = this.points[c[1]];
        p = this.points[c[2]];
        m = this.points[c[3]];
        h = f * f;
        k = f * h;
        d.x = b(l.x, n.x, p.x, m.x, f, h, k);
        d.y = b(l.y, n.y, p.y, m.y, f, h, k);
        d.z = b(l.z, n.z, p.z, m.z, f, h, k);
        return d;
    };
    this.getControlPointsArray = function() {
        var a1, b, c = this.points.length, d = [];
        for(a1 = 0; a1 < c; a1++)b = this.points[a1], d[a1] = [
            b.x,
            b.y,
            b.z
        ];
        return d;
    };
    this.getLength = function(a1) {
        var b, c, d, e = b = b = 0, g = new THREE.Vector3, f = new THREE.Vector3, h = [], k = 0;
        h[0] = 0;
        a1 || (a1 = 100);
        c = this.points.length * a1;
        g.copy(this.points[0]);
        for(a1 = 1; a1 < c; a1++)b = a1 / c, d = this.getPoint(b), f.copy(d), k += f.distanceTo(g), g.copy(d), b *= this.points.length - 1, b = Math.floor(b), b !== e && (h[b] = k, e = b);
        h[h.length] = k;
        return {
            chunks: h,
            total: k
        };
    };
    this.reparametrizeByArcLength = function(a1) {
        var b, c, d, e, g, f, h = [], k = new THREE.Vector3, m = this.getLength();
        h.push(k.copy(this.points[0]).clone());
        for(b = 1; b < this.points.length; b++){
            c = m.chunks[b] - m.chunks[b - 1];
            f = Math.ceil(a1 * c / m.total);
            e = (b - 1) / (this.points.length - 1);
            g = b / (this.points.length - 1);
            for(c = 1; c < f - 1; c++)d = e + 1 / f * c * (g - e), d = this.getPoint(d), h.push(k.copy(d).clone());
            h.push(k.copy(this.points[b]).clone());
        }
        this.points = h;
    };
};
THREE.Triangle = function(a1, b, c) {
    this.a = void 0 !== a1 ? a1 : new THREE.Vector3;
    this.b = void 0 !== b ? b : new THREE.Vector3;
    this.c = void 0 !== c ? c : new THREE.Vector3;
};
THREE.Triangle.normal = function() {
    var a1 = new THREE.Vector3;
    return function(b, c, d, e) {
        e = e || new THREE.Vector3;
        e.subVectors(d, c);
        a1.subVectors(b, c);
        e.cross(a1);
        b = e.lengthSq();
        return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0);
    };
}();
THREE.Triangle.barycoordFromPoint = function() {
    var a1 = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
    return function(d, e, g, f, h) {
        a1.subVectors(f, e);
        b.subVectors(g, e);
        c.subVectors(d, e);
        d = a1.dot(a1);
        e = a1.dot(b);
        g = a1.dot(c);
        var k = b.dot(b);
        f = b.dot(c);
        var l = d * k - e * e;
        h = h || new THREE.Vector3;
        if (0 === l) return h.set(-2, -1, -1);
        l = 1 / l;
        k = (k * g - e * f) * l;
        d = (d * f - e * g) * l;
        return h.set(1 - k - d, d, k);
    };
}();
THREE.Triangle.containsPoint = function() {
    var a1 = new THREE.Vector3;
    return function(b, c, d, e) {
        b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a1);
        return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y;
    };
}();
THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function(a1, b, c) {
        this.a.copy(a1);
        this.b.copy(b);
        this.c.copy(c);
        return this;
    },
    setFromPointsAndIndices: function(a1, b, c, d) {
        this.a.copy(a1[b]);
        this.b.copy(a1[c]);
        this.c.copy(a1[d]);
        return this;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.a.copy(a1.a);
        this.b.copy(a1.b);
        this.c.copy(a1.c);
        return this;
    },
    area: function() {
        var a1 = new THREE.Vector3, b = new THREE.Vector3;
        return function() {
            a1.subVectors(this.c, this.b);
            b.subVectors(this.a, this.b);
            return .5 * a1.cross(b).length();
        };
    }(),
    midpoint: function(a1) {
        return (a1 || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    },
    normal: function(a1) {
        return THREE.Triangle.normal(this.a, this.b, this.c, a1);
    },
    plane: function(a1) {
        return (a1 || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c);
    },
    barycoordFromPoint: function(a1, b) {
        return THREE.Triangle.barycoordFromPoint(a1, this.a, this.b, this.c, b);
    },
    containsPoint: function(a1) {
        return THREE.Triangle.containsPoint(a1, this.a, this.b, this.c);
    },
    equals: function(a1) {
        return a1.a.equals(this.a) && a1.b.equals(this.b) && a1.c.equals(this.c);
    }
};
THREE.Clock = function(a1) {
    this.autoStart = void 0 !== a1 ? a1 : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1;
};
THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function() {
        this.oldTime = this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
        this.running = !0;
    },
    stop: function() {
        this.getElapsedTime();
        this.running = !1;
    },
    getElapsedTime: function() {
        this.getDelta();
        return this.elapsedTime;
    },
    getDelta: function() {
        var a1 = 0;
        this.autoStart && !this.running && this.start();
        if (this.running) {
            var b = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(), a1 = .001 * (b - this.oldTime);
            this.oldTime = b;
            this.elapsedTime += a1;
        }
        return a1;
    }
};
THREE.EventDispatcher = function() {};
THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher,
    apply: function(a1) {
        a1.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
        a1.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
        a1.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
        a1.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent;
    },
    addEventListener: function(a1, b) {
        void 0 === this._listeners && (this._listeners = {});
        var c = this._listeners;
        void 0 === c[a1] && (c[a1] = []);
        -1 === c[a1].indexOf(b) && c[a1].push(b);
    },
    hasEventListener: function(a1, b) {
        if (void 0 === this._listeners) return !1;
        var c = this._listeners;
        return void 0 !== c[a1] && -1 !== c[a1].indexOf(b) ? !0 : !1;
    },
    removeEventListener: function(a1, b) {
        if (void 0 !== this._listeners) {
            var c = this._listeners[a1];
            if (void 0 !== c) {
                var d = c.indexOf(b);
                -1 !== d && c.splice(d, 1);
            }
        }
    },
    dispatchEvent: function(a1) {
        if (void 0 !== this._listeners) {
            var b = this._listeners[a1.type];
            if (void 0 !== b) {
                a1.target = this;
                for(var c = [], d = b.length, e = 0; e < d; e++)c[e] = b[e];
                for(e = 0; e < d; e++)c[e].call(this, a1);
            }
        }
    }
};
(function(a1) {
    function b(a1, b) {
        return a1.distance - b.distance;
    }
    a1.Raycaster = function(b, c, g, f) {
        this.ray = new a1.Ray(b, c);
        this.near = g || 0;
        this.far = f || Infinity;
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
                    return this.Points;
                }
            }
        });
    };
    var c = function(a1, b, g, f) {
        if (!1 !== a1.visible && (a1.raycast(b, g), !0 === f)) {
            a1 = a1.children;
            f = 0;
            for(var h = a1.length; f < h; f++)c(a1[f], b, g, !0);
        }
    };
    a1.Raycaster.prototype = {
        constructor: a1.Raycaster,
        linePrecision: 1,
        set: function(a1, b) {
            this.ray.set(a1, b);
        },
        setFromCamera: function(b, c) {
            c instanceof a1.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(c.matrixWorld), this.ray.direction.set(b.x, b.y, .5).unproject(c).sub(this.ray.origin).normalize()) : c instanceof a1.OrthographicCamera ? (this.ray.origin.set(b.x, b.y, -1).unproject(c), this.ray.direction.set(0, 0, -1).transformDirection(c.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.");
        },
        intersectObject: function(a1, e) {
            var g = [];
            c(a1, this, g, e);
            g.sort(b);
            return g;
        },
        intersectObjects: function(a1, e) {
            var g = [];
            if (!1 === Array.isArray(a1)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), g;
            for(var f = 0, h = a1.length; f < h; f++)c(a1[f], this, g, e);
            g.sort(b);
            return g;
        }
    };
})(THREE);
THREE.Object3D = function() {
    Object.defineProperty(this, "id", {
        value: THREE.Object3DIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = THREE.Object3D.DefaultUp.clone();
    var a1 = new THREE.Vector3, b = new THREE.Euler, c = new THREE.Quaternion, d = new THREE.Vector3(1, 1, 1);
    b.onChange(function() {
        c.setFromEuler(b, !1);
    });
    c.onChange(function() {
        b.setFromQuaternion(c, void 0, !1);
    });
    Object.defineProperties(this, {
        position: {
            enumerable: !0,
            value: a1
        },
        rotation: {
            enumerable: !0,
            value: b
        },
        quaternion: {
            enumerable: !0,
            value: c
        },
        scale: {
            enumerable: !0,
            value: d
        },
        modelViewMatrix: {
            value: new THREE.Matrix4
        },
        normalMatrix: {
            value: new THREE.Matrix3
        }
    });
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate;
    this.matrixWorldNeedsUpdate = !1;
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this.renderOrder = 0;
    this.userData = {};
};
THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0);
THREE.Object3D.DefaultMatrixAutoUpdate = !0;
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    get eulerOrder () {
        console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
        return this.rotation.order;
    },
    set eulerOrder (a){
        console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
        this.rotation.order = a;
    },
    get useQuaternion () {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set useQuaternion (a){
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set renderDepth (a){
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
    },
    applyMatrix: function(a1) {
        this.matrix.multiplyMatrices(a1, this.matrix);
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    setRotationFromAxisAngle: function(a1, b) {
        this.quaternion.setFromAxisAngle(a1, b);
    },
    setRotationFromEuler: function(a1) {
        this.quaternion.setFromEuler(a1, !0);
    },
    setRotationFromMatrix: function(a1) {
        this.quaternion.setFromRotationMatrix(a1);
    },
    setRotationFromQuaternion: function(a1) {
        this.quaternion.copy(a1);
    },
    rotateOnAxis: function() {
        var a1 = new THREE.Quaternion;
        return function(b, c) {
            a1.setFromAxisAngle(b, c);
            this.quaternion.multiply(a1);
            return this;
        };
    }(),
    rotateX: function() {
        var a1 = new THREE.Vector3(1, 0, 0);
        return function(b) {
            return this.rotateOnAxis(a1, b);
        };
    }(),
    rotateY: function() {
        var a1 = new THREE.Vector3(0, 1, 0);
        return function(b) {
            return this.rotateOnAxis(a1, b);
        };
    }(),
    rotateZ: function() {
        var a1 = new THREE.Vector3(0, 0, 1);
        return function(b) {
            return this.rotateOnAxis(a1, b);
        };
    }(),
    translateOnAxis: function() {
        var a1 = new THREE.Vector3;
        return function(b, c) {
            a1.copy(b).applyQuaternion(this.quaternion);
            this.position.add(a1.multiplyScalar(c));
            return this;
        };
    }(),
    translate: function(a1, b) {
        console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
        return this.translateOnAxis(b, a1);
    },
    translateX: function() {
        var a1 = new THREE.Vector3(1, 0, 0);
        return function(b) {
            return this.translateOnAxis(a1, b);
        };
    }(),
    translateY: function() {
        var a1 = new THREE.Vector3(0, 1, 0);
        return function(b) {
            return this.translateOnAxis(a1, b);
        };
    }(),
    translateZ: function() {
        var a1 = new THREE.Vector3(0, 0, 1);
        return function(b) {
            return this.translateOnAxis(a1, b);
        };
    }(),
    localToWorld: function(a1) {
        return a1.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function() {
        var a1 = new THREE.Matrix4;
        return function(b) {
            return b.applyMatrix4(a1.getInverse(this.matrixWorld));
        };
    }(),
    lookAt: function() {
        var a1 = new THREE.Matrix4;
        return function(b) {
            a1.lookAt(b, this.position, this.up);
            this.quaternion.setFromRotationMatrix(a1);
        };
    }(),
    add: function(a1) {
        if (1 < arguments.length) {
            for(var b = 0; b < arguments.length; b++)this.add(arguments[b]);
            return this;
        }
        if (a1 === this) return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a1), this;
        a1 instanceof THREE.Object3D ? (null !== a1.parent && a1.parent.remove(a1), a1.parent = this, a1.dispatchEvent({
            type: "added"
        }), this.children.push(a1)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a1);
        return this;
    },
    remove: function(a1) {
        if (1 < arguments.length) for(var b = 0; b < arguments.length; b++)this.remove(arguments[b]);
        b = this.children.indexOf(a1);
        -1 !== b && (a1.parent = null, a1.dispatchEvent({
            type: "removed"
        }), this.children.splice(b, 1));
    },
    getChildByName: function(a1) {
        console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
        return this.getObjectByName(a1);
    },
    getObjectById: function(a1) {
        return this.getObjectByProperty("id", a1);
    },
    getObjectByName: function(a1) {
        return this.getObjectByProperty("name", a1);
    },
    getObjectByProperty: function(a1, b) {
        if (this[a1] === b) return this;
        for(var c = 0, d = this.children.length; c < d; c++){
            var e = this.children[c].getObjectByProperty(a1, b);
            if (void 0 !== e) return e;
        }
    },
    getWorldPosition: function(a1) {
        a1 = a1 || new THREE.Vector3;
        this.updateMatrixWorld(!0);
        return a1.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: function() {
        var a1 = new THREE.Vector3, b = new THREE.Vector3;
        return function(c) {
            c = c || new THREE.Quaternion;
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(a1, c, b);
            return c;
        };
    }(),
    getWorldRotation: function() {
        var a1 = new THREE.Quaternion;
        return function(b) {
            b = b || new THREE.Euler;
            this.getWorldQuaternion(a1);
            return b.setFromQuaternion(a1, this.rotation.order, !1);
        };
    }(),
    getWorldScale: function() {
        var a1 = new THREE.Vector3, b = new THREE.Quaternion;
        return function(c) {
            c = c || new THREE.Vector3;
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(a1, b, c);
            return c;
        };
    }(),
    getWorldDirection: function() {
        var a1 = new THREE.Quaternion;
        return function(b) {
            b = b || new THREE.Vector3;
            this.getWorldQuaternion(a1);
            return b.set(0, 0, 1).applyQuaternion(a1);
        };
    }(),
    raycast: function() {},
    traverse: function(a1) {
        a1(this);
        for(var b = this.children, c = 0, d = b.length; c < d; c++)b[c].traverse(a1);
    },
    traverseVisible: function(a1) {
        if (!1 !== this.visible) {
            a1(this);
            for(var b = this.children, c = 0, d = b.length; c < d; c++)b[c].traverseVisible(a1);
        }
    },
    traverseAncestors: function(a1) {
        var b = this.parent;
        null !== b && (a1(b), b.traverseAncestors(a1));
    },
    updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function(a1) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === a1) null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a1 = !0;
        for(var b = 0, c = this.children.length; b < c; b++)this.children[b].updateMatrixWorld(a1);
    },
    toJSON: function(a1) {
        function b(a1) {
            var b = [], c;
            for(c in a1){
                var d = a1[c];
                delete d.metadata;
                b.push(d);
            }
            return b;
        }
        var c = void 0 === a1, d = {}, e = {
            object: d
        };
        c && (a1 = {
            geometries: {},
            materials: {},
            textures: {},
            images: {}
        }, e.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        d.uuid = this.uuid;
        d.type = this.type;
        "" !== this.name && (d.name = this.name);
        "{}" !== JSON.stringify(this.userData) && (d.userData = this.userData);
        !0 !== this.visible && (d.visible = this.visible);
        d.matrix = this.matrix.toArray();
        if (0 < this.children.length) {
            d.children = [];
            for(var g = 0; g < this.children.length; g++)d.children.push(this.children[g].toJSON(a1).object);
        }
        c && (c = b(a1.geometries), d = b(a1.materials), g = b(a1.textures), a1 = b(a1.images), 0 < c.length && (e.geometries = c), 0 < d.length && (e.materials = d), 0 < g.length && (e.textures = g), 0 < a1.length && (e.images = a1));
        return e;
    },
    clone: function(a1) {
        return (new this.constructor).copy(this, a1);
    },
    copy: function(a1, b) {
        void 0 === b && (b = !0);
        this.name = a1.name;
        this.up.copy(a1.up);
        this.position.copy(a1.position);
        this.quaternion.copy(a1.quaternion);
        this.scale.copy(a1.scale);
        this.rotationAutoUpdate = a1.rotationAutoUpdate;
        this.matrix.copy(a1.matrix);
        this.matrixWorld.copy(a1.matrixWorld);
        this.matrixAutoUpdate = a1.matrixAutoUpdate;
        this.matrixWorldNeedsUpdate = a1.matrixWorldNeedsUpdate;
        this.visible = a1.visible;
        this.castShadow = a1.castShadow;
        this.receiveShadow = a1.receiveShadow;
        this.frustumCulled = a1.frustumCulled;
        this.renderOrder = a1.renderOrder;
        this.userData = JSON.parse(JSON.stringify(a1.userData));
        if (!0 === b) for(var c = 0; c < a1.children.length; c++)this.add(a1.children[c].clone());
        return this;
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
THREE.Object3DIdCount = 0;
THREE.Face3 = function(a1, b, c, d, e, g) {
    this.a = a1;
    this.b = b;
    this.c = c;
    this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
    this.vertexNormals = Array.isArray(d) ? d : [];
    this.color = e instanceof THREE.Color ? e : new THREE.Color;
    this.vertexColors = Array.isArray(e) ? e : [];
    this.materialIndex = void 0 !== g ? g : 0;
};
THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.a = a1.a;
        this.b = a1.b;
        this.c = a1.c;
        this.normal.copy(a1.normal);
        this.color.copy(a1.color);
        this.materialIndex = a1.materialIndex;
        for(var b = 0, c = a1.vertexNormals.length; b < c; b++)this.vertexNormals[b] = a1.vertexNormals[b].clone();
        b = 0;
        for(c = a1.vertexColors.length; b < c; b++)this.vertexColors[b] = a1.vertexColors[b].clone();
        return this;
    }
};
THREE.Face4 = function(a1, b, c, d, e, g, f) {
    console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
    return new THREE.Face3(a1, b, c, e, g, f);
};
THREE.BufferAttribute = function(a1, b) {
    this.uuid = THREE.Math.generateUUID();
    this.array = a1;
    this.itemSize = b;
    this.dynamic = !1;
    this.updateRange = {
        offset: 0,
        count: -1
    };
    this.version = 0;
};
THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute,
    get length () {
        console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");
        return this.array.length;
    },
    get count () {
        return this.array.length / this.itemSize;
    },
    set needsUpdate (a){
        !0 === a && this.version++;
    },
    setDynamic: function(a1) {
        this.dynamic = a1;
        return this;
    },
    copy: function(a1) {
        this.array = new a1.array.constructor(a1.array);
        this.itemSize = a1.itemSize;
        this.dynamic = a1.dynamic;
        return this;
    },
    copyAt: function(a1, b, c) {
        a1 *= this.itemSize;
        c *= b.itemSize;
        for(var d = 0, e = this.itemSize; d < e; d++)this.array[a1 + d] = b.array[c + d];
        return this;
    },
    copyArray: function(a1) {
        this.array.set(a1);
        return this;
    },
    copyColorsArray: function(a1) {
        for(var b = this.array, c = 0, d = 0, e = a1.length; d < e; d++){
            var g = a1[d];
            void 0 === g && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d), g = new THREE.Color);
            b[c++] = g.r;
            b[c++] = g.g;
            b[c++] = g.b;
        }
        return this;
    },
    copyIndicesArray: function(a1) {
        for(var b = this.array, c = 0, d = 0, e = a1.length; d < e; d++){
            var g = a1[d];
            b[c++] = g.a;
            b[c++] = g.b;
            b[c++] = g.c;
        }
        return this;
    },
    copyVector2sArray: function(a1) {
        for(var b = this.array, c = 0, d = 0, e = a1.length; d < e; d++){
            var g = a1[d];
            void 0 === g && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", d), g = new THREE.Vector2);
            b[c++] = g.x;
            b[c++] = g.y;
        }
        return this;
    },
    copyVector3sArray: function(a1) {
        for(var b = this.array, c = 0, d = 0, e = a1.length; d < e; d++){
            var g = a1[d];
            void 0 === g && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d), g = new THREE.Vector3);
            b[c++] = g.x;
            b[c++] = g.y;
            b[c++] = g.z;
        }
        return this;
    },
    copyVector4sArray: function(a1) {
        for(var b = this.array, c = 0, d = 0, e = a1.length; d < e; d++){
            var g = a1[d];
            void 0 === g && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d), g = new THREE.Vector4);
            b[c++] = g.x;
            b[c++] = g.y;
            b[c++] = g.z;
            b[c++] = g.w;
        }
        return this;
    },
    set: function(a1, b) {
        void 0 === b && (b = 0);
        this.array.set(a1, b);
        return this;
    },
    getX: function(a1) {
        return this.array[a1 * this.itemSize];
    },
    setX: function(a1, b) {
        this.array[a1 * this.itemSize] = b;
        return this;
    },
    getY: function(a1) {
        return this.array[a1 * this.itemSize + 1];
    },
    setY: function(a1, b) {
        this.array[a1 * this.itemSize + 1] = b;
        return this;
    },
    getZ: function(a1) {
        return this.array[a1 * this.itemSize + 2];
    },
    setZ: function(a1, b) {
        this.array[a1 * this.itemSize + 2] = b;
        return this;
    },
    getW: function(a1) {
        return this.array[a1 * this.itemSize + 3];
    },
    setW: function(a1, b) {
        this.array[a1 * this.itemSize + 3] = b;
        return this;
    },
    setXY: function(a1, b, c) {
        a1 *= this.itemSize;
        this.array[a1 + 0] = b;
        this.array[a1 + 1] = c;
        return this;
    },
    setXYZ: function(a1, b, c, d) {
        a1 *= this.itemSize;
        this.array[a1 + 0] = b;
        this.array[a1 + 1] = c;
        this.array[a1 + 2] = d;
        return this;
    },
    setXYZW: function(a1, b, c, d, e) {
        a1 *= this.itemSize;
        this.array[a1 + 0] = b;
        this.array[a1 + 1] = c;
        this.array[a1 + 2] = d;
        this.array[a1 + 3] = e;
        return this;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    }
};
THREE.Int8Attribute = function(a1, b) {
    return new THREE.BufferAttribute(new Int8Array(a1), b);
};
THREE.Uint8Attribute = function(a1, b) {
    return new THREE.BufferAttribute(new Uint8Array(a1), b);
};
THREE.Uint8ClampedAttribute = function(a1, b) {
    return new THREE.BufferAttribute(new Uint8ClampedArray(a1), b);
};
THREE.Int16Attribute = function(a1, b) {
    return new THREE.BufferAttribute(new Int16Array(a1), b);
};
THREE.Uint16Attribute = function(a1, b) {
    return new THREE.BufferAttribute(new Uint16Array(a1), b);
};
THREE.Int32Attribute = function(a1, b) {
    return new THREE.BufferAttribute(new Int32Array(a1), b);
};
THREE.Uint32Attribute = function(a1, b) {
    return new THREE.BufferAttribute(new Uint32Array(a1), b);
};
THREE.Float32Attribute = function(a1, b) {
    return new THREE.BufferAttribute(new Float32Array(a1), b);
};
THREE.Float64Attribute = function(a1, b) {
    return new THREE.BufferAttribute(new Float64Array(a1), b);
};
THREE.DynamicBufferAttribute = function(a1, b) {
    console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
    return new THREE.BufferAttribute(a1, b).setDynamic(!0);
};
THREE.InstancedBufferAttribute = function(a1, b, c) {
    THREE.BufferAttribute.call(this, a1, b);
    this.meshPerAttribute = c || 1;
};
THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype);
THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute;
THREE.InstancedBufferAttribute.prototype.copy = function(a1) {
    THREE.BufferAttribute.prototype.copy.call(this, a1);
    this.meshPerAttribute = a1.meshPerAttribute;
    return this;
};
THREE.InterleavedBuffer = function(a1, b) {
    this.uuid = THREE.Math.generateUUID();
    this.array = a1;
    this.stride = b;
    this.dynamic = !1;
    this.updateRange = {
        offset: 0,
        count: -1
    };
    this.version = 0;
};
THREE.InterleavedBuffer.prototype = {
    constructor: THREE.InterleavedBuffer,
    get length () {
        return this.array.length;
    },
    get count () {
        return this.array.length / this.stride;
    },
    set needsUpdate (a){
        !0 === a && this.version++;
    },
    setDynamic: function(a1) {
        this.dynamic = a1;
        return this;
    },
    copy: function(a1) {
        this.array = new a1.array.constructor(a1.array);
        this.stride = a1.stride;
        this.dynamic = a1.dynamic;
    },
    copyAt: function(a1, b, c) {
        a1 *= this.stride;
        c *= b.stride;
        for(var d = 0, e = this.stride; d < e; d++)this.array[a1 + d] = b.array[c + d];
        return this;
    },
    set: function(a1, b) {
        void 0 === b && (b = 0);
        this.array.set(a1, b);
        return this;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    }
};
THREE.InstancedInterleavedBuffer = function(a1, b, c) {
    THREE.InterleavedBuffer.call(this, a1, b);
    this.meshPerAttribute = c || 1;
};
THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype);
THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer;
THREE.InstancedInterleavedBuffer.prototype.copy = function(a1) {
    THREE.InterleavedBuffer.prototype.copy.call(this, a1);
    this.meshPerAttribute = a1.meshPerAttribute;
    return this;
};
THREE.InterleavedBufferAttribute = function(a1, b, c) {
    this.uuid = THREE.Math.generateUUID();
    this.data = a1;
    this.itemSize = b;
    this.offset = c;
};
THREE.InterleavedBufferAttribute.prototype = {
    constructor: THREE.InterleavedBufferAttribute,
    get length () {
        console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");
        return this.array.length;
    },
    get count () {
        return this.data.array.length / this.data.stride;
    },
    setX: function(a1, b) {
        this.data.array[a1 * this.data.stride + this.offset] = b;
        return this;
    },
    setY: function(a1, b) {
        this.data.array[a1 * this.data.stride + this.offset + 1] = b;
        return this;
    },
    setZ: function(a1, b) {
        this.data.array[a1 * this.data.stride + this.offset + 2] = b;
        return this;
    },
    setW: function(a1, b) {
        this.data.array[a1 * this.data.stride + this.offset + 3] = b;
        return this;
    },
    getX: function(a1) {
        return this.data.array[a1 * this.data.stride + this.offset];
    },
    getY: function(a1) {
        return this.data.array[a1 * this.data.stride + this.offset + 1];
    },
    getZ: function(a1) {
        return this.data.array[a1 * this.data.stride + this.offset + 2];
    },
    getW: function(a1) {
        return this.data.array[a1 * this.data.stride + this.offset + 3];
    },
    setXY: function(a1, b, c) {
        a1 = a1 * this.data.stride + this.offset;
        this.data.array[a1 + 0] = b;
        this.data.array[a1 + 1] = c;
        return this;
    },
    setXYZ: function(a1, b, c, d) {
        a1 = a1 * this.data.stride + this.offset;
        this.data.array[a1 + 0] = b;
        this.data.array[a1 + 1] = c;
        this.data.array[a1 + 2] = d;
        return this;
    },
    setXYZW: function(a1, b, c, d, e) {
        a1 = a1 * this.data.stride + this.offset;
        this.data.array[a1 + 0] = b;
        this.data.array[a1 + 1] = c;
        this.data.array[a1 + 2] = d;
        this.data.array[a1 + 3] = e;
        return this;
    }
};
THREE.Geometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Geometry";
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [
        []
    ];
    this.morphTargets = [];
    this.morphColors = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1;
};
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(a1) {
        for(var b = (new THREE.Matrix3).getNormalMatrix(a1), c = 0, d = this.vertices.length; c < d; c++)this.vertices[c].applyMatrix4(a1);
        c = 0;
        for(d = this.faces.length; c < d; c++){
            a1 = this.faces[c];
            a1.normal.applyMatrix3(b).normalize();
            for(var e = 0, g = a1.vertexNormals.length; e < g; e++)a1.vertexNormals[e].applyMatrix3(b).normalize();
        }
        null !== this.boundingBox && this.computeBoundingBox();
        null !== this.boundingSphere && this.computeBoundingSphere();
        this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
    },
    rotateX: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeRotationX(b);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    rotateY: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeRotationY(b);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    rotateZ: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeRotationZ(b);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    translate: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeTranslation(b, c, d);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    scale: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeScale(b, c, d);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    lookAt: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Object3D);
            a1.lookAt(b);
            a1.updateMatrix();
            this.applyMatrix(a1.matrix);
        };
    }(),
    fromBufferGeometry: function(a1) {
        var b = this, c = null !== a1.index ? a1.index.array : void 0, d = a1.attributes, e = d.position.array, g = void 0 !== d.normal ? d.normal.array : void 0, f = void 0 !== d.color ? d.color.array : void 0, h = void 0 !== d.uv ? d.uv.array : void 0, k = void 0 !== d.uv2 ? d.uv2.array : void 0;
        void 0 !== k && (this.faceVertexUvs[1] = []);
        for(var l = [], n = [], p = [], m = d = 0; d < e.length; d += 3, m += 2)b.vertices.push(new THREE.Vector3(e[d], e[d + 1], e[d + 2])), void 0 !== g && l.push(new THREE.Vector3(g[d], g[d + 1], g[d + 2])), void 0 !== f && b.colors.push(new THREE.Color(f[d], f[d + 1], f[d + 2])), void 0 !== h && n.push(new THREE.Vector2(h[m], h[m + 1])), void 0 !== k && p.push(new THREE.Vector2(k[m], k[m + 1]));
        var q = function(a1, c, d) {
            var e = void 0 !== g ? [
                l[a1].clone(),
                l[c].clone(),
                l[d].clone()
            ] : [], m = void 0 !== f ? [
                b.colors[a1].clone(),
                b.colors[c].clone(),
                b.colors[d].clone()
            ] : [], e = new THREE.Face3(a1, c, d, e, m);
            b.faces.push(e);
            void 0 !== h && b.faceVertexUvs[0].push([
                n[a1].clone(),
                n[c].clone(),
                n[d].clone()
            ]);
            void 0 !== k && b.faceVertexUvs[1].push([
                p[a1].clone(),
                p[c].clone(),
                p[d].clone()
            ]);
        };
        if (void 0 !== c) {
            if (e = a1.groups, 0 < e.length) for(d = 0; d < e.length; d++)for(var m = e[d], t = m.start, r = m.count, m = t, t = t + r; m < t; m += 3)q(c[m], c[m + 1], c[m + 2]);
            else for(d = 0; d < c.length; d += 3)q(c[d], c[d + 1], c[d + 2]);
        } else for(d = 0; d < e.length / 3; d += 3)q(d, d + 1, d + 2);
        this.computeFaceNormals();
        null !== a1.boundingBox && (this.boundingBox = a1.boundingBox.clone());
        null !== a1.boundingSphere && (this.boundingSphere = a1.boundingSphere.clone());
        return this;
    },
    center: function() {
        this.computeBoundingBox();
        var a1 = this.boundingBox.center().negate();
        this.translate(a1.x, a1.y, a1.z);
        return a1;
    },
    normalize: function() {
        this.computeBoundingSphere();
        var a1 = this.boundingSphere.center, b = this.boundingSphere.radius, b = 0 === b ? 1 : 1 / b, c = new THREE.Matrix4;
        c.set(b, 0, 0, -b * a1.x, 0, b, 0, -b * a1.y, 0, 0, b, -b * a1.z, 0, 0, 0, 1);
        this.applyMatrix(c);
        return this;
    },
    computeFaceNormals: function() {
        for(var a1 = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; c < d; c++){
            var e = this.faces[c], g = this.vertices[e.a], f = this.vertices[e.b];
            a1.subVectors(this.vertices[e.c], f);
            b.subVectors(g, f);
            a1.cross(b);
            a1.normalize();
            e.normal.copy(a1);
        }
    },
    computeVertexNormals: function(a1) {
        var b, c, d;
        d = Array(this.vertices.length);
        b = 0;
        for(c = this.vertices.length; b < c; b++)d[b] = new THREE.Vector3;
        if (a1) {
            var e, g, f, h = new THREE.Vector3, k = new THREE.Vector3;
            a1 = 0;
            for(b = this.faces.length; a1 < b; a1++)c = this.faces[a1], e = this.vertices[c.a], g = this.vertices[c.b], f = this.vertices[c.c], h.subVectors(f, g), k.subVectors(e, g), h.cross(k), d[c.a].add(h), d[c.b].add(h), d[c.c].add(h);
        } else for(a1 = 0, b = this.faces.length; a1 < b; a1++)c = this.faces[a1], d[c.a].add(c.normal), d[c.b].add(c.normal), d[c.c].add(c.normal);
        b = 0;
        for(c = this.vertices.length; b < c; b++)d[b].normalize();
        a1 = 0;
        for(b = this.faces.length; a1 < b; a1++)c = this.faces[a1], e = c.vertexNormals, 3 === e.length ? (e[0].copy(d[c.a]), e[1].copy(d[c.b]), e[2].copy(d[c.c])) : (e[0] = d[c.a].clone(), e[1] = d[c.b].clone(), e[2] = d[c.c].clone());
    },
    computeMorphNormals: function() {
        var a1, b, c, d, e;
        c = 0;
        for(d = this.faces.length; c < d; c++)for(e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals || (e.__originalVertexNormals = []), a1 = 0, b = e.vertexNormals.length; a1 < b; a1++)e.__originalVertexNormals[a1] ? e.__originalVertexNormals[a1].copy(e.vertexNormals[a1]) : e.__originalVertexNormals[a1] = e.vertexNormals[a1].clone();
        var g = new THREE.Geometry;
        g.faces = this.faces;
        a1 = 0;
        for(b = this.morphTargets.length; a1 < b; a1++){
            if (!this.morphNormals[a1]) {
                this.morphNormals[a1] = {};
                this.morphNormals[a1].faceNormals = [];
                this.morphNormals[a1].vertexNormals = [];
                e = this.morphNormals[a1].faceNormals;
                var f = this.morphNormals[a1].vertexNormals, h, k;
                c = 0;
                for(d = this.faces.length; c < d; c++)h = new THREE.Vector3, k = {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3
                }, e.push(h), f.push(k);
            }
            f = this.morphNormals[a1];
            g.vertices = this.morphTargets[a1].vertices;
            g.computeFaceNormals();
            g.computeVertexNormals();
            c = 0;
            for(d = this.faces.length; c < d; c++)e = this.faces[c], h = f.faceNormals[c], k = f.vertexNormals[c], h.copy(e.normal), k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2]);
        }
        c = 0;
        for(d = this.faces.length; c < d; c++)e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals;
    },
    computeTangents: function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.");
    },
    computeLineDistances: function() {
        for(var a1 = 0, b = this.vertices, c = 0, d = b.length; c < d; c++)0 < c && (a1 += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a1;
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
        this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function(a1, b, c) {
        if (!1 === a1 instanceof THREE.Geometry) console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a1);
        else {
            var d, e = this.vertices.length, g = this.vertices, f = a1.vertices, h = this.faces, k = a1.faces, l = this.faceVertexUvs[0];
            a1 = a1.faceVertexUvs[0];
            void 0 === c && (c = 0);
            void 0 !== b && (d = (new THREE.Matrix3).getNormalMatrix(b));
            for(var n = 0, p = f.length; n < p; n++){
                var m = f[n].clone();
                void 0 !== b && m.applyMatrix4(b);
                g.push(m);
            }
            n = 0;
            for(p = k.length; n < p; n++){
                var f = k[n], q, t = f.vertexNormals, r = f.vertexColors, m = new THREE.Face3(f.a + e, f.b + e, f.c + e);
                m.normal.copy(f.normal);
                void 0 !== d && m.normal.applyMatrix3(d).normalize();
                b = 0;
                for(g = t.length; b < g; b++)q = t[b].clone(), void 0 !== d && q.applyMatrix3(d).normalize(), m.vertexNormals.push(q);
                m.color.copy(f.color);
                b = 0;
                for(g = r.length; b < g; b++)q = r[b], m.vertexColors.push(q.clone());
                m.materialIndex = f.materialIndex + c;
                h.push(m);
            }
            n = 0;
            for(p = a1.length; n < p; n++)if (c = a1[n], d = [], void 0 !== c) {
                b = 0;
                for(g = c.length; b < g; b++)d.push(c[b].clone());
                l.push(d);
            }
        }
    },
    mergeMesh: function(a1) {
        !1 === a1 instanceof THREE.Mesh ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a1) : (a1.matrixAutoUpdate && a1.updateMatrix(), this.merge(a1.geometry, a1.matrix));
    },
    mergeVertices: function() {
        var a1 = {}, b = [], c = [], d, e = Math.pow(10, 4), g, f;
        g = 0;
        for(f = this.vertices.length; g < f; g++)d = this.vertices[g], d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z * e), void 0 === a1[d] ? (a1[d] = g, b.push(this.vertices[g]), c[g] = b.length - 1) : c[g] = c[a1[d]];
        a1 = [];
        g = 0;
        for(f = this.faces.length; g < f; g++)for(e = this.faces[g], e.a = c[e.a], e.b = c[e.b], e.c = c[e.c], e = [
            e.a,
            e.b,
            e.c
        ], d = 0; 3 > d; d++)if (e[d] === e[(d + 1) % 3]) {
            a1.push(g);
            break;
        }
        for(g = a1.length - 1; 0 <= g; g--)for(e = a1[g], this.faces.splice(e, 1), c = 0, f = this.faceVertexUvs.length; c < f; c++)this.faceVertexUvs[c].splice(e, 1);
        g = this.vertices.length - b.length;
        this.vertices = b;
        return g;
    },
    toJSON: function() {
        function a1(a1, b, c) {
            return c ? a1 | 1 << b : a1 & ~(1 << b);
        }
        function b(a1) {
            var b = a1.x.toString() + a1.y.toString() + a1.z.toString();
            if (void 0 !== l[b]) return l[b];
            l[b] = k.length / 3;
            k.push(a1.x, a1.y, a1.z);
            return l[b];
        }
        function c(a1) {
            var b = a1.r.toString() + a1.g.toString() + a1.b.toString();
            if (void 0 !== p[b]) return p[b];
            p[b] = n.length;
            n.push(a1.getHex());
            return p[b];
        }
        function d(a1) {
            var b = a1.x.toString() + a1.y.toString();
            if (void 0 !== q[b]) return q[b];
            q[b] = m.length / 2;
            m.push(a1.x, a1.y);
            return q[b];
        }
        var e = {
            metadata: {
                version: 4.4,
                type: "Geometry",
                generator: "Geometry.toJSON"
            }
        };
        e.uuid = this.uuid;
        e.type = this.type;
        "" !== this.name && (e.name = this.name);
        if (void 0 !== this.parameters) {
            var g = this.parameters, f;
            for(f in g)void 0 !== g[f] && (e[f] = g[f]);
            return e;
        }
        g = [];
        for(f = 0; f < this.vertices.length; f++){
            var h = this.vertices[f];
            g.push(h.x, h.y, h.z);
        }
        var h = [], k = [], l = {}, n = [], p = {}, m = [], q = {};
        for(f = 0; f < this.faces.length; f++){
            var t = this.faces[f], r = void 0 !== this.faceVertexUvs[0][f], u = 0 < t.normal.length(), w = 0 < t.vertexNormals.length, v = 1 !== t.color.r || 1 !== t.color.g || 1 !== t.color.b, B = 0 < t.vertexColors.length, x = 0, x = a1(x, 0, 0), x = a1(x, 1, !1), x = a1(x, 2, !1), x = a1(x, 3, r), x = a1(x, 4, u), x = a1(x, 5, w), x = a1(x, 6, v), x = a1(x, 7, B);
            h.push(x);
            h.push(t.a, t.b, t.c);
            r && (r = this.faceVertexUvs[0][f], h.push(d(r[0]), d(r[1]), d(r[2])));
            u && h.push(b(t.normal));
            w && (u = t.vertexNormals, h.push(b(u[0]), b(u[1]), b(u[2])));
            v && h.push(c(t.color));
            B && (t = t.vertexColors, h.push(c(t[0]), c(t[1]), c(t[2])));
        }
        e.data = {};
        e.data.vertices = g;
        e.data.normals = k;
        0 < n.length && (e.data.colors = n);
        0 < m.length && (e.data.uvs = [
            m
        ]);
        e.data.faces = h;
        return e;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.vertices = [];
        this.faces = [];
        this.faceVertexUvs = [
            []
        ];
        for(var b = a1.vertices, c = 0, d = b.length; c < d; c++)this.vertices.push(b[c].clone());
        b = a1.faces;
        c = 0;
        for(d = b.length; c < d; c++)this.faces.push(b[c].clone());
        c = 0;
        for(d = a1.faceVertexUvs.length; c < d; c++){
            b = a1.faceVertexUvs[c];
            void 0 === this.faceVertexUvs[c] && (this.faceVertexUvs[c] = []);
            for(var e = 0, g = b.length; e < g; e++){
                for(var f = b[e], h = [], k = 0, l = f.length; k < l; k++)h.push(f[k].clone());
                this.faceVertexUvs[c].push(h);
            }
        }
        return this;
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);
THREE.GeometryIdCount = 0;
THREE.DirectGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "DirectGeometry";
    this.indices = [];
    this.vertices = [];
    this.normals = [];
    this.colors = [];
    this.uvs = [];
    this.uvs2 = [];
    this.groups = [];
    this.morphTargets = {};
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1;
};
THREE.DirectGeometry.prototype = {
    constructor: THREE.DirectGeometry,
    computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
    computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
    computeFaceNormals: function() {
        console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.");
    },
    computeVertexNormals: function() {
        console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.");
    },
    computeGroups: function(a1) {
        var b, c = [], d;
        a1 = a1.faces;
        for(var e = 0; e < a1.length; e++){
            var g = a1[e];
            g.materialIndex !== d && (d = g.materialIndex, void 0 !== b && (b.count = 3 * e - b.start, c.push(b)), b = {
                start: 3 * e,
                materialIndex: d
            });
        }
        void 0 !== b && (b.count = 3 * e - b.start, c.push(b));
        this.groups = c;
    },
    fromGeometry: function(a1) {
        var b = a1.faces, c = a1.vertices, d = a1.faceVertexUvs, e = d[0] && 0 < d[0].length, g = d[1] && 0 < d[1].length, f = a1.morphTargets, h = f.length;
        if (0 < h) {
            for(var k = [], l = 0; l < h; l++)k[l] = [];
            this.morphTargets.position = k;
        }
        var n = a1.morphNormals, p = n.length;
        if (0 < p) {
            for(var m = [], l = 0; l < p; l++)m[l] = [];
            this.morphTargets.normal = m;
        }
        for(var q = a1.skinIndices, t = a1.skinWeights, r = q.length === c.length, u = t.length === c.length, l = 0; l < b.length; l++){
            var w = b[l];
            this.vertices.push(c[w.a], c[w.b], c[w.c]);
            var v = w.vertexNormals;
            3 === v.length ? this.normals.push(v[0], v[1], v[2]) : (v = w.normal, this.normals.push(v, v, v));
            v = w.vertexColors;
            3 === v.length ? this.colors.push(v[0], v[1], v[2]) : (v = w.color, this.colors.push(v, v, v));
            !0 === e && (v = d[0][l], void 0 !== v ? this.uvs.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2)));
            !0 === g && (v = d[1][l], void 0 !== v ? this.uvs2.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2)));
            for(v = 0; v < h; v++){
                var B = f[v].vertices;
                k[v].push(B[w.a], B[w.b], B[w.c]);
            }
            for(v = 0; v < p; v++)B = n[v].vertexNormals[l], m[v].push(B.a, B.b, B.c);
            r && this.skinIndices.push(q[w.a], q[w.b], q[w.c]);
            u && this.skinWeights.push(t[w.a], t[w.b], t[w.c]);
        }
        this.computeGroups(a1);
        this.verticesNeedUpdate = a1.verticesNeedUpdate;
        this.normalsNeedUpdate = a1.normalsNeedUpdate;
        this.colorsNeedUpdate = a1.colorsNeedUpdate;
        this.uvsNeedUpdate = a1.uvsNeedUpdate;
        this.groupsNeedUpdate = a1.groupsNeedUpdate;
        return this;
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
};
THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype);
THREE.BufferGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingSphere = this.boundingBox = null;
    this.drawRange = {
        start: 0,
        count: Infinity
    };
};
THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    addIndex: function(a1) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
        this.setIndex(a1);
    },
    getIndex: function() {
        return this.index;
    },
    setIndex: function(a1) {
        this.index = a1;
    },
    addAttribute: function(a1, b, c) {
        !1 === b instanceof THREE.BufferAttribute && !1 === b instanceof THREE.InterleavedBufferAttribute ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(a1, new THREE.BufferAttribute(b, c))) : "index" === a1 ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(b)) : this.attributes[a1] = b;
    },
    getAttribute: function(a1) {
        return this.attributes[a1];
    },
    removeAttribute: function(a1) {
        delete this.attributes[a1];
    },
    get drawcalls () {
        console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
        return this.groups;
    },
    get offsets () {
        console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
        return this.groups;
    },
    addDrawCall: function(a1, b, c) {
        void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
        console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
        this.addGroup(a1, b);
    },
    clearDrawCalls: function() {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
        this.clearGroups();
    },
    addGroup: function(a1, b, c) {
        this.groups.push({
            start: a1,
            count: b,
            materialIndex: void 0 !== c ? c : 0
        });
    },
    clearGroups: function() {
        this.groups = [];
    },
    setDrawRange: function(a1, b) {
        this.drawRange.start = a1;
        this.drawRange.count = b;
    },
    applyMatrix: function(a1) {
        var b = this.attributes.position;
        void 0 !== b && (a1.applyToVector3Array(b.array), b.needsUpdate = !0);
        b = this.attributes.normal;
        void 0 !== b && ((new THREE.Matrix3).getNormalMatrix(a1).applyToVector3Array(b.array), b.needsUpdate = !0);
        null !== this.boundingBox && this.computeBoundingBox();
        null !== this.boundingSphere && this.computeBoundingSphere();
    },
    rotateX: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeRotationX(b);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    rotateY: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeRotationY(b);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    rotateZ: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeRotationZ(b);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    translate: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeTranslation(b, c, d);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    scale: function() {
        var a1;
        return function(b, c, d) {
            void 0 === a1 && (a1 = new THREE.Matrix4);
            a1.makeScale(b, c, d);
            this.applyMatrix(a1);
            return this;
        };
    }(),
    lookAt: function() {
        var a1;
        return function(b) {
            void 0 === a1 && (a1 = new THREE.Object3D);
            a1.lookAt(b);
            a1.updateMatrix();
            this.applyMatrix(a1.matrix);
        };
    }(),
    center: function() {
        this.computeBoundingBox();
        var a1 = this.boundingBox.center().negate();
        this.translate(a1.x, a1.y, a1.z);
        return a1;
    },
    setFromObject: function(a1) {
        var b = a1.geometry;
        if (a1 instanceof THREE.Points || a1 instanceof THREE.Line) {
            a1 = new THREE.Float32Attribute(3 * b.vertices.length, 3);
            var c = new THREE.Float32Attribute(3 * b.colors.length, 3);
            this.addAttribute("position", a1.copyVector3sArray(b.vertices));
            this.addAttribute("color", c.copyColorsArray(b.colors));
            b.lineDistances && b.lineDistances.length === b.vertices.length && (a1 = new THREE.Float32Attribute(b.lineDistances.length, 1), this.addAttribute("lineDistance", a1.copyArray(b.lineDistances)));
            null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone());
            null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone());
        } else a1 instanceof THREE.Mesh && b instanceof THREE.Geometry && this.fromGeometry(b);
        return this;
    },
    updateFromObject: function(a1) {
        var b = a1.geometry;
        if (a1 instanceof THREE.Mesh) {
            var c = b.__directGeometry;
            if (void 0 === c) return this.fromGeometry(b);
            c.verticesNeedUpdate = b.verticesNeedUpdate;
            c.normalsNeedUpdate = b.normalsNeedUpdate;
            c.colorsNeedUpdate = b.colorsNeedUpdate;
            c.uvsNeedUpdate = b.uvsNeedUpdate;
            c.groupsNeedUpdate = b.groupsNeedUpdate;
            b.verticesNeedUpdate = !1;
            b.normalsNeedUpdate = !1;
            b.colorsNeedUpdate = !1;
            b.uvsNeedUpdate = !1;
            b.groupsNeedUpdate = !1;
            b = c;
        }
        !0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1);
        !0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals), c.needsUpdate = !0), b.normalsNeedUpdate = !1);
        !0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors), c.needsUpdate = !0), b.colorsNeedUpdate = !1);
        b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1);
        b.groupsNeedUpdate && (b.computeGroups(a1.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1);
        return this;
    },
    fromGeometry: function(a1) {
        a1.__directGeometry = (new THREE.DirectGeometry).fromGeometry(a1);
        return this.fromDirectGeometry(a1.__directGeometry);
    },
    fromDirectGeometry: function(a1) {
        var b = new Float32Array(3 * a1.vertices.length);
        this.addAttribute("position", new THREE.BufferAttribute(b, 3).copyVector3sArray(a1.vertices));
        0 < a1.normals.length && (b = new Float32Array(3 * a1.normals.length), this.addAttribute("normal", new THREE.BufferAttribute(b, 3).copyVector3sArray(a1.normals)));
        0 < a1.colors.length && (b = new Float32Array(3 * a1.colors.length), this.addAttribute("color", new THREE.BufferAttribute(b, 3).copyColorsArray(a1.colors)));
        0 < a1.uvs.length && (b = new Float32Array(2 * a1.uvs.length), this.addAttribute("uv", new THREE.BufferAttribute(b, 2).copyVector2sArray(a1.uvs)));
        0 < a1.uvs2.length && (b = new Float32Array(2 * a1.uvs2.length), this.addAttribute("uv2", new THREE.BufferAttribute(b, 2).copyVector2sArray(a1.uvs2)));
        0 < a1.indices.length && (b = new (65535 < a1.vertices.length ? Uint32Array : Uint16Array)(3 * a1.indices.length), this.setIndex(new THREE.BufferAttribute(b, 1).copyIndicesArray(a1.indices)));
        this.groups = a1.groups;
        for(var c in a1.morphTargets){
            for(var b = [], d = a1.morphTargets[c], e = 0, g = d.length; e < g; e++){
                var f = d[e], h = new THREE.Float32Attribute(3 * f.length, 3);
                b.push(h.copyVector3sArray(f));
            }
            this.morphAttributes[c] = b;
        }
        0 < a1.skinIndices.length && (c = new THREE.Float32Attribute(4 * a1.skinIndices.length, 4), this.addAttribute("skinIndex", c.copyVector4sArray(a1.skinIndices)));
        0 < a1.skinWeights.length && (c = new THREE.Float32Attribute(4 * a1.skinWeights.length, 4), this.addAttribute("skinWeight", c.copyVector4sArray(a1.skinWeights)));
        null !== a1.boundingSphere && (this.boundingSphere = a1.boundingSphere.clone());
        null !== a1.boundingBox && (this.boundingBox = a1.boundingBox.clone());
        return this;
    },
    computeBoundingBox: function() {
        var a1 = new THREE.Vector3;
        return function() {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var b = this.attributes.position.array;
            if (b) {
                var c = this.boundingBox;
                c.makeEmpty();
                for(var d = 0, e = b.length; d < e; d += 3)a1.fromArray(b, d), c.expandByPoint(a1);
            }
            if (void 0 === b || 0 === b.length) this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0);
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        };
    }(),
    computeBoundingSphere: function() {
        var a1 = new THREE.Box3, b = new THREE.Vector3;
        return function() {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var c = this.attributes.position.array;
            if (c) {
                a1.makeEmpty();
                for(var d = this.boundingSphere.center, e = 0, g = c.length; e < g; e += 3)b.fromArray(c, e), a1.expandByPoint(b);
                a1.center(d);
                for(var f = 0, e = 0, g = c.length; e < g; e += 3)b.fromArray(c, e), f = Math.max(f, d.distanceToSquared(b));
                this.boundingSphere.radius = Math.sqrt(f);
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        };
    }(),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
        var a1 = this.index, b = this.attributes, c = this.groups;
        if (b.position) {
            var d = b.position.array;
            if (void 0 === b.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(d.length), 3));
            else for(var e = b.normal.array, g = 0, f = e.length; g < f; g++)e[g] = 0;
            var e = b.normal.array, h, k, l, n = new THREE.Vector3, p = new THREE.Vector3, m = new THREE.Vector3, q = new THREE.Vector3, t = new THREE.Vector3;
            if (a1) {
                a1 = a1.array;
                0 === c.length && this.addGroup(0, a1.length);
                for(var r = 0, u = c.length; r < u; ++r)for(g = c[r], f = g.start, h = g.count, g = f, f += h; g < f; g += 3)h = 3 * a1[g + 0], k = 3 * a1[g + 1], l = 3 * a1[g + 2], n.fromArray(d, h), p.fromArray(d, k), m.fromArray(d, l), q.subVectors(m, p), t.subVectors(n, p), q.cross(t), e[h] += q.x, e[h + 1] += q.y, e[h + 2] += q.z, e[k] += q.x, e[k + 1] += q.y, e[k + 2] += q.z, e[l] += q.x, e[l + 1] += q.y, e[l + 2] += q.z;
            } else for(g = 0, f = d.length; g < f; g += 9)n.fromArray(d, g), p.fromArray(d, g + 3), m.fromArray(d, g + 6), q.subVectors(m, p), t.subVectors(n, p), q.cross(t), e[g] = q.x, e[g + 1] = q.y, e[g + 2] = q.z, e[g + 3] = q.x, e[g + 4] = q.y, e[g + 5] = q.z, e[g + 6] = q.x, e[g + 7] = q.y, e[g + 8] = q.z;
            this.normalizeNormals();
            b.normal.needsUpdate = !0;
        }
    },
    computeTangents: function() {
        console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
    },
    computeOffsets: function(a1) {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    },
    merge: function(a1, b) {
        if (!1 === a1 instanceof THREE.BufferGeometry) console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a1);
        else {
            void 0 === b && (b = 0);
            var c = this.attributes, d;
            for(d in c)if (void 0 !== a1.attributes[d]) for(var e = c[d].array, g = a1.attributes[d], f = g.array, h = 0, g = g.itemSize * b; h < f.length; h++, g++)e[g] = f[h];
            return this;
        }
    },
    normalizeNormals: function() {
        for(var a1 = this.attributes.normal.array, b, c, d, e = 0, g = a1.length; e < g; e += 3)b = a1[e], c = a1[e + 1], d = a1[e + 2], b = 1 / Math.sqrt(b * b + c * c + d * d), a1[e] *= b, a1[e + 1] *= b, a1[e + 2] *= b;
    },
    toJSON: function() {
        var a1 = {
            metadata: {
                version: 4.4,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        a1.uuid = this.uuid;
        a1.type = this.type;
        "" !== this.name && (a1.name = this.name);
        if (void 0 !== this.parameters) {
            var b = this.parameters, c;
            for(c in b)void 0 !== b[c] && (a1[c] = b[c]);
            return a1;
        }
        a1.data = {
            attributes: {}
        };
        var d = this.index;
        null !== d && (b = Array.prototype.slice.call(d.array), a1.data.index = {
            type: d.array.constructor.name,
            array: b
        });
        d = this.attributes;
        for(c in d){
            var e = d[c], b = Array.prototype.slice.call(e.array);
            a1.data.attributes[c] = {
                itemSize: e.itemSize,
                type: e.array.constructor.name,
                array: b
            };
        }
        c = this.groups;
        0 < c.length && (a1.data.groups = JSON.parse(JSON.stringify(c)));
        c = this.boundingSphere;
        null !== c && (a1.data.boundingSphere = {
            center: c.center.toArray(),
            radius: c.radius
        });
        return a1;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        var b = a1.index;
        null !== b && this.setIndex(b.clone());
        var b = a1.attributes, c;
        for(c in b)this.addAttribute(c, b[c].clone());
        a1 = a1.groups;
        c = 0;
        for(b = a1.length; c < b; c++){
            var d = a1[c];
            this.addGroup(d.start, d.count);
        }
        return this;
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
};
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.BufferGeometry.MaxIndex = 65535;
THREE.InstancedBufferGeometry = function() {
    THREE.BufferGeometry.call(this);
    this.type = "InstancedBufferGeometry";
    this.maxInstancedCount = void 0;
};
THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry;
THREE.InstancedBufferGeometry.prototype.addGroup = function(a1, b, c) {
    this.groups.push({
        start: a1,
        count: b,
        instances: c
    });
};
THREE.InstancedBufferGeometry.prototype.copy = function(a1) {
    var b = a1.index;
    null !== b && this.setIndex(b.clone());
    var b = a1.attributes, c;
    for(c in b)this.addAttribute(c, b[c].clone());
    a1 = a1.groups;
    c = 0;
    for(b = a1.length; c < b; c++){
        var d = a1[c];
        this.addGroup(d.start, d.count, d.instances);
    }
    return this;
};
THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype);
THREE.Camera = function() {
    THREE.Object3D.call(this);
    this.type = "Camera";
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = new THREE.Matrix4;
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.getWorldDirection = function() {
    var a1 = new THREE.Quaternion;
    return function(b) {
        b = b || new THREE.Vector3;
        this.getWorldQuaternion(a1);
        return b.set(0, 0, -1).applyQuaternion(a1);
    };
}();
THREE.Camera.prototype.lookAt = function() {
    var a1 = new THREE.Matrix4;
    return function(b) {
        a1.lookAt(this.position, b, this.up);
        this.quaternion.setFromRotationMatrix(a1);
    };
}();
THREE.Camera.prototype.clone = function() {
    return (new this.constructor).copy(this);
};
THREE.Camera.prototype.copy = function(a1) {
    THREE.Object3D.prototype.copy.call(this, a1);
    this.matrixWorldInverse.copy(a1.matrixWorldInverse);
    this.projectionMatrix.copy(a1.projectionMatrix);
    return this;
};
THREE.CubeCamera = function(a1, b, c) {
    THREE.Object3D.call(this);
    this.type = "CubeCamera";
    var d = new THREE.PerspectiveCamera(90, 1, a1, b);
    d.up.set(0, -1, 0);
    d.lookAt(new THREE.Vector3(1, 0, 0));
    this.add(d);
    var e = new THREE.PerspectiveCamera(90, 1, a1, b);
    e.up.set(0, -1, 0);
    e.lookAt(new THREE.Vector3(-1, 0, 0));
    this.add(e);
    var g = new THREE.PerspectiveCamera(90, 1, a1, b);
    g.up.set(0, 0, 1);
    g.lookAt(new THREE.Vector3(0, 1, 0));
    this.add(g);
    var f = new THREE.PerspectiveCamera(90, 1, a1, b);
    f.up.set(0, 0, -1);
    f.lookAt(new THREE.Vector3(0, -1, 0));
    this.add(f);
    var h = new THREE.PerspectiveCamera(90, 1, a1, b);
    h.up.set(0, -1, 0);
    h.lookAt(new THREE.Vector3(0, 0, 1));
    this.add(h);
    var k = new THREE.PerspectiveCamera(90, 1, a1, b);
    k.up.set(0, -1, 0);
    k.lookAt(new THREE.Vector3(0, 0, -1));
    this.add(k);
    this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    });
    this.updateCubeMap = function(a1, b) {
        null === this.parent && this.updateMatrixWorld();
        var c = this.renderTarget, m = c.generateMipmaps;
        c.generateMipmaps = !1;
        c.activeCubeFace = 0;
        a1.render(b, d, c);
        c.activeCubeFace = 1;
        a1.render(b, e, c);
        c.activeCubeFace = 2;
        a1.render(b, g, c);
        c.activeCubeFace = 3;
        a1.render(b, f, c);
        c.activeCubeFace = 4;
        a1.render(b, h, c);
        c.generateMipmaps = m;
        c.activeCubeFace = 5;
        a1.render(b, k, c);
        a1.setRenderTarget(null);
    };
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CubeCamera.prototype.constructor = THREE.CubeCamera;
THREE.OrthographicCamera = function(a1, b, c, d, e, g) {
    THREE.Camera.call(this);
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.left = a1;
    this.right = b;
    this.top = c;
    this.bottom = d;
    this.near = void 0 !== e ? e : .1;
    this.far = void 0 !== g ? g : 2E3;
    this.updateProjectionMatrix();
};
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    var a1 = (this.right - this.left) / (2 * this.zoom), b = (this.top - this.bottom) / (2 * this.zoom), c = (this.right + this.left) / 2, d = (this.top + this.bottom) / 2;
    this.projectionMatrix.makeOrthographic(c - a1, c + a1, d + b, d - b, this.near, this.far);
};
THREE.OrthographicCamera.prototype.copy = function(a1) {
    THREE.Camera.prototype.copy.call(this, a1);
    this.left = a1.left;
    this.right = a1.right;
    this.top = a1.top;
    this.bottom = a1.bottom;
    this.near = a1.near;
    this.far = a1.far;
    this.zoom = a1.zoom;
    return this;
};
THREE.OrthographicCamera.prototype.toJSON = function(a1) {
    a1 = THREE.Object3D.prototype.toJSON.call(this, a1);
    a1.object.zoom = this.zoom;
    a1.object.left = this.left;
    a1.object.right = this.right;
    a1.object.top = this.top;
    a1.object.bottom = this.bottom;
    a1.object.near = this.near;
    a1.object.far = this.far;
    return a1;
};
THREE.PerspectiveCamera = function(a1, b, c, d) {
    THREE.Camera.call(this);
    this.type = "PerspectiveCamera";
    this.zoom = 1;
    this.fov = void 0 !== a1 ? a1 : 50;
    this.aspect = void 0 !== b ? b : 1;
    this.near = void 0 !== c ? c : .1;
    this.far = void 0 !== d ? d : 2E3;
    this.updateProjectionMatrix();
};
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens = function(a1, b) {
    void 0 === b && (b = 24);
    this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a1)));
    this.updateProjectionMatrix();
};
THREE.PerspectiveCamera.prototype.setViewOffset = function(a1, b, c, d, e, g) {
    this.fullWidth = a1;
    this.fullHeight = b;
    this.x = c;
    this.y = d;
    this.width = e;
    this.height = g;
    this.updateProjectionMatrix();
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    var a1 = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
    if (this.fullWidth) {
        var b = this.fullWidth / this.fullHeight, a1 = Math.tan(THREE.Math.degToRad(.5 * a1)) * this.near, c = -a1, d = b * c, b = Math.abs(b * a1 - d), c = Math.abs(a1 - c);
        this.projectionMatrix.makeFrustum(d + this.x * b / this.fullWidth, d + (this.x + this.width) * b / this.fullWidth, a1 - (this.y + this.height) * c / this.fullHeight, a1 - this.y * c / this.fullHeight, this.near, this.far);
    } else this.projectionMatrix.makePerspective(a1, this.aspect, this.near, this.far);
};
THREE.PerspectiveCamera.prototype.copy = function(a1) {
    THREE.Camera.prototype.copy.call(this, a1);
    this.fov = a1.fov;
    this.aspect = a1.aspect;
    this.near = a1.near;
    this.far = a1.far;
    this.zoom = a1.zoom;
    return this;
};
THREE.PerspectiveCamera.prototype.toJSON = function(a1) {
    a1 = THREE.Object3D.prototype.toJSON.call(this, a1);
    a1.object.zoom = this.zoom;
    a1.object.fov = this.fov;
    a1.object.aspect = this.aspect;
    a1.object.near = this.near;
    a1.object.far = this.far;
    return a1;
};
THREE.Light = function(a1) {
    THREE.Object3D.call(this);
    this.type = "Light";
    this.color = new THREE.Color(a1);
};
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.copy = function(a1) {
    THREE.Object3D.prototype.copy.call(this, a1);
    this.color.copy(a1.color);
    return this;
};
THREE.AmbientLight = function(a1) {
    THREE.Light.call(this, a1);
    this.type = "AmbientLight";
};
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.AmbientLight.prototype.toJSON = function(a1) {
    a1 = THREE.Object3D.prototype.toJSON.call(this, a1);
    a1.object.color = this.color.getHex();
    return a1;
};
THREE.DirectionalLight = function(a1, b) {
    THREE.Light.call(this, a1);
    this.type = "DirectionalLight";
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.target = new THREE.Object3D;
    this.intensity = void 0 !== b ? b : 1;
    this.onlyShadow = this.castShadow = !1;
    this.shadowCameraNear = 50;
    this.shadowCameraFar = 5E3;
    this.shadowCameraLeft = -500;
    this.shadowCameraTop = this.shadowCameraRight = 500;
    this.shadowCameraBottom = -500;
    this.shadowCameraVisible = !1;
    this.shadowBias = 0;
    this.shadowDarkness = .5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null;
};
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.DirectionalLight.prototype.copy = function(a1) {
    THREE.Light.prototype.copy.call(this, a1);
    this.intensity = a1.intensity;
    this.target = a1.target.clone();
    this.castShadow = a1.castShadow;
    this.onlyShadow = a1.onlyShadow;
    this.shadowCameraNear = a1.shadowCameraNear;
    this.shadowCameraFar = a1.shadowCameraFar;
    this.shadowCameraLeft = a1.shadowCameraLeft;
    this.shadowCameraRight = a1.shadowCameraRight;
    this.shadowCameraTop = a1.shadowCameraTop;
    this.shadowCameraBottom = a1.shadowCameraBottom;
    this.shadowCameraVisible = a1.shadowCameraVisible;
    this.shadowBias = a1.shadowBias;
    this.shadowDarkness = a1.shadowDarkness;
    this.shadowMapWidth = a1.shadowMapWidth;
    this.shadowMapHeight = a1.shadowMapHeight;
    return this;
};
THREE.DirectionalLight.prototype.toJSON = function(a1) {
    a1 = THREE.Object3D.prototype.toJSON.call(this, a1);
    a1.object.color = this.color.getHex();
    a1.object.intensity = this.intensity;
    return a1;
};
THREE.HemisphereLight = function(a1, b, c) {
    THREE.Light.call(this, a1);
    this.type = "HemisphereLight";
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.groundColor = new THREE.Color(b);
    this.intensity = void 0 !== c ? c : 1;
};
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight.prototype.constructor = THREE.HemisphereLight;
THREE.HemisphereLight.prototype.copy = function(a1) {
    THREE.Light.prototype.copy.call(this, a1);
    this.groundColor.copy(a1.groundColor);
    this.intensity = a1.intensity;
    return this;
};
THREE.HemisphereLight.prototype.toJSON = function(a1) {
    a1 = THREE.Object3D.prototype.toJSON.call(this, a1);
    a1.object.color = this.color.getHex();
    a1.object.groundColor = this.groundColor.getHex();
    a1.object.intensity = this.intensity;
    return a1;
};
THREE.PointLight = function(a1, b, c, d) {
    THREE.Light.call(this, a1);
    this.type = "PointLight";
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0;
    this.decay = void 0 !== d ? d : 1;
};
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.PointLight.prototype.copy = function(a1) {
    THREE.Light.prototype.copy.call(this, a1);
    this.intensity = a1.intensity;
    this.distance = a1.distance;
    this.decay = a1.decay;
    return this;
};
THREE.PointLight.prototype.toJSON = function(a1) {
    a1 = THREE.Object3D.prototype.toJSON.call(this, a1);
    a1.object.color = this.color.getHex();
    a1.object.intensity = this.intensity;
    a1.object.distance = this.distance;
    a1.object.decay = this.decay;
    return a1;
};
THREE.SpotLight = function(a1, b, c, d, e, g) {
    THREE.Light.call(this, a1);
    this.type = "SpotLight";
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.target = new THREE.Object3D;
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0;
    this.angle = void 0 !== d ? d : Math.PI / 3;
    this.exponent = void 0 !== e ? e : 10;
    this.decay = void 0 !== g ? g : 1;
    this.onlyShadow = this.castShadow = !1;
    this.shadowCameraNear = 50;
    this.shadowCameraFar = 5E3;
    this.shadowCameraFov = 50;
    this.shadowCameraVisible = !1;
    this.shadowBias = 0;
    this.shadowDarkness = .5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null;
};
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.constructor = THREE.SpotLight;
THREE.SpotLight.prototype.copy = function(a1) {
    THREE.Light.prototype.copy.call(this, a1);
    this.intensity = a1.intensity;
    this.distance = a1.distance;
    this.angle = a1.angle;
    this.exponent = a1.exponent;
    this.decay = a1.decay;
    this.target = a1.target.clone();
    this.castShadow = a1.castShadow;
    this.onlyShadow = a1.onlyShadow;
    this.shadowCameraNear = a1.shadowCameraNear;
    this.shadowCameraFar = a1.shadowCameraFar;
    this.shadowCameraFov = a1.shadowCameraFov;
    this.shadowCameraVisible = a1.shadowCameraVisible;
    this.shadowBias = a1.shadowBias;
    this.shadowDarkness = a1.shadowDarkness;
    this.shadowMapWidth = a1.shadowMapWidth;
    this.shadowMapHeight = a1.shadowMapHeight;
    return this;
};
THREE.SpotLight.prototype.toJSON = function(a1) {
    a1 = THREE.Object3D.prototype.toJSON.call(this, a1);
    a1.object.color = this.color.getHex();
    a1.object.intensity = this.intensity;
    a1.object.distance = this.distance;
    a1.object.angle = this.angle;
    a1.object.exponent = this.exponent;
    a1.object.decay = this.decay;
    return a1;
};
THREE.Cache = {
    enabled: !1,
    files: {},
    add: function(a1, b) {
        !1 !== this.enabled && (this.files[a1] = b);
    },
    get: function(a1) {
        if (!1 !== this.enabled) return this.files[a1];
    },
    remove: function(a1) {
        delete this.files[a1];
    },
    clear: function() {
        this.files = {};
    }
};
THREE.Loader = function() {
    this.onLoadStart = function() {};
    this.onLoadProgress = function() {};
    this.onLoadComplete = function() {};
};
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: void 0,
    extractUrlBase: function(a1) {
        a1 = a1.split("/");
        if (1 === a1.length) return "./";
        a1.pop();
        return a1.join("/") + "/";
    },
    initMaterials: function(a1, b, c) {
        for(var d = [], e = 0; e < a1.length; ++e)d[e] = this.createMaterial(a1[e], b, c);
        return d;
    },
    createMaterial: function() {
        var a1;
        return function(b, c, d) {
            function e(a1) {
                a1 = Math.log(a1) / Math.LN2;
                return Math.pow(2, Math.round(a1));
            }
            function g(b, g, f, h, k, l, u) {
                var w = c + f, v, B = THREE.Loader.Handlers.get(w);
                null !== B ? v = B.load(w) : (v = new THREE.Texture, B = a1, B.setCrossOrigin(d), B.load(w, function(a1) {
                    if (!1 === THREE.Math.isPowerOfTwo(a1.width) || !1 === THREE.Math.isPowerOfTwo(a1.height)) {
                        var b = e(a1.width), c = e(a1.height), d = document.createElement("canvas");
                        d.width = b;
                        d.height = c;
                        d.getContext("2d").drawImage(a1, 0, 0, b, c);
                        v.image = d;
                    } else v.image = a1;
                    v.needsUpdate = !0;
                }));
                v.sourceFile = f;
                h && (v.repeat.set(h[0], h[1]), 1 !== h[0] && (v.wrapS = THREE.RepeatWrapping), 1 !== h[1] && (v.wrapT = THREE.RepeatWrapping));
                k && v.offset.set(k[0], k[1]);
                l && (f = {
                    repeat: THREE.RepeatWrapping,
                    mirror: THREE.MirroredRepeatWrapping
                }, void 0 !== f[l[0]] && (v.wrapS = f[l[0]]), void 0 !== f[l[1]] && (v.wrapT = f[l[1]]));
                u && (v.anisotropy = u);
                b[g] = v;
            }
            function f(a1) {
                return (255 * a1[0] << 16) + (255 * a1[1] << 8) + 255 * a1[2];
            }
            void 0 === d && void 0 !== this.crossOrigin && (d = this.crossOrigin);
            void 0 === a1 && (a1 = new THREE.ImageLoader);
            var h = "MeshLambertMaterial", k = {};
            if (b.shading) {
                var l = b.shading.toLowerCase();
                "phong" === l ? h = "MeshPhongMaterial" : "basic" === l && (h = "MeshBasicMaterial");
            }
            void 0 !== b.blending && void 0 !== THREE[b.blending] && (k.blending = THREE[b.blending]);
            void 0 !== b.transparent && (k.transparent = b.transparent);
            void 0 !== b.opacity && 1 > b.opacity && (k.transparent = !0);
            void 0 !== b.depthTest && (k.depthTest = b.depthTest);
            void 0 !== b.depthWrite && (k.depthWrite = b.depthWrite);
            void 0 !== b.visible && (k.visible = b.visible);
            void 0 !== b.flipSided && (k.side = THREE.BackSide);
            void 0 !== b.doubleSided && (k.side = THREE.DoubleSide);
            void 0 !== b.wireframe && (k.wireframe = b.wireframe);
            void 0 !== b.vertexColors && ("face" === b.vertexColors ? k.vertexColors = THREE.FaceColors : b.vertexColors && (k.vertexColors = THREE.VertexColors));
            b.colorDiffuse ? k.color = f(b.colorDiffuse) : b.DbgColor && (k.color = b.DbgColor);
            b.colorEmissive && (k.emissive = f(b.colorEmissive));
            "MeshPhongMaterial" === h && (b.colorSpecular && (k.specular = f(b.colorSpecular)), b.specularCoef && (k.shininess = b.specularCoef));
            void 0 !== b.transparency && (console.warn("THREE.Loader: transparency has been renamed to opacity"), b.opacity = b.transparency);
            void 0 !== b.opacity && (k.opacity = b.opacity);
            c && (b.mapDiffuse && g(k, "map", b.mapDiffuse, b.mapDiffuseRepeat, b.mapDiffuseOffset, b.mapDiffuseWrap, b.mapDiffuseAnisotropy), b.mapLight && g(k, "lightMap", b.mapLight, b.mapLightRepeat, b.mapLightOffset, b.mapLightWrap, b.mapLightAnisotropy), b.mapAO && g(k, "aoMap", b.mapAO, b.mapAORepeat, b.mapAOOffset, b.mapAOWrap, b.mapAOAnisotropy), b.mapBump && g(k, "bumpMap", b.mapBump, b.mapBumpRepeat, b.mapBumpOffset, b.mapBumpWrap, b.mapBumpAnisotropy), b.mapNormal && g(k, "normalMap", b.mapNormal, b.mapNormalRepeat, b.mapNormalOffset, b.mapNormalWrap, b.mapNormalAnisotropy), b.mapSpecular && g(k, "specularMap", b.mapSpecular, b.mapSpecularRepeat, b.mapSpecularOffset, b.mapSpecularWrap, b.mapSpecularAnisotropy), b.mapAlpha && g(k, "alphaMap", b.mapAlpha, b.mapAlphaRepeat, b.mapAlphaOffset, b.mapAlphaWrap, b.mapAlphaAnisotropy));
            b.mapBumpScale && (k.bumpScale = b.mapBumpScale);
            b.mapNormalFactor && (k.normalScale = new THREE.Vector2(b.mapNormalFactor, b.mapNormalFactor));
            h = new THREE[h](k);
            void 0 !== b.DbgName && (h.name = b.DbgName);
            return h;
        };
    }()
};
THREE.Loader.Handlers = {
    handlers: [],
    add: function(a1, b) {
        this.handlers.push(a1, b);
    },
    get: function(a1) {
        for(var b = 0, c = this.handlers.length; b < c; b += 2){
            var d = this.handlers[b + 1];
            if (this.handlers[b].test(a1)) return d;
        }
        return null;
    }
};
THREE.XHRLoader = function(a1) {
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
};
THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader,
    load: function(a1, b, c, d) {
        var e = this, g = THREE.Cache.get(a1);
        if (void 0 !== g) return b && setTimeout(function() {
            b(g);
        }, 0), g;
        var f = new XMLHttpRequest;
        f.open("GET", a1, !0);
        f.addEventListener("load", function(c) {
            THREE.Cache.add(a1, this.response);
            b && b(this.response);
            e.manager.itemEnd(a1);
        }, !1);
        void 0 !== c && f.addEventListener("progress", function(a1) {
            c(a1);
        }, !1);
        f.addEventListener("error", function(b) {
            d && d(b);
            e.manager.itemError(a1);
        }, !1);
        void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin);
        void 0 !== this.responseType && (f.responseType = this.responseType);
        void 0 !== this.withCredentials && (f.withCredentials = this.withCredentials);
        f.send(null);
        e.manager.itemStart(a1);
        return f;
    },
    setResponseType: function(a1) {
        this.responseType = a1;
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    },
    setWithCredentials: function(a1) {
        this.withCredentials = a1;
    }
};
THREE.ImageLoader = function(a1) {
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
};
THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function(a1, b, c, d) {
        var e = this, g = THREE.Cache.get(a1);
        if (void 0 !== g) return b && setTimeout(function() {
            b(g);
        }, 0), g;
        var f = document.createElement("img");
        f.addEventListener("load", function(c) {
            THREE.Cache.add(a1, this);
            b && b(this);
            e.manager.itemEnd(a1);
        }, !1);
        void 0 !== c && f.addEventListener("progress", function(a1) {
            c(a1);
        }, !1);
        f.addEventListener("error", function(b) {
            d && d(b);
            e.manager.itemError(a1);
        }, !1);
        void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin);
        e.manager.itemStart(a1);
        f.src = a1;
        return f;
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    }
};
THREE.JSONLoader = function(a1) {
    "boolean" === typeof a1 && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), a1 = void 0);
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
    this.withCredentials = !1;
};
THREE.JSONLoader.prototype = {
    constructor: THREE.JSONLoader,
    get statusDomElement () {
        void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div"));
        console.warn("THREE.JSONLoader: .statusDomElement has been removed.");
        return this._statusDomElement;
    },
    load: function(a1, b, c, d) {
        var e = this, g = this.texturePath && "string" === typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(a1);
        c = new THREE.XHRLoader(this.manager);
        c.setCrossOrigin(this.crossOrigin);
        c.setWithCredentials(this.withCredentials);
        c.load(a1, function(c) {
            c = JSON.parse(c);
            var d = c.metadata;
            if (void 0 !== d) {
                if ("object" === d.type) {
                    console.error("THREE.JSONLoader: " + a1 + " should be loaded with THREE.ObjectLoader instead.");
                    return;
                }
                if ("scene" === d.type) {
                    console.error("THREE.JSONLoader: " + a1 + " should be loaded with THREE.SceneLoader instead.");
                    return;
                }
            }
            c = e.parse(c, g);
            b(c.geometry, c.materials);
        });
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    },
    setTexturePath: function(a1) {
        this.texturePath = a1;
    },
    parse: function(a1, b) {
        var c = new THREE.Geometry, d = void 0 !== a1.scale ? 1 / a1.scale : 1;
        (function(b) {
            var d, f, h, k, l, n, p, m, q, t, r, u, w, v = a1.faces;
            n = a1.vertices;
            var B = a1.normals, x = a1.colors, H = 0;
            if (void 0 !== a1.uvs) {
                for(d = 0; d < a1.uvs.length; d++)a1.uvs[d].length && H++;
                for(d = 0; d < H; d++)c.faceVertexUvs[d] = [];
            }
            k = 0;
            for(l = n.length; k < l;)d = new THREE.Vector3, d.x = n[k++] * b, d.y = n[k++] * b, d.z = n[k++] * b, c.vertices.push(d);
            k = 0;
            for(l = v.length; k < l;)if (b = v[k++], q = b & 1, h = b & 2, d = b & 8, p = b & 16, t = b & 32, n = b & 64, b &= 128, q) {
                q = new THREE.Face3;
                q.a = v[k];
                q.b = v[k + 1];
                q.c = v[k + 3];
                r = new THREE.Face3;
                r.a = v[k + 1];
                r.b = v[k + 2];
                r.c = v[k + 3];
                k += 4;
                h && (h = v[k++], q.materialIndex = h, r.materialIndex = h);
                h = c.faces.length;
                if (d) for(d = 0; d < H; d++)for(u = a1.uvs[d], c.faceVertexUvs[d][h] = [], c.faceVertexUvs[d][h + 1] = [], f = 0; 4 > f; f++)m = v[k++], w = u[2 * m], m = u[2 * m + 1], w = new THREE.Vector2(w, m), 2 !== f && c.faceVertexUvs[d][h].push(w), 0 !== f && c.faceVertexUvs[d][h + 1].push(w);
                p && (p = 3 * v[k++], q.normal.set(B[p++], B[p++], B[p]), r.normal.copy(q.normal));
                if (t) for(d = 0; 4 > d; d++)p = 3 * v[k++], t = new THREE.Vector3(B[p++], B[p++], B[p]), 2 !== d && q.vertexNormals.push(t), 0 !== d && r.vertexNormals.push(t);
                n && (n = v[k++], n = x[n], q.color.setHex(n), r.color.setHex(n));
                if (b) for(d = 0; 4 > d; d++)n = v[k++], n = x[n], 2 !== d && q.vertexColors.push(new THREE.Color(n)), 0 !== d && r.vertexColors.push(new THREE.Color(n));
                c.faces.push(q);
                c.faces.push(r);
            } else {
                q = new THREE.Face3;
                q.a = v[k++];
                q.b = v[k++];
                q.c = v[k++];
                h && (h = v[k++], q.materialIndex = h);
                h = c.faces.length;
                if (d) for(d = 0; d < H; d++)for(u = a1.uvs[d], c.faceVertexUvs[d][h] = [], f = 0; 3 > f; f++)m = v[k++], w = u[2 * m], m = u[2 * m + 1], w = new THREE.Vector2(w, m), c.faceVertexUvs[d][h].push(w);
                p && (p = 3 * v[k++], q.normal.set(B[p++], B[p++], B[p]));
                if (t) for(d = 0; 3 > d; d++)p = 3 * v[k++], t = new THREE.Vector3(B[p++], B[p++], B[p]), q.vertexNormals.push(t);
                n && (n = v[k++], q.color.setHex(x[n]));
                if (b) for(d = 0; 3 > d; d++)n = v[k++], q.vertexColors.push(new THREE.Color(x[n]));
                c.faces.push(q);
            }
        })(d);
        (function() {
            var b = void 0 !== a1.influencesPerVertex ? a1.influencesPerVertex : 2;
            if (a1.skinWeights) for(var d = 0, f = a1.skinWeights.length; d < f; d += b)c.skinWeights.push(new THREE.Vector4(a1.skinWeights[d], 1 < b ? a1.skinWeights[d + 1] : 0, 2 < b ? a1.skinWeights[d + 2] : 0, 3 < b ? a1.skinWeights[d + 3] : 0));
            if (a1.skinIndices) for(d = 0, f = a1.skinIndices.length; d < f; d += b)c.skinIndices.push(new THREE.Vector4(a1.skinIndices[d], 1 < b ? a1.skinIndices[d + 1] : 0, 2 < b ? a1.skinIndices[d + 2] : 0, 3 < b ? a1.skinIndices[d + 3] : 0));
            c.bones = a1.bones;
            c.bones && 0 < c.bones.length && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length + "), and skinWeights (" + c.skinWeights.length + ") should match.");
            c.animation = a1.animation;
            c.animations = a1.animations;
        })();
        (function(b) {
            if (void 0 !== a1.morphTargets) {
                var d, f, h, k, l, n;
                d = 0;
                for(f = a1.morphTargets.length; d < f; d++)for(c.morphTargets[d] = {}, c.morphTargets[d].name = a1.morphTargets[d].name, c.morphTargets[d].vertices = [], l = c.morphTargets[d].vertices, n = a1.morphTargets[d].vertices, h = 0, k = n.length; h < k; h += 3){
                    var p = new THREE.Vector3;
                    p.x = n[h] * b;
                    p.y = n[h + 1] * b;
                    p.z = n[h + 2] * b;
                    l.push(p);
                }
            }
            if (void 0 !== a1.morphColors) for(d = 0, f = a1.morphColors.length; d < f; d++)for(c.morphColors[d] = {}, c.morphColors[d].name = a1.morphColors[d].name, c.morphColors[d].colors = [], k = c.morphColors[d].colors, l = a1.morphColors[d].colors, b = 0, h = l.length; b < h; b += 3)n = new THREE.Color(16755200), n.setRGB(l[b], l[b + 1], l[b + 2]), k.push(n);
        })(d);
        c.computeFaceNormals();
        c.computeBoundingSphere();
        if (void 0 === a1.materials || 0 === a1.materials.length) return {
            geometry: c
        };
        d = THREE.Loader.prototype.initMaterials(a1.materials, b, this.crossOrigin);
        return {
            geometry: c,
            materials: d
        };
    }
};
THREE.LoadingManager = function(a1, b, c) {
    var d = this, e = !1, g = 0, f = 0;
    this.onStart = void 0;
    this.onLoad = a1;
    this.onProgress = b;
    this.onError = c;
    this.itemStart = function(a1) {
        f++;
        if (!1 === e && void 0 !== d.onStart) d.onStart(a1, g, f);
        e = !0;
    };
    this.itemEnd = function(a1) {
        g++;
        if (void 0 !== d.onProgress) d.onProgress(a1, g, f);
        if (g === f && (e = !1, void 0 !== d.onLoad)) d.onLoad();
    };
    this.itemError = function(a1) {
        if (void 0 !== d.onError) d.onError(a1);
    };
};
THREE.DefaultLoadingManager = new THREE.LoadingManager;
THREE.BufferGeometryLoader = function(a1) {
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
};
THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader,
    load: function(a1, b, c, d) {
        var e = this, g = new THREE.XHRLoader(e.manager);
        g.setCrossOrigin(this.crossOrigin);
        g.load(a1, function(a1) {
            b(e.parse(JSON.parse(a1)));
        }, c, d);
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    },
    parse: function(a1) {
        var b = new THREE.BufferGeometry, c = a1.data.index;
        void 0 !== c && (c = new self[c.type](c.array), b.setIndex(new THREE.BufferAttribute(c, 1)));
        var d = a1.data.attributes, e;
        for(e in d){
            var g = d[e], c = new self[g.type](g.array);
            b.addAttribute(e, new THREE.BufferAttribute(c, g.itemSize));
        }
        e = a1.data.groups || a1.data.drawcalls || a1.data.offsets;
        if (void 0 !== e) for(c = 0, d = e.length; c !== d; ++c)g = e[c], b.addGroup(g.start, g.count);
        a1 = a1.data.boundingSphere;
        void 0 !== a1 && (e = new THREE.Vector3, void 0 !== a1.center && e.fromArray(a1.center), b.boundingSphere = new THREE.Sphere(e, a1.radius));
        return b;
    }
};
THREE.MaterialLoader = function(a1) {
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
    this.textures = {};
};
THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader,
    load: function(a1, b, c, d) {
        var e = this, g = new THREE.XHRLoader(e.manager);
        g.setCrossOrigin(this.crossOrigin);
        g.load(a1, function(a1) {
            b(e.parse(JSON.parse(a1)));
        }, c, d);
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    },
    setTextures: function(a1) {
        this.textures = a1;
    },
    getTexture: function(a1) {
        var b = this.textures;
        void 0 === b[a1] && console.warn("THREE.MaterialLoader: Undefined texture", a1);
        return b[a1];
    },
    parse: function(a1) {
        var b = new THREE[a1.type];
        b.uuid = a1.uuid;
        void 0 !== a1.name && (b.name = a1.name);
        void 0 !== a1.color && b.color.setHex(a1.color);
        void 0 !== a1.emissive && b.emissive.setHex(a1.emissive);
        void 0 !== a1.specular && b.specular.setHex(a1.specular);
        void 0 !== a1.shininess && (b.shininess = a1.shininess);
        void 0 !== a1.uniforms && (b.uniforms = a1.uniforms);
        void 0 !== a1.vertexShader && (b.vertexShader = a1.vertexShader);
        void 0 !== a1.fragmentShader && (b.fragmentShader = a1.fragmentShader);
        void 0 !== a1.vertexColors && (b.vertexColors = a1.vertexColors);
        void 0 !== a1.shading && (b.shading = a1.shading);
        void 0 !== a1.blending && (b.blending = a1.blending);
        void 0 !== a1.side && (b.side = a1.side);
        void 0 !== a1.opacity && (b.opacity = a1.opacity);
        void 0 !== a1.transparent && (b.transparent = a1.transparent);
        void 0 !== a1.alphaTest && (b.alphaTest = a1.alphaTest);
        void 0 !== a1.depthTest && (b.depthTest = a1.depthTest);
        void 0 !== a1.depthWrite && (b.depthWrite = a1.depthWrite);
        void 0 !== a1.wireframe && (b.wireframe = a1.wireframe);
        void 0 !== a1.wireframeLinewidth && (b.wireframeLinewidth = a1.wireframeLinewidth);
        void 0 !== a1.size && (b.size = a1.size);
        void 0 !== a1.sizeAttenuation && (b.sizeAttenuation = a1.sizeAttenuation);
        void 0 !== a1.map && (b.map = this.getTexture(a1.map));
        void 0 !== a1.alphaMap && (b.alphaMap = this.getTexture(a1.alphaMap), b.transparent = !0);
        void 0 !== a1.bumpMap && (b.bumpMap = this.getTexture(a1.bumpMap));
        void 0 !== a1.bumpScale && (b.bumpScale = a1.bumpScale);
        void 0 !== a1.normalMap && (b.normalMap = this.getTexture(a1.normalMap));
        a1.normalScale && (b.normalScale = new THREE.Vector2(a1.normalScale, a1.normalScale));
        void 0 !== a1.displacementMap && (b.displacementMap = this.getTexture(a1.displacementMap));
        void 0 !== a1.displacementScale && (b.displacementScale = a1.displacementScale);
        void 0 !== a1.displacementBias && (b.displacementBias = a1.displacementBias);
        void 0 !== a1.specularMap && (b.specularMap = this.getTexture(a1.specularMap));
        void 0 !== a1.envMap && (b.envMap = this.getTexture(a1.envMap), b.combine = THREE.MultiplyOperation);
        a1.reflectivity && (b.reflectivity = a1.reflectivity);
        void 0 !== a1.lightMap && (b.lightMap = this.getTexture(a1.lightMap));
        void 0 !== a1.lightMapIntensity && (b.lightMapIntensity = a1.lightMapIntensity);
        void 0 !== a1.aoMap && (b.aoMap = this.getTexture(a1.aoMap));
        void 0 !== a1.aoMapIntensity && (b.aoMapIntensity = a1.aoMapIntensity);
        if (void 0 !== a1.materials) for(var c = 0, d = a1.materials.length; c < d; c++)b.materials.push(this.parse(a1.materials[c]));
        return b;
    }
};
THREE.ObjectLoader = function(a1) {
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
    this.texturePath = "";
};
THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader,
    load: function(a1, b, c, d) {
        "" === this.texturePath && (this.texturePath = a1.substring(0, a1.lastIndexOf("/") + 1));
        var e = this, g = new THREE.XHRLoader(e.manager);
        g.setCrossOrigin(this.crossOrigin);
        g.load(a1, function(a1) {
            e.parse(JSON.parse(a1), b);
        }, c, d);
    },
    setTexturePath: function(a1) {
        this.texturePath = a1;
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    },
    parse: function(a1, b) {
        var c = this.parseGeometries(a1.geometries), d = this.parseImages(a1.images, function() {
            void 0 !== b && b(e);
        }), d = this.parseTextures(a1.textures, d), d = this.parseMaterials(a1.materials, d), e = this.parseObject(a1.object, c, d);
        void 0 !== a1.images && 0 !== a1.images.length || void 0 === b || b(e);
        return e;
    },
    parseGeometries: function(a1) {
        var b = {};
        if (void 0 !== a1) for(var c = new THREE.JSONLoader, d = new THREE.BufferGeometryLoader, e = 0, g = a1.length; e < g; e++){
            var f, h = a1[e];
            switch(h.type){
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                    f = new THREE[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
                    break;
                case "BoxGeometry":
                case "CubeGeometry":
                    f = new THREE.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                    break;
                case "CircleBufferGeometry":
                    f = new THREE.CircleBufferGeometry(h.radius, h.segments, h.thetaStart, h.thetaLength);
                    break;
                case "CircleGeometry":
                    f = new THREE.CircleGeometry(h.radius, h.segments, h.thetaStart, h.thetaLength);
                    break;
                case "CylinderGeometry":
                    f = new THREE.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded, h.thetaStart, h.thetaLength);
                    break;
                case "SphereGeometry":
                    f = new THREE.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                    break;
                case "SphereBufferGeometry":
                    f = new THREE.SphereBufferGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                    break;
                case "DodecahedronGeometry":
                    f = new THREE.DodecahedronGeometry(h.radius, h.detail);
                    break;
                case "IcosahedronGeometry":
                    f = new THREE.IcosahedronGeometry(h.radius, h.detail);
                    break;
                case "OctahedronGeometry":
                    f = new THREE.OctahedronGeometry(h.radius, h.detail);
                    break;
                case "TetrahedronGeometry":
                    f = new THREE.TetrahedronGeometry(h.radius, h.detail);
                    break;
                case "RingGeometry":
                    f = new THREE.RingGeometry(h.innerRadius, h.outerRadius, h.thetaSegments, h.phiSegments, h.thetaStart, h.thetaLength);
                    break;
                case "TorusGeometry":
                    f = new THREE.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                    break;
                case "TorusKnotGeometry":
                    f = new THREE.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
                    break;
                case "TextGeometry":
                    f = new THREE.TextGeometry(h.text, h.data);
                    break;
                case "BufferGeometry":
                    f = d.parse(h);
                    break;
                case "Geometry":
                    f = c.parse(h.data, this.texturePath).geometry;
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
                    continue;
            }
            f.uuid = h.uuid;
            void 0 !== h.name && (f.name = h.name);
            b[h.uuid] = f;
        }
        return b;
    },
    parseMaterials: function(a1, b) {
        var c = {};
        if (void 0 !== a1) {
            var d = new THREE.MaterialLoader;
            d.setTextures(b);
            for(var e = 0, g = a1.length; e < g; e++){
                var f = d.parse(a1[e]);
                c[f.uuid] = f;
            }
        }
        return c;
    },
    parseImages: function(a1, b) {
        function c(a1) {
            d.manager.itemStart(a1);
            return f.load(a1, function() {
                d.manager.itemEnd(a1);
            });
        }
        var d = this, e = {};
        if (void 0 !== a1 && 0 < a1.length) {
            var g = new THREE.LoadingManager(b), f = new THREE.ImageLoader(g);
            f.setCrossOrigin(this.crossOrigin);
            for(var g = 0, h = a1.length; g < h; g++){
                var k = a1[g], l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url) ? k.url : d.texturePath + k.url;
                e[k.uuid] = c(l);
            }
        }
        return e;
    },
    parseTextures: function(a1, b) {
        function c(a1) {
            if ("number" === typeof a1) return a1;
            console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a1);
            return THREE[a1];
        }
        var d = {};
        if (void 0 !== a1) for(var e = 0, g = a1.length; e < g; e++){
            var f = a1[e];
            void 0 === f.image && console.warn('THREE.ObjectLoader: No "image" specified for', f.uuid);
            void 0 === b[f.image] && console.warn("THREE.ObjectLoader: Undefined image", f.image);
            var h = new THREE.Texture(b[f.image]);
            h.needsUpdate = !0;
            h.uuid = f.uuid;
            void 0 !== f.name && (h.name = f.name);
            void 0 !== f.mapping && (h.mapping = c(f.mapping));
            void 0 !== f.offset && (h.offset = new THREE.Vector2(f.offset[0], f.offset[1]));
            void 0 !== f.repeat && (h.repeat = new THREE.Vector2(f.repeat[0], f.repeat[1]));
            void 0 !== f.minFilter && (h.minFilter = c(f.minFilter));
            void 0 !== f.magFilter && (h.magFilter = c(f.magFilter));
            void 0 !== f.anisotropy && (h.anisotropy = f.anisotropy);
            Array.isArray(f.wrap) && (h.wrapS = c(f.wrap[0]), h.wrapT = c(f.wrap[1]));
            d[f.uuid] = h;
        }
        return d;
    },
    parseObject: function() {
        var a1 = new THREE.Matrix4;
        return function(b, c, d) {
            var e;
            e = function(a1) {
                void 0 === c[a1] && console.warn("THREE.ObjectLoader: Undefined geometry", a1);
                return c[a1];
            };
            var g = function(a1) {
                void 0 === d[a1] && console.warn("THREE.ObjectLoader: Undefined material", a1);
                return d[a1];
            };
            switch(b.type){
                case "Scene":
                    e = new THREE.Scene;
                    break;
                case "PerspectiveCamera":
                    e = new THREE.PerspectiveCamera(b.fov, b.aspect, b.near, b.far);
                    break;
                case "OrthographicCamera":
                    e = new THREE.OrthographicCamera(b.left, b.right, b.top, b.bottom, b.near, b.far);
                    break;
                case "AmbientLight":
                    e = new THREE.AmbientLight(b.color);
                    break;
                case "DirectionalLight":
                    e = new THREE.DirectionalLight(b.color, b.intensity);
                    break;
                case "PointLight":
                    e = new THREE.PointLight(b.color, b.intensity, b.distance, b.decay);
                    break;
                case "SpotLight":
                    e = new THREE.SpotLight(b.color, b.intensity, b.distance, b.angle, b.exponent, b.decay);
                    break;
                case "HemisphereLight":
                    e = new THREE.HemisphereLight(b.color, b.groundColor, b.intensity);
                    break;
                case "Mesh":
                    e = new THREE.Mesh(e(b.geometry), g(b.material));
                    break;
                case "LOD":
                    e = new THREE.LOD;
                    break;
                case "Line":
                    e = new THREE.Line(e(b.geometry), g(b.material), b.mode);
                    break;
                case "PointCloud":
                case "Points":
                    e = new THREE.Points(e(b.geometry), g(b.material));
                    break;
                case "Sprite":
                    e = new THREE.Sprite(g(b.material));
                    break;
                case "Group":
                    e = new THREE.Group;
                    break;
                default:
                    e = new THREE.Object3D;
            }
            e.uuid = b.uuid;
            void 0 !== b.name && (e.name = b.name);
            void 0 !== b.matrix ? (a1.fromArray(b.matrix), a1.decompose(e.position, e.quaternion, e.scale)) : (void 0 !== b.position && e.position.fromArray(b.position), void 0 !== b.rotation && e.rotation.fromArray(b.rotation), void 0 !== b.scale && e.scale.fromArray(b.scale));
            void 0 !== b.castShadow && (e.castShadow = b.castShadow);
            void 0 !== b.receiveShadow && (e.receiveShadow = b.receiveShadow);
            void 0 !== b.visible && (e.visible = b.visible);
            void 0 !== b.userData && (e.userData = b.userData);
            if (void 0 !== b.children) for(var f in b.children)e.add(this.parseObject(b.children[f], c, d));
            if ("LOD" === b.type) for(b = b.levels, g = 0; g < b.length; g++){
                var h = b[g];
                f = e.getObjectByProperty("uuid", h.object);
                void 0 !== f && e.addLevel(f, h.distance);
            }
            return e;
        };
    }()
};
THREE.TextureLoader = function(a1) {
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
};
THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function(a1, b, c, d) {
        var e = new THREE.ImageLoader(this.manager);
        e.setCrossOrigin(this.crossOrigin);
        e.load(a1, function(a1) {
            a1 = new THREE.Texture(a1);
            a1.needsUpdate = !0;
            void 0 !== b && b(a1);
        }, c, d);
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    }
};
THREE.DataTextureLoader = THREE.BinaryTextureLoader = function(a1) {
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
    this._parser = null;
};
THREE.BinaryTextureLoader.prototype = {
    constructor: THREE.BinaryTextureLoader,
    load: function(a1, b, c, d) {
        var e = this, g = new THREE.DataTexture, f = new THREE.XHRLoader(this.manager);
        f.setCrossOrigin(this.crossOrigin);
        f.setResponseType("arraybuffer");
        f.load(a1, function(a1) {
            if (a1 = e._parser(a1)) void 0 !== a1.image ? g.image = a1.image : void 0 !== a1.data && (g.image.width = a1.width, g.image.height = a1.height, g.image.data = a1.data), g.wrapS = void 0 !== a1.wrapS ? a1.wrapS : THREE.ClampToEdgeWrapping, g.wrapT = void 0 !== a1.wrapT ? a1.wrapT : THREE.ClampToEdgeWrapping, g.magFilter = void 0 !== a1.magFilter ? a1.magFilter : THREE.LinearFilter, g.minFilter = void 0 !== a1.minFilter ? a1.minFilter : THREE.LinearMipMapLinearFilter, g.anisotropy = void 0 !== a1.anisotropy ? a1.anisotropy : 1, void 0 !== a1.format && (g.format = a1.format), void 0 !== a1.type && (g.type = a1.type), void 0 !== a1.mipmaps && (g.mipmaps = a1.mipmaps), 1 === a1.mipmapCount && (g.minFilter = THREE.LinearFilter), g.needsUpdate = !0, b && b(g, a1);
        }, c, d);
        return g;
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    }
};
THREE.CompressedTextureLoader = function(a1) {
    this.manager = void 0 !== a1 ? a1 : THREE.DefaultLoadingManager;
    this._parser = null;
};
THREE.CompressedTextureLoader.prototype = {
    constructor: THREE.CompressedTextureLoader,
    load: function(a1, b, c, d) {
        var e = this, g = [], f = new THREE.CompressedTexture;
        f.image = g;
        var h = new THREE.XHRLoader(this.manager);
        h.setCrossOrigin(this.crossOrigin);
        h.setResponseType("arraybuffer");
        if (Array.isArray(a1)) for(var k = 0, l = function(m) {
            h.load(a1[m], function(a1) {
                a1 = e._parser(a1, !0);
                g[m] = {
                    width: a1.width,
                    height: a1.height,
                    format: a1.format,
                    mipmaps: a1.mipmaps
                };
                k += 1;
                6 === k && (1 === a1.mipmapCount && (f.minFilter = THREE.LinearFilter), f.format = a1.format, f.needsUpdate = !0, b && b(f));
            }, c, d);
        }, n = 0, p = a1.length; n < p; ++n)l(n);
        else h.load(a1, function(a1) {
            a1 = e._parser(a1, !0);
            if (a1.isCubemap) for(var c = a1.mipmaps.length / a1.mipmapCount, d = 0; d < c; d++){
                g[d] = {
                    mipmaps: []
                };
                for(var h = 0; h < a1.mipmapCount; h++)g[d].mipmaps.push(a1.mipmaps[d * a1.mipmapCount + h]), g[d].format = a1.format, g[d].width = a1.width, g[d].height = a1.height;
            }
            else f.image.width = a1.width, f.image.height = a1.height, f.mipmaps = a1.mipmaps;
            1 === a1.mipmapCount && (f.minFilter = THREE.LinearFilter);
            f.format = a1.format;
            f.needsUpdate = !0;
            b && b(f);
        }, c, d);
        return f;
    },
    setCrossOrigin: function(a1) {
        this.crossOrigin = a1;
    }
};
THREE.Material = function() {
    Object.defineProperty(this, "id", {
        value: THREE.MaterialIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Material";
    this.side = THREE.FrontSide;
    this.opacity = 1;
    this.transparent = !1;
    this.blending = THREE.NormalBlending;
    this.blendSrc = THREE.SrcAlphaFactor;
    this.blendDst = THREE.OneMinusSrcAlphaFactor;
    this.blendEquation = THREE.AddEquation;
    this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
    this.depthFunc = THREE.LessEqualDepth;
    this.colorWrite = this.depthWrite = this.depthTest = !0;
    this.precision = null;
    this.polygonOffset = !1;
    this.overdraw = this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this._needsUpdate = this.visible = !0;
};
THREE.Material.prototype = {
    constructor: THREE.Material,
    get needsUpdate () {
        return this._needsUpdate;
    },
    set needsUpdate (a){
        !0 === a && this.update();
        this._needsUpdate = a;
    },
    setValues: function(a1) {
        if (void 0 !== a1) for(var b in a1){
            var c = a1[b];
            if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined.");
            else {
                var d = this[b];
                void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = "overdraw" === b ? Number(c) : c;
            }
        }
    },
    toJSON: function(a1) {
        var b = {
            metadata: {
                version: 4.4,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        b.uuid = this.uuid;
        b.type = this.type;
        "" !== this.name && (b.name = this.name);
        this.color instanceof THREE.Color && (b.color = this.color.getHex());
        this.emissive instanceof THREE.Color && (b.emissive = this.emissive.getHex());
        this.specular instanceof THREE.Color && (b.specular = this.specular.getHex());
        void 0 !== this.shininess && (b.shininess = this.shininess);
        this.map instanceof THREE.Texture && (b.map = this.map.toJSON(a1).uuid);
        this.alphaMap instanceof THREE.Texture && (b.alphaMap = this.alphaMap.toJSON(a1).uuid);
        this.lightMap instanceof THREE.Texture && (b.lightMap = this.lightMap.toJSON(a1).uuid);
        this.bumpMap instanceof THREE.Texture && (b.bumpMap = this.bumpMap.toJSON(a1).uuid, b.bumpScale = this.bumpScale);
        this.normalMap instanceof THREE.Texture && (b.normalMap = this.normalMap.toJSON(a1).uuid, b.normalScale = this.normalScale);
        this.displacementMap instanceof THREE.Texture && (b.displacementMap = this.displacementMap.toJSON(a1).uuid, b.displacementScale = this.displacementScale, b.displacementBias = this.displacementBias);
        this.specularMap instanceof THREE.Texture && (b.specularMap = this.specularMap.toJSON(a1).uuid);
        this.envMap instanceof THREE.Texture && (b.envMap = this.envMap.toJSON(a1).uuid, b.reflectivity = this.reflectivity);
        void 0 !== this.size && (b.size = this.size);
        void 0 !== this.sizeAttenuation && (b.sizeAttenuation = this.sizeAttenuation);
        void 0 !== this.vertexColors && this.vertexColors !== THREE.NoColors && (b.vertexColors = this.vertexColors);
        void 0 !== this.shading && this.shading !== THREE.SmoothShading && (b.shading = this.shading);
        void 0 !== this.blending && this.blending !== THREE.NormalBlending && (b.blending = this.blending);
        void 0 !== this.side && this.side !== THREE.FrontSide && (b.side = this.side);
        1 > this.opacity && (b.opacity = this.opacity);
        !0 === this.transparent && (b.transparent = this.transparent);
        0 < this.alphaTest && (b.alphaTest = this.alphaTest);
        !0 === this.wireframe && (b.wireframe = this.wireframe);
        1 < this.wireframeLinewidth && (b.wireframeLinewidth = this.wireframeLinewidth);
        return b;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.name = a1.name;
        this.side = a1.side;
        this.opacity = a1.opacity;
        this.transparent = a1.transparent;
        this.blending = a1.blending;
        this.blendSrc = a1.blendSrc;
        this.blendDst = a1.blendDst;
        this.blendEquation = a1.blendEquation;
        this.blendSrcAlpha = a1.blendSrcAlpha;
        this.blendDstAlpha = a1.blendDstAlpha;
        this.blendEquationAlpha = a1.blendEquationAlpha;
        this.depthFunc = a1.depthFunc;
        this.depthTest = a1.depthTest;
        this.depthWrite = a1.depthWrite;
        this.precision = a1.precision;
        this.polygonOffset = a1.polygonOffset;
        this.polygonOffsetFactor = a1.polygonOffsetFactor;
        this.polygonOffsetUnits = a1.polygonOffsetUnits;
        this.alphaTest = a1.alphaTest;
        this.overdraw = a1.overdraw;
        this.visible = a1.visible;
        return this;
    },
    update: function() {
        this.dispatchEvent({
            type: "update"
        });
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        });
    },
    get wrapAround () {
        console.warn("THREE." + this.type + ": .wrapAround has been removed.");
    },
    set wrapAround (a){
        console.warn("THREE." + this.type + ": .wrapAround has been removed.");
    },
    get wrapRGB () {
        console.warn("THREE." + this.type + ": .wrapRGB has been removed.");
        return new THREE.Color;
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "LineBasicMaterial";
    this.color = new THREE.Color(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.vertexColors = THREE.NoColors;
    this.fog = !0;
    this.setValues(a1);
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.LineBasicMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.color.copy(a1.color);
    this.linewidth = a1.linewidth;
    this.linecap = a1.linecap;
    this.linejoin = a1.linejoin;
    this.vertexColors = a1.vertexColors;
    this.fog = a1.fog;
    return this;
};
THREE.LineDashedMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "LineDashedMaterial";
    this.color = new THREE.Color(16777215);
    this.scale = this.linewidth = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a1);
};
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.color.copy(a1.color);
    this.linewidth = a1.linewidth;
    this.scale = a1.scale;
    this.dashSize = a1.dashSize;
    this.gapSize = a1.gapSize;
    this.vertexColors = a1.vertexColors;
    this.fog = a1.fog;
    return this;
};
THREE.MeshBasicMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "MeshBasicMaterial";
    this.color = new THREE.Color(16777215);
    this.aoMap = this.map = null;
    this.aoMapIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphTargets = this.skinning = !1;
    this.setValues(a1);
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.color.copy(a1.color);
    this.map = a1.map;
    this.aoMap = a1.aoMap;
    this.aoMapIntensity = a1.aoMapIntensity;
    this.specularMap = a1.specularMap;
    this.alphaMap = a1.alphaMap;
    this.envMap = a1.envMap;
    this.combine = a1.combine;
    this.reflectivity = a1.reflectivity;
    this.refractionRatio = a1.refractionRatio;
    this.fog = a1.fog;
    this.shading = a1.shading;
    this.wireframe = a1.wireframe;
    this.wireframeLinewidth = a1.wireframeLinewidth;
    this.wireframeLinecap = a1.wireframeLinecap;
    this.wireframeLinejoin = a1.wireframeLinejoin;
    this.vertexColors = a1.vertexColors;
    this.skinning = a1.skinning;
    this.morphTargets = a1.morphTargets;
    return this;
};
THREE.MeshLambertMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "MeshLambertMaterial";
    this.color = new THREE.Color(16777215);
    this.emissive = new THREE.Color(0);
    this.envMap = this.alphaMap = this.specularMap = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a1);
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.color.copy(a1.color);
    this.emissive.copy(a1.emissive);
    this.map = a1.map;
    this.specularMap = a1.specularMap;
    this.alphaMap = a1.alphaMap;
    this.envMap = a1.envMap;
    this.combine = a1.combine;
    this.reflectivity = a1.reflectivity;
    this.refractionRatio = a1.refractionRatio;
    this.fog = a1.fog;
    this.wireframe = a1.wireframe;
    this.wireframeLinewidth = a1.wireframeLinewidth;
    this.wireframeLinecap = a1.wireframeLinecap;
    this.wireframeLinejoin = a1.wireframeLinejoin;
    this.vertexColors = a1.vertexColors;
    this.skinning = a1.skinning;
    this.morphTargets = a1.morphTargets;
    this.morphNormals = a1.morphNormals;
    return this;
};
THREE.MeshPhongMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "MeshPhongMaterial";
    this.color = new THREE.Color(16777215);
    this.emissive = new THREE.Color(0);
    this.specular = new THREE.Color(1118481);
    this.shininess = 30;
    this.metal = !1;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalScale = new THREE.Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a1);
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.color.copy(a1.color);
    this.emissive.copy(a1.emissive);
    this.specular.copy(a1.specular);
    this.shininess = a1.shininess;
    this.metal = a1.metal;
    this.map = a1.map;
    this.lightMap = a1.lightMap;
    this.lightMapIntensity = a1.lightMapIntensity;
    this.aoMap = a1.aoMap;
    this.aoMapIntensity = a1.aoMapIntensity;
    this.emissiveMap = a1.emissiveMap;
    this.bumpMap = a1.bumpMap;
    this.bumpScale = a1.bumpScale;
    this.normalMap = a1.normalMap;
    this.normalScale.copy(a1.normalScale);
    this.displacementMap = a1.displacementMap;
    this.displacementScale = a1.displacementScale;
    this.displacementBias = a1.displacementBias;
    this.specularMap = a1.specularMap;
    this.alphaMap = a1.alphaMap;
    this.envMap = a1.envMap;
    this.combine = a1.combine;
    this.reflectivity = a1.reflectivity;
    this.refractionRatio = a1.refractionRatio;
    this.fog = a1.fog;
    this.shading = a1.shading;
    this.wireframe = a1.wireframe;
    this.wireframeLinewidth = a1.wireframeLinewidth;
    this.wireframeLinecap = a1.wireframeLinecap;
    this.wireframeLinejoin = a1.wireframeLinejoin;
    this.vertexColors = a1.vertexColors;
    this.skinning = a1.skinning;
    this.morphTargets = a1.morphTargets;
    this.morphNormals = a1.morphNormals;
    return this;
};
THREE.MeshDepthMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "MeshDepthMaterial";
    this.wireframe = this.morphTargets = !1;
    this.wireframeLinewidth = 1;
    this.setValues(a1);
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.wireframe = a1.wireframe;
    this.wireframeLinewidth = a1.wireframeLinewidth;
    return this;
};
THREE.MeshNormalMaterial = function(a1) {
    THREE.Material.call(this, a1);
    this.type = "MeshNormalMaterial";
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphTargets = !1;
    this.setValues(a1);
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshNormalMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.wireframe = a1.wireframe;
    this.wireframeLinewidth = a1.wireframeLinewidth;
    return this;
};
THREE.MultiMaterial = function(a1) {
    this.uuid = THREE.Math.generateUUID();
    this.type = "MultiMaterial";
    this.materials = a1 instanceof Array ? a1 : [];
    this.visible = !0;
};
THREE.MultiMaterial.prototype = {
    constructor: THREE.MultiMaterial,
    toJSON: function() {
        for(var a1 = {
            metadata: {
                version: 4.2,
                type: "material",
                generator: "MaterialExporter"
            },
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, b = 0, c = this.materials.length; b < c; b++)a1.materials.push(this.materials[b].toJSON());
        a1.visible = this.visible;
        return a1;
    },
    clone: function() {
        for(var a1 = new this.constructor, b = 0; b < this.materials.length; b++)a1.materials.push(this.materials[b].clone());
        a1.visible = this.visible;
        return a1;
    }
};
THREE.MeshFaceMaterial = THREE.MultiMaterial;
THREE.PointsMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "PointsMaterial";
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.vertexColors = THREE.NoColors;
    this.fog = !0;
    this.setValues(a1);
};
THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial;
THREE.PointsMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.color.copy(a1.color);
    this.map = a1.map;
    this.size = a1.size;
    this.sizeAttenuation = a1.sizeAttenuation;
    this.vertexColors = a1.vertexColors;
    this.fog = a1.fog;
    return this;
};
THREE.PointCloudMaterial = function(a1) {
    console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
    return new THREE.PointsMaterial(a1);
};
THREE.ParticleBasicMaterial = function(a1) {
    console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
    return new THREE.PointsMaterial(a1);
};
THREE.ParticleSystemMaterial = function(a1) {
    console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
    return new THREE.PointsMaterial(a1);
};
THREE.ShaderMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.shading = THREE.SmoothShading;
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.lights = this.fog = !1;
    this.vertexColors = THREE.NoColors;
    this.derivatives = this.morphNormals = this.morphTargets = this.skinning = !1;
    this.defaultAttributeValues = {
        color: [
            1,
            1,
            1
        ],
        uv: [
            0,
            0
        ],
        uv2: [
            0,
            0
        ]
    };
    this.index0AttributeName = void 0;
    void 0 !== a1 && (void 0 !== a1.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(a1));
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.fragmentShader = a1.fragmentShader;
    this.vertexShader = a1.vertexShader;
    this.uniforms = THREE.UniformsUtils.clone(a1.uniforms);
    this.attributes = a1.attributes;
    this.defines = a1.defines;
    this.shading = a1.shading;
    this.wireframe = a1.wireframe;
    this.wireframeLinewidth = a1.wireframeLinewidth;
    this.fog = a1.fog;
    this.lights = a1.lights;
    this.vertexColors = a1.vertexColors;
    this.skinning = a1.skinning;
    this.morphTargets = a1.morphTargets;
    this.morphNormals = a1.morphNormals;
    this.derivatives = a1.derivatives;
    return this;
};
THREE.ShaderMaterial.prototype.toJSON = function(a1) {
    a1 = THREE.Material.prototype.toJSON.call(this, a1);
    a1.uniforms = this.uniforms;
    a1.attributes = this.attributes;
    a1.vertexShader = this.vertexShader;
    a1.fragmentShader = this.fragmentShader;
    return a1;
};
THREE.RawShaderMaterial = function(a1) {
    THREE.ShaderMaterial.call(this, a1);
    this.type = "RawShaderMaterial";
};
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial;
THREE.SpriteMaterial = function(a1) {
    THREE.Material.call(this);
    this.type = "SpriteMaterial";
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.rotation = 0;
    this.fog = !1;
    this.setValues(a1);
};
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.copy = function(a1) {
    THREE.Material.prototype.copy.call(this, a1);
    this.color.copy(a1.color);
    this.map = a1.map;
    this.rotation = a1.rotation;
    this.fog = a1.fog;
    return this;
};
THREE.Texture = function(a1, b, c, d, e, g, f, h, k) {
    Object.defineProperty(this, "id", {
        value: THREE.TextureIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.sourceFile = this.name = "";
    this.image = void 0 !== a1 ? a1 : THREE.Texture.DEFAULT_IMAGE;
    this.mipmaps = [];
    this.mapping = void 0 !== b ? b : THREE.Texture.DEFAULT_MAPPING;
    this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
    this.minFilter = void 0 !== g ? g : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== k ? k : 1;
    this.format = void 0 !== f ? f : THREE.RGBAFormat;
    this.type = void 0 !== h ? h : THREE.UnsignedByteType;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.version = 0;
    this.onUpdate = null;
};
THREE.Texture.DEFAULT_IMAGE = void 0;
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping;
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    set needsUpdate (a){
        !0 === a && this.version++;
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.image = a1.image;
        this.mipmaps = a1.mipmaps.slice(0);
        this.mapping = a1.mapping;
        this.wrapS = a1.wrapS;
        this.wrapT = a1.wrapT;
        this.magFilter = a1.magFilter;
        this.minFilter = a1.minFilter;
        this.anisotropy = a1.anisotropy;
        this.format = a1.format;
        this.type = a1.type;
        this.offset.copy(a1.offset);
        this.repeat.copy(a1.repeat);
        this.generateMipmaps = a1.generateMipmaps;
        this.premultiplyAlpha = a1.premultiplyAlpha;
        this.flipY = a1.flipY;
        this.unpackAlignment = a1.unpackAlignment;
        return this;
    },
    toJSON: function(a1) {
        if (void 0 !== a1.textures[this.uuid]) return a1.textures[this.uuid];
        var b = {
            metadata: {
                version: 4.4,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [
                this.repeat.x,
                this.repeat.y
            ],
            offset: [
                this.offset.x,
                this.offset.y
            ],
            wrap: [
                this.wrapS,
                this.wrapT
            ],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy
        };
        if (void 0 !== this.image) {
            var c = this.image;
            void 0 === c.uuid && (c.uuid = THREE.Math.generateUUID());
            if (void 0 === a1.images[c.uuid]) {
                var d = a1.images, e = c.uuid, g = c.uuid, f;
                void 0 !== c.toDataURL ? f = c : (f = document.createElement("canvas"), f.width = c.width, f.height = c.height, f.getContext("2d").drawImage(c, 0, 0, c.width, c.height));
                f = 2048 < f.width || 2048 < f.height ? f.toDataURL("image/jpeg", .6) : f.toDataURL("image/png");
                d[e] = {
                    uuid: g,
                    url: f
                };
            }
            b.image = c.uuid;
        }
        return a1.textures[this.uuid] = b;
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        });
    },
    transformUv: function(a1) {
        if (this.mapping === THREE.UVMapping) {
            a1.multiply(this.repeat);
            a1.add(this.offset);
            if (0 > a1.x || 1 < a1.x) switch(this.wrapS){
                case THREE.RepeatWrapping:
                    a1.x -= Math.floor(a1.x);
                    break;
                case THREE.ClampToEdgeWrapping:
                    a1.x = 0 > a1.x ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(a1.x) % 2) ? a1.x = Math.ceil(a1.x) - a1.x : a1.x -= Math.floor(a1.x);
            }
            if (0 > a1.y || 1 < a1.y) switch(this.wrapT){
                case THREE.RepeatWrapping:
                    a1.y -= Math.floor(a1.y);
                    break;
                case THREE.ClampToEdgeWrapping:
                    a1.y = 0 > a1.y ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(a1.y) % 2) ? a1.y = Math.ceil(a1.y) - a1.y : a1.y -= Math.floor(a1.y);
            }
            this.flipY && (a1.y = 1 - a1.y);
        }
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);
THREE.TextureIdCount = 0;
THREE.CanvasTexture = function(a1, b, c, d, e, g, f, h, k) {
    THREE.Texture.call(this, a1, b, c, d, e, g, f, h, k);
    this.needsUpdate = !0;
};
THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture;
THREE.CubeTexture = function(a1, b, c, d, e, g, f, h, k) {
    b = void 0 !== b ? b : THREE.CubeReflectionMapping;
    THREE.Texture.call(this, a1, b, c, d, e, g, f, h, k);
    this.images = a1;
    this.flipY = !1;
};
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture;
THREE.CubeTexture.prototype.copy = function(a1) {
    THREE.Texture.prototype.copy.call(this, a1);
    this.images = a1.images;
    return this;
};
THREE.CompressedTexture = function(a1, b, c, d, e, g, f, h, k, l, n) {
    THREE.Texture.call(this, null, g, f, h, k, l, d, e, n);
    this.image = {
        width: b,
        height: c
    };
    this.mipmaps = a1;
    this.generateMipmaps = this.flipY = !1;
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture;
THREE.DataTexture = function(a1, b, c, d, e, g, f, h, k, l, n) {
    THREE.Texture.call(this, null, g, f, h, k, l, d, e, n);
    this.image = {
        data: a1,
        width: b,
        height: c
    };
    this.magFilter = void 0 !== k ? k : THREE.NearestFilter;
    this.minFilter = void 0 !== l ? l : THREE.NearestFilter;
    this.generateMipmaps = this.flipY = !1;
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.constructor = THREE.DataTexture;
THREE.VideoTexture = function(a1, b, c, d, e, g, f, h, k) {
    THREE.Texture.call(this, a1, b, c, d, e, g, f, h, k);
    this.generateMipmaps = !1;
    var l = this, n = function() {
        requestAnimationFrame(n);
        a1.readyState === a1.HAVE_ENOUGH_DATA && (l.needsUpdate = !0);
    };
    n();
};
THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture;
THREE.Group = function() {
    THREE.Object3D.call(this);
    this.type = "Group";
};
THREE.Group.prototype = Object.create(THREE.Object3D.prototype);
THREE.Group.prototype.constructor = THREE.Group;
THREE.Points = function(a1, b) {
    THREE.Object3D.call(this);
    this.type = "Points";
    this.geometry = void 0 !== a1 ? a1 : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.PointsMaterial({
        color: 16777215 * Math.random()
    });
};
THREE.Points.prototype = Object.create(THREE.Object3D.prototype);
THREE.Points.prototype.constructor = THREE.Points;
THREE.Points.prototype.raycast = function() {
    var a1 = new THREE.Matrix4, b = new THREE.Ray;
    return function(c, d) {
        function e(a1, e) {
            var f = b.distanceSqToPoint(a1);
            if (f < k) {
                var h = b.closestPointToPoint(a1);
                h.applyMatrix4(g.matrixWorld);
                var l = c.ray.origin.distanceTo(h);
                l < c.near || l > c.far || d.push({
                    distance: l,
                    distanceToRay: Math.sqrt(f),
                    point: h.clone(),
                    index: e,
                    face: null,
                    object: g
                });
            }
        }
        var g = this, f = g.geometry, h = c.params.Points.threshold;
        a1.getInverse(this.matrixWorld);
        b.copy(c.ray).applyMatrix4(a1);
        if (null === f.boundingBox || !1 !== b.isIntersectionBox(f.boundingBox)) {
            var h = h / ((this.scale.x + this.scale.y + this.scale.z) / 3), k = h * h, h = new THREE.Vector3;
            if (f instanceof THREE.BufferGeometry) {
                var l = f.index, f = f.attributes.position.array;
                if (null !== l) for(var n = l.array, l = 0, p = n.length; l < p; l++){
                    var m = n[l];
                    h.fromArray(f, 3 * m);
                    e(h, m);
                }
                else for(l = 0, n = f.length / 3; l < n; l++)h.fromArray(f, 3 * l), e(h, l);
            } else for(h = f.vertices, l = 0, n = h.length; l < n; l++)e(h[l], l);
        }
    };
}();
THREE.Points.prototype.clone = function() {
    return new this.constructor(this.geometry, this.material).copy(this);
};
THREE.Points.prototype.toJSON = function(a1) {
    var b = THREE.Object3D.prototype.toJSON.call(this, a1);
    void 0 === a1.geometries[this.geometry.uuid] && (a1.geometries[this.geometry.uuid] = this.geometry.toJSON());
    void 0 === a1.materials[this.material.uuid] && (a1.materials[this.material.uuid] = this.material.toJSON());
    b.object.geometry = this.geometry.uuid;
    b.object.material = this.material.uuid;
    return b;
};
THREE.PointCloud = function(a1, b) {
    console.warn("THREE.PointCloud has been renamed to THREE.Points.");
    return new THREE.Points(a1, b);
};
THREE.ParticleSystem = function(a1, b) {
    console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
    return new THREE.Points(a1, b);
};
THREE.Line = function(a1, b, c) {
    if (1 === c) return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new THREE.LineSegments(a1, b);
    THREE.Object3D.call(this);
    this.type = "Line";
    this.geometry = void 0 !== a1 ? a1 : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({
        color: 16777215 * Math.random()
    });
};
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.constructor = THREE.Line;
THREE.Line.prototype.raycast = function() {
    var a1 = new THREE.Matrix4, b = new THREE.Ray, c = new THREE.Sphere;
    return function(d, e) {
        var g = d.linePrecision, g = g * g, f = this.geometry;
        null === f.boundingSphere && f.computeBoundingSphere();
        c.copy(f.boundingSphere);
        c.applyMatrix4(this.matrixWorld);
        if (!1 !== d.ray.isIntersectionSphere(c)) {
            a1.getInverse(this.matrixWorld);
            b.copy(d.ray).applyMatrix4(a1);
            var h = new THREE.Vector3, k = new THREE.Vector3, l = new THREE.Vector3, n = new THREE.Vector3, p = this instanceof THREE.LineSegments ? 2 : 1;
            if (f instanceof THREE.BufferGeometry) {
                var m = f.index, q = f.attributes;
                if (null !== m) for(var f = m.array, q = q.position.array, m = 0, t = f.length - 1; m < t; m += p){
                    var r = f[m + 1];
                    h.fromArray(q, 3 * f[m]);
                    k.fromArray(q, 3 * r);
                    r = b.distanceSqToSegment(h, k, n, l);
                    r > g || (n.applyMatrix4(this.matrixWorld), r = d.ray.origin.distanceTo(n), r < d.near || r > d.far || e.push({
                        distance: r,
                        point: l.clone().applyMatrix4(this.matrixWorld),
                        index: m,
                        face: null,
                        faceIndex: null,
                        object: this
                    }));
                }
                else for(q = q.position.array, m = 0, t = q.length / 3 - 1; m < t; m += p)h.fromArray(q, 3 * m), k.fromArray(q, 3 * m + 3), r = b.distanceSqToSegment(h, k, n, l), r > g || (n.applyMatrix4(this.matrixWorld), r = d.ray.origin.distanceTo(n), r < d.near || r > d.far || e.push({
                    distance: r,
                    point: l.clone().applyMatrix4(this.matrixWorld),
                    index: m,
                    face: null,
                    faceIndex: null,
                    object: this
                }));
            } else if (f instanceof THREE.Geometry) for(h = f.vertices, k = h.length, m = 0; m < k - 1; m += p)r = b.distanceSqToSegment(h[m], h[m + 1], n, l), r > g || (n.applyMatrix4(this.matrixWorld), r = d.ray.origin.distanceTo(n), r < d.near || r > d.far || e.push({
                distance: r,
                point: l.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
            }));
        }
    };
}();
THREE.Line.prototype.clone = function() {
    return new this.constructor(this.geometry, this.material).copy(this);
};
THREE.Line.prototype.toJSON = function(a1) {
    var b = THREE.Object3D.prototype.toJSON.call(this, a1);
    void 0 === a1.geometries[this.geometry.uuid] && (a1.geometries[this.geometry.uuid] = this.geometry.toJSON());
    void 0 === a1.materials[this.material.uuid] && (a1.materials[this.material.uuid] = this.material.toJSON());
    b.object.geometry = this.geometry.uuid;
    b.object.material = this.material.uuid;
    return b;
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.LineSegments = function(a1, b) {
    THREE.Line.call(this, a1, b);
    this.type = "LineSegments";
};
THREE.LineSegments.prototype = Object.create(THREE.Line.prototype);
THREE.LineSegments.prototype.constructor = THREE.LineSegments;
THREE.Mesh = function(a1, b) {
    THREE.Object3D.call(this);
    this.type = "Mesh";
    this.geometry = void 0 !== a1 ? a1 : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({
        color: 16777215 * Math.random()
    });
    this.updateMorphTargets();
};
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.updateMorphTargets = function() {
    if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
        this.morphTargetBase = -1;
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for(var a1 = 0, b = this.geometry.morphTargets.length; a1 < b; a1++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[a1].name] = a1;
    }
};
THREE.Mesh.prototype.getMorphTargetIndexByName = function(a1) {
    if (void 0 !== this.morphTargetDictionary[a1]) return this.morphTargetDictionary[a1];
    console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + a1 + " does not exist. Returning 0.");
    return 0;
};
THREE.Mesh.prototype.raycast = function() {
    function a1(a1, b, c, d, e, f, g) {
        THREE.Triangle.barycoordFromPoint(a1, b, c, d, q);
        e.multiplyScalar(q.x);
        f.multiplyScalar(q.y);
        g.multiplyScalar(q.z);
        e.add(f).add(g);
        return e.clone();
    }
    var b = new THREE.Matrix4, c = new THREE.Ray, d = new THREE.Sphere, e = new THREE.Vector3, g = new THREE.Vector3, f = new THREE.Vector3, h = new THREE.Vector3, k = new THREE.Vector3, l = new THREE.Vector3, n = new THREE.Vector2, p = new THREE.Vector2, m = new THREE.Vector2, q = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3;
    return function(q, w) {
        var v = this.geometry, B = this.material;
        if (void 0 !== B && (null === v.boundingSphere && v.computeBoundingSphere(), d.copy(v.boundingSphere), d.applyMatrix4(this.matrixWorld), !1 !== q.ray.isIntersectionSphere(d) && (b.getInverse(this.matrixWorld), c.copy(q.ray).applyMatrix4(b), null === v.boundingBox || !1 !== c.isIntersectionBox(v.boundingBox)))) {
            var x, H, I;
            if (v instanceof THREE.BufferGeometry) {
                if (x = v.index, v = v.attributes, null !== x) for(var z = x.array, D = v.position.array, G = 0, O = z.length; G < O; G += 3){
                    x = z[G];
                    H = z[G + 1];
                    I = z[G + 2];
                    e.fromArray(D, 3 * x);
                    g.fromArray(D, 3 * H);
                    f.fromArray(D, 3 * I);
                    if (B.side === THREE.BackSide) {
                        if (null === c.intersectTriangle(f, g, e, !0, t)) continue;
                    } else if (null === c.intersectTriangle(e, g, f, B.side !== THREE.DoubleSide, t)) continue;
                    r.copy(t);
                    r.applyMatrix4(this.matrixWorld);
                    var C = q.ray.origin.distanceTo(r);
                    if (!(C < q.near || C > q.far)) {
                        var F;
                        void 0 !== v.uv && (F = v.uv.array, n.fromArray(F, 2 * x), p.fromArray(F, 2 * H), m.fromArray(F, 2 * I), F = a1(t, e, g, f, n, p, m));
                        w.push({
                            distance: C,
                            point: r.clone(),
                            uv: F,
                            face: new THREE.Face3(x, H, I, THREE.Triangle.normal(e, g, f)),
                            faceIndex: Math.floor(G / 3),
                            object: this
                        });
                    }
                }
                else for(D = v.position.array, G = 0, O = D.length; G < O; G += 9){
                    e.fromArray(D, G);
                    g.fromArray(D, G + 3);
                    f.fromArray(D, G + 6);
                    if (B.side === THREE.BackSide) {
                        if (null === c.intersectTriangle(f, g, e, !0, t)) continue;
                    } else if (null === c.intersectTriangle(e, g, f, B.side !== THREE.DoubleSide, t)) continue;
                    r.copy(t);
                    r.applyMatrix4(this.matrixWorld);
                    C = q.ray.origin.distanceTo(r);
                    C < q.near || C > q.far || (void 0 !== v.uv && (F = v.uv.array, n.fromArray(F, G), p.fromArray(F, G + 2), m.fromArray(F, G + 4), F = a1(t, e, g, f, n, p, m)), x = G / 3, H = x + 1, I = x + 2, w.push({
                        distance: C,
                        point: r.clone(),
                        uv: F,
                        face: new THREE.Face3(x, H, I, THREE.Triangle.normal(e, g, f)),
                        index: x,
                        object: this
                    }));
                }
            } else if (v instanceof THREE.Geometry) for(var z = B instanceof THREE.MeshFaceMaterial, D = !0 === z ? B.materials : null, G = v.vertices, O = v.faces, K = 0, L = O.length; K < L; K++){
                var E = O[K], C = !0 === z ? D[E.materialIndex] : B;
                if (void 0 !== C) {
                    x = G[E.a];
                    H = G[E.b];
                    I = G[E.c];
                    if (!0 === C.morphTargets) {
                        var J = v.morphTargets, y = this.morphTargetInfluences;
                        e.set(0, 0, 0);
                        g.set(0, 0, 0);
                        f.set(0, 0, 0);
                        for(var P = 0, U = J.length; P < U; P++){
                            var Q = y[P];
                            if (0 !== Q) {
                                var R = J[P].vertices;
                                e.addScaledVector(h.subVectors(R[E.a], x), Q);
                                g.addScaledVector(k.subVectors(R[E.b], H), Q);
                                f.addScaledVector(l.subVectors(R[E.c], I), Q);
                            }
                        }
                        e.add(x);
                        g.add(H);
                        f.add(I);
                        x = e;
                        H = g;
                        I = f;
                    }
                    if (C.side === THREE.BackSide) {
                        if (null === c.intersectTriangle(I, H, x, !0, t)) continue;
                    } else if (null === c.intersectTriangle(x, H, I, C.side !== THREE.DoubleSide, t)) continue;
                    r.copy(t);
                    r.applyMatrix4(this.matrixWorld);
                    C = q.ray.origin.distanceTo(r);
                    C < q.near || C > q.far || (0 < v.faceVertexUvs[0].length && (F = v.faceVertexUvs[0][K], n.copy(F[0]), p.copy(F[1]), m.copy(F[2]), F = a1(t, x, H, I, n, p, m)), w.push({
                        distance: C,
                        point: r.clone(),
                        uv: F,
                        face: E,
                        faceIndex: K,
                        object: this
                    }));
                }
            }
        }
    };
}();
THREE.Mesh.prototype.clone = function() {
    return new this.constructor(this.geometry, this.material).copy(this);
};
THREE.Mesh.prototype.toJSON = function(a1) {
    var b = THREE.Object3D.prototype.toJSON.call(this, a1);
    void 0 === a1.geometries[this.geometry.uuid] && (a1.geometries[this.geometry.uuid] = this.geometry.toJSON(a1));
    void 0 === a1.materials[this.material.uuid] && (a1.materials[this.material.uuid] = this.material.toJSON(a1));
    b.object.geometry = this.geometry.uuid;
    b.object.material = this.material.uuid;
    return b;
};
THREE.Bone = function(a1) {
    THREE.Object3D.call(this);
    this.type = "Bone";
    this.skin = a1;
};
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.copy = function(a1) {
    THREE.Object3D.prototype.copy.call(this, a1);
    this.skin = a1.skin;
    return this;
};
THREE.Skeleton = function(a1, b, c) {
    this.useVertexTexture = void 0 !== c ? c : !0;
    this.identityMatrix = new THREE.Matrix4;
    a1 = a1 || [];
    this.bones = a1.slice(0);
    this.useVertexTexture ? (a1 = Math.sqrt(4 * this.bones.length), a1 = THREE.Math.nextPowerOfTwo(Math.ceil(a1)), this.boneTextureHeight = this.boneTextureWidth = a1 = Math.max(a1, 4), this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType)) : this.boneMatrices = new Float32Array(16 * this.bones.length);
    if (void 0 === b) this.calculateInverses();
    else if (this.bones.length === b.length) this.boneInverses = b.slice(0);
    else for(console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], b = 0, a1 = this.bones.length; b < a1; b++)this.boneInverses.push(new THREE.Matrix4);
};
THREE.Skeleton.prototype.calculateInverses = function() {
    this.boneInverses = [];
    for(var a1 = 0, b = this.bones.length; a1 < b; a1++){
        var c = new THREE.Matrix4;
        this.bones[a1] && c.getInverse(this.bones[a1].matrixWorld);
        this.boneInverses.push(c);
    }
};
THREE.Skeleton.prototype.pose = function() {
    for(var a1, b = 0, c = this.bones.length; b < c; b++)(a1 = this.bones[b]) && a1.matrixWorld.getInverse(this.boneInverses[b]);
    b = 0;
    for(c = this.bones.length; b < c; b++)if (a1 = this.bones[b]) a1.parent ? (a1.matrix.getInverse(a1.parent.matrixWorld), a1.matrix.multiply(a1.matrixWorld)) : a1.matrix.copy(a1.matrixWorld), a1.matrix.decompose(a1.position, a1.quaternion, a1.scale);
};
THREE.Skeleton.prototype.update = function() {
    var a1 = new THREE.Matrix4;
    return function() {
        for(var b = 0, c = this.bones.length; b < c; b++)a1.multiplyMatrices(this.bones[b] ? this.bones[b].matrixWorld : this.identityMatrix, this.boneInverses[b]), a1.flattenToArrayOffset(this.boneMatrices, 16 * b);
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0);
    };
}();
THREE.Skeleton.prototype.clone = function() {
    return new THREE.Skeleton(this.bones, this.boneInverses, this.useVertexTexture);
};
THREE.SkinnedMesh = function(a1, b, c) {
    THREE.Mesh.call(this, a1, b);
    this.type = "SkinnedMesh";
    this.bindMode = "attached";
    this.bindMatrix = new THREE.Matrix4;
    this.bindMatrixInverse = new THREE.Matrix4;
    a1 = [];
    if (this.geometry && void 0 !== this.geometry.bones) {
        for(var d, e = 0, g = this.geometry.bones.length; e < g; ++e)d = this.geometry.bones[e], b = new THREE.Bone(this), a1.push(b), b.name = d.name, b.position.fromArray(d.pos), b.quaternion.fromArray(d.rotq), void 0 !== d.scl && b.scale.fromArray(d.scl);
        e = 0;
        for(g = this.geometry.bones.length; e < g; ++e)d = this.geometry.bones[e], -1 !== d.parent ? a1[d.parent].add(a1[e]) : this.add(a1[e]);
    }
    this.normalizeSkinWeights();
    this.updateMatrixWorld(!0);
    this.bind(new THREE.Skeleton(a1, void 0, c), this.matrixWorld);
};
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.bind = function(a1, b) {
    this.skeleton = a1;
    void 0 === b && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), b = this.matrixWorld);
    this.bindMatrix.copy(b);
    this.bindMatrixInverse.getInverse(b);
};
THREE.SkinnedMesh.prototype.pose = function() {
    this.skeleton.pose();
};
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function() {
    if (this.geometry instanceof THREE.Geometry) for(var a1 = 0; a1 < this.geometry.skinIndices.length; a1++){
        var b = this.geometry.skinWeights[a1], c = 1 / b.lengthManhattan();
        Infinity !== c ? b.multiplyScalar(c) : b.set(1);
    }
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(a1) {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0);
    "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode);
};
THREE.SkinnedMesh.prototype.clone = function() {
    return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this);
};
THREE.MorphAnimMesh = function(a1, b) {
    THREE.Mesh.call(this, a1, b);
    this.type = "MorphAnimMesh";
    this.duration = 1E3;
    this.mirroredLoop = !1;
    this.currentKeyframe = this.lastKeyframe = this.time = 0;
    this.direction = 1;
    this.directionBackwards = !1;
    this.setFrameRange(0, a1.morphTargets.length - 1);
};
THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.constructor = THREE.MorphAnimMesh;
THREE.MorphAnimMesh.prototype.setFrameRange = function(a1, b) {
    this.startKeyframe = a1;
    this.endKeyframe = b;
    this.length = this.endKeyframe - this.startKeyframe + 1;
};
THREE.MorphAnimMesh.prototype.setDirectionForward = function() {
    this.direction = 1;
    this.directionBackwards = !1;
};
THREE.MorphAnimMesh.prototype.setDirectionBackward = function() {
    this.direction = -1;
    this.directionBackwards = !0;
};
THREE.MorphAnimMesh.prototype.parseAnimations = function() {
    var a1 = this.geometry;
    a1.animations || (a1.animations = {});
    for(var b, c = a1.animations, d = /([a-z]+)_?(\d+)/, e = 0, g = a1.morphTargets.length; e < g; e++){
        var f = a1.morphTargets[e].name.match(d);
        if (f && 1 < f.length) {
            f = f[1];
            c[f] || (c[f] = {
                start: Infinity,
                end: -Infinity
            });
            var h = c[f];
            e < h.start && (h.start = e);
            e > h.end && (h.end = e);
            b || (b = f);
        }
    }
    a1.firstAnimation = b;
};
THREE.MorphAnimMesh.prototype.setAnimationLabel = function(a1, b, c) {
    this.geometry.animations || (this.geometry.animations = {});
    this.geometry.animations[a1] = {
        start: b,
        end: c
    };
};
THREE.MorphAnimMesh.prototype.playAnimation = function(a1, b) {
    var c = this.geometry.animations[a1];
    c ? (this.setFrameRange(c.start, c.end), this.duration = (c.end - c.start) / b * 1E3, this.time = 0) : console.warn("THREE.MorphAnimMesh: animation[" + a1 + "] undefined in .playAnimation()");
};
THREE.MorphAnimMesh.prototype.updateAnimation = function(a1) {
    var b = this.duration / this.length;
    this.time += this.direction * a1;
    if (this.mirroredLoop) {
        if (this.time > this.duration || 0 > this.time) this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time && (this.time = 0, this.directionBackwards = !1);
    } else this.time %= this.duration, 0 > this.time && (this.time += this.duration);
    var c = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
    a1 = this.morphTargetInfluences;
    c !== this.currentKeyframe && (a1[this.lastKeyframe] = 0, a1[this.currentKeyframe] = 1, a1[c] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = c);
    b = this.time % b / b;
    this.directionBackwards && (b = 1 - b);
    a1[this.currentKeyframe] = b;
    a1[this.lastKeyframe] = 1 - b;
};
THREE.MorphAnimMesh.prototype.interpolateTargets = function(a1, b, c) {
    for(var d = this.morphTargetInfluences, e = 0, g = d.length; e < g; e++)d[e] = 0;
    -1 < a1 && (d[a1] = 1 - c);
    -1 < b && (d[b] = c);
};
THREE.MorphAnimMesh.prototype.copy = function(a1) {
    THREE.Mesh.prototype.copy.call(this, a1);
    this.duration = a1.duration;
    this.mirroredLoop = a1.mirroredLoop;
    this.time = a1.time;
    this.lastKeyframe = a1.lastKeyframe;
    this.currentKeyframe = a1.currentKeyframe;
    this.direction = a1.direction;
    this.directionBackwards = a1.directionBackwards;
    return this;
};
THREE.LOD = function() {
    THREE.Object3D.call(this);
    this.type = "LOD";
    Object.defineProperties(this, {
        levels: {
            enumerable: !0,
            value: []
        },
        objects: {
            get: function() {
                console.warn("THREE.LOD: .objects has been renamed to .levels.");
                return this.levels;
            }
        }
    });
};
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.constructor = THREE.LOD;
THREE.LOD.prototype.addLevel = function(a1, b) {
    void 0 === b && (b = 0);
    b = Math.abs(b);
    for(var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++);
    c.splice(d, 0, {
        distance: b,
        object: a1
    });
    this.add(a1);
};
THREE.LOD.prototype.getObjectForDistance = function(a1) {
    for(var b = this.levels, c = 1, d = b.length; c < d && !(a1 < b[c].distance); c++);
    return b[c - 1].object;
};
THREE.LOD.prototype.raycast = function() {
    var a1 = new THREE.Vector3;
    return function(b, c) {
        a1.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.origin.distanceTo(a1);
        this.getObjectForDistance(d).raycast(b, c);
    };
}();
THREE.LOD.prototype.update = function() {
    var a1 = new THREE.Vector3, b = new THREE.Vector3;
    return function(c) {
        var d = this.levels;
        if (1 < d.length) {
            a1.setFromMatrixPosition(c.matrixWorld);
            b.setFromMatrixPosition(this.matrixWorld);
            c = a1.distanceTo(b);
            d[0].object.visible = !0;
            for(var e = 1, g = d.length; e < g; e++)if (c >= d[e].distance) d[e - 1].object.visible = !1, d[e].object.visible = !0;
            else break;
            for(; e < g; e++)d[e].object.visible = !1;
        }
    };
}();
THREE.LOD.prototype.copy = function(a1) {
    THREE.Object3D.prototype.copy.call(this, a1, !1);
    a1 = a1.levels;
    for(var b = 0, c = a1.length; b < c; b++){
        var d = a1[b];
        this.addLevel(d.object.clone(), d.distance);
    }
    return this;
};
THREE.LOD.prototype.toJSON = function(a1) {
    a1 = THREE.Object3D.prototype.toJSON.call(this, a1);
    a1.object.levels = [];
    for(var b = this.levels, c = 0, d = b.length; c < d; c++){
        var e = b[c];
        a1.object.levels.push({
            object: e.object.uuid,
            distance: e.distance
        });
    }
    return a1;
};
THREE.Sprite = function() {
    var a1 = new Uint16Array([
        0,
        1,
        2,
        0,
        2,
        3
    ]), b = new Float32Array([
        -0.5,
        -0.5,
        0,
        .5,
        -0.5,
        0,
        .5,
        .5,
        0,
        -0.5,
        .5,
        0
    ]), c = new Float32Array([
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1
    ]), d = new THREE.BufferGeometry;
    d.setIndex(new THREE.BufferAttribute(a1, 1));
    d.addAttribute("position", new THREE.BufferAttribute(b, 3));
    d.addAttribute("uv", new THREE.BufferAttribute(c, 2));
    return function(a1) {
        THREE.Object3D.call(this);
        this.type = "Sprite";
        this.geometry = d;
        this.material = void 0 !== a1 ? a1 : new THREE.SpriteMaterial;
    };
}();
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.constructor = THREE.Sprite;
THREE.Sprite.prototype.raycast = function() {
    var a1 = new THREE.Vector3;
    return function(b, c) {
        a1.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.distanceSqToPoint(a1);
        d > this.scale.x * this.scale.y || c.push({
            distance: Math.sqrt(d),
            point: this.position,
            face: null,
            object: this
        });
    };
}();
THREE.Sprite.prototype.clone = function() {
    return new this.constructor(this.material).copy(this);
};
THREE.Sprite.prototype.toJSON = function(a1) {
    var b = THREE.Object3D.prototype.toJSON.call(this, a1);
    void 0 === a1.materials[this.material.uuid] && (a1.materials[this.material.uuid] = this.material.toJSON());
    b.object.material = this.material.uuid;
    return b;
};
THREE.Particle = THREE.Sprite;
THREE.LensFlare = function(a1, b, c, d, e) {
    THREE.Object3D.call(this);
    this.lensFlares = [];
    this.positionScreen = new THREE.Vector3;
    this.customUpdateCallback = void 0;
    void 0 !== a1 && this.add(a1, b, c, d, e);
};
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.constructor = THREE.LensFlare;
THREE.LensFlare.prototype.add = function(a1, b, c, d, e, g) {
    void 0 === b && (b = -1);
    void 0 === c && (c = 0);
    void 0 === g && (g = 1);
    void 0 === e && (e = new THREE.Color(16777215));
    void 0 === d && (d = THREE.NormalBlending);
    c = Math.min(c, Math.max(0, c));
    this.lensFlares.push({
        texture: a1,
        size: b,
        distance: c,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 0,
        opacity: g,
        color: e,
        blending: d
    });
};
THREE.LensFlare.prototype.updateLensFlares = function() {
    var a1, b = this.lensFlares.length, c, d = 2 * -this.positionScreen.x, e = 2 * -this.positionScreen.y;
    for(a1 = 0; a1 < b; a1++)c = this.lensFlares[a1], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = c.x * Math.PI * .25, c.rotation += .25 * (c.wantedRotation - c.rotation);
};
THREE.LensFlare.prototype.copy = function(a1) {
    THREE.Object3D.prototype.copy.call(this, a1);
    this.positionScreen.copy(a1.positionScreen);
    this.customUpdateCallback = a1.customUpdateCallback;
    for(var b = 0, c = a1.lensFlares.length; b < c; b++)this.lensFlares.push(a1.lensFlares[b]);
    return this;
};
THREE.Scene = function() {
    THREE.Object3D.call(this);
    this.type = "Scene";
    this.overrideMaterial = this.fog = null;
    this.autoUpdate = !0;
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.copy = function(a1) {
    THREE.Object3D.prototype.copy.call(this, a1);
    null !== a1.fog && (this.fog = a1.fog.clone());
    null !== a1.overrideMaterial && (this.overrideMaterial = a1.overrideMaterial.clone());
    this.autoUpdate = a1.autoUpdate;
    this.matrixAutoUpdate = a1.matrixAutoUpdate;
    return this;
};
THREE.Fog = function(a1, b, c) {
    this.name = "";
    this.color = new THREE.Color(a1);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== c ? c : 1E3;
};
THREE.Fog.prototype.clone = function() {
    return new THREE.Fog(this.color.getHex(), this.near, this.far);
};
THREE.FogExp2 = function(a1, b) {
    this.name = "";
    this.color = new THREE.Color(a1);
    this.density = void 0 !== b ? b : 2.5E-4;
};
THREE.FogExp2.prototype.clone = function() {
    return new THREE.FogExp2(this.color.getHex(), this.density);
};
THREE.ShaderChunk = {};
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n";
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n	if ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";
THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\n	totalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n";
THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n\n#endif";
THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n";
THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n";
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n	// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n	// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;		// normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n";
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif";
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n";
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif";
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n	vColor.xyz = color.xyz;\n\n#endif";
THREE.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	float distance = dot( planeNormal, point - pointOnPlane );\n\n	return - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n	if ( decayExponent > 0.0 ) {\n\n	  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n	}\n\n	return 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n	// Original approximation by Christophe Schlick '94\n	//;float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n	// Optimized variant (presented by Epic at SIGGRAPH '13)\n	float fresnel = exp2( ( -5.55437 * dotLH - 6.98316 ) * dotLH );\n\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n	// geometry term is (n\u22C5l)(n\u22C5v) / 4(n\u22C5l)(n\u22C5v)\n\n	return 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n	// factor of 1/PI in distribution term omitted\n\n	return ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n	vec3 halfDir = normalize( lightDir + viewDir );\n\n	//float dotNL = saturate( dot( normal, lightDir ) );\n	//float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( lightDir, halfDir ) );\n\n	vec3 F = F_Schlick( specularColor, dotLH );\n\n	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n	float D = D_BlinnPhong( shininess, dotNH );\n\n	return F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n	#ifdef GAMMA_INPUT\n\n		return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n	#ifdef GAMMA_OUTPUT\n\n		return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n";
THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";
THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n";
THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n\n#endif\n";
THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n	emissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n	totalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n";
THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\n	uniform sampler2D emissiveMap;\n\n#endif\n";
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		// Transforming Normal Vectors with the Inverse Transformation\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#else\n		float flipNormal = 1.0;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n\n	envColor.xyz = inputToLinear( envColor.xyz );\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		uniform float refractionRatio;\n\n	#else\n\n		varying vec3 vReflect;\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	varying vec3 vReflect;\n\n	uniform float refractionRatio;\n\n#endif\n";
THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	vec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n	#ifdef ENVMAP_MODE_REFLECTION\n\n		vReflect = reflect( cameraToVertex, worldNormal );\n\n	#else\n\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n	\n	outgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif";
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n	totalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n";
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n\n#endif";
THREE.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n";
THREE.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lVector = pointLightPosition[ i ] - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		// attenuation\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n			// attenuation\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n			// diffuse\n\n			float dotProduct = dot( normal, lightDir );\n\n			vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n			#ifdef DOUBLE_SIDED\n\n				vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n			#endif\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		#ifdef DOUBLE_SIDED\n\n			float hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n		#endif\n\n	}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack += ambientLightColor;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_fragment = "#ifndef FLAT_SHADED\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n	#endif\n\n#else\n\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lightPosition = pointLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		// attenuation\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		// diffuse\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n		// specular\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n			// attenuation\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n			// diffuse\n\n			float cosineTerm = saturate( dot( normal, lightDir ) );\n\n			totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n			// specular\n\n			vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n			totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n		// diffuse\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * cosineTerm;\n\n		// specular\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		totalDiffuseLight += lightColor;\n\n		// specular (sky term only)\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * max( dotProduct, 0.0 );\n\n	}\n\n#endif\n\n#ifdef METAL\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;\n\n#else\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	vWorldPosition = worldPosition.xyz;\n\n#endif\n";
THREE.ShaderChunk.linear_to_gamma_fragment = "\n	outgoingLight = linearToOutput( outgoingLight );\n";
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif";
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif";
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n\n	diffuseColor *= texelColor;\n\n#endif\n";
THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n";
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n";
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif";
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n	// Per-Pixel Tangent Space Normal Mapping\n	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n";
THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";
THREE.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n	#ifdef SHADOWMAP_DEBUG\n\n		vec3 frustumColors[3];\n		frustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n		frustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n		frustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n	#endif\n\n	float fDepth;\n	vec3 shadowColor = vec3( 1.0 );\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n				// if ( something && something ) breaks ATI OpenGL shader compiler\n				// if ( all( something, something ) ) using this instead\n\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n		bool frustumTest = all( frustumTestVec );\n\n		if ( frustumTest ) {\n\n			shadowCoord.z += shadowBias[ i ];\n\n			#if defined( SHADOWMAP_TYPE_PCF )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n		/*\n						// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n						// must enroll loop manually\n\n				for ( float y = -1.25; y <= 1.25; y += 1.25 )\n					for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n						vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n								// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n								//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n						float fDepth = unpackDepth( rgbaDepth );\n\n						if ( fDepth < shadowCoord.z )\n							shadow += 1.0;\n\n				}\n\n				shadow /= 9.0;\n\n		*/\n\n				const float shadowDelta = 1.0 / 9.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.25 * xPixelOffset;\n				float dy0 = -1.25 * yPixelOffset;\n				float dx1 = 1.25 * xPixelOffset;\n				float dy1 = 1.25 * yPixelOffset;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.0 * xPixelOffset;\n				float dy0 = -1.0 * yPixelOffset;\n				float dx1 = 1.0 * xPixelOffset;\n				float dy1 = 1.0 * yPixelOffset;\n\n				mat3 shadowKernel;\n				mat3 depthKernel;\n\n				depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n				vec3 shadowZ = vec3( shadowCoord.z );\n				shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n				shadowKernel[0] *= vec3(0.25);\n\n				shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n				shadowKernel[1] *= vec3(0.25);\n\n				shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n				shadowKernel[2] *= vec3(0.25);\n\n				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n				shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n				shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n				vec4 shadowValues;\n				shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n				shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n				shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n				shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n				shadow = dot( shadowValues, vec4( 1.0 ) );\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#else\n\n				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n				float fDepth = unpackDepth( rgbaDepth );\n\n				if ( fDepth < shadowCoord.z )\n\n		// spot with multiple shadows is darker\n\n					shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n		// spot with multiple shadows has the same color as single shadow spot\n\n		// 					shadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n			#endif\n\n		}\n\n\n		#ifdef SHADOWMAP_DEBUG\n\n			if ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n		#endif\n\n	}\n\n	outgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n	uniform sampler2D shadowMap[ MAX_SHADOWS ];\n	uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform float shadowBias[ MAX_SHADOWS ];\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n	float unpackDepth( const in vec4 rgba_depth ) {\n\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		float depth = dot( rgba_depth, bit_shift );\n		return depth;\n\n	}\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n	uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n	}\n\n#endif";
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n";
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif";
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif";
THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	varying vec2 vUv2;\n\n#endif";
THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n\n#endif";
THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	vUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n\n#endif";
THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n";
THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n	#endif\n\n#endif\n";
THREE.UniformsUtils = {
    merge: function(a1) {
        for(var b = {}, c = 0; c < a1.length; c++){
            var d = this.clone(a1[c]), e;
            for(e in d)b[e] = d[e];
        }
        return b;
    },
    clone: function(a1) {
        var b = {}, c;
        for(c in a1){
            b[c] = {};
            for(var d in a1[c]){
                var e = a1[c][d];
                e instanceof THREE.Color || e instanceof THREE.Vector2 || e instanceof THREE.Vector3 || e instanceof THREE.Vector4 || e instanceof THREE.Matrix3 || e instanceof THREE.Matrix4 || e instanceof THREE.Texture ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e;
            }
        }
        return b;
    }
};
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        specularMap: {
            type: "t",
            value: null
        },
        alphaMap: {
            type: "t",
            value: null
        },
        envMap: {
            type: "t",
            value: null
        },
        flipEnvMap: {
            type: "f",
            value: -1
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refractionRatio: {
            type: "f",
            value: .98
        }
    },
    aomap: {
        aoMap: {
            type: "t",
            value: null
        },
        aoMapIntensity: {
            type: "f",
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            type: "t",
            value: null
        },
        lightMapIntensity: {
            type: "f",
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            type: "t",
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            type: "t",
            value: null
        },
        bumpScale: {
            type: "f",
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            type: "t",
            value: null
        },
        normalScale: {
            type: "v2",
            value: new THREE.Vector2(1, 1)
        }
    },
    displacementmap: {
        displacementMap: {
            type: "t",
            value: null
        },
        displacementScale: {
            type: "f",
            value: 1
        },
        displacementBias: {
            type: "f",
            value: 0
        }
    },
    fog: {
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLightDirection: {
            type: "fv",
            value: []
        },
        directionalLightColor: {
            type: "fv",
            value: []
        },
        hemisphereLightDirection: {
            type: "fv",
            value: []
        },
        hemisphereLightSkyColor: {
            type: "fv",
            value: []
        },
        hemisphereLightGroundColor: {
            type: "fv",
            value: []
        },
        pointLightColor: {
            type: "fv",
            value: []
        },
        pointLightPosition: {
            type: "fv",
            value: []
        },
        pointLightDistance: {
            type: "fv1",
            value: []
        },
        pointLightDecay: {
            type: "fv1",
            value: []
        },
        spotLightColor: {
            type: "fv",
            value: []
        },
        spotLightPosition: {
            type: "fv",
            value: []
        },
        spotLightDirection: {
            type: "fv",
            value: []
        },
        spotLightDistance: {
            type: "fv1",
            value: []
        },
        spotLightAngleCos: {
            type: "fv1",
            value: []
        },
        spotLightExponent: {
            type: "fv1",
            value: []
        },
        spotLightDecay: {
            type: "fv1",
            value: []
        }
    },
    points: {
        psColor: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        scale: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    shadowmap: {
        shadowMap: {
            type: "tv",
            value: []
        },
        shadowMapSize: {
            type: "v2v",
            value: []
        },
        shadowBias: {
            type: "fv1",
            value: []
        },
        shadowDarkness: {
            type: "fv1",
            value: []
        },
        shadowMatrix: {
            type: "m4v",
            value: []
        }
    }
};
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.aomap,
            THREE.UniformsLib.fog,
            THREE.UniformsLib.shadowmap
        ]),
        vertexShader: [
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.uv_pars_vertex,
            THREE.ShaderChunk.uv2_pars_vertex,
            THREE.ShaderChunk.envmap_pars_vertex,
            THREE.ShaderChunk.color_pars_vertex,
            THREE.ShaderChunk.morphtarget_pars_vertex,
            THREE.ShaderChunk.skinning_pars_vertex,
            THREE.ShaderChunk.shadowmap_pars_vertex,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {",
            THREE.ShaderChunk.uv_vertex,
            THREE.ShaderChunk.uv2_vertex,
            THREE.ShaderChunk.color_vertex,
            THREE.ShaderChunk.skinbase_vertex,
            "	#ifdef USE_ENVMAP",
            THREE.ShaderChunk.beginnormal_vertex,
            THREE.ShaderChunk.morphnormal_vertex,
            THREE.ShaderChunk.skinnormal_vertex,
            THREE.ShaderChunk.defaultnormal_vertex,
            "	#endif",
            THREE.ShaderChunk.begin_vertex,
            THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.skinning_vertex,
            THREE.ShaderChunk.project_vertex,
            THREE.ShaderChunk.logdepthbuf_vertex,
            THREE.ShaderChunk.worldpos_vertex,
            THREE.ShaderChunk.envmap_vertex,
            THREE.ShaderChunk.shadowmap_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "uniform vec3 diffuse;\nuniform float opacity;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.color_pars_fragment,
            THREE.ShaderChunk.uv_pars_fragment,
            THREE.ShaderChunk.uv2_pars_fragment,
            THREE.ShaderChunk.map_pars_fragment,
            THREE.ShaderChunk.alphamap_pars_fragment,
            THREE.ShaderChunk.aomap_pars_fragment,
            THREE.ShaderChunk.envmap_pars_fragment,
            THREE.ShaderChunk.fog_pars_fragment,
            THREE.ShaderChunk.shadowmap_pars_fragment,
            THREE.ShaderChunk.specularmap_pars_fragment,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	vec3 totalAmbientLight = vec3( 1.0 );",
            THREE.ShaderChunk.logdepthbuf_fragment,
            THREE.ShaderChunk.map_fragment,
            THREE.ShaderChunk.color_fragment,
            THREE.ShaderChunk.alphamap_fragment,
            THREE.ShaderChunk.alphatest_fragment,
            THREE.ShaderChunk.specularmap_fragment,
            THREE.ShaderChunk.aomap_fragment,
            "	outgoingLight = diffuseColor.rgb * totalAmbientLight;",
            THREE.ShaderChunk.envmap_fragment,
            THREE.ShaderChunk.shadowmap_fragment,
            THREE.ShaderChunk.linear_to_gamma_fragment,
            THREE.ShaderChunk.fog_fragment,
            "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"
        ].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.fog,
            THREE.UniformsLib.lights,
            THREE.UniformsLib.shadowmap,
            {
                emissive: {
                    type: "c",
                    value: new THREE.Color(0)
                }
            }
        ]),
        vertexShader: [
            "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.uv_pars_vertex,
            THREE.ShaderChunk.uv2_pars_vertex,
            THREE.ShaderChunk.envmap_pars_vertex,
            THREE.ShaderChunk.lights_lambert_pars_vertex,
            THREE.ShaderChunk.color_pars_vertex,
            THREE.ShaderChunk.morphtarget_pars_vertex,
            THREE.ShaderChunk.skinning_pars_vertex,
            THREE.ShaderChunk.shadowmap_pars_vertex,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {",
            THREE.ShaderChunk.uv_vertex,
            THREE.ShaderChunk.uv2_vertex,
            THREE.ShaderChunk.color_vertex,
            THREE.ShaderChunk.beginnormal_vertex,
            THREE.ShaderChunk.morphnormal_vertex,
            THREE.ShaderChunk.skinbase_vertex,
            THREE.ShaderChunk.skinnormal_vertex,
            THREE.ShaderChunk.defaultnormal_vertex,
            THREE.ShaderChunk.begin_vertex,
            THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.skinning_vertex,
            THREE.ShaderChunk.project_vertex,
            THREE.ShaderChunk.logdepthbuf_vertex,
            THREE.ShaderChunk.worldpos_vertex,
            THREE.ShaderChunk.envmap_vertex,
            THREE.ShaderChunk.lights_lambert_vertex,
            THREE.ShaderChunk.shadowmap_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.color_pars_fragment,
            THREE.ShaderChunk.uv_pars_fragment,
            THREE.ShaderChunk.uv2_pars_fragment,
            THREE.ShaderChunk.map_pars_fragment,
            THREE.ShaderChunk.alphamap_pars_fragment,
            THREE.ShaderChunk.envmap_pars_fragment,
            THREE.ShaderChunk.fog_pars_fragment,
            THREE.ShaderChunk.shadowmap_pars_fragment,
            THREE.ShaderChunk.specularmap_pars_fragment,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );",
            THREE.ShaderChunk.logdepthbuf_fragment,
            THREE.ShaderChunk.map_fragment,
            THREE.ShaderChunk.color_fragment,
            THREE.ShaderChunk.alphamap_fragment,
            THREE.ShaderChunk.alphatest_fragment,
            THREE.ShaderChunk.specularmap_fragment,
            "	#ifdef DOUBLE_SIDED\n		if ( gl_FrontFacing )\n			outgoingLight += diffuseColor.rgb * vLightFront + emissive;\n		else\n			outgoingLight += diffuseColor.rgb * vLightBack + emissive;\n	#else\n		outgoingLight += diffuseColor.rgb * vLightFront + emissive;\n	#endif",
            THREE.ShaderChunk.envmap_fragment,
            THREE.ShaderChunk.shadowmap_fragment,
            THREE.ShaderChunk.linear_to_gamma_fragment,
            THREE.ShaderChunk.fog_fragment,
            "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"
        ].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.aomap,
            THREE.UniformsLib.lightmap,
            THREE.UniformsLib.emissivemap,
            THREE.UniformsLib.bumpmap,
            THREE.UniformsLib.normalmap,
            THREE.UniformsLib.displacementmap,
            THREE.UniformsLib.fog,
            THREE.UniformsLib.lights,
            THREE.UniformsLib.shadowmap,
            {
                emissive: {
                    type: "c",
                    value: new THREE.Color(0)
                },
                specular: {
                    type: "c",
                    value: new THREE.Color(1118481)
                },
                shininess: {
                    type: "f",
                    value: 30
                }
            }
        ]),
        vertexShader: [
            "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.uv_pars_vertex,
            THREE.ShaderChunk.uv2_pars_vertex,
            THREE.ShaderChunk.displacementmap_pars_vertex,
            THREE.ShaderChunk.envmap_pars_vertex,
            THREE.ShaderChunk.lights_phong_pars_vertex,
            THREE.ShaderChunk.color_pars_vertex,
            THREE.ShaderChunk.morphtarget_pars_vertex,
            THREE.ShaderChunk.skinning_pars_vertex,
            THREE.ShaderChunk.shadowmap_pars_vertex,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {",
            THREE.ShaderChunk.uv_vertex,
            THREE.ShaderChunk.uv2_vertex,
            THREE.ShaderChunk.color_vertex,
            THREE.ShaderChunk.beginnormal_vertex,
            THREE.ShaderChunk.morphnormal_vertex,
            THREE.ShaderChunk.skinbase_vertex,
            THREE.ShaderChunk.skinnormal_vertex,
            THREE.ShaderChunk.defaultnormal_vertex,
            "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif",
            THREE.ShaderChunk.begin_vertex,
            THREE.ShaderChunk.displacementmap_vertex,
            THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.skinning_vertex,
            THREE.ShaderChunk.project_vertex,
            THREE.ShaderChunk.logdepthbuf_vertex,
            "	vViewPosition = - mvPosition.xyz;",
            THREE.ShaderChunk.worldpos_vertex,
            THREE.ShaderChunk.envmap_vertex,
            THREE.ShaderChunk.lights_phong_vertex,
            THREE.ShaderChunk.shadowmap_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.color_pars_fragment,
            THREE.ShaderChunk.uv_pars_fragment,
            THREE.ShaderChunk.uv2_pars_fragment,
            THREE.ShaderChunk.map_pars_fragment,
            THREE.ShaderChunk.alphamap_pars_fragment,
            THREE.ShaderChunk.aomap_pars_fragment,
            THREE.ShaderChunk.lightmap_pars_fragment,
            THREE.ShaderChunk.emissivemap_pars_fragment,
            THREE.ShaderChunk.envmap_pars_fragment,
            THREE.ShaderChunk.fog_pars_fragment,
            THREE.ShaderChunk.lights_phong_pars_fragment,
            THREE.ShaderChunk.shadowmap_pars_fragment,
            THREE.ShaderChunk.bumpmap_pars_fragment,
            THREE.ShaderChunk.normalmap_pars_fragment,
            THREE.ShaderChunk.specularmap_pars_fragment,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	vec3 totalAmbientLight = ambientLightColor;\n	vec3 totalEmissiveLight = emissive;",
            THREE.ShaderChunk.logdepthbuf_fragment,
            THREE.ShaderChunk.map_fragment,
            THREE.ShaderChunk.color_fragment,
            THREE.ShaderChunk.alphamap_fragment,
            THREE.ShaderChunk.alphatest_fragment,
            THREE.ShaderChunk.specularmap_fragment,
            THREE.ShaderChunk.lightmap_fragment,
            THREE.ShaderChunk.aomap_fragment,
            THREE.ShaderChunk.emissivemap_fragment,
            THREE.ShaderChunk.lights_phong_fragment,
            THREE.ShaderChunk.envmap_fragment,
            THREE.ShaderChunk.shadowmap_fragment,
            THREE.ShaderChunk.linear_to_gamma_fragment,
            THREE.ShaderChunk.fog_fragment,
            "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"
        ].join("\n")
    },
    points: {
        uniforms: THREE.UniformsUtils.merge([
            THREE.UniformsLib.points,
            THREE.UniformsLib.shadowmap
        ]),
        vertexShader: [
            "uniform float size;\nuniform float scale;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.color_pars_vertex,
            THREE.ShaderChunk.shadowmap_pars_vertex,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {",
            THREE.ShaderChunk.color_vertex,
            "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n	#else\n		gl_PointSize = size;\n	#endif\n	gl_Position = projectionMatrix * mvPosition;",
            THREE.ShaderChunk.logdepthbuf_vertex,
            THREE.ShaderChunk.worldpos_vertex,
            THREE.ShaderChunk.shadowmap_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "uniform vec3 psColor;\nuniform float opacity;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.color_pars_fragment,
            THREE.ShaderChunk.map_particle_pars_fragment,
            THREE.ShaderChunk.fog_pars_fragment,
            THREE.ShaderChunk.shadowmap_pars_fragment,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( psColor, opacity );",
            THREE.ShaderChunk.logdepthbuf_fragment,
            THREE.ShaderChunk.map_particle_fragment,
            THREE.ShaderChunk.color_fragment,
            THREE.ShaderChunk.alphatest_fragment,
            "	outgoingLight = diffuseColor.rgb;",
            THREE.ShaderChunk.shadowmap_fragment,
            THREE.ShaderChunk.fog_fragment,
            "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"
        ].join("\n")
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.fog,
            {
                scale: {
                    type: "f",
                    value: 1
                },
                dashSize: {
                    type: "f",
                    value: 1
                },
                totalSize: {
                    type: "f",
                    value: 2
                }
            }
        ]),
        vertexShader: [
            "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.color_pars_vertex,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {",
            THREE.ShaderChunk.color_vertex,
            "	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;",
            THREE.ShaderChunk.logdepthbuf_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.color_pars_fragment,
            THREE.ShaderChunk.fog_pars_fragment,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );",
            THREE.ShaderChunk.logdepthbuf_fragment,
            THREE.ShaderChunk.color_fragment,
            "	outgoingLight = diffuseColor.rgb;",
            THREE.ShaderChunk.fog_fragment,
            "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"
        ].join("\n")
    },
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2E3
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: [
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.morphtarget_pars_vertex,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {",
            THREE.ShaderChunk.begin_vertex,
            THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.project_vertex,
            THREE.ShaderChunk.logdepthbuf_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "uniform float mNear;\nuniform float mFar;\nuniform float opacity;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {",
            THREE.ShaderChunk.logdepthbuf_fragment,
            "	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	float color = 1.0 - smoothstep( mNear, mFar, depth );\n	gl_FragColor = vec4( vec3( color ), opacity );\n}"
        ].join("\n")
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: [
            "varying vec3 vNormal;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.morphtarget_pars_vertex,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {\n	vNormal = normalize( normalMatrix * normal );",
            THREE.ShaderChunk.begin_vertex,
            THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.project_vertex,
            THREE.ShaderChunk.logdepthbuf_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "uniform float opacity;\nvarying vec3 vNormal;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {\n	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",
            THREE.ShaderChunk.logdepthbuf_fragment,
            "}"
        ].join("\n")
    },
    cube: {
        uniforms: {
            tCube: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: [
            "varying vec3 vWorldPosition;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
            THREE.ShaderChunk.logdepthbuf_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
            THREE.ShaderChunk.logdepthbuf_fragment,
            "}"
        ].join("\n")
    },
    equirect: {
        uniforms: {
            tEquirect: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: [
            "varying vec3 vWorldPosition;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
            THREE.ShaderChunk.logdepthbuf_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",
            THREE.ShaderChunk.logdepthbuf_fragment,
            "}"
        ].join("\n")
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.morphtarget_pars_vertex,
            THREE.ShaderChunk.skinning_pars_vertex,
            THREE.ShaderChunk.logdepthbuf_pars_vertex,
            "void main() {",
            THREE.ShaderChunk.skinbase_vertex,
            THREE.ShaderChunk.begin_vertex,
            THREE.ShaderChunk.morphtarget_vertex,
            THREE.ShaderChunk.skinning_vertex,
            THREE.ShaderChunk.project_vertex,
            THREE.ShaderChunk.logdepthbuf_vertex,
            "}"
        ].join("\n"),
        fragmentShader: [
            THREE.ShaderChunk.common,
            THREE.ShaderChunk.logdepthbuf_pars_fragment,
            "vec4 pack_depth( const in float depth ) {\n	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n	res -= res.xxyz * bit_mask;\n	return res;\n}\nvoid main() {",
            THREE.ShaderChunk.logdepthbuf_fragment,
            "	#ifdef USE_LOGDEPTHBUF_EXT\n		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n	#else\n		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n	#endif\n}"
        ].join("\n")
    }
};
THREE.WebGLRenderer = function(a1) {
    function b(a1, b, c, d) {
        !0 === Q && (a1 *= d, b *= d, c *= d);
        s.clearColor(a1, b, c, d);
    }
    function c() {
        M.init();
        s.viewport(Ja, Ka, ta, ua);
        b(A.r, A.g, A.b, ia);
    }
    function d() {
        Sa = ib = null;
        pa = "";
        Ta = -1;
        db = !0;
        M.reset();
    }
    function e(a1) {
        a1.preventDefault();
        d();
        c();
        Y.clear();
    }
    function g(a1) {
        a1 = a1.target;
        a1.removeEventListener("dispose", g);
        a: {
            var b = Y.get(a1);
            if (a1.image && b.__image__webglTextureCube) s.deleteTexture(b.__image__webglTextureCube);
            else {
                if (void 0 === b.__webglInit) break a;
                s.deleteTexture(b.__webglTexture);
            }
            Y.delete(a1);
        }
        La.textures--;
    }
    function f(a1) {
        a1 = a1.target;
        a1.removeEventListener("dispose", f);
        var b = Y.get(a1);
        if (a1 && void 0 !== b.__webglTexture) {
            s.deleteTexture(b.__webglTexture);
            if (a1 instanceof THREE.WebGLRenderTargetCube) for(var c = 0; 6 > c; c++)s.deleteFramebuffer(b.__webglFramebuffer[c]), s.deleteRenderbuffer(b.__webglRenderbuffer[c]);
            else s.deleteFramebuffer(b.__webglFramebuffer), s.deleteRenderbuffer(b.__webglRenderbuffer);
            Y.delete(a1);
        }
        La.textures--;
    }
    function h(a1) {
        a1 = a1.target;
        a1.removeEventListener("dispose", h);
        k(a1);
        Y.delete(a1);
    }
    function k(a1) {
        var b = Y.get(a1).program;
        a1.program = void 0;
        void 0 !== b && Ua.releaseProgram(b);
    }
    function l(a1, b) {
        return b[0] - a1[0];
    }
    function n(a1, b) {
        return a1.object.renderOrder !== b.object.renderOrder ? a1.object.renderOrder - b.object.renderOrder : a1.material.id !== b.material.id ? a1.material.id - b.material.id : a1.z !== b.z ? a1.z - b.z : a1.id - b.id;
    }
    function p(a1, b) {
        return a1.object.renderOrder !== b.object.renderOrder ? a1.object.renderOrder - b.object.renderOrder : a1.z !== b.z ? b.z - a1.z : a1.id - b.id;
    }
    function m(a1, b, c, d, e) {
        var f;
        c.transparent ? (d = va, f = ++ma) : (d = fa, f = ++V);
        f = d[f];
        void 0 !== f ? (f.id = a1.id, f.object = a1, f.geometry = b, f.material = c, f.z = $.z, f.group = e) : (f = {
            id: a1.id,
            object: a1,
            geometry: b,
            material: c,
            z: $.z,
            group: e
        }, d.push(f));
    }
    function q(a1) {
        if (!1 !== a1.visible) {
            if (a1 instanceof THREE.Light) Z.push(a1);
            else if (a1 instanceof THREE.Sprite) Ba.push(a1);
            else if (a1 instanceof THREE.LensFlare) Va.push(a1);
            else if (a1 instanceof THREE.ImmediateRenderObject) {
                var b, c;
                a1.material.transparent ? (b = wa, c = ++qa) : (b = ja, c = ++Ca);
                c < b.length ? b[c] = a1 : b.push(a1);
            } else if (a1 instanceof THREE.Mesh || a1 instanceof THREE.Line || a1 instanceof THREE.Points) {
                if (a1 instanceof THREE.SkinnedMesh && a1.skeleton.update(), !1 === a1.frustumCulled || !0 === Wa.intersectsObject(a1)) {
                    var d = a1.material;
                    if (!0 === d.visible) {
                        if (!0 === la.sortObjects && ($.setFromMatrixPosition(a1.matrixWorld), $.applyProjection(Da)), b = Ea.update(a1), d instanceof THREE.MeshFaceMaterial) {
                            c = b.groups;
                            for(var e = d.materials, d = 0, f = c.length; d < f; d++){
                                var g = c[d], h = e[g.materialIndex];
                                !0 === h.visible && m(a1, b, h, $.z, g);
                            }
                        } else m(a1, b, d, $.z);
                    }
                }
            }
            a1 = a1.children;
            d = 0;
            for(f = a1.length; d < f; d++)q(a1[d]);
        }
    }
    function t(a1, b, c, d, e) {
        for(var f = 0, g = a1.length; f < g; f++){
            var h = a1[f], k = h.object, l = h.geometry, m = void 0 === e ? h.material : e, h = h.group;
            k.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, k.matrixWorld);
            k.normalMatrix.getNormalMatrix(k.modelViewMatrix);
            la.renderBufferDirect(b, c, d, l, m, k, h);
        }
    }
    function r(a1, b, c, d, e) {
        for(var f = e, g = 0, h = a1.length; g < h; g++){
            var k = a1[g];
            k.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, k.matrixWorld);
            k.normalMatrix.getNormalMatrix(k.modelViewMatrix);
            void 0 === e && (f = k.material);
            u(f);
            var l = w(b, c, d, f, k);
            pa = "";
            k.render(function(a1) {
                la.renderBufferImmediate(a1, l, f);
            });
        }
    }
    function u(a1) {
        a1.side !== THREE.DoubleSide ? M.enable(s.CULL_FACE) : M.disable(s.CULL_FACE);
        M.setFlipSided(a1.side === THREE.BackSide);
        !0 === a1.transparent ? M.setBlending(a1.blending, a1.blendEquation, a1.blendSrc, a1.blendDst, a1.blendEquationAlpha, a1.blendSrcAlpha, a1.blendDstAlpha) : M.setBlending(THREE.NoBlending);
        M.setDepthFunc(a1.depthFunc);
        M.setDepthTest(a1.depthTest);
        M.setDepthWrite(a1.depthWrite);
        M.setColorWrite(a1.colorWrite);
        M.setPolygonOffset(a1.polygonOffset, a1.polygonOffsetFactor, a1.polygonOffsetUnits);
    }
    function w(a1, b, c, d, e) {
        eb = 0;
        var f = Y.get(d);
        if (d.needsUpdate || !f.program) {
            a: {
                var l = Y.get(d), m = Ua.getParameters(d, b, c, e), n = Ua.getProgramCode(d, m), q = l.program, p = !0;
                if (void 0 === q) d.addEventListener("dispose", h);
                else if (q.code !== n) k(d);
                else if (void 0 !== m.shaderID) break a;
                else p = !1;
                if (p) {
                    if (m.shaderID) {
                        var t = THREE.ShaderLib[m.shaderID];
                        l.__webglShader = {
                            name: d.type,
                            uniforms: THREE.UniformsUtils.clone(t.uniforms),
                            vertexShader: t.vertexShader,
                            fragmentShader: t.fragmentShader
                        };
                    } else l.__webglShader = {
                        name: d.type,
                        uniforms: d.uniforms,
                        vertexShader: d.vertexShader,
                        fragmentShader: d.fragmentShader
                    };
                    d.__webglShader = l.__webglShader;
                    q = Ua.acquireProgram(d, m, n);
                    l.program = q;
                    d.program = q;
                }
                var r = q.getAttributes();
                if (d.morphTargets) for(var w = d.numSupportedMorphTargets = 0; w < la.maxMorphTargets; w++)0 <= r["morphTarget" + w] && d.numSupportedMorphTargets++;
                if (d.morphNormals) for(w = d.numSupportedMorphNormals = 0; w < la.maxMorphNormals; w++)0 <= r["morphNormal" + w] && d.numSupportedMorphNormals++;
                l.uniformsList = [];
                var u = l.program.getUniforms(), G;
                for(G in l.__webglShader.uniforms){
                    var z = u[G];
                    z && l.uniformsList.push([
                        l.__webglShader.uniforms[G],
                        z
                    ]);
                }
            }
            d.needsUpdate = !1;
        }
        var D = !1, E = !1, K = !1, J = f.program, A = J.getUniforms(), y = f.__webglShader.uniforms;
        J.id !== ib && (s.useProgram(J.program), ib = J.id, K = E = D = !0);
        d.id !== Ta && (-1 === Ta && (K = !0), Ta = d.id, E = !0);
        if (D || a1 !== Sa) s.uniformMatrix4fv(A.projectionMatrix, !1, a1.projectionMatrix.elements), na.logarithmicDepthBuffer && s.uniform1f(A.logDepthBufFC, 2 / (Math.log(a1.far + 1) / Math.LN2)), a1 !== Sa && (Sa = a1), (d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && void 0 !== A.cameraPosition && ($.setFromMatrixPosition(a1.matrixWorld), s.uniform3f(A.cameraPosition, $.x, $.y, $.z)), (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshBasicMaterial || d instanceof THREE.ShaderMaterial || d.skinning) && void 0 !== A.viewMatrix && s.uniformMatrix4fv(A.viewMatrix, !1, a1.matrixWorldInverse.elements);
        if (d.skinning) {
            if (e.bindMatrix && void 0 !== A.bindMatrix && s.uniformMatrix4fv(A.bindMatrix, !1, e.bindMatrix.elements), e.bindMatrixInverse && void 0 !== A.bindMatrixInverse && s.uniformMatrix4fv(A.bindMatrixInverse, !1, e.bindMatrixInverse.elements), na.floatVertexTextures && e.skeleton && e.skeleton.useVertexTexture) {
                if (void 0 !== A.boneTexture) {
                    var P = B();
                    s.uniform1i(A.boneTexture, P);
                    la.setTexture(e.skeleton.boneTexture, P);
                }
                void 0 !== A.boneTextureWidth && s.uniform1i(A.boneTextureWidth, e.skeleton.boneTextureWidth);
                void 0 !== A.boneTextureHeight && s.uniform1i(A.boneTextureHeight, e.skeleton.boneTextureHeight);
            } else e.skeleton && e.skeleton.boneMatrices && void 0 !== A.boneGlobalMatrices && s.uniformMatrix4fv(A.boneGlobalMatrices, !1, e.skeleton.boneMatrices);
        }
        if (E) {
            c && d.fog && (y.fogColor.value = c.color, c instanceof THREE.Fog ? (y.fogNear.value = c.near, y.fogFar.value = c.far) : c instanceof THREE.FogExp2 && (y.fogDensity.value = c.density));
            if (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d.lights) {
                if (db) {
                    var K = !0, F, L, V, Q = 0, U = 0, R = 0, ja, X, va, ma, Z, aa = tb, qa = a1.matrixWorldInverse, Ca = aa.directional.colors, Ba = aa.directional.positions, wa = aa.point.colors, Ra = aa.point.positions, Va = aa.point.distances, ia = aa.point.decays, fa = aa.spot.colors, ga = aa.spot.positions, sa = aa.spot.distances, pa = aa.spot.directions, Ea = aa.spot.anglesCos, Ja = aa.spot.exponents, Ka = aa.spot.decays, ta = aa.hemi.skyColors, ua = aa.hemi.groundColors, Aa = aa.hemi.positions, Xa = 0, Fa = 0, ra = 0, Ma = 0, Da = 0, jb = 0, kb = 0, fb = 0, Ya = 0, Za = 0, xa = 0, Na = 0;
                    F = 0;
                    for(L = b.length; F < L; F++)V = b[F], V.onlyShadow || (ja = V.color, ma = V.intensity, Z = V.distance, V instanceof THREE.AmbientLight ? V.visible && (Q += ja.r, U += ja.g, R += ja.b) : V instanceof THREE.DirectionalLight ? (Da += 1, V.visible && (ca.setFromMatrixPosition(V.matrixWorld), $.setFromMatrixPosition(V.target.matrixWorld), ca.sub($), ca.transformDirection(qa), Ya = 3 * Xa, Ba[Ya + 0] = ca.x, Ba[Ya + 1] = ca.y, Ba[Ya + 2] = ca.z, x(Ca, Ya, ja, ma), Xa += 1)) : V instanceof THREE.PointLight ? (jb += 1, V.visible && (Za = 3 * Fa, x(wa, Za, ja, ma), $.setFromMatrixPosition(V.matrixWorld), $.applyMatrix4(qa), Ra[Za + 0] = $.x, Ra[Za + 1] = $.y, Ra[Za + 2] = $.z, Va[Fa] = Z, ia[Fa] = 0 === V.distance ? 0 : V.decay, Fa += 1)) : V instanceof THREE.SpotLight ? (kb += 1, V.visible && (xa = 3 * ra, x(fa, xa, ja, ma), ca.setFromMatrixPosition(V.matrixWorld), $.copy(ca).applyMatrix4(qa), ga[xa + 0] = $.x, ga[xa + 1] = $.y, ga[xa + 2] = $.z, sa[ra] = Z, $.setFromMatrixPosition(V.target.matrixWorld), ca.sub($), ca.transformDirection(qa), pa[xa + 0] = ca.x, pa[xa + 1] = ca.y, pa[xa + 2] = ca.z, Ea[ra] = Math.cos(V.angle), Ja[ra] = V.exponent, Ka[ra] = 0 === V.distance ? 0 : V.decay, ra += 1)) : V instanceof THREE.HemisphereLight && (fb += 1, V.visible && (ca.setFromMatrixPosition(V.matrixWorld), ca.transformDirection(qa), Na = 3 * Ma, Aa[Na + 0] = ca.x, Aa[Na + 1] = ca.y, Aa[Na + 2] = ca.z, X = V.color, va = V.groundColor, x(ta, Na, X, ma), x(ua, Na, va, ma), Ma += 1)));
                    F = 3 * Xa;
                    for(L = Math.max(Ca.length, 3 * Da); F < L; F++)Ca[F] = 0;
                    F = 3 * Fa;
                    for(L = Math.max(wa.length, 3 * jb); F < L; F++)wa[F] = 0;
                    F = 3 * ra;
                    for(L = Math.max(fa.length, 3 * kb); F < L; F++)fa[F] = 0;
                    F = 3 * Ma;
                    for(L = Math.max(ta.length, 3 * fb); F < L; F++)ta[F] = 0;
                    F = 3 * Ma;
                    for(L = Math.max(ua.length, 3 * fb); F < L; F++)ua[F] = 0;
                    aa.directional.length = Xa;
                    aa.point.length = Fa;
                    aa.spot.length = ra;
                    aa.hemi.length = Ma;
                    aa.ambient[0] = Q;
                    aa.ambient[1] = U;
                    aa.ambient[2] = R;
                    db = !1;
                }
                if (K) {
                    var ea = tb;
                    y.ambientLightColor.value = ea.ambient;
                    y.directionalLightColor.value = ea.directional.colors;
                    y.directionalLightDirection.value = ea.directional.positions;
                    y.pointLightColor.value = ea.point.colors;
                    y.pointLightPosition.value = ea.point.positions;
                    y.pointLightDistance.value = ea.point.distances;
                    y.pointLightDecay.value = ea.point.decays;
                    y.spotLightColor.value = ea.spot.colors;
                    y.spotLightPosition.value = ea.spot.positions;
                    y.spotLightDistance.value = ea.spot.distances;
                    y.spotLightDirection.value = ea.spot.directions;
                    y.spotLightAngleCos.value = ea.spot.anglesCos;
                    y.spotLightExponent.value = ea.spot.exponents;
                    y.spotLightDecay.value = ea.spot.decays;
                    y.hemisphereLightSkyColor.value = ea.hemi.skyColors;
                    y.hemisphereLightGroundColor.value = ea.hemi.groundColors;
                    y.hemisphereLightDirection.value = ea.hemi.positions;
                    v(y, !0);
                } else v(y, !1);
            }
            if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) {
                y.opacity.value = d.opacity;
                y.diffuse.value = d.color;
                d.emissive && (y.emissive.value = d.emissive);
                y.map.value = d.map;
                y.specularMap.value = d.specularMap;
                y.alphaMap.value = d.alphaMap;
                d.aoMap && (y.aoMap.value = d.aoMap, y.aoMapIntensity.value = d.aoMapIntensity);
                var oa;
                d.map ? oa = d.map : d.specularMap ? oa = d.specularMap : d.displacementMap ? oa = d.displacementMap : d.normalMap ? oa = d.normalMap : d.bumpMap ? oa = d.bumpMap : d.alphaMap ? oa = d.alphaMap : d.emissiveMap && (oa = d.emissiveMap);
                if (void 0 !== oa) {
                    var Wa = oa.offset, bb = oa.repeat;
                    y.offsetRepeat.value.set(Wa.x, Wa.y, bb.x, bb.y);
                }
                y.envMap.value = d.envMap;
                y.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
                y.reflectivity.value = d.reflectivity;
                y.refractionRatio.value = d.refractionRatio;
            }
            if (d instanceof THREE.LineBasicMaterial) y.diffuse.value = d.color, y.opacity.value = d.opacity;
            else if (d instanceof THREE.LineDashedMaterial) y.diffuse.value = d.color, y.opacity.value = d.opacity, y.dashSize.value = d.dashSize, y.totalSize.value = d.dashSize + d.gapSize, y.scale.value = d.scale;
            else if (d instanceof THREE.PointsMaterial) {
                if (y.psColor.value = d.color, y.opacity.value = d.opacity, y.size.value = d.size, y.scale.value = C.height / 2, y.map.value = d.map, null !== d.map) {
                    var cb = d.map.offset, ub = d.map.repeat;
                    y.offsetRepeat.value.set(cb.x, cb.y, ub.x, ub.y);
                }
            } else d instanceof THREE.MeshPhongMaterial ? (y.specular.value = d.specular, y.shininess.value = d.shininess, d.lightMap && (y.lightMap.value = d.lightMap, y.lightMapIntensity.value = d.lightMapIntensity), d.emissiveMap && (y.emissiveMap.value = d.emissiveMap), d.bumpMap && (y.bumpMap.value = d.bumpMap, y.bumpScale.value = d.bumpScale), d.normalMap && (y.normalMap.value = d.normalMap, y.normalScale.value.copy(d.normalScale)), d.displacementMap && (y.displacementMap.value = d.displacementMap, y.displacementScale.value = d.displacementScale, y.displacementBias.value = d.displacementBias)) : d instanceof THREE.MeshDepthMaterial ? (y.mNear.value = a1.near, y.mFar.value = a1.far, y.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial && (y.opacity.value = d.opacity);
            if (e.receiveShadow && !d._shadowPass && y.shadowMatrix) for(var Oa = 0, lb = 0, pb = b.length; lb < pb; lb++){
                var ya = b[lb];
                ya.castShadow && (ya instanceof THREE.SpotLight || ya instanceof THREE.DirectionalLight) && (y.shadowMap.value[Oa] = ya.shadowMap, y.shadowMapSize.value[Oa] = ya.shadowMapSize, y.shadowMatrix.value[Oa] = ya.shadowMatrix, y.shadowDarkness.value[Oa] = ya.shadowDarkness, y.shadowBias.value[Oa] = ya.shadowBias, Oa++);
            }
            for(var mb = f.uniformsList, ka, Ga, gb = 0, qb = mb.length; gb < qb; gb++){
                var S = mb[gb][0];
                if (!1 !== S.needsUpdate) {
                    var vb = S.type, N = S.value, W = mb[gb][1];
                    switch(vb){
                        case "1i":
                            s.uniform1i(W, N);
                            break;
                        case "1f":
                            s.uniform1f(W, N);
                            break;
                        case "2f":
                            s.uniform2f(W, N[0], N[1]);
                            break;
                        case "3f":
                            s.uniform3f(W, N[0], N[1], N[2]);
                            break;
                        case "4f":
                            s.uniform4f(W, N[0], N[1], N[2], N[3]);
                            break;
                        case "1iv":
                            s.uniform1iv(W, N);
                            break;
                        case "3iv":
                            s.uniform3iv(W, N);
                            break;
                        case "1fv":
                            s.uniform1fv(W, N);
                            break;
                        case "2fv":
                            s.uniform2fv(W, N);
                            break;
                        case "3fv":
                            s.uniform3fv(W, N);
                            break;
                        case "4fv":
                            s.uniform4fv(W, N);
                            break;
                        case "Matrix3fv":
                            s.uniformMatrix3fv(W, !1, N);
                            break;
                        case "Matrix4fv":
                            s.uniformMatrix4fv(W, !1, N);
                            break;
                        case "i":
                            s.uniform1i(W, N);
                            break;
                        case "f":
                            s.uniform1f(W, N);
                            break;
                        case "v2":
                            s.uniform2f(W, N.x, N.y);
                            break;
                        case "v3":
                            s.uniform3f(W, N.x, N.y, N.z);
                            break;
                        case "v4":
                            s.uniform4f(W, N.x, N.y, N.z, N.w);
                            break;
                        case "c":
                            s.uniform3f(W, N.r, N.g, N.b);
                            break;
                        case "iv1":
                            s.uniform1iv(W, N);
                            break;
                        case "iv":
                            s.uniform3iv(W, N);
                            break;
                        case "fv1":
                            s.uniform1fv(W, N);
                            break;
                        case "fv":
                            s.uniform3fv(W, N);
                            break;
                        case "v2v":
                            void 0 === S._array && (S._array = new Float32Array(2 * N.length));
                            for(var T = 0, hb = 0, ha = N.length; T < ha; T++, hb += 2)S._array[hb + 0] = N[T].x, S._array[hb + 1] = N[T].y;
                            s.uniform2fv(W, S._array);
                            break;
                        case "v3v":
                            void 0 === S._array && (S._array = new Float32Array(3 * N.length));
                            for(var $a = T = 0, ha = N.length; T < ha; T++, $a += 3)S._array[$a + 0] = N[T].x, S._array[$a + 1] = N[T].y, S._array[$a + 2] = N[T].z;
                            s.uniform3fv(W, S._array);
                            break;
                        case "v4v":
                            void 0 === S._array && (S._array = new Float32Array(4 * N.length));
                            for(var Pa = T = 0, ha = N.length; T < ha; T++, Pa += 4)S._array[Pa + 0] = N[T].x, S._array[Pa + 1] = N[T].y, S._array[Pa + 2] = N[T].z, S._array[Pa + 3] = N[T].w;
                            s.uniform4fv(W, S._array);
                            break;
                        case "m3":
                            s.uniformMatrix3fv(W, !1, N.elements);
                            break;
                        case "m3v":
                            void 0 === S._array && (S._array = new Float32Array(9 * N.length));
                            T = 0;
                            for(ha = N.length; T < ha; T++)N[T].flattenToArrayOffset(S._array, 9 * T);
                            s.uniformMatrix3fv(W, !1, S._array);
                            break;
                        case "m4":
                            s.uniformMatrix4fv(W, !1, N.elements);
                            break;
                        case "m4v":
                            void 0 === S._array && (S._array = new Float32Array(16 * N.length));
                            T = 0;
                            for(ha = N.length; T < ha; T++)N[T].flattenToArrayOffset(S._array, 16 * T);
                            s.uniformMatrix4fv(W, !1, S._array);
                            break;
                        case "t":
                            ka = N;
                            Ga = B();
                            s.uniform1i(W, Ga);
                            if (!ka) continue;
                            if (ka instanceof THREE.CubeTexture || Array.isArray(ka.image) && 6 === ka.image.length) {
                                var ba = ka, wb = Ga, Qa = Y.get(ba);
                                if (6 === ba.image.length) {
                                    if (0 < ba.version && Qa.__version !== ba.version) {
                                        Qa.__image__webglTextureCube || (ba.addEventListener("dispose", g), Qa.__image__webglTextureCube = s.createTexture(), La.textures++);
                                        M.activeTexture(s.TEXTURE0 + wb);
                                        M.bindTexture(s.TEXTURE_CUBE_MAP, Qa.__image__webglTextureCube);
                                        s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, ba.flipY);
                                        for(var xb = ba instanceof THREE.CompressedTexture, nb = ba.image[0] instanceof THREE.DataTexture, Ha = [], da = 0; 6 > da; da++)Ha[da] = !la.autoScaleCubemaps || xb || nb ? nb ? ba.image[da].image : ba.image[da] : I(ba.image[da], na.maxCubemapSize);
                                        var yb = Ha[0], zb = THREE.Math.isPowerOfTwo(yb.width) && THREE.Math.isPowerOfTwo(yb.height), za = O(ba.format), ob = O(ba.type);
                                        H(s.TEXTURE_CUBE_MAP, ba, zb);
                                        for(da = 0; 6 > da; da++)if (xb) for(var Ia, Ab = Ha[da].mipmaps, ab = 0, rb = Ab.length; ab < rb; ab++)Ia = Ab[ab], ba.format !== THREE.RGBAFormat && ba.format !== THREE.RGBFormat ? -1 < M.getCompressedTextureFormats().indexOf(za) ? M.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + da, ab, za, Ia.width, Ia.height, 0, Ia.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + da, ab, za, Ia.width, Ia.height, 0, za, ob, Ia.data);
                                        else nb ? M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + da, 0, za, Ha[da].width, Ha[da].height, 0, za, ob, Ha[da].data) : M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + da, 0, za, za, ob, Ha[da]);
                                        ba.generateMipmaps && zb && s.generateMipmap(s.TEXTURE_CUBE_MAP);
                                        Qa.__version = ba.version;
                                        if (ba.onUpdate) ba.onUpdate(ba);
                                    } else M.activeTexture(s.TEXTURE0 + wb), M.bindTexture(s.TEXTURE_CUBE_MAP, Qa.__image__webglTextureCube);
                                }
                            } else if (ka instanceof THREE.WebGLRenderTargetCube) {
                                var sb = ka;
                                M.activeTexture(s.TEXTURE0 + Ga);
                                M.bindTexture(s.TEXTURE_CUBE_MAP, Y.get(sb).__webglTexture);
                            } else la.setTexture(ka, Ga);
                            break;
                        case "tv":
                            void 0 === S._array && (S._array = []);
                            T = 0;
                            for(ha = S.value.length; T < ha; T++)S._array[T] = B();
                            s.uniform1iv(W, S._array);
                            T = 0;
                            for(ha = S.value.length; T < ha; T++)ka = S.value[T], Ga = S._array[T], ka && la.setTexture(ka, Ga);
                            break;
                        default:
                            console.warn("THREE.WebGLRenderer: Unknown uniform type: " + vb);
                    }
                }
            }
        }
        s.uniformMatrix4fv(A.modelViewMatrix, !1, e.modelViewMatrix.elements);
        A.normalMatrix && s.uniformMatrix3fv(A.normalMatrix, !1, e.normalMatrix.elements);
        void 0 !== A.modelMatrix && s.uniformMatrix4fv(A.modelMatrix, !1, e.matrixWorld.elements);
        return J;
    }
    function v(a1, b) {
        a1.ambientLightColor.needsUpdate = b;
        a1.directionalLightColor.needsUpdate = b;
        a1.directionalLightDirection.needsUpdate = b;
        a1.pointLightColor.needsUpdate = b;
        a1.pointLightPosition.needsUpdate = b;
        a1.pointLightDistance.needsUpdate = b;
        a1.pointLightDecay.needsUpdate = b;
        a1.spotLightColor.needsUpdate = b;
        a1.spotLightPosition.needsUpdate = b;
        a1.spotLightDistance.needsUpdate = b;
        a1.spotLightDirection.needsUpdate = b;
        a1.spotLightAngleCos.needsUpdate = b;
        a1.spotLightExponent.needsUpdate = b;
        a1.spotLightDecay.needsUpdate = b;
        a1.hemisphereLightSkyColor.needsUpdate = b;
        a1.hemisphereLightGroundColor.needsUpdate = b;
        a1.hemisphereLightDirection.needsUpdate = b;
    }
    function B() {
        var a1 = eb;
        a1 >= na.maxTextures && console.warn("WebGLRenderer: trying to use " + a1 + " texture units while this GPU supports only " + na.maxTextures);
        eb += 1;
        return a1;
    }
    function x(a1, b, c, d) {
        a1[b + 0] = c.r * d;
        a1[b + 1] = c.g * d;
        a1[b + 2] = c.b * d;
    }
    function H(a1, b, c) {
        c ? (s.texParameteri(a1, s.TEXTURE_WRAP_S, O(b.wrapS)), s.texParameteri(a1, s.TEXTURE_WRAP_T, O(b.wrapT)), s.texParameteri(a1, s.TEXTURE_MAG_FILTER, O(b.magFilter)), s.texParameteri(a1, s.TEXTURE_MIN_FILTER, O(b.minFilter))) : (s.texParameteri(a1, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(a1, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), b.wrapS === THREE.ClampToEdgeWrapping && b.wrapT === THREE.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( " + b.sourceFile + " )"), s.texParameteri(a1, s.TEXTURE_MAG_FILTER, G(b.magFilter)), s.texParameteri(a1, s.TEXTURE_MIN_FILTER, G(b.minFilter)), b.minFilter !== THREE.NearestFilter && b.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( " + b.sourceFile + " )"));
        !(c = X.get("EXT_texture_filter_anisotropic")) || b.type === THREE.FloatType && null === X.get("OES_texture_float_linear") || b.type === THREE.HalfFloatType && null === X.get("OES_texture_half_float_linear") || !(1 < b.anisotropy || Y.get(b).__currentAnisotropy) || (s.texParameterf(a1, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, la.getMaxAnisotropy())), Y.get(b).__currentAnisotropy = b.anisotropy);
    }
    function I(a1, b) {
        if (a1.width > b || a1.height > b) {
            var c = b / Math.max(a1.width, a1.height), d = document.createElement("canvas");
            d.width = Math.floor(a1.width * c);
            d.height = Math.floor(a1.height * c);
            d.getContext("2d").drawImage(a1, 0, 0, a1.width, a1.height, 0, 0, d.width, d.height);
            console.warn("THREE.WebGLRenderer: image is too big (" + a1.width + "x" + a1.height + "). Resized to " + d.width + "x" + d.height, a1);
            return d;
        }
        return a1;
    }
    function z(a1, b, c) {
        s.bindFramebuffer(s.FRAMEBUFFER, a1);
        s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, c, Y.get(b).__webglTexture, 0);
    }
    function D(a1, b) {
        s.bindRenderbuffer(s.RENDERBUFFER, a1);
        b.depthBuffer && !b.stencilBuffer ? (s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_COMPONENT16, b.width, b.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, a1)) : b.depthBuffer && b.stencilBuffer ? (s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, b.width, b.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, a1)) : s.renderbufferStorage(s.RENDERBUFFER, s.RGBA4, b.width, b.height);
    }
    function G(a1) {
        return a1 === THREE.NearestFilter || a1 === THREE.NearestMipMapNearestFilter || a1 === THREE.NearestMipMapLinearFilter ? s.NEAREST : s.LINEAR;
    }
    function O(a1) {
        var b;
        if (a1 === THREE.RepeatWrapping) return s.REPEAT;
        if (a1 === THREE.ClampToEdgeWrapping) return s.CLAMP_TO_EDGE;
        if (a1 === THREE.MirroredRepeatWrapping) return s.MIRRORED_REPEAT;
        if (a1 === THREE.NearestFilter) return s.NEAREST;
        if (a1 === THREE.NearestMipMapNearestFilter) return s.NEAREST_MIPMAP_NEAREST;
        if (a1 === THREE.NearestMipMapLinearFilter) return s.NEAREST_MIPMAP_LINEAR;
        if (a1 === THREE.LinearFilter) return s.LINEAR;
        if (a1 === THREE.LinearMipMapNearestFilter) return s.LINEAR_MIPMAP_NEAREST;
        if (a1 === THREE.LinearMipMapLinearFilter) return s.LINEAR_MIPMAP_LINEAR;
        if (a1 === THREE.UnsignedByteType) return s.UNSIGNED_BYTE;
        if (a1 === THREE.UnsignedShort4444Type) return s.UNSIGNED_SHORT_4_4_4_4;
        if (a1 === THREE.UnsignedShort5551Type) return s.UNSIGNED_SHORT_5_5_5_1;
        if (a1 === THREE.UnsignedShort565Type) return s.UNSIGNED_SHORT_5_6_5;
        if (a1 === THREE.ByteType) return s.BYTE;
        if (a1 === THREE.ShortType) return s.SHORT;
        if (a1 === THREE.UnsignedShortType) return s.UNSIGNED_SHORT;
        if (a1 === THREE.IntType) return s.INT;
        if (a1 === THREE.UnsignedIntType) return s.UNSIGNED_INT;
        if (a1 === THREE.FloatType) return s.FLOAT;
        b = X.get("OES_texture_half_float");
        if (null !== b && a1 === THREE.HalfFloatType) return b.HALF_FLOAT_OES;
        if (a1 === THREE.AlphaFormat) return s.ALPHA;
        if (a1 === THREE.RGBFormat) return s.RGB;
        if (a1 === THREE.RGBAFormat) return s.RGBA;
        if (a1 === THREE.LuminanceFormat) return s.LUMINANCE;
        if (a1 === THREE.LuminanceAlphaFormat) return s.LUMINANCE_ALPHA;
        if (a1 === THREE.AddEquation) return s.FUNC_ADD;
        if (a1 === THREE.SubtractEquation) return s.FUNC_SUBTRACT;
        if (a1 === THREE.ReverseSubtractEquation) return s.FUNC_REVERSE_SUBTRACT;
        if (a1 === THREE.ZeroFactor) return s.ZERO;
        if (a1 === THREE.OneFactor) return s.ONE;
        if (a1 === THREE.SrcColorFactor) return s.SRC_COLOR;
        if (a1 === THREE.OneMinusSrcColorFactor) return s.ONE_MINUS_SRC_COLOR;
        if (a1 === THREE.SrcAlphaFactor) return s.SRC_ALPHA;
        if (a1 === THREE.OneMinusSrcAlphaFactor) return s.ONE_MINUS_SRC_ALPHA;
        if (a1 === THREE.DstAlphaFactor) return s.DST_ALPHA;
        if (a1 === THREE.OneMinusDstAlphaFactor) return s.ONE_MINUS_DST_ALPHA;
        if (a1 === THREE.DstColorFactor) return s.DST_COLOR;
        if (a1 === THREE.OneMinusDstColorFactor) return s.ONE_MINUS_DST_COLOR;
        if (a1 === THREE.SrcAlphaSaturateFactor) return s.SRC_ALPHA_SATURATE;
        b = X.get("WEBGL_compressed_texture_s3tc");
        if (null !== b) {
            if (a1 === THREE.RGB_S3TC_DXT1_Format) return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a1 === THREE.RGBA_S3TC_DXT1_Format) return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a1 === THREE.RGBA_S3TC_DXT3_Format) return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a1 === THREE.RGBA_S3TC_DXT5_Format) return b.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
        b = X.get("WEBGL_compressed_texture_pvrtc");
        if (null !== b) {
            if (a1 === THREE.RGB_PVRTC_4BPPV1_Format) return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (a1 === THREE.RGB_PVRTC_2BPPV1_Format) return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (a1 === THREE.RGBA_PVRTC_4BPPV1_Format) return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (a1 === THREE.RGBA_PVRTC_2BPPV1_Format) return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
        b = X.get("EXT_blend_minmax");
        if (null !== b) {
            if (a1 === THREE.MinEquation) return b.MIN_EXT;
            if (a1 === THREE.MaxEquation) return b.MAX_EXT;
        }
        return 0;
    }
    console.log("THREE.WebGLRenderer", THREE.REVISION);
    a1 = a1 || {};
    var C = void 0 !== a1.canvas ? a1.canvas : document.createElement("canvas"), F = void 0 !== a1.context ? a1.context : null, K = C.width, L = C.height, E = 1, J = void 0 !== a1.alpha ? a1.alpha : !1, y = void 0 !== a1.depth ? a1.depth : !0, P = void 0 !== a1.stencil ? a1.stencil : !0, U = void 0 !== a1.antialias ? a1.antialias : !1, Q = void 0 !== a1.premultipliedAlpha ? a1.premultipliedAlpha : !0, R = void 0 !== a1.preserveDrawingBuffer ? a1.preserveDrawingBuffer : !1, A = new THREE.Color(0), ia = 0, Z = [], fa = [], V = -1, va = [], ma = -1, ja = [], Ca = -1, wa = [], qa = -1, Ra = new Float32Array(8), Ba = [], Va = [];
    this.domElement = C;
    this.context = null;
    this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.gammaFactor = 2;
    this.gammaOutput = this.gammaInput = !1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    this.autoScaleCubemaps = !0;
    var la = this, ib = null, Aa = null, Ta = -1, pa = "", Sa = null, eb = 0, Ja = 0, Ka = 0, ta = C.width, ua = C.height, bb = 0, cb = 0, Wa = new THREE.Frustum, Da = new THREE.Matrix4, $ = new THREE.Vector3, ca = new THREE.Vector3, db = !0, tb = {
        ambient: [
            0,
            0,
            0
        ],
        directional: {
            length: 0,
            colors: [],
            positions: []
        },
        point: {
            length: 0,
            colors: [],
            positions: [],
            distances: [],
            decays: []
        },
        spot: {
            length: 0,
            colors: [],
            positions: [],
            distances: [],
            directions: [],
            anglesCos: [],
            exponents: [],
            decays: []
        },
        hemi: {
            length: 0,
            skyColors: [],
            groundColors: [],
            positions: []
        }
    }, La = {
        geometries: 0,
        textures: 0
    }, sa = {
        calls: 0,
        vertices: 0,
        faces: 0,
        points: 0
    };
    this.info = {
        render: sa,
        memory: La,
        programs: null
    };
    var s;
    try {
        J = {
            alpha: J,
            depth: y,
            stencil: P,
            antialias: U,
            premultipliedAlpha: Q,
            preserveDrawingBuffer: R
        };
        s = F || C.getContext("webgl", J) || C.getContext("experimental-webgl", J);
        if (null === s) {
            if (null !== C.getContext("webgl")) throw "Error creating WebGL context with your selected attributes.";
            throw "Error creating WebGL context.";
        }
        C.addEventListener("webglcontextlost", e, !1);
    } catch (pb) {
        console.error("THREE.WebGLRenderer: " + pb);
    }
    var X = new THREE.WebGLExtensions(s);
    X.get("OES_texture_float");
    X.get("OES_texture_float_linear");
    X.get("OES_texture_half_float");
    X.get("OES_texture_half_float_linear");
    X.get("OES_standard_derivatives");
    X.get("ANGLE_instanced_arrays");
    X.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
    var na = new THREE.WebGLCapabilities(s, X, a1), M = new THREE.WebGLState(s, X, O), Y = new THREE.WebGLProperties, Ea = new THREE.WebGLObjects(s, Y, this.info), Ua = new THREE.WebGLPrograms(this, na);
    this.info.programs = Ua.programs;
    var qb = new THREE.WebGLBufferRenderer(s, X, sa), rb = new THREE.WebGLIndexedBufferRenderer(s, X, sa);
    c();
    this.context = s;
    this.capabilities = na;
    this.extensions = X;
    this.state = M;
    var ga = new THREE.WebGLShadowMap(this, Z, Ea);
    this.shadowMap = ga;
    var sb = new THREE.SpritePlugin(this, Ba), Bb = new THREE.LensFlarePlugin(this, Va);
    this.getContext = function() {
        return s;
    };
    this.getContextAttributes = function() {
        return s.getContextAttributes();
    };
    this.forceContextLoss = function() {
        X.get("WEBGL_lose_context").loseContext();
    };
    this.getMaxAnisotropy = function() {
        var a1;
        return function() {
            if (void 0 !== a1) return a1;
            var b = X.get("EXT_texture_filter_anisotropic");
            return a1 = null !== b ? s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
        };
    }();
    this.getPrecision = function() {
        return na.precision;
    };
    this.getPixelRatio = function() {
        return E;
    };
    this.setPixelRatio = function(a1) {
        void 0 !== a1 && (E = a1);
    };
    this.getSize = function() {
        return {
            width: K,
            height: L
        };
    };
    this.setSize = function(a1, b, c) {
        K = a1;
        L = b;
        C.width = a1 * E;
        C.height = b * E;
        !1 !== c && (C.style.width = a1 + "px", C.style.height = b + "px");
        this.setViewport(0, 0, a1, b);
    };
    this.setViewport = function(a1, b, c, d) {
        Ja = a1 * E;
        Ka = b * E;
        ta = c * E;
        ua = d * E;
        s.viewport(Ja, Ka, ta, ua);
    };
    this.setScissor = function(a1, b, c, d) {
        s.scissor(a1 * E, b * E, c * E, d * E);
    };
    this.enableScissorTest = function(a1) {
        M.setScissorTest(a1);
    };
    this.getClearColor = function() {
        return A;
    };
    this.setClearColor = function(a1, c) {
        A.set(a1);
        ia = void 0 !== c ? c : 1;
        b(A.r, A.g, A.b, ia);
    };
    this.getClearAlpha = function() {
        return ia;
    };
    this.setClearAlpha = function(a1) {
        ia = a1;
        b(A.r, A.g, A.b, ia);
    };
    this.clear = function(a1, b, c) {
        var d = 0;
        if (void 0 === a1 || a1) d |= s.COLOR_BUFFER_BIT;
        if (void 0 === b || b) d |= s.DEPTH_BUFFER_BIT;
        if (void 0 === c || c) d |= s.STENCIL_BUFFER_BIT;
        s.clear(d);
    };
    this.clearColor = function() {
        s.clear(s.COLOR_BUFFER_BIT);
    };
    this.clearDepth = function() {
        s.clear(s.DEPTH_BUFFER_BIT);
    };
    this.clearStencil = function() {
        s.clear(s.STENCIL_BUFFER_BIT);
    };
    this.clearTarget = function(a1, b, c, d) {
        this.setRenderTarget(a1);
        this.clear(b, c, d);
    };
    this.resetGLState = d;
    this.dispose = function() {
        C.removeEventListener("webglcontextlost", e, !1);
    };
    this.renderBufferImmediate = function(a1, b, c) {
        M.initAttributes();
        var d = Y.get(a1);
        a1.hasPositions && !d.position && (d.position = s.createBuffer());
        a1.hasNormals && !d.normal && (d.normal = s.createBuffer());
        a1.hasUvs && !d.uv && (d.uv = s.createBuffer());
        a1.hasColors && !d.color && (d.color = s.createBuffer());
        b = b.getAttributes();
        a1.hasPositions && (s.bindBuffer(s.ARRAY_BUFFER, d.position), s.bufferData(s.ARRAY_BUFFER, a1.positionArray, s.DYNAMIC_DRAW), M.enableAttribute(b.position), s.vertexAttribPointer(b.position, 3, s.FLOAT, !1, 0, 0));
        if (a1.hasNormals) {
            s.bindBuffer(s.ARRAY_BUFFER, d.normal);
            if ("MeshPhongMaterial" !== c.type && c.shading === THREE.FlatShading) for(var e = 0, f = 3 * a1.count; e < f; e += 9){
                var g = a1.normalArray, h = (g[e + 0] + g[e + 3] + g[e + 6]) / 3, k = (g[e + 1] + g[e + 4] + g[e + 7]) / 3, l = (g[e + 2] + g[e + 5] + g[e + 8]) / 3;
                g[e + 0] = h;
                g[e + 1] = k;
                g[e + 2] = l;
                g[e + 3] = h;
                g[e + 4] = k;
                g[e + 5] = l;
                g[e + 6] = h;
                g[e + 7] = k;
                g[e + 8] = l;
            }
            s.bufferData(s.ARRAY_BUFFER, a1.normalArray, s.DYNAMIC_DRAW);
            M.enableAttribute(b.normal);
            s.vertexAttribPointer(b.normal, 3, s.FLOAT, !1, 0, 0);
        }
        a1.hasUvs && c.map && (s.bindBuffer(s.ARRAY_BUFFER, d.uv), s.bufferData(s.ARRAY_BUFFER, a1.uvArray, s.DYNAMIC_DRAW), M.enableAttribute(b.uv), s.vertexAttribPointer(b.uv, 2, s.FLOAT, !1, 0, 0));
        a1.hasColors && c.vertexColors !== THREE.NoColors && (s.bindBuffer(s.ARRAY_BUFFER, d.color), s.bufferData(s.ARRAY_BUFFER, a1.colorArray, s.DYNAMIC_DRAW), M.enableAttribute(b.color), s.vertexAttribPointer(b.color, 3, s.FLOAT, !1, 0, 0));
        M.disableUnusedAttributes();
        s.drawArrays(s.TRIANGLES, 0, a1.count);
        a1.count = 0;
    };
    this.renderBufferDirect = function(a1, b, c, d, e, f, g) {
        u(e);
        var h = w(a1, b, c, e, f), k = !1;
        a1 = d.id + "_" + h.id + "_" + e.wireframe;
        a1 !== pa && (pa = a1, k = !0);
        a1 = f.morphTargetInfluences;
        if (void 0 !== a1) {
            b = [];
            c = 0;
            for(k = a1.length; c < k; c++){
                var m = a1[c];
                b.push([
                    m,
                    c
                ]);
            }
            b.sort(l);
            8 < b.length && (b.length = 8);
            var n = d.morphAttributes;
            c = 0;
            for(k = b.length; c < k; c++)m = b[c], Ra[c] = m[0], 0 !== m[0] ? (a1 = m[1], !0 === e.morphTargets && n.position && d.addAttribute("morphTarget" + c, n.position[a1]), !0 === e.morphNormals && n.normal && d.addAttribute("morphNormal" + c, n.normal[a1])) : (!0 === e.morphTargets && d.removeAttribute("morphTarget" + c), !0 === e.morphNormals && d.removeAttribute("morphNormal" + c));
            a1 = h.getUniforms();
            null !== a1.morphTargetInfluences && s.uniform1fv(a1.morphTargetInfluences, Ra);
            k = !0;
        }
        a1 = d.index;
        c = d.attributes.position;
        !0 === e.wireframe && (a1 = Ea.getWireframeAttribute(d));
        null !== a1 ? (b = rb, b.setIndex(a1)) : b = qb;
        if (k) {
            a: {
                var k = void 0, q;
                if (d instanceof THREE.InstancedBufferGeometry && (q = X.get("ANGLE_instanced_arrays"), null === q)) {
                    console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    break a;
                }
                void 0 === k && (k = 0);
                M.initAttributes();
                var m = d.attributes, h = h.getAttributes(), n = e.defaultAttributeValues, p;
                for(p in h){
                    var t = h[p];
                    if (0 <= t) {
                        var r = m[p];
                        if (void 0 !== r) {
                            M.enableAttribute(t);
                            var v = r.itemSize, x = Ea.getAttributeBuffer(r);
                            if (r instanceof THREE.InterleavedBufferAttribute) {
                                var G = r.data, B = G.stride, r = r.offset;
                                s.bindBuffer(s.ARRAY_BUFFER, x);
                                s.vertexAttribPointer(t, v, s.FLOAT, !1, B * G.array.BYTES_PER_ELEMENT, (k * B + r) * G.array.BYTES_PER_ELEMENT);
                                if (G instanceof THREE.InstancedInterleavedBuffer) {
                                    if (null === q) {
                                        console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");
                                        break a;
                                    }
                                    q.vertexAttribDivisorANGLE(t, G.meshPerAttribute);
                                    void 0 === d.maxInstancedCount && (d.maxInstancedCount = G.meshPerAttribute * G.count);
                                }
                            } else if (s.bindBuffer(s.ARRAY_BUFFER, x), s.vertexAttribPointer(t, v, s.FLOAT, !1, 0, k * v * 4), r instanceof THREE.InstancedBufferAttribute) {
                                if (null === q) {
                                    console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");
                                    break a;
                                }
                                q.vertexAttribDivisorANGLE(t, r.meshPerAttribute);
                                void 0 === d.maxInstancedCount && (d.maxInstancedCount = r.meshPerAttribute * r.count);
                            }
                        } else if (void 0 !== n && (v = n[p], void 0 !== v)) switch(v.length){
                            case 2:
                                s.vertexAttrib2fv(t, v);
                                break;
                            case 3:
                                s.vertexAttrib3fv(t, v);
                                break;
                            case 4:
                                s.vertexAttrib4fv(t, v);
                                break;
                            default:
                                s.vertexAttrib1fv(t, v);
                        }
                    }
                }
                M.disableUnusedAttributes();
            }
            null !== a1 && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, Ea.getAttributeBuffer(a1));
        }
        void 0 === g && (g = d.drawRange, g = {
            start: g.start,
            count: Math.min(g.count, null !== a1 ? a1.array.length : c.count)
        });
        f instanceof THREE.Mesh ? (!0 === e.wireframe ? (M.setLineWidth(e.wireframeLinewidth * E), b.setMode(s.LINES)) : b.setMode(s.TRIANGLES), d instanceof THREE.InstancedBufferGeometry && 0 < d.maxInstancedCount ? b.renderInstances(d) : b.render(g.start, g.count)) : f instanceof THREE.Line ? (d = e.linewidth, void 0 === d && (d = 1), M.setLineWidth(d * E), f instanceof THREE.LineSegments ? b.setMode(s.LINES) : b.setMode(s.LINE_STRIP), b.render(g.start, g.count)) : f instanceof THREE.Points && (b.setMode(s.POINTS), b.render(g.start, g.count));
    };
    this.render = function(a1, b, c, d) {
        if (!1 === b instanceof THREE.Camera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var e = a1.fog;
            pa = "";
            Ta = -1;
            Sa = null;
            db = !0;
            !0 === a1.autoUpdate && a1.updateMatrixWorld();
            null === b.parent && b.updateMatrixWorld();
            b.matrixWorldInverse.getInverse(b.matrixWorld);
            Da.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
            Wa.setFromMatrix(Da);
            Z.length = 0;
            qa = Ca = ma = V = -1;
            Ba.length = 0;
            Va.length = 0;
            q(a1);
            fa.length = V + 1;
            va.length = ma + 1;
            ja.length = Ca + 1;
            wa.length = qa + 1;
            !0 === la.sortObjects && (fa.sort(n), va.sort(p));
            ga.render(a1, b);
            sa.calls = 0;
            sa.vertices = 0;
            sa.faces = 0;
            sa.points = 0;
            this.setRenderTarget(c);
            (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
            a1.overrideMaterial ? (d = a1.overrideMaterial, t(fa, b, Z, e, d), t(va, b, Z, e, d), r(ja, b, Z, e, d), r(wa, b, Z, e, d)) : (M.setBlending(THREE.NoBlending), t(fa, b, Z, e), r(ja, b, Z, e), t(va, b, Z, e), r(wa, b, Z, e));
            sb.render(a1, b);
            Bb.render(a1, b, bb, cb);
            c && c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter && (c instanceof THREE.WebGLRenderTargetCube ? (M.bindTexture(s.TEXTURE_CUBE_MAP, Y.get(c).__webglTexture), s.generateMipmap(s.TEXTURE_CUBE_MAP), M.bindTexture(s.TEXTURE_CUBE_MAP, null)) : (M.bindTexture(s.TEXTURE_2D, Y.get(c).__webglTexture), s.generateMipmap(s.TEXTURE_2D), M.bindTexture(s.TEXTURE_2D, null)));
            M.setDepthTest(!0);
            M.setDepthWrite(!0);
            M.setColorWrite(!0);
        }
    };
    this.setFaceCulling = function(a1, b) {
        a1 === THREE.CullFaceNone ? M.disable(s.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? s.frontFace(s.CW) : s.frontFace(s.CCW), a1 === THREE.CullFaceBack ? s.cullFace(s.BACK) : a1 === THREE.CullFaceFront ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK), M.enable(s.CULL_FACE));
    };
    this.setTexture = function(a1, b) {
        var c = Y.get(a1);
        if (0 < a1.version && c.__version !== a1.version) {
            var d = a1.image;
            if (void 0 === d) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", a1);
            else if (!1 === d.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", a1);
            else {
                void 0 === c.__webglInit && (c.__webglInit = !0, a1.__webglInit = !0, a1.addEventListener("dispose", g), c.__webglTexture = s.createTexture(), La.textures++);
                M.activeTexture(s.TEXTURE0 + b);
                M.bindTexture(s.TEXTURE_2D, c.__webglTexture);
                s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, a1.flipY);
                s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a1.premultiplyAlpha);
                s.pixelStorei(s.UNPACK_ALIGNMENT, a1.unpackAlignment);
                a1.image = I(a1.image, na.maxTextureSize);
                var e = a1.image, d = THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height), f = O(a1.format), h = O(a1.type);
                H(s.TEXTURE_2D, a1, d);
                var k = a1.mipmaps;
                if (a1 instanceof THREE.DataTexture) {
                    if (0 < k.length && d) {
                        for(var l = 0, m = k.length; l < m; l++)e = k[l], M.texImage2D(s.TEXTURE_2D, l, f, e.width, e.height, 0, f, h, e.data);
                        a1.generateMipmaps = !1;
                    } else M.texImage2D(s.TEXTURE_2D, 0, f, e.width, e.height, 0, f, h, e.data);
                } else if (a1 instanceof THREE.CompressedTexture) for(l = 0, m = k.length; l < m; l++)e = k[l], a1.format !== THREE.RGBAFormat && a1.format !== THREE.RGBFormat ? -1 < M.getCompressedTextureFormats().indexOf(f) ? M.compressedTexImage2D(s.TEXTURE_2D, l, f, e.width, e.height, 0, e.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : M.texImage2D(s.TEXTURE_2D, l, f, e.width, e.height, 0, f, h, e.data);
                else if (0 < k.length && d) {
                    l = 0;
                    for(m = k.length; l < m; l++)e = k[l], M.texImage2D(s.TEXTURE_2D, l, f, f, h, e);
                    a1.generateMipmaps = !1;
                } else M.texImage2D(s.TEXTURE_2D, 0, f, f, h, a1.image);
                a1.generateMipmaps && d && s.generateMipmap(s.TEXTURE_2D);
                c.__version = a1.version;
                if (a1.onUpdate) a1.onUpdate(a1);
            }
        } else M.activeTexture(s.TEXTURE0 + b), M.bindTexture(s.TEXTURE_2D, c.__webglTexture);
    };
    this.setRenderTarget = function(a1) {
        var b = a1 instanceof THREE.WebGLRenderTargetCube;
        if (a1 && void 0 === Y.get(a1).__webglFramebuffer) {
            var c = Y.get(a1);
            void 0 === a1.depthBuffer && (a1.depthBuffer = !0);
            void 0 === a1.stencilBuffer && (a1.stencilBuffer = !0);
            a1.addEventListener("dispose", f);
            c.__webglTexture = s.createTexture();
            La.textures++;
            var d = THREE.Math.isPowerOfTwo(a1.width) && THREE.Math.isPowerOfTwo(a1.height), e = O(a1.format), g = O(a1.type);
            if (b) {
                c.__webglFramebuffer = [];
                c.__webglRenderbuffer = [];
                M.bindTexture(s.TEXTURE_CUBE_MAP, c.__webglTexture);
                H(s.TEXTURE_CUBE_MAP, a1, d);
                for(var h = 0; 6 > h; h++)c.__webglFramebuffer[h] = s.createFramebuffer(), c.__webglRenderbuffer[h] = s.createRenderbuffer(), M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, e, a1.width, a1.height, 0, e, g, null), z(c.__webglFramebuffer[h], a1, s.TEXTURE_CUBE_MAP_POSITIVE_X + h), D(c.__webglRenderbuffer[h], a1);
                a1.generateMipmaps && d && s.generateMipmap(s.TEXTURE_CUBE_MAP);
            } else c.__webglFramebuffer = s.createFramebuffer(), c.__webglRenderbuffer = a1.shareDepthFrom ? a1.shareDepthFrom.__webglRenderbuffer : s.createRenderbuffer(), M.bindTexture(s.TEXTURE_2D, c.__webglTexture), H(s.TEXTURE_2D, a1, d), M.texImage2D(s.TEXTURE_2D, 0, e, a1.width, a1.height, 0, e, g, null), z(c.__webglFramebuffer, a1, s.TEXTURE_2D), a1.shareDepthFrom ? a1.depthBuffer && !a1.stencilBuffer ? s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, c.__webglRenderbuffer) : a1.depthBuffer && a1.stencilBuffer && s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, c.__webglRenderbuffer) : D(c.__webglRenderbuffer, a1), a1.generateMipmaps && d && s.generateMipmap(s.TEXTURE_2D);
            b ? M.bindTexture(s.TEXTURE_CUBE_MAP, null) : M.bindTexture(s.TEXTURE_2D, null);
            s.bindRenderbuffer(s.RENDERBUFFER, null);
            s.bindFramebuffer(s.FRAMEBUFFER, null);
        }
        a1 ? (c = Y.get(a1), b = b ? c.__webglFramebuffer[a1.activeCubeFace] : c.__webglFramebuffer, c = a1.width, a1 = a1.height, e = d = 0) : (b = null, c = ta, a1 = ua, d = Ja, e = Ka);
        b !== Aa && (s.bindFramebuffer(s.FRAMEBUFFER, b), s.viewport(d, e, c, a1), Aa = b);
        bb = c;
        cb = a1;
    };
    this.readRenderTargetPixels = function(a1, b, c, d, e, f) {
        if (!(a1 instanceof THREE.WebGLRenderTarget)) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        else if (Y.get(a1).__webglFramebuffer) {
            if (a1.format !== THREE.RGBAFormat) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
            else {
                var g = !1;
                Y.get(a1).__webglFramebuffer !== Aa && (s.bindFramebuffer(s.FRAMEBUFFER, Y.get(a1).__webglFramebuffer), g = !0);
                s.checkFramebufferStatus(s.FRAMEBUFFER) === s.FRAMEBUFFER_COMPLETE ? s.readPixels(b, c, d, e, s.RGBA, s.UNSIGNED_BYTE, f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
                g && s.bindFramebuffer(s.FRAMEBUFFER, Aa);
            }
        }
    };
    this.supportsFloatTextures = function() {
        console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
        return X.get("OES_texture_float");
    };
    this.supportsHalfFloatTextures = function() {
        console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
        return X.get("OES_texture_half_float");
    };
    this.supportsStandardDerivatives = function() {
        console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
        return X.get("OES_standard_derivatives");
    };
    this.supportsCompressedTextureS3TC = function() {
        console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
        return X.get("WEBGL_compressed_texture_s3tc");
    };
    this.supportsCompressedTexturePVRTC = function() {
        console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
        return X.get("WEBGL_compressed_texture_pvrtc");
    };
    this.supportsBlendMinMax = function() {
        console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
        return X.get("EXT_blend_minmax");
    };
    this.supportsVertexTextures = function() {
        return na.vertexTextures;
    };
    this.supportsInstancedArrays = function() {
        console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
        return X.get("ANGLE_instanced_arrays");
    };
    this.initMaterial = function() {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    };
    this.addPrePlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    };
    this.addPostPlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    };
    this.updateShadowMap = function() {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    };
    Object.defineProperties(this, {
        shadowMapEnabled: {
            get: function() {
                return ga.enabled;
            },
            set: function(a1) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
                ga.enabled = a1;
            }
        },
        shadowMapType: {
            get: function() {
                return ga.type;
            },
            set: function(a1) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
                ga.type = a1;
            }
        },
        shadowMapCullFace: {
            get: function() {
                return ga.cullFace;
            },
            set: function(a1) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");
                ga.cullFace = a1;
            }
        },
        shadowMapDebug: {
            get: function() {
                return ga.debug;
            },
            set: function(a1) {
                console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug.");
                ga.debug = a1;
            }
        }
    });
};
THREE.WebGLRenderTarget = function(a1, b, c) {
    this.uuid = THREE.Math.generateUUID();
    this.width = a1;
    this.height = b;
    c = c || {};
    this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter;
    this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.format = void 0 !== c.format ? c.format : THREE.RGBAFormat;
    this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType;
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
    this.generateMipmaps = !0;
    this.shareDepthFrom = void 0 !== c.shareDepthFrom ? c.shareDepthFrom : null;
};
THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget,
    setSize: function(a1, b) {
        if (this.width !== a1 || this.height !== b) this.width = a1, this.height = b, this.dispose();
    },
    clone: function() {
        return (new this.constructor).copy(this);
    },
    copy: function(a1) {
        this.width = a1.width;
        this.height = a1.height;
        this.wrapS = a1.wrapS;
        this.wrapT = a1.wrapT;
        this.magFilter = a1.magFilter;
        this.minFilter = a1.minFilter;
        this.anisotropy = a1.anisotropy;
        this.offset.copy(a1.offset);
        this.repeat.copy(a1.repeat);
        this.format = a1.format;
        this.type = a1.type;
        this.depthBuffer = a1.depthBuffer;
        this.stencilBuffer = a1.stencilBuffer;
        this.generateMipmaps = a1.generateMipmaps;
        this.shareDepthFrom = a1.shareDepthFrom;
        return this;
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
};
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube = function(a1, b, c) {
    THREE.WebGLRenderTarget.call(this, a1, b, c);
    this.activeCubeFace = 0;
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube;
THREE.WebGLBufferRenderer = function(a1, b, c) {
    var d;
    this.setMode = function(a1) {
        d = a1;
    };
    this.render = function(b, g) {
        a1.drawArrays(d, b, g);
        c.calls++;
        c.vertices += g;
        d === a1.TRIANGLES && (c.faces += g / 3);
    };
    this.renderInstances = function(a1) {
        var c = b.get("ANGLE_instanced_arrays");
        if (null === c) console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        else {
            var f = a1.attributes.position;
            f instanceof THREE.InterleavedBufferAttribute ? c.drawArraysInstancedANGLE(d, 0, f.data.count, a1.maxInstancedCount) : c.drawArraysInstancedANGLE(d, 0, f.count, a1.maxInstancedCount);
        }
    };
};
THREE.WebGLIndexedBufferRenderer = function(a1, b, c) {
    var d, e, g;
    this.setMode = function(a1) {
        d = a1;
    };
    this.setIndex = function(c) {
        c.array instanceof Uint32Array && b.get("OES_element_index_uint") ? (e = a1.UNSIGNED_INT, g = 4) : (e = a1.UNSIGNED_SHORT, g = 2);
    };
    this.render = function(b, h) {
        a1.drawElements(d, h, e, b * g);
        c.calls++;
        c.vertices += h;
        d === a1.TRIANGLES && (c.faces += h / 3);
    };
    this.renderInstances = function(a1) {
        var c = b.get("ANGLE_instanced_arrays");
        null === c ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : c.drawElementsInstancedANGLE(d, a1.index.array.length, e, 0, a1.maxInstancedCount);
    };
};
THREE.WebGLExtensions = function(a1) {
    var b = {};
    this.get = function(c) {
        if (void 0 !== b[c]) return b[c];
        var d;
        switch(c){
            case "EXT_texture_filter_anisotropic":
                d = a1.getExtension("EXT_texture_filter_anisotropic") || a1.getExtension("MOZ_EXT_texture_filter_anisotropic") || a1.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                d = a1.getExtension("WEBGL_compressed_texture_s3tc") || a1.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a1.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                d = a1.getExtension("WEBGL_compressed_texture_pvrtc") || a1.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                d = a1.getExtension(c);
        }
        null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
        return b[c] = d;
    };
};
THREE.WebGLCapabilities = function(a1, b, c) {
    function d(b) {
        if ("highp" === b) {
            if (0 < a1.getShaderPrecisionFormat(a1.VERTEX_SHADER, a1.HIGH_FLOAT).precision && 0 < a1.getShaderPrecisionFormat(a1.FRAGMENT_SHADER, a1.HIGH_FLOAT).precision) return "highp";
            b = "mediump";
        }
        return "mediump" === b && 0 < a1.getShaderPrecisionFormat(a1.VERTEX_SHADER, a1.MEDIUM_FLOAT).precision && 0 < a1.getShaderPrecisionFormat(a1.FRAGMENT_SHADER, a1.MEDIUM_FLOAT).precision ? "mediump" : "lowp";
    }
    this.getMaxPrecision = d;
    this.precision = void 0 !== c.precision ? c.precision : "highp";
    this.logarithmicDepthBuffer = void 0 !== c.logarithmicDepthBuffer ? c.logarithmicDepthBuffer : !1;
    this.maxTextures = a1.getParameter(a1.MAX_TEXTURE_IMAGE_UNITS);
    this.maxVertexTextures = a1.getParameter(a1.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    this.maxTextureSize = a1.getParameter(a1.MAX_TEXTURE_SIZE);
    this.maxCubemapSize = a1.getParameter(a1.MAX_CUBE_MAP_TEXTURE_SIZE);
    this.maxAttributes = a1.getParameter(a1.MAX_VERTEX_ATTRIBS);
    this.maxVertexUniforms = a1.getParameter(a1.MAX_VERTEX_UNIFORM_VECTORS);
    this.maxVaryings = a1.getParameter(a1.MAX_VARYING_VECTORS);
    this.maxFragmentUniforms = a1.getParameter(a1.MAX_FRAGMENT_UNIFORM_VECTORS);
    this.vertexTextures = 0 < this.maxVertexTextures;
    this.floatFragmentTextures = !!b.get("OES_texture_float");
    this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
    c = d(this.precision);
    c !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", c, "instead."), this.precision = c);
    this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!b.get("EXT_frag_depth"));
};
THREE.WebGLGeometries = function(a1, b, c) {
    function d(a1) {
        a1 = a1.target;
        var h = g[a1.id].attributes, k;
        for(k in h)e(h[k]);
        a1.removeEventListener("dispose", d);
        delete g[a1.id];
        k = b.get(a1);
        k.wireframe && e(k.wireframe);
        c.memory.geometries--;
    }
    function e(c) {
        var d;
        d = c instanceof THREE.InterleavedBufferAttribute ? b.get(c.data).__webglBuffer : b.get(c).__webglBuffer;
        void 0 !== d && (a1.deleteBuffer(d), c instanceof THREE.InterleavedBufferAttribute ? b.delete(c.data) : b.delete(c));
    }
    var g = {};
    this.get = function(a1) {
        var b = a1.geometry;
        if (void 0 !== g[b.id]) return g[b.id];
        b.addEventListener("dispose", d);
        var e;
        b instanceof THREE.BufferGeometry ? e = b : b instanceof THREE.Geometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new THREE.BufferGeometry).setFromObject(a1)), e = b._bufferGeometry);
        g[b.id] = e;
        c.memory.geometries++;
        return e;
    };
};
THREE.WebGLObjects = function(a1, b, c) {
    function d(c, d) {
        var e = c instanceof THREE.InterleavedBufferAttribute ? c.data : c, g = b.get(e);
        void 0 === g.__webglBuffer ? (g.__webglBuffer = a1.createBuffer(), a1.bindBuffer(d, g.__webglBuffer), a1.bufferData(d, e.array, e.dynamic ? a1.DYNAMIC_DRAW : a1.STATIC_DRAW), g.version = e.version) : g.version !== e.version && (a1.bindBuffer(d, g.__webglBuffer), !1 === e.dynamic || -1 === e.updateRange.count ? a1.bufferSubData(d, 0, e.array) : 0 === e.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (a1.bufferSubData(d, e.updateRange.offset * e.array.BYTES_PER_ELEMENT, e.array.subarray(e.updateRange.offset, e.updateRange.offset + e.updateRange.count)), e.updateRange.count = 0), g.version = e.version);
    }
    function e(a1, b, c) {
        if (b > c) {
            var d = b;
            b = c;
            c = d;
        }
        d = a1[b];
        return void 0 === d ? (a1[b] = [
            c
        ], !0) : -1 === d.indexOf(c) ? (d.push(c), !0) : !1;
    }
    var g = new THREE.WebGLGeometries(a1, b, c);
    this.getAttributeBuffer = function(a1) {
        return a1 instanceof THREE.InterleavedBufferAttribute ? b.get(a1.data).__webglBuffer : b.get(a1).__webglBuffer;
    };
    this.getWireframeAttribute = function(c) {
        var g = b.get(c);
        if (void 0 !== g.wireframe) return g.wireframe;
        var k = [], l = c.index, n = c.attributes;
        c = n.position;
        if (null !== l) for(var n = {}, l = l.array, p = 0, m = l.length; p < m; p += 3){
            var q = l[p + 0], t = l[p + 1], r = l[p + 2];
            e(n, q, t) && k.push(q, t);
            e(n, t, r) && k.push(t, r);
            e(n, r, q) && k.push(r, q);
        }
        else for(l = n.position.array, p = 0, m = l.length / 3 - 1; p < m; p += 3)q = p + 0, t = p + 1, r = p + 2, k.push(q, t, t, r, r, q);
        k = new THREE.BufferAttribute(new (65535 < c.count ? Uint32Array : Uint16Array)(k), 1);
        d(k, a1.ELEMENT_ARRAY_BUFFER);
        return g.wireframe = k;
    };
    this.update = function(b) {
        var c = g.get(b);
        b.geometry instanceof THREE.Geometry && c.updateFromObject(b);
        b = c.index;
        var e = c.attributes;
        null !== b && d(b, a1.ELEMENT_ARRAY_BUFFER);
        for(var l in e)d(e[l], a1.ARRAY_BUFFER);
        b = c.morphAttributes;
        for(l in b)for(var e = b[l], n = 0, p = e.length; n < p; n++)d(e[n], a1.ARRAY_BUFFER);
        return c;
    };
};
THREE.WebGLProgram = function() {
    function a1(a1) {
        var b = [], c;
        for(c in a1){
            var f = a1[c];
            !1 !== f && b.push("#define " + c + " " + f);
        }
        return b.join("\n");
    }
    function b(a1) {
        return "" !== a1;
    }
    var c = 0;
    return function(d, e, g, f) {
        var h = d.context, k = g.defines, l = g.__webglShader.vertexShader, n = g.__webglShader.fragmentShader, p = "SHADOWMAP_TYPE_BASIC";
        f.shadowMapType === THREE.PCFShadowMap ? p = "SHADOWMAP_TYPE_PCF" : f.shadowMapType === THREE.PCFSoftShadowMap && (p = "SHADOWMAP_TYPE_PCF_SOFT");
        var m = "ENVMAP_TYPE_CUBE", q = "ENVMAP_MODE_REFLECTION", t = "ENVMAP_BLENDING_MULTIPLY";
        if (f.envMap) {
            switch(g.envMap.mapping){
                case THREE.CubeReflectionMapping:
                case THREE.CubeRefractionMapping:
                    m = "ENVMAP_TYPE_CUBE";
                    break;
                case THREE.EquirectangularReflectionMapping:
                case THREE.EquirectangularRefractionMapping:
                    m = "ENVMAP_TYPE_EQUIREC";
                    break;
                case THREE.SphericalReflectionMapping:
                    m = "ENVMAP_TYPE_SPHERE";
            }
            switch(g.envMap.mapping){
                case THREE.CubeRefractionMapping:
                case THREE.EquirectangularRefractionMapping:
                    q = "ENVMAP_MODE_REFRACTION";
            }
            switch(g.combine){
                case THREE.MultiplyOperation:
                    t = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case THREE.MixOperation:
                    t = "ENVMAP_BLENDING_MIX";
                    break;
                case THREE.AddOperation:
                    t = "ENVMAP_BLENDING_ADD";
            }
        }
        var r = 0 < d.gammaFactor ? d.gammaFactor : 1, u = a1(k), w = h.createProgram();
        g instanceof THREE.RawShaderMaterial ? d = k = "" : (k = [
            "precision " + f.precision + " float;",
            "precision " + f.precision + " int;",
            "#define SHADER_NAME " + g.__webglShader.name,
            u,
            f.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
            d.gammaInput ? "#define GAMMA_INPUT" : "",
            d.gammaOutput ? "#define GAMMA_OUTPUT" : "",
            "#define GAMMA_FACTOR " + r,
            "#define MAX_DIR_LIGHTS " + f.maxDirLights,
            "#define MAX_POINT_LIGHTS " + f.maxPointLights,
            "#define MAX_SPOT_LIGHTS " + f.maxSpotLights,
            "#define MAX_HEMI_LIGHTS " + f.maxHemiLights,
            "#define MAX_SHADOWS " + f.maxShadows,
            "#define MAX_BONES " + f.maxBones,
            f.map ? "#define USE_MAP" : "",
            f.envMap ? "#define USE_ENVMAP" : "",
            f.envMap ? "#define " + q : "",
            f.lightMap ? "#define USE_LIGHTMAP" : "",
            f.aoMap ? "#define USE_AOMAP" : "",
            f.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            f.bumpMap ? "#define USE_BUMPMAP" : "",
            f.normalMap ? "#define USE_NORMALMAP" : "",
            f.displacementMap && f.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
            f.specularMap ? "#define USE_SPECULARMAP" : "",
            f.alphaMap ? "#define USE_ALPHAMAP" : "",
            f.vertexColors ? "#define USE_COLOR" : "",
            f.flatShading ? "#define FLAT_SHADED" : "",
            f.skinning ? "#define USE_SKINNING" : "",
            f.useVertexTexture ? "#define BONE_TEXTURE" : "",
            f.morphTargets ? "#define USE_MORPHTARGETS" : "",
            f.morphNormals && !1 === f.flatShading ? "#define USE_MORPHNORMALS" : "",
            f.doubleSided ? "#define DOUBLE_SIDED" : "",
            f.flipSided ? "#define FLIP_SIDED" : "",
            f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            f.shadowMapEnabled ? "#define " + p : "",
            f.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "",
            f.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            f.logarithmicDepthBuffer && d.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_COLOR",
            "	attribute vec3 color;",
            "#endif",
            "#ifdef USE_MORPHTARGETS",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            "\n"
        ].filter(b).join("\n"), d = [
            f.bumpMap || f.normalMap || f.flatShading || g.derivatives ? "#extension GL_OES_standard_derivatives : enable" : "",
            f.logarithmicDepthBuffer && d.extensions.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "",
            "precision " + f.precision + " float;",
            "precision " + f.precision + " int;",
            "#define SHADER_NAME " + g.__webglShader.name,
            u,
            "#define MAX_DIR_LIGHTS " + f.maxDirLights,
            "#define MAX_POINT_LIGHTS " + f.maxPointLights,
            "#define MAX_SPOT_LIGHTS " + f.maxSpotLights,
            "#define MAX_HEMI_LIGHTS " + f.maxHemiLights,
            "#define MAX_SHADOWS " + f.maxShadows,
            f.alphaTest ? "#define ALPHATEST " + f.alphaTest : "",
            d.gammaInput ? "#define GAMMA_INPUT" : "",
            d.gammaOutput ? "#define GAMMA_OUTPUT" : "",
            "#define GAMMA_FACTOR " + r,
            f.useFog && f.fog ? "#define USE_FOG" : "",
            f.useFog && f.fogExp ? "#define FOG_EXP2" : "",
            f.map ? "#define USE_MAP" : "",
            f.envMap ? "#define USE_ENVMAP" : "",
            f.envMap ? "#define " + m : "",
            f.envMap ? "#define " + q : "",
            f.envMap ? "#define " + t : "",
            f.lightMap ? "#define USE_LIGHTMAP" : "",
            f.aoMap ? "#define USE_AOMAP" : "",
            f.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            f.bumpMap ? "#define USE_BUMPMAP" : "",
            f.normalMap ? "#define USE_NORMALMAP" : "",
            f.specularMap ? "#define USE_SPECULARMAP" : "",
            f.alphaMap ? "#define USE_ALPHAMAP" : "",
            f.vertexColors ? "#define USE_COLOR" : "",
            f.flatShading ? "#define FLAT_SHADED" : "",
            f.metal ? "#define METAL" : "",
            f.doubleSided ? "#define DOUBLE_SIDED" : "",
            f.flipSided ? "#define FLIP_SIDED" : "",
            f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            f.shadowMapEnabled ? "#define " + p : "",
            f.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "",
            f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            f.logarithmicDepthBuffer && d.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "\n"
        ].filter(b).join("\n"));
        n = d + n;
        l = THREE.WebGLShader(h, h.VERTEX_SHADER, k + l);
        n = THREE.WebGLShader(h, h.FRAGMENT_SHADER, n);
        h.attachShader(w, l);
        h.attachShader(w, n);
        void 0 !== g.index0AttributeName ? h.bindAttribLocation(w, 0, g.index0AttributeName) : !0 === f.morphTargets && h.bindAttribLocation(w, 0, "position");
        h.linkProgram(w);
        f = h.getProgramInfoLog(w);
        p = h.getShaderInfoLog(l);
        m = h.getShaderInfoLog(n);
        t = q = !0;
        if (!1 === h.getProgramParameter(w, h.LINK_STATUS)) q = !1, console.error("THREE.WebGLProgram: shader error: ", h.getError(), "gl.VALIDATE_STATUS", h.getProgramParameter(w, h.VALIDATE_STATUS), "gl.getProgramInfoLog", f, p, m);
        else if ("" !== f) console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", f);
        else if ("" === p || "" === m) t = !1;
        t && (this.diagnostics = {
            runnable: q,
            material: g,
            programLog: f,
            vertexShader: {
                log: p,
                prefix: k
            },
            fragmentShader: {
                log: m,
                prefix: d
            }
        });
        h.deleteShader(l);
        h.deleteShader(n);
        var v;
        this.getUniforms = function() {
            if (void 0 === v) {
                for(var a1 = {}, b = h.getProgramParameter(w, h.ACTIVE_UNIFORMS), c = 0; c < b; c++){
                    var d = h.getActiveUniform(w, c).name, e = h.getUniformLocation(w, d), f = d.lastIndexOf("[0]");
                    -1 !== f && f === d.length - 3 && (a1[d.substr(0, f)] = e);
                    a1[d] = e;
                }
                v = a1;
            }
            return v;
        };
        var B;
        this.getAttributes = function() {
            if (void 0 === B) {
                for(var a1 = {}, b = h.getProgramParameter(w, h.ACTIVE_ATTRIBUTES), c = 0; c < b; c++){
                    var d = h.getActiveAttrib(w, c).name;
                    a1[d] = h.getAttribLocation(w, d);
                }
                B = a1;
            }
            return B;
        };
        this.destroy = function() {
            h.deleteProgram(w);
            this.program = void 0;
        };
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
                    return this.getUniforms();
                }
            },
            attributes: {
                get: function() {
                    console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");
                    return this.getAttributes();
                }
            }
        });
        this.id = c++;
        this.code = e;
        this.usedTimes = 1;
        this.program = w;
        this.vertexShader = l;
        this.fragmentShader = n;
        return this;
    };
}();
THREE.WebGLPrograms = function(a1, b) {
    var c = [], d = {
        MeshDepthMaterial: "depth",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points"
    }, e = "precision supportsVertexTextures map envMap envMapMode lightMap aoMap emissiveMap bumpMap normalMap specularMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals maxDirLights maxPointLights maxSpotLights maxHemiLights maxShadows shadowMapEnabled shadowMapType shadowMapDebug alphaTest metal doubleSided flipSided".split(" ");
    this.getParameters = function(c, e, h, k) {
        for(var l, n, p, m, q = d[c.type], t = m = p = n = l = 0, r = e.length; t < r; t++){
            var u = e[t];
            u.onlyShadow || !1 === u.visible || (u instanceof THREE.DirectionalLight && l++, u instanceof THREE.PointLight && n++, u instanceof THREE.SpotLight && p++, u instanceof THREE.HemisphereLight && m++);
        }
        r = t = 0;
        for(u = e.length; r < u; r++){
            var w = e[r];
            w.castShadow && (w instanceof THREE.SpotLight && t++, w instanceof THREE.DirectionalLight && t++);
        }
        e = t;
        b.floatVertexTextures && k && k.skeleton && k.skeleton.useVertexTexture ? t = 1024 : (t = Math.floor((b.maxVertexUniforms - 20) / 4), void 0 !== k && k instanceof THREE.SkinnedMesh && (t = Math.min(k.skeleton.bones.length, t), t < k.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + k.skeleton.bones.length + ", this GPU supports just " + t + " (try OpenGL instead of ANGLE)")));
        r = a1.getPrecision();
        null !== c.precision && (r = b.getMaxPrecision(c.precision), r !== c.precision && console.warn("THREE.WebGLRenderer.initMaterial:", c.precision, "not supported, using", r, "instead."));
        return {
            shaderID: q,
            precision: r,
            supportsVertexTextures: b.vertexTextures,
            map: !!c.map,
            envMap: !!c.envMap,
            envMapMode: c.envMap && c.envMap.mapping,
            lightMap: !!c.lightMap,
            aoMap: !!c.aoMap,
            emissiveMap: !!c.emissiveMap,
            bumpMap: !!c.bumpMap,
            normalMap: !!c.normalMap,
            displacementMap: !!c.displacementMap,
            specularMap: !!c.specularMap,
            alphaMap: !!c.alphaMap,
            combine: c.combine,
            vertexColors: c.vertexColors,
            fog: h,
            useFog: c.fog,
            fogExp: h instanceof THREE.FogExp2,
            flatShading: c.shading === THREE.FlatShading,
            sizeAttenuation: c.sizeAttenuation,
            logarithmicDepthBuffer: b.logarithmicDepthBuffer,
            skinning: c.skinning,
            maxBones: t,
            useVertexTexture: b.floatVertexTextures && k && k.skeleton && k.skeleton.useVertexTexture,
            morphTargets: c.morphTargets,
            morphNormals: c.morphNormals,
            maxMorphTargets: a1.maxMorphTargets,
            maxMorphNormals: a1.maxMorphNormals,
            maxDirLights: l,
            maxPointLights: n,
            maxSpotLights: p,
            maxHemiLights: m,
            maxShadows: e,
            shadowMapEnabled: a1.shadowMap.enabled && k.receiveShadow && 0 < e,
            shadowMapType: a1.shadowMap.type,
            shadowMapDebug: a1.shadowMap.debug,
            alphaTest: c.alphaTest,
            metal: c.metal,
            doubleSided: c.side === THREE.DoubleSide,
            flipSided: c.side === THREE.BackSide
        };
    };
    this.getProgramCode = function(a1, b) {
        var c = [];
        b.shaderID ? c.push(b.shaderID) : (c.push(a1.fragmentShader), c.push(a1.vertexShader));
        if (void 0 !== a1.defines) for(var d in a1.defines)c.push(d), c.push(a1.defines[d]);
        for(d = 0; d < e.length; d++){
            var l = e[d];
            c.push(l);
            c.push(b[l]);
        }
        return c.join();
    };
    this.acquireProgram = function(b, d, e) {
        for(var k, l = 0, n = c.length; l < n; l++){
            var p = c[l];
            if (p.code === e) {
                k = p;
                ++k.usedTimes;
                break;
            }
        }
        void 0 === k && (k = new THREE.WebGLProgram(a1, e, b, d), c.push(k));
        return k;
    };
    this.releaseProgram = function(a1) {
        if (0 === --a1.usedTimes) {
            var b = c.indexOf(a1);
            c[b] = c[c.length - 1];
            c.pop();
            a1.destroy();
        }
    };
    this.programs = c;
};
THREE.WebGLProperties = function() {
    var a1 = {};
    this.get = function(b) {
        b = b.uuid;
        var c = a1[b];
        void 0 === c && (c = {}, a1[b] = c);
        return c;
    };
    this.delete = function(b) {
        delete a1[b.uuid];
    };
    this.clear = function() {
        a1 = {};
    };
};
THREE.WebGLShader = function() {
    var a1 = function(a1) {
        a1 = a1.split("\n");
        for(var c = 0; c < a1.length; c++)a1[c] = c + 1 + ": " + a1[c];
        return a1.join("\n");
    };
    return function(b, c, d) {
        var e = b.createShader(c);
        b.shaderSource(e, d);
        b.compileShader(e);
        !1 === b.getShaderParameter(e, b.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile.");
        "" !== b.getShaderInfoLog(e) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", c === b.VERTEX_SHADER ? "vertex" : "fragment", b.getShaderInfoLog(e), a1(d));
        return e;
    };
}();
THREE.WebGLShadowMap = function(a1, b, c) {
    function d(a1, b) {
        var c = a1.geometry, c = void 0 !== c.morphTargets && 0 < c.morphTargets.length && b.morphTargets, d = a1 instanceof THREE.SkinnedMesh && b.skinning, c = a1.customDepthMaterial ? a1.customDepthMaterial : d ? c ? u : r : c ? t : q;
        c.visible = b.visible;
        c.wireframe = b.wireframe;
        c.wireframeLinewidth = b.wireframeLinewidth;
        return c;
    }
    function e(a1, b) {
        if (!1 !== a1.visible) {
            (a1 instanceof THREE.Mesh || a1 instanceof THREE.Line || a1 instanceof THREE.Points) && a1.castShadow && (!1 === a1.frustumCulled || !0 === h.intersectsObject(a1)) && !0 === a1.material.visible && (a1.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, a1.matrixWorld), n.push(a1));
            for(var c = a1.children, d = 0, f = c.length; d < f; d++)e(c[d], b);
        }
    }
    var g = a1.context, f = a1.state, h = new THREE.Frustum, k = new THREE.Matrix4;
    new THREE.Vector3;
    new THREE.Vector3;
    var l = new THREE.Vector3, n = [], p = THREE.ShaderLib.depthRGBA, m = THREE.UniformsUtils.clone(p.uniforms), q = new THREE.ShaderMaterial({
        uniforms: m,
        vertexShader: p.vertexShader,
        fragmentShader: p.fragmentShader
    }), t = new THREE.ShaderMaterial({
        uniforms: m,
        vertexShader: p.vertexShader,
        fragmentShader: p.fragmentShader,
        morphTargets: !0
    }), r = new THREE.ShaderMaterial({
        uniforms: m,
        vertexShader: p.vertexShader,
        fragmentShader: p.fragmentShader,
        skinning: !0
    }), u = new THREE.ShaderMaterial({
        uniforms: m,
        vertexShader: p.vertexShader,
        fragmentShader: p.fragmentShader,
        morphTargets: !0,
        skinning: !0
    });
    q._shadowPass = !0;
    t._shadowPass = !0;
    r._shadowPass = !0;
    u._shadowPass = !0;
    var w = this;
    this.enabled = !1;
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this.type = THREE.PCFShadowMap;
    this.cullFace = THREE.CullFaceFront;
    this.render = function(m, q) {
        if (!1 !== w.enabled && (!1 !== w.autoUpdate || !1 !== w.needsUpdate)) {
            g.clearColor(1, 1, 1, 1);
            f.disable(g.BLEND);
            f.enable(g.CULL_FACE);
            g.frontFace(g.CCW);
            w.cullFace === THREE.CullFaceFront ? g.cullFace(g.FRONT) : g.cullFace(g.BACK);
            f.setDepthTest(!0);
            for(var p = 0, t = b.length; p < t; p++){
                var r = b[p];
                if (r.castShadow) {
                    if (!r.shadowMap) {
                        var u = THREE.LinearFilter;
                        w.type === THREE.PCFSoftShadowMap && (u = THREE.NearestFilter);
                        r.shadowMap = new THREE.WebGLRenderTarget(r.shadowMapWidth, r.shadowMapHeight, {
                            minFilter: u,
                            magFilter: u,
                            format: THREE.RGBAFormat
                        });
                        r.shadowMapSize = new THREE.Vector2(r.shadowMapWidth, r.shadowMapHeight);
                        r.shadowMatrix = new THREE.Matrix4;
                    }
                    if (!r.shadowCamera) {
                        if (r instanceof THREE.SpotLight) r.shadowCamera = new THREE.PerspectiveCamera(r.shadowCameraFov, r.shadowMapWidth / r.shadowMapHeight, r.shadowCameraNear, r.shadowCameraFar);
                        else if (r instanceof THREE.DirectionalLight) r.shadowCamera = new THREE.OrthographicCamera(r.shadowCameraLeft, r.shadowCameraRight, r.shadowCameraTop, r.shadowCameraBottom, r.shadowCameraNear, r.shadowCameraFar);
                        else {
                            console.error("THREE.ShadowMapPlugin: Unsupported light type for shadow", r);
                            continue;
                        }
                        m.add(r.shadowCamera);
                        !0 === m.autoUpdate && m.updateMatrixWorld();
                    }
                    r.shadowCameraVisible && !r.cameraHelper && (r.cameraHelper = new THREE.CameraHelper(r.shadowCamera), m.add(r.cameraHelper));
                    var D = r.shadowMap, G = r.shadowMatrix, u = r.shadowCamera;
                    u.position.setFromMatrixPosition(r.matrixWorld);
                    l.setFromMatrixPosition(r.target.matrixWorld);
                    u.lookAt(l);
                    u.updateMatrixWorld();
                    u.matrixWorldInverse.getInverse(u.matrixWorld);
                    r.cameraHelper && (r.cameraHelper.visible = r.shadowCameraVisible);
                    r.shadowCameraVisible && r.cameraHelper.update();
                    G.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
                    G.multiply(u.projectionMatrix);
                    G.multiply(u.matrixWorldInverse);
                    k.multiplyMatrices(u.projectionMatrix, u.matrixWorldInverse);
                    h.setFromMatrix(k);
                    a1.setRenderTarget(D);
                    a1.clear();
                    n.length = 0;
                    e(m, u);
                    r = 0;
                    for(D = n.length; r < D; r++){
                        var G = n[r], O = c.update(G), C = G.material;
                        if (C instanceof THREE.MeshFaceMaterial) for(var F = O.groups, C = C.materials, K = 0, L = F.length; K < L; K++){
                            var E = F[K], J = C[E.materialIndex];
                            !0 === J.visible && a1.renderBufferDirect(u, b, null, O, d(G, J), G, E);
                        }
                        else a1.renderBufferDirect(u, b, null, O, d(G, C), G);
                    }
                }
            }
            p = a1.getClearColor();
            t = a1.getClearAlpha();
            a1.setClearColor(p, t);
            f.enable(g.BLEND);
            w.cullFace === THREE.CullFaceFront && g.cullFace(g.BACK);
            a1.resetGLState();
            w.needsUpdate = !1;
        }
    };
};
THREE.WebGLState = function(a1, b, c) {
    var d = this, e = new Uint8Array(16), g = new Uint8Array(16), f = {}, h = null, k = null, l = null, n = null, p = null, m = null, q = null, t = null, r = null, u = null, w = null, v = null, B = null, x = null, H = null, I = a1.getParameter(a1.MAX_TEXTURE_IMAGE_UNITS), z = void 0, D = {};
    this.init = function() {
        a1.clearColor(0, 0, 0, 1);
        a1.clearDepth(1);
        a1.clearStencil(0);
        this.enable(a1.DEPTH_TEST);
        a1.depthFunc(a1.LEQUAL);
        a1.frontFace(a1.CCW);
        a1.cullFace(a1.BACK);
        this.enable(a1.CULL_FACE);
        this.enable(a1.BLEND);
        a1.blendEquation(a1.FUNC_ADD);
        a1.blendFunc(a1.SRC_ALPHA, a1.ONE_MINUS_SRC_ALPHA);
    };
    this.initAttributes = function() {
        for(var a1 = 0, b = e.length; a1 < b; a1++)e[a1] = 0;
    };
    this.enableAttribute = function(b) {
        e[b] = 1;
        0 === g[b] && (a1.enableVertexAttribArray(b), g[b] = 1);
    };
    this.disableUnusedAttributes = function() {
        for(var b = 0, c = g.length; b < c; b++)g[b] !== e[b] && (a1.disableVertexAttribArray(b), g[b] = 0);
    };
    this.enable = function(b) {
        !0 !== f[b] && (a1.enable(b), f[b] = !0);
    };
    this.disable = function(b) {
        !1 !== f[b] && (a1.disable(b), f[b] = !1);
    };
    this.getCompressedTextureFormats = function() {
        if (null === h && (h = [], b.get("WEBGL_compressed_texture_pvrtc") || b.get("WEBGL_compressed_texture_s3tc"))) for(var c = a1.getParameter(a1.COMPRESSED_TEXTURE_FORMATS), d = 0; d < c.length; d++)h.push(c[d]);
        return h;
    };
    this.setBlending = function(b, d, e, f, g, h, r) {
        b !== k && (b === THREE.NoBlending ? this.disable(a1.BLEND) : b === THREE.AdditiveBlending ? (this.enable(a1.BLEND), a1.blendEquation(a1.FUNC_ADD), a1.blendFunc(a1.SRC_ALPHA, a1.ONE)) : b === THREE.SubtractiveBlending ? (this.enable(a1.BLEND), a1.blendEquation(a1.FUNC_ADD), a1.blendFunc(a1.ZERO, a1.ONE_MINUS_SRC_COLOR)) : b === THREE.MultiplyBlending ? (this.enable(a1.BLEND), a1.blendEquation(a1.FUNC_ADD), a1.blendFunc(a1.ZERO, a1.SRC_COLOR)) : b === THREE.CustomBlending ? this.enable(a1.BLEND) : (this.enable(a1.BLEND), a1.blendEquationSeparate(a1.FUNC_ADD, a1.FUNC_ADD), a1.blendFuncSeparate(a1.SRC_ALPHA, a1.ONE_MINUS_SRC_ALPHA, a1.ONE, a1.ONE_MINUS_SRC_ALPHA)), k = b);
        if (b === THREE.CustomBlending) {
            g = g || d;
            h = h || e;
            r = r || f;
            if (d !== l || g !== m) a1.blendEquationSeparate(c(d), c(g)), l = d, m = g;
            if (e !== n || f !== p || h !== q || r !== t) a1.blendFuncSeparate(c(e), c(f), c(h), c(r)), n = e, p = f, q = h, t = r;
        } else t = q = m = p = n = l = null;
    };
    this.setDepthFunc = function(b) {
        if (r !== b) {
            if (b) switch(b){
                case THREE.NeverDepth:
                    a1.depthFunc(a1.NEVER);
                    break;
                case THREE.AlwaysDepth:
                    a1.depthFunc(a1.ALWAYS);
                    break;
                case THREE.LessDepth:
                    a1.depthFunc(a1.LESS);
                    break;
                case THREE.LessEqualDepth:
                    a1.depthFunc(a1.LEQUAL);
                    break;
                case THREE.EqualDepth:
                    a1.depthFunc(a1.EQUAL);
                    break;
                case THREE.GreaterEqualDepth:
                    a1.depthFunc(a1.GEQUAL);
                    break;
                case THREE.GreaterDepth:
                    a1.depthFunc(a1.GREATER);
                    break;
                case THREE.NotEqualDepth:
                    a1.depthFunc(a1.NOTEQUAL);
                    break;
                default:
                    a1.depthFunc(a1.LEQUAL);
            }
            else a1.depthFunc(a1.LEQUAL);
            r = b;
        }
    };
    this.setDepthTest = function(b) {
        b ? this.enable(a1.DEPTH_TEST) : this.disable(a1.DEPTH_TEST);
    };
    this.setDepthWrite = function(b) {
        u !== b && (a1.depthMask(b), u = b);
    };
    this.setColorWrite = function(b) {
        w !== b && (a1.colorMask(b, b, b, b), w = b);
    };
    this.setFlipSided = function(b) {
        v !== b && (b ? a1.frontFace(a1.CW) : a1.frontFace(a1.CCW), v = b);
    };
    this.setLineWidth = function(b) {
        b !== B && (a1.lineWidth(b), B = b);
    };
    this.setPolygonOffset = function(b, c, d) {
        b ? this.enable(a1.POLYGON_OFFSET_FILL) : this.disable(a1.POLYGON_OFFSET_FILL);
        !b || x === c && H === d || (a1.polygonOffset(c, d), x = c, H = d);
    };
    this.setScissorTest = function(b) {
        b ? this.enable(a1.SCISSOR_TEST) : this.disable(a1.SCISSOR_TEST);
    };
    this.activeTexture = function(b) {
        void 0 === b && (b = a1.TEXTURE0 + I - 1);
        z !== b && (a1.activeTexture(b), z = b);
    };
    this.bindTexture = function(b, c) {
        void 0 === z && d.activeTexture();
        var e = D[z];
        void 0 === e && (e = {
            type: void 0,
            texture: void 0
        }, D[z] = e);
        if (e.type !== b || e.texture !== c) a1.bindTexture(b, c), e.type = b, e.texture = c;
    };
    this.compressedTexImage2D = function() {
        try {
            a1.compressedTexImage2D.apply(a1, arguments);
        } catch (b) {
            console.error(b);
        }
    };
    this.texImage2D = function() {
        try {
            a1.texImage2D.apply(a1, arguments);
        } catch (b) {
            console.error(b);
        }
    };
    this.reset = function() {
        for(var b = 0; b < g.length; b++)1 === g[b] && (a1.disableVertexAttribArray(b), g[b] = 0);
        f = {};
        v = w = u = k = h = null;
    };
};
THREE.LensFlarePlugin = function(a1, b) {
    var c, d, e, g, f, h, k, l, n, p, m = a1.context, q = a1.state, t, r, u, w, v, B;
    this.render = function(x, H, I, z) {
        if (0 !== b.length) {
            x = new THREE.Vector3;
            var D = z / I, G = .5 * I, O = .5 * z, C = 16 / z, F = new THREE.Vector2(C * D, C), K = new THREE.Vector3(1, 1, 0), L = new THREE.Vector2(1, 1);
            if (void 0 === u) {
                var C = new Float32Array([
                    -1,
                    -1,
                    0,
                    0,
                    1,
                    -1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    1,
                    -1,
                    1,
                    0,
                    1
                ]), E = new Uint16Array([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]);
                t = m.createBuffer();
                r = m.createBuffer();
                m.bindBuffer(m.ARRAY_BUFFER, t);
                m.bufferData(m.ARRAY_BUFFER, C, m.STATIC_DRAW);
                m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, r);
                m.bufferData(m.ELEMENT_ARRAY_BUFFER, E, m.STATIC_DRAW);
                v = m.createTexture();
                B = m.createTexture();
                q.bindTexture(m.TEXTURE_2D, v);
                m.texImage2D(m.TEXTURE_2D, 0, m.RGB, 16, 16, 0, m.RGB, m.UNSIGNED_BYTE, null);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST);
                q.bindTexture(m.TEXTURE_2D, B);
                m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, 16, 16, 0, m.RGBA, m.UNSIGNED_BYTE, null);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST);
                var C = (w = 0 < m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) ? {
                    vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                    fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                } : {
                    vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                    fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                }, E = m.createProgram(), J = m.createShader(m.FRAGMENT_SHADER), y = m.createShader(m.VERTEX_SHADER), P = "precision " + a1.getPrecision() + " float;\n";
                m.shaderSource(J, P + C.fragmentShader);
                m.shaderSource(y, P + C.vertexShader);
                m.compileShader(J);
                m.compileShader(y);
                m.attachShader(E, J);
                m.attachShader(E, y);
                m.linkProgram(E);
                u = E;
                n = m.getAttribLocation(u, "position");
                p = m.getAttribLocation(u, "uv");
                c = m.getUniformLocation(u, "renderType");
                d = m.getUniformLocation(u, "map");
                e = m.getUniformLocation(u, "occlusionMap");
                g = m.getUniformLocation(u, "opacity");
                f = m.getUniformLocation(u, "color");
                h = m.getUniformLocation(u, "scale");
                k = m.getUniformLocation(u, "rotation");
                l = m.getUniformLocation(u, "screenPosition");
            }
            m.useProgram(u);
            q.initAttributes();
            q.enableAttribute(n);
            q.enableAttribute(p);
            q.disableUnusedAttributes();
            m.uniform1i(e, 0);
            m.uniform1i(d, 1);
            m.bindBuffer(m.ARRAY_BUFFER, t);
            m.vertexAttribPointer(n, 2, m.FLOAT, !1, 16, 0);
            m.vertexAttribPointer(p, 2, m.FLOAT, !1, 16, 8);
            m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, r);
            q.disable(m.CULL_FACE);
            m.depthMask(!1);
            E = 0;
            for(J = b.length; E < J; E++)if (C = 16 / z, F.set(C * D, C), y = b[E], x.set(y.matrixWorld.elements[12], y.matrixWorld.elements[13], y.matrixWorld.elements[14]), x.applyMatrix4(H.matrixWorldInverse), x.applyProjection(H.projectionMatrix), K.copy(x), L.x = K.x * G + G, L.y = K.y * O + O, w || 0 < L.x && L.x < I && 0 < L.y && L.y < z) {
                q.activeTexture(m.TEXTURE0);
                q.bindTexture(m.TEXTURE_2D, null);
                q.activeTexture(m.TEXTURE1);
                q.bindTexture(m.TEXTURE_2D, v);
                m.copyTexImage2D(m.TEXTURE_2D, 0, m.RGB, L.x - 8, L.y - 8, 16, 16, 0);
                m.uniform1i(c, 0);
                m.uniform2f(h, F.x, F.y);
                m.uniform3f(l, K.x, K.y, K.z);
                q.disable(m.BLEND);
                q.enable(m.DEPTH_TEST);
                m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0);
                q.activeTexture(m.TEXTURE0);
                q.bindTexture(m.TEXTURE_2D, B);
                m.copyTexImage2D(m.TEXTURE_2D, 0, m.RGBA, L.x - 8, L.y - 8, 16, 16, 0);
                m.uniform1i(c, 1);
                q.disable(m.DEPTH_TEST);
                q.activeTexture(m.TEXTURE1);
                q.bindTexture(m.TEXTURE_2D, v);
                m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0);
                y.positionScreen.copy(K);
                y.customUpdateCallback ? y.customUpdateCallback(y) : y.updateLensFlares();
                m.uniform1i(c, 2);
                q.enable(m.BLEND);
                for(var P = 0, U = y.lensFlares.length; P < U; P++){
                    var Q = y.lensFlares[P];
                    .001 < Q.opacity && .001 < Q.scale && (K.x = Q.x, K.y = Q.y, K.z = Q.z, C = Q.size * Q.scale / z, F.x = C * D, F.y = C, m.uniform3f(l, K.x, K.y, K.z), m.uniform2f(h, F.x, F.y), m.uniform1f(k, Q.rotation), m.uniform1f(g, Q.opacity), m.uniform3f(f, Q.color.r, Q.color.g, Q.color.b), q.setBlending(Q.blending, Q.blendEquation, Q.blendSrc, Q.blendDst), a1.setTexture(Q.texture, 1), m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0));
                }
            }
            q.enable(m.CULL_FACE);
            q.enable(m.DEPTH_TEST);
            m.depthMask(!0);
            a1.resetGLState();
        }
    };
};
THREE.SpritePlugin = function(a1, b) {
    var c, d, e, g, f, h, k, l, n, p, m, q, t, r, u, w, v;
    function B(a1, b) {
        return a1.z !== b.z ? b.z - a1.z : b.id - a1.id;
    }
    var x = a1.context, H = a1.state, I, z, D, G, O = new THREE.Vector3, C = new THREE.Quaternion, F = new THREE.Vector3;
    this.render = function(K, L) {
        if (0 !== b.length) {
            if (void 0 === D) {
                var E = new Float32Array([
                    -0.5,
                    -0.5,
                    0,
                    0,
                    .5,
                    -0.5,
                    1,
                    0,
                    .5,
                    .5,
                    1,
                    1,
                    -0.5,
                    .5,
                    0,
                    1
                ]), J = new Uint16Array([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]);
                I = x.createBuffer();
                z = x.createBuffer();
                x.bindBuffer(x.ARRAY_BUFFER, I);
                x.bufferData(x.ARRAY_BUFFER, E, x.STATIC_DRAW);
                x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, z);
                x.bufferData(x.ELEMENT_ARRAY_BUFFER, J, x.STATIC_DRAW);
                var E = x.createProgram(), J = x.createShader(x.VERTEX_SHADER), y = x.createShader(x.FRAGMENT_SHADER);
                x.shaderSource(J, [
                    "precision " + a1.getPrecision() + " float;",
                    "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"
                ].join("\n"));
                x.shaderSource(y, [
                    "precision " + a1.getPrecision() + " float;",
                    "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"
                ].join("\n"));
                x.compileShader(J);
                x.compileShader(y);
                x.attachShader(E, J);
                x.attachShader(E, y);
                x.linkProgram(E);
                D = E;
                w = x.getAttribLocation(D, "position");
                v = x.getAttribLocation(D, "uv");
                c = x.getUniformLocation(D, "uvOffset");
                d = x.getUniformLocation(D, "uvScale");
                e = x.getUniformLocation(D, "rotation");
                g = x.getUniformLocation(D, "scale");
                f = x.getUniformLocation(D, "color");
                h = x.getUniformLocation(D, "map");
                k = x.getUniformLocation(D, "opacity");
                l = x.getUniformLocation(D, "modelViewMatrix");
                n = x.getUniformLocation(D, "projectionMatrix");
                p = x.getUniformLocation(D, "fogType");
                m = x.getUniformLocation(D, "fogDensity");
                q = x.getUniformLocation(D, "fogNear");
                t = x.getUniformLocation(D, "fogFar");
                r = x.getUniformLocation(D, "fogColor");
                u = x.getUniformLocation(D, "alphaTest");
                E = document.createElement("canvas");
                E.width = 8;
                E.height = 8;
                J = E.getContext("2d");
                J.fillStyle = "white";
                J.fillRect(0, 0, 8, 8);
                G = new THREE.Texture(E);
                G.needsUpdate = !0;
            }
            x.useProgram(D);
            H.initAttributes();
            H.enableAttribute(w);
            H.enableAttribute(v);
            H.disableUnusedAttributes();
            H.disable(x.CULL_FACE);
            H.enable(x.BLEND);
            x.bindBuffer(x.ARRAY_BUFFER, I);
            x.vertexAttribPointer(w, 2, x.FLOAT, !1, 16, 0);
            x.vertexAttribPointer(v, 2, x.FLOAT, !1, 16, 8);
            x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, z);
            x.uniformMatrix4fv(n, !1, L.projectionMatrix.elements);
            H.activeTexture(x.TEXTURE0);
            x.uniform1i(h, 0);
            J = E = 0;
            (y = K.fog) ? (x.uniform3f(r, y.color.r, y.color.g, y.color.b), y instanceof THREE.Fog ? (x.uniform1f(q, y.near), x.uniform1f(t, y.far), x.uniform1i(p, 1), J = E = 1) : y instanceof THREE.FogExp2 && (x.uniform1f(m, y.density), x.uniform1i(p, 2), J = E = 2)) : (x.uniform1i(p, 0), J = E = 0);
            for(var y = 0, P = b.length; y < P; y++){
                var U = b[y];
                U.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, U.matrixWorld);
                U.z = -U.modelViewMatrix.elements[14];
            }
            b.sort(B);
            for(var Q = [], y = 0, P = b.length; y < P; y++){
                var U = b[y], R = U.material;
                x.uniform1f(u, R.alphaTest);
                x.uniformMatrix4fv(l, !1, U.modelViewMatrix.elements);
                U.matrixWorld.decompose(O, C, F);
                Q[0] = F.x;
                Q[1] = F.y;
                U = 0;
                K.fog && R.fog && (U = J);
                E !== U && (x.uniform1i(p, U), E = U);
                null !== R.map ? (x.uniform2f(c, R.map.offset.x, R.map.offset.y), x.uniform2f(d, R.map.repeat.x, R.map.repeat.y)) : (x.uniform2f(c, 0, 0), x.uniform2f(d, 1, 1));
                x.uniform1f(k, R.opacity);
                x.uniform3f(f, R.color.r, R.color.g, R.color.b);
                x.uniform1f(e, R.rotation);
                x.uniform2fv(g, Q);
                H.setBlending(R.blending, R.blendEquation, R.blendSrc, R.blendDst);
                H.setDepthTest(R.depthTest);
                H.setDepthWrite(R.depthWrite);
                R.map && R.map.image && R.map.image.width ? a1.setTexture(R.map, 0) : a1.setTexture(G, 0);
                x.drawElements(x.TRIANGLES, 6, x.UNSIGNED_SHORT, 0);
            }
            H.enable(x.CULL_FACE);
            a1.resetGLState();
        }
    };
};
THREE.GeometryUtils = {
    merge: function(a1, b, c) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var d;
        b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, b = b.geometry);
        a1.merge(b, d, c);
    },
    center: function(a1) {
        console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
        return a1.center();
    }
};
THREE.ImageUtils = {
    crossOrigin: void 0,
    loadTexture: function(a1, b, c, d) {
        var e = new THREE.ImageLoader;
        e.crossOrigin = this.crossOrigin;
        var g = new THREE.Texture(void 0, b);
        e.load(a1, function(a1) {
            g.image = a1;
            g.needsUpdate = !0;
            c && c(g);
        }, void 0, function(a1) {
            d && d(a1);
        });
        g.sourceFile = a1;
        return g;
    },
    loadTextureCube: function(a1, b, c, d) {
        var e = new THREE.ImageLoader;
        e.crossOrigin = this.crossOrigin;
        var g = new THREE.CubeTexture([], b), f = 0;
        b = function(b) {
            e.load(a1[b], function(a1) {
                g.images[b] = a1;
                f += 1;
                6 === f && (g.needsUpdate = !0, c && c(g));
            }, void 0, d);
        };
        for(var h = 0, k = a1.length; h < k; ++h)b(h);
        return g;
    },
    loadCompressedTexture: function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
    },
    loadCompressedTextureCube: function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
    },
    getNormalMap: function(a1, b) {
        var c = function(a1) {
            var b = Math.sqrt(a1[0] * a1[0] + a1[1] * a1[1] + a1[2] * a1[2]);
            return [
                a1[0] / b,
                a1[1] / b,
                a1[2] / b
            ];
        };
        b |= 1;
        var d = a1.width, e = a1.height, g = document.createElement("canvas");
        g.width = d;
        g.height = e;
        var f = g.getContext("2d");
        f.drawImage(a1, 0, 0);
        for(var h = f.getImageData(0, 0, d, e).data, k = f.createImageData(d, e), l = k.data, n = 0; n < d; n++)for(var p = 0; p < e; p++){
            var m = 0 > p - 1 ? 0 : p - 1, q = p + 1 > e - 1 ? e - 1 : p + 1, t = 0 > n - 1 ? 0 : n - 1, r = n + 1 > d - 1 ? d - 1 : n + 1, u = [], w = [
                0,
                0,
                h[4 * (p * d + n)] / 255 * b
            ];
            u.push([
                -1,
                0,
                h[4 * (p * d + t)] / 255 * b
            ]);
            u.push([
                -1,
                -1,
                h[4 * (m * d + t)] / 255 * b
            ]);
            u.push([
                0,
                -1,
                h[4 * (m * d + n)] / 255 * b
            ]);
            u.push([
                1,
                -1,
                h[4 * (m * d + r)] / 255 * b
            ]);
            u.push([
                1,
                0,
                h[4 * (p * d + r)] / 255 * b
            ]);
            u.push([
                1,
                1,
                h[4 * (q * d + r)] / 255 * b
            ]);
            u.push([
                0,
                1,
                h[4 * (q * d + n)] / 255 * b
            ]);
            u.push([
                -1,
                1,
                h[4 * (q * d + t)] / 255 * b
            ]);
            m = [];
            t = u.length;
            for(q = 0; q < t; q++){
                var r = u[q], v = u[(q + 1) % t], r = [
                    r[0] - w[0],
                    r[1] - w[1],
                    r[2] - w[2]
                ], v = [
                    v[0] - w[0],
                    v[1] - w[1],
                    v[2] - w[2]
                ];
                m.push(c([
                    r[1] * v[2] - r[2] * v[1],
                    r[2] * v[0] - r[0] * v[2],
                    r[0] * v[1] - r[1] * v[0]
                ]));
            }
            u = [
                0,
                0,
                0
            ];
            for(q = 0; q < m.length; q++)u[0] += m[q][0], u[1] += m[q][1], u[2] += m[q][2];
            u[0] /= m.length;
            u[1] /= m.length;
            u[2] /= m.length;
            w = 4 * (p * d + n);
            l[w] = (u[0] + 1) / 2 * 255 | 0;
            l[w + 1] = (u[1] + 1) / 2 * 255 | 0;
            l[w + 2] = 255 * u[2] | 0;
            l[w + 3] = 255;
        }
        f.putImageData(k, 0, 0);
        return g;
    },
    generateDataTexture: function(a1, b, c) {
        var d = a1 * b, e = new Uint8Array(3 * d), g = Math.floor(255 * c.r), f = Math.floor(255 * c.g);
        c = Math.floor(255 * c.b);
        for(var h = 0; h < d; h++)e[3 * h] = g, e[3 * h + 1] = f, e[3 * h + 2] = c;
        a1 = new THREE.DataTexture(e, a1, b, THREE.RGBFormat);
        a1.needsUpdate = !0;
        return a1;
    }
};
THREE.SceneUtils = {
    createMultiMaterialObject: function(a1, b) {
        for(var c = new THREE.Group, d = 0, e = b.length; d < e; d++)c.add(new THREE.Mesh(a1, b[d]));
        return c;
    },
    detach: function(a1, b, c) {
        a1.applyMatrix(b.matrixWorld);
        b.remove(a1);
        c.add(a1);
    },
    attach: function(a1, b, c) {
        var d = new THREE.Matrix4;
        d.getInverse(c.matrixWorld);
        a1.applyMatrix(d);
        b.remove(a1);
        c.add(a1);
    }
};
THREE.FontUtils = {
    faces: {},
    face: "helvetiker",
    weight: "normal",
    style: "normal",
    size: 150,
    divisions: 10,
    getFace: function() {
        try {
            return this.faces[this.face.toLowerCase()][this.weight][this.style];
        } catch (a1) {
            throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing.";
        }
    },
    loadFace: function(a1) {
        var b = a1.familyName.toLowerCase();
        this.faces[b] = this.faces[b] || {};
        this.faces[b][a1.cssFontWeight] = this.faces[b][a1.cssFontWeight] || {};
        this.faces[b][a1.cssFontWeight][a1.cssFontStyle] = a1;
        return this.faces[b][a1.cssFontWeight][a1.cssFontStyle] = a1;
    },
    drawText: function(a1) {
        var b = this.getFace(), c = this.size / b.resolution, d = 0, e = String(a1).split(""), g = e.length, f = [];
        for(a1 = 0; a1 < g; a1++){
            var h = new THREE.Path, h = this.extractGlyphPoints(e[a1], b, c, d, h), d = d + h.offset;
            f.push(h.path);
        }
        return {
            paths: f,
            offset: d / 2
        };
    },
    extractGlyphPoints: function(a1, b, c, d, e) {
        var g = [], f, h, k, l, n, p, m, q, t, r, u, w = b.glyphs[a1] || b.glyphs["?"];
        if (w) {
            if (w.o) for(b = w._cachedOutline || (w._cachedOutline = w.o.split(" ")), l = b.length, a1 = 0; a1 < l;)switch(k = b[a1++], k){
                case "m":
                    k = b[a1++] * c + d;
                    n = b[a1++] * c;
                    e.moveTo(k, n);
                    break;
                case "l":
                    k = b[a1++] * c + d;
                    n = b[a1++] * c;
                    e.lineTo(k, n);
                    break;
                case "q":
                    k = b[a1++] * c + d;
                    n = b[a1++] * c;
                    q = b[a1++] * c + d;
                    t = b[a1++] * c;
                    e.quadraticCurveTo(q, t, k, n);
                    if (f = g[g.length - 1]) for(p = f.x, m = f.y, f = 1, h = this.divisions; f <= h; f++){
                        var v = f / h;
                        THREE.Shape.Utils.b2(v, p, q, k);
                        THREE.Shape.Utils.b2(v, m, t, n);
                    }
                    break;
                case "b":
                    if (k = b[a1++] * c + d, n = b[a1++] * c, q = b[a1++] * c + d, t = b[a1++] * c, r = b[a1++] * c + d, u = b[a1++] * c, e.bezierCurveTo(q, t, r, u, k, n), f = g[g.length - 1]) for(p = f.x, m = f.y, f = 1, h = this.divisions; f <= h; f++)v = f / h, THREE.Shape.Utils.b3(v, p, q, r, k), THREE.Shape.Utils.b3(v, m, t, u, n);
            }
            return {
                offset: w.ha * c,
                path: e
            };
        }
    }
};
THREE.FontUtils.generateShapes = function(a1, b) {
    b = b || {};
    var c = void 0 !== b.curveSegments ? b.curveSegments : 4, d = void 0 !== b.font ? b.font : "helvetiker", e = void 0 !== b.weight ? b.weight : "normal", g = void 0 !== b.style ? b.style : "normal";
    THREE.FontUtils.size = void 0 !== b.size ? b.size : 100;
    THREE.FontUtils.divisions = c;
    THREE.FontUtils.face = d;
    THREE.FontUtils.weight = e;
    THREE.FontUtils.style = g;
    c = THREE.FontUtils.drawText(a1).paths;
    d = [];
    e = 0;
    for(g = c.length; e < g; e++)Array.prototype.push.apply(d, c[e].toShapes());
    return d;
};
(function(a1) {
    var b = function(a1) {
        for(var b = a1.length, e = 0, g = b - 1, f = 0; f < b; g = f++)e += a1[g].x * a1[f].y - a1[f].x * a1[g].y;
        return .5 * e;
    };
    a1.Triangulate = function(a1, d) {
        var e = a1.length;
        if (3 > e) return null;
        var g = [], f = [], h = [], k, l, n;
        if (0 < b(a1)) for(l = 0; l < e; l++)f[l] = l;
        else for(l = 0; l < e; l++)f[l] = e - 1 - l;
        var p = 2 * e;
        for(l = e - 1; 2 < e;){
            if (0 >= p--) {
                console.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");
                break;
            }
            k = l;
            e <= k && (k = 0);
            l = k + 1;
            e <= l && (l = 0);
            n = l + 1;
            e <= n && (n = 0);
            var m;
            a: {
                var q = m = void 0, t = void 0, r = void 0, u = void 0, w = void 0, v = void 0, B = void 0, x = void 0, q = a1[f[k]].x, t = a1[f[k]].y, r = a1[f[l]].x, u = a1[f[l]].y, w = a1[f[n]].x, v = a1[f[n]].y;
                if (1E-10 > (r - q) * (v - t) - (u - t) * (w - q)) m = !1;
                else {
                    var H = void 0, I = void 0, z = void 0, D = void 0, G = void 0, O = void 0, C = void 0, F = void 0, K = void 0, L = void 0, K = F = C = x = B = void 0, H = w - r, I = v - u, z = q - w, D = t - v, G = r - q, O = u - t;
                    for(m = 0; m < e; m++)if (B = a1[f[m]].x, x = a1[f[m]].y, !(B === q && x === t || B === r && x === u || B === w && x === v) && (C = B - q, F = x - t, K = B - r, L = x - u, B -= w, x -= v, K = H * L - I * K, C = G * F - O * C, F = z * x - D * B, -0.0000000001 <= K && -0.0000000001 <= F && -0.0000000001 <= C)) {
                        m = !1;
                        break a;
                    }
                    m = !0;
                }
            }
            if (m) {
                g.push([
                    a1[f[k]],
                    a1[f[l]],
                    a1[f[n]]
                ]);
                h.push([
                    f[k],
                    f[l],
                    f[n]
                ]);
                k = l;
                for(n = l + 1; n < e; k++, n++)f[k] = f[n];
                e--;
                p = 2 * e;
            }
        }
        return d ? h : g;
    };
    a1.Triangulate.area = b;
    return a1;
})(THREE.FontUtils);
THREE.typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace
};
"undefined" !== typeof self && (self._typeface_js = THREE.typeface_js);
THREE.Audio = function(a1) {
    THREE.Object3D.call(this);
    this.type = "Audio";
    this.context = a1.context;
    this.source = this.context.createBufferSource();
    this.source.onended = this.onEnded.bind(this);
    this.gain = this.context.createGain();
    this.gain.connect(this.context.destination);
    this.panner = this.context.createPanner();
    this.panner.connect(this.gain);
    this.autoplay = !1;
    this.startTime = 0;
    this.playbackRate = 1;
    this.isPlaying = !1;
};
THREE.Audio.prototype = Object.create(THREE.Object3D.prototype);
THREE.Audio.prototype.constructor = THREE.Audio;
THREE.Audio.prototype.load = function(a1) {
    var b = this, c = new XMLHttpRequest;
    c.open("GET", a1, !0);
    c.responseType = "arraybuffer";
    c.onload = function(a1) {
        b.context.decodeAudioData(this.response, function(a1) {
            b.source.buffer = a1;
            b.autoplay && b.play();
        });
    };
    c.send();
    return this;
};
THREE.Audio.prototype.play = function() {
    if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing.");
    else {
        var a1 = this.context.createBufferSource();
        a1.buffer = this.source.buffer;
        a1.loop = this.source.loop;
        a1.onended = this.source.onended;
        a1.start(0, this.startTime);
        a1.playbackRate.value = this.playbackRate;
        this.isPlaying = !0;
        this.source = a1;
        this.connect();
    }
};
THREE.Audio.prototype.pause = function() {
    this.source.stop();
    this.startTime = this.context.currentTime;
};
THREE.Audio.prototype.stop = function() {
    this.source.stop();
    this.startTime = 0;
};
THREE.Audio.prototype.connect = function() {
    void 0 !== this.filter ? (this.source.connect(this.filter), this.filter.connect(this.panner)) : this.source.connect(this.panner);
};
THREE.Audio.prototype.disconnect = function() {
    void 0 !== this.filter ? (this.source.disconnect(this.filter), this.filter.disconnect(this.panner)) : this.source.disconnect(this.panner);
};
THREE.Audio.prototype.setFilter = function(a1) {
    !0 === this.isPlaying ? (this.disconnect(), this.filter = a1, this.connect()) : this.filter = a1;
};
THREE.Audio.prototype.getFilter = function() {
    return this.filter;
};
THREE.Audio.prototype.setPlaybackRate = function(a1) {
    this.playbackRate = a1;
    !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate);
};
THREE.Audio.prototype.getPlaybackRate = function() {
    return this.playbackRate;
};
THREE.Audio.prototype.onEnded = function() {
    this.isPlaying = !1;
};
THREE.Audio.prototype.setLoop = function(a1) {
    this.source.loop = a1;
};
THREE.Audio.prototype.getLoop = function() {
    return this.source.loop;
};
THREE.Audio.prototype.setRefDistance = function(a1) {
    this.panner.refDistance = a1;
};
THREE.Audio.prototype.getRefDistance = function() {
    return this.panner.refDistance;
};
THREE.Audio.prototype.setRolloffFactor = function(a1) {
    this.panner.rolloffFactor = a1;
};
THREE.Audio.prototype.getRolloffFactor = function() {
    return this.panner.rolloffFactor;
};
THREE.Audio.prototype.setVolume = function(a1) {
    this.gain.gain.value = a1;
};
THREE.Audio.prototype.getVolume = function() {
    return this.gain.gain.value;
};
THREE.Audio.prototype.updateMatrixWorld = function() {
    var a1 = new THREE.Vector3;
    return function(b) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, b);
        a1.setFromMatrixPosition(this.matrixWorld);
        this.panner.setPosition(a1.x, a1.y, a1.z);
    };
}();
THREE.AudioListener = function() {
    THREE.Object3D.call(this);
    this.type = "AudioListener";
    this.context = new (window.AudioContext || window.webkitAudioContext);
};
THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype);
THREE.AudioListener.prototype.constructor = THREE.AudioListener;
THREE.AudioListener.prototype.updateMatrixWorld = function() {
    var a1 = new THREE.Vector3, b = new THREE.Quaternion, c = new THREE.Vector3, d = new THREE.Vector3;
    return function(e) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, e);
        e = this.context.listener;
        var g = this.up;
        this.matrixWorld.decompose(a1, b, c);
        d.set(0, 0, -1).applyQuaternion(b);
        e.setPosition(a1.x, a1.y, a1.z);
        e.setOrientation(d.x, d.y, d.z, g.x, g.y, g.z);
    };
}();
THREE.Curve = function() {};
THREE.Curve.prototype.getPoint = function(a1) {
    console.warn("THREE.Curve: Warning, getPoint() not implemented!");
    return null;
};
THREE.Curve.prototype.getPointAt = function(a1) {
    a1 = this.getUtoTmapping(a1);
    return this.getPoint(a1);
};
THREE.Curve.prototype.getPoints = function(a1) {
    a1 || (a1 = 5);
    var b, c = [];
    for(b = 0; b <= a1; b++)c.push(this.getPoint(b / a1));
    return c;
};
THREE.Curve.prototype.getSpacedPoints = function(a1) {
    a1 || (a1 = 5);
    var b, c = [];
    for(b = 0; b <= a1; b++)c.push(this.getPointAt(b / a1));
    return c;
};
THREE.Curve.prototype.getLength = function() {
    var a1 = this.getLengths();
    return a1[a1.length - 1];
};
THREE.Curve.prototype.getLengths = function(a1) {
    a1 || (a1 = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
    if (this.cacheArcLengths && this.cacheArcLengths.length === a1 + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = !1;
    var b = [], c, d = this.getPoint(0), e, g = 0;
    b.push(0);
    for(e = 1; e <= a1; e++)c = this.getPoint(e / a1), g += c.distanceTo(d), b.push(g), d = c;
    return this.cacheArcLengths = b;
};
THREE.Curve.prototype.updateArcLengths = function() {
    this.needsUpdate = !0;
    this.getLengths();
};
THREE.Curve.prototype.getUtoTmapping = function(a1, b) {
    var c = this.getLengths(), d = 0, e = c.length, g;
    g = b ? b : a1 * c[e - 1];
    for(var f = 0, h = e - 1, k; f <= h;)if (d = Math.floor(f + (h - f) / 2), k = c[d] - g, 0 > k) f = d + 1;
    else if (0 < k) h = d - 1;
    else {
        h = d;
        break;
    }
    d = h;
    if (c[d] === g) return d / (e - 1);
    f = c[d];
    return c = (d + (g - f) / (c[d + 1] - f)) / (e - 1);
};
THREE.Curve.prototype.getTangent = function(a1) {
    var b = a1 - 1E-4;
    a1 += 1E-4;
    0 > b && (b = 0);
    1 < a1 && (a1 = 1);
    b = this.getPoint(b);
    return this.getPoint(a1).clone().sub(b).normalize();
};
THREE.Curve.prototype.getTangentAt = function(a1) {
    a1 = this.getUtoTmapping(a1);
    return this.getTangent(a1);
};
THREE.Curve.Utils = {
    tangentQuadraticBezier: function(a1, b, c, d) {
        return 2 * (1 - a1) * (c - b) + 2 * a1 * (d - c);
    },
    tangentCubicBezier: function(a1, b, c, d, e) {
        return -3 * b * (1 - a1) * (1 - a1) + 3 * c * (1 - a1) * (1 - a1) - 6 * a1 * c * (1 - a1) + 6 * a1 * d * (1 - a1) - 3 * a1 * a1 * d + 3 * a1 * a1 * e;
    },
    tangentSpline: function(a1, b, c, d, e) {
        return 6 * a1 * a1 - 6 * a1 + (3 * a1 * a1 - 4 * a1 + 1) + (-6 * a1 * a1 + 6 * a1) + (3 * a1 * a1 - 2 * a1);
    },
    interpolate: function(a1, b, c, d, e) {
        a1 = .5 * (c - a1);
        d = .5 * (d - b);
        var g = e * e;
        return (2 * b - 2 * c + a1 + d) * e * g + (-3 * b + 3 * c - 2 * a1 - d) * g + a1 * e + b;
    }
};
THREE.Curve.create = function(a1, b) {
    a1.prototype = Object.create(THREE.Curve.prototype);
    a1.prototype.constructor = a1;
    a1.prototype.getPoint = b;
    return a1;
};
THREE.CurvePath = function() {
    this.curves = [];
    this.bends = [];
    this.autoClose = !1;
};
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.constructor = THREE.CurvePath;
THREE.CurvePath.prototype.add = function(a1) {
    this.curves.push(a1);
};
THREE.CurvePath.prototype.checkConnection = function() {};
THREE.CurvePath.prototype.closePath = function() {
    var a1 = this.curves[0].getPoint(0), b = this.curves[this.curves.length - 1].getPoint(1);
    a1.equals(b) || this.curves.push(new THREE.LineCurve(b, a1));
};
THREE.CurvePath.prototype.getPoint = function(a1) {
    var b = a1 * this.getLength(), c = this.getCurveLengths();
    for(a1 = 0; a1 < c.length;){
        if (c[a1] >= b) return b = c[a1] - b, a1 = this.curves[a1], b = 1 - b / a1.getLength(), a1.getPointAt(b);
        a1++;
    }
    return null;
};
THREE.CurvePath.prototype.getLength = function() {
    var a1 = this.getCurveLengths();
    return a1[a1.length - 1];
};
THREE.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    var a1 = [], b = 0, c, d = this.curves.length;
    for(c = 0; c < d; c++)b += this.curves[c].getLength(), a1.push(b);
    return this.cacheLengths = a1;
};
THREE.CurvePath.prototype.getBoundingBox = function() {
    var a1 = this.getPoints(), b, c, d, e, g, f;
    b = c = Number.NEGATIVE_INFINITY;
    e = g = Number.POSITIVE_INFINITY;
    var h, k, l, n, p = a1[0] instanceof THREE.Vector3;
    n = p ? new THREE.Vector3 : new THREE.Vector2;
    k = 0;
    for(l = a1.length; k < l; k++)h = a1[k], h.x > b ? b = h.x : h.x < e && (e = h.x), h.y > c ? c = h.y : h.y < g && (g = h.y), p && (h.z > d ? d = h.z : h.z < f && (f = h.z)), n.add(h);
    a1 = {
        minX: e,
        minY: g,
        maxX: b,
        maxY: c
    };
    p && (a1.maxZ = d, a1.minZ = f);
    return a1;
};
THREE.CurvePath.prototype.createPointsGeometry = function(a1) {
    a1 = this.getPoints(a1, !0);
    return this.createGeometry(a1);
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(a1) {
    a1 = this.getSpacedPoints(a1, !0);
    return this.createGeometry(a1);
};
THREE.CurvePath.prototype.createGeometry = function(a1) {
    for(var b = new THREE.Geometry, c = 0; c < a1.length; c++)b.vertices.push(new THREE.Vector3(a1[c].x, a1[c].y, a1[c].z || 0));
    return b;
};
THREE.CurvePath.prototype.addWrapPath = function(a1) {
    this.bends.push(a1);
};
THREE.CurvePath.prototype.getTransformedPoints = function(a1, b) {
    var c = this.getPoints(a1), d, e;
    b || (b = this.bends);
    d = 0;
    for(e = b.length; d < e; d++)c = this.getWrapPoints(c, b[d]);
    return c;
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function(a1, b) {
    var c = this.getSpacedPoints(a1), d, e;
    b || (b = this.bends);
    d = 0;
    for(e = b.length; d < e; d++)c = this.getWrapPoints(c, b[d]);
    return c;
};
THREE.CurvePath.prototype.getWrapPoints = function(a1, b) {
    var c = this.getBoundingBox(), d, e, g, f, h, k;
    d = 0;
    for(e = a1.length; d < e; d++)g = a1[d], f = g.x, h = g.y, k = f / c.maxX, k = b.getUtoTmapping(k, f), f = b.getPoint(k), k = b.getTangent(k), k.set(-k.y, k.x).multiplyScalar(h), g.x = f.x + k.x, g.y = f.y + k.y;
    return a1;
};
THREE.Path = function(a1) {
    THREE.CurvePath.call(this);
    this.actions = [];
    a1 && this.fromPoints(a1);
};
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.Path.prototype.constructor = THREE.Path;
THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc",
    ELLIPSE: "ellipse"
};
THREE.Path.prototype.fromPoints = function(a1) {
    this.moveTo(a1[0].x, a1[0].y);
    for(var b = 1, c = a1.length; b < c; b++)this.lineTo(a1[b].x, a1[b].y);
};
THREE.Path.prototype.moveTo = function(a1, b) {
    var c = Array.prototype.slice.call(arguments);
    this.actions.push({
        action: THREE.PathActions.MOVE_TO,
        args: c
    });
};
THREE.Path.prototype.lineTo = function(a1, b) {
    var c = Array.prototype.slice.call(arguments), d = this.actions[this.actions.length - 1].args, d = new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a1, b));
    this.curves.push(d);
    this.actions.push({
        action: THREE.PathActions.LINE_TO,
        args: c
    });
};
THREE.Path.prototype.quadraticCurveTo = function(a1, b, c, d) {
    var e = Array.prototype.slice.call(arguments), g = this.actions[this.actions.length - 1].args, g = new THREE.QuadraticBezierCurve(new THREE.Vector2(g[g.length - 2], g[g.length - 1]), new THREE.Vector2(a1, b), new THREE.Vector2(c, d));
    this.curves.push(g);
    this.actions.push({
        action: THREE.PathActions.QUADRATIC_CURVE_TO,
        args: e
    });
};
THREE.Path.prototype.bezierCurveTo = function(a1, b, c, d, e, g) {
    var f = Array.prototype.slice.call(arguments), h = this.actions[this.actions.length - 1].args, h = new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length - 2], h[h.length - 1]), new THREE.Vector2(a1, b), new THREE.Vector2(c, d), new THREE.Vector2(e, g));
    this.curves.push(h);
    this.actions.push({
        action: THREE.PathActions.BEZIER_CURVE_TO,
        args: f
    });
};
THREE.Path.prototype.splineThru = function(a1) {
    var b = Array.prototype.slice.call(arguments), c = this.actions[this.actions.length - 1].args, c = [
        new THREE.Vector2(c[c.length - 2], c[c.length - 1])
    ];
    Array.prototype.push.apply(c, a1);
    c = new THREE.SplineCurve(c);
    this.curves.push(c);
    this.actions.push({
        action: THREE.PathActions.CSPLINE_THRU,
        args: b
    });
};
THREE.Path.prototype.arc = function(a1, b, c, d, e, g) {
    var f = this.actions[this.actions.length - 1].args;
    this.absarc(a1 + f[f.length - 2], b + f[f.length - 1], c, d, e, g);
};
THREE.Path.prototype.absarc = function(a1, b, c, d, e, g) {
    this.absellipse(a1, b, c, c, d, e, g);
};
THREE.Path.prototype.ellipse = function(a1, b, c, d, e, g, f, h) {
    var k = this.actions[this.actions.length - 1].args;
    this.absellipse(a1 + k[k.length - 2], b + k[k.length - 1], c, d, e, g, f, h);
};
THREE.Path.prototype.absellipse = function(a1, b, c, d, e, g, f, h) {
    var k = [
        a1,
        b,
        c,
        d,
        e,
        g,
        f,
        h || 0
    ];
    a1 = new THREE.EllipseCurve(a1, b, c, d, e, g, f, h);
    this.curves.push(a1);
    a1 = a1.getPoint(1);
    k.push(a1.x);
    k.push(a1.y);
    this.actions.push({
        action: THREE.PathActions.ELLIPSE,
        args: k
    });
};
THREE.Path.prototype.getSpacedPoints = function(a1, b) {
    a1 || (a1 = 40);
    for(var c = [], d = 0; d < a1; d++)c.push(this.getPoint(d / a1));
    return c;
};
THREE.Path.prototype.getPoints = function(a1, b) {
    if (this.useSpacedPoints) return this.getSpacedPoints(a1, b);
    a1 = a1 || 12;
    var c = [], d, e, g, f, h, k, l, n, p, m, q, t, r;
    d = 0;
    for(e = this.actions.length; d < e; d++)switch(g = this.actions[d], f = g.action, g = g.args, f){
        case THREE.PathActions.MOVE_TO:
            c.push(new THREE.Vector2(g[0], g[1]));
            break;
        case THREE.PathActions.LINE_TO:
            c.push(new THREE.Vector2(g[0], g[1]));
            break;
        case THREE.PathActions.QUADRATIC_CURVE_TO:
            h = g[2];
            k = g[3];
            p = g[0];
            m = g[1];
            0 < c.length ? (f = c[c.length - 1], q = f.x, t = f.y) : (f = this.actions[d - 1].args, q = f[f.length - 2], t = f[f.length - 1]);
            for(g = 1; g <= a1; g++)r = g / a1, f = THREE.Shape.Utils.b2(r, q, p, h), r = THREE.Shape.Utils.b2(r, t, m, k), c.push(new THREE.Vector2(f, r));
            break;
        case THREE.PathActions.BEZIER_CURVE_TO:
            h = g[4];
            k = g[5];
            p = g[0];
            m = g[1];
            l = g[2];
            n = g[3];
            0 < c.length ? (f = c[c.length - 1], q = f.x, t = f.y) : (f = this.actions[d - 1].args, q = f[f.length - 2], t = f[f.length - 1]);
            for(g = 1; g <= a1; g++)r = g / a1, f = THREE.Shape.Utils.b3(r, q, p, l, h), r = THREE.Shape.Utils.b3(r, t, m, n, k), c.push(new THREE.Vector2(f, r));
            break;
        case THREE.PathActions.CSPLINE_THRU:
            f = this.actions[d - 1].args;
            r = [
                new THREE.Vector2(f[f.length - 2], f[f.length - 1])
            ];
            f = a1 * g[0].length;
            r = r.concat(g[0]);
            r = new THREE.SplineCurve(r);
            for(g = 1; g <= f; g++)c.push(r.getPointAt(g / f));
            break;
        case THREE.PathActions.ARC:
            h = g[0];
            k = g[1];
            m = g[2];
            l = g[3];
            f = g[4];
            p = !!g[5];
            q = f - l;
            t = 2 * a1;
            for(g = 1; g <= t; g++)r = g / t, p || (r = 1 - r), r = l + r * q, f = h + m * Math.cos(r), r = k + m * Math.sin(r), c.push(new THREE.Vector2(f, r));
            break;
        case THREE.PathActions.ELLIPSE:
            h = g[0];
            k = g[1];
            m = g[2];
            n = g[3];
            l = g[4];
            f = g[5];
            p = !!g[6];
            var u = g[7];
            q = f - l;
            t = 2 * a1;
            var w, v;
            0 !== u && (w = Math.cos(u), v = Math.sin(u));
            for(g = 1; g <= t; g++){
                r = g / t;
                p || (r = 1 - r);
                r = l + r * q;
                f = h + m * Math.cos(r);
                r = k + n * Math.sin(r);
                if (0 !== u) {
                    var B = f;
                    f = (B - h) * w - (r - k) * v + h;
                    r = (B - h) * v + (r - k) * w + k;
                }
                c.push(new THREE.Vector2(f, r));
            }
    }
    d = c[c.length - 1];
    1E-10 > Math.abs(d.x - c[0].x) && 1E-10 > Math.abs(d.y - c[0].y) && c.splice(c.length - 1, 1);
    b && c.push(c[0]);
    return c;
};
THREE.Path.prototype.toShapes = function(a1, b) {
    function c(a1) {
        for(var b = [], c = 0, d = a1.length; c < d; c++){
            var e = a1[c], f = new THREE.Shape;
            f.actions = e.actions;
            f.curves = e.curves;
            b.push(f);
        }
        return b;
    }
    function d(a1, b) {
        for(var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++){
            var g = b[e], h = b[f], k = h.x - g.x, l = h.y - g.y;
            if (1E-10 < Math.abs(l)) {
                if (0 > l && (g = b[f], k = -k, h = b[e], l = -l), !(a1.y < g.y || a1.y > h.y)) {
                    if (a1.y === g.y) {
                        if (a1.x === g.x) return !0;
                    } else {
                        e = l * (a1.x - g.x) - k * (a1.y - g.y);
                        if (0 === e) return !0;
                        0 > e || (d = !d);
                    }
                }
            } else if (a1.y === g.y && (h.x <= a1.x && a1.x <= g.x || g.x <= a1.x && a1.x <= h.x)) return !0;
        }
        return d;
    }
    var e = function(a1) {
        var b, c, d, e, f = [], g = new THREE.Path;
        b = 0;
        for(c = a1.length; b < c; b++)d = a1[b], e = d.args, d = d.action, d === THREE.PathActions.MOVE_TO && 0 !== g.actions.length && (f.push(g), g = new THREE.Path), g[d].apply(g, e);
        0 !== g.actions.length && f.push(g);
        return f;
    }(this.actions);
    if (0 === e.length) return [];
    if (!0 === b) return c(e);
    var g, f, h, k = [];
    if (1 === e.length) return f = e[0], h = new THREE.Shape, h.actions = f.actions, h.curves = f.curves, k.push(h), k;
    var l = !THREE.Shape.Utils.isClockWise(e[0].getPoints()), l = a1 ? !l : l;
    h = [];
    var n = [], p = [], m = 0, q;
    n[m] = void 0;
    p[m] = [];
    var t, r;
    t = 0;
    for(r = e.length; t < r; t++)f = e[t], q = f.getPoints(), g = THREE.Shape.Utils.isClockWise(q), (g = a1 ? !g : g) ? (!l && n[m] && m++, n[m] = {
        s: new THREE.Shape,
        p: q
    }, n[m].s.actions = f.actions, n[m].s.curves = f.curves, l && m++, p[m] = []) : p[m].push({
        h: f,
        p: q[0]
    });
    if (!n[0]) return c(e);
    if (1 < n.length) {
        t = !1;
        r = [];
        f = 0;
        for(e = n.length; f < e; f++)h[f] = [];
        f = 0;
        for(e = n.length; f < e; f++)for(g = p[f], l = 0; l < g.length; l++){
            m = g[l];
            q = !0;
            for(var u = 0; u < n.length; u++)d(m.p, n[u].p) && (f !== u && r.push({
                froms: f,
                tos: u,
                hole: l
            }), q ? (q = !1, h[u].push(m)) : t = !0);
            q && h[f].push(m);
        }
        0 < r.length && (t || (p = h));
    }
    t = 0;
    for(r = n.length; t < r; t++)for(h = n[t].s, k.push(h), f = p[t], e = 0, g = f.length; e < g; e++)h.holes.push(f[e].h);
    return k;
};
THREE.Shape = function() {
    THREE.Path.apply(this, arguments);
    this.holes = [];
};
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.constructor = THREE.Shape;
THREE.Shape.prototype.extrude = function(a1) {
    return new THREE.ExtrudeGeometry(this, a1);
};
THREE.Shape.prototype.makeGeometry = function(a1) {
    return new THREE.ShapeGeometry(this, a1);
};
THREE.Shape.prototype.getPointsHoles = function(a1) {
    var b, c = this.holes.length, d = [];
    for(b = 0; b < c; b++)d[b] = this.holes[b].getTransformedPoints(a1, this.bends);
    return d;
};
THREE.Shape.prototype.getSpacedPointsHoles = function(a1) {
    var b, c = this.holes.length, d = [];
    for(b = 0; b < c; b++)d[b] = this.holes[b].getTransformedSpacedPoints(a1, this.bends);
    return d;
};
THREE.Shape.prototype.extractAllPoints = function(a1) {
    return {
        shape: this.getTransformedPoints(a1),
        holes: this.getPointsHoles(a1)
    };
};
THREE.Shape.prototype.extractPoints = function(a1) {
    return this.useSpacedPoints ? this.extractAllSpacedPoints(a1) : this.extractAllPoints(a1);
};
THREE.Shape.prototype.extractAllSpacedPoints = function(a1) {
    return {
        shape: this.getTransformedSpacedPoints(a1),
        holes: this.getSpacedPointsHoles(a1)
    };
};
THREE.Shape.Utils = {
    triangulateShape: function(a1, b) {
        function c(a1, b, c) {
            return a1.x !== b.x ? a1.x < b.x ? a1.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a1.x : a1.y < b.y ? a1.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a1.y;
        }
        function d(a1, b, d, e, f) {
            var g = b.x - a1.x, h = b.y - a1.y, k = e.x - d.x, l = e.y - d.y, n = a1.x - d.x, p = a1.y - d.y, z = h * k - g * l, D = h * n - g * p;
            if (1E-10 < Math.abs(z)) {
                if (0 < z) {
                    if (0 > D || D > z) return [];
                    k = l * n - k * p;
                    if (0 > k || k > z) return [];
                } else {
                    if (0 < D || D < z) return [];
                    k = l * n - k * p;
                    if (0 < k || k < z) return [];
                }
                if (0 === k) return !f || 0 !== D && D !== z ? [
                    a1
                ] : [];
                if (k === z) return !f || 0 !== D && D !== z ? [
                    b
                ] : [];
                if (0 === D) return [
                    d
                ];
                if (D === z) return [
                    e
                ];
                f = k / z;
                return [
                    {
                        x: a1.x + f * g,
                        y: a1.y + f * h
                    }
                ];
            }
            if (0 !== D || l * n !== k * p) return [];
            h = 0 === g && 0 === h;
            k = 0 === k && 0 === l;
            if (h && k) return a1.x !== d.x || a1.y !== d.y ? [] : [
                a1
            ];
            if (h) return c(d, e, a1) ? [
                a1
            ] : [];
            if (k) return c(a1, b, d) ? [
                d
            ] : [];
            0 !== g ? (a1.x < b.x ? (g = a1, k = a1.x, h = b, a1 = b.x) : (g = b, k = b.x, h = a1, a1 = a1.x), d.x < e.x ? (b = d, z = d.x, l = e, d = e.x) : (b = e, z = e.x, l = d, d = d.x)) : (a1.y < b.y ? (g = a1, k = a1.y, h = b, a1 = b.y) : (g = b, k = b.y, h = a1, a1 = a1.y), d.y < e.y ? (b = d, z = d.y, l = e, d = e.y) : (b = e, z = e.y, l = d, d = d.y));
            return k <= z ? a1 < z ? [] : a1 === z ? f ? [] : [
                b
            ] : a1 <= d ? [
                b,
                h
            ] : [
                b,
                l
            ] : k > d ? [] : k === d ? f ? [] : [
                g
            ] : a1 <= d ? [
                g,
                h
            ] : [
                g,
                l
            ];
        }
        function e(a1, b, c, d) {
            var e = b.x - a1.x, f = b.y - a1.y;
            b = c.x - a1.x;
            c = c.y - a1.y;
            var g = d.x - a1.x;
            d = d.y - a1.y;
            a1 = e * c - f * b;
            e = e * d - f * g;
            return 1E-10 < Math.abs(a1) ? (b = g * c - d * b, 0 < a1 ? 0 <= e && 0 <= b : 0 <= e || 0 <= b) : 0 < e;
        }
        var g, f, h, k, l, n = {};
        h = a1.concat();
        g = 0;
        for(f = b.length; g < f; g++)Array.prototype.push.apply(h, b[g]);
        g = 0;
        for(f = h.length; g < f; g++)l = h[g].x + ":" + h[g].y, void 0 !== n[l] && console.warn("THREE.Shape: Duplicate point", l), n[l] = g;
        g = function(a1, b) {
            function c(a1, b) {
                var d = h.length - 1, f = a1 - 1;
                0 > f && (f = d);
                var g = a1 + 1;
                g > d && (g = 0);
                d = e(h[a1], h[f], h[g], k[b]);
                if (!d) return !1;
                d = k.length - 1;
                f = b - 1;
                0 > f && (f = d);
                g = b + 1;
                g > d && (g = 0);
                return (d = e(k[b], k[f], k[g], h[a1])) ? !0 : !1;
            }
            function f(a1, b) {
                var c, e;
                for(c = 0; c < h.length; c++)if (e = c + 1, e %= h.length, e = d(a1, b, h[c], h[e], !0), 0 < e.length) return !0;
                return !1;
            }
            function g(a1, c) {
                var e, f, h, k;
                for(e = 0; e < l.length; e++)for(f = b[l[e]], h = 0; h < f.length; h++)if (k = h + 1, k %= f.length, k = d(a1, c, f[h], f[k], !0), 0 < k.length) return !0;
                return !1;
            }
            var h = a1.concat(), k, l = [], n, p, I, z, D, G = [], O, C, F, K = 0;
            for(n = b.length; K < n; K++)l.push(K);
            O = 0;
            for(var L = 2 * l.length; 0 < l.length;){
                L--;
                if (0 > L) {
                    console.log("Infinite Loop! Holes left:" + l.length + ", Probably Hole outside Shape!");
                    break;
                }
                for(p = O; p < h.length; p++){
                    I = h[p];
                    n = -1;
                    for(K = 0; K < l.length; K++)if (z = l[K], D = I.x + ":" + I.y + ":" + z, void 0 === G[D]) {
                        k = b[z];
                        for(C = 0; C < k.length; C++)if (z = k[C], c(p, C) && !f(I, z) && !g(I, z)) {
                            n = C;
                            l.splice(K, 1);
                            O = h.slice(0, p + 1);
                            z = h.slice(p);
                            C = k.slice(n);
                            F = k.slice(0, n + 1);
                            h = O.concat(C).concat(F).concat(z);
                            O = p;
                            break;
                        }
                        if (0 <= n) break;
                        G[D] = !0;
                    }
                    if (0 <= n) break;
                }
            }
            return h;
        }(a1, b);
        var p = THREE.FontUtils.Triangulate(g, !1);
        g = 0;
        for(f = p.length; g < f; g++)for(k = p[g], h = 0; 3 > h; h++)l = k[h].x + ":" + k[h].y, l = n[l], void 0 !== l && (k[h] = l);
        return p.concat();
    },
    isClockWise: function(a1) {
        return 0 > THREE.FontUtils.Triangulate.area(a1);
    },
    b2p0: function(a1, b) {
        var c = 1 - a1;
        return c * c * b;
    },
    b2p1: function(a1, b) {
        return 2 * (1 - a1) * a1 * b;
    },
    b2p2: function(a1, b) {
        return a1 * a1 * b;
    },
    b2: function(a1, b, c, d) {
        return this.b2p0(a1, b) + this.b2p1(a1, c) + this.b2p2(a1, d);
    },
    b3p0: function(a1, b) {
        var c = 1 - a1;
        return c * c * c * b;
    },
    b3p1: function(a1, b) {
        var c = 1 - a1;
        return 3 * c * c * a1 * b;
    },
    b3p2: function(a1, b) {
        return 3 * (1 - a1) * a1 * a1 * b;
    },
    b3p3: function(a1, b) {
        return a1 * a1 * a1 * b;
    },
    b3: function(a1, b, c, d, e) {
        return this.b3p0(a1, b) + this.b3p1(a1, c) + this.b3p2(a1, d) + this.b3p3(a1, e);
    }
};
THREE.LineCurve = function(a1, b) {
    this.v1 = a1;
    this.v2 = b;
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.constructor = THREE.LineCurve;
THREE.LineCurve.prototype.getPoint = function(a1) {
    var b = this.v2.clone().sub(this.v1);
    b.multiplyScalar(a1).add(this.v1);
    return b;
};
THREE.LineCurve.prototype.getPointAt = function(a1) {
    return this.getPoint(a1);
};
THREE.LineCurve.prototype.getTangent = function(a1) {
    return this.v2.clone().sub(this.v1).normalize();
};
THREE.QuadraticBezierCurve = function(a1, b, c) {
    this.v0 = a1;
    this.v1 = b;
    this.v2 = c;
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint = function(a1) {
    var b = new THREE.Vector2;
    b.x = THREE.Shape.Utils.b2(a1, this.v0.x, this.v1.x, this.v2.x);
    b.y = THREE.Shape.Utils.b2(a1, this.v0.y, this.v1.y, this.v2.y);
    return b;
};
THREE.QuadraticBezierCurve.prototype.getTangent = function(a1) {
    var b = new THREE.Vector2;
    b.x = THREE.Curve.Utils.tangentQuadraticBezier(a1, this.v0.x, this.v1.x, this.v2.x);
    b.y = THREE.Curve.Utils.tangentQuadraticBezier(a1, this.v0.y, this.v1.y, this.v2.y);
    return b.normalize();
};
THREE.CubicBezierCurve = function(a1, b, c, d) {
    this.v0 = a1;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d;
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve;
THREE.CubicBezierCurve.prototype.getPoint = function(a1) {
    var b;
    b = THREE.Shape.Utils.b3(a1, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a1 = THREE.Shape.Utils.b3(a1, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    return new THREE.Vector2(b, a1);
};
THREE.CubicBezierCurve.prototype.getTangent = function(a1) {
    var b;
    b = THREE.Curve.Utils.tangentCubicBezier(a1, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a1 = THREE.Curve.Utils.tangentCubicBezier(a1, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    b = new THREE.Vector2(b, a1);
    b.normalize();
    return b;
};
THREE.SplineCurve = function(a1) {
    this.points = void 0 == a1 ? [] : a1;
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint = function(a1) {
    var b = this.points;
    a1 *= b.length - 1;
    var c = Math.floor(a1);
    a1 -= c;
    var d = b[0 === c ? c : c - 1], e = b[c], g = b[c > b.length - 2 ? b.length - 1 : c + 1], b = b[c > b.length - 3 ? b.length - 1 : c + 2], c = new THREE.Vector2;
    c.x = THREE.Curve.Utils.interpolate(d.x, e.x, g.x, b.x, a1);
    c.y = THREE.Curve.Utils.interpolate(d.y, e.y, g.y, b.y, a1);
    return c;
};
THREE.EllipseCurve = function(a1, b, c, d, e, g, f, h) {
    this.aX = a1;
    this.aY = b;
    this.xRadius = c;
    this.yRadius = d;
    this.aStartAngle = e;
    this.aEndAngle = g;
    this.aClockwise = f;
    this.aRotation = h || 0;
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve;
THREE.EllipseCurve.prototype.getPoint = function(a1) {
    var b = this.aEndAngle - this.aStartAngle;
    0 > b && (b += 2 * Math.PI);
    b > 2 * Math.PI && (b -= 2 * Math.PI);
    b = !0 === this.aClockwise ? this.aEndAngle + (1 - a1) * (2 * Math.PI - b) : this.aStartAngle + a1 * b;
    a1 = this.aX + this.xRadius * Math.cos(b);
    var c = this.aY + this.yRadius * Math.sin(b);
    if (0 !== this.aRotation) {
        var b = Math.cos(this.aRotation), d = Math.sin(this.aRotation), e = a1;
        a1 = (e - this.aX) * b - (c - this.aY) * d + this.aX;
        c = (e - this.aX) * d + (c - this.aY) * b + this.aY;
    }
    return new THREE.Vector2(a1, c);
};
THREE.ArcCurve = function(a1, b, c, d, e, g) {
    THREE.EllipseCurve.call(this, a1, b, c, c, d, e, g);
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve;
THREE.LineCurve3 = THREE.Curve.create(function(a1, b) {
    this.v1 = a1;
    this.v2 = b;
}, function(a1) {
    var b = new THREE.Vector3;
    b.subVectors(this.v2, this.v1);
    b.multiplyScalar(a1);
    b.add(this.v1);
    return b;
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(a1, b, c) {
    this.v0 = a1;
    this.v1 = b;
    this.v2 = c;
}, function(a1) {
    var b = new THREE.Vector3;
    b.x = THREE.Shape.Utils.b2(a1, this.v0.x, this.v1.x, this.v2.x);
    b.y = THREE.Shape.Utils.b2(a1, this.v0.y, this.v1.y, this.v2.y);
    b.z = THREE.Shape.Utils.b2(a1, this.v0.z, this.v1.z, this.v2.z);
    return b;
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function(a1, b, c, d) {
    this.v0 = a1;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d;
}, function(a1) {
    var b = new THREE.Vector3;
    b.x = THREE.Shape.Utils.b3(a1, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    b.y = THREE.Shape.Utils.b3(a1, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    b.z = THREE.Shape.Utils.b3(a1, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
    return b;
});
THREE.SplineCurve3 = THREE.Curve.create(function(a1) {
    console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");
    this.points = void 0 == a1 ? [] : a1;
}, function(a1) {
    var b = this.points;
    a1 *= b.length - 1;
    var c = Math.floor(a1);
    a1 -= c;
    var d = b[0 == c ? c : c - 1], e = b[c], g = b[c > b.length - 2 ? b.length - 1 : c + 1], b = b[c > b.length - 3 ? b.length - 1 : c + 2], c = new THREE.Vector3;
    c.x = THREE.Curve.Utils.interpolate(d.x, e.x, g.x, b.x, a1);
    c.y = THREE.Curve.Utils.interpolate(d.y, e.y, g.y, b.y, a1);
    c.z = THREE.Curve.Utils.interpolate(d.z, e.z, g.z, b.z, a1);
    return c;
});
THREE.CatmullRomCurve3 = function() {
    function a1() {}
    var b = new THREE.Vector3, c = new a1, d = new a1, e = new a1;
    a1.prototype.init = function(a1, b, c, d) {
        this.c0 = a1;
        this.c1 = c;
        this.c2 = -3 * a1 + 3 * b - 2 * c - d;
        this.c3 = 2 * a1 - 2 * b + c + d;
    };
    a1.prototype.initNonuniformCatmullRom = function(a1, b, c, d, e, n, p) {
        a1 = ((b - a1) / e - (c - a1) / (e + n) + (c - b) / n) * n;
        d = ((c - b) / n - (d - b) / (n + p) + (d - c) / p) * n;
        this.init(b, c, a1, d);
    };
    a1.prototype.initCatmullRom = function(a1, b, c, d, e) {
        this.init(b, c, e * (c - a1), e * (d - b));
    };
    a1.prototype.calc = function(a1) {
        var b = a1 * a1;
        return this.c0 + this.c1 * a1 + this.c2 * b + this.c3 * b * a1;
    };
    return THREE.Curve.create(function(a1) {
        this.points = a1 || [];
    }, function(a1) {
        var f = this.points, h, k;
        k = f.length;
        2 > k && console.log("duh, you need at least 2 points");
        a1 *= k - 1;
        h = Math.floor(a1);
        a1 -= h;
        0 === a1 && h === k - 1 && (h = k - 2, a1 = 1);
        var l, n, p;
        0 === h ? (b.subVectors(f[0], f[1]).add(f[0]), l = b) : l = f[h - 1];
        n = f[h];
        p = f[h + 1];
        h + 2 < k ? f = f[h + 2] : (b.subVectors(f[k - 1], f[k - 2]).add(f[k - 2]), f = b);
        if (void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var m = "chordal" === this.type ? .5 : .25;
            k = Math.pow(l.distanceToSquared(n), m);
            h = Math.pow(n.distanceToSquared(p), m);
            m = Math.pow(p.distanceToSquared(f), m);
            1E-4 > h && (h = 1);
            1E-4 > k && (k = h);
            1E-4 > m && (m = h);
            c.initNonuniformCatmullRom(l.x, n.x, p.x, f.x, k, h, m);
            d.initNonuniformCatmullRom(l.y, n.y, p.y, f.y, k, h, m);
            e.initNonuniformCatmullRom(l.z, n.z, p.z, f.z, k, h, m);
        } else "catmullrom" === this.type && (k = void 0 !== this.tension ? this.tension : .5, c.initCatmullRom(l.x, n.x, p.x, f.x, k), d.initCatmullRom(l.y, n.y, p.y, f.y, k), e.initCatmullRom(l.z, n.z, p.z, f.z, k));
        return new THREE.Vector3(c.calc(a1), d.calc(a1), e.calc(a1));
    });
}();
THREE.ClosedSplineCurve3 = THREE.Curve.create(function(a1) {
    this.points = void 0 == a1 ? [] : a1;
}, function(a1) {
    var b = this.points;
    a1 *= b.length - 0;
    var c = Math.floor(a1);
    a1 -= c;
    var c = c + (0 < c ? 0 : (Math.floor(Math.abs(c) / b.length) + 1) * b.length), d = b[(c - 1) % b.length], e = b[c % b.length], g = b[(c + 1) % b.length], b = b[(c + 2) % b.length], c = new THREE.Vector3;
    c.x = THREE.Curve.Utils.interpolate(d.x, e.x, g.x, b.x, a1);
    c.y = THREE.Curve.Utils.interpolate(d.y, e.y, g.y, b.y, a1);
    c.z = THREE.Curve.Utils.interpolate(d.z, e.z, g.z, b.z, a1);
    return c;
});
THREE.AnimationHandler = {
    LINEAR: 0,
    CATMULLROM: 1,
    CATMULLROM_FORWARD: 2,
    add: function() {
        console.warn("THREE.AnimationHandler.add() has been deprecated.");
    },
    get: function() {
        console.warn("THREE.AnimationHandler.get() has been deprecated.");
    },
    remove: function() {
        console.warn("THREE.AnimationHandler.remove() has been deprecated.");
    },
    animations: [],
    init: function(a1) {
        if (!0 === a1.initialized) return a1;
        for(var b = 0; b < a1.hierarchy.length; b++){
            for(var c = 0; c < a1.hierarchy[b].keys.length; c++)if (0 > a1.hierarchy[b].keys[c].time && (a1.hierarchy[b].keys[c].time = 0), void 0 !== a1.hierarchy[b].keys[c].rot && !(a1.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)) {
                var d = a1.hierarchy[b].keys[c].rot;
                a1.hierarchy[b].keys[c].rot = (new THREE.Quaternion).fromArray(d);
            }
            if (a1.hierarchy[b].keys.length && void 0 !== a1.hierarchy[b].keys[0].morphTargets) {
                d = {};
                for(c = 0; c < a1.hierarchy[b].keys.length; c++)for(var e = 0; e < a1.hierarchy[b].keys[c].morphTargets.length; e++){
                    var g = a1.hierarchy[b].keys[c].morphTargets[e];
                    d[g] = -1;
                }
                a1.hierarchy[b].usedMorphTargets = d;
                for(c = 0; c < a1.hierarchy[b].keys.length; c++){
                    var f = {};
                    for(g in d){
                        for(e = 0; e < a1.hierarchy[b].keys[c].morphTargets.length; e++)if (a1.hierarchy[b].keys[c].morphTargets[e] === g) {
                            f[g] = a1.hierarchy[b].keys[c].morphTargetsInfluences[e];
                            break;
                        }
                        e === a1.hierarchy[b].keys[c].morphTargets.length && (f[g] = 0);
                    }
                    a1.hierarchy[b].keys[c].morphTargetsInfluences = f;
                }
            }
            for(c = 1; c < a1.hierarchy[b].keys.length; c++)a1.hierarchy[b].keys[c].time === a1.hierarchy[b].keys[c - 1].time && (a1.hierarchy[b].keys.splice(c, 1), c--);
            for(c = 0; c < a1.hierarchy[b].keys.length; c++)a1.hierarchy[b].keys[c].index = c;
        }
        a1.initialized = !0;
        return a1;
    },
    parse: function(a1) {
        var b = function(a1, c) {
            c.push(a1);
            for(var d = 0; d < a1.children.length; d++)b(a1.children[d], c);
        }, c = [];
        if (a1 instanceof THREE.SkinnedMesh) for(var d = 0; d < a1.skeleton.bones.length; d++)c.push(a1.skeleton.bones[d]);
        else b(a1, c);
        return c;
    },
    play: function(a1) {
        -1 === this.animations.indexOf(a1) && this.animations.push(a1);
    },
    stop: function(a1) {
        a1 = this.animations.indexOf(a1);
        -1 !== a1 && this.animations.splice(a1, 1);
    },
    update: function(a1) {
        for(var b = 0; b < this.animations.length; b++)this.animations[b].resetBlendWeights();
        for(b = 0; b < this.animations.length; b++)this.animations[b].update(a1);
    }
};
THREE.Animation = function(a1, b) {
    this.root = a1;
    this.data = THREE.AnimationHandler.init(b);
    this.hierarchy = THREE.AnimationHandler.parse(a1);
    this.currentTime = 0;
    this.timeScale = 1;
    this.isPlaying = !1;
    this.loop = !0;
    this.weight = 0;
    this.interpolationType = THREE.AnimationHandler.LINEAR;
};
THREE.Animation.prototype = {
    constructor: THREE.Animation,
    keyTypes: [
        "pos",
        "rot",
        "scl"
    ],
    play: function(a1, b) {
        this.currentTime = void 0 !== a1 ? a1 : 0;
        this.weight = void 0 !== b ? b : 1;
        this.isPlaying = !0;
        this.reset();
        THREE.AnimationHandler.play(this);
    },
    stop: function() {
        this.isPlaying = !1;
        THREE.AnimationHandler.stop(this);
    },
    reset: function() {
        for(var a1 = 0, b = this.hierarchy.length; a1 < b; a1++){
            var c = this.hierarchy[a1];
            void 0 === c.animationCache && (c.animationCache = {
                animations: {},
                blending: {
                    positionWeight: 0,
                    quaternionWeight: 0,
                    scaleWeight: 0
                }
            });
            var d = this.data.name, e = c.animationCache.animations, g = e[d];
            void 0 === g && (g = {
                prevKey: {
                    pos: 0,
                    rot: 0,
                    scl: 0
                },
                nextKey: {
                    pos: 0,
                    rot: 0,
                    scl: 0
                },
                originalMatrix: c.matrix
            }, e[d] = g);
            for(c = 0; 3 > c; c++){
                for(var d = this.keyTypes[c], e = this.data.hierarchy[a1].keys[0], f = this.getNextKeyWith(d, a1, 1); f.time < this.currentTime && f.index > e.index;)e = f, f = this.getNextKeyWith(d, a1, f.index + 1);
                g.prevKey[d] = e;
                g.nextKey[d] = f;
            }
        }
    },
    resetBlendWeights: function() {
        for(var a1 = 0, b = this.hierarchy.length; a1 < b; a1++){
            var c = this.hierarchy[a1].animationCache;
            void 0 !== c && (c = c.blending, c.positionWeight = 0, c.quaternionWeight = 0, c.scaleWeight = 0);
        }
    },
    update: function() {
        var a1 = [], b = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Quaternion, e = function(a1, b) {
            var c = [], d = [], e, p, m, q, t, r;
            e = (a1.length - 1) * b;
            p = Math.floor(e);
            e -= p;
            c[0] = 0 === p ? p : p - 1;
            c[1] = p;
            c[2] = p > a1.length - 2 ? p : p + 1;
            c[3] = p > a1.length - 3 ? p : p + 2;
            p = a1[c[0]];
            q = a1[c[1]];
            t = a1[c[2]];
            r = a1[c[3]];
            c = e * e;
            m = e * c;
            d[0] = g(p[0], q[0], t[0], r[0], e, c, m);
            d[1] = g(p[1], q[1], t[1], r[1], e, c, m);
            d[2] = g(p[2], q[2], t[2], r[2], e, c, m);
            return d;
        }, g = function(a1, b, c, d, e, g, m) {
            a1 = .5 * (c - a1);
            d = .5 * (d - b);
            return (2 * (b - c) + a1 + d) * m + (-3 * (b - c) - 2 * a1 - d) * g + a1 * e + b;
        };
        return function(f) {
            if (!1 !== this.isPlaying && (this.currentTime += f * this.timeScale, 0 !== this.weight)) {
                f = this.data.length;
                if (this.currentTime > f || 0 > this.currentTime) this.loop ? (this.currentTime %= f, 0 > this.currentTime && (this.currentTime += f), this.reset()) : this.stop();
                f = 0;
                for(var g = this.hierarchy.length; f < g; f++)for(var k = this.hierarchy[f], l = k.animationCache.animations[this.data.name], n = k.animationCache.blending, p = 0; 3 > p; p++){
                    var m = this.keyTypes[p], q = l.prevKey[m], t = l.nextKey[m];
                    if (0 < this.timeScale && t.time <= this.currentTime || 0 > this.timeScale && q.time >= this.currentTime) {
                        q = this.data.hierarchy[f].keys[0];
                        for(t = this.getNextKeyWith(m, f, 1); t.time < this.currentTime && t.index > q.index;)q = t, t = this.getNextKeyWith(m, f, t.index + 1);
                        l.prevKey[m] = q;
                        l.nextKey[m] = t;
                    }
                    var r = (this.currentTime - q.time) / (t.time - q.time), u = q[m], w = t[m];
                    0 > r && (r = 0);
                    1 < r && (r = 1);
                    if ("pos" === m) {
                        if (this.interpolationType === THREE.AnimationHandler.LINEAR) c.x = u[0] + (w[0] - u[0]) * r, c.y = u[1] + (w[1] - u[1]) * r, c.z = u[2] + (w[2] - u[2]) * r, q = this.weight / (this.weight + n.positionWeight), k.position.lerp(c, q), n.positionWeight += this.weight;
                        else if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) a1[0] = this.getPrevKeyWith("pos", f, q.index - 1).pos, a1[1] = u, a1[2] = w, a1[3] = this.getNextKeyWith("pos", f, t.index + 1).pos, r = .33 * r + .33, t = e(a1, r), q = this.weight / (this.weight + n.positionWeight), n.positionWeight += this.weight, m = k.position, m.x += (t[0] - m.x) * q, m.y += (t[1] - m.y) * q, m.z += (t[2] - m.z) * q, this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (r = e(a1, 1.01 * r), b.set(r[0], r[1], r[2]), b.sub(m), b.y = 0, b.normalize(), r = Math.atan2(b.x, b.z), k.rotation.set(0, r, 0));
                    } else "rot" === m ? (THREE.Quaternion.slerp(u, w, d, r), 0 === n.quaternionWeight ? (k.quaternion.copy(d), n.quaternionWeight = this.weight) : (q = this.weight / (this.weight + n.quaternionWeight), THREE.Quaternion.slerp(k.quaternion, d, k.quaternion, q), n.quaternionWeight += this.weight)) : "scl" === m && (c.x = u[0] + (w[0] - u[0]) * r, c.y = u[1] + (w[1] - u[1]) * r, c.z = u[2] + (w[2] - u[2]) * r, q = this.weight / (this.weight + n.scaleWeight), k.scale.lerp(c, q), n.scaleWeight += this.weight);
                }
                return !0;
            }
        };
    }(),
    getNextKeyWith: function(a1, b, c) {
        var d = this.data.hierarchy[b].keys;
        for(c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c < d.length - 1 ? c : d.length - 1 : c % d.length; c < d.length; c++)if (void 0 !== d[c][a1]) return d[c];
        return this.data.hierarchy[b].keys[0];
    },
    getPrevKeyWith: function(a1, b, c) {
        var d = this.data.hierarchy[b].keys;
        for(c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < c ? c : 0 : 0 <= c ? c : c + d.length; 0 <= c; c--)if (void 0 !== d[c][a1]) return d[c];
        return this.data.hierarchy[b].keys[d.length - 1];
    }
};
THREE.KeyFrameAnimation = function(a1) {
    this.root = a1.node;
    this.data = THREE.AnimationHandler.init(a1);
    this.hierarchy = THREE.AnimationHandler.parse(this.root);
    this.currentTime = 0;
    this.timeScale = .001;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    a1 = 0;
    for(var b = this.hierarchy.length; a1 < b; a1++){
        var c = this.data.hierarchy[a1].sids, d = this.hierarchy[a1];
        if (this.data.hierarchy[a1].keys.length && c) {
            for(var e = 0; e < c.length; e++){
                var g = c[e], f = this.getNextKeyWith(g, a1, 0);
                f && f.apply(g);
            }
            d.matrixAutoUpdate = !1;
            this.data.hierarchy[a1].node.updateMatrix();
            d.matrixWorldNeedsUpdate = !0;
        }
    }
};
THREE.KeyFrameAnimation.prototype = {
    constructor: THREE.KeyFrameAnimation,
    play: function(a1) {
        this.currentTime = void 0 !== a1 ? a1 : 0;
        if (!1 === this.isPlaying) {
            this.isPlaying = !0;
            var b = this.hierarchy.length, c, d;
            for(a1 = 0; a1 < b; a1++)c = this.hierarchy[a1], d = this.data.hierarchy[a1], void 0 === d.animationCache && (d.animationCache = {}, d.animationCache.prevKey = null, d.animationCache.nextKey = null, d.animationCache.originalMatrix = c.matrix), c = this.data.hierarchy[a1].keys, c.length && (d.animationCache.prevKey = c[0], d.animationCache.nextKey = c[1], this.startTime = Math.min(c[0].time, this.startTime), this.endTime = Math.max(c[c.length - 1].time, this.endTime));
            this.update(0);
        }
        this.isPaused = !1;
        THREE.AnimationHandler.play(this);
    },
    stop: function() {
        this.isPaused = this.isPlaying = !1;
        THREE.AnimationHandler.stop(this);
        for(var a1 = 0; a1 < this.data.hierarchy.length; a1++){
            var b = this.hierarchy[a1], c = this.data.hierarchy[a1];
            if (void 0 !== c.animationCache) {
                var d = c.animationCache.originalMatrix;
                d.copy(b.matrix);
                b.matrix = d;
                delete c.animationCache;
            }
        }
    },
    update: function(a1) {
        if (!1 !== this.isPlaying) {
            this.currentTime += a1 * this.timeScale;
            a1 = this.data.length;
            !0 === this.loop && this.currentTime > a1 && (this.currentTime %= a1);
            this.currentTime = Math.min(this.currentTime, a1);
            a1 = 0;
            for(var b = this.hierarchy.length; a1 < b; a1++){
                var c = this.hierarchy[a1], d = this.data.hierarchy[a1], e = d.keys, d = d.animationCache;
                if (e.length) {
                    var g = d.prevKey, f = d.nextKey;
                    if (f.time <= this.currentTime) {
                        for(; f.time < this.currentTime && f.index > g.index;)g = f, f = e[g.index + 1];
                        d.prevKey = g;
                        d.nextKey = f;
                    }
                    f.time >= this.currentTime ? g.interpolate(f, this.currentTime) : g.interpolate(f, f.time);
                    this.data.hierarchy[a1].node.updateMatrix();
                    c.matrixWorldNeedsUpdate = !0;
                }
            }
        }
    },
    getNextKeyWith: function(a1, b, c) {
        b = this.data.hierarchy[b].keys;
        for(c %= b.length; c < b.length; c++)if (b[c].hasTarget(a1)) return b[c];
        return b[0];
    },
    getPrevKeyWith: function(a1, b, c) {
        b = this.data.hierarchy[b].keys;
        for(c = 0 <= c ? c : c + b.length; 0 <= c; c--)if (b[c].hasTarget(a1)) return b[c];
        return b[b.length - 1];
    }
};
THREE.MorphAnimation = function(a1) {
    this.mesh = a1;
    this.frames = a1.morphTargetInfluences.length;
    this.currentTime = 0;
    this.duration = 1E3;
    this.loop = !0;
    this.currentFrame = this.lastFrame = 0;
    this.isPlaying = !1;
};
THREE.MorphAnimation.prototype = {
    constructor: THREE.MorphAnimation,
    play: function() {
        this.isPlaying = !0;
    },
    pause: function() {
        this.isPlaying = !1;
    },
    update: function(a1) {
        if (!1 !== this.isPlaying) {
            this.currentTime += a1;
            !0 === this.loop && this.currentTime > this.duration && (this.currentTime %= this.duration);
            this.currentTime = Math.min(this.currentTime, this.duration);
            var b = this.duration / this.frames;
            a1 = Math.floor(this.currentTime / b);
            var c = this.mesh.morphTargetInfluences;
            a1 !== this.currentFrame && (c[this.lastFrame] = 0, c[this.currentFrame] = 1, c[a1] = 0, this.lastFrame = this.currentFrame, this.currentFrame = a1);
            b = this.currentTime % b / b;
            c[a1] = b;
            c[this.lastFrame] = 1 - b;
        }
    }
};
THREE.BoxGeometry = function(a1, b, c, d, e, g) {
    function f(a1, b, c, d, e, f, g, r) {
        var u, w = h.widthSegments, v = h.heightSegments, B = e / 2, x = f / 2, H = h.vertices.length;
        if ("x" === a1 && "y" === b || "y" === a1 && "x" === b) u = "z";
        else if ("x" === a1 && "z" === b || "z" === a1 && "x" === b) u = "y", v = h.depthSegments;
        else if ("z" === a1 && "y" === b || "y" === a1 && "z" === b) u = "x", w = h.depthSegments;
        var I = w + 1, z = v + 1, D = e / w, G = f / v, O = new THREE.Vector3;
        O[u] = 0 < g ? 1 : -1;
        for(e = 0; e < z; e++)for(f = 0; f < I; f++){
            var C = new THREE.Vector3;
            C[a1] = (f * D - B) * c;
            C[b] = (e * G - x) * d;
            C[u] = g;
            h.vertices.push(C);
        }
        for(e = 0; e < v; e++)for(f = 0; f < w; f++)x = f + I * e, a1 = f + I * (e + 1), b = f + 1 + I * (e + 1), c = f + 1 + I * e, d = new THREE.Vector2(f / w, 1 - e / v), g = new THREE.Vector2(f / w, 1 - (e + 1) / v), u = new THREE.Vector2((f + 1) / w, 1 - (e + 1) / v), B = new THREE.Vector2((f + 1) / w, 1 - e / v), x = new THREE.Face3(x + H, a1 + H, c + H), x.normal.copy(O), x.vertexNormals.push(O.clone(), O.clone(), O.clone()), x.materialIndex = r, h.faces.push(x), h.faceVertexUvs[0].push([
            d,
            g,
            B
        ]), x = new THREE.Face3(a1 + H, b + H, c + H), x.normal.copy(O), x.vertexNormals.push(O.clone(), O.clone(), O.clone()), x.materialIndex = r, h.faces.push(x), h.faceVertexUvs[0].push([
            g.clone(),
            u,
            B.clone()
        ]);
    }
    THREE.Geometry.call(this);
    this.type = "BoxGeometry";
    this.parameters = {
        width: a1,
        height: b,
        depth: c,
        widthSegments: d,
        heightSegments: e,
        depthSegments: g
    };
    this.widthSegments = d || 1;
    this.heightSegments = e || 1;
    this.depthSegments = g || 1;
    var h = this;
    d = a1 / 2;
    e = b / 2;
    g = c / 2;
    f("z", "y", -1, -1, c, b, d, 0);
    f("z", "y", 1, -1, c, b, -d, 1);
    f("x", "z", 1, 1, a1, c, e, 2);
    f("x", "z", 1, -1, a1, c, -e, 3);
    f("x", "y", 1, -1, a1, b, g, 4);
    f("x", "y", -1, -1, a1, b, -g, 5);
    this.mergeVertices();
};
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry;
THREE.BoxGeometry.prototype.clone = function() {
    return new THREE.BoxGeometry(this.parameters.width, this.parameters.height, this.parameters.depth, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.depthSegments);
};
THREE.CubeGeometry = THREE.BoxGeometry;
THREE.CircleGeometry = function(a1, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "CircleGeometry";
    this.parameters = {
        radius: a1,
        segments: b,
        thetaStart: c,
        thetaLength: d
    };
    a1 = a1 || 50;
    b = void 0 !== b ? Math.max(3, b) : 8;
    c = void 0 !== c ? c : 0;
    d = void 0 !== d ? d : 2 * Math.PI;
    var e, g = [];
    e = new THREE.Vector3;
    var f = new THREE.Vector2(.5, .5);
    this.vertices.push(e);
    g.push(f);
    for(e = 0; e <= b; e++){
        var h = new THREE.Vector3, k = c + e / b * d;
        h.x = a1 * Math.cos(k);
        h.y = a1 * Math.sin(k);
        this.vertices.push(h);
        g.push(new THREE.Vector2((h.x / a1 + 1) / 2, (h.y / a1 + 1) / 2));
    }
    c = new THREE.Vector3(0, 0, 1);
    for(e = 1; e <= b; e++)this.faces.push(new THREE.Face3(e, e + 1, 0, [
        c.clone(),
        c.clone(),
        c.clone()
    ])), this.faceVertexUvs[0].push([
        g[e].clone(),
        g[e + 1].clone(),
        f.clone()
    ]);
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a1);
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry;
THREE.CircleGeometry.prototype.clone = function() {
    return new THREE.CircleGeometry(this.parameters.radius, this.parameters.segments, this.parameters.thetaStart, this.parameters.thetaLength);
};
THREE.CircleBufferGeometry = function(a1, b, c, d) {
    THREE.BufferGeometry.call(this);
    this.type = "CircleBufferGeometry";
    this.parameters = {
        radius: a1,
        segments: b,
        thetaStart: c,
        thetaLength: d
    };
    a1 = a1 || 50;
    b = void 0 !== b ? Math.max(3, b) : 8;
    c = void 0 !== c ? c : 0;
    d = void 0 !== d ? d : 2 * Math.PI;
    var e = b + 2, g = new Float32Array(3 * e), f = new Float32Array(3 * e), e = new Float32Array(2 * e);
    f[3] = 1;
    e[0] = .5;
    e[1] = .5;
    for(var h = 0, k = 3, l = 2; h <= b; h++, k += 3, l += 2){
        var n = c + h / b * d;
        g[k] = a1 * Math.cos(n);
        g[k + 1] = a1 * Math.sin(n);
        f[k + 2] = 1;
        e[l] = (g[k] / a1 + 1) / 2;
        e[l + 1] = (g[k + 1] / a1 + 1) / 2;
    }
    c = [];
    for(k = 1; k <= b; k++)c.push(k), c.push(k + 1), c.push(0);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(c), 1));
    this.addAttribute("position", new THREE.BufferAttribute(g, 3));
    this.addAttribute("normal", new THREE.BufferAttribute(f, 3));
    this.addAttribute("uv", new THREE.BufferAttribute(e, 2));
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a1);
};
THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry;
THREE.CircleBufferGeometry.prototype.clone = function() {
    var a1 = new THREE.CircleBufferGeometry(this.parameters.radius, this.parameters.segments, this.parameters.thetaStart, this.parameters.thetaLength);
    a1.copy(this);
    return a1;
};
THREE.CylinderGeometry = function(a1, b, c, d, e, g, f, h) {
    THREE.Geometry.call(this);
    this.type = "CylinderGeometry";
    this.parameters = {
        radiusTop: a1,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: g,
        thetaStart: f,
        thetaLength: h
    };
    a1 = void 0 !== a1 ? a1 : 20;
    b = void 0 !== b ? b : 20;
    c = void 0 !== c ? c : 100;
    d = d || 8;
    e = e || 1;
    g = void 0 !== g ? g : !1;
    f = void 0 !== f ? f : 0;
    h = void 0 !== h ? h : 2 * Math.PI;
    var k = c / 2, l, n, p = [], m = [];
    for(n = 0; n <= e; n++){
        var q = [], t = [], r = n / e, u = r * (b - a1) + a1;
        for(l = 0; l <= d; l++){
            var w = l / d, v = new THREE.Vector3;
            v.x = u * Math.sin(w * h + f);
            v.y = -r * c + k;
            v.z = u * Math.cos(w * h + f);
            this.vertices.push(v);
            q.push(this.vertices.length - 1);
            t.push(new THREE.Vector2(w, 1 - r));
        }
        p.push(q);
        m.push(t);
    }
    c = (b - a1) / c;
    for(l = 0; l < d; l++)for(0 !== a1 ? (f = this.vertices[p[0][l]].clone(), h = this.vertices[p[0][l + 1]].clone()) : (f = this.vertices[p[1][l]].clone(), h = this.vertices[p[1][l + 1]].clone()), f.setY(Math.sqrt(f.x * f.x + f.z * f.z) * c).normalize(), h.setY(Math.sqrt(h.x * h.x + h.z * h.z) * c).normalize(), n = 0; n < e; n++){
        var q = p[n][l], t = p[n + 1][l], r = p[n + 1][l + 1], u = p[n][l + 1], w = f.clone(), v = f.clone(), B = h.clone(), x = h.clone(), H = m[n][l].clone(), I = m[n + 1][l].clone(), z = m[n + 1][l + 1].clone(), D = m[n][l + 1].clone();
        this.faces.push(new THREE.Face3(q, t, u, [
            w,
            v,
            x
        ]));
        this.faceVertexUvs[0].push([
            H,
            I,
            D
        ]);
        this.faces.push(new THREE.Face3(t, r, u, [
            v.clone(),
            B,
            x.clone()
        ]));
        this.faceVertexUvs[0].push([
            I.clone(),
            z,
            D.clone()
        ]);
    }
    if (!1 === g && 0 < a1) for(this.vertices.push(new THREE.Vector3(0, k, 0)), l = 0; l < d; l++)q = p[0][l], t = p[0][l + 1], r = this.vertices.length - 1, w = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(0, 1, 0), B = new THREE.Vector3(0, 1, 0), H = m[0][l].clone(), I = m[0][l + 1].clone(), z = new THREE.Vector2(I.x, 0), this.faces.push(new THREE.Face3(q, t, r, [
        w,
        v,
        B
    ], void 0, 1)), this.faceVertexUvs[0].push([
        H,
        I,
        z
    ]);
    if (!1 === g && 0 < b) for(this.vertices.push(new THREE.Vector3(0, -k, 0)), l = 0; l < d; l++)q = p[e][l + 1], t = p[e][l], r = this.vertices.length - 1, w = new THREE.Vector3(0, -1, 0), v = new THREE.Vector3(0, -1, 0), B = new THREE.Vector3(0, -1, 0), H = m[e][l + 1].clone(), I = m[e][l].clone(), z = new THREE.Vector2(I.x, 1), this.faces.push(new THREE.Face3(q, t, r, [
        w,
        v,
        B
    ], void 0, 2)), this.faceVertexUvs[0].push([
        H,
        I,
        z
    ]);
    this.computeFaceNormals();
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry;
THREE.CylinderGeometry.prototype.clone = function() {
    return new THREE.CylinderGeometry(this.parameters.radiusTop, this.parameters.radiusBottom, this.parameters.height, this.parameters.radialSegments, this.parameters.heightSegments, this.parameters.openEnded, this.parameters.thetaStart, this.parameters.thetaLength);
};
THREE.EdgesGeometry = function(a1, b) {
    THREE.BufferGeometry.call(this);
    var c = Math.cos(THREE.Math.degToRad(void 0 !== b ? b : 1)), d = [
        0,
        0
    ], e = {}, g = function(a1, b) {
        return a1 - b;
    }, f = [
        "a",
        "b",
        "c"
    ], h;
    a1 instanceof THREE.BufferGeometry ? (h = new THREE.Geometry, h.fromBufferGeometry(a1)) : h = a1.clone();
    h.mergeVertices();
    h.computeFaceNormals();
    var k = h.vertices;
    h = h.faces;
    for(var l = 0, n = h.length; l < n; l++)for(var p = h[l], m = 0; 3 > m; m++){
        d[0] = p[f[m]];
        d[1] = p[f[(m + 1) % 3]];
        d.sort(g);
        var q = d.toString();
        void 0 === e[q] ? e[q] = {
            vert1: d[0],
            vert2: d[1],
            face1: l,
            face2: void 0
        } : e[q].face2 = l;
    }
    d = [];
    for(q in e)if (g = e[q], void 0 === g.face2 || h[g.face1].normal.dot(h[g.face2].normal) <= c) f = k[g.vert1], d.push(f.x), d.push(f.y), d.push(f.z), f = k[g.vert2], d.push(f.x), d.push(f.y), d.push(f.z);
    this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(d), 3));
};
THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry;
THREE.ExtrudeGeometry = function(a1, b) {
    "undefined" !== typeof a1 && (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", a1 = Array.isArray(a1) ? a1 : [
        a1
    ], this.addShapeList(a1, b), this.computeFaceNormals());
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShapeList = function(a1, b) {
    for(var c = a1.length, d = 0; d < c; d++)this.addShape(a1[d], b);
};
THREE.ExtrudeGeometry.prototype.addShape = function(a1, b) {
    function c(a1, b, c) {
        b || console.error("THREE.ExtrudeGeometry: vec does not exist");
        return b.clone().multiplyScalar(c).add(a1);
    }
    function d(a1, b, c) {
        var d = 1, d = a1.x - b.x, e = a1.y - b.y, f = c.x - a1.x, g = c.y - a1.y, h = d * d + e * e;
        if (1E-10 < Math.abs(d * g - e * f)) {
            var k = Math.sqrt(h), l = Math.sqrt(f * f + g * g), h = b.x - e / k;
            b = b.y + d / k;
            f = ((c.x - g / l - h) * g - (c.y + f / l - b) * f) / (d * g - e * f);
            c = h + d * f - a1.x;
            a1 = b + e * f - a1.y;
            d = c * c + a1 * a1;
            if (2 >= d) return new THREE.Vector2(c, a1);
            d = Math.sqrt(d / 2);
        } else a1 = !1, 1E-10 < d ? 1E-10 < f && (a1 = !0) : -0.0000000001 > d ? -0.0000000001 > f && (a1 = !0) : Math.sign(e) === Math.sign(g) && (a1 = !0), a1 ? (c = -e, a1 = d, d = Math.sqrt(h)) : (c = d, a1 = e, d = Math.sqrt(h / 2));
        return new THREE.Vector2(c / d, a1 / d);
    }
    function e(a1, b) {
        var c, d;
        for(A = a1.length; 0 <= --A;){
            c = A;
            d = A - 1;
            0 > d && (d = a1.length - 1);
            for(var e = 0, f = q + 2 * n, e = 0; e < f; e++){
                var g = U * e, h = U * (e + 1), k = b + c + g, g = b + d + g, l = b + d + h, h = b + c + h, k = k + O, g = g + O, l = l + O, h = h + O;
                G.faces.push(new THREE.Face3(k, g, h));
                G.faces.push(new THREE.Face3(g, l, h));
                k = w.generateSideWallUV(G, k, g, l, h);
                G.faceVertexUvs[0].push([
                    k[0],
                    k[1],
                    k[3]
                ]);
                G.faceVertexUvs[0].push([
                    k[1],
                    k[2],
                    k[3]
                ]);
            }
        }
    }
    function g(a1, b, c) {
        G.vertices.push(new THREE.Vector3(a1, b, c));
    }
    function f(a1, b, c) {
        a1 += O;
        b += O;
        c += O;
        G.faces.push(new THREE.Face3(a1, b, c));
        a1 = w.generateTopUV(G, a1, b, c);
        G.faceVertexUvs[0].push(a1);
    }
    var h = void 0 !== b.amount ? b.amount : 100, k = void 0 !== b.bevelThickness ? b.bevelThickness : 6, l = void 0 !== b.bevelSize ? b.bevelSize : k - 2, n = void 0 !== b.bevelSegments ? b.bevelSegments : 3, p = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0, m = void 0 !== b.curveSegments ? b.curveSegments : 12, q = void 0 !== b.steps ? b.steps : 1, t = b.extrudePath, r, u = !1, w = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator, v, B, x, H;
    t && (r = t.getSpacedPoints(q), u = !0, p = !1, v = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(t, q, !1), B = new THREE.Vector3, x = new THREE.Vector3, H = new THREE.Vector3);
    p || (l = k = n = 0);
    var I, z, D, G = this, O = this.vertices.length, t = a1.extractPoints(m), m = t.shape, C = t.holes;
    if (t = !THREE.Shape.Utils.isClockWise(m)) {
        m = m.reverse();
        z = 0;
        for(D = C.length; z < D; z++)I = C[z], THREE.Shape.Utils.isClockWise(I) && (C[z] = I.reverse());
        t = !1;
    }
    var F = THREE.Shape.Utils.triangulateShape(m, C), K = m;
    z = 0;
    for(D = C.length; z < D; z++)I = C[z], m = m.concat(I);
    var L, E, J, y, P, U = m.length, Q, R = F.length, t = [], A = 0;
    J = K.length;
    L = J - 1;
    for(E = A + 1; A < J; A++, L++, E++)L === J && (L = 0), E === J && (E = 0), t[A] = d(K[A], K[L], K[E]);
    var ia = [], Z, fa = t.concat();
    z = 0;
    for(D = C.length; z < D; z++){
        I = C[z];
        Z = [];
        A = 0;
        J = I.length;
        L = J - 1;
        for(E = A + 1; A < J; A++, L++, E++)L === J && (L = 0), E === J && (E = 0), Z[A] = d(I[A], I[L], I[E]);
        ia.push(Z);
        fa = fa.concat(Z);
    }
    for(L = 0; L < n; L++){
        J = L / n;
        y = k * (1 - J);
        E = l * Math.sin(J * Math.PI / 2);
        A = 0;
        for(J = K.length; A < J; A++)P = c(K[A], t[A], E), g(P.x, P.y, -y);
        z = 0;
        for(D = C.length; z < D; z++)for(I = C[z], Z = ia[z], A = 0, J = I.length; A < J; A++)P = c(I[A], Z[A], E), g(P.x, P.y, -y);
    }
    E = l;
    for(A = 0; A < U; A++)P = p ? c(m[A], fa[A], E) : m[A], u ? (x.copy(v.normals[0]).multiplyScalar(P.x), B.copy(v.binormals[0]).multiplyScalar(P.y), H.copy(r[0]).add(x).add(B), g(H.x, H.y, H.z)) : g(P.x, P.y, 0);
    for(J = 1; J <= q; J++)for(A = 0; A < U; A++)P = p ? c(m[A], fa[A], E) : m[A], u ? (x.copy(v.normals[J]).multiplyScalar(P.x), B.copy(v.binormals[J]).multiplyScalar(P.y), H.copy(r[J]).add(x).add(B), g(H.x, H.y, H.z)) : g(P.x, P.y, h / q * J);
    for(L = n - 1; 0 <= L; L--){
        J = L / n;
        y = k * (1 - J);
        E = l * Math.sin(J * Math.PI / 2);
        A = 0;
        for(J = K.length; A < J; A++)P = c(K[A], t[A], E), g(P.x, P.y, h + y);
        z = 0;
        for(D = C.length; z < D; z++)for(I = C[z], Z = ia[z], A = 0, J = I.length; A < J; A++)P = c(I[A], Z[A], E), u ? g(P.x, P.y + r[q - 1].y, r[q - 1].x + y) : g(P.x, P.y, h + y);
    }
    (function() {
        if (p) {
            var a1;
            a1 = 0 * U;
            for(A = 0; A < R; A++)Q = F[A], f(Q[2] + a1, Q[1] + a1, Q[0] + a1);
            a1 = q + 2 * n;
            a1 *= U;
            for(A = 0; A < R; A++)Q = F[A], f(Q[0] + a1, Q[1] + a1, Q[2] + a1);
        } else {
            for(A = 0; A < R; A++)Q = F[A], f(Q[2], Q[1], Q[0]);
            for(A = 0; A < R; A++)Q = F[A], f(Q[0] + U * q, Q[1] + U * q, Q[2] + U * q);
        }
    })();
    (function() {
        var a1 = 0;
        e(K, a1);
        a1 += K.length;
        z = 0;
        for(D = C.length; z < D; z++)I = C[z], e(I, a1), a1 += I.length;
    })();
};
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function(a1, b, c, d) {
        a1 = a1.vertices;
        b = a1[b];
        c = a1[c];
        d = a1[d];
        return [
            new THREE.Vector2(b.x, b.y),
            new THREE.Vector2(c.x, c.y),
            new THREE.Vector2(d.x, d.y)
        ];
    },
    generateSideWallUV: function(a1, b, c, d, e) {
        a1 = a1.vertices;
        b = a1[b];
        c = a1[c];
        d = a1[d];
        e = a1[e];
        return .01 > Math.abs(b.y - c.y) ? [
            new THREE.Vector2(b.x, 1 - b.z),
            new THREE.Vector2(c.x, 1 - c.z),
            new THREE.Vector2(d.x, 1 - d.z),
            new THREE.Vector2(e.x, 1 - e.z)
        ] : [
            new THREE.Vector2(b.y, 1 - b.z),
            new THREE.Vector2(c.y, 1 - c.z),
            new THREE.Vector2(d.y, 1 - d.z),
            new THREE.Vector2(e.y, 1 - e.z)
        ];
    }
};
THREE.ShapeGeometry = function(a1, b) {
    THREE.Geometry.call(this);
    this.type = "ShapeGeometry";
    !1 === Array.isArray(a1) && (a1 = [
        a1
    ]);
    this.addShapeList(a1, b);
    this.computeFaceNormals();
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry;
THREE.ShapeGeometry.prototype.addShapeList = function(a1, b) {
    for(var c = 0, d = a1.length; c < d; c++)this.addShape(a1[c], b);
    return this;
};
THREE.ShapeGeometry.prototype.addShape = function(a1, b) {
    void 0 === b && (b = {});
    var c = b.material, d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator, e, g, f, h = this.vertices.length;
    e = a1.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
    var k = e.shape, l = e.holes;
    if (!THREE.Shape.Utils.isClockWise(k)) for(k = k.reverse(), e = 0, g = l.length; e < g; e++)f = l[e], THREE.Shape.Utils.isClockWise(f) && (l[e] = f.reverse());
    var n = THREE.Shape.Utils.triangulateShape(k, l);
    e = 0;
    for(g = l.length; e < g; e++)f = l[e], k = k.concat(f);
    l = k.length;
    g = n.length;
    for(e = 0; e < l; e++)f = k[e], this.vertices.push(new THREE.Vector3(f.x, f.y, 0));
    for(e = 0; e < g; e++)l = n[e], k = l[0] + h, f = l[1] + h, l = l[2] + h, this.faces.push(new THREE.Face3(k, f, l, null, null, c)), this.faceVertexUvs[0].push(d.generateTopUV(this, k, f, l));
};
THREE.LatheGeometry = function(a1, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "LatheGeometry";
    this.parameters = {
        points: a1,
        segments: b,
        phiStart: c,
        phiLength: d
    };
    b = b || 12;
    c = c || 0;
    d = d || 2 * Math.PI;
    for(var e = 1 / (a1.length - 1), g = 1 / b, f = 0, h = b; f <= h; f++)for(var k = c + f * g * d, l = Math.cos(k), n = Math.sin(k), k = 0, p = a1.length; k < p; k++){
        var m = a1[k], q = new THREE.Vector3;
        q.x = l * m.x - n * m.y;
        q.y = n * m.x + l * m.y;
        q.z = m.z;
        this.vertices.push(q);
    }
    c = a1.length;
    f = 0;
    for(h = b; f < h; f++)for(k = 0, p = a1.length - 1; k < p; k++){
        b = n = k + c * f;
        d = n + c;
        var l = n + 1 + c, n = n + 1, m = f * g, q = k * e, t = m + g, r = q + e;
        this.faces.push(new THREE.Face3(b, d, n));
        this.faceVertexUvs[0].push([
            new THREE.Vector2(m, q),
            new THREE.Vector2(t, q),
            new THREE.Vector2(m, r)
        ]);
        this.faces.push(new THREE.Face3(d, l, n));
        this.faceVertexUvs[0].push([
            new THREE.Vector2(t, q),
            new THREE.Vector2(t, r),
            new THREE.Vector2(m, r)
        ]);
    }
    this.mergeVertices();
    this.computeFaceNormals();
    this.computeVertexNormals();
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry;
THREE.PlaneGeometry = function(a1, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "PlaneGeometry";
    this.parameters = {
        width: a1,
        height: b,
        widthSegments: c,
        heightSegments: d
    };
    this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a1, b, c, d));
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;
THREE.PlaneGeometry.prototype.clone = function() {
    return new THREE.PlaneGeometry(this.parameters.width, this.parameters.height, this.parameters.widthSegments, this.parameters.heightSegments);
};
THREE.PlaneBufferGeometry = function(a1, b, c, d) {
    THREE.BufferGeometry.call(this);
    this.type = "PlaneBufferGeometry";
    this.parameters = {
        width: a1,
        height: b,
        widthSegments: c,
        heightSegments: d
    };
    var e = a1 / 2, g = b / 2;
    c = Math.floor(c) || 1;
    d = Math.floor(d) || 1;
    var f = c + 1, h = d + 1, k = a1 / c, l = b / d;
    b = new Float32Array(f * h * 3);
    a1 = new Float32Array(f * h * 3);
    for(var n = new Float32Array(f * h * 2), p = 0, m = 0, q = 0; q < h; q++)for(var t = q * l - g, r = 0; r < f; r++)b[p] = r * k - e, b[p + 1] = -t, a1[p + 2] = 1, n[m] = r / c, n[m + 1] = 1 - q / d, p += 3, m += 2;
    p = 0;
    e = new (65535 < b.length / 3 ? Uint32Array : Uint16Array)(c * d * 6);
    for(q = 0; q < d; q++)for(r = 0; r < c; r++)g = r + f * (q + 1), h = r + 1 + f * (q + 1), k = r + 1 + f * q, e[p] = r + f * q, e[p + 1] = g, e[p + 2] = k, e[p + 3] = g, e[p + 4] = h, e[p + 5] = k, p += 6;
    this.setIndex(new THREE.BufferAttribute(e, 1));
    this.addAttribute("position", new THREE.BufferAttribute(b, 3));
    this.addAttribute("normal", new THREE.BufferAttribute(a1, 3));
    this.addAttribute("uv", new THREE.BufferAttribute(n, 2));
};
THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry;
THREE.PlaneBufferGeometry.prototype.clone = function() {
    var a1 = new THREE.PlaneBufferGeometry(this.parameters.width, this.parameters.height, this.parameters.widthSegments, this.parameters.heightSegments);
    a1.copy(this);
    return a1;
};
THREE.RingGeometry = function(a1, b, c, d, e, g) {
    THREE.Geometry.call(this);
    this.type = "RingGeometry";
    this.parameters = {
        innerRadius: a1,
        outerRadius: b,
        thetaSegments: c,
        phiSegments: d,
        thetaStart: e,
        thetaLength: g
    };
    a1 = a1 || 0;
    b = b || 50;
    e = void 0 !== e ? e : 0;
    g = void 0 !== g ? g : 2 * Math.PI;
    c = void 0 !== c ? Math.max(3, c) : 8;
    d = void 0 !== d ? Math.max(1, d) : 8;
    var f, h = [], k = a1, l = (b - a1) / d;
    for(a1 = 0; a1 < d + 1; a1++){
        for(f = 0; f < c + 1; f++){
            var n = new THREE.Vector3, p = e + f / c * g;
            n.x = k * Math.cos(p);
            n.y = k * Math.sin(p);
            this.vertices.push(n);
            h.push(new THREE.Vector2((n.x / b + 1) / 2, (n.y / b + 1) / 2));
        }
        k += l;
    }
    b = new THREE.Vector3(0, 0, 1);
    for(a1 = 0; a1 < d; a1++)for(e = a1 * (c + 1), f = 0; f < c; f++)g = p = f + e, l = p + c + 1, n = p + c + 2, this.faces.push(new THREE.Face3(g, l, n, [
        b.clone(),
        b.clone(),
        b.clone()
    ])), this.faceVertexUvs[0].push([
        h[g].clone(),
        h[l].clone(),
        h[n].clone()
    ]), g = p, l = p + c + 2, n = p + 1, this.faces.push(new THREE.Face3(g, l, n, [
        b.clone(),
        b.clone(),
        b.clone()
    ])), this.faceVertexUvs[0].push([
        h[g].clone(),
        h[l].clone(),
        h[n].clone()
    ]);
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, k);
};
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.RingGeometry.prototype.constructor = THREE.RingGeometry;
THREE.RingGeometry.prototype.clone = function() {
    return new THREE.RingGeometry(this.parameters.innerRadius, this.parameters.outerRadius, this.parameters.thetaSegments, this.parameters.phiSegments, this.parameters.thetaStart, this.parameters.thetaLength);
};
THREE.SphereGeometry = function(a1, b, c, d, e, g, f) {
    THREE.Geometry.call(this);
    this.type = "SphereGeometry";
    this.parameters = {
        radius: a1,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: g,
        thetaLength: f
    };
    this.fromBufferGeometry(new THREE.SphereBufferGeometry(a1, b, c, d, e, g, f));
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;
THREE.SphereGeometry.prototype.clone = function() {
    return new THREE.SphereGeometry(this.parameters.radius, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.phiStart, this.parameters.phiLength, this.parameters.thetaStart, this.parameters.thetaLength);
};
THREE.SphereBufferGeometry = function(a1, b, c, d, e, g, f) {
    THREE.BufferGeometry.call(this);
    this.type = "SphereBufferGeometry";
    this.parameters = {
        radius: a1,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: g,
        thetaLength: f
    };
    a1 = a1 || 50;
    b = Math.max(3, Math.floor(b) || 8);
    c = Math.max(2, Math.floor(c) || 6);
    d = void 0 !== d ? d : 0;
    e = void 0 !== e ? e : 2 * Math.PI;
    g = void 0 !== g ? g : 0;
    f = void 0 !== f ? f : Math.PI;
    for(var h = g + f, k = (b + 1) * (c + 1), l = new THREE.BufferAttribute(new Float32Array(3 * k), 3), n = new THREE.BufferAttribute(new Float32Array(3 * k), 3), k = new THREE.BufferAttribute(new Float32Array(2 * k), 2), p = 0, m = [], q = new THREE.Vector3, t = 0; t <= c; t++){
        for(var r = [], u = t / c, w = 0; w <= b; w++){
            var v = w / b, B = -a1 * Math.cos(d + v * e) * Math.sin(g + u * f), x = a1 * Math.cos(g + u * f), H = a1 * Math.sin(d + v * e) * Math.sin(g + u * f);
            q.set(B, x, H).normalize();
            l.setXYZ(p, B, x, H);
            n.setXYZ(p, q.x, q.y, q.z);
            k.setXY(p, v, 1 - u);
            r.push(p);
            p++;
        }
        m.push(r);
    }
    d = [];
    for(t = 0; t < c; t++)for(w = 0; w < b; w++)e = m[t][w + 1], f = m[t][w], p = m[t + 1][w], q = m[t + 1][w + 1], (0 !== t || 0 < g) && d.push(e, f, q), (t !== c - 1 || h < Math.PI) && d.push(f, p, q);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(d), 1));
    this.addAttribute("position", l);
    this.addAttribute("normal", n);
    this.addAttribute("uv", k);
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a1);
};
THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry;
THREE.SphereBufferGeometry.prototype.clone = function() {
    var a1 = new THREE.SphereBufferGeometry(this.parameters.radius, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.phiStart, this.parameters.phiLength, this.parameters.thetaStart, this.parameters.thetaLength);
    a1.copy(this);
    return a1;
};
THREE.TextGeometry = function(a1, b) {
    b = b || {};
    var c = THREE.FontUtils.generateShapes(a1, b);
    b.amount = void 0 !== b.height ? b.height : 50;
    void 0 === b.bevelThickness && (b.bevelThickness = 10);
    void 0 === b.bevelSize && (b.bevelSize = 8);
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
    THREE.ExtrudeGeometry.call(this, c, b);
    this.type = "TextGeometry";
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry;
THREE.TorusGeometry = function(a1, b, c, d, e) {
    THREE.Geometry.call(this);
    this.type = "TorusGeometry";
    this.parameters = {
        radius: a1,
        tube: b,
        radialSegments: c,
        tubularSegments: d,
        arc: e
    };
    a1 = a1 || 100;
    b = b || 40;
    c = c || 8;
    d = d || 6;
    e = e || 2 * Math.PI;
    for(var g = new THREE.Vector3, f = [], h = [], k = 0; k <= c; k++)for(var l = 0; l <= d; l++){
        var n = l / d * e, p = k / c * Math.PI * 2;
        g.x = a1 * Math.cos(n);
        g.y = a1 * Math.sin(n);
        var m = new THREE.Vector3;
        m.x = (a1 + b * Math.cos(p)) * Math.cos(n);
        m.y = (a1 + b * Math.cos(p)) * Math.sin(n);
        m.z = b * Math.sin(p);
        this.vertices.push(m);
        f.push(new THREE.Vector2(l / d, k / c));
        h.push(m.clone().sub(g).normalize());
    }
    for(k = 1; k <= c; k++)for(l = 1; l <= d; l++)a1 = (d + 1) * k + l - 1, b = (d + 1) * (k - 1) + l - 1, e = (d + 1) * (k - 1) + l, g = (d + 1) * k + l, n = new THREE.Face3(a1, b, g, [
        h[a1].clone(),
        h[b].clone(),
        h[g].clone()
    ]), this.faces.push(n), this.faceVertexUvs[0].push([
        f[a1].clone(),
        f[b].clone(),
        f[g].clone()
    ]), n = new THREE.Face3(b, e, g, [
        h[b].clone(),
        h[e].clone(),
        h[g].clone()
    ]), this.faces.push(n), this.faceVertexUvs[0].push([
        f[b].clone(),
        f[e].clone(),
        f[g].clone()
    ]);
    this.computeFaceNormals();
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry;
THREE.TorusGeometry.prototype.clone = function() {
    return new THREE.TorusGeometry(this.parameters.radius, this.parameters.tube, this.parameters.radialSegments, this.parameters.tubularSegments, this.parameters.arc);
};
THREE.TorusKnotGeometry = function(a1, b, c, d, e, g, f) {
    function h(a1, b, c, d, e) {
        var f = Math.cos(a1), g = Math.sin(a1);
        a1 *= b / c;
        b = Math.cos(a1);
        f *= d * (2 + b) * .5;
        g = d * (2 + b) * g * .5;
        d = e * d * Math.sin(a1) * .5;
        return new THREE.Vector3(f, g, d);
    }
    THREE.Geometry.call(this);
    this.type = "TorusKnotGeometry";
    this.parameters = {
        radius: a1,
        tube: b,
        radialSegments: c,
        tubularSegments: d,
        p: e,
        q: g,
        heightScale: f
    };
    a1 = a1 || 100;
    b = b || 40;
    c = c || 64;
    d = d || 8;
    e = e || 2;
    g = g || 3;
    f = f || 1;
    for(var k = Array(c), l = new THREE.Vector3, n = new THREE.Vector3, p = new THREE.Vector3, m = 0; m < c; ++m){
        k[m] = Array(d);
        var q = m / c * 2 * e * Math.PI, t = h(q, g, e, a1, f), q = h(q + .01, g, e, a1, f);
        l.subVectors(q, t);
        n.addVectors(q, t);
        p.crossVectors(l, n);
        n.crossVectors(p, l);
        p.normalize();
        n.normalize();
        for(q = 0; q < d; ++q){
            var r = q / d * 2 * Math.PI, u = -b * Math.cos(r), r = b * Math.sin(r), w = new THREE.Vector3;
            w.x = t.x + u * n.x + r * p.x;
            w.y = t.y + u * n.y + r * p.y;
            w.z = t.z + u * n.z + r * p.z;
            k[m][q] = this.vertices.push(w) - 1;
        }
    }
    for(m = 0; m < c; ++m)for(q = 0; q < d; ++q)e = (m + 1) % c, g = (q + 1) % d, a1 = k[m][q], b = k[e][q], e = k[e][g], g = k[m][g], f = new THREE.Vector2(m / c, q / d), l = new THREE.Vector2((m + 1) / c, q / d), n = new THREE.Vector2((m + 1) / c, (q + 1) / d), p = new THREE.Vector2(m / c, (q + 1) / d), this.faces.push(new THREE.Face3(a1, b, g)), this.faceVertexUvs[0].push([
        f,
        l,
        p
    ]), this.faces.push(new THREE.Face3(b, e, g)), this.faceVertexUvs[0].push([
        l.clone(),
        n,
        p.clone()
    ]);
    this.computeFaceNormals();
    this.computeVertexNormals();
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry;
THREE.TorusKnotGeometry.prototype.clone = function() {
    return new THREE.TorusKnotGeometry(this.parameters.radius, this.parameters.tube, this.parameters.radialSegments, this.parameters.tubularSegments, this.parameters.p, this.parameters.q, this.parameters.heightScale);
};
THREE.TubeGeometry = function(a1, b, c, d, e, g) {
    THREE.Geometry.call(this);
    this.type = "TubeGeometry";
    this.parameters = {
        path: a1,
        segments: b,
        radius: c,
        radialSegments: d,
        closed: e
    };
    b = b || 64;
    c = c || 1;
    d = d || 8;
    e = e || !1;
    g = g || THREE.TubeGeometry.NoTaper;
    var f = [], h, k, l = b + 1, n, p, m, q, t, r = new THREE.Vector3, u, w, v;
    u = new THREE.TubeGeometry.FrenetFrames(a1, b, e);
    w = u.normals;
    v = u.binormals;
    this.tangents = u.tangents;
    this.normals = w;
    this.binormals = v;
    for(u = 0; u < l; u++)for(f[u] = [], n = u / (l - 1), t = a1.getPointAt(n), h = w[u], k = v[u], m = c * g(n), n = 0; n < d; n++)p = n / d * 2 * Math.PI, q = -m * Math.cos(p), p = m * Math.sin(p), r.copy(t), r.x += q * h.x + p * k.x, r.y += q * h.y + p * k.y, r.z += q * h.z + p * k.z, f[u][n] = this.vertices.push(new THREE.Vector3(r.x, r.y, r.z)) - 1;
    for(u = 0; u < b; u++)for(n = 0; n < d; n++)g = e ? (u + 1) % b : u + 1, l = (n + 1) % d, a1 = f[u][n], c = f[g][n], g = f[g][l], l = f[u][l], r = new THREE.Vector2(u / b, n / d), w = new THREE.Vector2((u + 1) / b, n / d), v = new THREE.Vector2((u + 1) / b, (n + 1) / d), h = new THREE.Vector2(u / b, (n + 1) / d), this.faces.push(new THREE.Face3(a1, c, l)), this.faceVertexUvs[0].push([
        r,
        w,
        h
    ]), this.faces.push(new THREE.Face3(c, g, l)), this.faceVertexUvs[0].push([
        w.clone(),
        v,
        h.clone()
    ]);
    this.computeFaceNormals();
    this.computeVertexNormals();
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry;
THREE.TubeGeometry.NoTaper = function(a1) {
    return 1;
};
THREE.TubeGeometry.SinusoidalTaper = function(a1) {
    return Math.sin(Math.PI * a1);
};
THREE.TubeGeometry.FrenetFrames = function(a1, b, c) {
    var d = new THREE.Vector3, e = [], g = [], f = [], h = new THREE.Vector3, k = new THREE.Matrix4;
    b += 1;
    var l, n, p;
    this.tangents = e;
    this.normals = g;
    this.binormals = f;
    for(l = 0; l < b; l++)n = l / (b - 1), e[l] = a1.getTangentAt(n), e[l].normalize();
    g[0] = new THREE.Vector3;
    f[0] = new THREE.Vector3;
    a1 = Number.MAX_VALUE;
    l = Math.abs(e[0].x);
    n = Math.abs(e[0].y);
    p = Math.abs(e[0].z);
    l <= a1 && (a1 = l, d.set(1, 0, 0));
    n <= a1 && (a1 = n, d.set(0, 1, 0));
    p <= a1 && d.set(0, 0, 1);
    h.crossVectors(e[0], d).normalize();
    g[0].crossVectors(e[0], h);
    f[0].crossVectors(e[0], g[0]);
    for(l = 1; l < b; l++)g[l] = g[l - 1].clone(), f[l] = f[l - 1].clone(), h.crossVectors(e[l - 1], e[l]), 1E-4 < h.length() && (h.normalize(), d = Math.acos(THREE.Math.clamp(e[l - 1].dot(e[l]), -1, 1)), g[l].applyMatrix4(k.makeRotationAxis(h, d))), f[l].crossVectors(e[l], g[l]);
    if (c) for(d = Math.acos(THREE.Math.clamp(g[0].dot(g[b - 1]), -1, 1)), d /= b - 1, 0 < e[0].dot(h.crossVectors(g[0], g[b - 1])) && (d = -d), l = 1; l < b; l++)g[l].applyMatrix4(k.makeRotationAxis(e[l], d * l)), f[l].crossVectors(e[l], g[l]);
};
THREE.PolyhedronGeometry = function(a1, b, c, d) {
    function e(a1) {
        var b = a1.normalize().clone();
        b.index = k.vertices.push(b) - 1;
        var c = Math.atan2(a1.z, -a1.x) / 2 / Math.PI + .5;
        a1 = Math.atan2(-a1.y, Math.sqrt(a1.x * a1.x + a1.z * a1.z)) / Math.PI + .5;
        b.uv = new THREE.Vector2(c, 1 - a1);
        return b;
    }
    function g(a1, b, c, d) {
        d = new THREE.Face3(a1.index, b.index, c.index, [
            a1.clone(),
            b.clone(),
            c.clone()
        ], void 0, d);
        k.faces.push(d);
        u.copy(a1).add(b).add(c).divideScalar(3);
        d = Math.atan2(u.z, -u.x);
        k.faceVertexUvs[0].push([
            h(a1.uv, a1, d),
            h(b.uv, b, d),
            h(c.uv, c, d)
        ]);
    }
    function f(a1, b) {
        for(var c = Math.pow(2, b), d = e(k.vertices[a1.a]), f = e(k.vertices[a1.b]), h = e(k.vertices[a1.c]), l = [], m = a1.materialIndex, n = 0; n <= c; n++){
            l[n] = [];
            for(var p = e(d.clone().lerp(h, n / c)), q = e(f.clone().lerp(h, n / c)), r = c - n, t = 0; t <= r; t++)l[n][t] = 0 === t && n === c ? p : e(p.clone().lerp(q, t / r));
        }
        for(n = 0; n < c; n++)for(t = 0; t < 2 * (c - n) - 1; t++)d = Math.floor(t / 2), 0 === t % 2 ? g(l[n][d + 1], l[n + 1][d], l[n][d], m) : g(l[n][d + 1], l[n + 1][d + 1], l[n + 1][d], m);
    }
    function h(a1, b, c) {
        0 > c && 1 === a1.x && (a1 = new THREE.Vector2(a1.x - 1, a1.y));
        0 === b.x && 0 === b.z && (a1 = new THREE.Vector2(c / 2 / Math.PI + .5, a1.y));
        return a1.clone();
    }
    THREE.Geometry.call(this);
    this.type = "PolyhedronGeometry";
    this.parameters = {
        vertices: a1,
        indices: b,
        radius: c,
        detail: d
    };
    c = c || 1;
    d = d || 0;
    for(var k = this, l = 0, n = a1.length; l < n; l += 3)e(new THREE.Vector3(a1[l], a1[l + 1], a1[l + 2]));
    a1 = this.vertices;
    for(var p = [], m = l = 0, n = b.length; l < n; l += 3, m++){
        var q = a1[b[l]], t = a1[b[l + 1]], r = a1[b[l + 2]];
        p[m] = new THREE.Face3(q.index, t.index, r.index, [
            q.clone(),
            t.clone(),
            r.clone()
        ], void 0, m);
    }
    for(var u = new THREE.Vector3, l = 0, n = p.length; l < n; l++)f(p[l], d);
    l = 0;
    for(n = this.faceVertexUvs[0].length; l < n; l++)b = this.faceVertexUvs[0][l], d = b[0].x, a1 = b[1].x, p = b[2].x, m = Math.max(d, Math.max(a1, p)), q = Math.min(d, Math.min(a1, p)), .9 < m && .1 > q && (.2 > d && (b[0].x += 1), .2 > a1 && (b[1].x += 1), .2 > p && (b[2].x += 1));
    l = 0;
    for(n = this.vertices.length; l < n; l++)this.vertices[l].multiplyScalar(c);
    this.mergeVertices();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c);
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry;
THREE.PolyhedronGeometry.prototype.clone = function() {
    return new THREE.PolyhedronGeometry(this.parameters.vertices, this.parameters.indices, this.parameters.radius, this.parameters.detail).copy(this);
};
THREE.PolyhedronGeometry.prototype.copy = function(a1) {
    THREE.Geometry.prototype.copy.call(this, a1);
    return this;
};
THREE.DodecahedronGeometry = function(a1, b) {
    var c = (1 + Math.sqrt(5)) / 2, d = 1 / c;
    THREE.PolyhedronGeometry.call(this, [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -d,
        -c,
        0,
        -d,
        c,
        0,
        d,
        -c,
        0,
        d,
        c,
        -d,
        -c,
        0,
        -d,
        c,
        0,
        d,
        -c,
        0,
        d,
        c,
        0,
        -c,
        0,
        -d,
        c,
        0,
        -d,
        -c,
        0,
        d,
        c,
        0,
        d
    ], [
        3,
        11,
        7,
        3,
        7,
        15,
        3,
        15,
        13,
        7,
        19,
        17,
        7,
        17,
        6,
        7,
        6,
        15,
        17,
        4,
        8,
        17,
        8,
        10,
        17,
        10,
        6,
        8,
        0,
        16,
        8,
        16,
        2,
        8,
        2,
        10,
        0,
        12,
        1,
        0,
        1,
        18,
        0,
        18,
        16,
        6,
        10,
        2,
        6,
        2,
        13,
        6,
        13,
        15,
        2,
        16,
        18,
        2,
        18,
        3,
        2,
        3,
        13,
        18,
        1,
        9,
        18,
        9,
        11,
        18,
        11,
        3,
        4,
        14,
        12,
        4,
        12,
        0,
        4,
        0,
        8,
        11,
        9,
        5,
        11,
        5,
        19,
        11,
        19,
        7,
        19,
        5,
        14,
        19,
        14,
        4,
        19,
        4,
        17,
        1,
        12,
        14,
        1,
        14,
        5,
        1,
        5,
        9
    ], a1, b);
    this.type = "DodecahedronGeometry";
    this.parameters = {
        radius: a1,
        detail: b
    };
};
THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry;
THREE.DodecahedronGeometry.prototype.clone = function() {
    var a1 = new THREE.DodecahedronGeometry(this.parameters.radius, this.parameters.detail);
    a1.copy(this);
    return a1;
};
THREE.IcosahedronGeometry = function(a1, b) {
    var c = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [
        -1,
        c,
        0,
        1,
        c,
        0,
        -1,
        -c,
        0,
        1,
        -c,
        0,
        0,
        -1,
        c,
        0,
        1,
        c,
        0,
        -1,
        -c,
        0,
        1,
        -c,
        c,
        0,
        -1,
        c,
        0,
        1,
        -c,
        0,
        -1,
        -c,
        0,
        1
    ], [
        0,
        11,
        5,
        0,
        5,
        1,
        0,
        1,
        7,
        0,
        7,
        10,
        0,
        10,
        11,
        1,
        5,
        9,
        5,
        11,
        4,
        11,
        10,
        2,
        10,
        7,
        6,
        7,
        1,
        8,
        3,
        9,
        4,
        3,
        4,
        2,
        3,
        2,
        6,
        3,
        6,
        8,
        3,
        8,
        9,
        4,
        9,
        5,
        2,
        4,
        11,
        6,
        2,
        10,
        8,
        6,
        7,
        9,
        8,
        1
    ], a1, b);
    this.type = "IcosahedronGeometry";
    this.parameters = {
        radius: a1,
        detail: b
    };
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;
THREE.IcosahedronGeometry.prototype.clone = function() {
    var a1 = new THREE.IcosahedronGeometry(this.parameters.radius, this.parameters.detail);
    a1.copy(this);
    return a1;
};
THREE.OctahedronGeometry = function(a1, b) {
    THREE.PolyhedronGeometry.call(this, [
        1,
        0,
        0,
        -1,
        0,
        0,
        0,
        1,
        0,
        0,
        -1,
        0,
        0,
        0,
        1,
        0,
        0,
        -1
    ], [
        0,
        2,
        4,
        0,
        4,
        3,
        0,
        3,
        5,
        0,
        5,
        2,
        1,
        2,
        5,
        1,
        5,
        3,
        1,
        3,
        4,
        1,
        4,
        2
    ], a1, b);
    this.type = "OctahedronGeometry";
    this.parameters = {
        radius: a1,
        detail: b
    };
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry;
THREE.OctahedronGeometry.prototype.clone = function() {
    var a1 = new THREE.OctahedronGeometry(this.parameters.radius, this.parameters.detail);
    a1.copy(this);
    return a1;
};
THREE.TetrahedronGeometry = function(a1, b) {
    THREE.PolyhedronGeometry.call(this, [
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        1,
        -1,
        -1
    ], [
        2,
        1,
        0,
        0,
        3,
        2,
        1,
        3,
        0,
        2,
        3,
        1
    ], a1, b);
    this.type = "TetrahedronGeometry";
    this.parameters = {
        radius: a1,
        detail: b
    };
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry;
THREE.TetrahedronGeometry.prototype.clone = function() {
    var a1 = new THREE.TetrahedronGeometry(this.parameters.radius, this.parameters.detail);
    a1.copy(this);
    return a1;
};
THREE.ParametricGeometry = function(a1, b, c) {
    THREE.Geometry.call(this);
    this.type = "ParametricGeometry";
    this.parameters = {
        func: a1,
        slices: b,
        stacks: c
    };
    var d = this.vertices, e = this.faces, g = this.faceVertexUvs[0], f, h, k, l, n = b + 1;
    for(f = 0; f <= c; f++)for(l = f / c, h = 0; h <= b; h++)k = h / b, k = a1(k, l), d.push(k);
    var p, m, q, t;
    for(f = 0; f < c; f++)for(h = 0; h < b; h++)a1 = f * n + h, d = f * n + h + 1, l = (f + 1) * n + h + 1, k = (f + 1) * n + h, p = new THREE.Vector2(h / b, f / c), m = new THREE.Vector2((h + 1) / b, f / c), q = new THREE.Vector2((h + 1) / b, (f + 1) / c), t = new THREE.Vector2(h / b, (f + 1) / c), e.push(new THREE.Face3(a1, d, k)), g.push([
        p,
        m,
        t
    ]), e.push(new THREE.Face3(d, l, k)), g.push([
        m.clone(),
        q,
        t.clone()
    ]);
    this.computeFaceNormals();
    this.computeVertexNormals();
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry;
THREE.WireframeGeometry = function(a1) {
    THREE.BufferGeometry.call(this);
    var b = [
        0,
        0
    ], c = {}, d = function(a1, b) {
        return a1 - b;
    }, e = [
        "a",
        "b",
        "c"
    ];
    if (a1 instanceof THREE.Geometry) {
        var g = a1.vertices, f = a1.faces, h = 0, k = new Uint32Array(6 * f.length);
        a1 = 0;
        for(var l = f.length; a1 < l; a1++)for(var n = f[a1], p = 0; 3 > p; p++){
            b[0] = n[e[p]];
            b[1] = n[e[(p + 1) % 3]];
            b.sort(d);
            var m = b.toString();
            void 0 === c[m] && (k[2 * h] = b[0], k[2 * h + 1] = b[1], c[m] = !0, h++);
        }
        b = new Float32Array(6 * h);
        a1 = 0;
        for(l = h; a1 < l; a1++)for(p = 0; 2 > p; p++)c = g[k[2 * a1 + p]], h = 6 * a1 + 3 * p, b[h + 0] = c.x, b[h + 1] = c.y, b[h + 2] = c.z;
        this.addAttribute("position", new THREE.BufferAttribute(b, 3));
    } else if (a1 instanceof THREE.BufferGeometry) {
        if (null !== a1.index) {
            l = a1.index.array;
            g = a1.attributes.position;
            e = a1.drawcalls;
            h = 0;
            0 === e.length && a1.addDrawCall(0, l.length);
            k = new Uint32Array(2 * l.length);
            f = 0;
            for(n = e.length; f < n; ++f){
                a1 = e[f];
                p = a1.start;
                m = a1.count;
                a1 = p;
                for(var q = p + m; a1 < q; a1 += 3)for(p = 0; 3 > p; p++)b[0] = l[a1 + p], b[1] = l[a1 + (p + 1) % 3], b.sort(d), m = b.toString(), void 0 === c[m] && (k[2 * h] = b[0], k[2 * h + 1] = b[1], c[m] = !0, h++);
            }
            b = new Float32Array(6 * h);
            a1 = 0;
            for(l = h; a1 < l; a1++)for(p = 0; 2 > p; p++)h = 6 * a1 + 3 * p, c = k[2 * a1 + p], b[h + 0] = g.getX(c), b[h + 1] = g.getY(c), b[h + 2] = g.getZ(c);
        } else for(g = a1.attributes.position.array, h = g.length / 3, k = h / 3, b = new Float32Array(6 * h), a1 = 0, l = k; a1 < l; a1++)for(p = 0; 3 > p; p++)h = 18 * a1 + 6 * p, k = 9 * a1 + 3 * p, b[h + 0] = g[k], b[h + 1] = g[k + 1], b[h + 2] = g[k + 2], c = 9 * a1 + (p + 1) % 3 * 3, b[h + 3] = g[c], b[h + 4] = g[c + 1], b[h + 5] = g[c + 2];
        this.addAttribute("position", new THREE.BufferAttribute(b, 3));
    }
};
THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry;
THREE.AxisHelper = function(a1) {
    a1 = a1 || 1;
    var b = new Float32Array([
        0,
        0,
        0,
        a1,
        0,
        0,
        0,
        0,
        0,
        0,
        a1,
        0,
        0,
        0,
        0,
        0,
        0,
        a1
    ]), c = new Float32Array([
        1,
        0,
        0,
        1,
        .6,
        0,
        0,
        1,
        0,
        .6,
        1,
        0,
        0,
        0,
        1,
        0,
        .6,
        1
    ]);
    a1 = new THREE.BufferGeometry;
    a1.addAttribute("position", new THREE.BufferAttribute(b, 3));
    a1.addAttribute("color", new THREE.BufferAttribute(c, 3));
    b = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    THREE.LineSegments.call(this, a1, b);
};
THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.AxisHelper.prototype.constructor = THREE.AxisHelper;
THREE.ArrowHelper = function() {
    var a1 = new THREE.Geometry;
    a1.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
    var b = new THREE.CylinderGeometry(0, .5, 1, 5, 1);
    b.translate(0, -0.5, 0);
    return function(c, d, e, g, f, h) {
        THREE.Object3D.call(this);
        void 0 === g && (g = 16776960);
        void 0 === e && (e = 1);
        void 0 === f && (f = .2 * e);
        void 0 === h && (h = .2 * f);
        this.position.copy(d);
        f < e && (this.line = new THREE.Line(a1, new THREE.LineBasicMaterial({
            color: g
        })), this.line.matrixAutoUpdate = !1, this.add(this.line));
        this.cone = new THREE.Mesh(b, new THREE.MeshBasicMaterial({
            color: g
        }));
        this.cone.matrixAutoUpdate = !1;
        this.add(this.cone);
        this.setDirection(c);
        this.setLength(e, f, h);
    };
}();
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper;
THREE.ArrowHelper.prototype.setDirection = function() {
    var a1 = new THREE.Vector3, b;
    return function(c) {
        .99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -0.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a1.set(c.z, 0, -c.x).normalize(), b = Math.acos(c.y), this.quaternion.setFromAxisAngle(a1, b));
    };
}();
THREE.ArrowHelper.prototype.setLength = function(a1, b, c) {
    void 0 === b && (b = .2 * a1);
    void 0 === c && (c = .2 * b);
    b < a1 && (this.line.scale.set(1, a1 - b, 1), this.line.updateMatrix());
    this.cone.scale.set(c, b, c);
    this.cone.position.y = a1;
    this.cone.updateMatrix();
};
THREE.ArrowHelper.prototype.setColor = function(a1) {
    void 0 !== this.line && this.line.material.color.set(a1);
    this.cone.material.color.set(a1);
};
THREE.BoxHelper = function(a1) {
    var b = new Uint16Array([
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        0,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        4,
        0,
        4,
        1,
        5,
        2,
        6,
        3,
        7
    ]), c = new Float32Array(24), d = new THREE.BufferGeometry;
    d.setIndex(new THREE.BufferAttribute(b, 1));
    d.addAttribute("position", new THREE.BufferAttribute(c, 3));
    THREE.LineSegments.call(this, d, new THREE.LineBasicMaterial({
        color: 16776960
    }));
    void 0 !== a1 && this.update(a1);
};
THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.BoxHelper.prototype.constructor = THREE.BoxHelper;
THREE.BoxHelper.prototype.update = function() {
    var a1 = new THREE.Box3;
    return function(b) {
        a1.setFromObject(b);
        if (!a1.empty()) {
            b = a1.min;
            var c = a1.max, d = this.geometry.attributes.position, e = d.array;
            e[0] = c.x;
            e[1] = c.y;
            e[2] = c.z;
            e[3] = b.x;
            e[4] = c.y;
            e[5] = c.z;
            e[6] = b.x;
            e[7] = b.y;
            e[8] = c.z;
            e[9] = c.x;
            e[10] = b.y;
            e[11] = c.z;
            e[12] = c.x;
            e[13] = c.y;
            e[14] = b.z;
            e[15] = b.x;
            e[16] = c.y;
            e[17] = b.z;
            e[18] = b.x;
            e[19] = b.y;
            e[20] = b.z;
            e[21] = c.x;
            e[22] = b.y;
            e[23] = b.z;
            d.needsUpdate = !0;
            this.geometry.computeBoundingSphere();
        }
    };
}();
THREE.BoundingBoxHelper = function(a1, b) {
    var c = void 0 !== b ? b : 8947848;
    this.object = a1;
    this.box = new THREE.Box3;
    THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
        color: c,
        wireframe: !0
    }));
};
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper;
THREE.BoundingBoxHelper.prototype.update = function() {
    this.box.setFromObject(this.object);
    this.box.size(this.scale);
    this.box.center(this.position);
};
THREE.CameraHelper = function(a1) {
    function b(a1, b, d) {
        c(a1, d);
        c(b, d);
    }
    function c(a1, b) {
        d.vertices.push(new THREE.Vector3);
        d.colors.push(new THREE.Color(b));
        void 0 === g[a1] && (g[a1] = []);
        g[a1].push(d.vertices.length - 1);
    }
    var d = new THREE.Geometry, e = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors
    }), g = {};
    b("n1", "n2", 16755200);
    b("n2", "n4", 16755200);
    b("n4", "n3", 16755200);
    b("n3", "n1", 16755200);
    b("f1", "f2", 16755200);
    b("f2", "f4", 16755200);
    b("f4", "f3", 16755200);
    b("f3", "f1", 16755200);
    b("n1", "f1", 16755200);
    b("n2", "f2", 16755200);
    b("n3", "f3", 16755200);
    b("n4", "f4", 16755200);
    b("p", "n1", 16711680);
    b("p", "n2", 16711680);
    b("p", "n3", 16711680);
    b("p", "n4", 16711680);
    b("u1", "u2", 43775);
    b("u2", "u3", 43775);
    b("u3", "u1", 43775);
    b("c", "t", 16777215);
    b("p", "c", 3355443);
    b("cn1", "cn2", 3355443);
    b("cn3", "cn4", 3355443);
    b("cf1", "cf2", 3355443);
    b("cf3", "cf4", 3355443);
    THREE.LineSegments.call(this, d, e);
    this.camera = a1;
    this.matrix = a1.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.pointMap = g;
    this.update();
};
THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.CameraHelper.prototype.constructor = THREE.CameraHelper;
THREE.CameraHelper.prototype.update = function() {
    var a1, b, c = new THREE.Vector3, d = new THREE.Camera, e = function(e, f, h, k) {
        c.set(f, h, k).unproject(d);
        e = b[e];
        if (void 0 !== e) for(f = 0, h = e.length; f < h; f++)a1.vertices[e[f]].copy(c);
    };
    return function() {
        a1 = this.geometry;
        b = this.pointMap;
        d.projectionMatrix.copy(this.camera.projectionMatrix);
        e("c", 0, 0, -1);
        e("t", 0, 0, 1);
        e("n1", -1, -1, -1);
        e("n2", 1, -1, -1);
        e("n3", -1, 1, -1);
        e("n4", 1, 1, -1);
        e("f1", -1, -1, 1);
        e("f2", 1, -1, 1);
        e("f3", -1, 1, 1);
        e("f4", 1, 1, 1);
        e("u1", .7, 1.1, -1);
        e("u2", -0.7, 1.1, -1);
        e("u3", 0, 2, -1);
        e("cf1", -1, 0, 1);
        e("cf2", 1, 0, 1);
        e("cf3", 0, -1, 1);
        e("cf4", 0, 1, 1);
        e("cn1", -1, 0, -1);
        e("cn2", 1, 0, -1);
        e("cn3", 0, -1, -1);
        e("cn4", 0, 1, -1);
        a1.verticesNeedUpdate = !0;
    };
}();
THREE.DirectionalLightHelper = function(a1, b) {
    THREE.Object3D.call(this);
    this.light = a1;
    this.light.updateMatrixWorld();
    this.matrix = a1.matrixWorld;
    this.matrixAutoUpdate = !1;
    b = b || 1;
    var c = new THREE.Geometry;
    c.vertices.push(new THREE.Vector3(-b, b, 0), new THREE.Vector3(b, b, 0), new THREE.Vector3(b, -b, 0), new THREE.Vector3(-b, -b, 0), new THREE.Vector3(-b, b, 0));
    var d = new THREE.LineBasicMaterial({
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    this.lightPlane = new THREE.Line(c, d);
    this.add(this.lightPlane);
    c = new THREE.Geometry;
    c.vertices.push(new THREE.Vector3, new THREE.Vector3);
    d = new THREE.LineBasicMaterial({
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    this.targetLine = new THREE.Line(c, d);
    this.add(this.targetLine);
    this.update();
};
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose = function() {
    this.lightPlane.geometry.dispose();
    this.lightPlane.material.dispose();
    this.targetLine.geometry.dispose();
    this.targetLine.material.dispose();
};
THREE.DirectionalLightHelper.prototype.update = function() {
    var a1 = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
    return function() {
        a1.setFromMatrixPosition(this.light.matrixWorld);
        b.setFromMatrixPosition(this.light.target.matrixWorld);
        c.subVectors(b, a1);
        this.lightPlane.lookAt(c);
        this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
        this.targetLine.geometry.vertices[1].copy(c);
        this.targetLine.geometry.verticesNeedUpdate = !0;
        this.targetLine.material.color.copy(this.lightPlane.material.color);
    };
}();
THREE.EdgesHelper = function(a1, b, c) {
    b = void 0 !== b ? b : 16777215;
    THREE.LineSegments.call(this, new THREE.EdgesGeometry(a1.geometry, c), new THREE.LineBasicMaterial({
        color: b
    }));
    this.matrix = a1.matrixWorld;
    this.matrixAutoUpdate = !1;
};
THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper;
THREE.FaceNormalsHelper = function(a1, b, c, d) {
    this.object = a1;
    this.size = void 0 !== b ? b : 1;
    a1 = void 0 !== c ? c : 16776960;
    d = void 0 !== d ? d : 1;
    b = 0;
    c = this.object.geometry;
    c instanceof THREE.Geometry ? b = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    c = new THREE.BufferGeometry;
    b = new THREE.Float32Attribute(6 * b, 3);
    c.addAttribute("position", b);
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: a1,
        linewidth: d
    }));
    this.matrixAutoUpdate = !1;
    this.update();
};
THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update = function() {
    var a1 = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Matrix3;
    return function() {
        this.object.updateMatrixWorld(!0);
        c.getNormalMatrix(this.object.matrixWorld);
        for(var d = this.object.matrixWorld, e = this.geometry.attributes.position, g = this.object.geometry, f = g.vertices, g = g.faces, h = 0, k = 0, l = g.length; k < l; k++){
            var n = g[k], p = n.normal;
            a1.copy(f[n.a]).add(f[n.b]).add(f[n.c]).divideScalar(3).applyMatrix4(d);
            b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a1);
            e.setXYZ(h, a1.x, a1.y, a1.z);
            h += 1;
            e.setXYZ(h, b.x, b.y, b.z);
            h += 1;
        }
        e.needsUpdate = !0;
        return this;
    };
}();
THREE.GridHelper = function(a1, b) {
    var c = new THREE.Geometry, d = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    this.color1 = new THREE.Color(4473924);
    this.color2 = new THREE.Color(8947848);
    for(var e = -a1; e <= a1; e += b){
        c.vertices.push(new THREE.Vector3(-a1, 0, e), new THREE.Vector3(a1, 0, e), new THREE.Vector3(e, 0, -a1), new THREE.Vector3(e, 0, a1));
        var g = 0 === e ? this.color1 : this.color2;
        c.colors.push(g, g, g, g);
    }
    THREE.LineSegments.call(this, c, d);
};
THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.GridHelper.prototype.constructor = THREE.GridHelper;
THREE.GridHelper.prototype.setColors = function(a1, b) {
    this.color1.set(a1);
    this.color2.set(b);
    this.geometry.colorsNeedUpdate = !0;
};
THREE.HemisphereLightHelper = function(a1, b) {
    THREE.Object3D.call(this);
    this.light = a1;
    this.light.updateMatrixWorld();
    this.matrix = a1.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.colors = [
        new THREE.Color,
        new THREE.Color
    ];
    var c = new THREE.SphereGeometry(b, 4, 2);
    c.rotateX(-Math.PI / 2);
    for(var d = 0; 8 > d; d++)c.faces[d].color = this.colors[4 > d ? 0 : 1];
    d = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors,
        wireframe: !0
    });
    this.lightSphere = new THREE.Mesh(c, d);
    this.add(this.lightSphere);
    this.update();
};
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper;
THREE.HemisphereLightHelper.prototype.dispose = function() {
    this.lightSphere.geometry.dispose();
    this.lightSphere.material.dispose();
};
THREE.HemisphereLightHelper.prototype.update = function() {
    var a1 = new THREE.Vector3;
    return function() {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
        this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
        this.lightSphere.lookAt(a1.setFromMatrixPosition(this.light.matrixWorld).negate());
        this.lightSphere.geometry.colorsNeedUpdate = !0;
    };
}();
THREE.PointLightHelper = function(a1, b) {
    this.light = a1;
    this.light.updateMatrixWorld();
    var c = new THREE.SphereGeometry(b, 4, 2), d = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    THREE.Mesh.call(this, c, d);
    this.matrix = this.light.matrixWorld;
    this.matrixAutoUpdate = !1;
};
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose = function() {
    this.geometry.dispose();
    this.material.dispose();
};
THREE.PointLightHelper.prototype.update = function() {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
};
THREE.SkeletonHelper = function(a1) {
    this.bones = this.getBoneList(a1);
    for(var b = new THREE.Geometry, c = 0; c < this.bones.length; c++)this.bones[c].parent instanceof THREE.Bone && (b.vertices.push(new THREE.Vector3), b.vertices.push(new THREE.Vector3), b.colors.push(new THREE.Color(0, 0, 1)), b.colors.push(new THREE.Color(0, 1, 0)));
    b.dynamic = !0;
    c = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
    });
    THREE.LineSegments.call(this, b, c);
    this.root = a1;
    this.matrix = a1.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.update();
};
THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper;
THREE.SkeletonHelper.prototype.getBoneList = function(a1) {
    var b = [];
    a1 instanceof THREE.Bone && b.push(a1);
    for(var c = 0; c < a1.children.length; c++)b.push.apply(b, this.getBoneList(a1.children[c]));
    return b;
};
THREE.SkeletonHelper.prototype.update = function() {
    for(var a1 = this.geometry, b = (new THREE.Matrix4).getInverse(this.root.matrixWorld), c = new THREE.Matrix4, d = 0, e = 0; e < this.bones.length; e++){
        var g = this.bones[e];
        g.parent instanceof THREE.Bone && (c.multiplyMatrices(b, g.matrixWorld), a1.vertices[d].setFromMatrixPosition(c), c.multiplyMatrices(b, g.parent.matrixWorld), a1.vertices[d + 1].setFromMatrixPosition(c), d += 2);
    }
    a1.verticesNeedUpdate = !0;
    a1.computeBoundingSphere();
};
THREE.SpotLightHelper = function(a1) {
    THREE.Object3D.call(this);
    this.light = a1;
    this.light.updateMatrixWorld();
    this.matrix = a1.matrixWorld;
    this.matrixAutoUpdate = !1;
    a1 = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0);
    a1.translate(0, -0.5, 0);
    a1.rotateX(-Math.PI / 2);
    var b = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    this.cone = new THREE.Mesh(a1, b);
    this.add(this.cone);
    this.update();
};
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper;
THREE.SpotLightHelper.prototype.dispose = function() {
    this.cone.geometry.dispose();
    this.cone.material.dispose();
};
THREE.SpotLightHelper.prototype.update = function() {
    var a1 = new THREE.Vector3, b = new THREE.Vector3;
    return function() {
        var c = this.light.distance ? this.light.distance : 1E4, d = c * Math.tan(this.light.angle);
        this.cone.scale.set(d, d, c);
        a1.setFromMatrixPosition(this.light.matrixWorld);
        b.setFromMatrixPosition(this.light.target.matrixWorld);
        this.cone.lookAt(b.sub(a1));
        this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    };
}();
THREE.VertexNormalsHelper = function(a1, b, c, d) {
    this.object = a1;
    this.size = void 0 !== b ? b : 1;
    a1 = void 0 !== c ? c : 16711680;
    d = void 0 !== d ? d : 1;
    b = 0;
    c = this.object.geometry;
    c instanceof THREE.Geometry ? b = 3 * c.faces.length : c instanceof THREE.BufferGeometry && (b = c.attributes.normal.count);
    c = new THREE.BufferGeometry;
    b = new THREE.Float32Attribute(6 * b, 3);
    c.addAttribute("position", b);
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: a1,
        linewidth: d
    }));
    this.matrixAutoUpdate = !1;
    this.update();
};
THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update = function() {
    var a1 = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Matrix3;
    return function() {
        var d = [
            "a",
            "b",
            "c"
        ];
        this.object.updateMatrixWorld(!0);
        c.getNormalMatrix(this.object.matrixWorld);
        var e = this.object.matrixWorld, g = this.geometry.attributes.position, f = this.object.geometry;
        if (f instanceof THREE.Geometry) for(var h = f.vertices, k = f.faces, l = f = 0, n = k.length; l < n; l++)for(var p = k[l], m = 0, q = p.vertexNormals.length; m < q; m++){
            var t = p.vertexNormals[m];
            a1.copy(h[p[d[m]]]).applyMatrix4(e);
            b.copy(t).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a1);
            g.setXYZ(f, a1.x, a1.y, a1.z);
            f += 1;
            g.setXYZ(f, b.x, b.y, b.z);
            f += 1;
        }
        else if (f instanceof THREE.BufferGeometry) for(d = f.attributes.position, h = f.attributes.normal, m = f = 0, q = d.count; m < q; m++)a1.set(d.getX(m), d.getY(m), d.getZ(m)).applyMatrix4(e), b.set(h.getX(m), h.getY(m), h.getZ(m)), b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a1), g.setXYZ(f, a1.x, a1.y, a1.z), f += 1, g.setXYZ(f, b.x, b.y, b.z), f += 1;
        g.needsUpdate = !0;
        return this;
    };
}();
THREE.WireframeHelper = function(a1, b) {
    var c = void 0 !== b ? b : 16777215;
    THREE.LineSegments.call(this, new THREE.WireframeGeometry(a1.geometry), new THREE.LineBasicMaterial({
        color: c
    }));
    this.matrix = a1.matrixWorld;
    this.matrixAutoUpdate = !1;
};
THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper;
THREE.ImmediateRenderObject = function() {
    THREE.Object3D.call(this);
    this.render = function(a1) {};
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject;
THREE.MorphBlendMesh = function(a1, b) {
    THREE.Mesh.call(this, a1, b);
    this.animationsMap = {};
    this.animationsList = [];
    var c = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, c - 1, c / 1);
    this.setAnimationWeight("__default", 1);
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation = function(a1, b, c, d) {
    b = {
        start: b,
        end: c,
        length: c - b + 1,
        fps: d,
        duration: (c - b) / d,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[a1] = b;
    this.animationsList.push(b);
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(a1) {
    for(var b = /([a-z]+)_?(\d+)/, c, d = {}, e = this.geometry, g = 0, f = e.morphTargets.length; g < f; g++){
        var h = e.morphTargets[g].name.match(b);
        if (h && 1 < h.length) {
            var k = h[1];
            d[k] || (d[k] = {
                start: Infinity,
                end: -Infinity
            });
            h = d[k];
            g < h.start && (h.start = g);
            g > h.end && (h.end = g);
            c || (c = k);
        }
    }
    for(k in d)h = d[k], this.createAnimation(k, h.start, h.end, a1);
    this.firstAnimation = c;
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(a1) {
    if (a1 = this.animationsMap[a1]) a1.direction = 1, a1.directionBackwards = !1;
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(a1) {
    if (a1 = this.animationsMap[a1]) a1.direction = -1, a1.directionBackwards = !0;
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(a1, b) {
    var c = this.animationsMap[a1];
    c && (c.fps = b, c.duration = (c.end - c.start) / c.fps);
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(a1, b) {
    var c = this.animationsMap[a1];
    c && (c.duration = b, c.fps = (c.end - c.start) / c.duration);
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(a1, b) {
    var c = this.animationsMap[a1];
    c && (c.weight = b);
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function(a1, b) {
    var c = this.animationsMap[a1];
    c && (c.time = b);
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function(a1) {
    var b = 0;
    if (a1 = this.animationsMap[a1]) b = a1.time;
    return b;
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(a1) {
    var b = -1;
    if (a1 = this.animationsMap[a1]) b = a1.duration;
    return b;
};
THREE.MorphBlendMesh.prototype.playAnimation = function(a1) {
    var b = this.animationsMap[a1];
    b ? (b.time = 0, b.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + a1 + "] undefined in .playAnimation()");
};
THREE.MorphBlendMesh.prototype.stopAnimation = function(a1) {
    if (a1 = this.animationsMap[a1]) a1.active = !1;
};
THREE.MorphBlendMesh.prototype.update = function(a1) {
    for(var b = 0, c = this.animationsList.length; b < c; b++){
        var d = this.animationsList[b];
        if (d.active) {
            var e = d.duration / d.length;
            d.time += d.direction * a1;
            if (d.mirroredLoop) {
                if (d.time > d.duration || 0 > d.time) d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1);
            } else d.time %= d.duration, 0 > d.time && (d.time += d.duration);
            var g = d.start + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1), f = d.weight;
            g !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * f, this.morphTargetInfluences[g] = 0, d.lastFrame = d.currentFrame, d.currentFrame = g);
            e = d.time % e / e;
            d.directionBackwards && (e = 1 - e);
            d.currentFrame !== d.lastFrame ? (this.morphTargetInfluences[d.currentFrame] = e * f, this.morphTargetInfluences[d.lastFrame] = (1 - e) * f) : this.morphTargetInfluences[d.currentFrame] = f;
        }
    }
};

//# sourceMappingURL=index.c1d96282.js.map
