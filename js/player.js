RelaxHub = typeof(RelaxHub) == "undefined" ? {} : RelaxHub;

RelaxHub.Player = function (el) {
    this._el = el;
};
RelaxHub.Player.setMode = function () {
    if (typeof swfobject !== 'undefined' && swfobject.getFlashPlayerVersion().major !== 0) {
        RelaxHub.Player.mode = "flash";
    } else {
        RelaxHub.Player.mode = "html5";
    }
    return RelaxHub.Player.mode;
};
RelaxHub.Player.prototype.getId = function () {
    return this._el.id;
};
RelaxHub.Player.prototype.insert = function ($appendTo) {
    if (RelaxHub.Player.mode == "flash") {
        this.insertFlash($appendTo);
    } else {
        this.insertHtml5($appendTo);
    }
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
RelaxHub.Player.prototype.insertHtml5 = function ($appendTo) {
    var el = this._el;

    this.insertBlock(el, $appendTo);

    this._player = new Uppod({m: "video", uid: el.id, file: el.streamUrl, st: el.html5Style});

    var playerEventHandler = function (event) {
        playerStatusChanged(event.target.id, event.type);
    };
    var playerHtmlElement = $("#" + el.id).get(0);
    playerHtmlElement.addEventListener("play", playerEventHandler);
    playerHtmlElement.addEventListener("stop", playerEventHandler);
    playerHtmlElement.addEventListener("end", playerEventHandler);
    playerHtmlElement.addEventListener("error", playerEventHandler);
    playerHtmlElement.addEventListener("player_error", playerEventHandler);
    playerHtmlElement.addEventListener("pause", playerEventHandler);
};
RelaxHub.Player.prototype.insertFlash = function ($appendTo) {
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
RelaxHub.Player.prototype.send = function (command) {
    if (RelaxHub.Player.mode == "flash") {
        uppodSend(this._el.id, command);
    } else {
        this._player[command.substring(0, 1).toUpperCase() + command.substring(1)].call(this._player);
    }
};