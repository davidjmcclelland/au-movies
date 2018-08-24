export function configure(aurelia){
    // weird that path requires a jump higher to get adjacent resource file...
    // ./nav-menu made the URL index/nav-menu (404)
    aurelia.globalResources('../nav-menu');
}