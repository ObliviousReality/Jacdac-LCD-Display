var RenderObject = /** @class */ (function () {
    function RenderObject(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    RenderObject.prototype.getX = function () {
        return this.x;
    };
    RenderObject.prototype.getY = function () {
        return this.y;
    };
    RenderObject.prototype.getW = function () {
        return this.w;
    };
    RenderObject.prototype.getH = function () {
        return this.h;
    };
    RenderObject.prototype.setX = function (v) {
        this.x = v;
    };
    RenderObject.prototype.setY = function (v) {
        this.y = v;
    };
    RenderObject.prototype.setW = function (v) {
        this.w = v;
    };
    RenderObject.prototype.setH = function (v) {
        this.h = v;
    };
    return RenderObject;
}());
console.log("Hello, World!");
var obj = new RenderObject(1, 2, 3, 4);
console.log(obj.getW());
console.log(obj.getH());
//# sourceMappingURL=Object.js.map