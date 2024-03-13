// {
//     'thread_name': 'name',
//     'messageType': 'text',
//     'message': 'Hello there',
//     'date': new Date(Date.now())
// }
const cassi_audio_message = {
    'message': 'audio message', 'message_type': 'audio', 'sender': 'Cassi', 'audio_name': 'isaac', 'delay': 20
};

const romance_script = {
    'Cassi': {
        response: [
            {
                'sender': 'none',
                'message': 'Hey baby',
                'message_type': 'text',
                'delay': 30
            }
        ],
        responded: false,
        choices: [
            {
                'title': 'Hey Cassi',
                'messages': [
                    { 
                        'message': 'Hey Cassi', 'message_type': 'text', 'sender': username 
                    }
                ],
                'response': [
                    {
                        'sender': 'Cassi',
                        'message': 'I had to pop into your DMs cause you were looking cute',
                        'message_type': 'text',
                        'delay': 40
                    },
                    {
                        'sender': 'Cassi',
                        'message': 'You should take me out and get to know me better.',
                        'message_type': 'text',
                        'delay': 30
                    },
                    {
                        'sender': 'Cassi',
                        'message': 'I can see you drive a Camry :)',
                        'message_type': 'text',
                        'delay': 1500
                    },
                    {
                        'sender': 'Cassi',
                        'message': 'What\'s the engine configuration?',
                        'message_type': 'text',
                        'delay': 20
                    }
                ],
                choices: [
                    {
                        'title': '3.5L V6',
                        'messages': [
                            { 
                                'message': 'You already know I got that 3.5L V6', 'message_type': 'text', 'sender': username,
                            },
                            { 
                                'message': 'With twin turbos ;)', 'message_type': 'text', 'sender': username, delay: 20
                            }
                        ],
                        'response': [
                            {
                                'sender': 'Cassi',
                                'message': 'Ooooooh, okay. I like a man who drives a big beefy camry',
                                'message_type': 'text',
                                'delay': 60
                            },
                            {
                                'sender': 'Cassi',
                                'message': 'Makes me wonder what else is big and beefy',
                                'message_type': 'text',
                                'delay': 40
                            },
                            {
                                'sender': 'Cassi',
                                'message': 'I do prefer my men eco-friendly though...',
                                'message_type': 'text',
                                'delay': 70
                            },
                            {
                                'sender': 'Cassi',
                                'message': 'You aren\'t catless, are you?',
                                'message_type': 'text',
                                'delay': 30
                            },
                            {
                                'sender': 'Cassi',
                                'message': 'By cat, I mean catalytic converter.',
                                'message_type': 'text',
                                'delay': 30
                            },
                            {
                                'sender': 'Cassi',
                                'message': 'You know, the ones that get stolen all the time',
                                'message_type': 'text',
                                'delay': 40
                            }
                        ],
                        choices: [
                            {
                                'title': 'I\'m Catless',
                                'messages': [
                                    {
                                        'message': '...I\'m catless unfortunately', 'message_type': 'text', 'sender': username, 'delay': 30
                                    }
                                ],
                                'response': [
                                    {
                                        'message': 'LMAO', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                                    },
                                    {
                                        'message': 'Get off my phone then', 'message_type': 'text', 'sender': 'Cassi', 'delay': 20
                                    },
                                    {
                                        'message': 'Cassi blocked you', 'message_type': 'alert', 'sender': 'none', 'delay': 10
                                    },
                                    cassi_audio_message
                                ]
                            },
                            {
                                'title': 'Yeah, but I still want you',
                                'messages': [
                                    {
                                        'message': 'My camry is clapped out innit', 'message_type': 'text', 'sender': username, 'delay': 30
                                    },
                                    {
                                        'message': 'But I still want you', 'message_type': 'text', 'sender': username, 'delay': 30
                                    }
                                ],
                                'response': [
                                    {
                                        'message': 'Well what else do you have to offer?', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                                    }
                                ],
                                choices: [
                                    {
                                        'title': 'Send Dick Pic',
                                        'messages': [
                                            {
                                                'message': 'Premium Shaft', 'message_type': 'photo', 'sender': username, 'delay': 30
                                            }
                                        ],
                                        'response': [
                                            {
                                                'message': 'Are you challenging me?', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                                            },
                                            {
                                                'message': 'One moment.', 'message_type': 'text', 'sender': 'Cassi', 'delay': 10
                                            },
                                            {
                                                'message': 'Cassi\'s Premium Shaft', 'message_type': 'photo', 'sender': 'Cassi', 'delay': 90,
                                                'onclick': () => {
                                                    send_thread_messages('Cassi', [
                                                        {
                                                            'message': 'You really just opened that?', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                                                        },
                                                        {
                                                            'message': 'You\'re gay', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                                                        },
                                                        {
                                                            'message': 'Come by my place tomorrow ;)', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                                                        },
                                                        cassi_audio_message
                                                    ]);
                                                }
                                            }
                                        ],
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'title': '2.5L Inline 4',
                        'messages': [
                            {
                                'message': 'I only gota 2.5L right now', 'message_type': 'text', 'sender': username, 'delay': 60
                            }
                        ],
                        'response': [
                            {
                                'message': 'LMAAOOOOO', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                            {
                                'message': 'HAAHAHAHAHAAHAA', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                            {
                                'message': 'HAAHAHAHAHAAHAA', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                            {
                                'message': 'HAHAAHA', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                            {
                                'message': 'attachment', 'message_type': 'photo', 'sender': 'Cassi', 'delay': 60, 'image_url': './images/LMAO.jpg'
                            },
                            {
                                'message': 'I\'m actually crying over here', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                            {
                                'message': 'You\'re very funny.', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                            {
                                'message': 'It\'s nice to find a guy that can make me laugh again', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                            {
                                'message': 'I wonder what other noises you can make come out of me', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                            {
                                'message': 'Take me somewhere special this weekend, okay?', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                            },
                        ],
                        choices: [
                            {
                                'title': 'Okay',
                                'messages': [
                                    {
                                        'message': 'Okay, you got it', 'message_type': 'text', 'sender': username, 'delay': 60
                                    },
                                ],
                                'response': [
                                    {
                                        'message': '2.5L camry. Hilarious.', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                                    },
                                    {
                                        'message': 'Talk to you soon.', 'message_type': 'text', 'sender': 'Cassi', 'delay': 60
                                    },
                                    cassi_audio_message
                                ],
                            }
                        ]
                    }
                ]
            },
            {
                'title': 'Hey Isaac',
                'messages': [
                    { 
                        'message': 'Hey Isaac', 'message_type': 'text', 'sender': username 
                    }
                ],
                'response': [
                    {
                        'sender': 'Cassi',
                        'message': 'Who tf is Isaac',
                        'message_type': 'text',
                        'delay': 40
                    },
                    {
                        'sender': 'Cassi',
                        'message': 'Are you saying I look like a man?',
                        'message_type': 'text',
                        'delay': 30
                    }
                ],
                choices: [
                    {
                        'title': 'No, you look like my friends',
                        'messages': [
                            { 
                                'message': 'No, but you look like one of my friends', 'message_type': 'text', 'sender': username 
                            }
                        ],
                        'response': [
                            { 
                                'message': 'So you are calling me a man', 'message_type': 'text', 'sender': 'Cassi'
                            },
                            { 
                                'message': 'Bitch', 'message_type': 'text', 'sender': 'Cassi'
                            }
                        ],
                        choices: [
                            {
                                'title': 'Send dick pic to assert dominance',
                                'messages': [
                                    { 
                                        'message': 'Shmeat Supreme', 'message_type': 'photo', 'sender': username 
                                    },
                                ],
                                'response': [
                                    { 
                                        'message': 'My retort.png', 'message_type': 'photo', 'image_url': './images/wood.jpeg', 'sender': 'Cassi' 
                                    },
                                    { 
                                        'message': 'Remember me', 'message_type': 'text', 'sender': 'Cassi'
                                    },
                                    { 
                                        'message': 'Bitch', 'message_type': 'text', 'sender': 'Cassi'
                                    },
                                    { 
                                        'message': 'Cassi has shafted you', 'message_type': 'alert', 'sender': 'none'
                                    },
                                    { 
                                        'message': 'Also Cassi has blocked you', 'message_type': 'alert', 'sender': 'none'
                                    },
                                    cassi_audio_message
                                ]
                            }
                        ]
                    },
                    {
                        'title': 'Yeah, what about it?',
                        'messages': [
                            { 
                                'message': 'Yeah, what about it?', 'message_type': 'text', 'sender': username 
                            }
                        ],
                        'response': [
                            { 
                                'message': 'You know, I like that about you.', 'message_type': 'text', 'sender': 'Cassi'
                            },
                            { 
                                'message': 'You\'re smart', 'message_type': 'text', 'sender': 'Cassi'
                            },
                            { 
                                'message': 'Smart enough to see that I have a massive shaft', 'message_type': 'text', 'sender': 'Cassi'
                            },
                            { 
                                'message': 'But fuck you, you gorila back ass nigga.', 'message_type': 'text', 'sender': 'Cassi'
                            },
                            { 
                                'message': 'Don\'t expose my cover', 'message_type': 'text', 'sender': 'Cassi'
                            },
                            { 
                                'message': 'Cassi has blocked you', 'message_type': 'alert', 'sender': 'Cassi'
                            },
                            cassi_audio_message
                        ]
                    }
                ]
            }
        ]
    },
    'Trade with the pro': {
        'response': [
            {
                'message': 'hey kanayo!', 'message_type': 'text', 'sender': 'The pro'
            }
        ]
    }
}

const romance_path = {
    'thread_name': [0, 1, 4, 6]
}

function create_thread(thread_name) {
    romance_path[thread_name] = [];
    if(!romance_script[thread_name]) {
        console.log('cannot create thread', thread_name);
        return;
    }
    if(romance_script[thread_name].response) {
        send_thread_messages(thread_name, romance_script[thread_name].response);
    } else {
        romance_script[thread_name].responded = true;
    }
}

function send_thread_messages(thread_name, message_arr, index=0) {
    if(index < message_arr.length) {
        let timeout = message_arr[index].delay;
        if(!timeout) {
            timeout = 500;
        }
        setTimeout(() => {
            if(index == message_arr.length-1) {
                if(message_arr[index].sender != username) {
                    romance_script[thread_name].responded = true;
                } else {
                    queue_response(thread_name);
                }
            } else {
                romance_script[thread_name].responded = false;
            }
            message_arr[index].date = new Date(Date.now());
            sendMessage(thread_name, message_arr[index]);
            send_thread_messages(thread_name, message_arr, index+1);
        }, timeout);
    }
}

function make_choice(thread_name, option) {
    romance_script[thread_name].responded = false;
    let choices = get_current_choices(thread_name);
    if(option >= choices.length || option < 0) {
        console.log('a invalid choice was attempted', thread_name, option);
        return;
    }
    romance_path[thread_name].push(option);
    send_thread_messages(thread_name, choices[option].messages);
}

function queue_response(thread_name) {
    let responses = get_current_responses(thread_name);
    send_thread_messages(thread_name, responses);
}

function get_current_choices(thread_name) {
    if(!romance_script[thread_name]) {
        console.log("Cannot get choices for", thread_name);
        return;
    }
    if(!romance_path[thread_name]) {
        console.log('Does not have romance path for some reason:', thread_name);
        return;
    }
    // console.log(romance_path);
    let current_choices = romance_script[thread_name].choices;
    for(let path_index of romance_path[thread_name]) {
        current_choices = current_choices[path_index].choices;
    }
    // console.log(current_choices);
    return current_choices;
}

function get_current_responses(thread_name) {
    if(!romance_script[thread_name]) {
        console.log("Cannot get responses for", thread_name);
        return;
    }
    if(!romance_path[thread_name]) {
        console.log('Does not have romance path for some reason:', thread_name);
        return;
    }
    // console.log(romance_path);
    let current_responses = romance_script[thread_name];
    for(let path_index of romance_path[thread_name].slice(0, romance_path[thread_name].length)) {
        current_responses = current_responses.choices[path_index];
    }
    current_responses = current_responses.response;
    // console.log(current_choices);
    return current_responses;
}

// create_thread('Crack head');

