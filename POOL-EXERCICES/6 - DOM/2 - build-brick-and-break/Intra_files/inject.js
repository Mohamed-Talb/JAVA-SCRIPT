// ---------------------------------------------- Change Logo & title
if (location.pathname === "/") {
  document.title = "Zone01 Oujda";
}
const logoDiv = document.querySelector('.logo')
if (logoDiv) {
  logoDiv.style.width = '150px'
  logoDiv.style.height = '62px'
  logoDiv.style.background = 'url(/assets/img/logo_.png)'
  logoDiv.style.backgroundPosition = 'center'
  logoDiv.style.backgroundSize = 'contain'
  logoDiv.style.backgroundRepeat = 'no-repeat'
}
// ----------------------------------------------

// ---------------------------------------------- Page container
// add extra margin top for logo space on mobile

const pageConatiner = document.querySelector('.page-container')
if (pageConatiner) {
  pageConatiner.style.marginTop = '50px'
}
// ----------------------------------------------

// ---------------------------------------------- Page title
const titleContent = document.querySelector('#welcome')

const titleString = `
    Welcome to <span style="color: #0062F9">Zone01 Oujda!</span>
`
if (document.querySelector('.title')) {
  titleContent.innerHTML = titleString
}
// ----------------------------------------------


// ---------------------------------------------- Left Side Text and steps
const leftSideContent = `
<h2>Unlock your talent, kickstart your tech career & Recode your life</h2>
Take your chance now with our online 90-minute games to test your cognitive skills and be invited to the "Pool" (Piscine) Selections!
<br>
<br>

<h3>STEP 1</h3>
<strong>REGISTER ONLINE: <span style="color: #0062F9">ARE YOU READY TO RECODE YOUR LIFE? </span></strong>
<p>Register and create your account by clicking the "Register" button.</p>
<br>

<h3>STEP 2</h3>
<strong>PLAY THE GAMES : <span style="color: #0062F9">REVEAL YOUR POTENTIAL TALENT!</span></strong>
<p>
  Complete the 90-minute οnline cognitive games that challenge your memory and logical thinking.<br>
  In case of successful results, the platform will notify you of the next steps.<br>
  In case of unsuccessful results, you have 2 more tries to do your best!
</p>
<br>

<h3>STEP 3</h3>
<strong>ATTEND A CHECK-IN EVENT : <span style="color: #0062F9">DISCOVER YOUR CAMPUS </span></strong>
<p>Get a good score at the games to be invited by email to attend the check-in: a meeting to present Zone01 Oujda and its facilities in Oujda.</p>
<br>

<h3>STEP 4</h3>
<strong>MAKE IT THROUGH THE “POOL”: <span style="color: #0062F9">TAKE THE BIG PLUNGE!</span></strong>
<p>Successfully complete the 4-week immersive “Pool” challenge on-site, at Zone01 Oujda</p>
<br>

<h3>STEP 5</h3>
<strong><span style="color: #0062F9">KICKSTART YOUR TECH CAREER & BUILD YOUR FUTURE! </span></strong>
<p>Start your fascinating coding journey at Zone01 Oujda!</p>

<br>
`
const leftDiv = document.querySelector('.left .text')

if (leftDiv) {
  leftDiv.innerHTML = leftSideContent
}
// ----------------------------------------------

// ---------------------------------------------- Right Side Video
//const rightContent = document.querySelector('.right')
//  if (rightContent) {
//    rightContent.insertAdjacentHTML("afterbegin",
//      `
//        <div class="ifram-ytb" style="position: relative;width: 100%;padding-bottom: 56.25%; height: 0;">
//          <iframe width="560" height="315" src="https://www.youtube.com/embed/SOJ2SY7CvAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" style="  position: absolute;top:0;left: 0;width: 100%;height: 100%;"></iframe>
//        </div>
//      `);
//    document.querySelector('#error').style.zIndex = "inherit"
//  }
// ----------------------------------------------

// ---------------------------------------------- Contact Email
if (document.querySelector('.contact')) {
  const contactContent = `
      <div id="about-us">Want to know more about us ?</div>
      <a id="zone-contact-link" href="mailto:contact@zone01oujda.ma" style="color: #0062F9, border-bottom: 1px solid #0062F9">
          <span class="arrow">→</span>
          <span id="contact-span">Contact us</span>
      </a>
      .
    `

  const contactDiv = document.querySelector('.contact')
  contactDiv.innerHTML = contactContent

}
// ----------------------------------------------

// ---------------------------------------------- Auth Buttons
//const signInButtonsContainer = document.querySelector("#buttons")
//signInButtonsContainer.style.marginTop = "1rem";
//signInButtonsContainer.style.gap = "2rem";
//signInButtonsContainer.style.alignItems = "flex-end";
//signInButtonsContainer.style.flexDirection = "column";

const SwithAuthWrraper = document.querySelector(".switch-authentication")
SwithAuthWrraper.style.alignItems = "center";
SwithAuthWrraper.style.marginRight = "0rem";
SwithAuthWrraper.style.order = "2";


// Changing the color of the sign in button
const PrimaryAuthButton = document.querySelector(".authenticate-button");
if (PrimaryAuthButton) {
  PrimaryAuthButton.style.background = "#0062F9";
  PrimaryAuthButton.style.color = "#ffffff";
}

const SecondaryAuthSpanButton = document.querySelector('#switch-authentication')
if (SecondaryAuthSpanButton) {
  // SecondaryAuthSpanButton.style.color = '#fff';
  // SecondaryAuthSpanButton.style.border = '3px solid #fff';
  // SecondaryAuthSpanButton.style.background = "rgb(0 98 249 / 13%)"
  // SecondaryAuthSpanButton.style.padding = "0.7rem 1rem";


  SecondaryAuthSpanButton.style.color = '#0047a6';
  SecondaryAuthSpanButton.style.borderBottom = '3px solid #0047a6';
  SecondaryAuthSpanButton.style.background = "#e3e3e7"
  SecondaryAuthSpanButton.style.padding = "0.8rem 1rem";

  SecondaryAuthSpanButton.style.borderRadius = '2px';
  SecondaryAuthSpanButton.style.fontSize = "0.7rem";
  SecondaryAuthSpanButton.style.letterSpacing = "1px";
  SecondaryAuthSpanButton.style.textTransform = "uppercase";
  SecondaryAuthSpanButton.style.width = "160px";
  SecondaryAuthSpanButton.style.display = "flex";
  SecondaryAuthSpanButton.style.justifyContent = "center";
}

const forgotPasswordSpan = document.querySelector('.forgot-password span');
if (forgotPasswordSpan) {
  forgotPasswordSpan.style.color = '#0062F9';
  forgotPasswordSpan.style.borderBottom = 'solid 1px #0062F9';
}
// ----------------------------------------------#

// ---------------------------------------------- Google Tag Manager

(function (w, d, s, l, i) {
  w[l] = w[l] || []; w[l].push({
    'gtm.start':
      new Date().getTime(), event: 'gtm.js'
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-W3SKNVSL');


// ---------------------------------------------- Google Tag Manager
// <!-- Google Tag Manager -->
// document.head.innerHTML += `
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-W3SKNVSL');</script>
// `
// <!-- End Google Tag Manager -->

// <!-- Google Tag Manager (noscript) -->
// document.body.innerHTML += `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3SKNVSL"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
// <!-- End Google Tag Manager (noscript) -->


// document.body.innerHTML += `<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-W3SKNVSL"></script>'
// <script>
// window.dataLayer = window.dataLayer || [];
// function gtag() {
// dataLayer.push(arguments);
// }
// gtag('js', new Date());
// gtag('config', 'GTM-W3SKNVSL');
// </script>`

// ----------------------------------------------


