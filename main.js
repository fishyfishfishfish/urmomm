prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:',ml5.version);

https://teachablemachine.withgoogle.com/models/A9iQMnRok/


classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/A9iQMnRok/model.json',modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function speak(){
    var synth=window.SpeechSynthesis;
    speak_data1="the first prediction is" + prediction1;
    speak_data2="and the second prediction is" + prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);
}