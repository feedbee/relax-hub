var playerStatus; // used by Uppod player (SWF)
(function () {
    var options = {
        "player": {
            "url": "uppod/uppod.swf",
            "width": 280,
            "height": 37,
            "version": "9.0.115.0",
            "style": "uppod/audio154-647.txt"
        }
    };
    var channels = [{
        "id": "za-oblakami-relax",
        "comment": "За облаками Relax",
        "style": "uppod/audio154-647.txt",
        "url": "http://195.88.63.114:8000/relax",
        "bgcolor": "079ed7",
        "blockStyle": "dark",
        "site": "http://www.zaoblakami.ru"
    },{
        "id": "lite-sound-session",
        "comment": "Light sound session",
        "style": "uppod/audio154-808.txt",
        "url": "http://www.litesoundsession.com:8000/lite",
        "bgcolor": "388600",
        "blockStyle": "dark",
        "site": "http://www.litesoundsession.com"
    },{
        "id": "relax-fm",
        "comment": "Relax FM",
        "style": "uppod/audio154-809.txt",
        "url": "http://eu4.101.ru:8000/v13_1",
        "bgcolor": "ffdc8b",
        "blockStyle": "light",
        "site": "http://www.relax-fm.ru"
    },{
        "id": "sanfm-relax",
        "style": "uppod/audio154-810.txt",
        "comment": "SanFM Relax",
        "url": "http://sanfm.ru:8000/relax",
        "bgcolor": "bfe253",
        "blockStyle": "light",
        "site": "http://sanfm.ru/relax/"
    },{
        "id": "radio-tunes-relaxation",
        "comment": "RadioTunes Relaxation",
        "style": "uppod/audio154-811.txt",
        "url": "http://pub5.radiotunes.com/radiotunes_relaxation_aacplus?type=.flv",
        "bgcolor": "005caa",
        "blockStyle": "dark",
        "site": "http://www.radiotunes.com/relaxation"
    },{
        "id": "relax-ua",
        "comment": "Relax (UA)",
        "style": "uppod/audio154-812.txt",
        "url": "http://online-radiorelax2.tavrmedia.ua/RadioRelax_Instrumental",
        "bgcolor": "white",
        "blockStyle": "white",
        "site": "http://www.radiorelax.com.ua"
    }];

    channels.forEach(function(el) {
        $('<div class="block ' + el.blockStyle + ' block-' + el.id + '" style="background-color:#' + el.bgcolor + ';" data-player-id="' + el.id + '">'
            +     '<div class="display"></div>'
            +     '<div><img class="block-logo" src="images/' + el.id + '.png" alt="' + el.comment + '" /></div>'
            +     '<div id="' + el.id + '"></div>'
            +     '<div class="block-site"><a href="' + el.site + '">' + el.site + '</a></div>'
            + '</div>')
        .on("click", function(e) {
            if (["OBJECT", "A"].indexOf(e.target.tagName) == -1) {
                uppodSend($(this).data('player-id'), 'toggle');
            }
        })
        .appendTo($('#wrapper'));

        var flashvars = {
            "uid": el.id,
            "file": el.url,
            "comment": el.comment,
            "st": el.style || options.player.style
        };
        var params = {
            "id": el.id,
            "bgcolor": el.bgcolor, 
            "allowScriptAccess": "always"
        };
        new swfobject.embedSWF(options.player.url, el.id, options.player.width, options.player.height, options.player.version, false, flashvars, params);
    });

    var renderPlayerStatus = function (playerId, text) {
        var b = $('#' + playerId).parent().find('.display');
        b.text(text);
    };

    var playSymbol = "\u25b8",
        pauseSymbol = "\u2759\u2759";
    var addTitlePrefix = function (prefix) {
        document.title = prefix + " " + document.title;
    };
    var clearTitlePrefix = function () {
        if (playSymbol + " " == document.title.substring(0, playSymbol.length + 1)) {
            document.title = document.title.substring(playSymbol.length + 1);
        } else if (pauseSymbol + " " == document.title.substring(0, pauseSymbol.length + 1)) {
            document.title = document.title.substring(pauseSymbol.length + 1);
        }
    };
    var setTitlePrefix = function (prefix) {
        clearTitlePrefix();
        if (prefix != "") {
            addTitlePrefix(prefix);
        }
    };

    var setStatus = function (playerId, text) {
        renderPlayerStatus(playerId, text);
        setTitlePrefix(text);
    };

    playerStatus = function (playerId, status) {
        switch (status) {
            case "play":
                setStatus(playerId, playSymbol);
                break;

            case "stop":
            case "end":
            case "error":
                setStatus(playerId, "");
                break;

            case "pause":
                setStatus(playerId, pauseSymbol);
                break;
        }
    };
})();
