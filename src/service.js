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
}
