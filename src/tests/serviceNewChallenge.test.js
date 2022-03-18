
const service = require("../service");
const expect = require('chai').expect;
const Service = new service();


describe('Service tests', () => {

    describe('runsDecorator() tests', () => {
        it('Should return 9A4A2B4C2D', async () => {
            const str = 'AAAAAAAAAAAAABBCCCCDD';
            const response = await Service.runsDecorator(str);
            expect(typeof response).to.equal('string');
            expect(response).to.equal('9A4A2B4C2D');

        });

        it('Should return 1a1A', async () => {
            const str = 'aA';
            const response = await Service.runsDecorator(str);
            expect(typeof response).to.equal('string');
            expect(response).to.equal('1a1A');

        });

        it('Should return 112233', async () => {
            const str = '122333';
            const response = await Service.runsDecorator(str);
            expect(typeof response).to.equal('string');
            expect(response).to.equal('112233');

        });
    });
 
    describe('moveArray() tests', () => {
        it('Should return [1, 4, 9, 25, 36, 64, 81]', async () => {
            const array = [1, 2, 0, 4, 3, 0, 5, 0];
            const response = await Service.moveArray(array);
            expect(typeof response).to.equal('object');
            expect(response).to.have.same.members([1, 2, 4, 3, 5, 0, 0, 0]);

        });


        it('Should return [1, 2, 3, 6, 0, 0, 0]', async () => {
            const array = [1, 2, 0, 0, 0, 3, 6];
            const response = await Service.moveArray(array);
            expect(typeof response).to.equal('object');
            expect(response).to.have.same.members([1, 2, 3, 6, 0, 0, 0]);

        });

    });
});
