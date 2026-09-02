// ===== SINAWO PORTFOLIO CHATBOT =====

const knowledge = {
    greetings: {
        patterns: ['hello', 'hi', 'hey', 'howzit', 'good morning', 'good afternoon', 'good evening', 'sup', 'hola'],
        response: () => `Hey there! 👋 I'm Sinawo's virtual assistant. I can tell you all about Sinawo — her skills, projects, experience, education, and how to get in touch. What would you like to know?`
    },
    name: {
        patterns: ['who are you', 'who is sinawo', 'tell me about sinawo', 'about sinawo', 'introduce', 'sinawo mthiyane'],
        response: () => `Sinawo Mthiyane is a Junior Web Developer based in Cape Town, South Africa 🇿🇦. She's currently working at <strong>CAPACITI</strong>, building real-world web applications. She also has a strong background in Tourism and Customer Service, and is fluent in both <strong>English</strong> and <strong>IsiXhosa</strong>.`
    },
    skills: {
        patterns: ['skills', 'technologies', 'tech stack', 'what can she do', 'what does she know', 'coding', 'programming', 'languages', 'tools'],
        response: () => `Sinawo's skill set includes: <br><br>
🎧 <strong>Customer Service:</strong> Call handling, Email writing, Payment processing, Client relations<br>
✈️ <strong>Tourism:</strong> Travel advisory, Booking management, Travel information<br>
🌟 <strong>Other:</strong> Record management, Multilingual (EN & IsiXhosa), Team collaboration`
    },
    projects: {
        patterns: ['projects', 'project', 'work', 'portfolio', 'built', 'apps', 'applications', 'what has she built', 'capaciti project'],
        response: () => `Sinawo has built three projects at CAPACITI: <br><br>
🔵 <strong>Sinawo App</strong> — A responsive web application showcasing interactive UI and modern web design. <a href="https://sinawo.lovable.app/" target="_blank">View Live ↗</a><br><br>
🟣 <strong>GovGuide AI</strong> — An AI-powered app that helps users navigate government services with ease. <a href="https://govguideai.lovable.app/" target="_blank">View Live ↗</a><br><br>
🟠 <strong>AI Sentiment Analyzer</strong> — A tool that analyses text and detects whether the sentiment is positive, negative, or neutral in real time. <a href="https://aisentiment-sp7zjfjg.manus.space/analyzer" target="_blank">View Live ↗</a>`
    },
    experience: {
        patterns: ['experience', 'work experience', 'jobs', 'worked', 'employment', 'career', 'job history', 'previous'],
        response: () => `Sinawo has the following work experience: <br><br>
🏨 <strong>Hotel Concierge</strong> @ Selena Travel and Tours (Sep – Dec 2025)<br>
Handled travel enquiries, bookings, and customer records.<br><br>
🌍 <strong>Tourism Intern (Travel Advisor)</strong> @ Outdoor Africa Tours (Sep 2024 – Jun 2025)<br>
Assisted customers, handled calls & emails, and contributed to project brainstorming.`
    },
    education: {
        patterns: ['education', 'study', 'studied', 'school', 'college', 'qualification', 'degree', 'certificate', 'matric', 'n6', 'tourism qualification'],
        response: () => `Sinawo's educational background: <br><br>
🖥️ <strong>Junior Web Developer</strong> @ CAPACITI (Current)<br>
Building websites and web applications with hands-on project development.<br><br>
🎓 <strong>N4, N5 & N6 Tourism</strong> @ False Bay College (2023 – 2024)<br>
Full Tourism qualification at Muizenberg, Western Cape.<br><br>
📜 <strong>National Senior Certificate (Grade 12)</strong> @ Phandulwazi High School (2018 – 2022)`
    },
    certificates: {
        patterns: ['certificates', 'certifications', 'google', 'credentials', 'achievements', 'ai certificate'],
        response: () => `Sinawo holds the following Google certificates: <br><br>
🏅 <strong>Introduction to AI</strong> — Google Professional Certificate<br>
🏅 <strong>Use AI Responsibly</strong> — Google Professional Certificate<br><br>
These reflect her commitment to staying current with emerging technologies like AI.`
    },
    contact: {
        patterns: ['contact', 'reach', 'email', 'phone', 'call', 'hire', 'get in touch', 'connect', 'number', 'location', 'where is she', 'cape town'],
        response: () => `You can reach Sinawo through: <br><br>
📧 <strong>Email:</strong> <a href="mailto:mthiyanesinawo8@gmail.com">mthiyanesinawo8@gmail.com</a><br>
📞 <strong>Phone:</strong> 065 940 2925<br>
📞 <strong>Alt Phone:</strong> 072 251 8623<br>
📍 <strong>Location:</strong> Phillipi Park, Cape Town, South Africa`
    },
    cv: {
        patterns: ['cv', 'resume', 'download', 'pdf'],
        response: () => `You can download Sinawo's CV directly from her portfolio! 📄 Just click the <strong>"Download CV"</strong> button on the home page, or <a href="SMthiyaneResum.pdf" download>click here to download it now</a>.`
    },
    languages: {
        patterns: ['language', 'speak', 'isixhosa', 'xhosa', 'english', 'multilingual'],
        response: () => `Sinawo is fluent in two languages: <br><br>🗣️ <strong>English</strong> — Professional proficiency<br>🗣️ <strong>IsiXhosa</strong> — Native speaker<br><br>This makes her great at communicating with diverse clients and teams!`
    },
    location: {
        patterns: ['where', 'location', 'based', 'city', 'cape town', 'south africa'],
        response: () => `Sinawo is based in <strong>Phillipi Park, Cape Town, South Africa</strong> 📍. She is open to opportunities in Cape Town and surrounding areas.`
    },
    thanks: {
        patterns: ['thank', 'thanks', 'thank you', 'thx', 'appreciate', 'awesome', 'great', 'cool', 'nice'],
        response: () => `You're welcome! 😊 Feel free to ask me anything else about Sinawo. I'm happy to help!`
    },
    bye: {
        patterns: ['bye', 'goodbye', 'see you', 'later', 'ciao', 'take care'],
        response: () => `Goodbye! 👋 Don't hesitate to come back if you have more questions. Have a great day!`
    },
    hire: {
        patterns: ['hire', 'available', 'opportunity', 'job', 'internship', 'position', 'recruit', 'looking for work'],
        response: () => `Sinawo is open to new opportunities! 🚀 She's looking for roles in <strong>Web Development</strong>, <strong>Tourism</strong>, or <strong>Customer Service</strong>. <br><br>The best way to reach her is via email at <a href="mailto:mthiyanesinawo8@gmail.com">mthiyanesinawo8@gmail.com</a> or through the <strong>Contact</strong> section of this portfolio.`
    }
};

const fallbacks = [
    `I'm not sure about that, but I can tell you about Sinawo's <strong>skills</strong>, <strong>projects</strong>, <strong>experience</strong>, <strong>education</strong>, or <strong>contact details</strong>. What interests you?`,
    `Hmm, I didn't quite catch that! Try asking about Sinawo's <strong>projects</strong>, <strong>skills</strong>, or how to <strong>contact</strong> her. 😊`,
    `I'm still learning! But I can help with questions about Sinawo's <strong>work</strong>, <strong>education</strong>, or <strong>background</strong>. Give it a try!`
];

let fallbackIndex = 0;

function getResponse(input) {
    const text = input.toLowerCase().trim();
    for (const key in knowledge) {
        const entry = knowledge[key];
        if (entry.patterns.some(p => text.includes(p))) {
            return entry.response();
        }
    }
    const reply = fallbacks[fallbackIndex % fallbacks.length];
    fallbackIndex++;
    return reply;
}

// ===== DOM HELPERS =====
function addMessage(text, sender = 'bot') {
    const messages = document.getElementById('chat-messages');
    const msg = document.createElement('div');
    msg.className = `msg ${sender}`;

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = sender === 'bot' ? 'SM' : 'You';

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.innerHTML = text;

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
    const messages = document.getElementById('chat-messages');
    const typing = document.createElement('div');
    typing.className = 'msg bot';
    typing.id = 'typing-msg';

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = 'SM';

    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';

    typing.appendChild(avatar);
    typing.appendChild(indicator);
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
}

function removeTyping() {
    const el = document.getElementById('typing-msg');
    if (el) el.remove();
}

function sendMessage(text) {
    const input = text || document.getElementById('chat-input').value.trim();
    if (!input) return;

    addMessage(input, 'user');
    document.getElementById('chat-input').value = '';

    showTyping();
    setTimeout(() => {
        removeTyping();
        addMessage(getResponse(input), 'bot');
    }, 700 + Math.random() * 400);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('chat-toggle');
    const window_ = document.getElementById('chat-window');
    const closeBtn = document.getElementById('chat-close');
    const sendBtn = document.getElementById('chat-send');
    const input = document.getElementById('chat-input');
    const notif = document.querySelector('.chat-notif');

    // Open / close
    toggle.addEventListener('click', () => {
        const isOpen = window_.classList.toggle('open');
        toggle.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-comment-dots';
        if (notif) notif.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        window_.classList.remove('open');
        toggle.querySelector('i').className = 'fas fa-comment-dots';
    });

    // Send on button click
    sendBtn.addEventListener('click', () => sendMessage());

    // Send on Enter key
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Quick suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => sendMessage(btn.textContent));
    });

    // Welcome message after short delay
    setTimeout(() => {
        addMessage(`Hi there! 👋 I'm <strong>Sinawo's assistant</strong>. Ask me anything about her skills, projects, experience, or how to get in touch!`, 'bot');
    }, 400);
});
