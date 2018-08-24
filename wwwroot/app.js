export class App {

    configureRouter(config, router) {
        this.thisRouter = router;

        config.map([
            {route: ['', 'list'], moduleId: 'movies/list', title: 'List', nav: true, name:'home'},
            {route: 'about', moduleId: 'about/about', title: 'About', nav: true},
            {route: 'details/:id', moduleId:'movies/details', title: 'Details', name:'details' },
            {route: 'edit/:id', moduleId:'movies/edit', title: 'Edit Movie', name:'edit' },
            {route: 'create/:id', moduleId:'movies/create', title: 'Create Movie', name:'create' }
        ]);

    }

}
