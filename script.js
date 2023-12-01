function changeLanguage(lang) {
    const languageElements = {
        'pt-br': {
            'bio-text': 'Olá, meu nome é <span class="highlight">Bernardo Castello</span> e sou estudante de <span class="highlight">Engenharia de Computação</span> na <span class="highlight">FURG</span> e estou no 4° ano do curso.',
            'welcome-text': 'Seja bem-vindo!',
            'title': '<span class="highlight">Engenheiro de Computação</span>',
            'text_about': 'TEXTO',
            'btn-projects': '<ion-icon name="logo-github"></ion-icon><span>Ver Projetos</span>',
            'skills-section-title': 'Meus Conhecimentos:'
            // Adicione outras traduções para os elementos que precisam ser traduzidos
        },
        'en': {
            'bio-text': 'Hello, my name is <span class="highlight">Bernardo Castello</span> and I am a student of <span class="highlight">Computer Engineering</span> at <span class="highlight">FURG</span> and I am in the 4th year of the course.',
            'welcome-text': 'Welcome!',
            'title': '<span class="highlight">Computer Engineer</span>',
            'text_about': 'TEXT',
            'btn-projects': '<ion-icon name="logo-github"></ion-icon><span>See Projects</span>',
            'skills-section-title': 'My Knowledge:'
            // Adicione outras traduções para os elementos que precisam ser traduzidos
        }
    };

    // Itera sobre os elementos do idioma selecionado e atualiza seu conteúdo
    Object.keys(languageElements[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = languageElements[lang][key];
        }
    });
}
