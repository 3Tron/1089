const Check = require('./check');
const check = new Check();
for (let h = 1; h < 10; h++) {
    for (let t = 0; t < 10; t++) {
        for (let g = 0; g < 10; g++) {
            if (h !== t && t !== g && h !== g) { // different numbers
                const value = h * 100 + t * 10 + g;
                console.log(h, t, g, value);
                check.check(value);

            }
            // else { console.log(h, t, g); }
        }
    }
}
console.log(check.count);
const p = check.count.ok / (check.count.ok + check.count.ko);
console.log(' OK %', p * 100);
