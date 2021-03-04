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

        expect(isAnagram("listen", "silent")).toBe(true);
        expect(isAnagram("room58", "test")).toBe(false);
    });

    it("should determine if the string is a palindrome", function () {
        function isPalindrome(word)
        {
            return true;
        }

        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("developer")).toBe(false);
    });
});