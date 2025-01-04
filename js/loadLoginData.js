// Prüft, ob Login Daten in der Session vorhanden sind und zeigt sie an oder macht logout
// Wird ausgeführt, wenn die Seite vollständig geladen ist
window.onload = function() {
    // Holt den Benutzernamen und die Rolle aus dem SessionStorage
    const username = sessionStorage.getItem("username");
    const role = sessionStorage.getItem("role");

    // Prüft, ob sowohl der Benutzername als auch die Rolle vorhanden sind
    if (username && role !== null) {
        // Wenn Benutzerdaten vorhanden sind, wird der Benutzername und die Rolle angezeigt
        document.getElementById("username").textContent = username;
        document.getElementById("role").textContent = role;
    } else {
        // Falls keine Benutzerdaten vorhanden sind (z.B. bei nicht angemeldetem Benutzer), wird zur Login-Seite weitergeleitet
        window.location.href = "login.html";
    }
};
