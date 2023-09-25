// Skills
var skills = ['strong', 'fast', 'smart', 'patient', 'deductive', 'reasoning', 'impervious to most magic', 'magic detecting', 'magic nullifier', 'weak', 'slow'];

// Function to check if a word is English
async function isEnglish(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    return data.length > 0;
}

// Function to generate a story
async function generate_story(characters) {
    // Generate the story
    var story = "In a world populated by magical creatures, a group of teenagers struggle against a global dictatorship. The government periodically creates disasters - viruses, natural calamities, and wars. Among these teenagers, " + characters.map(c => c.name + " who is " + c.skill).join(', ') + " have mystical powers. Their powers are as limited as the rest of the world.";

    // Decide the fate of the protagonists
    for (var i = 0; i < characters.length; i++) {
        var survival_chance = Math.random();
        if (survival_chance <= 0.7) {
            story += " " + characters[i].name + " survives the events.";
        } else {
            story += " Unfortunately, " + characters[i].name + " does not survive.";
        }
    }

    // Ensure every word is in English dictionary
    var words = story.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (!await isEnglish(words[i])) {
            console.log("Warning: '" + words[i] + "' not found in English dictionaries.");
        }
    }

    return story;
}

// Function to download text as a file
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Handle form submission
document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var numCharacters = document.getElementById('numCharacters').value;
    var characters = [];
    for (var i = 0; i < numCharacters; i++) {
        var name = document.getElementById('name' + i).value;
        var skill = document.getElementById('skill' + i).value;
        characters.push({name: name, skill: skill});
    }

    generate_story(characters).then(function(story) {
        download('story.txt', story);
    });
});

// Handle changes to the number of characters
document.getElementById('numCharacters').addEventListener('change', function(event) {
    var numCharacters = event.target.value;
    var charactersDiv = document.getElementById('characters');
    charactersDiv.innerHTML = '';
    
    for (var i = 0; i < numCharacters; i++) {
        charactersDiv.innerHTML += '<label for="name' + i + '">Name:</label><br><input type="text" id="name' + i + '" name="name' + i + '"><br><label for="skill' + i + '">Skill:</label><br><select id="skill' + i + '" name="skill' + i + '">' + skills.map(skill => '<option value="' + skill + '">' + skill + '</option>').join('') + '</select><br><br>';
    }
});