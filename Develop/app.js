

// Variables
 var currentDay = $("#currentDay");
 var currentTime = moment().format("k")
 var now = moment().format("dddd, MMMM, Do");
 var listColor1 = $(".timeColor1");
 var listColor2 = $(".timeColor2");
 var listColor3 = $(".timeColor3");
 var listColor4 = $(".timeColor4");
 var listColor5 = $(".timeColor5");
 var listColor6 = $(".timeColor6");
 var listColor7 = $(".timeColor7");
 var listColor8 = $(".timeColor8");
 var listColor9 = $(".timeColor9");

 var backgroundRed = {"background-color": "#E6777E"};
 var backgroundGreen = {"background-color": "#49E670"};
 var backgroundGrey = {"background-color": "#947E7F"};


 //variables for saving text content

 var note1 = $("#note1");
 var note2 = $("#note2");
 var note3 = $("#note3");
 var note4 = $("#note4");
 var note5 = $("#note5");
 var note6 = $("#note6");
 var note7 = $("#note7");
 var note8 = $("#note8");
 var note9 = $("#note9");

//functions


// set the time on the top of the page
function setTime(){
$(currentDay).text(now);
}


// set the color of list elements based on time

function setListColor1(){
if (currentTime < "9"){
    $(listColor1).css(backgroundGreen);
}
if (currentTime == "9"){
    $(listColor1).css(backgroundRed);
    console.log(currentTime)
}
else if (currentTime !== "9" && currentTime > "9") {
    $(listColor1).css(backgroundGrey);
}
}

function setListColor2(){
if (currentTime < "10"){
    $(listColor2).css(backgroundGreen);
}
if (currentTime == "10"){
    $(listColor2).css(backgroundRed);
}
else if (currentTime !== "10" && currentTime > "10") {
    $(listColor2).css(backgroundGrey);
}
}

function setListColor3(){
if (currentTime < "11"){
        $(listColor3).css(backgroundGreen);
    }
if (currentTime == "11"){
        $(listColor3).css(backgroundRed);
    }
else if (currentTime !== "11" && currentTime > "11") {
        $(listColor3).css(backgroundGrey);
    }
    }

function setListColor4(){
if (currentTime < "12"){
    $(listColor4).css(backgroundGreen);
}
if (currentTime == "12"){
    $(listColor4).css(backgroundRed);
}
else if (currentTime !== "12" && currentTime > "12") {
    $(listColor4).css(backgroundGrey);
}
}

function setListColor5(){
if (currentTime < "13"){
    $(listColor5).css(backgroundGreen);
}
if (currentTime == "13"){
    $(listColor5).css(backgroundRed);
}
else if (currentTime !== "13" && currentTime > "13") {
    $(listColor5).css(backgroundGrey);
}
}

function setListColor6(){
if (currentTime < "14"){
    $(listColor6).css(backgroundGreen);
}
if (currentTime == "14"){
    $(listColor6).css(backgroundRed);
}
else if (currentTime !== "14" && currentTime > "14") {
    $(listColor6).css(backgroundGrey);
}
}


function setListColor7(){
if (currentTime < "15"){
    $(listColor7).css(backgroundGreen);
}
if (currentTime == "15"){
    $(listColor7).css(backgroundRed);
}
else if (currentTime !== "15" && currentTime > "15") {
    $(listColor7).css(backgroundGrey);
}
}

function setListColor8(){
if (currentTime < "16"){
    $(listColor8).css(backgroundGreen);
}
if (currentTime == "16"){
    $(listColor8).css(backgroundRed);
}
else if (currentTime !== "16" && currentTime > "16") {
    $(listColor8).css(backgroundGrey);
}
}

function setListColor9(){
if (currentTime < "17"){
    $(listColor9).css(backgroundGreen);
}
if (currentTime == "17"){
    $(listColor9).css(backgroundRed);
}
else if (currentTime !== "17" && currentTime > "17") {
    $(listColor9).css(backgroundGrey);
}
}




// sets the text content to local storage when the save button is pressed
$( "#save1" ).click(function() {
    var saved1 = $(note1).val();
    localStorage.setItem("note1",saved1);
  });
$( "#save2" ).click(function() {
    var saved2 = $(note2).val();
    localStorage.setItem("note2",saved2);
  });
$( "#save3" ).click(function() {
    var saved3 = $(note3).val();
    localStorage.setItem("note3",saved3);
  });
$( "#save4" ).click(function() {
    var saved4 =$(note4).val();
    localStorage.setItem("note4",saved4);
  });
$( "#save5" ).click(function() {
    var saved5 =$(note5).val();
    localStorage.setItem("note5",saved5);
  });
$( "#save6" ).click(function() {
    var saved6 =$(note6).val();
    localStorage.setItem("note6",saved6);
  });
$( "#save7" ).click(function() {
    var saved7 =$(note7).val();
    localStorage.setItem("note7",saved7);
  });
$( "#save8" ).click(function() {
    var saved8 =$(note8).val();
    localStorage.setItem("note8",saved8);
  });
$( "#save9" ).click(function() {
    var saved9 =$(note9).val();
    localStorage.setItem("note9",saved9);
  });

// fethces saved data from local storage
var retrieved1 = localStorage.getItem("note1");
// sets the note on my page equal to the saved value
$(note1).val(retrieved1);
var retrieved2 = localStorage.getItem("note2");
$(note2).val(retrieved2);
var retrieved3 = localStorage.getItem("note3");
$(note3).val(retrieved3);
var retrieved4 = localStorage.getItem("note4");
$(note4).val(retrieved4);
var retrieved5 = localStorage.getItem("note5");
$(note5).val(retrieved5);
var retrieved6 = localStorage.getItem("note6");
$(note6).val(retrieved6);
var retrieved7 = localStorage.getItem("note7");
$(note7).val(retrieved7);
var retrieved8 = localStorage.getItem("note8");
$(note8).val(retrieved8)
var retrieved9 = localStorage.getItem("note9");
$(note9).val(retrieved9)


// initialize the page function

function init(){
    setTime();
    setListColor1();
    setListColor2();
    setListColor3();
    setListColor4();
    setListColor5();
    setListColor6();
    setListColor7();
    setListColor8();
    setListColor9();
}

init();
