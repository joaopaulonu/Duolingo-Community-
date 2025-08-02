// Seleciona os elementos do DOM
const groupCardsContainer = document.getElementById('group-cards-container');
const challengeCardsContainer = document.getElementById('challenge-cards-container');
const addGroupButton = document.getElementById('add-group-button');
const addChallengeButton = document.getElementById('add-challenge-button');
const confirmationModal = document.getElementById('confirmation-modal');
const modalMessage = document.getElementById('modal-message');
const closeButton = document.querySelector('.close-button');

let groupCounter = 1;
let challengeCounter = 1;

// Função para criar um novo cartão de grupo
function createGroupCard() {
    const groupName = `Grupo de Espanhol ${groupCounter}`;
    const members = Math.floor(Math.random() * 100) + 5; // Membros entre 5 e 104
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h4>${groupName}</h4>
        <p>${members} membros</p>
        <button class="join-button">Entrar</button>
    `;
    groupCardsContainer.appendChild(card);
    groupCounter++;
}

// Função para criar um novo cartão de desafio
function createChallengeCard() {
    const challengeName = `Desafio Semanal ${challengeCounter}`;
    const prize = `50 Lingots e um distintivo`;

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h4>${challengeName}</h4>
        <p>Prêmio: ${prize}</p>
        <button class="participate-button">Participar</button>
    `;
    challengeCardsContainer.appendChild(card);
    challengeCounter++;
}

// Função para exibir o modal de confirmação
function showConfirmationModal(message) {
    modalMessage.textContent = message;
    confirmationModal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    confirmationModal.style.display = 'none';
}

// Inicializa a página com alguns cartões
document.addEventListener('DOMContentLoaded', () => {
    createGroupCard();
    createGroupCard();
    createChallengeCard();
    createChallengeCard();
});

// Adiciona eventos de clique aos botões de adicionar
addGroupButton.addEventListener('click', createGroupCard);
addChallengeButton.addEventListener('click', createChallengeCard);

// Adiciona eventos de clique para os botões de ação (Entrar/Participar)
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('join-button')) {
        const groupName = event.target.parentNode.querySelector('h4').textContent;
        showConfirmationModal(`Você entrou no grupo "${groupName}" com sucesso!`);
    } else if (event.target.classList.contains('participate-button')) {
        const challengeName = event.target.parentNode.querySelector('h4').textContent;
        showConfirmationModal(`Você se inscreveu no "${challengeName}"! Boa sorte!`);
    }
});

// Adiciona evento de clique para fechar o modal
closeButton.addEventListener('click', closeModal);

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === confirmationModal) {
        closeModal();
    }
});
