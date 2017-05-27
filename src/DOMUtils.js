(function(window, document) {
    //querySelector and querySelectorAll
    window.qs = function(selector) {
        return document.querySelector(selector);
    }
    window.qsa = function(selector) {
        return document.querySelectorAll(selector);
    }

    //set and get attribute
    window.HTMLElement.prototype.attr = function(name, value) {
        if (!value) {
            return this.getAttribute(name);
        }
        this.setAttribute(name, value);
    };

    //addEventListener
    window.HTMLElement.prototype.on = function(event, handler) {
        this.addEventListener(event, handler);
    }

    //create element
    window.cel = function(tagName) {
        return document.createElement(tagName);
    }

    //node list set and get attributes
    window.NodeList.prototype.attr = function(name, value) {
        if (!value) {
            for (var i = this.length - 1; i >= 0; i--) {
                if (this[i][name]) {
                    return
                }
            }
            return this[0][name];
        }

        for (var i = this.length - 1; i >= 0; i--) {
            this[i][name] = value;
        }

    }

    //node list remove attributes
    window.NodeList.prototype.rmattr = function(name) {
    	for (var i = this.length - 1; i >= 0; i--) {
            this[i].removeAttribute(name);
        }
    }
})(window, document);