/* global entityClasses */

const entitySelect = document.getElementById('entity');
const actionSelect = document.getElementById('action');
const formContainer = document.getElementById('form-container');
const resultContainer = document.getElementById('result');
const entityTitle = document.getElementById('entity-title');

let currentEntity;

function renderEntity() {
    const EntityClass = window.entityClasses[entitySelect.value];
    currentEntity = new EntityClass();
    entityTitle.textContent = `${currentEntity.name} - ${actionSelect.value}`;
    formContainer.replaceChildren(currentEntity.createFields(actionSelect.value));
    resultContainer.replaceChildren();
}

function showResults(results) {
    resultContainer.replaceChildren();
    const valid = results.every(result => result.isValid);
    resultContainer.className = valid ? 'result success' : 'result error';

    const title = document.createElement('strong');
    title.textContent = valid ? 'Formulario válido' : 'Formulario con errores';
    resultContainer.appendChild(title);

    for (const result of results) {
        if (result.isValid) continue;
        const list = document.createElement('ul');
        for (const error of result.errors) {
            const item = document.createElement('li');
            item.textContent = `${result.fieldName}: ${error.message}`;
            list.appendChild(item);
        }
        resultContainer.appendChild(list);
    }
}

entitySelect.addEventListener('change', renderEntity);
actionSelect.addEventListener('change', renderEntity);

document.getElementById('validate').addEventListener('click', () => {
    showResults(currentEntity.validate(actionSelect.value));
});

document.getElementById('clear').addEventListener('click', () => {
    renderEntity();
});

renderEntity();
