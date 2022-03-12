describe("String tests:", function () {
    it("should reverse the string", function () {
        let reversedString= ''
        let result = (sentence) => {
            //looped from the end of the sentence and checked if i is less than or equal to zero its starts decrementing by -1
            for (let i = sentence.length - 1; i >= 0; i--){
                reversedString += sentence[i];
            }
        }
        result("This is the Room58 JS test")
        expect(reversedString).toEqual("tset SJ 85mooR eht si sihT");
    });

    it("should determine if two strings are anagrams of each other", function () {
        isAnagram = (first, second) => {
            if (first.length !== second.length) return false
            return first.toLowerCase().split("").sort().join("") === second.toLowerCase().split("").sort().join("");
       }
        
        expect(isAnagram("listen", "silent")).toEqual(true);
        expect(isAnagram("room58", "test")).toEqual(false);
    });

    it("should determine if the string is a palindrome", function () {
        function isPalindrome(word)
        {
            word = word.toLowerCase()
            let len = word.length;
            for (let i = 0; i < len / 2; i++) {
                if (word[i] !== word[len - 1 - i]) // As long as the characters from each part match, the FOR loop will go on
                    return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
            }
                return true;
        }

        expect(isPalindrome("racecar")).toEqual(true);
        expect(isPalindrome("developer")).toEqual(false);
    });
});