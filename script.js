function changeLanguage(lang) {
    const languageElements = {
        'pt-br': {
            'bio-text': 'Olá, meu nome é <span class="highlight">Bernardo Castello</span> e sou graduado em <span class="highlight_negrito">Engenharia de Computação</span></a> na <a href="https://www.furg.br/" target="_blank"><span class="highlight_negrito">FURG</span></a>.</p>',
            'welcome-text': 'Seja bem-vindo!',
            'title': '<span class="highlight">Engenheiro de Computação</span>',
            'text_about': ' Olá, me chamo Bernardo e me formei na <a href="https://www2.fab.mil.br/epcar/" target="_blank"><span class="highlight">Escola Preparatória de Cadetes do Ar(EPCAr)</span></a> e possuo bacharelado em <span class="highlight">Engenharia de Computação</span></a> pela <a href="https://www.furg.br/" target="_blank"><span class="highlight">Furg</span></a>. Possuo Conhecimentos em ciência e análise de dados, previsão de dados com machine learning, utilização de LLMs para chatbots e consulta de documentos, juntamente com tecnologias em nuvem. Também possuo experiência em criação de aplicativos com Unity para óculos de realidade virtual.<br><br>Possuo experiências através de bolsas de pesquisa em iniciação científica pela <a href="https://www.furg.br/" target="_blank"><span class="highlight">Furg</span></a> e pelo <a href="https://itecfurg.org/" target="_blank"><span class="highlight">Itec</span></a> e também trabalhando na empresa <a href="https://augenengenharia.com/" target="_blank"><span class="highlight">Augen Engenharia S.A.</span></a> como desenvolvedor.',
            'btn-projects': '<ion-icon name="logo-github"></ion-icon><span>Ver Projetos</span>',
            'skills-section-title': 'Meus Conhecimentos:',
            'atualizado': 'Atualizado em 20/01/2025'
            // Adicione outras traduções para os elementos que precisam ser traduzidos
        },
        'en': {
            'bio-text': 'Hello, my name is <span class="highlight">Bernardo Castello</span> and I have a degree in <span class="highlight_negrito">Computer Engineering</span></a> from <a href="https://www.furg.br/" target="_blank"><span class="highlight_negrito">FURG</span></a>.</p>',
            'welcome-text': 'Welcome!',
            'title': '<span class="highlight">Computer Engineer</span>',
            'text_about': 'Hello, my name is Bernardo and I graduated from <a href="https://www2.fab.mil.br/epcar/" target="_blank"><span class="highlight">Escola Preparatória de Cadetes do Ar (EPCAr)</span></a> and have a bachelor\'s degree in <span class="highlight">Computer Engineering</span></a> from <a href="https://www.furg.br/" target="_blank"><span class="highlight">Furg</span></a>. I have knowledge in data science and analysis, data forecasting with machine learning, use of LLMs for chatbots and document consultation, together with cloud technologies. I also have experience in creating applications with Unity for virtual reality glasses.<br><br> I have experience through research grants in scientific initiation by <a href="https://www.furg.br/" target="_blank"><span class="highlight">Furg</span></a> and by <a href="https://itecfurg.org/" target="_blank"><span class="highlight">Itec</span></a> and also working at the company <a href="https://augenengenharia.com/" target="_blank"><span class="highlight">Augen Engenharia S.A.</span></a> as a developer.',
            'btn-projects': '<ion-icon name="logo-github"></ion-icon><span>See Projects</span>',
            'skills-section-title': 'My Knowledge:',
            'atualizado': 'Updated on 20/01/2025'
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
