//C-111

prediction1 = "";
prediction2 = "";

Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src=" + data_uri + ">"
    });
}

console.log("ml5 version:" + ml5.version);

classifier = ml5.ImageClassifier("https://teachablemachine.withgoogle.com/models/y8ZEMDcmB/model.json",modelLoaded);

function speak(){
    var synth = window.speechSynthesis
    speak_data_1 = "first prediction is" + prediction1
    speak_data_2 = "second prediction is" + prediction2
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function modelLoaded(){
    console.log("Model Loaded!");
}