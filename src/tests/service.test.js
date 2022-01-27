
const service = require("../service");
const expect = require('chai').expect;
const Service = new service();


describe('Service tests', () => {

    describe('minAmountCannotCreate() tests', () => {
        it('Should return 20', async () => {
            const objCase = {
                coins: [5, 7, 1, 1, 2, 3, 22]
            };
            const response = await Service.minAmountCannotCreate(objCase);
            expect(typeof response).to.equal('number');
            expect(response).to.equal(20);

        });

        it('Should return 6', async () => {
            const objCase = {
                coins: [1, 1, 1, 1, 1]
            };
            const response = await Service.minAmountCannotCreate(objCase);
            expect(typeof response).to.equal('number');
            expect(response).to.equal(6);

        });

        it('Should return 55', async () => {
            const objCase = {
                coins: [1, 5, 1, 1, 1, 10, 15, 20, 100]
            };
            const response = await Service.minAmountCannotCreate(objCase);
            expect(typeof response).to.equal('number');
            expect(response).to.equal(55);

        });
    });

    describe('sortedSquaredArray() tests', () => {
        it('Should return [1, 4, 9, 25, 36, 64, 81]', async () => {
            const objCase = {
                array: [1, 2, 3, 5, 6, 8, 9]
            };
            const response = await Service.sortedSquaredArray(objCase);
            expect(typeof response).to.equal('object');
            expect(response).to.have.same.members([1, 4, 9, 25, 36, 64, 81]);

        });

        it('Should return [1, 4]', async () => {
            const objCase = {
                array: [-2, -1]
            };
            const response = await Service.sortedSquaredArray(objCase);
            expect(typeof response).to.equal('object');
            expect(response).to.have.same.members([1, 4]);

        });

        it('Should return [0, 25, 25, 100, 100]', async () => {
            const objCase = {
                array: [-10, -5, 0, 5, 10]
            };
            const response = await Service.sortedSquaredArray(objCase);
            expect(typeof response).to.equal('object');
            expect(response).to.have.same.members([0, 25, 25, 100, 100]);

        });

    });
});
