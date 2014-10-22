Package.describe({
  name: 'flanamacca:summernote-standalone',
  summary: 'Summernote 0.5.1 Packaged as a standalone library (dependencies are left out)',
  version: '1.0.1',
  git: 'https://github.com/flanamacca/summernote-standalone'
});

Package.onUse(function(api) {
  //api.versionsFrom('undefined');
  api.addFiles('flanamacca:summernote-standalone.js', 'client');
  api.addFiles('lib/summernote.min.js', 'client');
  api.addFiles('lib/summernote.css', 'client')
  //api.addFiles('lib/summernote.min.js')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flanamacca:summernote-standalone');
  api.addFiles('flanamacca:summernote-standalone-tests.js');
});
