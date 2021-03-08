var timeDisplayEl = $('#time-display');
var $activityInput0 = $('#activityInput0');
var $activityInput1 = $('#activityInput1');
var $activityInput2 = $('#activityInput2');
var $activityInput3 = $('#activityInput3');
var $activityInput4 = $('#activityInput4');
var $activityInput5 = $('#activityInput5');
var $activityInput6 = $('#activityInput6');
var $activityInput7 = $('#activityInput7');
var $activityInput8 = $('#activityInput8');
var $timehr = parseInt(moment().format("h"));


// date and time at the top of the app
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

//saving content to calander to local storage

$('button').on("click", function () {
    localStorage.setItem('9:00 a.m.', ($activityInput0.val()))
    localStorage.setItem('10:00 a.m.', ($activityInput1.val()))
    localStorage.setItem('11:00 a.m.', ($activityInput2.val()))
    localStorage.setItem('12:00 p.m.', ($activityInput3.val()))
    localStorage.setItem('1:00 p.m.', ($activityInput4.val()))
    localStorage.setItem('2:00 p.m.', ($activityInput5.val()))
    localStorage.setItem('3:00 p.m.', ($activityInput6.val()))
    localStorage.setItem('4:00 p.m.', ($activityInput7.val()))
    localStorage.setItem('5:00 p.m.', ($activityInput8.val()))
})

//display after saved
$('#activityInput0').append(localStorage.getItem('9:00 a.m.'));
$('#activityInput1').prepend(localStorage.getItem('10:00 a.m.'));
$('#activityInput2').prepend(localStorage.getItem('11:00 a.m.'));
$('#activityInput3').prepend(localStorage.getItem('12:00 p.m.'));
$('#activityInput4').prepend(localStorage.getItem('1:00 p.m.'));
$('#activityInput5').prepend(localStorage.getItem('2:00 p.m.'));
$('#activityInput6').prepend(localStorage.getItem('3:00 p.m.'));
$('#activityInput7').prepend(localStorage.getItem('4:00 p.m.'));
$('#activityInput8').prepend(localStorage.getItem('5:00 p.m.'));

//make columns change color depending on what time it is in the day, grey for past, red for current, green for upcoming

console.log($timehr);

switch ($timehr) {
    case 9:
        for (let i = 0; i < 9; i++) {
            if(i <= 0){
              $(`#activityInput${i}`).addClass("past")
              $(`#activityInput0`).addClass("present")
            } else if( i > 0){
             $(`#activityInput${i}`).addClass("future")
            }
        }
        break;
    case 10:
        for (let i = 0; i < 9; i++) {
            if(i <= 1){
              $(`#activityInput${i}`).addClass("past")
              $(`#activityInput1`).addClass("present")
            } else if( i > 1){
             $(`#activityInput${i}`).addClass("future")
            }
        }
        break;
    case 11:
       for (let i = 0; i < 9; i++) {
           if(i <= 2){
             $(`#activityInput${i}`).addClass("past")
             $(`#activityInput2`).addClass("present")
           } else if( i > 2){
            $(`#activityInput${i}`).addClass("future")
           }
       }
        break;
    case 12:
        for (let i = 0; i < 9; i++) {
            if(i <= 3){
                $(`#activityInput${i}`).addClass("past")
                $(`#activityInput3`).addClass("present")
            } else if( i > 3){
             $(`#activityInput${i}`).addClass("future")
            }
            }
        break;
    case 1:
        for (let i = 0; i < 9; i++) {
            if(i <= 4){
                $(`#activityInput${i}`).addClass("past")
                $(`#activityInput4`).addClass("present")
            } else if( i > 4){
             $(`#activityInput${i}`).addClass("future")
            }
            }
        break;
    case 2:
        for (let i = 0; i < 9; i++) {
            if(i <= 5){
                $(`#activityInput${i}`).addClass("past")
                $(`#activityInput5`).addClass("present")
            } else if( i > 5){
             $(`#activityInput${i}`).addClass("future")
            }
            }
        break;
    case 3:
        for (let i = 0; i < 9; i++) {
            if(i <= 6){
                $(`#activityInput${i}`).addClass("past")
                $(`#activityInput6`).addClass("present")
            } else if( i > 6){
             $(`#activityInput${i}`).addClass("future")
            }
            }
        break;
    case 4:
        for (let i = 0; i < 9; i++) {
            if(i <= 7){
                $(`#activityInput${i}`).addClass("past")
                $(`#activityInput7`).addClass("present")
            } else if( i > 7){
             $(`#activityInput${i}`).addClass("future")
            }
            }
        break;
    case 5:
        for (let i = 0; i < 9; i++) {
            if(i <= 8){
                $(`#activityInput${i}`).addClass("past")
                $(`#activityInput8`).addClass("present")
            } else if( i > 8){
             $(`#activityInput${i}`).addClass("future")
            }
            }
        break;         
}

// $('#timeClr').ready(function (){
//     if (time >)
// })




setInterval(displayTime, 1000);