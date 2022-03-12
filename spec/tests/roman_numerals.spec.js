describe("Roman numerals: ", function () {
    it("should output the correct Roman numeral for the number", function () {
        // The function below should work for any integer between 1 and 3000
        function getRomanNumeral(input)
        {
            if (typeof input !== 'number') return false; 
            //checked a negative number to a positive number and turn the postive to a string
            let digits = String(+input).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman_num = "",
            i = 3;
            while (i--)
            roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
            return Array(+digits.join("") + 1).join("M") + roman_num;
        }

        expect(getRomanNumeral(1)).toEqual('I');
        expect(getRomanNumeral(25)).toEqual('XXV');
        expect(getRomanNumeral(325)).toEqual('CCCXXV');
        expect(getRomanNumeral(1234)).toEqual('MCCXXXIV');
    });
});