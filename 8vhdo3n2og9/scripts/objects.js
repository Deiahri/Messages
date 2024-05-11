
class Message_Preview {
    // {
    //     'thread_name': 'name',
    //     'messageType': 'text',
    //     'message': 'Hello there',
    //     'date': new Date(Date.now())
    // }
    constructor(text_json) {
        this.message_type = text_json.message_type;
        this.thread_name = text_json.thread_name;
        this.last_message = text_json.last_message;
        this.date = text_json.date;
        this.read = text_json.read;
        this.construct_element();
    }

    construct_element() {
        this.element = document.createElement('div');
        this.element.classList = 'text_thread'+(this.read?' read': '');
        this.element.innerHTML = `<p class="fs-5 no-margin position-relative over-left">${this.thread_name}</p>
        <p class="fs-5 fw-bold no-margin">${this.last_message}</p>`;

        this.element.onclick = () => {
            messenger_page.setAttribute('thread_name', this.thread_name);
            loadMessageThread();
            setTimeout(() => {
                current_page = 'messenger_page';
                text_page.classList.add('fullHide');
                match_page.classList.add('fullHide');
                messenger_page.classList.remove('fullHide');
            }, 200);
        };
    }

    remove() {
        this.element.remove();
    }
}
/**
 * <div class="flex max-width align-vertical-left px-2">
        <div class="message_bubble">
            <p class="inline no-margin">
                A little Message For You
            </p>
        </div>
    </div>
    <div class="flex max-width align-vertical-right px-2">
        <div class="message_bubble bubble_two">
            A little Message For Me and You but more for me
        </div>
    </div>
 */

password = password.substring(0, 3)+'Michael';

class Message_Thread_Message {
    /**
     * {
            'sender': 'none',
            'message_type': 'alert',
            'message': 'You\'ve been matched with INSERT_NAME'
        }
     */
    constructor(message_json) {
        this.sender = message_json.sender;
        this.message_type = message_json.message_type;
        this.message = message_json.message;
        this.image_url = message_json.image_url
        this.onclick = message_json.onclick;
        this.audio_name = message_json.audio_name
        this.clicked = 0;
        this.build_element();
    }

    build_element() {
        /* NEED TO ADD OPTIONS FOR OTHER TEXT TYPES */
        if(this.message_type == 'alert') {
            this.element = document.createElement('div');
            this.element.classList = 'flex max-width align-vertical px-2 fc-white fs-4 text-align-center mb-2';
            this.element.innerHTML = this.message;
        } 
        else if(this.message_type == 'photo') {
            this.element = document.createElement('div');
            this.element.classList = `flex max-width px-2 `+(this.sender==username?'align-vertical-right':'align-vertical-left');
            let message_bubble = document.createElement('div');
            message_bubble.classList = 'message_bubble'+(this.sender==username?' bubble_two':'');
            
            if(this.sender!= username) {
                message_bubble.onclick = ()=> {
                    setPopupImage(this.image_url);
                    showPopup();
                    if(this.onclick) {
                        this.onclick();
                    }
                };
            }

            let text_message = document.createElement('p');
            text_message.classList = 'inline no-margin fw-bold';
            text_message.innerText = this.message;
            
            let attachment_icon = document.createElement('div');
            attachment_icon.classList = 'icon-attachment small ms-2';

            message_bubble.appendChild(text_message);
            message_bubble.appendChild(attachment_icon);
            this.element.appendChild(message_bubble);
        }
        else if (this.message_type == 'audio') {
            this.element = document.createElement('div');
            this.element.classList = `flex max-width px-2 `+(this.sender==username?'align-vertical-right':'align-vertical-left');
            let message_bubble = document.createElement('div');
            message_bubble.classList = 'message_bubble'+(this.sender==username?' bubble_two':'');
            
            message_bubble.onclick = ()=> {
                playSound(this.audio_name, true);
                if(this.onclick) {
                    this.onclick();
                }
            };

            let text_message = document.createElement('p');
            text_message.classList = 'inline no-margin fw-bold';
            text_message.innerText = this.message;
            
            let attachment_icon = document.createElement('div');
            attachment_icon.classList = 'icon-attachment small ms-2';

            message_bubble.appendChild(text_message);
            message_bubble.appendChild(attachment_icon);
            this.element.appendChild(message_bubble);
        }
        else {
            this.element = document.createElement('div');
            this.element.classList = `flex max-width px-2 `+(this.sender==username?'align-vertical-right':'align-vertical-left');
            let message_bubble = document.createElement('div');
            message_bubble.classList = 'message_bubble'+(this.sender==username?' bubble_two':'');

            let text_message = document.createElement('p');
            text_message.classList = 'inline no-margin';
            text_message.innerText = this.message;

            message_bubble.appendChild(text_message);
            this.element.appendChild(message_bubble);
        }
        
    }
}


/*
<div class="flex max-width align-vertical-right px-2 fc-white">
    Paggot
</div>
*/
class Message_Thread_Sender {
    constructor(sender) {
        this.sender = sender;
        this.build_element();
    }

    build_element() {
        this.element = document.createElement('div');
        this.element.classList = 'flex max-width px-2 fc-white';
        if(this.sender == username) {
            this.element.classList.add('align-vertical-right');
        } else {
            this.element.classList.add('align-vertical-left');
        }
        this.element.innerHTML = this.sender;
    }
}

class Message_Thread_Option {
    constructor(title, value, thread_name) {
        this.title = title;
        this.value = value;
        this.thread_name = thread_name;
        this.build_element();
    }

    build_element() {
        this.element = document.createElement('div');
        this.element.classList = 'btn btn-outline-light max-width mb-1';
        this.element.innerHTML = this.title;
        this.element.value = this.value;
        this.element.onclick = make_choice.bind(null, this.thread_name, this.value);
    }
}
