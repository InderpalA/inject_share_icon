# inject_share_icon

## Description
This code first gets all of the instances of "div.widget__shares.share-panel" from the DOM.
If there is more than one instance, the createTelegram function will first create the share icon, then create the SVG element and then create the Path element.
The Path element is then appended as a child of the SVG, which gets appended as a child of the <a>
Positioned on the page accordingly

## Image
![image](https://github.com/InderpalA/inject_share_icon/assets/107916729/e9b525cf-fc6c-4e41-bde5-6a2b100ec6c9)
