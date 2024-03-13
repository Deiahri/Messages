let text_button = document.getElementById('text_button');
let match_page = document.getElementById('match_page');

let username;

const match_counter = document.getElementById('match_counter');

const switch_left = document.getElementById('switch_left');
const switch_right = document.getElementById('switch_right');

const match_image = document.getElementById('match_image');
const match_name = document.getElementById('match_name');
const match_description = document.getElementById('match_description');
const match_approve_btn = document.getElementById('match_approve_btn');
const match_disapprove_btn = document.getElementById('match_disapprove_btn');

const match_notification_icon = document.getElementById('match_notification_icon');

const matches = [];
let current_match_index = 0;

text_button.onclick = () => {
    loadTexts();
    setTimeout(() => {
        match_page.classList.add('fullHide');
        text_page.classList.remove('fullHide');
        current_page = 'text_page';
    }, 100);
};

/*
{
    'name': 'bruh',
    'description': 'asdasda',
    'image_url': 'iasidjasdi'
}
*/
function add_match(match_json) {
    playSound('new match');
    if(!match_json.name || !match_json.description || !match_json.image_url) {
        console.log('cannot add match');
        return;
    }
    matches.push(match_json);
    update_matches();
}

function remove_current_match() {
    matches.splice(current_match_index, 1);
    update_matches();
}

function update_matches() {
    let match_count = matches.length;
    match_counter.innerHTML = `${match_count} ${match_count==1?'match':'matches'}`;
    if(match_count == 0) {
        match_notification_icon.classList.add('hidden');
        match_name.innerHTML = 'No one here';
        match_description.innerHTML = 'But don\'t lose hope. Someone will come for that nyash eventually';
        match_image.style.removeProperty('content');


        match_approve_btn.classList.add('fullHide');
        match_disapprove_btn.classList.add('fullHide');
    } else {
        match_notification_icon.classList.remove('hidden');
        match_approve_btn.classList.remove('fullHide');
        match_disapprove_btn.classList.remove('fullHide');
        show_match(match_count-1);
    }
}

function show_match(index) {
    let current_match = matches[index];
    match_name.innerHTML = current_match.name;
    match_description.innerHTML = current_match.description;
    match_image.style.content = `url(${current_match.image_url})`;
    current_match_index = index;
}

function next_match() {
    playSound('next');
    if(current_match_index + 1 >= matches.length) {
        current_match_index = -1;
    }
    show_match(current_match_index+1);
}

function previous_match() {
    playSound('prev');
    if(current_match_index - 1 < 0) {
        current_match_index = matches.length;
    }
    show_match(current_match_index-1);
}

function accept_current_match() {
    playSound('match');
    let name = matches[current_match_index].name;
    create_thread(name);
    remove_current_match();
}

function decline_current_match() {
    playSound('no match');
    setTimeout(add_match.bind(null, matches[current_match_index]), 3000);
    remove_current_match();
}


function simulate_matches() {
    console.log('called JSJSDJD');
    update_matches();
    setTimeout(add_match.bind(null, {
        name: 'Cassi',
        description: 'Likes big butts',
        image_url: './images/Cassi.png'
    }), 4000);

    setTimeout(add_match.bind(null, {
        name: 'Trade with the pro',
        description: 'I know you like this RIP(e) grandma pussy',
        image_url: './images/pro.jpg'
    }), 9000);

    setTimeout(add_match.bind(null, {
        name: 'Fermina',
        description: 'I got a nice curvy body, just the way Michael likes it. HMU if you\'re nice and chocolaty, I\'ll give you everything you ever wanted.',
        image_url: './images/Fermina.png'
    }), 18000);

    setTimeout(add_match.bind(null, {
        name: 'Junda',
        description: 'I got a big butt. Cassi is clearly my type',
        image_url: './images/Junda.jpg'
    }), 13000);
}


switch_left.onclick = previous_match;
switch_right.onclick = next_match;

match_approve_btn.onclick = accept_current_match;
match_disapprove_btn.onclick = decline_current_match;
// add_match({
//     name: 'Cassi',
//     description: 'Likes big butts',
//     image_url: './images/Cassi.png'
// });
// add_match({
//     name: 'Cassi2',
//     description: 'Likes big butts',
//     image_url: './images/Cassi.png'
// });

// simulate_matches();
