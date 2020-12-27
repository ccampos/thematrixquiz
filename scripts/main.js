requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'jquery.min',
        store: 'store'
    }
})

requirejs(['store', 'jquery'], () => {
    console.log(STORE);
    console.log($);
});