'use strict';

// Stores all data from app in an array
// Object with name and if it is checked
const STORE = [
    { name: 'apples', checked: false },
    { name: 'oranges', checked: false },
    { name: 'milk', checked: true },
    { name: 'bread', checked: false }
];
function generate() {
    // Converts our list of items intp HTML
    let list = [];
    STORE.forEach(function (item) {
        const checked = item.checked ? 'shopping-item__checked' : '';
        list.push(
            `<li>
                <span class="shopping-item ${checked}">${item.name}</span>
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
    return list;
}

function renderList() {
    // Adds HTML to '.shopping-list' in index.html
    let html = generate();
    console.log('shoppingList generated', STORE);
    $('.shopping-list').html(html);
}

function newItem() {
    // Adds new item to list
    $('#js-shopping-list-form').submit(function (e) {
        (e).preventDefault();
        let item = $('#shopping-list-entry').val();
        STORE.push({ name: item, checked: false });
        $('#shopping-list-entry').val('');
        console.log(`${item} added to list`);
        renderList();
    });
}

function checkItem() {
    // Checks item when button is clicked
    $('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
        let item = $(this).closest('li').find('.shopping-item').text();
        STORE.forEach( key => {
            if (key.name === item) {
                key.checked = !key.checked;
            }
        });
        console.log('`checkItem` ran');
        renderList();
    });
}


function deleteItem() {
    // Deletes item when button is clicked
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
        let item = $(this).closest('li').find('.shopping-item').text();
        for(let i = 0; i < STORE.length; i++) {
            if (STORE[i].name === item) {
                STORE.splice(i, 1);
            }
        }
        console.log('`deleteItem` ran');
        renderList();
    });
}

// Callback function
// Responsible for executing above functions
function main() {
    renderList();
    newItem();
    checkItem();
    deleteItem();

}

// Runs when page loads
$(main);