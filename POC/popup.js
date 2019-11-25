
$(function() {



});


document.addEventListener('DOMContentLoaded', function () {
//  $('#tabs_table tr:last').after('<tr><td>Hello</td><td>Chrome</td></tr>');

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    $('#tabs_table tr:last').after('<tr><td>' + tabs[0].url + '</td><td></td></tr>');
  });

  // Send a message to content.js to fetch all the top domains


});
