/*global alert: true, console: true, ODSA */
// Written by Bailey Spell and Jesse Terrazas
$(document).ready(function() {
    "use strict";  
    $(function() {
      $(window).bind("storage", (e) => {
        $(".encryptedMsg").val(localStorage.cipherText);
      });
    });
  
    async function decryptMessage() {
        var decrypted = await crypto.subtle.decrypt(
            {
              name: "RSA-OAEP"
            },
            localStorage.privateKey,
            localStorage.cipherText
        );
    
        $(".decryptMsg").val(new TextDecoder().decode(decrypted))
    }
  
    $(".decrypt").click(decryptMessage);
  });
  