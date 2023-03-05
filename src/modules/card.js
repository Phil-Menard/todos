// créer un module pour faire une fiche avec : title, description, dueDate and priority.

function createCard()  {

    const form = document.querySelector('form');
    const frame = document.createElement('div');
    const title = document.createElement('div');
    const description = document.createElement('div');
    const dueDate = document.createElement('div');
    const priority = document.createElement('div');

    frame.className = "card";
    title.textContent = form.elements.title.value;
    description.textContent = form.elements.description.value;
    dueDate.textContent = form.elements['due-date'].value;

    frame.append(title, description);
    return frame;
}

export default createCard;

