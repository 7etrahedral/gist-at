const browser = require('./../page_objects/home_page');

given('user is logged in to gist homepage', () => {
  browser.commands.accessGitPage();
  browser.commands.loginGit();
  browser.commands.accessGistPage();
});

then('user can see new gist added', () => {
  browser.commands.assertNewGist();
});

then('flash message success delete wil be appear', () => {
  browser.commands.assertGistDeleted();
});

then('gist will be edited', () => {
  browser.commands.assertGistEdit();
});

then('user will see list of gist', () => {
  browser.commands.assertGistList();
});

when('user add new gist', () => {
  browser.commands.addNewGist();
});

when('user is at gist list page', () => {
  browser.commands.accessGitListPage();
});

when('user edit an existing gist', () => {
  browser.commands.selectEditExistGist();
});

when('user delete an existing gist', () => {
  browser.commands.selectDeleteExistGist();
});
