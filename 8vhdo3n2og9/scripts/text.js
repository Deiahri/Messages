let current_page = '';

let match_button = document.getElementById('match_button');
let text_page = document.getElementById('text_page');

let text_section = document.getElementById('text_section');
let message_count = document.getElementById('message_count');

let text_button_notification = document.getElementById('text_button_notification');

const messages = {};


match_button.onclick = () => {
    setTimeout(() => {
        match_page.classList.remove('fullHide');
        text_page.classList.add('fullHide');
        current_page = 'match_page';
    }, 100);
};

/*
{
    'sender': 'name',
    'message_type': 'text',
    'message': 'Hello there Again',
    'date': new Date(Date.now())
}
*/
function sendMessage(thread, message_json) {
    if(message_json.sender && message_json.message_type && message_json.message) {
        message_json.date = new Date(Date.now());
    } else {
        console.log(thread, message_json, 'does not constitute a valid message');
        return;
    }
    
    if(!messages[thread]) {
        messages[thread] = {
            'read': false,
            'messages': [
                message_json
            ]
        }
    } else {
        // console.log('heerr', thread);
        messages[thread].messages.push(message_json);
        messages[thread].read = false;
    }
    // console.log(messages);
    if(message_json.sender != username) { 
        playSound('message ping');
    } else {
        playSound('message send');
    }
    loadTexts();
    if(current_page == 'messenger_page') {
        loadMessageThread();
    }
}

const message_previews = []
function loadTexts() {
    text_section.innerHTML = ''
    while (message_previews.length > 0) {
        message_previews[message_previews.length - 1].remove();
        message_previews.pop();
    }

    let current_message = null;
    
    for(let thread_name of Object.keys(messages)) {
        current_message = new Message_Preview({
            'thread_name': thread_name,
            'message_type': messages[thread_name].messages[messages[thread_name].messages.length-1].message_type,
            'last_message': messages[thread_name].messages[messages[thread_name].messages.length-1].message,
            'date': messages[thread_name].messages[messages[thread_name].messages.length-1].date,
            'read': messages[thread_name].read
        });
        message_previews.push(current_message);
    }

    sort_message_previews_by_date();
    let unread_count = 0;
    for(message_preview of message_previews) {
        text_section.appendChild(message_preview.element);
        if(!message_preview.read) {
            unread_count += 1;
        }
    }
    message_count.innerText = `${unread_count} new ${unread_count == 1? 'message': 'messages'}`;
    if(unread_count == 0) {
        text_button_notification.classList.add('hidden');
    } else {
        text_button_notification.classList.remove('hidden');
    }
}

function Pstep1() {
    password = "FormidableOpponent";
}

let s = new Date();
function sort_message_previews_by_date() {
    for(let index1 = 0; index1<message_previews.length-1; index1++) {
        let currentBestIndex = index1;
        for(let index2 = index1 + 1; index2<message_previews.length; index2++) {
            if(message_previews[currentBestIndex].date.getTime() < message_previews[index2].date.getTime()) {
                currentBestIndex = index2;
            }
        }
        if(index1 != currentBestIndex) {
            swap(message_previews, index1, currentBestIndex);
        }
    }
}

function clear_thread(thread_name) {
    messages[thread_name].messages.length = 0;
}



// loadTexts()
