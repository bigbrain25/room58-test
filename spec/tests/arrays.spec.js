describe("Array tests:", function () {
    it("should reorder the array", function () {
        // let input = [1, 2, 3, 4, 5];
        let moveInArray = (arr, from, to) => {
	    // Delete the item from it's current position
	    let item = arr.splice(from, 1);
	    // Move the item to its new position
	    arr.splice(to, 0, item[0]);
        };
        // result array
        let result = [1, 2, 3, 4, 5];
        // Move '1' to the third spot in the array
        moveInArray(result, 0, 3);
            
        expect(result).toEqual([2, 3, 4, 1, 5]);
    });


    
    it("should add an element to the start of the array", function() {
    //    let input = [5, 6, 7];
        let result = [5, 6, 7];
        result.unshift(1);
       expect(result).toEqual([1, 5, 6, 7]);
    });

    it("should find the largest value in the array", function() {
        let result = [-10, 5, 30, 12, 100, 56];
        let max = result[0];
        //check to get max item
        result.forEach(item => max < item ? max = item : null );

             // if (max < item) {
            //     max = item;
            // }
       
        expect(max).toEqual(100);
    });

    it("should remove the duplicates in the array", function() {
        let result = [1, 2, 3, 4, 5, 1, 3, 6, 7, 2, 4, 1];
        let nonDuplicateSet = new Set(result)
        //used a spread operator to create a new array of nonDuplicate
        let nonDuplicate = [...nonDuplicateSet]

        expect(nonDuplicate).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});

