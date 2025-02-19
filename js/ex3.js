const circle = {
    radius: 0,

    circumference: function () {
        return 2 * Math.PI * this.radius;
    },

    area: function () {
        return Math.PI * Math.pow(this.radius, 2);
    }
};

function calculateCircle() {
    const r = Number(prompt("Enter the circle radius:"));

    if (r <= 0 || isNaN(r)) {
        document.getElementById("radius-display").innerText = "Invalid input";
        document.getElementById("circumference").innerText = "-";
        document.getElementById("area").innerText = "-";
        return;
    }

    circle.radius = r;

    document.getElementById("radius-display").innerText = r;
    document.getElementById("circumference").innerText = `${circle.circumference().toFixed(2)}`;
    document.getElementById("area").innerText = `${circle.area().toFixed(2)}`;

    console.log(`Radius: ${r}`);
    console.log(`Circumference: ${circle.circumference().toFixed(2)}`);
    console.log(`Area: ${circle.area().toFixed(2)}`);
}

calculateCircle();
