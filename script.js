//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.getElementById("buttons");

let currentAudio = null;

sounds.forEach(sound => {

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {

        if(currentAudio){
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();

    });

    buttons.appendChild(btn);

});

const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {

    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});

buttons.appendChild(stopBtn);