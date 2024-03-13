messenger_page = document.getElementById('messenger_page')
back_to_text_page_btn = document.getElementById('back_to_text_page_btn');
back_to_text_page_btn.onclick = () => {
    text_page.classList.remove('fullHide');
    match_page.classList.add('fullHide');
    messenger_page.classList.add('fullHide');
    current_page = 'text_page';
}

var message_option_section = document.getElementById('message_option_section');

var message_thread_section = document.getElementById('message_thread_section');
var message_thread_section_name = document.getElementById('message_thread_section_name');

var current_message_thread = null;

let current_message_thread_messages = [];
let current_message_thread_options = []
let current_sender = ''
function loadMessageThread() {
    for(let current_message_thread_message of current_message_thread_messages) {
        message_thread_section.removeChild(current_message_thread_message.element);
    }
    current_message_thread_messages.length = 0;
    current_sender = '';
    
    current_message_thread = messenger_page.getAttribute('thread_name');
    messages[current_message_thread].read = true;
    message_thread_section_name.innerHTML = current_message_thread;
    loadTexts();
    for(let message of messages[current_message_thread].messages) {
        if(current_sender!=message.sender && message.sender != 'none') {
            current_sender = message.sender;
            current_message_thread_messages.push(new Message_Thread_Sender(current_sender));
        }
        current_sender = message.sender;
        current_message_thread_messages.push(new Message_Thread_Message(message));
    }
    
    if(romance_path[current_message_thread] && messages[current_message_thread].messages && messages[current_message_thread].messages.length > 1) {
        refresh_dialog_btn.classList.remove('fullHide');
    } else {
        refresh_dialog_btn.classList.add('fullHide');
    }

    // console.log(current_message_thread_messages);
    for(let index = current_message_thread_messages.length-1; index >= 0; index--) {
        message_thread_section.appendChild(current_message_thread_messages[index].element);
    }

    for(let current_message_thread_option of current_message_thread_options) {
        message_option_section.removeChild(current_message_thread_option.element);
    }

    current_message_thread_options.length = 0;

    // generate options
    if(romance_script[current_message_thread].responded) {
        let current_choices = get_current_choices(current_message_thread);
        let current_title = '';
        for(let index in current_choices) {
            current_title = current_choices[index].title;
            current_message_thread_options.push(new Message_Thread_Option(current_title, index, current_message_thread));
            message_option_section.appendChild(current_message_thread_options[index].element);
        }
    }
}
