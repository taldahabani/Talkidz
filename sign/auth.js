let auth0Client = null;
let userProfile = null;

// Initialize the Auth0 client
const configureClient = async () => {
    const response = await fetch("/auth_config.json");
    const config = await response.json();

    auth0Client = await auth0.createAuth0Client({
        domain: config.domain,
        clientId: config.clientId
    });
};

// Update UI based on auth state
const updateUI = async () => {
    const isAuthenticated = await auth0Client.isAuthenticated();
    
    // Update login/logout buttons
    document.querySelector('.auth-login').classList.toggle('hidden', isAuthenticated);
    document.querySelector('.auth-logout').classList.toggle('hidden', !isAuthenticated);
    
    // Update user profile section
    if (isAuthenticated) {
        userProfile = await auth0Client.getUser();
        const profileSection = document.querySelector('.user-profile');
        
        if (profileSection) {
            profileSection.innerHTML = `
                <div class="flex items-center gap-3">
                    <img src="${userProfile.picture || '/api/placeholder/32/32'}" 
                         alt="Profile" 
                         class="w-8 h-8 rounded-full"/>
                    <span class="font-medium">${userProfile.name || userProfile.email}</span>
                </div>
            `;
            profileSection.classList.remove('hidden');
        }
    }
};

// Handle the authentication callback
const handleAuth = async () => {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
        await auth0Client.handleRedirectCallback();
        window.history.replaceState({}, document.title, "/");
        await updateUI();
    }
};

// Login function
const login = async () => {
    await auth0Client.loginWithRedirect({
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    });
};

// Logout function
const logout = () => {
    auth0Client.logout({
        logoutParams: {
            returnTo: window.location.origin
        }
    });
};

// Initialize auth when page loads
window.onload = async () => {
    await configureClient();
    await handleAuth();
    await updateUI();
};
