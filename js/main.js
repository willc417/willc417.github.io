
function changeTheme(theme_code){
    var bg_color;
    var main_color;
    var secondary_color;
    var accent_color;
    switch(theme_code) {
        case 0:
            bg_color = "#001440"
            main_color = "#ff5a36"
            secondary_color = "#9fe2bf"
            accent_color = "#b666d2"
            break;
        case 1:
            bg_color = "#ffc1cc"
            main_color = "#fce903"
            secondary_color = "#9abf59"
            accent_color = "#fd5b78"
            break;
        // code block
    }
    document.querySelector('body').style.setProperty('--background-color', bg_color)
    document.querySelector('h1').style.setProperty('--main-color', main_color)
    document.querySelector('h2').style.setProperty('--main-color', main_color)
    document.querySelector('ul').style.setProperty('--main-color', accent_color)
    document.querySelector('p').style.setProperty('--secondary-color', secondary_color)
    document.querySelector('a').style.setProperty('--accent-color', accent_color)
    document.querySelector('footer').style.setProperty('--accent-color', accent_color)
    document.querySelector('nav').style.setProperty('--accent-color', accent_color)
    document.querySelector('select').style.setProperty('--background-color', accent_color)
    document.querySelector('option').style.setProperty('--main-color', main_color)


}
