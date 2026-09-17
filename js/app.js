document.addEventListener('DOMContentLoaded', () => {
    // Tab navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Initialize modules
    DeckBuilder.init();
    Battle.init();

    // AI Helper - Deck suggestion
    document.getElementById('ai-suggest-deck').addEventListener('click', () => {
        const heroId = document.getElementById('ai-hero-select').value;
        const playstyle = document.getElementById('ai-playstyle').value;
        if (!heroId) {
            DeckBuilder.showToast('Select a hero first!', 'error');
            return;
        }
        const result = AIHelper.suggestDeck(heroId, playstyle);
        if (!result) return;

        const container = document.getElementById('ai-deck-suggestion');
        container.innerHTML = `
            <h3 style="margin-bottom:0.5rem">${result.hero.icon} ${result.deckName}</h3>
            <p style="color:var(--accent-yellow);margin-bottom:0.5rem">${result.strategy}</p>
            <p style="color:var(--text-secondary);margin-bottom:0.75rem">Archetype: ${result.archetype} | ${result.totalCards} cards</p>
            <div style="max-height:300px;overflow-y:auto">
                ${result.cards.map(c => `
                    <div class="deck-entry" style="border-left:3px solid ${CARD_DATA.classColors[c.class] || '#666'}">
                        <span class="cost-badge" style="background:${CARD_DATA.classColors[c.class] || '#666'};color:#fff;font-size:0.7rem;width:20px;height:20px">${c.cost}</span>
                        <span class="card-name">${c.icon} ${c.name}</span>
                        <span class="card-count">${c.count > 1 ? '×' + c.count : ''}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" style="margin-top:0.75rem" onclick="loadSuggestedDeck('${heroId}','${playstyle}')">Load This Deck</button>
        `;
    });

    // AI Helper - Play suggestion
    document.getElementById('ai-suggest-play').addEventListener('click', () => {
        const state = {
            playerHP: parseInt(document.getElementById('ai-player-hp').value) || 20,
            enemyHP: parseInt(document.getElementById('ai-enemy-hp').value) || 20,
            resources: parseInt(document.getElementById('ai-resources').value) || 3,
            handSize: parseInt(document.getElementById('ai-hand-size').value) || 4,
            board: []
        };

        // Parse board inputs
        for (let i = 0; i < 5; i++) {
            const plantInput = document.querySelector(`.lane-input[data-lane="${i}"] .ai-plant-input`);
            const zombieInput = document.querySelector(`.lane-input[data-lane="${i}"] .ai-zombie-input`);
            state.board.push({
                plant: plantInput?.value || null,
                zombie: zombieInput?.value || null
            });
        }

        const suggestions = AIHelper.suggestPlay(state);
        const container = document.getElementById('ai-play-suggestion');
        container.innerHTML = suggestions.map(s => `
            <div style="margin-bottom:0.75rem;padding:0.5rem;background:${s.priority === 'high' ? 'rgba(239,68,68,0.1)' : s.priority === 'medium' ? 'rgba(251,191,36,0.1)' : 'rgba(34,197,94,0.1)'};border-radius:6px">
                <strong style="color:${s.priority === 'high' ? 'var(--accent-red)' : s.priority === 'medium' ? 'var(--accent-yellow)' : 'var(--accent-green)'}">${s.title}</strong>
                <p style="margin-top:0.25rem;color:var(--text-secondary);font-size:0.85rem">${s.text}</p>
            </div>
        `).join('');
    });

    // AI Helper - Card lookup
    document.getElementById('ai-card-search').addEventListener('input', (e) => {
        const query = e.target.value;
        const card = AIHelper.lookupCard(query);
        const container = document.getElementById('ai-card-info');
        if (!card) {
            container.innerHTML = '<p style="color:var(--text-secondary)">Type a card name to look it up...</p>';
            return;
        }

        const synergies = AIHelper.getCardSynergies(card.id);
        container.innerHTML = `
            <div style="display:flex;gap:1rem;align-items:flex-start">
                <div style="font-size:2rem">${card.icon}</div>
                <div>
                    <h3 style="margin-bottom:0.25rem">${card.name}</h3>
                    <p style="color:var(--text-secondary);font-size:0.85rem">${card.desc || card.description || 'No description'}</p>
                    ${card.cost !== undefined ? `<p>Cost: ${card.cost} | ${card.attack !== undefined ? `Attack: ${card.attack} | Health: ${card.health}` : 'Trick'}</p>` : ''}
                    ${card.classes ? `<p>Classes: ${card.classes.join(', ')}</p>` : ''}
                    ${card.traits ? `<p>Traits: ${card.traits.join(', ')}</p>` : ''}
                    ${synergies.length > 0 ? `
                        <p style="margin-top:0.5rem"><strong>Synergies:</strong></p>
                        ${synergies.map(s => `<p style="font-size:0.8rem;color:var(--accent-blue)">• ${s.name}: ${s.tip}</p>`).join('')}
                    ` : ''}
                </div>
            </div>
        `;
    });

    // Modal
    document.getElementById('modal-close').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });
});

// Global function for loading suggested deck
function loadSuggestedDeck(heroId, playstyle) {
    const result = AIHelper.suggestDeck(heroId, playstyle);
    if (!result) return;

    DeckBuilder.selectedHero = heroId;
    DeckBuilder.currentDeck = [];
    result.cards.forEach(card => {
        for (let i = 0; i < (card.count || 1); i++) {
            DeckBuilder.currentDeck.push({ ...card });
        }
    });
    DeckBuilder.renderHeroList();
    DeckBuilder.renderCardCollection();
    DeckBuilder.renderDeck();

    // Switch to deck builder tab
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelector('[data-tab="deckbuilder"]').classList.add('active');
    document.getElementById('deckbuilder').classList.add('active');

    DeckBuilder.showToast('Deck loaded from AI suggestion!', 'success');
}
