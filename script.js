// Database and Session Management
const DB_KEY = 'nextme_users';
const SESSION_KEY = 'nextme_current_user';

const goalDataMap = {
    "Dasturchi bo'lish": {
        quote: "\"Kelajakdagi o'zingiz bugungi kichik, jasur qadamlar bilan quriladi.\"",
        aiInsight: "E'tiboringiz tushlikdan oldin yuqori bo'ladi — rejadagi dasturlash vazifasini 11:00 da bajarishga harakat qiling.",
        bannerTitle: "Kunning asosiy qismi",
        bannerSubtitle: "Dasturlash darslari va amaliyot",
        tasks: [
            { id: 1, title: 'JavaScript asoslarini o\'qish', time: '30 daqiqa', category: 'Kodlash', icon: 'fa-code', completed: false },
            { id: 2, title: 'LeetCode masalasini ishlash', time: '20 daqiqa', category: 'Algoritm', icon: 'fa-laptop-code', completed: false },
            { id: 3, title: 'IT yangiliklarini o\'qish', time: '10 daqiqa', category: 'Kuzatuv', icon: 'fa-newspaper', completed: false }
        ],
        subgoals: [
            { id: 1, title: 'HTML va CSS to\'liq o\'rganish', progress: 'Yaxshi ketmoqda', percent: 80, icon: 'fa-html5' },
            { id: 2, title: 'JavaScript asoslari', progress: '12 / 20 dars yakunlandi', percent: 60, icon: 'fa-js' },
            { id: 3, title: 'React JS loyiha yaratish', progress: 'Jarayonda', percent: 15, icon: 'fa-react' }
        ],
        mentorResponse: "Dasturlash – bu sabr va amaliyot. Ko'proq kod yozing va xato qilishdan qo'rqmang! Bugun qanday dasturlash muammosiga duch keldingiz?",
        roadmapSteps: ["Poydevor", "Quruvchi", "Tajribali", "Ishga tushish"],
        roadmapHint: "Keyingi bosqichni ochish uchun yana 2 ta loyihani tugating",
        growthData: [
            { icon: 'fa-book-open', color: 'purple', value: '38', title: 'Darslar', sub: 'bu hafta +7' },
            { icon: 'fa-shapes', color: 'blue', value: '6', title: 'Loyihalar', sub: '2 ta jarayonda' },
            { icon: 'fa-bug', color: 'green', value: '24', title: 'Xatolar (Bug)', sub: 'hal qilindi' },
            { icon: 'fa-laptop-code', color: 'orange', value: '14s', title: 'Amaliyot', sub: '12 kunlik seriya' }
        ]
    },
    "Dunyoni sayohat qilish": {
        quote: "\"Dunyo - bu kitob, va sayohat qilmaydiganlar faqat bitta sahifani o'qiydilar.\"",
        aiInsight: "Dam olish kuningizda ob-havo ajoyib bo'lishi kutilmoqda — sayohat rejasini tuzish uchun ayni muddao!",
        bannerTitle: "Sayohat tayyorgarligi",
        bannerSubtitle: "Hujjatlar va marshrutni tasdiqlash",
        tasks: [
            { id: 1, title: 'Yangi davlat madaniyatini o\'rganish', time: '20 daqiqa', category: 'Qiziqish', icon: 'fa-earth-americas', completed: false },
            { id: 2, title: 'Sayohat uchun mablag\' yig\'ish', time: 'Doimiy', category: 'Moliya', icon: 'fa-piggy-bank', completed: false },
            { id: 3, title: 'Viza talablarini ko\'rib chiqish', time: '15 daqiqa', category: 'Hujjatlar', icon: 'fa-passport', completed: false }
        ],
        subgoals: [
            { id: 1, title: 'Yevropa sayohati rejasi', progress: 'Rejalashtirilmoqda', percent: 30, icon: 'fa-map-location-dot' },
            { id: 2, title: 'Til to\'siqlarini yengish', progress: '50%', percent: 50, icon: 'fa-language' }
        ],
        mentorResponse: "Sayohat insonning dunyoqarashini kengaytiradi. Rejalaringizni puxta qiling. Qaysi davlatni birinchi ko'rmoqchisiz?",
        roadmapSteps: ["Niyat", "Rejalashtirish", "Byudjet yig'ish", "Parvoz!"],
        roadmapHint: "Viza hujjatlarini topshirgach 'Parvoz' bosqichi ochiladi",
        growthData: [
            { icon: 'fa-map', color: 'purple', value: '4', title: 'Marshrut', sub: 'o\'rganilgan davlatlar' },
            { icon: 'fa-wallet', color: 'blue', value: '35%', title: 'Jamg\'arma', sub: 'maqsadga erishildi' },
            { icon: 'fa-language', color: 'green', value: '12', title: 'Chet tili', sub: 'yangi so\'zlar o\'rganildi' },
            { icon: 'fa-plane-departure', color: 'orange', value: '1', title: 'Chipta', sub: 'band qilingan' }
        ]
    },
    "Mukammal Ingliz tili": {
        quote: "\"Yangi til o'rganish - yangi ruhga ega bo'lish demakdir.\"",
        aiInsight: "Kechqurun uxlashdan oldin qisqa inglizcha podkast eshitish xotirangizni kuchaytiradi.",
        bannerTitle: "Til amaliyoti",
        bannerSubtitle: "Bugungi lug'at va grammatika",
        tasks: [
            { id: 1, title: 'Yangi 10 ta so\'z yodlash', time: '15 daqiqa', category: 'Lug\'at', icon: 'fa-book-font', completed: false },
            { id: 2, title: 'Listening mashqi (Podcast)', time: '25 daqiqa', category: 'Eshitish', icon: 'fa-headphones', completed: false },
            { id: 3, title: 'Speaking shadowing', time: '10 daqiqa', category: 'Gapirish', icon: 'fa-microphone', completed: false }
        ],
        subgoals: [
            { id: 1, title: 'B1 darajaga chiqish', progress: '70% yakunlandi', percent: 70, icon: 'fa-language' },
            { id: 2, title: 'IELTS ga tayyorgarlik', progress: 'Boshlanmagan', percent: 5, icon: 'fa-certificate' }
        ],
        mentorResponse: "Til o'rganishda har kunlik amaliyot muhim. Bugun yangi o'rgangan so'zlaringizdan gaplar tuzib ko'ring! Yordam kerakmi?",
        roadmapSteps: ["Alifbo/O'qish", "Grammatika", "Muloqot", "Erkin so'zlashish"],
        roadmapHint: "Muloqot bosqichiga o'tish uchun 100 ta yangi so'z yodlang",
        growthData: [
            { icon: 'fa-spell-check', color: 'purple', value: '450', title: 'Lug\'at', sub: 'yodlangan so\'zlar' },
            { icon: 'fa-ear-listen', color: 'blue', value: '15s', title: 'Tinglash', sub: 'umumiy soat' },
            { icon: 'fa-comments', color: 'green', value: '8', title: 'Suhbat', sub: 'speaking amaliyoti' },
            { icon: 'fa-pen-clip', color: 'orange', value: '3', title: 'Esselar', sub: 'yozilgan insholar' }
        ]
    },
    "Baxtli oila": {
        quote: "\"Oila - hayotdagi eng chiroyli va qadrli narsa.\"",
        aiInsight: "Bugun kechki ovqatni butun oila bilan birga qilish ajoyib suhbatlarga yo'l ochadi.",
        bannerTitle: "Oilaviy vaqt",
        bannerSubtitle: "Bugun yaqinlaringiz uchun vaqt ajrating",
        tasks: [
            { id: 1, title: 'Oila a\'zolariga qo\'ng\'iroq qilish', time: '10 daqiqa', category: 'Muloqot', icon: 'fa-phone', completed: false },
            { id: 2, title: 'Bolalar bilan o\'ynash', time: '30 daqiqa', category: 'Farzand', icon: 'fa-child-reaching', completed: false },
            { id: 3, title: 'Kechki ovqat tayyorlashga yordam', time: '20 daqiqa', category: 'Ro\'zg\'or', icon: 'fa-utensils', completed: false }
        ],
        subgoals: [
            { id: 1, title: 'Dam olish kunini birga o\'tkazish', progress: 'Rejalashtirilmoqda', percent: 60, icon: 'fa-calendar-day' },
            { id: 2, title: 'Oilaviy byudjet tahlili', progress: 'Yakunlandi', percent: 100, icon: 'fa-coins' }
        ],
        mentorResponse: "Oilaga e'tibor har qanday ishdanda muhimroq. Bugun ularga nima yaxshilik qildingiz?",
        roadmapSteps: ["Bir-birini eshitish", "Vaqt ajratish", "Umumiy mashg'ulotlar", "Mustahkam rishtalar"],
        roadmapHint: "Hafta oxirida birgalikda sayr qilish rejasi kutilmoqda",
        growthData: [
            { icon: 'fa-heart', color: 'purple', value: '25s', title: 'Birga vaqt', sub: 'bu hafta' },
            { icon: 'fa-face-smile', color: 'blue', value: '100%', title: 'Kayfiyat', sub: 'ijobiy' },
            { icon: 'fa-gift', color: 'green', value: '2', title: 'Surprizlar', sub: 'yaqinlar uchun' },
            { icon: 'fa-house-chimney', color: 'orange', value: 'Ajoyib', title: 'Muhit', sub: 'qulay va tinch' }
        ]
    },
    "Boshqa": {
        quote: "\"Buyuk maqsadlar oldiga faqat izchil harakat bilan yetib boriladi.\"",
        aiInsight: "Bugungi harakatlaringiz ertangi kuningizni belgilaydi. Boshlagan ishingizni oxiriga yetkazing.",
        bannerTitle: "Asosiy maqsad sari",
        bannerSubtitle: "Kunlik amallar yig'indisi",
        tasks: [
            { id: 1, title: 'Maqsad sari ilk qadam', time: '15 daqiqa', category: 'Harakat', icon: 'fa-person-walking', completed: false },
            { id: 2, title: 'Maqsad haqida o\'qish izlanish', time: '20 daqiqa', category: 'Izlanish', icon: 'fa-magnifying-glass', completed: false },
            { id: 3, title: 'Natijalarni qayd etish', time: '5 daqiqa', category: 'Tahlil', icon: 'fa-pen-to-square', completed: false }
        ],
        subgoals: [
            { id: 1, title: 'Asosiy rejani shakllantirish', progress: 'Boshlanish', percent: 20, icon: 'fa-list-check' },
            { id: 2, title: 'Kerakli resurslarni jamlash', progress: 'Jarayonda', percent: 10, icon: 'fa-box-open' }
        ],
        mentorResponse: "O'z maqsadingizni o'zingiz belgilaganingiz ajoyib! Siz albatta bunga erishasiz. Izchillikni yo'qotmang. Bugun qanday yordam bera olaman?",
        roadmapSteps: ["Rejalashtirish", "Boshlanish", "Barqarorlik", "Natija"],
        roadmapHint: "Asosiy vazifalarni bajarish orqali keyingi bosqichga o'ting",
        growthData: [
            { icon: 'fa-bolt', color: 'purple', value: '7', title: 'Harakatlar', sub: 'bajarilgan ishlar' },
            { icon: 'fa-chart-line', color: 'blue', value: '15%', title: 'O\'sish', sub: 'oylik progress' },
            { icon: 'fa-brain', color: 'green', value: '3s', title: 'Fikrlash', sub: 'tahlil vaqti' },
            { icon: 'fa-check-double', color: 'orange', value: '5', title: 'Kichik yutuqlar', sub: 'qayd etildi' }
        ]
    }
};

function getUsers() {
    return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
}

function saveUsers(users) {
    localStorage.setItem(DB_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    const username = localStorage.getItem(SESSION_KEY);
    if (!username) return null;
    const users = getUsers();
    return users.find(u => u.username === username);
}

function saveCurrentUser(userObj) {
    const users = getUsers();
    const index = users.findIndex(u => u.username === userObj.username);
    if (index !== -1) {
        users[index] = userObj;
    } else {
        users.push(userObj);
    }
    saveUsers(users);
}

// ----------------------------------------------------
// Navigation System
// ----------------------------------------------------
function navigate(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
        target.classList.add('active');
    }

    const bottomNav = document.getElementById('bottom-nav');
    if (target && target.classList.contains('with-nav')) {
        bottomNav.style.display = 'flex';
        updateNavIcons(screenId);
    } else {
        bottomNav.style.display = 'none';
    }

    if (screenId === 'home') renderHome();
    else if (screenId === 'goals') renderGoals();
    else if (screenId === 'profile') renderProfile();
    else if (screenId === 'mentor') renderMentor();
    else if (screenId === 'progress') renderProgress();
}

function updateNavIcons(activeId) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (activeId === 'home') document.querySelectorAll('.nav-item')[0].classList.add('active');
    if (activeId === 'goals') document.querySelectorAll('.nav-item')[1].classList.add('active');
    if (activeId === 'mentor') document.querySelectorAll('.nav-item')[2].classList.add('active');
    if (activeId === 'progress') document.querySelectorAll('.nav-item')[3].classList.add('active');
}

// ----------------------------------------------------
// Auth Logic
// ----------------------------------------------------
function handleRegistration(e) {
    e.preventDefault();
    const email = document.getElementById('reg-email').value.trim();
    let username = document.getElementById('reg-username').value.trim().toLowerCase();
    if(username.startsWith('@')) username = username.substring(1);
    
    const password = document.getElementById('reg-password').value;
    const errorEl = document.getElementById('reg-error');

    const users = getUsers();
    if (users.find(u => u.username === username)) {
        errorEl.textContent = 'Bu username band! Boshqa username tanlang.';
        return;
    }
    errorEl.textContent = '';

    const newUser = {
        username, email, password,
        name: '', surname: '',
        goal: '',
        tasks: [],
        subgoals: []
    };
    users.push(newUser);
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, username);
    navigate('goal-setup');
}

function handleLogin(e) {
    e.preventDefault();
    let username = document.getElementById('log-username').value.trim().toLowerCase();
    if(username.startsWith('@')) username = username.substring(1);
    
    const password = document.getElementById('log-password').value;
    const errorEl = document.getElementById('log-error');

    const users = getUsers();
    if (users.length === 0) {
        errorEl.textContent = 'Bazada hech qanday foydalanuvchi yo\'q. Iltimos, avval ro\'yxatdan o\'ting!';
        return;
    }

    const user = users.find(u => u.username === username);

    if (!user) {
        errorEl.textContent = 'Username topilmadi!';
        return;
    }
    if (user.password !== password) {
        errorEl.textContent = 'Parol xato!';
        return;
    }

    errorEl.textContent = '';
    localStorage.setItem(SESSION_KEY, username);
    navigate('home');
}

function logout() {
    localStorage.removeItem(SESSION_KEY);
    navigate('login');
}

document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
});

// ----------------------------------------------------
// Profile Logic
// ----------------------------------------------------
function renderProfile() {
    const user = getCurrentUser();
    if (!user) return navigate('login');
    document.getElementById('prof-goal').value = user.goal || 'Belgilangan maqsad yo\'q';
    document.getElementById('prof-name').value = user.name || '';
    document.getElementById('prof-surname').value = user.surname || '';
    document.getElementById('prof-username').value = user.username || '';
    document.getElementById('prof-msg').textContent = '';
}

function updateProfile(e) {
    e.preventDefault();
    const user = getCurrentUser();
    const newName = document.getElementById('prof-name').value.trim();
    const newSurname = document.getElementById('prof-surname').value.trim();
    let newUsername = document.getElementById('prof-username').value.trim().toLowerCase();
    if(newUsername.startsWith('@')) newUsername = newUsername.substring(1);
    
    const msgEl = document.getElementById('prof-msg');

    if (newUsername !== user.username) {
        const users = getUsers();
        if (users.find(u => u.username === newUsername)) {
            msgEl.style.color = '#EF4444';
            msgEl.textContent = 'Bu username band!';
            return;
        }
    }

    const users = getUsers();
    const userIndex = users.findIndex(u => u.username === user.username);
    users[userIndex].name = newName;
    users[userIndex].surname = newSurname;
    users[userIndex].username = newUsername;
    saveUsers(users);
    
    localStorage.setItem(SESSION_KEY, newUsername);
    
    msgEl.style.color = '#10B981';
    msgEl.textContent = 'Ma\'lumotlar muvaffaqiyatli saqlandi!';
}

// ----------------------------------------------------
// Goal Setup Logic
// ----------------------------------------------------
let tempSelectedGoal = 'Dasturchi bo\'lish';

function selectGoal(element, goalName) {
    document.querySelectorAll('.focus-card').forEach(card => {
        card.classList.remove('active');
        card.querySelector('.check-circle').innerHTML = '';
    });
    element.classList.add('active');
    element.querySelector('.check-circle').innerHTML = '<i class="fa-solid fa-check"></i>';
    tempSelectedGoal = goalName;
    document.getElementById('custom-goal').value = '';
}

function saveGoalAndGoHome() {
    const customGoal = document.getElementById('custom-goal').value;
    const user = getCurrentUser();
    if (user) {
        user.goal = customGoal.trim() !== '' ? customGoal : tempSelectedGoal;
        
        const matchedGoalData = goalDataMap[user.goal] || goalDataMap["Boshqa"];
        user.tasks = JSON.parse(JSON.stringify(matchedGoalData.tasks));
        user.subgoals = JSON.parse(JSON.stringify(matchedGoalData.subgoals));
        
        saveCurrentUser(user);
    }
    navigate('home');
}

// ----------------------------------------------------
// Home Logic
// ----------------------------------------------------
function renderHome() {
    const user = getCurrentUser();
    if (!user) return navigate('login');
    const displayName = user.name ? user.name : (user.username || 'Do\'stim');
    document.getElementById('greeting-name').textContent = `Assalomu alaykum, ${displayName}!`;
    
    const matchedGoalData = goalDataMap[user.goal] || goalDataMap["Boshqa"];
    
    // AUTO-FIX: Agar xotirada eski "Boshqa" vazifalari qolib ketgan bo'lsa, uni tanlangan maqsadga avtomatik yangilash
    if (user.tasks.length > 0 && matchedGoalData.tasks.length > 0) {
        if (user.tasks[0].title !== matchedGoalData.tasks[0].title) {
            user.tasks = JSON.parse(JSON.stringify(matchedGoalData.tasks));
            user.subgoals = JSON.parse(JSON.stringify(matchedGoalData.subgoals));
            saveCurrentUser(user);
        }
    }
    
    const daysArr = ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'];
    const now = new Date();
    const dayNameStr = daysArr[now.getDay()];
    
    const dateDisp = document.getElementById('current-date-display');
    if (dateDisp) dateDisp.textContent = `${displayName} · ${dayNameStr}`;

    const quoteEl = document.getElementById('home-quote');
    if (quoteEl) quoteEl.textContent = matchedGoalData.quote;
    
    const aiInsightEl = document.getElementById('home-ai-insight');
    if (aiInsightEl) aiInsightEl.textContent = matchedGoalData.aiInsight;

    const weekDaysContainer = document.getElementById('week-days-container');
    if (weekDaysContainer) {
        weekDaysContainer.innerHTML = '';
        for(let i=0; i<5; i++) {
            let d = new Date();
            d.setDate(now.getDate() - 2 + i);
            const isToday = (i === 2) ? 'active' : '';
            const dayNameShort = daysArr[d.getDay()].substring(0, 2);
            weekDaysContainer.innerHTML += `<div class="day ${isToday}"><span class="d-name">${dayNameShort}</span><span class="d-num">${d.getDate()}</span></div>`;
        }
    }

    const pbTitle = document.getElementById('pb-title');
    const pbSub = document.getElementById('pb-subtitle');
    if (pbTitle) pbTitle.textContent = matchedGoalData.bannerTitle;
    if (pbSub) pbSub.textContent = matchedGoalData.bannerSubtitle;

    renderTasks();
}

function renderTasks() {
    const user = getCurrentUser();
    if (!user) return;
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    let completedCount = 0;
    user.tasks.forEach(task => {
        if(task.completed) completedCount++;
        const taskEl = document.createElement('div');
        taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskEl.onclick = () => toggleTask(task.id);
        taskEl.innerHTML = `
            <div class="task-icon"><i class="fa-solid ${task.icon}"></i></div>
            <div class="task-info">
                <h5>${task.title}</h5>
                <p>${task.time} · ${task.category}</p>
            </div>
            <div class="check-circle">${task.completed ? '<i class="fa-solid fa-check"></i>' : ''}</div>
        `;
        taskList.appendChild(taskEl);
    });
    
    const total = user.tasks.length;
    document.getElementById('tasks-completed-text').textContent = total === 0 ? "Vazifalar yo'q" : `${completedCount} / ${total} bajarildi`;
    
    const overallPercent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    const pbPercent = document.getElementById('pb-percent');
    const pbFill = document.getElementById('pb-fill');
    const pbLeft = document.getElementById('pb-left');
    
    if (pbPercent) pbPercent.textContent = `${overallPercent}%`;
    if (pbFill) pbFill.style.width = `${overallPercent}%`;
    if (pbLeft) pbLeft.textContent = `${total - completedCount} VAZIFA QOLDI`;
}

function toggleTask(id) {
    const user = getCurrentUser();
    if (!user) return;
    const task = user.tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveCurrentUser(user);
        renderTasks();
        renderProgress(); // Update progress screen as well if it's open
    }
}

// ----------------------------------------------------
// Goals Screen
// ----------------------------------------------------
function renderGoals() {
    const user = getCurrentUser();
    if (!user) return;
    
    const mainGoalTitle = document.getElementById('goals-main-title');
    if (mainGoalTitle) {
        mainGoalTitle.textContent = user.goal || 'Belgilangan maqsad yo\'q';
    }

    let completedCount = 0;
    user.tasks.forEach(t => { if(t.completed) completedCount++ });
    let overallPercent = user.tasks.length > 0 ? Math.round((completedCount / user.tasks.length) * 100) : 0;
    
    document.getElementById('goals-main-progress-text').textContent = `Jarayon: ${overallPercent}%`;
    document.getElementById('goals-main-bar').style.width = `${overallPercent}%`;

    const subgoalsWrapper = document.getElementById('sub-goals-wrapper');
    subgoalsWrapper.innerHTML = '';

    user.subgoals.forEach(sg => {
        const sgEl = document.createElement('div');
        sgEl.className = 'goal-card sub-goal';
        sgEl.innerHTML = `
            <div class="goal-icon"><i class="fa-solid ${sg.icon}"></i></div>
            <div class="goal-info">
                <h4>${sg.title}</h4>
                <p>${sg.progress}</p>
            </div>
            <div class="goal-percent">${sg.percent}%</div>
        `;
        subgoalsWrapper.appendChild(sgEl);
    });
}

// ----------------------------------------------------
// Mentor Logic
// ----------------------------------------------------
function renderMentor() {
    const user = getCurrentUser();
    if (!user) return;
    const chatContainer = document.getElementById('chat-container');
    
    if (chatContainer.children.length === 0) {
        const matchedGoalData = goalDataMap[user.goal] || goalDataMap["Boshqa"];
        chatContainer.innerHTML = `
            <div class="chat-message ai-message">
                <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
                <div class="msg-bubble">
                    Salom, <b>${user.name || user.username}</b>! ${matchedGoalData.mentorResponse}
                </div>
            </div>
        `;
    }
}

function sendMentorMessage() {
    const inputField = document.getElementById('mentor-input');
    const messageText = inputField.value.trim();
    if (messageText === '') return;
    
    const chatContainer = document.getElementById('chat-container');
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user-message';
    userMsg.innerHTML = `<div class="msg-bubble">${messageText}</div>`;
    chatContainer.appendChild(userMsg);
    
    inputField.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'chat-message ai-message';
        aiMsg.innerHTML = `
            <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="msg-bubble">
                Ajoyib! Qadamma-qadam ketayotganingiz menga juda yoqyapti. Maqsadingiz sari intilishda davom eting!
            </div>
        `;
        chatContainer.appendChild(aiMsg);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

function goToMentorFromInsight() {
    const user = getCurrentUser();
    if (!user) return;
    
    navigate('mentor');
    
    const matchedGoalData = goalDataMap[user.goal] || goalDataMap["Boshqa"];
    const chatContainer = document.getElementById('chat-container');
    
    const allBubbles = chatContainer.querySelectorAll('.msg-bubble');
    let alreadyExists = false;
    allBubbles.forEach(bubble => {
        if (bubble.textContent.includes("Bosh sahifadagi maslahatimga qiziqdingiz")) {
            alreadyExists = true;
        }
    });
    
    if (!alreadyExists) {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'chat-message ai-message';
        aiMsg.innerHTML = `
            <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="msg-bubble" style="background: #E0E7FF;">
                Bosh sahifadagi maslahatimga qiziqdingiz:<br><br>
                <i style="color: #4F46E5;">"${matchedGoalData.aiInsight}"</i><br><br>
                Shu bo'yicha yana qanday yordam bera olaman?
            </div>
        `;
        chatContainer.appendChild(aiMsg);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}


// ----------------------------------------------------
// Progress Logic
// ----------------------------------------------------
function renderProgress() {
    const user = getCurrentUser();
    if (!user) return;
    
    const matchedGoalData = goalDataMap[user.goal] || goalDataMap["Boshqa"];
    
    let completedCount = 0;
    user.tasks.forEach(t => { if(t.completed) completedCount++ });
    let overallPercent = user.tasks.length > 0 ? Math.round((completedCount / user.tasks.length) * 100) : 0;
    
    const mpScoreH1 = document.getElementById('progress-main-score');
    const mpBarFill = document.getElementById('progress-main-bar');
    const mpMsg = document.getElementById('progress-main-msg');
    
    if (mpScoreH1) mpScoreH1.textContent = `${overallPercent}%`;
    if (mpBarFill) mpBarFill.style.width = `${overallPercent}%`;
    if (mpMsg) mpMsg.textContent = overallPercent === 100 ? "Ajoyib! Barcha vazifalar bajarildi!" : "Harakatni davom ettiring!";
    
    const roadmapContainer = document.getElementById('roadmap-container');
    const roadmapHint = document.getElementById('roadmap-hint');
    const roadmapStepText = document.getElementById('roadmap-step-text');
    
    if (roadmapContainer) {
        roadmapContainer.innerHTML = '';
        const steps = matchedGoalData.roadmapSteps;
        let activeIdx = overallPercent < 30 ? 0 : (overallPercent < 60 ? 1 : (overallPercent < 90 ? 2 : 3));
        
        if(roadmapStepText) roadmapStepText.textContent = `${activeIdx + 1} / 4 BOSQICH`;
        if(roadmapHint) roadmapHint.textContent = matchedGoalData.roadmapHint;
        
        for(let i=0; i<4; i++) {
            let stepClass = "";
            let iconHtml = "";
            let lineHtml = (i < 3) ? `<div class="step-line ${i < activeIdx ? 'active' : ''}"></div>` : "";
            
            if (i < activeIdx) {
                stepClass = "completed";
                iconHtml = `<div class="step-icon"><i class="fa-solid fa-check"></i></div>`;
            } else if (i === activeIdx) {
                stepClass = "active";
                iconHtml = `<div class="step-icon">${i+1}</div>`;
            } else {
                stepClass = "locked";
                iconHtml = `<div class="step-icon"><i class="fa-solid fa-lock"></i></div>`;
            }
            
            roadmapContainer.innerHTML += `
                <div class="step ${stepClass}">
                    ${iconHtml}
                    <span>${steps[i]}</span>
                </div>
                ${lineHtml}
            `;
        }
    }
    
    const growthContainer = document.getElementById('growth-grid-container');
    if (growthContainer) {
        growthContainer.innerHTML = '';
        matchedGoalData.growthData.forEach(g => {
            growthContainer.innerHTML += `
                <div class="growth-card">
                    <div class="gc-header">
                        <div class="gc-icon ${g.color}"><i class="fa-solid ${g.icon}"></i></div>
                        <i class="fa-solid fa-arrow-trend-up trend"></i>
                    </div>
                    <h2>${g.value}</h2>
                    <h4>${g.title}</h4>
                    <p>${g.sub}</p>
                </div>
            `;
        });
    }
}

// ----------------------------------------------------
// Init
// ----------------------------------------------------
window.onload = () => {
    if(getCurrentUser()) {
        navigate('home');
    } else {
        navigate('onboarding');
    }
};
