class divisions {
    constructor (X, y, w, h){
        var options = {
            isstattic: true
        }

        this.body = Bodies.rectangle(X, y, w, h, options);
        this.w = w;
        this.h = h;
        world.add (world, this.body);

    }
    display(){
        var pos = this.body.positions;
        rectmode(center);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }

};