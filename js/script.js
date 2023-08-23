let time = "40:00";
let started = false;
let index = 0;
function setTime() {
    $('.timer').html(time);
}
let timerTimeoutId;
function timer() {
    let timerElement = $(".timer");
    function updateTimer() {
        var timeArray = time.split(":");
        var hours = parseInt(timeArray[0]);
        var minutes = parseInt(timeArray[1]);
        var totalMinutes = hours * 60 + minutes;
        if (totalMinutes < 1) {
            timerElement.removeClass("red orange");
            submitResults();
        } else if (totalMinutes <= 3) {
            timerElement.addClass("red");
            timerElement.removeClass("orange");
        } else if (totalMinutes <= 10) {
            timerElement.addClass("orange");
            timerElement.removeClass("red");
        }
        else {
            timerElement.removeClass("red orange");
        }
        timerElement.text(
            String(Math.floor(totalMinutes / 60)).padStart(2, "0") +
            ":" +
            String(totalMinutes % 60).padStart(2, "0")
        );
        totalMinutes--;
        if (totalMinutes >= 0) {
            hours = Math.floor(totalMinutes / 60);
            minutes = totalMinutes % 60;
            time = String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");
            timerTimeoutId = setTimeout(updateTimer, 1000);
        } else {
            timerElement.text("Stop!");
        }
    }
    updateTimer();
}
function updateClassOnStart() {
    $('.timer-box').removeClass('hide')
    $('#question-page').removeClass('hide')
    $('#instruction-page').addClass('hide')
}
function updateClassOnEnd() {
    $('.timer-box').addClass('hide')
    $('#question-page').addClass('hide')
    $('#coding-page').addClass('hide')
    $('#instruction-page').removeClass('hide')
}

function renderQuestion(index) {
    let idx = index + 1;
    let _q_header = `
    <div class="question-header">
        <p class="ques-no">Question no. <span>${idx}</span></p>
        <p class="ques-mark">Mark: <span>1</span></p>
    </div>`
    let options = ques[index].options
    let selected = ques[index].selected;
    let disabled = '';
    if (selected == 0) {
        disabled = "";
    }
    let _options = '';
    for (let i = 0; i < options.length; i++) {
        if (selected == (i + 1)) {
            _options += ` <input value="${i + 1}" class="radio" checked type="radio" name="question-radio" id="${idx}.${i + 1}"><label for="${idx}.${i + 1}">${options[i]}</label>`
        }
        else {
            _options += ` <input value="${i + 1}" class="radio" type="radio" name="question-radio" id="${idx}.${i + 1}"><label for="${idx}.${i + 1}">${options[i]}</label>`
        }
    }
    let _buttons = '';
    if (index == 0) {
        _buttons += `<div class="page-button">
        <button class="nextBtn" ${disabled} onClick="updateQuestion(${index + 1})">Next</button>
       </div>`
    }
    else if (index == ques.length - 1) {
        _buttons += `<div class="page-button one">
        <button class="prevBtn btn2" onClick="updateQuestion(${index - 1})">Previous</button>
       </div>`
    }
    else {
        _buttons += `<div class="page-button two">
        <button class="prevBtn btn2" onClick="updateQuestion(${index - 1})">Previous</button>
        <button class="nextBtn" ${disabled} onClick="updateQuestion(${index + 1})">Next</button>
       </div>`
    }
    let _ques = ques[index].question;
    let _question_body = `
    <div class="question-body">
        <div class="ques">${_ques}</div>
        ${_options}
    </div>`
    let _full_question = `${_q_header} ${_question_body}`
    $('#questions').html(_full_question)
    $('.buttons').html(_buttons)
    $('input[type="radio"]').on('change', function () {
        $('.nextBtn').prop('disabled', false)
        let val = $(this).val()
        ques[index].selected = val
    })
    function updateQuestionNumber() {
        let data = ``;
        let attempted = '';
        for (let i = 0; i < ques.length; i++) {
            if(ques[i].selected > 0){
                attempted = 'attempted'
            }
            else{
                attempted = '';
            }
            if (i == index) {
                data += `<div class="question-number active ${attempted}">${i + 1}</div>`
            }
            else {
                data += `<div onclick="updateQuestion(${i})" class="question-number ${attempted}">${i + 1}</div>`
            }
        }
        $('.ques-numbers').html(data)
    }
    updateQuestionNumber();
}
function showPopup(heading, content, iconClass) {
    started = false;
    updateClassOnEnd();
    $('.block').addClass('yes');
    $('#user-msg-heading').html(heading)
    $('#user-msg-content').html(content)
    $('#user-msg-icon').addClass(iconClass)
    $('button').attr('disabled', 'disabled');
    let block = $('.block');
    if (block.hasClass('yes')) {
        setTimeout(() => {
            $('.block').removeClass('yes')
        }, 10000);
    }
}
function updateQuestion(id) {
    renderQuestion(id)
}
function openFullscreen() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    function handleFullscreenChange() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            resetTest("fullscreen");
        }
    }
    $(document).on('fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange', handleFullscreenChange);
}
function resetTest(type) {
    if (started) {
        let heading = "";
        let content = "";
        if (type == "fullscreen") {
            heading = "Oops! Test has been reset."
            content = "Your test has been reset becuase you minimized the page size."
        }
        else if (type == "pageout") {
            heading = "Oops! Test has been reset."
            content = "Your test has been reset becuase you moved out of the page."
        }
        let icon = "fa-exclamation-circle";
        showPopup(heading, content, icon)
        // index = 0;
        // time = "30:00";
        updateClassOnEnd();
        setTime();
        $('.timer').removeClass("red orange");
    }
}
function submitResults() {
    let results = [];
    let time = $(".timer").html();
    for (let i = 0; i < ques.length; i++) {
        results.push(ques[i].selected);
    }
    checkAnswers(results, time, "time")
}
function submitTest() {
    let results = [];
    let time = $(".timer").html();
    for (let i = 0; i < ques.length; i++) {
        results.push(ques[i].selected);
    }
    checkAnswers(results, time, "clicked")
}
function checkAnswers(results, time, type) {
    let answers = [];
    for (let i = 0; i < ques.length; i++) {
        answers.push(ques[i].answer);
    }
    let score = 0;
    for (let k = 0; k < answers.length; k++) {
        if (answers[k] == results[k]) {
            score++;
        }
    }
    if (score > 30) {
        $('.timer-box').addClass('hide')
        timer = "40:00"
        $('#instruction-page').addClass('hide')
        $('#question-page').addClass('hide')
        $('#coding-page').removeClass('hide')
    }
    else {
        let heading = '';
        let content = '';
        let icon = '';
        if (type == "clicked") {
            heading = "Wohoo! Your test has been submitted";
            content = "Your have successfully submitted the test. Kindly wait for the response.";
            icon = "fa-check";
        }
        else if (type == "time") {
            heading = "Oops! Time Expired";
            content = "You result has been submitted automatically. Kindly wait for the response.";
            icon = "fa-exclamation-circle";
        }
        showPopup(heading, content, icon)
    }
}
function resetJS() {
    $(document).keydown(function (event) {
        if (event.keyCode == 123) { // Prevent F12
            return false;
        }
        else if (event.ctrlKey) {
            return false;
        }
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
            return false;
        }
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
        }
        else if (event.ctrlKey && event.keyCode == 85) {
        }
    });
}
$('#start-test').on('click', function () {
    openFullscreen();
    updateClassOnStart();
    renderQuestion(index);
    timer();
    started = true;
})
function pageOut() {
    document.onvisibilitychange = function () {
        if (started) {
            if (document.visibilityState === 'hidden') {
                resetTest("pageout");
                document.title = "Test has been reset"
            }
            else if (document.visibilityState === 'visible') {
                document.title = logo
            }
        }
    }
}
$('#submitTest').on('click', submitTest)
$('#submitCoding').on('click', function(){
    heading = "Wohoo! Your test has been submitted";
    content = "Your have successfully submitted the test. Kindly wait for the response.";
    icon = "fa-check";
    showPopup(heading, content, icon)
})
$('#toggle-page').on('click', function () {
    $('.page-left').toggleClass('full')
    $('.page-right').toggleClass('zero')
    $('#toggle-page').toggleClass('fa-circle-chevron-right')
    $('#toggle-page').toggleClass('fa-circle-chevron-left')
})
pageOut();
resetTest()
resetJS()