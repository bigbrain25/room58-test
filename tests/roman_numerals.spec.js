describe("Roman numerals: ", function () {
    it("should output the correct Roman numeral for the number", function () {
        // The function below should work for any integer between 1 and 3000
        function getRomanNumeral(input)
        {
            return '';
        }

        expect(getRomanNumeral(1)).toBe('I');
        expect(getRomanNumeral(25)).toBe('XXV');
        expect(getRomanNumeral(325)).toBe('CCCXXV');
        expect(getRomanNumeral(1234)).toBe('MCCXXXIV');
    });
});