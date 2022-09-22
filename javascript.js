function rectangle(x, y) {
    this.chRong = x;
    this.chDai = y;
    this.area = function () {
        return this.chRong * this.chDai
    }
    this.parameter = function () {
        return (this.chRong + this.chDai) * 2
    }
}

function createRectangle() {
    let cRong = +(prompt("Enter width of rectangle"));
    let cDai = +(prompt("Enter height of rectangle"));
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let rect = new rectangle(cRong, cDai);
    ctx.beginPath();
    ctx.rect(20, 20, rect.chRong, rect.chDai);
    ctx.stroke();
    let dtich = rect.area();
    let chuvi = rect.parameter();
    document.getElementById("result").innerHTML = "Area: " + dtich + "<br>Parameter: " + chuvi;
}

createRectangle()