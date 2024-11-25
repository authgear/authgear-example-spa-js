let authgearClient = null;

const configureClient = async () => {
    authgearClient = window.authgear.default;

    await authgearClient.configure({
        endpoint: "<YOUR_AUTHGEAR_PROJECT_DOMAIN>",
        clientID: "<YOUR_AUTHGEAR_APP_CLIENT_ID>",
        sessionType: "refresh_token",
    }).then(
        () => {
            console.log("Authgear client successfully configured!");
        },
        (err) => {
            console.log("Failed to configure Authgear");
        }
    );
};

const login = async () => {
    await authgearClient
        .startAuthentication({
            redirectURI: "http://localhost:3000/",
            prompt: "login",
        })
        .then(
            () => {
                console.log("Logged in!");
            },
            (err) => {
                console.log("Log in failed", err);
            }
        );
};

const logout = async () => {
    await authgearClient
    .logout({
      redirectURI: window.location.origin,
    })
    .then(
      () => {
        console.log("Logged out successfully");
      },
      (err) => {
        console.log("Failed to logout");
      }
    );

    updateUI();
};

window.onload = async () => {
    await configureClient();
    updateUI();

    const query = window.location.search;
    if (query.includes("code=")) {
        await authgearClient.finishAuthentication();
        updateUI();

        window.history.replaceState({}, document.title, "/");
    }
}

const updateUI = async () => {
    const isAuthenticated = authgearClient.sessionState === "AUTHENTICATED";

    document.getElementById("btn-logout").disabled = !isAuthenticated;
    document.getElementById("btn-login").disabled = isAuthenticated;
};