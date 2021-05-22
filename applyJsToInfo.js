function btnScrollTo(){
    let btnScrollTo = document.querySelector('#btnAbout');
    let section1 = document.querySelector('#aboutsection');
    let s1coords = section1.getBoundingClientRect();
    window.scrollTo({
        left:  s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior:'smooth',});
}
function btnQualification(){
    let btnQualification = document.querySelector('#btnQuali');
    let section1 = document.querySelector('#Qualificationsection');
    let s1coords = section1.getBoundingClientRect();
 window.scrollTo({
         left:  s1coords.left + window.pageXOffset,
         top: s1coords.top + window.pageYOffset,
        behavior:'smooth',});
}

function btnSkills(){
    let btnSkills = document.querySelector('#btnSkill');
    let section1 = document.querySelector('#Skillssection');
    let s1coords = section1.getBoundingClientRect();
    window.scrollTo({
        left:  s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior:'smooth',});
}

function btnCertificate(){
    let btnCertificate = document.querySelector('#btnCerti');
    let section1 = document.querySelector('#Certificatesection');
    let s1coords = section1.getBoundingClientRect();
    window.scrollTo({
        left:  s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior:'smooth',});
}

function btnContacts(){
    let btnContacts = document.querySelector('#btnContact');
    let section1 = document.querySelector('#Contactsection');
    let s1coords = section1.getBoundingClientRect();
    window.scrollTo({
        left:  s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior:'smooth',});
}



