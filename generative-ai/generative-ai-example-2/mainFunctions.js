function navigateTo(indexModifier, currentSection, animationOut, animationIn) {
    let sections = document.querySelectorAll('section');
    let newIndex = currentSection + indexModifier;

    sections[currentSection].classList.add(animationOut);
    sections[currentSection].addEventListener('animationend', function onAnimationEnd() {
        sections[currentSection].classList.remove(animationOut);
        sections[currentSection].classList.add('hide-section');
        sections[currentSection].removeEventListener('animationend', onAnimationEnd);
    });

    sections[newIndex].classList.remove('hide-section');
    sections[newIndex].classList.add(animationIn);
    sections[newIndex].addEventListener('animationend', function onAnimationEnd() {
        sections[newIndex].classList.remove(animationIn);
        sections[newIndex].removeEventListener('animationend', onAnimationEnd);
    });
}

