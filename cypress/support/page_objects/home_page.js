const homePage = {
  testData: {
    pageTitle: 'Create a new Gist',
  },
  elements: {
    emailTextField: '#login_field',
    passTextField: '#password',
    buttonLogin: '.btn.btn-primary.btn-block',

    descTextField: '.form-control.input-block.input-contrast',
    filenameTextField: '.form-control.filename.js-gist-filename.js-blob-filename',
    contentTextArea: '.CodeMirror-line',
    contenteditTextArea: '.CodeMirror-line>span',
    createButton: '.form-actions>button:nth-child(1)',
    gistFileLinkText: '.user-select-contain.gist-blob-name.css-truncate-target',

    buttonGistEdit: '.pagehead-actions>li:nth-child(1)',
    buttonUpdate: '.btn.btn-primary',
    gistDesc: '.repository-content.gist-content>div>div:nth-child(1)',

    gistList1: '.repository-content.gist-content>div:nth-child(1)>div:nth-child(1)>div>span>a:nth-child(3)',
    buttonGistDelete: '.btn.btn-sm.btn-danger',
    flashMessage: '.flash.flash-full.flash-notice>div',
  },
  commands: {
    accessGitPage: function () {
      cy.visit(`${Cypress.env('git_base_url')}`);
    },
    accessGitListPage: function () {
      cy.visit(`${Cypress.env('gist_base_url')}${Cypress.env('user_login')}`);
    },
    accessGistPage: function () {
      cy.visit(`${Cypress.env('gist_base_url')}`);
    },
    loginGit: function () {
      cy.get(homePage.elements.emailTextField).type(`${Cypress.env('user_login')}`);
      cy.get(homePage.elements.passTextField).type(`${Cypress.env('pass_login')}`);
      cy.get(homePage.elements.buttonLogin).click();
    },
    addNewGist: function () {
      cy.get(homePage.elements.descTextField).type('description 1');
      cy.get(homePage.elements.filenameTextField).type('filename 1');
      cy.get(homePage.elements.contentTextArea).type('1');
      cy.get(homePage.elements.createButton).click();
    },
    assertNewGist: function () {
      cy.get(homePage.elements.gistFileLinkText).should('be.visible');
    },
    assertGistDeleted: function () {
      cy.get(homePage.elements.flashMessage).should('be.visible');
    },
    assertGistList: function () {
      cy.get(homePage.elements.gistList1).should('be.visible');
    },
    assertGistEdit: function () {
      cy.contains('filename 2');
    },
    selectDeleteExistGist: function () {
      cy.get(homePage.elements.gistList1).click();
      cy.get(homePage.elements.buttonGistDelete).click();
    },
    selectEditExistGist: function () {
      cy.get(homePage.elements.gistList1).click();
      cy.get(homePage.elements.buttonGistEdit).click();
      cy.get(homePage.elements.filenameTextField).clear().type('filename 2');
      cy.get(homePage.elements.buttonUpdate).click();
    },
  },
};

module.exports = homePage;
