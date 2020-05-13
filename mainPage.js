var initialVal = 0;

//temporary ad
//alert("This page is semi-constructed.\n\nDeveloper: Arpan Bhattacharya")

//Hide Footer when user scrolls
function hideFooter(){
	var scrollPos = document.getElementById("mainDiv").scrollTop;
	if(scrollPos>initialVal){
		initialVal = scrollPos;
		document.getElementById("backToTop").style.display="flex";
		document.getElementById("header").style.backgroundColor="black";
		document.getElementById("footer").style.display = "none";
		document.getElementById("searchDiv").style.zIndex = "2";
	}
	else{
		initialVal = scrollPos;
		document.getElementById("backToTop").style.display="none";
		document.getElementById("header").style.backgroundColor="black";
		document.getElementById("footer").style.display = "flex";
	}
	if(scrollPos==0){
		document.getElementById("backToTop").style.display="none";
		document.getElementById("header").style.backgroundColor="rgba(0,0,0,0.2)";
		document.getElementById("searchDiv").style.zIndex = "4";
	}
}


//when back to top button clicked
function topFunc(){
	document.getElementById("mainDiv").scrollTop = 0;
}

// When facebook button is clicked
function fbClick(){
	window.location.href = "https://www.facebook.com/foreverArijit.1998";
}

// When instagram is clicked
function instaClick(){
	window.location.href = "https://www.instagram.com/_.itz._.arpan._/";
}

// When twitter is clicked

function twitterClick(){
	window.location.href = "https://twitter.com/StyloBoyArpan"
}




// Under Construction Page
function underConstruction(){
	alert("This feature will be available soon.")
}