const DeckBuilder = {
    currentDeck: [],
    selectedHero: null,
    maxDeckSize: 40,
    maxCopies: 3,

    init() {
        this.loadDeck();
        this.bindEvents();
        this.renderHeroList();
        this.renderCardCollection();
        this.renderDeck();
    },

    bindEvents() {
        document.getElementById('card-search').addEventListener('input', () => this.renderCardCollection());
        document.getElementById('filter-class').addEventListener('change', () => this.renderCardCollection());
        document.getElementById('filter-type').addEventListener('change', () => this.renderCardCollection());
        document.getElementById('filter-cost').addEventListener('change', () => this.renderCardCollection());
        document.getElementById('save-deck').addEventListener('click', () => this.saveDeck());
        document.getElementById('clear-deck').addEventListener('click', () => this.clearDeck());
        document.getElementById('export-deck').addEventListener('click', () => this.exportDeck());
        document.getElementById('import-deck').addEventListener('click', () => this.importDeck());
    },

    renderHeroList() {
        const container = document.getElementById('hero-list');
        container.innerHTML = '';
        const heroes = CARD_DATA.heroes.filter(h => h.type === 'hero');
        heroes.forEach(hero => {
            const el = document.createElement('div');
            el.className = `card card-hero ${this.selectedHero === hero.id ? 'selected' : ''}`;
            el.innerHTML = `
                <div class="card-cost" style="background:${hero.type === 'hero' ? '#854d0e' : '#333'}">♥</div>
                <div class="card-icon">${hero.icon}</div>
                <div class="card-name">${hero.name}</div>
                <div class="card-stats">
                    <span class="card-health">❤️${hero.hp}</span>
                </div>
                <div class="card-ability">${hero.classes.map(c => CARD_DATA.classEmoji[c] + ' ' + c).join(' ')}</div>
            `;
            el.addEventListener('click', () => this.selectHero(hero.id));
            container.appendChild(el);
        });

        // Also populate battle hero selects
        ['player-hero-select', 'enemy-hero-select'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.innerHTML = '';
                heroes.forEach(hero => {
                    const h = document.createElement('div');
                    h.className = 'card card-hero';
                    h.dataset.heroId = hero.id;
                    h.innerHTML = `
                        <div class="card-icon">${hero.icon}</div>
                        <div class="card-name">${hero.name}</div>
                    `;
                    h.addEventListener('click', () => {
                        el.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                        h.classList.add('selected');
                    });
                    el.appendChild(h);
                });
            }
        });

        // AI Helper hero select
        const aiHeroSelect = document.getElementById('ai-hero-select');
        if (aiHeroSelect) {
            aiHeroSelect.innerHTML = '<option value="">Select a hero...</option>';
            heroes.forEach(hero => {
                const opt = document.createElement('option');
                opt.value = hero.id;
                opt.textContent = `${hero.icon} ${hero.name}`;
                aiHeroSelect.appendChild(opt);
            });
        }
    },

    selectHero(heroId) {
        this.selectedHero = heroId;
        this.renderHeroList();
        this.renderCardCollection();
        this.renderDeck();
    },

    renderCardCollection() {
        const container = document.getElementById('card-grid');
        container.innerHTML = '';

        const search = document.getElementById('card-search').value.toLowerCase();
        const classFilter = document.getElementById('filter-class').value;
        const typeFilter = document.getElementById('filter-type').value;
        const costFilter = document.getElementById('filter-cost').value;

        let cards = [...CARD_DATA.cards];

        // Filter by hero's classes if selected
        if (this.selectedHero) {
            const hero = CARD_DATA.heroes.find(h => h.id === this.selectedHero);
            if (hero) {
                cards = cards.filter(c => hero.classes.includes(c.class));
            }
        }

        // Apply filters
        if (search) cards = cards.filter(c => c.name.toLowerCase().includes(search));
        if (classFilter !== 'all') cards = cards.filter(c => c.class === classFilter);
        if (typeFilter !== 'all') cards = cards.filter(c => c.type === typeFilter);
        if (costFilter !== 'all') {
            if (costFilter === '7+') cards = cards.filter(c => c.cost >= 7);
            else cards = cards.filter(c => c.cost === parseInt(costFilter));
        }

        cards.forEach(card => {
            const countInDeck = this.currentDeck.filter(c => c.id === card.id).length;
            const el = document.createElement('div');
            el.className = `card card-${card.type} ${countInDeck > 0 ? 'in-deck' : ''}`;
            el.innerHTML = `
                <div class="card-cost" style="background:${CARD_DATA.classColors[card.class] || '#666'}">${card.cost}</div>
                <div class="card-rarity rarity-${card.rarity}"></div>
                <div class="card-icon">${card.icon}</div>
                <div class="card-name">${card.name}</div>
                ${card.attack !== undefined ? `<div class="card-stats">
                    <span class="card-attack">⚔${card.attack}</span>
                    <span class="card-health">❤${card.health}</span>
                </div>` : ''}
                <div class="card-ability">${card.traits ? card.traits.join(', ') : ''}</div>
                ${countInDeck > 0 ? `<div class="deck-entry"><span class="card-count">×${countInDeck}</span></div>` : ''}
            `;
            el.addEventListener('click', () => this.addToDeck(card));
            container.appendChild(el);
        });

        if (cards.length === 0) {
            container.innerHTML = '<div style="text-align:center;color:var(--text-secondary);padding:2rem;grid-column:1/-1">No cards match your filters</div>';
        }
    },

    addToDeck(card) {
        const currentCount = this.currentDeck.filter(c => c.id === card.id).length;
        if (currentCount >= this.maxCopies) {
            this.showToast(`Maximum ${this.maxCopies} copies of ${card.name}`, 'error');
            return;
        }
        if (this.currentDeck.length >= this.maxDeckSize) {
            this.showToast('Deck is full (40 cards)', 'error');
            return;
        }

        this.currentDeck.push({ ...card });
        this.renderCardCollection();
        this.renderDeck();
    },

    removeFromDeck(index) {
        this.currentDeck.splice(index, 1);
        this.renderCardCollection();
        this.renderDeck();
    },

    renderDeck() {
        const container = document.getElementById('deck-list');
        const countEl = document.getElementById('deck-count');
        container.innerHTML = '';
        countEl.textContent = `${this.currentDeck.length}/${this.maxDeckSize}`;

        // Group by card id
        const grouped = {};
        this.currentDeck.forEach((card, idx) => {
            if (!grouped[card.id]) {
                grouped[card.id] = { card, count: 0, indices: [] };
            }
            grouped[card.id].count++;
            grouped[card.id].indices.push(idx);
        });

        // Sort by cost then name
        const sorted = Object.values(grouped).sort((a, b) => {
            if (a.card.cost !== b.card.cost) return a.card.cost - b.card.cost;
            return a.card.name.localeCompare(b.card.name);
        });

        sorted.forEach(({ card, count }) => {
            const el = document.createElement('div');
            el.className = 'deck-entry';
            el.style.borderLeft = `3px solid ${CARD_DATA.classColors[card.class] || '#666'}`;
            el.innerHTML = `
                <span class="cost-badge" style="background:${CARD_DATA.classColors[card.class] || '#666'};color:#fff">${card.cost}</span>
                <span class="card-name">${card.icon} ${card.name}</span>
                <span class="card-count">${count > 1 ? '×' + count : ''}</span>
            `;
            el.addEventListener('click', () => this.removeFromDeck(this.currentDeck.findIndex(c => c.id === card.id)));
            container.appendChild(el);
        });
    },

    saveDeck() {
        const deck = {
            hero: this.selectedHero,
            cards: this.currentDeck.map(c => c.id),
            name: `${CARD_DATA.heroes.find(h => h.id === this.selectedHero)?.name || 'Unknown'} Deck`,
            savedAt: new Date().toISOString()
        };
        localStorage.setItem('pvzh_deck', JSON.stringify(deck));
        this.showToast('Deck saved!', 'success');
    },

    loadDeck() {
        try {
            const saved = localStorage.getItem('pvzh_deck');
            if (saved) {
                const deck = JSON.parse(saved);
                this.selectedHero = deck.hero;
                this.currentDeck = deck.cards.map(id => getCard(id)).filter(Boolean);
            }
        } catch (e) {
            console.error('Failed to load deck:', e);
        }
    },

    clearDeck() {
        this.currentDeck = [];
        this.renderCardCollection();
        this.renderDeck();
        this.showToast('Deck cleared', 'info');
    },

    exportDeck() {
        const hero = CARD_DATA.heroes.find(h => h.id === this.selectedHero);
        const grouped = {};
        this.currentDeck.forEach(card => {
            grouped[card.id] = (grouped[card.id] || 0) + 1;
        });
        const lines = [`${hero?.name || 'Unknown'}`];
        Object.entries(grouped).forEach(([id, count]) => {
            const card = getCard(id);
            lines.push(`${count}x ${card?.name || id}`);
        });
        const text = lines.join('\n');
        navigator.clipboard?.writeText(text);
        this.showToast('Deck list copied to clipboard!', 'success');
    },

    importDeck() {
        const text = prompt('Paste deck list (format: "Hero Name\n1x Card Name\n2x Card Name"):');
        if (!text) return;
        try {
            const lines = text.split('\n').filter(Boolean);
            const heroName = lines[0].trim();
            const hero = CARD_DATA.heroes.find(h => h.name.toLowerCase() === heroName.toLowerCase());
            if (hero) this.selectedHero = hero.id;

            this.currentDeck = [];
            for (let i = 1; i < lines.length; i++) {
                const match = lines[i].match(/^(\d+)x?\s+(.+)$/);
                if (match) {
                    const count = parseInt(match[1]);
                    const name = match[2].trim();
                    const card = CARD_DATA.cards.find(c => c.name.toLowerCase() === name.toLowerCase());
                    if (card) {
                        for (let j = 0; j < Math.min(count, 3); j++) {
                            this.currentDeck.push({ ...card });
                        }
                    }
                }
            }
            this.renderHeroList();
            this.renderCardCollection();
            this.renderDeck();
            this.showToast('Deck imported!', 'success');
        } catch (e) {
            this.showToast('Failed to import deck', 'error');
        }
    },

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};
