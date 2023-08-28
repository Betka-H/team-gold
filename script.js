function toggleContent(contentId) {
    var content = document.getElementById(contentId);

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
};

let nlcustomcheck;

/* function nlcustomradiooff(){
        nlcustomcheck=false;
        console.log("custom false");
}; */

/* function nlcustomradioon(){
    nlcustomcheck=true;
    console.log("custom true");
}; */



function subalert(){
    alert("Thank you for subscribing!\nYour data may or may not have been recorded.");
}

function toggleDiv(show) {
    const div = document.getElementById('myDiv');
    div.style.display = show ? 'block' : 'none';
  }



  let totalDays = 0;


  function updateDaysint2(value) {
    totalDays = value;
    console.log(totalDays);
  }



/* 
  let totalDays = 0;

  function updateTotalDays() {
    const months = parseInt(document.querySelector('input[name="nfcmonth"]').value);
    const weeks = parseInt(document.querySelector('input[name="nfcweek"]').value);
    const days = parseInt(document.querySelector('input[name="nfcday"]').value);

    totalDays = (months * 30) + (weeks * 7) + days; // Assuming 30 days per month
    document.getElementById('totalDays').textContent = totalDays;
  } */



 
                            
                              function updateTotalDays() {
                                const months = parseInt(document.querySelector('input[name="nfcmonth"]').value);
                                const weeks = parseInt(document.querySelector('input[name="nfcweek"]').value);
                                const days = parseInt(document.querySelector('input[name="nfcday"]').value);
                            
                                totalDays = (months * 30) + (weeks * 7) + days; // Assuming 30 days per month
                                console.log(totalDays);
                              }