function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
  }

  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "804303744786-q0bvv3t1bdnhub6hssvfuo1va7j9la93.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", 
      size: "small", 
      text: "sign_in_with",
      type: "standard",
      shape: "rectangular",
      logo_alignment: "left",
    }
    );
    google.accounts.id.prompt();

  }

  function decodeJwtResponse(token) {
    let base64Url = token.split('.')[1]
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload)
}