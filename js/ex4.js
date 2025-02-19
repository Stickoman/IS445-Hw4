const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,

    bark: function () {
        return "Grrr! Grrr!";
    }
};

function showDogInfo() {
    document.getElementById("dog-name").innerText = dog.name;
    document.getElementById("dog-species").innerText = dog.species;
    document.getElementById("dog-size").innerText = dog.size;
    document.getElementById("dog-bark").innerText = dog.bark();

    console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
    console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
}

showDogInfo();
