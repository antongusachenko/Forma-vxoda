function validate() {
    var Username = document.getElementById("Username");
    var Password = document.getElementById("Password");
    if (!date.value) {
        date.style.border = "2px solid red";
        Password.style.border = "2px solid red";
        Username.style.border = "2px solid red";
        return false;
    }
alert("Вы залогинились! ;)")
    if (date + Password + Username.vule) {
        date.style.border = "2px solid green";
        Password.style.border = "2px solid green";
        Username.style.border = "2px solid green";
        return true;
    }
}

function changeUserName() {
    var Username = document.getElementById("Username");

    if (!Username.value) {
        Username.style.border = "2px solid red";
        return false;
    }
    if (Username.value) {
        Username.style.border = "2px solid green";
        return true;
    }

}

function changePassword() {
    var Password = document.getElementById("Password");
    if (Password.value.length < 6 || Password.value.length > 16) {
        Password.style.border = "2px solid red";
        return false;
    } else {
        Password.style.border = "2px solid green";
        return true;
    }
}