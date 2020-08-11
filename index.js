'use strict';

$(function main() {

  $('#js-shopping-list-form').submit(function (e) {
    e.preventDefault();
    let item = $('#shopping-list-entry').val();
    console.log(item);
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
          <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  });
  $('.shopping-item-delete').click(function (e) {
    this.closest('li').remove();
  });
});
