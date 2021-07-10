
var nameValid;
var emailValid;
var phoneValid;


//state
var states = ['Maharastra','Goa','A.P.','Arunachal','Assam','Bihar',
'Chhattisgarh','Gujrat','Haryana','Himachal','Jharkhand',
'Karnataka','Kerala','M.P.','Manipur','Meghalaya',
'Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
'Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Utterpradesh',
'West Bangal','Andaman','Chandigarh','Daman','Delhi','Jammu Kashmir',
'Ladakh','Lakshadweep','Pundechery'
];
var stateCode =  [27,54,81,108,135,162,189,216,243,270,297,324,351,378,405,432,
459,486,513,560,587,614,641,668,695,722,749,776,803,823,845,865,872,899,926,953];

var stateName = document.getElementById('state-name');

//Error Messages
var errorNameMsg = document.getElementById('name-error'); 
var phoneNoErrorMsg = document.getElementById('no-error');
var emailErrorMsg = document.getElementById('email-error');

//Name Validation

var fullname = document.getElementById('full-name');
fullname.addEventListener('input',function(n){
    var nameFormat = /^[a-zA-Z]{4,} [a-zA-Z]{4,}( [a-zA-Z]{4,})?$/;
    var currentName =  n.target.value

    if(!nameFormat.test(currentName))
    {
        fullname.style.backgroundColor = 'lightcoral';
        errorNameMsg.style.display = 'block';
        finalname = false;
    }
    else{
        fullname.style.backgroundColor = 'white';
        errorNameMsg.style.display = 'none';
        finalname = fullname.value;
    }

    if((finalname && fullname.value!=='' &&fullname.value!==undefined &&fullname.value!==null)){
        nameValid = true;      
    }
    else{
        nameValid = false;
    }
})

//email Validation

var email = document.getElementById('email-id');
email.addEventListener('input',function(e){
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var currentEmail = e.target.value
    // console.log(emailFormat.test(currentEmail));
    if(!emailFormat.test(currentEmail))
    {
        email.style.backgroundColor = 'lightcoral';
        emailErrorMsg.style.display = 'block';
        eMail = false;
    }
    else{
        email.style.backgroundColor = 'white';
        emailErrorMsg.style.display = 'none';
        eMail =  email.value;
        
    }
    if((eMail && email.value!=='' &&email.value!==undefined && email.value!==null)){
        emailValid = true;
    }
    else{
        emailValid =false;
    }
})


//phone number Validation

// company and opertor
var companyLogo = document.getElementById('container');
var CompanyState = document.getElementById('state');
var companyLogoImg = document.getElementById('logo');

var validCompany = false;
var validState = false;

var phoneNumber = document.getElementById('phone-no');
var match;
var no;
function formatPhoneNumber(phoneNumberString) {
   var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
   match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
   if (match) {
     return '(' + match[1] + ') ' + match[2] + '-' + match[3];
   }
   return null;
 }

phoneNumber.addEventListener('input',function(p){
   var phonef = /^(\+91)?[\d]{10}$/g;
   var currentPhoneNo = p.target.value;
   if(!phonef.test(currentPhoneNo))
   {
       phoneNumber.style.backgroundColor='lightcoral';
       phoneNoErrorMsg.style.display = 'block';
   }
   else{
       phoneNumber.value = formatPhoneNumber(currentPhoneNo);
       phoneNumber.style.textIndent = '150px';
        phoneNumber.style.backgroundColor ='white';
        phoneNoErrorMsg.style.display = 'none';
        
        if(match[1]>621 && match[1]<799){
            companyLogo.style.display = 'inline-block';
            companyLogoImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/50/Reliance_Jio_Logo_%28October_2015%29.svg';
            validCompany = true;
        }
        else if(match[1]>801 && match[1]<920){
            companyLogoImg.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Idea_Cellular_Logo.svg';
            companyLogo.style.display = 'inline-block';
            validCompany = true;
        }
        else if(match[1]>921 && match[1]<999)
        {
            companyLogoImg.src = 'https://www.seekpng.com/png/small/84-846019_vodafone-logo-vector-free-download-vodafone-sim-card.png';
            companyLogo.style.display = 'inline-block';
            validCompany = true;
        }
        else{
            validCompany = false;
            phoneNoErrorMsg.style.display = 'block';
        }
        var i;
        for(i = 0;i<stateCode.length;i++){
            if(stateCode[i]<match[2]){
                stateName.innerHTML = states[i];
                CompanyState.style.display = 'inline-block';
                validState = true;
            }
        }
   }
   if(validCompany && validState && phoneNumber.value!=='' && phoneNumber.value!==undefined && phoneNumber.value!==null){
       phoneValid = true;
   }
   else
   {
       phoneValid = false;
   }
})



//declaration

var verificationForm= document.getElementById('section2')
var registrationForm= document.getElementById('section1')
var username = document.getElementById('name-span');
var userPhoneNo = document.getElementById('number');

//otp box
var inputOtp = document.getElementById('otp');
var verificationBtn = document.getElementById('verification-btn');

//otp geration

var otp = 1;
var count=0;

function otpGenrator(){
    otp = Math.floor(1000 + Math.random() * 9000);
    count++; 
    alert('OTP given count  ' + count +'\nYour One Time Password is  :  '+otp);
}

//display events
var textmsg = document.querySelector('#form2 > div');
function displayForm(){
    verificationForm.style.display = 'block';
    textmsg.style.display = 'inline-block';
    username.innerHTML  =(fullname.value).substr(0,(fullname.value).indexOf(' '));
    userPhoneNo.innerHTML  = phoneNumber.value;
}


//submit event
var submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',function(b){
    if(nameValid && emailValid && phoneValid){
        registrationForm.style.display = 'none';
        b.preventDefault();
        displayForm();
        otpGenrator();
    }
    else{

        if(!nameValid){
            errorNameMsg.style.display = 'block';
            // alert('Please Enter Valid Name');
        }
        else if(!emailValid){
            emailErrorMsg.style.display = 'block';
            // alert('Please Enter Valid Email');
        }
        else if(!phoneValid){
            phoneNoErrorMsg.style.display = 'block';
            // alert('Please Enter Valid Phone Number');
        }
        else{
            alert('Please Enter Valid Inputs');
        }
        
    }
})


//
//otp verifaction form

verificationBtn.addEventListener('click',function(e){
    var otpvalid = /^[0-9]{4}$/;
    console.log(otpvalid.test(inputOtp.value))
    if(count<3){
        if(parseInt(inputOtp.value) === otp){
            open('http://pixel6.co');
        }
        else{
            e.preventDefault();
            inputOtp.value = '';
            displayForm();
            otpGenrator();
        }
    }
    else{
        open('./404_Error.html');
    }
   
})
