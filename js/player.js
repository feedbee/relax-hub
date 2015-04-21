RelaxHub = typeof(RelaxHub) == "undefined" ? {} : RelaxHub;

// RelaxHub.Player
// ---------------

RelaxHub.Player = function (el) {
    this._el = el;
};

RelaxHub.Player.detectMode = function () {
    if (typeof swfobject !== 'undefined' && swfobject.getFlashPlayerVersion().major !== 0) {
        RelaxHub.Player.mode = "flash";
    } else {
        RelaxHub.Player.mode = "html5";
    }
    return RelaxHub.Player.mode;
};

RelaxHub.Player.create = function (el) {
    if (!RelaxHub.Player.mode) {
        RelaxHub.Player.detectMode();
    }
    if (RelaxHub.Player.mode == 'flash') {
        return new RelaxHub.Player.Flash(el);
    } else {
        return new RelaxHub.Player.Html5(el);
    }
};
RelaxHub.Player.handleGlobalEvent = function (playerID, event) {
    RelaxHub.Player.onStatusChanged.call(undefined, playerID, event);
};  

RelaxHub.Player.prototype.getId = function () {
    return this._el.id;
};

RelaxHub.Player.prototype.insertBlock = function (el, $appendTo) {
    var el = this._el;
    var self = this;
    return $('<div class="block ' + el.blockStyle + ' block-' + el.id + '" style="background-color:#' + el.bgcolor + ';" data-player-id="' + el.id + '">'
        +     '<div class="display"></div>'
        +     '<div><img class="block-logo" src="images/' + el.id + '.png" alt="' + el.comment + '" /></div>'
        +     '<div class="player" id="' + el.id + '"></div>'
        +     '<div class="block-site"><a href="' + el.siteUrl + '">' + el.siteUrl.match(/https?:\/\/(.+)/)[1] + '</a></div>'
        + '</div>')
    .on("click", function(e) {
        if (["OBJECT", "A"].indexOf(e.target.tagName) == -1) {
            self.send("toggle");
        }
    })
    .appendTo($appendTo);
};

// RelaxHub.Player.Flash
// ---------------------

RelaxHub.Player.Flash = function (el) {
    RelaxHub.Player.prototype.constructor.call(this, el);
};

RelaxHub.Player.Flash.prototype = new RelaxHub.Player();
RelaxHub.Player.Flash.prototype.constructor = RelaxHub.Player.Flash;

RelaxHub.Player.Flash.prototype.insert = function ($appendTo) {
    var el = this._el;

    this.insertBlock(el, $appendTo);

    var flashvars = {
        "uid": el.id,
        "file": el.streamUrl,
        "comment": el.comment,
        "st": el.style
    };
    var params = {
        "id": el.id,
        "bgcolor": el.bgcolor,
        "allowScriptAccess": "always"
    };
    new swfobject.embedSWF(el.playerUrl, el.id, el.width, el.height, el.version, false, flashvars, params);
};

RelaxHub.Player.Flash.prototype.send = function (command) {
    uppodSend(this._el.id, command);
};

// RelaxHub.Player.Html5
// ---------------------

RelaxHub.Player.Html5 = function (el) {
    RelaxHub.Player.prototype.constructor.call(this, el);
};

RelaxHub.Player.Html5.prototype = new RelaxHub.Player();
RelaxHub.Player.Html5.prototype.constructor = RelaxHub.Player.Html5;

RelaxHub.Player.Html5.prototype.insert = function ($appendTo) {
    var el = this._el;

    this.insertBlock(el, $appendTo);

    this._player = new Uppod({m: "video", uid: el.id, file: el.streamUrl, st: el.html5Style});

    var playerEventHandler = function (event) {
        RelaxHub.Player.handleGlobalEvent(event.target.id, event.type);
    };
    var playerHtmlElement = $("#" + el.id).get(0);
    playerHtmlElement.addEventListener("play", playerEventHandler);
    playerHtmlElement.addEventListener("stop", playerEventHandler);
    playerHtmlElement.addEventListener("end", playerEventHandler);
    playerHtmlElement.addEventListener("error", playerEventHandler);
    playerHtmlElement.addEventListener("player_error", playerEventHandler);
    playerHtmlElement.addEventListener("pause", playerEventHandler);
};

RelaxHub.Player.Html5.prototype.send = function (command) {
    this._player[command.substring(0, 1).toUpperCase() + command.substring(1)].call(this._player);
};