Package.describe({
  name: 'flanamacca:summernote-standalone',
  summary: 'Summernote 0.5.1 Packaged as a standalone library (dependencies are left out)',
  version: '1.0.0',
  git: '  '
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('flanamacca:summernote-standalone.js');
  api.addFiles('lib/summernote.min.js');
  api.addFiles('lib/summernote.css')
  //api.addFiles('lib/summernote.min.js')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flanamacca:summernote-standalone');
  api.addFiles('flanamacca:summernote-standalone-tests.js');
});
