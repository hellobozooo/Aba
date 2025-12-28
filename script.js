// Criar estrelas no fundo
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 50;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        starsContainer.appendChild(star);
    }
}

// Criar confetes
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const numberOfConfetti = 100;
    
    // Limpar confetes anteriores
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        confettiContainer.appendChild(confetti);
    }
    
    // Remover confetes após a animação
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Efeito de digitação para a idade
function typeAge() {
    const ageElement = document.getElementById('age');
    // Você pode alterar este número para a idade do seu pai
    const age = 59; // ALTERE AQUI A IDADE DO SEU PAI
    let currentNumber = 0;
    const increment = age / 30; // Animação mais suave
    
    const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= age) {
            ageElement.textContent = age;
            clearInterval(interval);
        } else {
            ageElement.textContent = Math.floor(currentNumber);
        }
    }, 30);
}

// Mensagem personalizada (você pode editar)
function personalizeMessage() {
    const messages = [
        "Hoje é um dia muito especial!",
        "Você completa mais um ano de vida cheio de sabedoria, amor e dedicação.",
        "Que este novo ciclo seja repleto de alegrias, saúde e momentos inesquecíveis!",
        "Você é um exemplo de força, bondade e determinação.",
        "Que todos os seus sonhos se realizem!",
        "Com muito amor e carinho, feliz aniversário! 🎂"
    ];
    
    // Você pode personalizar a mensagem aqui
    // Por enquanto, mantém a mensagem padrão do HTML
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    typeAge();
    
    // Botão de celebrar
    const celebrateBtn = document.getElementById('celebrateBtn');
    celebrateBtn.addEventListener('click', () => {
        createConfetti();
        
        // Efeito de vibração no card
        const card = document.querySelector('.card');
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'shake 0.5s';
        }, 10);
        
        // Adicionar animação shake
        if (!document.querySelector('#shakeStyle')) {
            const style = document.createElement('style');
            style.id = 'shakeStyle';
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }
            `;
            document.head.appendChild(style);
        }
    });
    
    // Criar confetes automaticamente após 2 segundos
    setTimeout(() => {
        createConfetti();
    }, 2000);
    
    // Criar confetes periodicamente
    setInterval(() => {
        if (Math.random() > 0.7) {
            createConfetti();
        }
    }, 8000);
});

