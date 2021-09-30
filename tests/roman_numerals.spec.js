describe("Roman numerals: ", function () {
    it("should output the correct Roman numeral for the number", function () {
        // The function below should work for any integer between 1 and 3000
        function getRomanNumeral(input)
        {
            return '';
        }

        expect(getRomanNumeral(1)).toEqual('I');
        expect(getRomanNumeral(25)).toEqual('XXV');
        expect(getRomanNumeral(325)).toEqual('CCCXXV');
        expect(getRomanNumeral(1234)).toEqual('MCCXXXIV');
    });
});