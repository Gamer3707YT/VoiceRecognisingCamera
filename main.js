var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function Start() {

    document.getElementById("textbox").innerHTML = "";
    Recognition.start()

}

Recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        console.log("Taking Selfie");
        speak();
    }

}

function speak () {

    var synth = window.speechSynthesis;
    var input = "Taking Your Selfie In A Few Seconds";
    var output = new SpeechSynthesisUtterance(input);
    synth.speak(output);
    Webcam.attach(camout);

    setTimeout(function(){
        Take_Snapshot();
        Save();
    },7000);

}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90,
    
});
camout = document.getElementById("camera");

function Take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="webimg" src="'+data_uri+'">';

    })
}

function Save(){
    link = document.getElementById("link");
    image = document.getElementById("webimg").src;
    link.href = image;
    link.click();
}
