function arrayToObject(arr) {
    return {
        firstElement: arr[0],
        lastElement: arr[arr.length - 1],
        length: arr.length
    };
}

function convertArrayToObject() {
    let input = document.getElementById("arrayInput").value;

    let parsedArray = input.split(',').map(item => {
        let trimmed = item.trim();
        return !isNaN(trimmed) && trimmed !== "" ? Number(trimmed) : trimmed;
    });

    let result = arrayToObject(parsedArray);

    document.getElementById("firstElement").innerText = JSON.stringify(result.firstElement);
    document.getElementById("lastElement").innerText = JSON.stringify(result.lastElement);
    document.getElementById("length").innerText = result.length;

    console.log(result);
}

console.log(arrayToObject([4, 8, 12, 5, 20]));
console.log(arrayToObject(["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}]));
