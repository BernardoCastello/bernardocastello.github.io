function changeLanguage(lang) {
    const languageElements = {
        'pt-br': {
            'bio-text': 'Olá, meu nome é <span class="highlight">Bernardo Castello</span> e sou estudante de <span class="highlight">Engenharia de Computação</span> na <span class="highlight">FURG</span> e estou no 4° ano do curso.',
            'welcome-text': 'Seja bem-vindo!',
            'title': '<span class="highlight">Engenheiro de Computação</span>',
            'text_about': ' Olá, me chamo Bernardo e fui formado na <a href="https://www2.fab.mil.br/epcar/" target="_blank"<span class="highlight">Escola Preparatória de Cadetes do Ar(EPCAr)</span></a>, atualmente sou estudante de <a href="http://www.ecomp.c3.furg.br/" target="_blank"><span class="highlight">Engenharia de Computação</span></a> pela <a href="https://www.furg.br/" target="_blank"><span class="highlight">Furg</span></a>. Possuo experiência em ciência e análise de dados juntamente com deep learning e machine learning. Agora estou ampliando meus horizontes para o desenvolvimento web também, para assim desenvolver e ampliar meus conhecimentos.',
            'btn-projects': '<ion-icon name="logo-github"></ion-icon><span>Ver Projetos</span>',
            'skills-section-title': 'Meus Conhecimentos:'
            // Adicione outras traduções para os elementos que precisam ser traduzidos
        },
        'en': {
            'bio-text': 'Hello, my name is <span class="highlight">Bernardo Castello</span> and I am a student of <span class="highlight">Computer Engineering</span> at <span class="highlight">FURG</span> and I am in the 4th year of the course.',
            'welcome-text': 'Welcome!',
            'title': '<span class="highlight">Computer Engineer</span>',
            'text_about': 'Hello, my name is Bernardo and I graduated from <a href="https://www2.fab.mil.br/epcar/" target="_blank"<span class="highlight">Escola Preparatória de Cadetes do Ar (EPCAr )</span></a>, I am currently a student of <a href="http://www.ecomp.c3.furg.br/" target="_blank"><span class="highlight">Engineering Computing</span></a> by <a href="https://www.furg.br/" target="_blank"><span class="highlight">Furg</span></a>. I have experience in data science and analysis along with deep learning and machine learning. Now I´m expanding my horizons to web development as well, to develop and expand my knowledge.',
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
