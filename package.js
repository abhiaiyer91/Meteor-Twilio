Package.describe({
    name: 'abhiaiyer:meteor-twilio',
    version: '0.0.4',
    // Brief, one-line summary of the package.
    summary: 'Twilio Bindings for Meteor',
    documentation: 'README.md'
});

Npm.depends({"twilio": "2.1.0"});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    if (api.export) {
        api.export('Twilio', 'server');
    }
    api.addFiles('abhiaiyer:meteor-twilio.js', 'server');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('abhiaiyer:meteor-twilio');
    api.addFiles('abhiaiyer:meteor-twilio-tests.js');
});
