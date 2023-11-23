(function(doc){
    var scriptElm = doc.scripts[doc.scripts.length - 1];
    var warn = ['[ionicons] Deprecated script, please remove: ' + scriptElm.outerHTML];
  
    warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')
  
    var parts = scriptElm.src.split('/');
    parts.pop();
    parts.push('ionicons');
    var url = parts.join('/');
  
    var scriptElm = doc.createElement('script');
    scriptElm.setAttribute('type', 'module');
    scriptElm.src = url + '/ionicons.esm.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm);
  
    
    scriptElm = doc.createElement('script');
    scriptElm.setAttribute('nomodule', '');
    scriptElm.src = url + '/ionicons.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm)
    
    console.warn(warn.join('\n'));
  
  })(document);
   function signup(event) {
            event.preventDefault()
            alert("Hello! This is a JavaScript alert.");
        }
        document.getElementById('sign-up-btn').addEventListener('click', function(event) {
          // Prevent the form from submitting
          event.preventDefault();
  
          // Get values from the form
          var email = document.getElementById('emailid').value;
          var username = document.getElementById('userid').value;
  
          // Display an alert with the entered values
          alert('Thank you for signing up!\nEmail: ' + email + '\nUsername: ' + username);
      });