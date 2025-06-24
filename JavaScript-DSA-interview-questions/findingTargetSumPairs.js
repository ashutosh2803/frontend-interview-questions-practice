const findTargetSumPairs = (numbers, target) => {
    let seen = {}
    let results = []

    for(let num of numbers){
        let find = target - num;
        if(seen[find]){
            results.push([find, num]);
        }
        seen[num] = true;
    }
    return results;
}


const results = findTargetSumPairs([2, 7, 11, 15, -2, 4], 9)
console.log(results)

// Output: [[2, 7], [11, -2]]