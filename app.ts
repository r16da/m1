const toggleButton = document.getElementById('toogle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

if (toggleButton && skills) {
    toggleButton.addEventListener('click', () => {
        console.log('Button clicked');
        if (skills.style.display === 'none' || skills.style.display === '') {
            skills.style.display = 'block';
        } else {
            skills.style.display = 'none';
        }
    });
} else {
    console.error('Button or skills section not found');
}

