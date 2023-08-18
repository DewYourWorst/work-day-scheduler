// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const dayjs = require('dayjs')
dayjs().format(dd/mm/yyyy)


$(function () {
  
});

function save(event) {
  event.preventDefault();

  console.log("Action saved at", textInputEl.val())
  //Use this to push to Local storage
  $.each(checkedEl, function () {
    selected.push($(this).val());
  });
}

saveBtn.on('submit', save)
