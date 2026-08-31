"use strict"

const settings = {
    sound: 0.0,
    music: 0.0,
    difficultly: "",

    menuMessage: `Оберіть опцію:
    1 - Змінити гучність звуку;
    2 - Змінити гучність музики;
    3 - Змінити складність гри;
    4 - Вийти з гри;
    `,

    changeSound() {
        this.sound = loudnessValidation("sound");
    },

    changeMusic() {
        this.music = loudnessValidation("music");
    },

    changeDifficultly() {
        this.difficultly = difficultlyValidation();
    },
};

while (true) {
    const chooseOption = prompt(settings.menuMessage);
    if (chooseOption === null || chooseOption === "4") break;

    switch (chooseOption) {
        case "1": settings.changeSound();       break;
        case "2": settings.changeMusic();       break;
        case "3": settings.changeDifficultly(); break;
        default:
            alert("Input more correct value pls");
            break;
    }
}

function loudnessValidation(param) {
    if(param !== "sound" && param !== "music") {
        alert("Parameter must be: sound or music");
        return;
    }

    while (true) {
        const loudness = prompt(`Input loudness of ${param}`);
        const parsedLoudness = Number(loudness);

        if (loudness === null) return;

        if(isNaN(parsedLoudness) || parsedLoudness < 0.0 || parsedLoudness > 100.0) {
            alert("Input correct value pls");
            continue;
        }

        return parsedLoudness;
    }
}

function difficultlyValidation() {
    while (true) {
        const difficultly = prompt(`Input difficulty: peaceful or hard or impossible`);
        if (difficultly === null) return;

        if(
            difficultly !== "peaceful" &&
            difficultly !== "hard" &&
            difficultly !== "impossible") {
            alert("Parameter must be: peaceful or hard or impossible");
            continue;
        }

        return difficultly;
    }
}