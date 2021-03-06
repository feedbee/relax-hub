RelaxHub = typeof(RelaxHub) == "undefined" ? {} : RelaxHub;

// RelaxHub.Player
// ---------------

RelaxHub.Player = function (el) {
    this._el = el;
    this._events = {};
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

RelaxHub.Player.prototype.addEventListener = function (eventName, handler) {
    if (!(eventName in this._events)) {
        this._events[eventName] = [];
    }

    this._events[eventName].push(handler);
};

RelaxHub.Player.prototype.raiseEvent = function(eventName, args) {
    var currentEvents = this._events[eventName];
    if (!currentEvents) {
        return;
    }

    for (var i = 0; i < currentEvents.length; i++) {
        if (typeof currentEvents[i] == 'function') {
            currentEvents[i].call(this, args);
        }
    }
};

// RelaxHub.Player.Flash
// ---------------------

RelaxHub.Player.Flash = function (el) {
    RelaxHub.Player.prototype.constructor.call(this, el);
    RelaxHub.Player.Flash.instances[el.id] = this;
};

RelaxHub.Player.Flash.prototype = new RelaxHub.Player();
RelaxHub.Player.Flash.prototype.constructor = RelaxHub.Player.Flash;

RelaxHub.Player.Flash.instances = {};
// called from uppod-api.js
RelaxHub.Player.Flash.handleGlobalEvent = function (playerID, status) {
    var player = RelaxHub.Player.Flash.instances[playerID];
    if (player) {
        switch (status) {
            case "play":
                player.raiseEvent('onPlay');
                break;

            case "stop":
            case "end":
            case "error":
                player.raiseEvent('onStop');
                break;

            case "pause":
                player.raiseEvent('onPause');
                break;
        }
    }
};

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

    // Subscribe to player events
    var self = this;
    var playHandler = function () {
        self.raiseEvent('onPlay');
    };
    var stopHandler = function () {
        self.raiseEvent('onStop');
    };
    var pauseHandler = function () {
        self.raiseEvent('onPause');
    };

    var playerHtmlElement = $("#" + el.id).get(0);
    playerHtmlElement.addEventListener("play", playHandler);
    playerHtmlElement.addEventListener("stop", stopHandler);
    playerHtmlElement.addEventListener("end", stopHandler);
    playerHtmlElement.addEventListener("error", stopHandler);
    playerHtmlElement.addEventListener("player_error", stopHandler);
    playerHtmlElement.addEventListener("pause", pauseHandler);
};

RelaxHub.Player.Html5.prototype.send = function (command) {
    this._player[command.substring(0, 1).toUpperCase() + command.substring(1)].call(this._player);
};

// RelaxHub.Player.Collection
// --------------------------

RelaxHub.Player.Collection = function () {
    this._players = [];
    this._activePlayer;
};
RelaxHub.Player.Collection.prototype.add = function (player) {
    this._players.push(player);
    if (!this._activePlayer) {
        this._activePlayer = player;
    }

    var self = this;
    var setActiveAndStopOthers = function () {
        self._activePlayer = this;
        self.stopOthers(this);
    };
    player.addEventListener("onPlay", setActiveAndStopOthers);
};
RelaxHub.Player.Collection.prototype.send = function (command) {
    if (this._activePlayer) {
        this._activePlayer.send(command);
    }
};
RelaxHub.Player.Collection.prototype.stopOthers = function (player) {
    this._players.forEach(function(playerI) {
        if (playerI.getId() != player.getId()) {
            playerI.send('stop');
        }
    });
};
RelaxHub.Player.Collection.prototype.getPrevPlayer = function () {
    if (this._players.length < 2) {
        return undefined;
    } else if (!this._activePlayer) {
        return this._players[0];
    } else {
        for (var i = 0; i < this._players.length; i++) {
            if (this._players[i].getId() == this._activePlayer.getId()) {
                return i > 0 ? this._players[i - 1] : this._players[this._players.length - 1];
            }
        }
    }
};
RelaxHub.Player.Collection.prototype.getNextPlayer = function () {
    if (this._players.length < 2) {
        return undefined;
    } else if (!this._activePlayer) {
        return this._players[0];
    } else {
        for (var i = 0; i < this._players.length; i++) {
            if (this._players[i].getId() == this._activePlayer.getId()) {
                return this._players.length > i + 1 ? this._players[i + 1] : this._players[0];
            }
        }
    }
};