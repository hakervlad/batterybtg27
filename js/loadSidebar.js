// Funktion, um die Fächer und Aufgaben in die Sidebar zu laden
function loadSidebar() {
    const fachList = document.getElementById('fachList');
    
    data.subjects.forEach((subject, index) => {
        // Fach-Div erstellen
        const fachDiv = document.createElement('div');
        fachDiv.classList.add('fach');
        
        // Fach Button erstellen
        const fachButton = document.createElement('button');
        fachButton.classList.add('fach-button');
        fachButton.textContent = subject.name.replaceAll('_', ' ');
        fachButton.onclick = () => toggleDropdown(`fach-content-${index}`);
        
        // Fach Inhalt (Assignments) erstellen
        const fachContentDiv = document.createElement('div');
        fachContentDiv.id = `fach-content-${index}`;
        fachContentDiv.classList.add('fach-content');
        
        // Assignments hinzufügen
        subject.assignments.forEach(assignment => {
            const assignmentLink = document.createElement('a');
            assignmentLink.href = `assignment-student.html?subject=${subject.name}&assignment=${assignment.name}`;
            assignmentLink.textContent = assignment.name.replaceAll('_', ' ');
            fachContentDiv.appendChild(assignmentLink);
        });
        
        // Fach Button und Inhalt hinzufügen
        fachDiv.appendChild(fachButton);
        fachDiv.appendChild(fachContentDiv);
        
        // Fach zum Fachlist-Container hinzufügen
        fachList.appendChild(fachDiv);
    });
}