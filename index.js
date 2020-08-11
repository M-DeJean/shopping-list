'use strict';

function main() {

  $('#js-shopping-list-form').submit(function (e) {
    e.preventdefault();
    let item = $('#shopping-list-entry').val();
    console.log(item);
  });

}

$(main);