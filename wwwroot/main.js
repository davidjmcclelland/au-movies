export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('./resources/index');

    // put the module you wish to load by default in setRoot
    // if you need to override the conventional app module assumed.
    aurelia.start().then(a => a.setRoot());
}