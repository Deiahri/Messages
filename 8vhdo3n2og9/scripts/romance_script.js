const refresh_dialog_btn = document.getElementById('refresh_dialog_btn');
const romance_path = {}

refresh_dialog_btn.onclick = reset_current_thread;

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

function reset_current_thread() {
    delete romance_path[current_message_thread];
    clear_thread(current_message_thread);
    create_thread(current_message_thread);
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



const cassi_audio_message = {
    'message': 'audio message', 'message_type': 'audio', 'sender': 'Cassi', 'audio_name': 'isaac', 'delay': 20
};

const the_pro_message = {
    'message': 'audio message', 'message_type': 'audio', 'sender': 'The Pro', 'audio_name': 'confy', 'delay': 20
};

const fermina_audio_message = {
    'message': 'audio message', 'message_type': 'audio', 'sender': 'Fermina', 'audio_name': 'gui', 'delay': 3000
};

const junda_audio_message = {
    'message': 'Automated Response', 'message_type': 'audio', 'sender': 'Junda', 'audio_name': 'junda', 'delay': 7000
};

let romance_script;

function initialize_romance_script() {
    romance_script = {
        'Cassi': {
            response: [{
                'message': 'You matched with Cassi', 'message_type': 'alert', 'sender': 'none', 'delay': 10
                },
                {
                    'sender': 'none',
                    'message': 'Hey baby',
                    'message_type': 'text',
                    'delay': 7000
                }
            ],
            responded: false,
            choices: [
                {
                    'title': 'Hey Cassi',
                    'messages': [
                        { 
                            'message': 'Hey Cassi', 'message_type': 'text', 'sender': username, delay: 0
                        }
                    ],
                    'response': [
                        {
                            'sender': 'Cassi',
                            'message': 'I had to pop into your DMs cause you were looking cute',
                            'message_type': 'text',
                            'delay': 4000
                        },
                        {
                            'sender': 'Cassi',
                            'message': 'You should take me out and get to know me better.',
                            'message_type': 'text',
                            'delay': 3000
                        },
                        {
                            'sender': 'Cassi',
                            'message': 'I can see you drive a Camry :)',
                            'message_type': 'text',
                            'delay': 5000
                        },
                        {
                            'sender': 'Cassi',
                            'message': 'What\'s the engine configuration?',
                            'message_type': 'text',
                            'delay': 6000
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
                                    'message': 'With twin turbos ;)', 'message_type': 'text', 'sender': username, delay: 2000
                                }
                            ],
                            'response': [
                                {
                                    'sender': 'Cassi',
                                    'message': 'Ooooooh, okay. I like a man who drives a big beefy camry',
                                    'message_type': 'text',
                                    'delay': 6000
                                },
                                {
                                    'sender': 'Cassi',
                                    'message': 'Makes me wonder what else is big and beefy',
                                    'message_type': 'text',
                                    'delay': 4000
                                },
                                {
                                    'sender': 'Cassi',
                                    'message': 'I do prefer my men eco-friendly though...',
                                    'message_type': 'text',
                                    'delay': 7000
                                },
                                {
                                    'sender': 'Cassi',
                                    'message': 'You aren\'t catless, are you?',
                                    'message_type': 'text',
                                    'delay': 3000
                                },
                                {
                                    'sender': 'Cassi',
                                    'message': 'By cat, I mean catalytic converter.',
                                    'message_type': 'text',
                                    'delay': 3000
                                },
                                {
                                    'sender': 'Cassi',
                                    'message': 'You know, the ones that get stolen all the time',
                                    'message_type': 'text',
                                    'delay': 4000
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
                                            'message': 'LMAO', 'message_type': 'text', 'sender': 'Cassi', 'delay': 6000
                                        },
                                        {
                                            'message': 'Get off my phone then', 'message_type': 'text', 'sender': 'Cassi', 'delay': 2000
                                        },
                                        cassi_audio_message,
                                        {
                                            'message': 'Cassi blocked you', 'message_type': 'alert', 'sender': 'none', 'delay': 1000
                                        }
                                    ]
                                },
                                {
                                    'title': 'Yeah, but I still want you',
                                    'messages': [
                                        {
                                            'message': 'My camry is clapped out innit', 'message_type': 'text', 'sender': username, 'delay': 30
                                        },
                                        {
                                            'message': 'But I still want you', 'message_type': 'text', 'sender': username, 'delay': 3000
                                        }
                                    ],
                                    'response': [
                                        {
                                            'message': 'Well what else do you have to offer?', 'message_type': 'text', 'sender': 'Cassi', 'delay': 6000
                                        }
                                    ],
                                    choices: [
                                        {
                                            'title': 'Send Dick Pic',
                                            'messages': [
                                                {
                                                    'message': 'Premium Shaft', 'message_type': 'photo', 'sender': username, 'delay': 3000
                                                }
                                            ],
                                            'response': [
                                                {
                                                    'message': 'Are you challenging me?', 'message_type': 'text', 'sender': 'Cassi', 'delay': 6000
                                                },
                                                {
                                                    'message': 'One moment.', 'message_type': 'text', 'sender': 'Cassi', 'delay': 2000
                                                },
                                                {
                                                    'message': 'Cassi\'s Premium Shaft', 'message_type': 'photo', 'image_url':'./images/wood.jpg', 'sender': 'Cassi', 'delay': 9000,
                                                    'onclick': () => {
                                                        send_thread_messages('Cassi', [
                                                            {
                                                                'message': 'You really just opened that?', 'message_type': 'text', 'sender': 'Cassi', 'delay': 6000
                                                            },
                                                            {
                                                                'message': 'You\'re gay', 'message_type': 'text', 'sender': 'Cassi', 'delay': 6000
                                                            },
                                                            {
                                                                'message': 'Come by my place tomorrow ;)', 'message_type': 'text', 'sender': 'Cassi', 'delay': 6000
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
                                    'message': 'LMAAOOOOO', 'message_type': 'text', 'sender': 'Cassi', 'delay': 2000
                                },
                                {
                                    'message': 'HAAHAHAHAHAAHAA', 'message_type': 'text', 'sender': 'Cassi', 'delay': 1500
                                },
                                {
                                    'message': 'HAAAAAAAAAAAAAAAAAAAAAAAAA', 'message_type': 'text', 'sender': 'Cassi', 'delay': 4000
                                },
                                {
                                    'message': 'Hold on a second', 'message_type': 'text', 'sender': 'Cassi', 'delay': 1000
                                },
                                {
                                    'message': 'attachment', 'message_type': 'photo', 'sender': 'Cassi', 'delay': 3000, 'image_url': './images/LMAO.jpg'
                                },
                                {
                                    'message': 'LMAAOAOAOAOOO DIS NIGGA ONLY GOT A 2.5L INLINE 4', 'message_type': 'text', 'sender': 'Cassi', 'delay': 3000
                                },
                                {
                                    'message': 'WITH 169 HP AND 167 POUND-FEET OF TORQUE', 'message_type': 'text', 'sender': 'Cassi', 'delay': 1500
                                },
                                {
                                    'message': 'LMAAAOO', 'message_type': 'text', 'sender': 'Cassi', 'delay': 1500
                                },
                                {
                                    'message': 'I\'m actually crying over here', 'message_type': 'text', 'sender': 'Cassi', 'delay': 5000
                                },
                                {
                                    'message': 'You\'re very funny.', 'message_type': 'text', 'sender': 'Cassi', 'delay': 3500
                                },
                                {
                                    'message': 'It\'s nice to find a guy that can make me laugh again', 'message_type': 'text', 'sender': 'Cassi', 'delay': 6000
                                },
                                {
                                    'message': 'I wonder what other noises you can make come out of me', 'message_type': 'text', 'sender': 'Cassi', 'delay': 4000
                                },
                                {
                                    'message': 'Take me somewhere special this weekend, okay?', 'message_type': 'text', 'sender': 'Cassi', 'delay': 2000
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
                                            'message': '2.5L camry. Hilarious.', 'message_type': 'text', 'sender': 'Cassi', 'delay': 5000
                                        },
                                        {
                                            'message': 'Talk to you soon.', 'message_type': 'text', 'sender': 'Cassi', 'delay': 3000
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
                            'delay': 4000
                        },
                        {
                            'sender': 'Cassi',
                            'message': 'Are you saying I look like a man?',
                            'message_type': 'text',
                            'delay': 3500
                        }
                    ],
                    choices: [
                        {
                            'title': 'No, you look like my friends',
                            'messages': [
                                { 
                                    'message': 'No, but you look like one of my friends', 'message_type': 'text', 'sender': username, delay: 10
                                }
                            ],
                            'response': [
                                { 
                                    'message': 'So you are calling me a man', 'message_type': 'text', 'sender': 'Cassi', delay: 3000
                                },
                                { 
                                    'message': 'Bitch', 'message_type': 'text', 'sender': 'Cassi', delay: 2000
                                }
                            ],
                            choices: [
                                {
                                    'title': 'Send dick pic to assert dominance',
                                    'messages': [
                                        { 
                                            'message': 'Shmeat Supreme', 'message_type': 'photo', 'sender': username, delay: 2000
                                        },
                                    ],
                                    'response': [
                                        { 
                                            'message': 'My retort.png', 'message_type': 'photo', 'image_url': './images/wood.jpeg', 'sender': 'Cassi', delay: 5000
                                        },
                                        { 
                                            'message': 'Remember me', 'message_type': 'text', 'sender': 'Cassi', delay: 4000
                                        },
                                        { 
                                            'message': 'Bitch', 'message_type': 'text', 'sender': 'Cassi', delay: 1000
                                        },
                                        { 
                                            'message': 'Cassi has shafted you', 'message_type': 'alert', 'sender': 'none', delay: 2000
                                        },
                                        { 
                                            'message': 'Also Cassi has blocked you', 'message_type': 'alert', 'sender': 'none', delay: 3000
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
                                    'message': 'You know, I like that about you.', 'message_type': 'text', 'sender': 'Cassi', delay: 3000
                                },
                                { 
                                    'message': 'You\'re smart', 'message_type': 'text', 'sender': 'Cassi', delay: 5000
                                },
                                { 
                                    'message': 'Smart enough to see that I underneath all these curves', 'message_type': 'text', 'sender': 'Cassi', delay: 4000
                                },
                                { 
                                    'message': 'is a massive shaft', 'message_type': 'text', 'sender': 'Cassi', delay: 2000
                                },
                                { 
                                    'message': 'But fuck you, you gorila back ass nigga.', 'message_type': 'text', 'sender': 'Cassi', delay: 8000
                                },
                                { 
                                    'message': 'Don\'t expose my cover', 'message_type': 'text', 'sender': 'Cassi', delay: 4000
                                },
                                { 
                                    'message': 'Cassi has blocked you', 'message_type': 'alert', 'sender': 'Cassi', delay: 1000
                                },
                                cassi_audio_message
                            ]
                        }
                    ]
                }
            ]
        },
        'Trade with the pro': {
            'response': [{
                'message': 'You matched with The Pro', 'message_type': 'alert', 'sender': 'none', 'delay': 10
                },
                {
                    'message': 'hey kanayo!', 'message_type': 'text', 'sender': 'The Pro', delay: 8000
                }
            ],
            'choices': [
                {
                    'title': 'Call him a Twat',
                    'messages': [{
                        'message': 'Hey Twat', 'message_type': 'text', 'sender': username, 'delay': 10
                    }],
                    'response': [
                        {
                            'message': 'Pussio', 'message_type': 'text', 'sender': 'The Pro', 'delay': 2000
                        }
                    ],
                    'choices': [
                        {
                            'title': 'Call him a Bomboclat', 
                            'messages': [
                                {
                                    'message': 'Bomboclat', 'message_type': 'text', 'sender': username, 'delay': 10
                                }
                            ],
                            'response': [
                                {
                                    'message': 'Your real mom', 'message_type': 'text', 'sender': 'The Pro', 'delay': 5000
                                }
                            ],
                            'choices': [
                                {
                                    'title': 'Talk about his REAL dad',
                                    'messages': [
                                        {
                                            'message': 'Your dad', 'message_type': 'text', 'sender': username, 'delay': 10
                                        },
                                        {
                                            'message': 'Your REAL dad', 'message_type': 'text', 'sender': username, 'delay': 1000
                                        }
                                    ],
                                    'response': [
                                        {
                                            'message': 'Have you been to the graveyard tonight?', 'message_type': 'text', 'sender': 'The Pro', 'delay': 4000
                                        }
                                    ],
                                    'choices': [
                                        {
                                            'title': 'Yes',
                                            'messages': [
                                                {
                                                    'message': 'Yes, I went to see your grandmother', 'message_type': 'text', 'sender': username, 'delay': 1000
                                                }
                                            ],
                                            'response': [
                                                {
                                                    'message': 'Fuck Yoh', 'message_type': 'text', 'sender': 'The Pro', 'delay': 2000
                                                },
                                                {
                                                    'message': 'you*', 'message_type': 'text', 'sender': 'The Pro', 'delay': 500
                                                }
                                            ],
                                            'choices': [
                                                {
                                                    'title': 'Your real grandmother',
                                                    'messages': [{
                                                        'message': 'Your REAL grandmother', 'message_type': 'text', 'sender': username, 'delay': 10
                                                    }],
                                                    'response': [
                                                        {
                                                            'message': 'That\'s why your daddy\'s dick is bigger and juicier than yours', 'message_type': 'text', 'sender': 'The Pro', 'delay': 8000
                                                        },
                                                        {
                                                            'message': 'I\'d send up a picture of your own dick', 'message_type': 'text', 'sender': 'The Pro', 'delay': 3000
                                                        },
                                                        {
                                                            'message': 'But junda said no', 'message_type': 'text', 'sender': 'The Pro', 'delay': 2000
                                                        }
                                                    ],
                                                    'choices': [{
                                                        'title': 'Huh?',
                                                        'messages': [{
                                                            'message': 'Huh?', 'message_type': 'text', 'sender': username, 'delay': 10
                                                        }],
                                                        'response': [{
                                                            'message': 'This you?', 'message_type': 'text', 'sender': 'The Pro', 'delay': 6000
                                                        },
                                                        {
                                                            'message': 'Evidence.png', 'message_type': 'photo', 'image_url':'./images/yeh.jpg', 'sender': 'The Pro', 'delay': 2000
                                                        }],
                                                        'choices': [
                                                            {
                                                                'title': 'block this nigga',
                                                                'messages': [{
                                                                    'message': 'Shut up bitch', 'message_type': 'text', 'sender': username, 'delay': 10
                                                                },
                                                                the_pro_message
                                                                ,{
                                                                    'message': 'You blocked The Pro', 'message_type': 'alert', 'sender': 'none', 'delay': 2000
                                                                }],
                                                                'response': []
                                                            }
                                                        ]
                                                    }],
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    'title': 'Call him confidence',
                    'messages': [
                        {
                            'message': 'hey confidence', 'message_type': 'text', 'sender': username, 'delay': 10
                        }
                    ],
                    'response': [
                        {
                            'message': 'Show me that nyash', 'message_type': 'text', 'sender': 'The pro', 'delay': 2000
                        }
                    ],
                    'choices': [
                        {
                            'title': 'No',
                            'messages': [{
                                'message': 'No', 'message_type': 'text', 'sender': username, 'delay': 10
                            }],
                            'response': [{
                                'message': 'Your mom', 'message_type': 'text', 'sender': 'The pro', 'delay': 3000
                            }],
                            'choices': [{
                                'title': 'Block this nigga',
                                'messages': [
                                    {
                                        'message': 'Your dad', 'message_type': 'text', 'sender': username, 'delay': 10
                                    },
                                    the_pro_message,
                                    {
                                        'message': 'You blocked The Pro', 'message_type': 'alert', 'sender': 'none', 'delay': 2000
                                    }
                                ]
                            }]
                        },
                        {
                            'title': 'Fine',
                            'messages': [{
                                'message': 'Fine', 'message_type': 'text', 'sender': username, 'delay': 10
                            }],
                            'response': [{
                                    'message': 'Wait, really?', 'message_type': 'text', 'sender': 'The pro', 'delay': 7000
                                },{
                                    'message': 'See you in 5', 'message_type': 'text', 'sender': 'The pro', 'delay': 4000
                                },{
                                    'message': 'oil up', 'message_type': 'text', 'sender': 'The pro', 'delay': 2000
                                },
                                the_pro_message
                            ]
                        }
                    ]
                }
            ]
        },
        'Fermina': {
            'response': [{
                'message': 'You matched with Fermina', 'message_type': 'alert', 'sender': 'none', 'delay': 10
            }],
            'choices': [
                {
                    'title': 'What\'s up bbg',
                    'messages': [{
                        'message': 'What\'s up bbg', 'message_type': 'text', 'sender': username, 'delay': 10
                    }],
                    'response': [{
                        'message': 'Hey papi', 'message_type': 'text', 'sender': 'Fermina', 'delay': 6000
                    },{
                        'message': 'I knew you were gay like that', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                    },{
                        'message': 'fag', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2000
                    },{
                        'message': 'Me too ;)', 'message_type': 'text', 'sender': 'Fermina', 'delay': 7000
                    }],
                    'choices': [
                        {
                            'title': 'You a lady boy?',
                            'messages': [{
                                'message': 'You a lady boy?', 'message_type': 'text', 'sender': username, 'delay': 10
                            },{
                                'message': 'cuz those are my favorite', 'message_type': 'text', 'sender': username, 'delay': 2000
                            }],
                            'response': [{
                                'message': 'Bet', 'message_type': 'text', 'sender': 'Fermina', 'delay': 4000
                            },{
                                'message': 'And yes I am', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2000
                            },{
                                'message': 'Only thing about me is', 'message_type': 'text', 'sender': 'Fermina', 'delay': 6000
                            },{
                                'message': 'I got a hairy ass', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                            },{
                                'message': 'So I\'ll need help applying my', 'message_type': 'text', 'sender': 'Fermina', 'delay': 4000
                            },{
                                'message': 'Nair: Men body hair removal, industrial standard heavy duty, 30-in-1', 'message_type': 'text', 'sender': 'Fermina', 'delay': 1500
                            }],
                            'choices': [
                                {
                                    'title': 'I can help',
                                    'messages': [{
                                        'message': 'I have seen a video on that before, so I think I can help.', 'message_type': 'text', 'sender': username, 'delay': 10
                                    },{
                                        'message': 'PLEASE', 'message_type': 'text', 'sender': username, 'delay': 2000
                                    },{
                                        'message': 'PLEASEEE come over this Sunday', 'message_type': 'text', 'sender': username, 'delay': 1000
                                    }],
                                    'response': [{
                                        'message': 'Say less', 'message_type': 'text', 'sender': 'Fermina', 'delay': 7000
                                    },{
                                        'message': 'And one more thing', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                                    }],
                                    'choices': [
                                        {
                                            'title': 'What',
                                            'messages': [{
                                                'message': 'What?', 'message_type': 'text', 'sender': username, 'delay': 10
                                            }],
                                            'response': [
                                                {
                                                    'message': 'When I come over, let\'s play a game', 'message_type': 'text', 'sender': 'Fermina', 'delay': 14000
                                                },{
                                                    'message': 'You\'ll be blindfolded, and you\'ll have to guess what\'s in your mouth', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                                                },{
                                                    'message': 'It might be a banana', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2000
                                                },{
                                                    'message': 'Or it might be my concerningly veiny and disproportionally sized chode', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                                                }
                                            ],
                                            'choices': [{
                                                'title': 'Thank you',
                                                'messages': [{
                                                    'message': 'Best birthday gift ever', 'message_type': 'text', 'sender': username, 'delay': 2000
                                                }, fermina_audio_message]
                                            }]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'title': 'What are you wearing?',
                            'messages': [{
                                'message': 'What are you wearing?', 'message_type': 'text', 'sender': username, 'delay': 10
                            }],
                            'response': [{
                                'message': 'I got this fishing net dress', 'message_type': 'text', 'sender': 'Fermina', 'delay': 6000
                            },{
                                'message': 'off of Temu', 'message_type': 'text', 'sender': 'Fermina', 'delay': 1000
                            },{
                                'message': 'this chat is sponsored by TEMU', 'message_type': 'alert', 'sender': 'none', 'delay': 1000
                            },{
                                'message': 'It\'s completely see through', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2000
                            },{
                                'message': 'And I\'m wearing a naruto headband', 'message_type': 'text', 'sender': 'Fermina', 'delay': 200
                            },{
                                'message': 'I\'d like to wear it to a concert one day', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                            }],
                            'choices': [
                                {
                                    'title': 'Take her to see Asake',
                                    'messages': [{
                                        'message': 'Wanna see Asake this monday?', 'message_type': 'text', 'sender': username, 'delay': 10
                                    },{
                                        'message': 'I got tickets for one of his concerts at 5:00 am', 'message_type': 'text', 'sender': username, 'delay': 1500
                                    },{
                                        'message': 'Timing is tapped, ngl', 'message_type': 'text', 'sender': username, 'delay': 3000
                                    },{
                                        'message': 'But they are $20 at 5:00 am', 'message_type': 'text', 'sender': username, 'delay': 2000
                                    },{
                                        'message': 'Want me to take you?', 'message_type': 'text', 'sender': username, 'delay': 1500
                                    }],
                                    'response': [{
                                        'message': 'Nah', 'message_type': 'text', 'sender': 'Fermina', 'delay': 9500
                                    },{
                                        'message': 'Asake is too loud', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2000
                                    },{
                                        'message': 'I fucking hate loud people', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2000
                                    },{
                                        'message': 'Shit', 'message_type': 'text', 'sender': 'Fermina', 'delay': 1000
                                    },{
                                        'message': 'Makes me made just thinking about it', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2000
                                    },{
                                        'message': 'You\'re not a loud person, are you?', 'message_type': 'text', 'sender': 'Fermina', 'delay': 4000
                                    }],
                                    'choices': [
                                        {
                                            'title': 'I\'m a little loud',
                                            'messages': [{
                                                'message': 'Nah I\'m loud as fuck, I\'m not even going to hold you', 'message_type': 'text', 'sender': username, 'delay': 10
                                            }],
                                            'response': [{
                                                'message': 'I\'d normally block guys like you', 'message_type': 'text', 'sender': 'Fermina', 'delay': 12000
                                            },{
                                                'message': 'But I\'ll make an exception for you', 'message_type': 'text', 'sender': 'Fermina', 'delay': 6000
                                            },{
                                                'message': 'And that cute face', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                                            },{
                                                'message': 'and nice hair...', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2400
                                            },{
                                                'message': 'and most especially that chocolately fat ass', 'message_type': 'text', 'sender': 'Fermina', 'delay': 5000
                                            },{
                                                'message': 'but you better be quiet when you\'re with me', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                                            },{
                                                'message': 'Or I\'ll shut you up with my large penis that\'s the size of a small penis', 'message_type': 'text', 'sender': 'Fermina', 'delay': 2000
                                            }],
                                            'choices': [{
                                                'title': 'You don\'t scare me',
                                                'messages': [{
                                                    'message': 'Don\'t threaten me with a good time', 'message_type': 'text', 'sender': username, 'delay': 10
                                                }],
                                                'response': [{
                                                    'message': 'See you soon then ;)', 'message_type': 'text', 'sender': 'Fermina', 'delay': 5000
                                                },fermina_audio_message
                                                ]
                                            }]
                                        },{
                                            'title': 'I can be quiet',
                                            'messages': [{
                                                'message': 'I\'m pretty quiet when I\'m at the library', 'message_type': 'text', 'sender': username, 'delay': 10
                                            }],
                                            'response': [{
                                                'message': 'You seem pretty smart', 'message_type': 'text', 'sender': 'Fermina', 'delay': 5000
                                            },{
                                                'message': 'but that seems good to be true', 'message_type': 'text', 'sender': 'Fermina', 'delay': 3000
                                            }],
                                            'choices': [{
                                                'title': '*say something smart*',
                                                'messages': [{
                                                    'message': 'Your hair grows 3 centimeters every month', 'message_type': 'text', 'sender': username, 'delay': 10
                                                },{
                                                    'message': 'Just like my dick whenever I see you', 'message_type': 'text', 'sender': username, 'delay': 3000
                                                }],
                                                'response': [{
                                                    'message': 'You\'re gonna have to prove it', 'message_type': 'text', 'sender': 'Fermina', 'delay': 7000
                                                },{
                                                    'message': 'Come through to my place so I can blow bubbles on your membrane', 'message_type': 'text', 'sender': 'Fermina', 'delay': 4000
                                                }],
                                                'choices': [{
                                                    'title': 'Bet',
                                                    'messages': [{
                                                        'message': 'bet', 'message_type': 'text', 'sender': username, delay: 10
                                                    }],
                                                    'response': [fermina_audio_message]
                                                }]
                                            }]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, {
                    'title': 'What\'s good memo',
                    'messages': [{
                        'message': 'What\'s good memo', 'message_type': 'text', 'sender': username, delay: 10
                    }],
                    'response': [{
                        'message': 'Who tf is memo?', 'message_type': 'text', 'sender': 'Fermina', delay: 2000
                    }],
                    'choices': [
                        {
                            'title': 'You look like one of my friends',
                            'messages': [{
                                'message': 'You look like one of my friends', 'message_type': 'text', 'sender': username, delay: 10
                            }],
                            'response': [{
                                'message': 'Your friend better be a bad bitch', 'message_type': 'text', 'sender':'Fermina', delay: 8000
                            },{
                                'message': 'Cuz I\'m a big catch', 'message_type': 'text', 'sender':'Fermina', delay: 3000
                            }],
                            'choices': [
                                {
                                    'title': 'show her what\'s big',
                                    'messages': [{
                                        'message': 'I\'ll show you big', 'message_type': 'text', 'sender': username, delay: 10
                                    },{
                                        'message': 'Massive Shaft.mp4', 'message_type': 'photo', 'sender': username, delay: 10
                                    }],
                                    'response': [{
                                        'message': 'Bet', 'message_type': 'text', 'sender': 'Fermina', delay: 4000
                                    },{
                                        'message': 'nsnd333-93HD.heic', 'message_type': 'photo', 'image_url': './images/too_big.png', 'sender': 'Fermina', delay: 6000
                                    },{
                                        'message': 'Wanna sword fight this weekend?', 'message_type': 'text', 'sender': 'Fermina', delay: 3000
                                    }],
                                    'choices': [{
                                        'title': 'Engage premium homophobia',
                                        'messages': [{
                                            'message': 'What the fuck? You\'re some kind of lady boy?', 'message_type': 'text', 'sender': username, delay: 10
                                        }],
                                        'response': [{
                                            'message': 'Yeah, that a problem?', 'message_type': 'text', 'sender': 'Fermina', delay: 3000
                                        }],
                                        'choices': [{
                                            'title': 'Yes',
                                            'messages': [{
                                                'message': 'Yes', 'message_type': 'text', 'sender': username, delay: 10
                                            }],
                                            'response': [{
                                                'message': 'Then goodbye', 'message_type': 'text', 'sender': 'Fermina', delay: 4000
                                            }, fermina_audio_message, {
                                                'message': 'Fermina blocked you', 'message_type': 'alert', 'sender': 'none', delay: 2000
                                            }]
                                        },{
                                            'title': 'No',
                                            'messages': [{
                                                'message': 'No, let\'s meet up', 'message_type': 'text', 'sender': username, delay: 10
                                            }],
                                            'response': [{
                                                'message': ':)', 'message_type': 'text', 'sender': 'Fermina', delay: 3000
                                            }, fermina_audio_message]
                                        }]
                                    }]
                                }
                            ]
                        },
                        {
                            'title': 'You look like a man',
                            'messages': [{
                                'message': 'I don\'t know', 'message_type': 'text', 'sender': username, delay: 10
                            },{
                                'message': 'but you look like a man', 'message_type': 'text', 'sender': username, delay: 2000
                            }],
                            'response': [{
                                'message': 'Bitch', 'message_type': 'text', 'sender': 'Fermina', delay: 7000
                            }, {
                                'message': 'I know you not talking with them big ass toenails', 'message_type': 'text', 'sender': 'Fermina', delay: 2000
                            }, {
                                'message': 'You need to clip them shits', 'message_type': 'text', 'sender': 'Fermina', delay: 1000
                            }, {
                                'message': 'And that frumpalishous audashiously juicinashiously', 'message_type': 'text', 'sender': 'Fermina', delay: 2000
                            }, {
                                'message': 'audashiously', 'message_type': 'text', 'sender': 'Fermina', delay: 1000
                            }, {
                                'message': 'juicinashiously', 'message_type': 'text', 'sender': 'Fermina', delay: 2000
                            }, {
                                'message': 'fat ass booty', 'message_type': 'text', 'sender': 'Fermina', delay: 1000
                            }],
                            'choices': [
                                {
                                    'title': 'assert dominance',
                                    'messages': [{
                                        'message': 'at least my booty is bigger than yours', 'message_type': 'text', 'sender': username, delay: 1000
                                    }],
                                    'response': [{
                                        'message': 'We\'ll see whose is bigger when I come over', 'message_type': 'text', 'sender': 'Fermina', delay: 2000
                                    }, fermina_audio_message]
                                }
                            ]
                        }  
                    ]
                }
            ]
        },
        'Junda': {
            'response': [
                {
                    'message': 'You matched with Junda', 'message_type': 'alert', 'sender': 'none', delay: 500
                },
                {
                    'message': 'Seems Junda is inactive. Try giving them a call!', 'message_type': 'alert', 'sender': 'none', delay: 20000
                }
            ],
            'choices': [{
                'title': 'Call Junda',
                'messages': [{
                    'message': '---', 'message_type': 'alert', 'sender': 'none', delay: 10
                }, {
                    'message': username+' is Calling Junda', 'message_type': 'alert', 'sender': 'none', delay: 300
                }, {
                    'message': 'Junda is currently on DND. Try calling again', 'message_type': 'alert', 'sender': 'none', delay: 2000
                }],
                'response': [],
                'choices': [{
                    'title': 'Call this twat again',
                    'messages': [{
                        'message': '---', 'message_type': 'alert', 'sender': 'none', delay: 10
                    }, {
                        'message': username+' is Calling Junda', 'message_type': 'alert', 'sender': 'none', delay: 300
                    }, junda_audio_message]
                }]
            }]
        }
    };
}

