(function () {

    // Settings

    var options = {
        "player": {
            "playerUrl": "uppod/uppod.swf",
            "width": 280,
            "height": 37,
            "version": "9.0.115.0"
        }
    };

    var channels = [{
        "id": "za-oblakami-relax",
        "comment": "За облаками Relax",
        "style": "81ARpjal1CGTtG2M6hdGIiRdwf9vwjzNC5b7jal1feGkbCal1SQNoF3wmRdMJRzC5k0uYWcNCYI=j1l1CGQVYv1X1kwK6zkOk03whTT31X1fNVQN3QhzBGXe3EwVT30hzdwdnQB56I2GXAR3GXeWNhHBm0XisNXHmhs6I2McTC0Zn9m0XisNX7Hv1l1f0XRA30cLWwjzCS5kN3Q3Q3QG3zkOk1mwXNRWNL9WwkzzC5T=jOk43F1XajOkZBMFv630D6WQfFF2wXzBGDY931X0Jal1CNMkbCODAjOZk=dMbT2NXfzBGDY31X15fYip2Om1kNOk1mwXRWNKvz31X=jOk842MiF30kbEkaD=jOke3dUVYBwf9vwejzC5k42Mi6psNktj1oz7C5Jtj1cQ2fQXL2MvzsNRoT30cLWNkkbk1mZ2QL0bj1l1k0nTW6wjL2Q6zmNNJzC5btj1vEzdwf9vwjzYC5ftj1vL2eMi92NbzfUrE",
        "html5Style": "#07b02206306e07407206c06206702203a03002c02207306906402203a02203103503402d03603403702202c02206306e07407206c06d06107206706906e06c06506607402203a03302c02206306e07407206c07306907a06502203a03102e03202c02206d02203a02206107506406906f02202c02207206106406906f02203a03102c02207006106406406906e06702203a03202c02206206f06407906306f06c06f07202203a02206606606606606606602202c02206306e07407206c06d06107206706906e07206906706807402203a03302c02206802203a03303702c02206206706306f06c06f07202203a02203703906506403702202c02206f02203a03103102c02207306307206506506e06306f06c06f07202203a02203703906506403702202c02206306e07407206c06106c07006806102203a03002e03802c02207702203a03203803002c02206306f06e07407206f06c07302203a02207006c06107902c07307406f07002c07406906d06505f07006c06107902c07307006106306502c07606f06c07506d06502c07606f06c06206107206c06906e06502c07407206106606606906302202c02206c06106e06702203a02206506e02202c02206306e07407206c06f07507406806506906706807402203a03203502c02207306806f07706e06106d06502203a03007d",
        "streamUrl": "http://195.88.63.114:8000/relax",
        "bgcolor": "079ed7",
        "blockStyle": "dark",
        "siteUrl": "http://www.zaoblakami.ru"
    },{
        "id": "lite-sound-session",
        "comment": "Light sound session",
        "style": "82AEcBODAjOk=tdMbT2NXzBGDY312Xejal1CGtG2M6hfdGIRdwf9vwjzC5Dk82Qktj1vL2NXzkC5ka2M3Q2Nf9B5D6L2MXzsNkTWwWT4SQopBwnQB56Y2NGbYB5LFdwbRpQo6YdGXAmwcYB5LFdwKbzkOkaBwnzBGDRQWNkbk18AuOoZxYZT1kOkZ2MJzC5kA7uaW7uOJ1kOk1mwzXRWNDp2QfYW0kbQSaTtj1nzC5kAuaRW7uOJ1kOk1mwXRDWNvz31XAjOke2whhLWGnhW0kbfYJtHj1tzC5Jtj1chWQ6VzvwVG30hIdwf9rvwjzC5b7jal1fGBkbSal1fwV92NfzRC5k42MipsNktj1bozC5f8Sal1SQl6zW0XzBGDY31XajOKkZvQ6T3wVG30hIEdwf9vwjzC5kN3Qk3Q3Q3zkOk1mwXRDWNL9WwkzC5ftj1SvL2Mi92NbzC5btDj1vzdwf9vwjzfUrK",
        "html5Style": "#07b02206306e07407206c06206702203a03002c02207006106406406906e06702203a03202c02206206f06407906306f06c06f07202203a02206606606606606606602202c02206306e07407206c06d06107206706906e06c06506607402203a03302c02206306e07407206c07306907a06502203a03102e03202c02206d02203a02206107506406906f02202c02207206106406906f02203a03102c02207702203a03203803002c02206306e07407206c06d06107206706906e07206906706807402203a03302c02206802203a03303702c02207306806f07706e06106d06502203a03002c02206206706306f06c06f07202203a02203303803803603003002202c02206f02203a03103102c02207306307206506506e06306f06c06f07202203a02203303803803603003002202c02207306906402203a02203103503402d03803003802202c02206306f06e07407206f06c07302203a02207006c06107902c07307406f07002c07406906d06505f07006c06107902c07307006106306502c07606f06c07506d06502c07606f06c06206107206c06906e06502c07407206106606606906302202c02206c06106e06702203a02206506e02202c02206306e07407206c06f07507406806506906706807402203a03203502c02206306e07407206c06106c07006806102203a03002e03807d",
        "streamUrl": "http://www.litesoundsession.com:8000/lite",
        "bgcolor": "388600",
        "blockStyle": "dark",
        "siteUrl": "http://www.litesoundsession.com"
    },{
        "id": "relax-fm",
        "comment": "Relax FM",
        "style": "01AEcvT1khJN8iQ3Qk4tj1fRtdwnY3zw6p30ZjYv1Xt1kNjpnjNktjB1fRdwRnY2Ui2R3Nkb2k1kY2NYkzkOEk1mwXrRWNXzABGDY3T1X1kwD6zkOk803whTH31X1ffNVQ3Q6hzBGXye3wVTE30hzd7wnQB556I2GXGR3GXeZWNhHmD0XisNfXHms6ZI2McTBC0n9mK0XisNeXHv1l91f0XRh30cLWywjzC5RkZxa8BcCYI=Nj1l1CbQVYv1tX1jOkG03wV9kdQhHvY1X=xa3l1fwkBbk1khiJNiQ3tQktj1dfRdwnnYWQkzRC5maj8Ok731DXajOk7ZBMv6i30D6WDQfF2wBXzBGD9Y31XAajOke2GwhLWGSnhW0kBbCa81DjOk0vY1X=jOyk42MiTF30kbYk1n6dNQIF31fl1SwkdbkaD=4jOke3HUVYBwTf9vwjZzC588KCal1SFNtHBwzhT30c7LWNkbQfal1CfG3pdwZD6WQfYF2wXzZBGDY3a1XejaFl1CGtiG2M6hBdGIRd5wf9vwtjzC5bNtj1vzedwf9v7wjzfUrQ",
        "html5Style": "#07b02206306e07407206c06206702203a03002c02206306e07407206c06f07507406806506906706807402203a03203502c02206306e07407206c06d06107206706906e06c06506607402203a03302c02206306e07407206c06106c07006806102203a03002e03802c02206306e07407206c07306907a06502203a03102e03202c02206d02203a02206107506406906f02202c02207206106406906f02203a03102c02207702203a03203803002c02207306806f07706e06106d06502203a03002c02206306e07407206c06d06107206706906e07206906706807402203a03302c02206802203a03303702c02206206706306f06c06f07202203a02206606606406303806202202c02206f02203a03103102c02207006106406406906e06702203a03202c02207306906402203a02203103503402d03803103402202c02206306f06e07407206f06c07302203a02207006c06107902c07307406f07002c07406906d06505f07006c06107902c07307006106306502c07606f06c07506d06502c07606f06c06206107206c06906e06502c07407206106606606906302202c02206c06106e06702203a02206506e02202c02206306e07407206c06306f06c06f07202203a02206203506306202202c02206206f06407906306f06c06f07202203a02206203506306202202c02207306307206506506e06306f06c06f07202203a02206606606406303806202207d",
        "streamUrl": "http://eu4.101.ru:8000/v13_1",
        "bgcolor": "ffdc8b",
        "blockStyle": "light",
        "siteUrl": "http://www.relax-fm.ru"
    },{
        "id": "sanfm-relax",
        "style": "62ARzkw96zkOk03whT31XDAuOftj1mzC5f8sSal1SQl6W0XzBdGDY31XajOkZBMNv630D6WQfF2wXBzBGDY31X1jOk0T3wV9dQhHv1X1fyaI1xQ3z31l1k0QnTWwjG3Nkbk1Jieja6Q3Nktj1fRzdwnY3w6p30jYvb1X=jOk42MiF308kbSaTtj1nzC5batj1vzdwf9vwjzkC5majOk731XajDOkZvQ6T3wVG30shIdwf9vwjzC5b2tj16I2NDGmwtYAv1X1SYT7x5cexGaktj1i6W0kbk1rn6dQIF31l1SwkSbk1j63Q3F30cTHSQD6dwfF3NXR3iGXe2wITWwWTSQ8jFd0JTSUhTd0yKp2wV9B5bRdGJTASUhTd0ktj1JTWZwf9vwnY31Xeja3l1CGtG2M6hdGIrRdwf9vwjzC5kNh2am=dam1kOk1m6wXRWNXzBGDY313X1kQT0xNb0j1l51k0nTWwj6BQnzz31X7j5btj1hhds0XFdwf9vwjzfUrD",
        "html5Style": "#07b02206306e07407206c06106c07006806102203a03002e03802c02206206f06407906306f06c06f07202203a02203703006103703106602202c02206306e07407206c06306f06c06f07202203a02203703006103703106602202c02206306e07407206c06f07507406806506906706807402203a03203502c02206306f06e07407206f06c07302203a02207006c06107902c07307406f07002c07406906d06505f07006c06107902c07307006106306502c07606f06c07506d06502c07606f06c06206107206c06906e06502c07407206106606606906302202c02206d02203a02206107506406906f02202c02207306906402203a02203103503402d03803103502202c02207306806f07706e06106d06502203a03002c02206306e07407206c06d06107206706906e06c06506607402203a03302c02206802203a03303702c02206306e07407206c06206702203a03002c02206f02203a03103102c02207206106406906f02203a03102c02207306307206506506e06306f06c06f07202203a02206206606503203503302202c02206206706306f06c06f07202203a02206206606503203503302202c02207006106406406906e06702203a03202c02206306e07407206c06d06107206706906e07206906706807402203a03302c02206306e07407206c07306907a06502203a03102e03202c02207702203a03203803002c02206c06106e06702203a02206506e02207d",
        "comment": "SanFM Relax",
        "streamUrl": "http://sanfm.ru:8000/relax",
        "bgcolor": "bfe253",
        "blockStyle": "light",
        "siteUrl": "http://sanfm.ru/relax/"
    },{
        "id": "radio-tunes-relaxation",
        "comment": "RadioTunes Relaxation",
        "style": "61AEEZyI1jODkZBMv62QDt9sGnT30DcLWNkbk1kDp31l1fQaDFdwkbkaHl1fQD6dQNiFd0kbCO3DAjOk=dMGbT2NXzBG7DY31X1SNThY2Yktj1dfRdwnY3we6p30jYv1dX=xal1fwrkbk1hFWNQI1kOk1mw9XRWNvz31iX0Jal1CMYkbfal1CGAtG2MfL2MKvzsNoT30BcLWNkbk1rT=uOoZxY2T1kOkZ2M8JzC5b7jakl1fGkbSaFl1fwV92NBfzC5k42MkipsNktj1aozC5ka2Mb3Q2Nf9B5r6L2MXzsNBkTWwWTSQ6opBwnQB5K6Y2NbYB5kLFdwbRpQao6dGXAmwScYB5LFdwebzkOkaBwEnzBGDRWN3kbkaD=jORke3UVYBw2f9vwjzC5EJtj1cQ2QdXL2MvzsNdoT30cLWN5kbk13Q3QN3Q3Qktj1KfRdwnY2UtiR3NkbCafl1SQoF3w2mRdMJzC5Ebtj1vzdwdf9vwjzfUrF",
        "html5Style": "#07b02206306e07407206c06206702203a03002c02207306906402203a02203103503402d03803103102202c02206306e07407206c06d06107206706906e06c06506607402203a03302c02207006106406406906e06702203a03202c02206306e07407206c07306907a06502203a03102e03202c02206d02203a02206107506406906f02202c02207206106406906f02203a03102c02207702203a03203803002c02207306806f07706e06106d06502203a03002c02206306e07407206c06d06107206706906e07206906706807402203a03302c02206802203a03303702c02206206706306f06c06f07202203a02203506306106102202c02206f02203a03103102c02207306307206506506e06306f06c06f07202203a02203506306106102202c02206306e07407206c06106c07006806102203a03002e03802c02206306e07407206c06f07507406806506906706807402203a03203502c02206306f06e07407206f06c07302203a02207006c06107902c07307406f07002c07406906d06505f07006c06107902c07307006106306502c07606f06c07506d06502c07606f06c06206107206c06906e06502c07407206106606606906302202c02206c06106e06702203a02206506e02202c02206206f06407906306f06c06f07202203a02206606606606606606602207d",
        "streamUrl": "http://pub5.radiotunes.com/radiotunes_relaxation_aacplus?type=.flv",
        "bgcolor": "005caa",
        "blockStyle": "dark",
        "siteUrl": "http://www.radiotunes.com/relaxation"
    },{
        "id": "relax-ua",
        "comment": "Relax (UA)",
        "style": "82AEcsal1TfwV92NfzC5ftj1KvL2Mi92NbzC5kAtuQf131l1k0nTWwKjT30cLWNkbk1DpG31l1fQDFdwkbk1Dj63Q3F30cTSQD6ydwfF3NXR3GXe2wiITWwWTSQjFd0JTGSUhTd0yp2wV9B5RbRdGJTSUhTd0ktnj1JTWwf9vwnY31NXAuOftj1mzC588tCal1SNtHBwhT30ecLWNkbk13Q3Q3QF3Qktj1fRdwnY3w26p30jYv1X=xal1sfwkbk13Q3Q3Q3Qrktj1fRdwnYWQkzEC5majOk731XajOskZBMv630D6WQfFs2wXzBGDY31X1kY7T7x5cexaktj1i6BW0kbSYftj1chWQhVpdMcpmwXzBGDYy31XAjOke2whLWGfnhW0kbk1n6dQIFn31l1SwkbkaD=jOdke3UVYBwf9vwjzkC5Jtj1cQ2QXL2MhvzsNoT30cLWNkbYk1bZ3akzkOk1mwhXRWNL9WwkzC5btbj1vzdwf9vwjzfUrd",
        "html5Style": "#07b02206306e07407206c06206702203a03002c02206206f06407906306f06c06f07202203a02206203206403002202c02206306e07407206c06d06107206706906e06c06506607402203a03302c02206306e07407206c07306907a06502203a03102e03202c02206d02203a02206107506406906f02202c02207306806f07706e06106d06502203a03002c02206306e07407206c06f07507406806506906706807402203a03203502c02207306906402203a02203103503402d03803103602202c02206306e07407206c06d06107206706906e07206906706807402203a03302c02206802203a03303702c02206206706306f06c06f07202203a02206606606606606606602202c02206f02203a03103102c02207306307206506506e06306f06c06f07202203a02206606606606606606602202c02206306e07407206c06106c07006806102203a03002e03802c02207702203a03203803002c02206306f06e07407206f06c07302203a02207006c06107902c07307406f07002c07406906d06505f07006c06107902c07307006106306502c07606f06c07506d06502c07606f06c06206107206c06906e06502c07407206106606606906302202c02206c06106e06702203a02206506e02202c02206306e07407206c06306f06c06f07202203a02206203206403002202c02207006106406406906e06702203a03202c02207206106406906f02203a03107d",
        "streamUrl": "http://online-radiorelax2.tavrmedia.ua/RadioRelax_Instrumental",
        "bgcolor": "white",
        "blockStyle": "white",
        "siteUrl": "http://www.radiorelax.com.ua"
    }];

    // View helpers

    var renderPlayerStatus = function (playerId, text) {
        var b = $('#' + playerId).parent().find('.display');
        b.text(text);
    };

    var playSymbol = "\u25ba",
        playSymbolTitle = "\u25b8",
        pauseSymbol = "\u2759\u2759";
    var addTitlePrefix = function (prefix) {
        document.title = prefix + " " + document.title;
    };
    var clearTitlePrefix = function () {
        if (playSymbolTitle + " " == document.title.substring(0, playSymbolTitle.length + 1)) {
            document.title = document.title.substring(playSymbolTitle.length + 1);
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

    // Players events handling

    var onPlay = function () {
        renderPlayerStatus(this.getId(), playSymbol);
        setTitlePrefix(playSymbolTitle);
    };
    var onPause = function () {
        renderPlayerStatus(this.getId(), pauseSymbol);
        setTitlePrefix(pauseSymbol);
    };
    var onStop = function () {
        renderPlayerStatus(this.getId(), "");
        setTitlePrefix("");
    };

    // Initialization

    var mode = RelaxHub.Player.detectMode();
    $(document.body).addClass(mode + '-mode');

    var playerCollection = new RelaxHub.Player.Collection();
    channels.forEach(function(el) {
        var player = RelaxHub.Player.create($.extend({}, options.player, el));
        player.insert($('#wrapper'));

        player.addEventListener("onPlay", onPlay);
        player.addEventListener("onPause", onPause);
        player.addEventListener("onStop", onStop);

        playerCollection.add(player);
    });

    // Media Control API interaction
    // https://github.com/feedbee/web-page-media-control-api-spec
    // for Key Socket Media Keys Chrome extension
    // https://chrome.google.com/webstore/detail/key-socket-media-keys/fphfgdknbpakeedbaenojjdcdoajihik?hl=en
    document.addEventListener("MediaPlayPause", function () {
        playerCollection.send("toggle");
    });
    document.addEventListener("MediaStop", function () {
        playerCollection.send("stop");
    });

    document.addEventListener('MediaControlApiInit', function() {
        document.dispatchEvent(new Event("MediaControlled"));
    });
})();