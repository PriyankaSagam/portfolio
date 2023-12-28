// ===================About=====================
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active-tab")
    }

// =============google-sheets-connecting to form====================

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxB15BVN219U4oRF4OcPrADfWzBbvAN55h_-C9GmaeOHrwg9uqx8W7ddxvtGaqhUFs8/exec'
    const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
              msg.innerHTML = "Message sent successfully"
              sectTimeout(function () {
                  msg.innerHTML=""
              }, 5000)
              form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })