module.exports = class Service {

    async minAmountCannotCreate(obj) {
        const bills = obj["coins"].sort((a, b) => a - b);
        let accumulator = 0;

        bills.forEach(e => {
            if (e > accumulator + 1) {
                return accumulator + 1;
            }

            accumulator += e;
        });

        return accumulator + 1;
    }

    async sortedSquaredArray(obj) {
        const arr = obj["array"];
        let squaredArr = [];

        arr.forEach((e, i) => {
            squaredArr.push(e * e);
        });

        return squaredArr.sort((a, b) => a - b);
    }

    async runsDecorator(chain) {

        let arr = chain.toString().split('');
        let strResult = '';
        const arrCount = arr.reduce(function (obj, pet) {
            if (!obj[pet]) {
                obj[pet] = 1;
            } else {
                obj[pet]++;
            }
            return obj;
        }, {});
    
        Object.entries(arrCount).map(item => {
            
            if (item[1] > 10) {
                const num = item[1] - 9;
                strResult += 9 + item[0] + num +item[0];
            } else {
                strResult += item[1] + item[0];
            }
    
        });
    
        return strResult;
    }

    async moveArray(arr) {
        const zeroArr = [];
        const newArr = [];
        arr.forEach(function (e) {
            if (e === 0) {
                zeroArr.push(e);
            } else {
                newArr.push(e);
            }
        });
    
        return [...newArr, ...zeroArr];
    
    }
}
