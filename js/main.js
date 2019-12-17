
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
        case 2:
            bg_color = "#8fd2ff"
            main_color = "#010203"
            secondary_color = "#6fa1d2"
            accent_color = "#e3e5e4"
            break;

        // code block
    }
    document.querySelector('body').style.setProperty('--background-color', bg_color)
    document.querySelector('h1').style.setProperty('--main-color', main_color)
    var headings2 = document.querySelectorAll('h2')
    headings2.forEach(function(heading) {
      heading.style.setProperty('--main-color', main_color)
    });
    lists = document.querySelectorAll('ul')
    lists.forEach(function(list) {
      list.style.setProperty('--accent-color', accent_color)
    });
    listItems = document.querySelectorAll('li')
    listItems.forEach(function(listItem) {
      listItem.style.setProperty('--accent-color', accent_color)
    });
    ps = document.querySelectorAll('p')
    ps.forEach(function(p) {
      p.style.setProperty('--secondary-color', secondary_color)
    });
    document.querySelectorAll('a').style.setProperty('--accent-color', accent_color)
    as = document.querySelectorAll('a')
    as.forEach(function(a) {
      a.style.setProperty('--accent-color', accent_color)
    });
    //document.querySelectorAll('footer').style.setProperty('--accent-color', accent_color)
    //document.querySelectorAll('nav').style.setProperty('--accent-color', accent_color)
    document.querySelector('select').style.setProperty('--background-color', accent_color)
    document.querySelector('option').style.setProperty('--main-color', main_color)

}
