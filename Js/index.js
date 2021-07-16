
//states
var states = ['Maharastra','Goa','A.P.','Arunachal','Assam','Bihar',
'Chhattisgarh','Gujrat','Haryana','Himachal','Jharkhand',
'Karnataka','Kerala','M.P.','Manipur','Meghalaya',
'Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
'Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Utterpradesh',
'West Bangal','Andaman','Chandigarh','Daman','Delhi','Jammu Kashmir',
'Ladakh','Lakshadweep','Pundechery'];


//Name Validation
var nameValid;
var fullname = document.getElementById('full-name');
fullname.addEventListener('input',function(n){
    var nameFormat = /^[a-zA-Z]{4,} [a-zA-Z]{4,}( [a-zA-Z]{4,})?$/;
    var currentName =  n.target.value

    if(!nameFormat.test(currentName))
    {
        fullname.style.backgroundColor = '#ff3333';
        document.querySelector('input + p:first-of-type').style.display = 'inline-block';
        finalname = false;
    }
    else{
        fullname.style.backgroundColor = 'white';
        document.querySelector('input + p:first-of-type').style.display = 'none';
        finalname = fullname.value;
    }

    if((finalname && fullname.value!=='' &&fullname.value!==undefined &&fullname.value!==null)){
        nameValid = true;      
    }
    else{
        nameValid = false;
    }
})

//Email Validation
var emailValid;
var email = document.getElementById('email-id');
email.addEventListener('input',function(e){
    var emailFormat  = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var currentEmail = e.target.value
    if(!emailFormat.test(currentEmail))
    {
        email.style.backgroundColor = '#ff3333';
        document.querySelector('input + p:nth-of-type(2)').style.display = 'inline-block';
        eMail = false;
    }
    else{
        email.style.backgroundColor = 'white';
        document.querySelector('input + p:nth-of-type(2)').style.display = 'none';
        eMail =  email.value;
        
    }
    if((eMail && email.value!=='' &&email.value!==undefined && email.value!==null)){
        emailValid = true;
    }
    else{
        emailValid =false;
    }
})


/*Phone Number Validation*/
var phoneNo;
var phoneNumber = document.getElementById('phone-no');

//company Logo Validation

function CompanyLogoValidation(){
    var match1 = parseInt(phoneNo.slice(1,4))
    if(match1>621 && match1<799){
        document.querySelector('div div img:first-of-type').style.display = 'none';
        document.querySelector('div div img:nth-of-type(2)').style.display = 'inline-block';
        return true;
    }
    else if(match1>801 && match1<920){
        document.querySelector('div div img:nth-of-type(3)').style.display = 'inline-block';
        document.querySelector('div div img:first-of-type').style.display = 'none';
        return true;
    }
    else if(match1>921 && match1<999)
    {
        document.querySelector('div div img:nth-of-type(4)').style.display = 'inline-block';
        document.querySelector('div div img:first-of-type').style.display = 'none';
        return true;
    }
    else{
        return false;
        document.querySelector('div + p').style.display = 'inline-block';
    }
}


//State Validation
function stateValidation(){
    var match2 = parseInt(phoneNo.slice(6,9));
    if(match2){
        document.querySelector('div + span').innerHTML = states[Math.floor(match2/36)];
         return true;
    }
    else{
        return false;
    }
}


//phone Number Input Event
phoneNumber.addEventListener('input',function(p){
    var phoneRegExp = /^[\d]{10}/;
    phoneNumber.style.backgroundColor='#ff3333';
    document.querySelector('div + p').style.display = 'inline-block';
    if(p.target.value.length==1){
        phoneNumber.value = '(' + phoneNumber.value
    }
    if(p.target.value.length==4){
        phoneNumber.value =   phoneNumber.value +') '
        companynumber = phoneNumber.value;
    }
    if(p.target.value.length==9){
        phoneNumber.value = phoneNumber.value + '-'
    }
    if(p.target.value.length===14)
    {
        phoneNumber.style.backgroundColor='white';
        phoneNo = phoneNumber.value;
    }
    if(!phoneNo){
        phoneNumber.style.backgroundColor='#ff3333';
        document.querySelector('div + p').style.display = 'inline-block';
    }
    else{
        phoneNumber.style.textIndent = '150px';
        phoneNumber.style.backgroundColor ='white';
        document.querySelector('div + p').style.display = 'none';
        var validCompany = CompanyLogoValidation();
        var validState = stateValidation();
        // console.log(phoneNumber.value)
    }
    if(validCompany && validState && phoneNumber.value!=='' && phoneNumber.value!==undefined && phoneNumber.value!==null){
        phoneValid = true;
    }
    else
    {
        phoneValid = false;
    }
})
var otp = 1;
var count=1;
var flag=0;

//Local Storage
function sendValue(){
    localStorage.setItem('firstName',fullname.value.substr(0,(fullname.value).indexOf(' ')));
     localStorage.setItem('phoneNumber',phoneNumber.value);
    localStorage.setItem('otp',otp);
     localStorage.setItem('flag',flag);
    window.location.href = './verification.html';
}

//Submit Event

var submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',function(){
    if(nameValid && emailValid && phoneValid){  
        flag =1;  
        otp = Math.floor(1000 + Math.random() * 9000);
        alert('OTP given count  ' + count +'\nYour One Time Password is  :  '+otp);
        sendValue();
        open('./verification.html');
    }
    else{

        if(!nameValid){
            document.querySelector('input + p:first-of-type').style.display = 'inline-block';
        }
        else if(!emailValid){
            document.querySelector('input + p:nth-of-type(2)').style.display = 'inline-block';
        }
        else if(!phoneValid){
            document.querySelector('div + p').style.display = 'inline-block';
        }
        else{
            alert('Please Enter Valid Inputs');
        }
        
    }
})
