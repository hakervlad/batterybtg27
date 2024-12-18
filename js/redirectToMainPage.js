// Funktion zur Weiterleitung auf die entsprechende Hauptseite basierend auf der Benutzerrolle
// Wird aufgerufen, wenn man auf das Logo klickt
function redirectToMainPage() {
    // Holt die Rolle des Benutzers aus dem SessionStorage
    const role = sessionStorage.getItem("role");

    // Wenn der Benutzer ein "student" ist, wird zur Studentenseite weitergeleitet
    if (role === "student") {
        window.location.href = "main-student.html";
    // Wenn der Benutzer ein "tutor" ist, wird zur Tutorenseite weitergeleitet
    } else if (role === "tutor") {
        window.location.href = "main-tutor.html";
    // Falls keine gültige Rolle gefunden wird (z.B. Benutzer ist nicht eingeloggt), wird zur Login-Seite weitergeleitet
    } else {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("role");
        
        window.location.href = "login.html";
    }
}
