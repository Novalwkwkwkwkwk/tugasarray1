

function max(ong) {
    let max = ong[0];
    for (let i = 1; i < ong.length; i++) {
        if (ong[i] > max) {  
            max = ong[i];
        }
    }
    return max;  
}

let ong = [9, 7, 4, 1, 3, 5];
console.log(max(ong));