// Funktion zum Ausloggen des Benutzers
function logout() {
    // Entfernen des Benutzernamens und der Rolle aus dem SessionStorage
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("role");

    // Weiterleitung des Benutzers zur Login-Seite
    window.location.href = "login.html";
}
