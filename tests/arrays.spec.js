describe("Array tests:", function () {
    it("should reorder the array", function () {
        let input = [1, 2, 3, 4, 5];
        let result = [];

        expect(result).toEqual([2, 3, 4, 1, 5, 6]);
    });

    it("should add an element to the start of the array", function() {
       let input = [5, 6, 7];
       let result = [];

       expect(result).toEqual([1, 5, 6, 7]);
    });

    it("should find the largest value in the array", function() {
       let input = [-10, 5, 30, 12, 100, 56];
       let result = 0;

       expect(result).toEqual(100);
    });

    it("should remove the duplicates in the array", function() {
        let input = [1, 2, 3, 4, 5, 1, 3, 6, 7, 2, 4, 1];
        let result = [];

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});