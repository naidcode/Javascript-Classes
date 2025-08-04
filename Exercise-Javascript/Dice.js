let password = "123456";

function checker(enter) {
  if (enter === password) {
    console.log("done!");
  } else {
    console.log("wrong password");
  }
}

checker("123456");

// better version of password checker

let password1 = "123456798";
let attempt = 3;
let islocked = false;

function checker1(enterpassword) {
  if (islocked) {
    console.log("account is lock");
    return;
  }

  if (enterpassword === password1) {
    console.log("correct passowrd");
  } else {
    attempt--;
    console.log("incorrect password you have" + attempt + "left");

    if (attempt === 0) {
      islocked = true;
      console.log("your three attempt is over ");
    }
  }
}

checker1("32461316");
