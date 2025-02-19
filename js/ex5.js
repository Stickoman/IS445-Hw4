const values = [3, 11, 7, 2, 9, 10];

function calculateArray() {
    let sum = 0;
    let min = values[0];
    let max = values[0];

    for (const element of values) {
        sum += element;

        if (element < min) {
            min = element;
        }

        if (element > max) {
            max = element;
        }
    }

    document.getElementById("sum").innerText = sum;
    document.getElementById("min").innerText = min;
    document.getElementById("max").innerText = max;

    console.log(`Sum: ${sum}`);
    console.log(`Minimum Value: ${min}`);
    console.log(`Maximum Value: ${max}`);
}

calculateArray();
