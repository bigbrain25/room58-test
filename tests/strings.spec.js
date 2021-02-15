describe("String tests:", function () {
    it("should reverse the string", function () {
        let string = "This is the Room58 JS test";
        let result = "";

        expect(result).toBe("tset SJ 85mooR eht si sihT");
    });

    it("should determine if two strings are anagrams of each other", function () {
        function isAnagram(first, second) {
            return true;
        }

        expect(isAnagram("Listen", "Silent")).toBe(true);
        expect(isAnagram("Room58", "Test")).toBe(false);
    });

    it("should determine if the string is a palindrome", function () {
        function isPalindrome(word)
        {
            return true;
        }

        expect(isPalindrome("racecar")).toBe(true);
        exepect(isPalindrome("developer")).toBe(false);
    });
});