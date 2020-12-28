/* This is the snippet that is loaded with after_footer_scripts */
/* Its main goal is to show the cookie consent popup and, if cookies are accepted,
   then load the google analytics and disqus code */
window.cookieconsent.initialise({
"palette": {
    "popup": {
        "background": "#252e39"
    },
    "button": {
        "background": "transparent",
        "text": "#14a7d0",
        "border": "#14a7d0"
    }
    },
    "type": "opt-in",
    "content": {
    "href": "https://aldostrof.github.io/terms"
    },
onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
    // enable cookies
    loadGAonConsent();
    loadDisqusOnConsent();
    }
    if (type == 'opt-out' && !didConsent) {
    // disable cookies
    }
},
onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
    // enable cookies
    loadGAonConsent();
    loadDisqusOnConsent();
    }
    if (type == 'opt-out' && !didConsent) {
    // disable cookies
    }
},
onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
    // disable cookies
    }
    if (type == 'opt-out') {
    // enable cookies
    loadGAonConsent();
    loadDisqusOnConsent();
    }
}
});