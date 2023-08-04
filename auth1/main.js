let usersDB = JSON.parse(localStorage.getItem('usersDB')) || [];
$('#signupBtn').click(function() {
    let newUserLogin = $('#login').val();
    let newUserPassword = $('#password').val();

    let newUser = {
        login: $('#login').val(),
        password: $('#password').val()
    };
    $('#login').val('');
    $('#password').val('')
    let findUser = false;
    for (let el of usersDB) {
        if (el.login == newUser.login) {
            findUser = true;
        }
    }


    if (findUser == false) {
        usersDB.push(newUser);

        localStorage.setItem('usersDB', JSON.stringify(usersDB))
        alert('Додано нового користувача');
    } else if (newUserLogin === '' || newUserPassword === '') {
        alert('Заповніть всі поля')
    } else {
        alert('Нікнейм зайнятий');
    }
});

$('#signinBtn').click(function() {
    let candidate = {
        login: $('#login').val(),
        password: $('#password').val()
    };
    $('#login').val('');
    $('#password').val('');
    let findUser = false;
    for (let el of usersDB) {
        if (el.login == candidate.login && el.password == candidate.password) {
            findUser = true;
        }
    }
    if (findUser == true) {
        localStorage.setItem('usersDB', JSON.stringify(usersDB))
        let userListHTML = '';
        for (let el of usersDB) {
            userListHTML += '<p>' + el.login + '</p>'
        }

        window.location.href = "users.html";
        alert('Вхід виконано');
    } else {
        alert('Невідомий користувач');
    }
})