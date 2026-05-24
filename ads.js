/**
 * ==========================================
 * ZONQR TOOLS - CENTRALIZED AD MANAGER
 * ==========================================
 * இந்த ஒரு ஃபைலில் மாற்றங்களைச் செய்தால் உங்கள் 
 * வெப்சைட் முழுமைக்கும் விளம்பரங்கள் மாறிவிடும்.
 */

// 1. Global Ads (Social Bar & Popunder)
// நீங்கள் ads.js-ஐ இணைத்தாலே இந்த இரண்டு விளம்பரங்களும் தானாகவே லோட் ஆகிவிடும்.
(function loadGlobalAds() {
    // Social Bar Script
    const socialBar = document.createElement('script');
    socialBar.src = "https://balancedsuppercreed.com/14/bd/d9/14bdd96cc0568c80149e6ad07d83178a.js";
    socialBar.async = true;
    document.body.appendChild(socialBar);

    // Popunder Script
    const popUnder = document.createElement('script');
    popUnder.src = "https://balancedsuppercreed.com/b8/64/4b/b8644b412f45eef45c93c96a9b98c169.js";
    popUnder.async = true;
    document.body.appendChild(popUnder);
})();


// 2. Banner Ad (728x90) - Top / Bottom Banner
function loadBanner728(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Iframe Injection Method (To prevent website crash)
    const iframe = document.createElement('iframe');
    iframe.width = "728";
    iframe.height = "90";
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.maxWidth = "100%"; // Responsive for mobile
    container.appendChild(iframe);
    
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
        <style>body { margin: 0; padding: 0; display: flex; justify-content: center; }</style>
        <script>
          atOptions = {
            'key' : '0e4afde268c78b1f86ee5ef28a491a59',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        </scr`+`ipt>
        <script src="https://balancedsuppercreed.com/0e4afde268c78b1f86ee5ef28a491a59/invoke.js"></scr`+`ipt>
    `);
    doc.close();
}


// 3. Banner Ad (300x250) - Middle / Side Banner
function loadBanner300(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const iframe = document.createElement('iframe');
    iframe.width = "300";
    iframe.height = "250";
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.style.maxWidth = "100%";
    container.appendChild(iframe);
    
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
        <style>body { margin: 0; padding: 0; display: flex; justify-content: center; }</style>
        <script>
          atOptions = {
            'key' : '369d1a61b64dd3dec39f12e9944c804d',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        </scr`+`ipt>
        <script src="https://balancedsuppercreed.com/369d1a61b64dd3dec39f12e9944c804d/invoke.js"></scr`+`ipt>
    `);
    doc.close();
}


// 4. Smartlink
// இந்த ஃபங்ஷனை பட்டன் கிளிக் செய்யும்போது பயன்படுத்தலாம்
function openSmartLink() {
    window.open("https://balancedsuppercreed.com/i45vms09?key=78c856e6170a2fbba6022cec86b75a77", "_blank");
}
