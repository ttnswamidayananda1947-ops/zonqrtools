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
/*prompt for AI model for access this 
Act as my expert web developer. I have a centralized ad management system configured in a file named `ads.js` for my web tools platform.

Here is my current Ad Architecture in `ads.js`:
1. Global Ads (Social Bar & Popunder) are auto-loaded via an IIFE.
2. 728x90 Banner Ad function: `loadBanner728(containerId)` (Uses iframe injection to prevent document.write crashes).
3. 300x250 Banner Ad function: `loadBanner300(containerId)` (Uses iframe injection).
4. Smartlink function: `openSmartLink()` (Used for onClick events on buttons).

Whenever I ask you to create or modify an HTML web tool for me, YOU MUST follow these strict rules for integrating ads:
- DO NOT generate or inject raw ad scripts (like Adsterra scripts) directly into the HTML.
- Always link my central ad file right before the closing `</body>` tag: `<script src="ads.js"></script>`.
- To place a top or bottom banner (728x90), create an empty div and call the function below it: 
  `<div id="top-ad-space"></div><script>loadBanner728('top-ad-space');</script>`
- To place a middle or side banner (300x250), use: 
  `<div id="middle-ad-space"></div><script>loadBanner300('middle-ad-space');</script>`
- Use `<button onclick="openSmartLink()">` for any primary download/action buttons where I request a smartlink.

Understand this structure. Now, I will give you the requirements for my new web tool. Please generate the HTML/CSS/JS fully integrated with this ad structure.
*/
