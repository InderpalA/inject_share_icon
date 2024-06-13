const shareParentElements = document.querySelectorAll('div.widget__shares.share-panel');

function createTelegram(position) {
    const url = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href;

    const element = shareParentElements[position];

    // Create the Button for Telegram
    let mobileTelegramIcon = document.createElement("a");
    mobileTelegramIcon.href = `https://t.me/share/url?url=${url}`;
    mobileTelegramIcon.setAttribute('data-track-share', 'Telegram');
    mobileTelegramIcon.className = "share share-popup share-tg rm-stats-tracked";
    mobileTelegramIcon.rel = "noopener noreferrer";
    mobileTelegramIcon.setAttribute('aria-label', 'Share on Telegram');

    // Create the SVG element
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "15");
    svg.setAttribute("width", "17.5");
    svg.setAttribute("viewBox", "0 0 448 512");

    // Create the path element and set its attributes
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "white");
    path.setAttribute("d", "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z");

    // Append the path to the SVG
    svg.appendChild(path);

    // Append the SVG to the anchor element
    mobileTelegramIcon.appendChild(svg);

    // Append Created Element to the parent
    element.appendChild(mobileTelegramIcon);

}


if (shareParentElements.length >= 2) {
    createTelegram(2);      // bottom of the page
    createTelegram(1);      // top of the page for mobile only
}
