const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export async function register(userData) {
    const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData)
        }
    );
    return response.json();
}

export async function login(credentials) {
    const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials)
        }
    );
    return response.json();
}