speech_rec = new window.webkitSpeechRecognition();

function start() {
    speech_rec.start();

}
speech_rec.onresult = function (result) {
    console.log(result);
    speech_text = result.results[0][0].transcript;

    if (speech_text == "selfie") {
        text_to_speech();
        Webcam.attach("#camera");
    }

}

function text_to_speech() {

    setTimeout(function () {
        img_id = "selfie1";
        take_snapshot();
        speak_text = "taking your selfie in 10 seconds ";
        speak_audio = new SpeechSynthesisUtterance(speak_text);
        window.speechSynthesis.speak(speak_audio);

    }, 5000);
    setTimeout(function () {
        img_id = "selfie2";
        take_snapshot();
        speak_text = "taking your selfie in 15 seconds ";
        speak_audio = new SpeechSynthesisUtterance(speak_text);
        window.speechSynthesis.speak(speak_audio);

    }, 10000);
    setTimeout(function () {
        img_id = "selfie3";
        take_snapshot();


    }, 15000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

function take_snapshot() {
    Webcam.snap(function (pic) {
        if (pic == "selfie1") {
            document.getElementById("result").innerHTML = '<img id="selfie1" src="' + pic + '">';
        }
        if (pic == "selfie2") {
            document.getElementById("result").innerHTML = '<img id="selfie2" src="' + pic + '">';
        }
        if (pic == "selfie3") {
            document.getElementById("result").innerHTML = '<img id="selfie3" src="' + pic + '">';
        }
    })
}