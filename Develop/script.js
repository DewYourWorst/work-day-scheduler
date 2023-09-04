var container = $(".container");
var currentHour = dayjs()
console.log(currentHour)
var date = $("<h1>");
var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
date.text(dayjs().format('dddd MMMM DD, YYYY'));
container.append(date);

function siteOpened() {
    for (i = 0; i < 9; i++) {
        if (i < currentHour) {
            var timeClass = "past";
        }
        else if (i === currentHour) {
            var timeClass = "present";
        }
        else if (i > currentHour) {
            var timeClass = "future";
        }
        var row = $("<div>");
            row.attr("class", "row");
            container.append(row);
        var label = $("<label>");
            label.attr("class", "col-2 col-sm-1 time-block hour");
            label.text(time[i]);
            row.append(label);
        var textArea = $("<textarea>");
            textArea.attr("class", "col-8 col-sm-10 description " + timeClass);
            textArea.text(localStorage.getItem("btn" + i));
            row.append(textArea);
        var button = $("<button>");
            button.attr("class", "col-2 col-sm-1 saveBtn fas fa-save");
            button.attr("id", "btn" + i);
            row.append(button);
    };
    console.log(currentHour);
    console.log(localStorage);
};
 window.onload = siteOpened();

function saveNote(){
  localStorage.setItem($(this).attr("id"), $(this).prev().val());
  console.log(localStorage)
};

$(".saveBtn").on("click", saveNote);




