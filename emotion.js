Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(getsrc){
        document.getElementById("snapshot").innerHTML = '<img id="captured" src="'+getsrc+'"/>';
    })    
}
console.log("ml5version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oKBs9rsQQ/model.json", modelloaded);
function modelloaded(){
    console.log('Model Has Been Loaded');
}
function check(){
    image=document.getElementById("captured");
    classifier.classify(image, showresults);
}
function showresults(error,results){
    if (error){
        console.error(error);
    }
    if (results){
        console.log(results);
        document.getElementById("nameresult_1").innerHTML=results[0].label;
        document.getElementById("nameresult_2").innerHTML=results[1].label;
        if (results[0].label=="happy"){
            document.getElementById("emojiresult_1").innerHTML="&#128512;";
        }
        if (results[0].label=="sad"){
            document.getElementById("emojiresult_1").innerHTML="&#128546;";
        }
        if (results[0].label=="Angry"){
            document.getElementById("emojiresult_1").innerHTML="&#128545;";
        }
        if (results[1].label=="happy"){
            document.getElementById("emojiresult_2").innerHTML="&#128512;";
        }
        if (results[1].label=="sad"){
            document.getElementById("emojiresult_2").innerHTML="&#128546;";
        }
        if (results[1].label=="Angry"){
            document.getElementById("emojiresult_2").innerHTML="&#128545;";
        }
    }
}