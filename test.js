class Triangle{
    constructor(w, h){
        this.width=w;
        this.height=h;
    }

     Area = () => this.width*this.height;
     get length(){ return this.height};
}

let test = new Triangle(5,3)
console.log(test.length)