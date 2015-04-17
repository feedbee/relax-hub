var playerStatus;
(function () {
    var options = {
        "player": {
            "url": "uppod/uppod.swf",
            "width": 280,
            "height": 35,
            "version": "9.0.115.0",
            "style": "uppod/audio154-647.txt"
        }
    };
    var channels = [
        {
            "id": "za-oblakami-relax",
            "comment": "За облаками Relax",
            "url": "http://195.88.63.114:8000/relax",
            "bgcolor": "079ed7",
            "blockStyle": "dark",
            "site": "www.zaoblakami.ru"
        },
        {
            "id": "lite-sound-session",
            "comment": "Light sound session",
            "url": "http://www.litesoundsession.com:8000/lite",
            "bgcolor": "388600",
            "blockStyle": "dark",
            "site": "www.litesoundsession.com"
        },
        {
            "id": "relax-fm",
            "comment": "Relax FM",
            "url": "http://92.241.191.130/stream/4014/?format=flv",
            "bgcolor": "ffdc8b",
            "blockStyle": "light",
            "site": "www.relax-fm.ru"
        },
        {
            "id": "sanfm-relax",
            "comment": "SanFM Relax",
            "url": "http://sanfm.ru:8000/relax",
            "bgcolor": "bfe253",
            "blockStyle": "light",
            "site": "sanfm.ru/relax/"
        },
        {
            "id": "skyfm-relaxation",
            "comment": "SKY.FM Relaxation",
            "url": "http://pub3.sky.fm/sky_relaxation_aacplus?type=.flv",
            "bgcolor": "54a6d6",
            "blockStyle": "dark",
            "site": "sky.fm"
        },
        {
            "id": "relax-ua",
            "comment": "Relax (UA)",
            "url": "http://stream.radiorelax.com.ua/Relax",
            "bgcolor": "white",
            "blockStyle": "white",
            "site": "www.radiorelax.com.ua"
        }        
    ];

    channels.forEach(function(el) {
        $('<div class="block ' + el.blockStyle + '" style="background-color:#' + el.bgcolor + ';" data-player-id="' + el.id + '">'
                    + '<div class="display"></div>'
                    + '<div><img src="images/' + el.id + '.png" alt="' + el.comment + '" /></div>'
                    + '<div id="' + el.id + '"></div>'
                    + '<div class="block-site"><a href="http://' + el.site + '">' + el.site + '</a></div>'
                + '</div>')
            .on("click", function(e) {
                if (e.target.tagName != "OBJECT") uppodSend($(this).data('player-id'), 'toggle');
            })
            .appendTo($('#wrapper'));

        var flashvars = {
            "uid": el.id,
            "file": el.url,
            "comment": el.comment,
            "st": options.player.style
        };
        var params = {
            "id": el.id,
            "bgcolor": el.bgcolor, 
            "allowScriptAccess": "always"
        };
        new swfobject.embedSWF(options.player.url, el.id, options.player.width, options.player.height, options.player.version, false, flashvars, params);
    });

    var display = function (playerId, text) {
        var b = $('#' + playerId).parent().find('.display');
        b.text(text);
    };

    playerStatus = function (playerId, status) {
        var firstChar = document.title.substring(0, 1);
        switch (status) {
            case "play":
                display(playerId, "\u25b8");
                if (firstChar == "\u25b8") return;
                if (firstChar == "\u28e4") document.title = document.title.substring(2);
                document.title = "\u25b8 " + document.title;
                break;
            case "stop":
                display(playerId, "");
                if (firstChar == "\u25b8" || firstChar == "\u28e4") document.title = document.title.substring(2);
                break;
            case "pause":
                display(playerId, "\u28e4");
                if (firstChar == "\u28e4") return;
                if (firstChar == "\u25b8") document.title = document.title.substring(2);
                document.title = "\u28e4 " + document.title;
                break;
        }
    };
})();

