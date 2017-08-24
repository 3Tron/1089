
class Check {
    constructor() {
        this.count = {
            ok: 0,
            ko: 0
        };
    }
    check(value) {
        const inverted = inverse(value);
        let substracted = -1;
        if (inverted > value) {
            substracted = inverted - value;
        } else {
            substracted = value - inverted;
        }
        const invertedSubstr = inverse(substracted);
        const valueToTest = Number(invertedSubstr) + substracted;
        if (valueToTest !== 1089) {
            console.log(`${value} => ${valueToTest} KO`);
            console.log(`\tinverse ${value} => ${inverted}`);
            console.log(`\tsubstract ${value} from ${inverted} => ${substracted}`);
            console.log(`\tinverse ${substracted} => ${invertedSubstr}`);
            console.log(`\tadd ${substracted} to ${invertedSubstr} => ${valueToTest}`);
            this.count.ko++;
        } else {
            console.log(`${value} => ${valueToTest} OK`);
            this.count.ok++;
        }
    }
}

function inverse(v) {
    return Number(v.toString().split("").reverse().join(""));
}
module.exports = Check;