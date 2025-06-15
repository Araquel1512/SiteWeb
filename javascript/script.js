
$(document).ready(function() {
    // Modais
    const signupModal = $("#signupModal");
    const loginModal = $("#loginModal");

    // Botões de abrir modais
    const openSignupBtn = $("#openSignup");
    const openLoginBtn = $("#open-login"); // Correto
    const openSignupFromLoginBtn = $("#open-signup"); // Correto

    // Botões de fechar modais
    const closeSignupBtn = $("#close-signup-modal");
    const closeLoginBtn = $("#close-login-modal");

    // Abrir o modal de cadastro
    openSignupBtn.on('click', function() {
        signupModal.css('display', 'flex');
    });

    // Abrir o modal de login a partir do modal de cadastro
    openLoginBtn.on('click', function() {
        signupModal.css('display', 'none'); // Fecha o modal de cadastro
        loginModal.css('display', 'flex'); // Abre o modal de login
    });

    // Abrir o modal de cadastro a partir do modal de login
    openSignupFromLoginBtn.on('click', function() {
        loginModal.css('display', 'none'); // Fecha o modal de login
        signupModal.css('display', 'flex'); // Abre o modal de cadastro
    });

    // Fechar modais ao clicar no botão de fechar
    closeSignupBtn.on('click', function() {
        signupModal.css('display', 'none');
    });

    closeLoginBtn.on('click', function() {
        loginModal.css('display', 'none');
    });

    // Fechar modais ao clicar fora da área de conteúdo
    $(window).on('click', function(event) {
        if ($(event.target).is(signupModal)) {
            signupModal.css('display', 'none');
        }
        if ($(event.target).is(loginModal)) {
            loginModal.css('display', 'none');
        }
    });

    // Simulação de cadastro
    $('#signupForm').on('submit', function(e) {
        e.preventDefault();
        alert('Cadastro realizado com sucesso!');
        signupModal.css('display', 'none');
    });

    // Simulação de login
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        const email = $('#login-email').val();
        const password = $('#login-password').val();

        if (email && password) { 
            alert('Login realizado com sucesso!');
            loginModal.css('display', 'none');
        } else {
            alert('Preencha todos os campos.');
        }
    });

    // Menu responsivo
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Scroll automático baseado na rolagem
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
