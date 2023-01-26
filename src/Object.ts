class RenderObject {
    x: number;
    y: number;
    w: number;
    h: number;

    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }


    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }
    public getW(): number {
        return this.w;
    }
    public getH(): number {
        return this.h;
    }

    public setX(v: number) {
        this.x = v;
    }
    public setY(v: number) {
        this.y = v;
    }
    public setW(v: number) {
        this.w = v;
    }
    public setH(v: number) {
        this.h = v;
    }


}
console.log("Hello, World!");

let obj = new RenderObject(1, 2, 3, 4);
console.log(obj.getW());
console.log(obj.getH());

