const count = {
    ok: 0,
    ko: 0
};
for (let h = 1; h < 10; h++) {
    for (let t = 0; t < 10; t++) {
        for (let g = 0; g < 10; g++) {
            if (h !== t && t !== g && h !== g) {
                //console.log(h, t, g);
                const v1 = h * 100 + t * 10 + g;
                check(v1);

            }
        }
    }
}
console.log(count);
const p = count.ok/(count.ok+count.ko);
console.log(' ok %' ,p*100);
function check(v1) {

    const v2 = inverse(v1);
    let v3 = -1;
    if (v2 > v1) {
        v3 = v2 - v1;
    } else {
        v3 = v1 - v2;
    }
    const v4 = inverse(v3);
    const v5 = Number(v4) + v3;
    if (v5 !== 1089) {
        console.log(`${v1} => ${v5} KO`);
        console.log(`\tinverse ${v1} => ${v2}`);
        console.log(`\tsubstract ${v1} vs ${v2} => ${v3}`);
        console.log(`\tinverse ${v3} => ${v4}`);
        console.log(`\tadd ${v3} to ${v4} => ${v5}`);
        count.ko++;
    } else {
        console.log(`${v1} => ${v5} OK`);
        count.ok++;
    }
}

function inverse(v) {
    return Number(v.toString().split("").reverse().join(""));
}

function getLast2Digits(v) {
    let tmp = v
        .toString()
        .split("");
    tmp.splice(0, 1);
    const tt = tmp.join('');
    //console.log(' tt', tt);
    return Number(tt);
}