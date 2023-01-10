import React from "react";

const Validation = () => {
  const validateEmail = () => {
    var x = document.myForm.email.value;

    var atPosition = x.indexOf("@");
    var dotPosition = x.lastIndexOf(".");
    if (
      atPosition < 1 ||
      dotPosition < atPosition + 2 ||
      dotPosition + 2 >= x.length
    ) {
      alert(
        "Please enter a valid e-mail address \n atPosition:" +
          atPosition +
          "\n dotPosition:" +
          dotPosition
      );
      return false;
    }
  };
  const validateEml = () => {
    var x = document.formMy.email.value;

    var atPosition = x.indexOf("@");
    var dotPosition = x.lastIndexOf(".");
    if (
      atPosition < 1 ||
      dotPosition < atPosition + 2 ||
      dotPosition + 2 >= x.length
    ) {
      alert(
        "Please enter a valid e-mail address \n atPosition:" +
          atPosition +
          "\n dotPosition:" +
          dotPosition
      );
      return false;
    }
  };

  return (
    <div>
      <form name="myForm" method="post" action="#" onSubmit="return">
        Email: <input type="text" name="email" />
        <input type="submit" value="register" onClick={() => validateEmail()} />
      </form>
      <form name="formMy" method="post" action="#" onSubmit="return">
        <input type="submit" value="register" onClick={() => validateEml()} />
      </form>
    </div>
  );
};

export default Validation;
