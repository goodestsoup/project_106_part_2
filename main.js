function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xSBZYK81n/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;

      document.getElementById("animal_detected").innerHTML = 'I can hear - '+results[0].label;
      document.getElementById("animal").innerHTML = 'detected - '+results[0].label+(results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("animal_detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";