const DeckBuilder = {
    currentDeck: [],
    selectedHero: null,
    maxDeckSize: 40,
    maxCopies: 4,

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

        // Group by faction
        const plantHeroes = heroes.filter(h => ['kabloom','guardian','mega-grow','solar','smarty'].some(c => h.classes.includes(c)));
        const zombieHeroes = heroes.filter(h => ['beastly','brainy','crazy','hearty','sneaky'].some(c => h.classes.includes(c)));

        const renderHero = (hero) => {
            const el = document.createElement('div');
            el.className = `card card-hero ${this.selectedHero === hero.id ? 'selected' : ''}`;
            el.innerHTML = `
                <div class="card-img-wrap hero-img-wrap">
                    <img src="${hero.img}" alt="${hero.name}" class="card-img" onerror="this.style.display='none';this.parentElement.innerHTML+='<span class=\\'card-emoji\\'>${hero.icon||'?'}</span>'">
                </div>
                <div class="card-name">${hero.name}</div>
                <div class="card-stats">
                    <span class="card-health">❤️${hero.hp}</span>
                </div>
                <div class="card-ability">${hero.classes.map(c => CARD_DATA.classEmoji[c] + ' ' + c).join(' ')}</div>
            `;
            el.addEventListener('click', () => this.selectHero(hero.id));
            return el;
        };

        if (plantHeroes.length) {
            const label = document.createElement('div');
            label.className = 'hero-faction-label';
            label.textContent = '☀ Plant Heroes';
            container.appendChild(label);
            plantHeroes.forEach(h => container.appendChild(renderHero(h)));
        }
        if (zombieHeroes.length) {
            const label = document.createElement('div');
            label.className = 'hero-faction-label';
            label.textContent = '🧠 Zombie Heroes';
            container.appendChild(label);
            zombieHeroes.forEach(h => container.appendChild(renderHero(h)));
        }

        // Shared class notes
        const note = document.createElement('div');
        note.className = 'shared-class-note';
        note.innerHTML = '<strong>Shared Classes:</strong><br>Citron & Beta-Carrotina: Guardian + Smarty<br>Super Brainz & Huge-Gigantacus: Brainy + Sneaky';
        container.appendChild(note);

        // Battle hero selects
        ['player-hero-select', 'enemy-hero-select'].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.innerHTML = '';
            const plantSection = document.createElement('div');
            plantSection.innerHTML = '<div class="hero-faction-label" style="font-size:0.8rem">☀ Plants</div>';
            const zombieSection = document.createElement('div');
            zombieSection.innerHTML = '<div class="hero-faction-label" style="font-size:0.8rem">🧠 Zombies</div>';

            heroes.forEach(hero => {
                const isPlant = hero.classes.some(c => ['kabloom','guardian','mega-grow','solar','smarty'].includes(c));
                const section = isPlant ? plantSection : zombieSection;
                const h = document.createElement('div');
                h.className = 'card card-hero';
                h.dataset.heroId = hero.id;
                h.dataset.heroType = isPlant ? 'plant' : 'zombie';
                h.innerHTML = `
                    <div class="card-img-wrap hero-img-wrap" style="width:40px;height:40px">
                        <img src="${hero.img}" alt="${hero.name}" class="card-img" onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=\\'font-size:1.5rem\\'>${hero.icon||'?'}</span>'">
                    </div>
                    <div class="card-name" style="font-size:0.7rem">${hero.name}</div>
                `;
                h.addEventListener('click', () => {
                    el.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                    h.classList.add('selected');
                });
                section.appendChild(h);
            });

            el.appendChild(plantSection);
            el.appendChild(zombieSection);
        });

        // AI Helper hero select
        const aiHeroSelect = document.getElementById('ai-hero-select');
        if (aiHeroSelect) {
            aiHeroSelect.innerHTML = '<option value="">Select a hero...</option>';
            heroes.forEach(hero => {
                const opt = document.createElement('option');
                opt.value = hero.id;
                opt.textContent = `${hero.name}`;
                aiHeroSelect.appendChild(opt);
            });
        }
    },

    selectHero(heroId) {
        this.selectedHero = heroId;
        if (heroId) {
            const hero = CARD_DATA.heroes.find(h => h.id === heroId);
            if (hero) {
                const before = this.currentDeck.length;
                this.currentDeck = this.currentDeck.filter(c => hero.classes.includes(c.class));
                const removed = before - this.currentDeck.length;
                if (removed > 0) {
                    this.showToast(`Removed ${removed} off-class card${removed > 1 ? 's' : ''}`, 'info');
                }
            }
        }
        this.renderHeroList();
        this.renderCardCollection();
        this.renderDeck();
    },

    getHeroClasses() {
        if (!this.selectedHero) return null;
        const hero = CARD_DATA.heroes.find(h => h.id === this.selectedHero);
        return hero ? hero.classes : null;
    },

    isCardAllowed(card) {
        const classes = this.getHeroClasses();
        if (!classes) return true;
        return classes.includes(card.class);
    },

    renderCardCollection() {
        const container = document.getElementById('card-grid');
        container.innerHTML = '';

        const search = document.getElementById('card-search').value.toLowerCase();
        const classFilter = document.getElementById('filter-class').value;
        const typeFilter = document.getElementById('filter-type').value;
        const costFilter = document.getElementById('filter-cost').value;

        let cards = [...CARD_DATA.cards];

        if (this.selectedHero) {
            const hero = CARD_DATA.heroes.find(h => h.id === this.selectedHero);
            if (hero) {
                cards = cards.filter(c => hero.classes.includes(c.class));
            }
        }

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
                <div class="card-img-wrap">
                    <img src="${card.img}" alt="${card.name}" class="card-img" onerror="this.style.display='none';this.parentElement.innerHTML+='<span class=\\'card-emoji\\'>🃏</span>'">
                </div>
                <div class="card-name">${card.name}</div>
                ${renderTraits(card.traits)}
                ${card.attack !== undefined ? `<div class="card-stats">
                    <span class="card-attack">⚔${card.attack}</span>
                    <span class="card-health">❤${card.health}</span>
                </div>` : ''}
                <div class="card-ability"></div>
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
        if (!this.isCardAllowed(card)) {
            this.showToast(`${card.name} is not in ${CARD_DATA.heroes.find(h => h.id === this.selectedHero)?.name}'s classes!`, 'error');
            return;
        }
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

        const grouped = {};
        this.currentDeck.forEach((card, idx) => {
            if (!grouped[card.id]) {
                grouped[card.id] = { card, count: 0, indices: [] };
            }
            grouped[card.id].count++;
            grouped[card.id].indices.push(idx);
        });

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
                <span class="card-name" style="display:flex;align-items:center;gap:4px">
                    <img src="${card.img}" alt="" style="width:20px;height:20px;border-radius:3px;object-fit:cover" onerror="this.style.display='none'">
                    ${card.name}
                </span>
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
                this.currentDeck = deck.cards.map(id => getCard(id)).filter(c => c && c.type !== 'hero');
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
        navigator.clipboard?.writeText(text).then(() => {
            this.showToast('Deck list copied to clipboard!', 'success');
        }).catch(() => {
            prompt('Copy this deck list:', text);
        });
    },

    importDeck() {
        const text = prompt('Paste deck list (format:\nHero Name\n2x Card Name\n1x Card Name):');
        if (!text || !text.trim()) return;
        try {
            const lines = text.trim().split('\n').map(l => l.trim()).filter(Boolean);
            if (lines.length < 2) {
                this.showToast('Invalid format - need hero name and at least 1 card', 'error');
                return;
            }
            const heroName = lines[0].trim();
            const hero = CARD_DATA.heroes.find(h => h.name.toLowerCase() === heroName.toLowerCase());
            if (hero) {
                this.selectedHero = hero.id;
            } else {
                this.showToast(`Hero "${heroName}" not found`, 'error');
                return;
            }

            const newDeck = [];
            let errors = [];
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                const match = line.match(/^(\d+)x?\s+(.+)$/);
                if (!match) {
                    errors.push(`Could not parse: "${line}"`);
                    continue;
                }
                const count = parseInt(match[1]);
                const name = match[2].trim();
                const card = CARD_DATA.cards.find(c => c.name.toLowerCase() === name.toLowerCase());
                if (!card) {
                    errors.push(`Card not found: "${name}"`);
                    continue;
                }
                if (!hero.classes.includes(card.class)) {
                    errors.push(`${name} is not in ${hero.name}'s classes`);
                    continue;
                }
                const addCount = Math.min(count, this.maxCopies);
                for (let j = 0; j < addCount; j++) {
                    newDeck.push({ ...card });
                }
            }

            this.currentDeck = newDeck;
            this.renderHeroList();
            this.renderCardCollection();
            this.renderDeck();

            if (errors.length > 0) {
                this.showToast(`Imported with ${errors.length} warning(s): ${errors[0]}`, 'info');
            } else {
                this.showToast(`Imported ${this.currentDeck.length} cards!`, 'success');
            }
        } catch (e) {
            this.showToast('Failed to import deck: ' + e.message, 'error');
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
