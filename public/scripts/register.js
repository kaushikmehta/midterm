

$( document ).ready(function() {

  // SHOW/HIDE LOGIN FORM
  $("#register-button").click(() => {

    $("#search-form-div").css("display", "none");
    $("#login-form-div").css("display", "none");

    if ($("#register-form-div").css("display") === 'block') {
      $("#register-form-div").css("display", "none")
    } else {
      $("#register-form-div").css("display", "block")
    }
  });

  $('#register-form').submit( function(event) {
    event.preventDefault();


    const username = this.username.value;
    const email = this.email.value;
    const password = this.password.value;
    const name = this.name.value;
    
    const userLoginData = {name, username, email,password};
    
    $.ajax({
      type: "POST",
      url: "/register",
      data: userLoginData,
      success: function() {   
        location.reload(); 
      }
    })
      .then(function() {
        alert( "second success" );
      })
      .fail(function(error) {
        console.log( "error", error );
      })
    
  });

}); // document ready