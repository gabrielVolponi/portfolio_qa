describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://gabrielvolponi.vercel.app/');
  });

  it('Validar url', () => {
    cy.url().should('eq', 'https://gabrielvolponi.vercel.app/');
  });

  it('Validar Title', () => {
    cy.title().should('eq', 'Gabriel Volponi');
  });

  it('Validar atributo href Section Experience', () => {
    cy.get('header nav a[href="#experience"]').should('have.attr', 'href', '#experience');
  });

  it('Validar atributo href Section Projects', () => {
    cy.get('header nav a[href="#projects"]').should('have.attr', 'href', '#projects');
  });

  it('Validar atributo href Section Education', () => {
    cy.get('header nav a[href="#education"]').should('have.attr', 'href', '#education');
  });

  it('Validar atributo href Link Visit Github', () => {
    cy.get('header a[href="https://github.com/gabrielVolponi"]').should('have.attr', 'href', 'https://github.com/gabrielVolponi');
  });

  it('Validar atributo href Link Social Github', () => {
    cy.get('section.about .socials a[href="https://github.com/gabrielVolponi"]').should('have.attr', 'href', 'https://github.com/gabrielVolponi');
  });

  it('Validar atributo href Link Social LinkedIn', () => {
    cy.get('section.about .socials a[href="https://br.linkedin.com/in/gabriel-volponi-a11720215/en"]').should('have.attr', 'href', 'https://br.linkedin.com/in/gabriel-volponi-a11720215/en');
  });

  it('Validar atributo href Link Social WhatsApp', () => {
    cy.get('section.about .socials a[href="https://api.whatsapp.com/send?phone=5511912879966"]').should('have.attr', 'href', 'https://api.whatsapp.com/send?phone=5511912879966');
  });

  it('Validar navegação para a seção Experience', () => {
    cy.get('header nav a[href="#experience"]').click();
    cy.get('#experience').should('be.visible');
  });

  it('Validar navegação para a seção Projects', () => {
    cy.get('header nav a[href="#projects"]').click();
    cy.get('#projects').should('be.visible');
  });

  it('Validar navegação para a seção Education', () => {
    cy.get('header nav a[href="#education"]').click();
    cy.get('#education').should('be.visible');
  });

  it('Validar exibição do menu mini_menu em telas pequenas', () => {
    cy.viewport(480, 800); // Simula uma tela pequena
    cy.get('#mini_menu').should('be.visible').click();
    cy.get('header').should('be.visible');
  });

  it('Validar que o header está fixo ao rolar a página', () => {
    cy.scrollTo('bottom');
    cy.get('header').should('be.visible');
  });

  it('Validar download do CV', () => {
    cy.get('a[download="doc/gabriel_voponi_resume.pdf"]').should('have.attr', 'download', 'doc/gabriel_voponi_resume.pdf');
  });

  it('Validar envio de e-mail ao clicar no botão Contact', () => {
    cy.get('a[href^="mailto:gabrielvolponi11@gmail.com"]').should('have.attr', 'href').and('include', 'mailto:gabrielvolponi11@gmail.com');
  });

});
