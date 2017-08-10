/*
  Script-Writter     : <Jimish Fotariya>
  CAUTION   : Use this script at your own risk :P [btw i use this too, so nothing to worry ;) ]
  PRIVACY   : By using this script, Nothing will affect on your privacy of account.
  SECURITY  : Your PHOTOS & PASSWORD will be still secure because nothing is related to spoof in this script.
  
  if you are still afraid of using this then learn Javascript and DOM to see what i've written.
  
*/
DEVMOD = false;
function console_clear( e ){
	if( !DEVMOD ){
		console.clear();
	}else if( e && e != undefined ){
		console.error(e);
	}
}

selectors = {
	modalTrigger : '_bnq48',
	unameElement : '_o5iw8',
	userLi		:  '_6e4x5',
	closeBtn 	:  '_dcj9f',
	flwTitle 	: '_euzqy',
}
	console_clear();

	console.log('%c Holdback now, Let me process (Do not touch anything).. ', 'font-size:25px; color: #CD2020');
	console.log('%c Fetching your followers! [wait untill finishes] ', 'font-size:25px; color: #70c050;');
	_x = {};
	objDiv = {};

	_line = (function(){ 
		var ln = "-"; for(var o = 0 ; o <= 100; o++)
			ln+="-";
			return ln;
    })();

	_x.followers = Array();
	_x.following = Array();
	_x.followers_elm = document.getElementsByClassName( selectors.modalTrigger )[1];
	_x.following_elm = document.getElementsByClassName( selectors.modalTrigger )[2];

	// console.log( _x );

	maxLenIng = _x.following_elm.getElementsByTagName('span')[0].innerHTML;
	maxLenEr = _x.followers_elm.getElementsByTagName('span')[0].innerHTML;

	_x.oldVal = 0;
	_x.repeatCount = 0;
	_x.TimesRepeted = function(l){
		if( _x.oldVal != l )
		{
			_x.oldVal = l;
			_x.repeatCount = 0;
			return false;
		}

		_x.repeatCount++;
		if( _x.repeatCount == 5 ){
			return true;
		}
		return false;


	}

	function updateFollowers(){
		_x.f = document.getElementsByClassName( selectors.unameElement );
		for(i=0;i<_x.f.length;i++){
			if( _x.f[i] != undefined ){
				_x.followers.push( _x.f[i].innerHTML );	
			}
		}
	}
	function updateFollowing(){
		_x.f = document.getElementsByClassName( selectors.unameElement );
						
			for(i=0;i<_x.f.length;i++){
				if( _x.f[i] != undefined ){
					_x.following.push( _x.f[i].innerHTML );	
				}
			}

			// for pushing up unfollowers
			_x.notFollowBack = Array();

			for(i=0;i<_x.following.length;i++){
				if ( ! _x.followers.includes( _x.following[i] ) ){
					_x.notFollowBack.push( _x.following[i] );
				}
			}


		_x.f = document.getElementsByClassName( selectors.userLi );
		document.getElementsByClassName( selectors.flwTitle )[0].innerHTML = "<b style='color:red'>People Not follow back !!</b>";

			for(i in _x.f ){
				if( _x.f[i] != undefined ){
					try{
						var tmpUname = ((_x.f[i]).getElementsByClassName( selectors.unameElement ))[0].innerHTML;
					
						if( _x.notFollowBack.includes( tmpUname ) ){
							console.log(_x.f[i]);
							// console.log( tmpUname );
						}else{
							console.log(_x.f[i]);
							_x.f[i].style.display="none";
							// document.getElementsByClassName('_539vh')[0].removeChild(_x.f[i]);	
							// i--;
						}
					}catch(e){}
				}
			}
	}

////// {{{ this block clicks  on followers element
	function checkOutFollowing(){	
		_x.oldVal = 0;
		_x.repeatCount = 0;

		// console.log(_line);
		console.log('%c Fetching people you follow! [wait untill finishes] ', 'font-size:25px; color: #70c050;');

			_x.following_elm.getElementsByTagName('a')[0].click();
			setTimeout(function(){
				objDiv = document.getElementsByClassName("_4gt3b")[0];
				// console.log(objDiv.getElementsByTagName('ul'));
				flwngscr();
			},1500);
	}
////// }}}


	var eventIng = new CustomEvent(
		"flwngScrlDwn", 
		{
			bubbles: true,
			cancelable: true
		}
	);

	var eventEr = new CustomEvent(
		"flwerScrlDwn", 
		{
			bubbles: true,
			cancelable: true
		}
	);


	document.addEventListener("flwerScrlDwn", flwerscr, false);
	document.addEventListener("flwngScrlDwn", flwngscr, false);

	function flwerscr(){
		// try{
				objDiv = document.getElementsByClassName("_gs38e")[0];
				divlen = objDiv.getElementsByTagName('ul')[0].childNodes.length;
				
				// console.log(maxLenEr ,divlen);

				if( maxLenEr > divlen && ! _x.TimesRepeted(divlen) ){							
					objDiv.scrollTop = objDiv.scrollHeight;		
					setTimeout(function(){
						_x.following_elm.dispatchEvent(eventEr);
					},1500)
				}
				else{
					updateFollowers();
					_x.closeBtn = document.querySelector('.'+ selectors.closeBtn );
					console.log(_x);

					_x.closeBtn.click();
					setTimeout(function(){
						checkOutFollowing();
					},500);
					return;	
				}
		// }catch(e){
		// 		console_clear( e );
		// 		console.log('%c ERROR :: You\'ve Interupted Process. Reload page and try again !! ', 'font-size:25px; color: red;');
		// }
	}


	function flwngscr(){
		try{
			objDiv	= document.getElementsByClassName("_gs38e")[0];
			divlen	= objDiv.getElementsByTagName('ul')[0].childNodes.length;

			// _x.TimesRepeted(divlen);
			if( maxLenIng > divlen  && ! _x.TimesRepeted(divlen) ){							
				
				objDiv.scrollTop 	= objDiv.scrollHeight;		
				setTimeout( function(){
					_x.following_elm.dispatchEvent( eventIng );
				}, 1500)

			}else{

				updateFollowing();
				// console.log(_x);
				
				console_clear();
				console.log(_line);
				console.log('%c Here is all what you Wanted. (People who dont follow you back)!!','font-size:25px; color: red');
				console.log(_line);
				alert("Checkout popup");	

					for (var i = 0; i<_x.notFollowBack.length ; i++ ) {
						console.log((i+1)+"> %chttps://instagram.com/"+_x.notFollowBack[i],'font-size:16px;color:blue;text-decoration:underline');
					}
				
				console.log('%c Checkout Popup !! ', 'font-size:25px; color: #70c050;');
				return;
			}
		}catch(e){
			console_clear( e );
			console.log('%c ERROR :: You\'ve Interupted Process. Reload page and try again !! ', 'font-size:25px; color: red;');
		}
	}
////// {{{ this block clicks  on followers element
			_x.followers_elm.getElementsByTagName('a')[0].click();
			setTimeout(function(){
				_x.tempContinude = 0;
				// console.log(objDiv.getElementsByTagName('ul'));
				flwerscr();
			},1500);
		 
////// }}}
