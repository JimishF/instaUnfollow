/*
  Script-Writer     : <Jimish Fotariya>
  CAUTION   : Use this script at your own risk :P [BTW I use this too, so nothing to worry ;) ]
  PRIVACY   : By using this script, Nothing will affect on your privacy of account.
  SECURITY  : Your PHOTOS & PASSWORD will be still secure because nothing is related to spoof in this script.
  
  if you are still afraid of using this then learn Javascript and DOM to see what I've written.
  
*/
DEVMOD = false;

function console_clear(e) {
    !DEVMOD ? console.clear() : e && e != undefined ? console.error(e) : null
}

selectors = {
    modalTrigger: 'Y8-fY',
    unameElement: 'FPmhX',
    userLi: 'NroHT',
    closeBtn: 'pxaFn',
    flwTitle: 'm82CD',
    objDiv: "j6cq2"
}
console_clear();

console.log('%c Hold-back now, Let me process (Do not touch anything).. ', 'font-size:25px; color: #CD2020');
console.log('%c Fetching your followers! [wait until finishes] ', 'font-size:25px; color: #70c050;');
_x = {};
objDiv = {};

_x.followers = Array();
_x.following = Array();
_x.followers_elm = document.getElementsByClassName(selectors.modalTrigger)[1];
_x.following_elm = document.getElementsByClassName(selectors.modalTrigger)[2];

maxLenIng = _x.following_elm.getElementsByTagName('span')[0].innerHTML;
maxLenEr = _x.followers_elm.getElementsByTagName('span')[0].innerHTML;

_x.oldVal = 0;
_x.repeatCount = 0;
_x.TimesRepeted = (l) => {
    if (_x.oldVal != l) {
        _x.oldVal = l;
        _x.repeatCount = 0;
        return false;
    }

    _x.repeatCount++;
    if (_x.repeatCount == 40) {
        return true;
    }
    return false;
}

function updateFollowers() {
    _x.f = document.getElementsByClassName(selectors.unameElement);
    for (i = 0; i < _x.f.length; i++) {
        if (_x.f[i] != undefined) {
            _x.followers.push(_x.f[i].innerHTML);
        }
    }
}

function updateFollowing() {
    _x.f = document.getElementsByClassName(selectors.unameElement);

    for (i = 0; i < _x.f.length; i++) {
        if (_x.f[i] != undefined) {
            _x.following.push(_x.f[i].innerHTML);
        }
    }

    // for pushing up unfollowers
    _x.notFollowBack = Array();

    for (i = 0; i < _x.following.length; i++) {
        if (!_x.followers.includes(_x.following[i])) {
            _x.notFollowBack.push(_x.following[i]);
        }
    }

    _x.f = document.getElementsByClassName(selectors.userLi);
    document.getElementsByClassName(selectors.flwTitle)[0].innerHTML = "<b style='color:red'>People Not follow back !!</b>";

    for (i in _x.f) {
        if (_x.f[i] != undefined) {
            try {
                let tmpUname = ((_x.f[i]).getElementsByClassName(selectors.unameElement))[0].innerHTML;

                if (_x.notFollowBack.includes(tmpUname)) {
                    // console.log(_x.f[i]);
                    // console.log( tmpUname );
                } else {
                    // console.log(_x.f[i]);
                    _x.f[i].style.display = "none";
                    // document.getElementsByClassName('_539vh')[0].removeChild(_x.f[i]);	
                    // i--;
                }
            } catch (e) {}
        }
    }
}

//////  this block clicks  on following element
function checkOutFollowing() {
    _x.oldVal = 0;
    _x.repeatCount = 0;

    // "-".repeat(100);
    console.log('%c Fetching people you follow! [wait until finishes] ', 'font-size:25px; color: #70c050;');

    _x.following_elm.getElementsByTagName('a')[0].click();
    setTimeout(function() {
        objDiv = document.getElementsByClassName(selectors.objDiv)[0];
        // console.log(objDiv.getElementsByTagName('ul'));
        flwngscr();
    }, 1500);
}
////// 

_x.eventIng = new CustomEvent(
    "flwngScrlDwn", {
        bubbles: true,
        cancelable: true
    }
);

_x.eventEr = new CustomEvent(
    "flwerScrlDwn", {
        bubbles: true,
        cancelable: true
    }
);

document.addEventListener("flwerScrlDwn", flwerscr, false);
document.addEventListener("flwngScrlDwn", flwngscr, false);

function flwerscr() {
    // try{
    objDiv = document.getElementsByClassName(selectors.objDiv)[0];
    divlen = objDiv.getElementsByTagName('ul')[0].childNodes.length;

    // console.log(maxLenEr ,divlen);

    if (maxLenEr > divlen && !_x.TimesRepeted(divlen)) {
        objDiv.scrollTop = objDiv.scrollHeight;
        setTimeout(function() {
            _x.following_elm.dispatchEvent(_x.eventEr);
        }, 1500)
    } else {
        updateFollowers();
        _x.closeBtn = document.querySelector('.' + selectors.closeBtn);
        // console.log(_x);

        _x.closeBtn.click();
        setTimeout(function() {
            checkOutFollowing();
        }, 500);
        return;
    }
    // }catch(e){
    // 		console_clear( e );
    // 		console.log('%c ERROR :: You\'ve Interrupted Process. Reload page and try again !! ', 'font-size:25px; color: red;');
    // }
}


function flwngscr() {
    try {
        objDiv = document.getElementsByClassName(selectors.objDiv)[0];
        divlen = objDiv.getElementsByTagName('ul')[0].childNodes.length;

        // _x.TimesRepeted(divlen);
        if (maxLenIng > divlen && !_x.TimesRepeted(divlen)) {

            objDiv.scrollTop = objDiv.scrollHeight;
            setTimeout(function() {
                _x.following_elm.dispatchEvent(_x.eventIng);
            }, 1500)

        } else {

            updateFollowing();
            console_clear();
            "-".repeat(100);
            console.log('%c Here is all what you Wanted. (People who don\'t follow you back)!!', 'font-size:25px; color: red');
            "-".repeat(100);
            // alert("Checkout pop-up");

            for (let i = 0; i < _x.notFollowBack.length; i++) {
                console.log((i + 1) + "> %chttps://instagram.com/" + _x.notFollowBack[i], 'font-size:16px;color:blue;text-decoration:underline');
            }

            console.log('%c Checkout Popup !! ', 'font-size:25px; color: #70c050;');
            
            !DEVMOD ? _x = {} : null;
            return;
        }
    } catch (e) {
        console_clear(e);
        console.log('%c ERROR :: You\'ve Interrupted Process. Reload page and try again !! ', 'font-size:25px; color: red;');
    }
}
//////  this block clicks  on followers element
_x.followers_elm.getElementsByTagName('a')[0].click();
setTimeout(function() {
    _x.tempContinude = 0;
    // console.log(objDiv.getElementsByTagName('ul'));
    flwerscr();
}, 1500);

////// 
