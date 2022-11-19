quick_draw_data_set = ["aircraft carrier","airplane", "alarm clock", "ambulance", "angel", "animal migration", "ant", "anvil", "apple", "arm","backpack", "bandage", "baseball","baseball bat", "bat", "bathtub", "beach", "bed","belt", "bench","bicycle","binoculars","bird","birthday cake","blackberry","bleberry","book","boomerang", "bottle cap","bracelt","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus", "butterfly","cactus","calculator","camera","campfire","candle","cannon","car","carrot","carrot","castle","cat","ceiling fan","cellon","cellpone","chair","church","circle","clock","cloud","coffe cup","compass","computer","cookie","cooler","couch","cow","crow"];
function preload(){
    ml5.imageClassifier()
}
function updateCanvas(){
    background("white");
    random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    console.log(random_number);
    console.log(quick_draw_data_set[random_number]);
    document.getElementById("Sketch_name").innnerHTML='Sketch to be drawn' + Sketch;
}
function draw(){
    strokeWeight(13);
    stroke(0);
if (mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}
<span>Score:</span>
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label:' +results[0].label;

    document.getElementById('confidence').innerHTML='Confidence:' +Math.round(results[0].confidence*100)+ '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}
function check_sketch(){
   timer_counter= 0+1;
   console.log(timer_counter);
   if (timer_counter){
    timer_counter<400 = timer_counter=0;
    updateCanvas();
   }
}
function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function clearCanvas(){
    background("white");
}