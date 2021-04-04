//const moment = require("moment");
var List = $(".container");
var saveBttn = document.querySelectorAll("button");
var dayDate = moment().format('dddd')+", " + moment().format('MMMM Do YYYY');

var Display = $("#currentDay");
Display.append(dayDate);

var hours = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM"
];

var hourID = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
];

for( var i=0;i<hours.length;i++){

    var Row = $("<div class='row time-block '>").attr("id",hourID[i]);
    var rowHour = $("<div class='hour col-1'>");
    var rowText = $("<textarea class='col-10'>");
    var rowButton = $("<button type='button' class='saveBtn col-1 fas fa-save'>")
    List.append(Row);
    rowHour.text(hours[i]);
    Row.append(rowHour);
    rowText.text();
    Row.append(rowText);
    rowButton.text();
    Row.append(rowButton);
}

calenderStorage();
checkTime();

function calenderStorage(){
    $("textarea")[0].value = localStorage.getItem("textArea0");
    $("textarea")[1].value = localStorage.getItem("textArea1");
    $("textarea")[2].value = localStorage.getItem("textArea2");
    $("textarea")[3].value = localStorage.getItem("textArea3");
    $("textarea")[4].value = localStorage.getItem("textArea4");
    $("textarea")[5].value = localStorage.getItem("textArea5");
    $("textarea")[6].value = localStorage.getItem("textArea6");
    $("textarea")[7].value = localStorage.getItem("textArea7");
    $("textarea")[8].value = localStorage.getItem("textArea8");
}

$("button").on("click", function(event){
    event.preventDefault();
    var textArea0 = $("textarea")[0].value;
    var textArea1 = $("textarea")[1].value;
    var textArea2 = $("textarea")[2].value;
    var textArea3 = $("textarea")[3].value;
    var textArea4 = $("textarea")[4].value;
    var textArea5 = $("textarea")[5].value;
    var textArea6 = $("textarea")[6].value;
    var textArea7 = $("textarea")[7].value;
    var textArea8 = $("textarea")[8].value;
    
    localStorage.setItem("textArea0",textArea0);
    localStorage.setItem("textArea1",textArea1);
    localStorage.setItem("textArea2",textArea2);
    localStorage.setItem("textArea3",textArea3);
    localStorage.setItem("textArea4",textArea4);
    localStorage.setItem("textArea5",textArea5);
    localStorage.setItem("textArea6",textArea6);
    localStorage.setItem("textArea7",textArea7);
    localStorage.setItem("textArea8",textArea8);
});


function checkTime(){
    var hourNow = moment().hours();
    $(".time-block").each(function() {
        var Hour = parseInt($(this).attr("id"));
       

        if (Hour < hourNow){
            $(this).addClass("past");
        } 
        else if ( Hour === hourNow){        
            $(this).addClass("present");
        }
        else{
            $(this).addClass("future");
        }
    });
}