// Local Auth System (No Firebase)
const STORAGE_KEYS = {
    IS_LOGGED_IN: 'isLoggedIn',
    CURRENT_USER: 'current_user',
    USERS_DB: 'users_db'
};

// Default Admin User
const DEFAULT_ADMIN = {
    id: 'admin-001',
    username: 'admin',
    surname: 'System',
    password: '123',
    email: 'admin@bigbos.com',
    phone: '000-000-0000',
    role: 'admin',
    createdAt: new Date().toISOString()
};

// Event System for Real-time updates (simulated)
const authEvents = new EventTarget();

function initAuthSystem() {
    let users = getUsers();
    if (users.length === 0) {
        users.push(DEFAULT_ADMIN);
        saveUsers(users);
        console.log("Admin seeded to LocalStorage");
    }
}

function getUsers() {
    const data = localStorage.getItem(STORAGE_KEYS.USERS_DB);
    return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(users));
    authEvents.dispatchEvent(new CustomEvent('users-updated'));
}

// Real-time listener for Admin panel
function initUserListener(onUpdate) {
    // Initial call
    onUpdate(getUsers());

    // Listen for changes
    const handler = () => {
        onUpdate(getUsers());
    };

    authEvents.addEventListener('users-updated', handler);

    // Return unsubscribe function
    return () => {
        authEvents.removeEventListener('users-updated', handler);
    };
}

async function registerUser(userData) {
    // Simulate network delay
    await new Promise(r => setTimeout(r, 500));

    const users = getUsers();

    // Check if username exists
    if (users.find(u => u.username === userData.username)) {
        throw new Error('Username already exists');
    }

    if (userData.username.toLowerCase() === 'admin') {
        throw new Error('Username "admin" is reserved');
    }

    const newUser = {
        id: 'user-' + Date.now(),
        ...userData,
        role: 'member',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    return newUser;
}

async function loginUser(usernameInput, password) {
    // Simulate network delay
    await new Promise(r => setTimeout(r, 500));

    const users = getUsers();

    const user = users.find(u =>
        (u.username === usernameInput || u.email === usernameInput) &&
        u.password === password
    );

    if (user) {
        saveSession(user);
        return user;
    }

    return null;
}

function saveSession(user) {
    localStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, 'true');
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    // Trigger UI update
    window.dispatchEvent(new Event('auth-changed'));
    updateAuthUI();
}

function getCurrentUser() {
    const userRaw = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return userRaw ? JSON.parse(userRaw) : null;
}

async function deleteUser(userId) {
    if (!userId) return;
    if (userId === DEFAULT_ADMIN.id) throw new Error("Cannot delete super admin");

    const users = getUsers();
    const newUsers = users.filter(u => u.id !== userId);

    if (users.length === newUsers.length) return; // No change

    saveUsers(newUsers);
}

function logout() {
    if (confirm('ต้องการออกจากระบบใช่หรือไม่?')) {
        localStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
        window.dispatchEvent(new Event('auth-changed'));
        window.location.href = 'index.html';
    }
}

function updateAuthUI() {
    const isLoggedIn = localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN);
    const currentUser = getCurrentUser();
    const authContainer = document.getElementById('auth-buttons');

    if (!authContainer) return;

    if (isLoggedIn === 'true' && currentUser) {
        const isAdmin = currentUser.role === 'admin';

        authContainer.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="hidden md:flex flex-col items-end mr-2">
                    <span class="text-sm font-bold text-primary dark:text-white">${currentUser.username} ${currentUser.surname || ''}</span>
                    <span class="text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-1 justify-end">
                        ${isAdmin ? '<span class="text-red-500 font-bold">ADMIN</span>' : 'Member'}
                    </span>
                </div>

                <div class="h-9 w-9 rounded-full ${isAdmin ? 'bg-red-600' : 'bg-primary'} text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    ${currentUser.username ? currentUser.username.charAt(0).toUpperCase() : '?'}
                </div>

                <div class="relative group">
                     <button class="flex items-center justify-center h-9 w-9 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                        <span class="material-symbols-outlined">more_vert</span>
                     </button>
                     <div class="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-gray-100 dark:border-neutral-700 py-1 hidden group-hover:block z-50">
                        ${isAdmin ? `
                        <a href="admin.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700 flex items-center gap-2">
                            <span class="material-symbols-outlined text-lg">admin_panel_settings</span>
                            จัดการระบบ
                        </a>
                        <div class="border-t border-gray-100 dark:border-neutral-700 my-1"></div>
                        ` : ''}
                        <button onclick="logout()" class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2">
                            <span class="material-symbols-outlined text-lg">logout</span>
                            ออกจากระบบ
                        </button>
                     </div>
                </div>
            </div>
        `;
    } else {
        // Reset to default login buttons
        authContainer.innerHTML = `
            <a href="login.html"
                class="hidden lg:flex items-center justify-center h-9 px-4 rounded-lg text-sm font-bold text-primary hover:bg-[#f2f2f2] dark:text-white dark:hover:bg-[#333] transition-colors">
                เข้าสู่ระบบ
            </a>
            <a href="register.html"
                class="flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 dark:bg-white dark:text-primary dark:hover:bg-gray-200 transition-colors shadow-sm">
                สมัครสมาชิก
            </a>
        `;
    }
}


// Initialize immediately
initAuthSystem();

// Make globally available
window.logout = logout;
window.authSystem = {
    initAuthSystem,
    initUserListener,
    registerUser,
    loginUser,
    getCurrentUser,
    updateAuthUI,
    deleteUser
};

export { initAuthSystem, initUserListener, registerUser, loginUser, getCurrentUser, updateAuthUI, logout, deleteUser };
