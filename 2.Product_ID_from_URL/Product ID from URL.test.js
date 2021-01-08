const getProductId = require('./Product ID from URL')

describe('Fixed tests', () => {
    it('should return 90764', () => {
        expect(getProductId("http://www.exampleshop.com/fancy-coffee-cup-p-90764-12052019.html")).toBe("90764");
        });
    it('should return 147', () => {
        expect(getProductId("http://www.exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html")).toBe("147");
        });
    it('should return 942312798', () => {
        expect(getProductId("http://www.exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html")).toBe("942312798");
        });
});

