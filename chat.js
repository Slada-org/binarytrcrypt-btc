const siteName = document.location.host;
if (document.getElementById('site-name') === null) {
  console.log('Nothing here');
} else {
  document.getElementById('site-name').textContent = siteName;
}

// (function blackList () {
//   const blackListed = localStorage.getItem('blackList');

//   // if (blackListed === null)

//   if (blackListed === 'true' || blackListed !== null) {
//     console.log(blackListed);
//     document.location.href = '/user.html';
//   }
// } ());


if (document.location.origin === 'https://octaprotraders.online') {
  console.log('LocalHost');

  var script = document.createElement('script');

  script.onload = function () {
    console.log('Loading Script...');
  }
  script.src = "https://code.tidio.co/x7lqctxwoizauxp5d6dry4sq3ly4x928.js";

  document.head.appendChild(script);

      // <script src="//code.tidio.co/q80hpvc9ytpns2itn9kyxwwbv7hvcztn.js" async></script>
} else {
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6630f9f21ec1082f04e954aa/1hsnl0nre';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
}
