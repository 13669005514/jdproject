var snCtnr = document.getElementById("sn-container");
var cityValue = document.getElementsByClassName("city-value")[0];
var cityA = document.getElementsByClassName("city-list")[0].getElementsByTagName("a");
var topBanner = document.getElementById("top-banner");
var bannerImg = document.getElementById("banner-img");
var bannerCtnr = document.getElementById("banner-container");
var headerCtnr = document.getElementById("header-container");
var follow = document.getElementById("follow");
var iconFollow = document.getElementsByClassName("icon-follow")[0];
var search = document.getElementById("search");
var miniHead = document.getElementById("mn-hd");
var miniBody = document.getElementById("mn-bd");
var mainCtnr = document.getElementById("main-container");
var mainCategory = document.getElementById("main-category");
var mc = document.getElementsByClassName("mc");
var mcBody = document.getElementsByClassName("mc-bd");
var mnCtnr = document.getElementById("mn-container");
var carouseImg = document.getElementById("carouse-img");
var imgWrap = document.getElementById("img-wrap");
var imgLi = imgWrap.getElementsByTagName("li");
var bigBtn = document.getElementsByClassName("big-btn");
var emHover = document.getElementsByClassName("em-hover");
var pieceItem = document.getElementsByClassName("piece-item");
var pTitle = document.getElementsByClassName("pi-title");
var pCont = document.getElementsByClassName("pi-content");
var aImg = document.getElementsByClassName("activeImg");
var rLeft = document.getElementsByClassName("region-left")[0];
var rRight = document.getElementsByClassName("region-right")[0];
var goodsList = document.getElementsByClassName("goods-list");
var goodsItem = document.getElementsByClassName("goods-item");
var smallBtn = document.getElementsByClassName("small-btn");
var leftOver = document.getElementsByClassName("left-overflow");
var rightOver = document.getElementsByClassName("right-overflow");
var rvList = document.getElementsByClassName("rv-list")[0];
var rvLi = rvList.getElementsByTagName("li");
var rvCont = document.getElementsByClassName("rc-cont")[0];
var myVideo = document.getElementsByTagName("video");
var videoCtrl = document.getElementsByClassName("video-ctrl")[0];
var pausePlay = videoCtrl.getElementsByTagName("div")[1];
var iconPP = pausePlay.getElementsByTagName("div")[0];
var timeLabel = document.getElementsByClassName("time-label")[0];
var share = document.getElementsByClassName("share")[0];
var shareCont = document.getElementsByClassName("share-cont")[0];
var clarity = document.getElementsByClassName("clarity")[0].getElementsByTagName("span")[0];
var clarityCont = document.getElementsByClassName("clarity-cont")[0];
var clarityA = clarityCont.getElementsByTagName("a");
var volume = document.getElementsByClassName("volume")[0].getElementsByTagName("div")[0];
var volumeCont = document.getElementsByClassName("volume-cont")[0];
var volumeValue = document.getElementsByClassName("volume-value")[0];
var volumeBtn = volumeValue.getElementsByTagName("span")[0];
var fullScreen = document.getElementsByClassName("full-screen")[0].getElementsByTagName("div")[0];
var upTriangle = document.getElementsByClassName("icon-triangle-up");
var rvUl = rvCont.getElementsByTagName("ul");
var rcTitle = document.getElementsByClassName("rc-title")[0];
var rcA = rcTitle.getElementsByTagName("a");
var brandLi = document.getElementsByClassName("brand-list")[0].getElementsByTagName("li");
var pfSelect = document.getElementsByClassName("pf-select")[0];
var selectIcon = pfSelect.getElementsByTagName("i")[0];
var pfName = document.getElementsByClassName("pf-name")[0];
var pfBtn = document.getElementsByClassName("pf-btn")[0];
var optionList = document.getElementsByClassName("option-list")[0];
var option = document.getElementsByClassName("option");
var partsImg = document.getElementsByClassName("parts-img")[0].getElementsByTagName("img")[0];
var partsCont = document.getElementsByClassName("parts-cont")[0].getElementsByTagName("a")[0];
var partsPrice = document.getElementsByClassName("parts-price");
var phoneLi = document.getElementsByClassName("pick-phone")[0].getElementsByTagName("li");
var typeLi = document.getElementsByClassName("type-list")[0].getElementsByTagName("li");
var priceLi = document.getElementsByClassName("price-list")[0].getElementsByTagName("li");
var searchBtn = document.getElementsByClassName("search-btn")[0];
var searchCont = document.getElementsByClassName("search-cont")[0];
var backBtn = document.getElementsByClassName("back-btn")[0];
var footerCon = document.getElementById("footer-container");
var footer = document.getElementById("footer");
var overTimer = temp = pieceNum = leftTimer = devWidth = topVideo = null;
var src = clickNum = myVideo[0].index = 1;
var timeFlag = true;
var first = second = end = myVideo[1].index = 0;
var startTime = 0;
var startMinute = startSecond = "00";

function myBrowser() {
    //取得浏览器的userAgent字符串
    var userAgent = navigator.userAgent;
    //判断是否Opera浏览器
    if (userAgent.indexOf("Opera") > -1) {
        return "Opera"
    }
    //判断是否Firefox浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    }
    //判断是否chrome浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    //判断是否Safari浏览器
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    }
}
//调用上面的函数
var mb = myBrowser();
if ("FF" == mb) {
    devWidth = parseInt(window.screen.width * 0.8);
}
if ("Chrome" == mb) {
    devWidth = parseInt(window.screen.width * 0.8);
}
if ("Opera" == mb) {
    devWidth = parseInt(window.screen.width * 0.8);
}
if ("Safari" == mb) {
    devWidth = parseInt(window.screen.width * 0.8);
}
//检测是否是谷歌内核(可排除360及谷歌以外的浏览器)
function isChrome() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("chrome") > 1;
}
//测试mime
function _mime(option, value) {
    var mimeTypes = navigator.mimeTypes;
    for (var mt in mimeTypes) {
        if (mimeTypes[mt][option] == value) {
            return true;
        }
    }
    return false;
}

window.onload = function() {
    //application/vnd.chromium.remoting-viewer 可能为360特有
    var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
    if (isChrome() && is360) {
        devWidth = parseInt(window.screen.width * 0.64);
    }
    var bannerHeight = bannerImg.offsetHeight;
    bannerImg.style.height = bannerCtnr.style.height = bannerHeight + "px";
    snCtnr.style.width = headerCtnr.style.width = bannerCtnr.style.width = bannerImg.style.width = mainCtnr.style.width = mnCtnr.style.width = footerCon.style.width = devWidth + "px";
    mainCategory.style.height = carouseImg.offsetHeight + "px";
    var leftH = rLeft.offsetHeight;
    var leftW = rLeft.offsetWidth;
    for (var i = goodsList.length - 1; i >= 0; i--) {
        goodsList[i].style.height = leftH + "px";
        goodsList[i].style.width = leftW + "px";
    }
    for (var i = goodsItem.length - 1; i >= 0; i--) {
        goodsItem[i].style.width = leftW * 0.333 + "px";
        goodsItem[i].style.height = leftH * 0.5 + "px";
    }
    for (var i = mcBody.length - 1; i >= 0; i--) {
        mcBody[i].style.height = imgWrap.offsetHeight + "px";
    }
    if (oldRatio < 120) {
        var temp = (120 - oldRatio) / 10
        footer.style.height = footer.offsetHeight + 16 * temp + "px";
    }
}

function fnDivHover(div) {
    var hdDiv = document.getElementById(div.id);
    var bdDiv = hdDiv.parentNode.getElementsByTagName("div")[1];
    bdDiv.style.display = "block";
    hdDiv.style.borderBottomColor = "#fff";
    hdDiv.onmouseout = function() {
        bdDiv.style.display = "none";
        hdDiv.style.borderBottomColor = "#999";
    }
    bdDiv.onmouseover = function() {
        bdDiv.style.display = "block";
        hdDiv.style.borderBottomColor = "#fff";
    }
}

function fnDivOut(div) {
    var bdDiv = document.getElementById(div.id);
    var hdDiv = bdDiv.parentNode.getElementsByTagName("div")[0];
    bdDiv.style.display = "none";
    hdDiv.style.borderBottomColor = "#999";
}

for (var i = 0; i < cityA.length; i++) {
    cityA[i].index = i;
    cityA[i].onclick = function() {
        for (var i = 0; i < cityA.length; i++) {
            cityA[i].className = "";
        }
        liNum = this.index;
        cityA[liNum].className = "selected";
        cityValue.innerHTML = cityA[liNum].innerHTML;
    }
}

function fnCloseBan() {
    topBanner.parentNode.removeChild(topBanner);
}

search.onfocus = function() {
    search.setAttribute("placeholder", "");
}
search.onblur = function() {
    search.setAttribute("placeholder", "小米8");
}

follow.onmouseover = function() {
    iconFollow.classList.remove("fc999");
    iconFollow.classList.add("fce00");
}
follow.onmouseout = function() {
    iconFollow.classList.remove("fce00");
    iconFollow.classList.add("fc999");
}

for (var i = mc.length - 1; i >= 0; i--) {
    mc[i].index = i;
    mc[i].onmouseover = function() {
        mcNum = this.index;
        if (mcNum - 1 < 0) {
            mc[mcNum].style.borderBottomStyle = "solid";
        } else {
            mc[mcNum - 1].style.borderBottomStyle = "solid";
            mc[mcNum].style.borderBottomStyle = "solid";
        }
    }
    mc[i].onmouseout = function() {
        mcNum = this.index;
        if (mcNum - 1 < 0) {
            mc[mcNum].style.borderBottomStyle = "dashed";
        } else {
            mc[mcNum - 1].style.borderBottomStyle = "dashed";
            mc[mcNum].style.borderBottomStyle = "dashed";
        }
    }
}

function fnMoveImg() {
    if (src + 1 > 7) {
        src = 1;
    } else {
        src = src + 1;
    }
    setTimeout(function() {
        carouseImg.src = "../img/carousel_" + src + ".jpg";
    }, 250);
    for (var i = 0; i < emHover.length; i++) {
        emHover[i].style.height = "4px";
        emHover[src - 1].style.height = "100%";
    }
}
var carouseTimer = setInterval(fnMoveImg, 4000);

imgWrap.onmouseover = function() {
    for (var i = 0; i < bigBtn.length; i++) {
        bigBtn[i].classList.add("dis-block");
    }
    clearInterval(carouseTimer);
}
imgWrap.onmouseout = function() {
    for (var i = 0; i < bigBtn.length; i++) {
        bigBtn[i].classList.remove("dis-block");
    }
    carouseTimer = setInterval(fnMoveImg, 4000);
}

function fnSetDuration() {
    var date = new Date();
    var one = date.getTime();
    if (timeFlag) {
        first = one;
        timeFlag = false;
    } else {
        second = one;
        timeFlag = true;
    }
    if (second > first) {
        end = second - first;
    }
}

bigBtn[0].onclick = function() {
    fnSetDuration();
    if (src - 1 <= 0) {
        src = 7;
    } else {
        src = src - 1;
    }
    setTimeout(function() {
        carouseImg.src = "../img/carousel_" + src + ".jpg";
    }, 200);
    for (var i = 0; i < emHover.length; i++) {
        emHover[i].style.height = "4px";
        emHover[src - 1].style.height = "100%";
        if (end > 0 && end < 200) {
            emHover[src - 1].style.transition = "all " + end + "ms ease-out";
        } else {
            emHover[src - 1].style.transition = "all .2s ease-out";
        }
    }
}
bigBtn[1].onclick = function() {
    fnSetDuration();
    if (src + 1 > 7) {
        src = 1;
    } else {
        src = src + 1;
    }
    setTimeout(function() {
        carouseImg.src = "../img/carousel_" + src + ".jpg";
    }, 200);
    for (var i = 0; i < emHover.length; i++) {
        emHover[i].style.height = "4px";
        emHover[src - 1].style.height = "100%";
    }
    if (end > 0 && end < 200) {
        emHover[src - 1].style.transition = "all " + end + "ms ease-out";
    } else {
        emHover[src - 1].style.transition = "all .2s ease-out";
    }
}

function fnImgChange() {
    overTimer = setTimeout(function() {
        emHover[imgNum].style.height = "100%";
        for (var j = 0; j < emHover.length; j++) {
            emHover[j].style.height = "4px";
            emHover[imgNum].style.height = "100%";
            src = imgNum + 1;
            setTimeout(function() {
                carouseImg.src = "../img/carousel_" + src + ".jpg";
            }, 200);
        }
    }, 500);
}
for (var i = imgLi.length - 1; i >= 0; i--) {
    imgLi[i].index = i;
    imgLi[i].onmouseover = function() {
        imgNum = this.index;
        fnImgChange();
    }
    imgLi[i].onmouseout = function() {
        clearTimeout(overTimer);
    }
    imgLi[i].onclick = function() {
        imgNum = this.index;
        emHover[imgNum].style.height = "100%";
        for (var j = 0; j < emHover.length; j++) {
            emHover[j].style.height = "4px";
            emHover[imgNum].style.height = "100%";
            src = imgNum + 1;
            setTimeout(function() {
                carouseImg.src = "../img/carousel_" + src + ".jpg";
            }, 200);
        }
    }
}

for (var i = 0; i < pieceItem.length; i++) {
    pieceItem[i].index = i;
    pieceItem[i].style.zIndex = 5 - i;
    pieceItem[i].className = "piece-item";
    pieceItem[i].onmouseover = function() {
        for (var i = 0; i < pieceItem.length; i++) {
            pieceItem[i].className = "piece-item";
            pTitle[i].className = "pi-title";
            pCont[i].className = "pi-content";
            aImg[i].className = "activeImg";
        }
        pieceNum = this.index;
        pTitle[pieceNum].className = "pi-title words-current";
        pCont[pieceNum].className = "pi-content words-current";
        aImg[pieceNum].className = "activeImg activeImg-current";
        pieceItem[pieceNum].className = "piece-item piece-current";
    }
}
pTitle[0].className = "pi-title words-current";
pCont[0].className = "pi-content words-current";
aImg[0].className = "activeImg activeImg-current";
pieceItem[0].className = "piece-item piece-current";

smallBtn[0].onclick = function() {
    var left = -rLeft.offsetWidth;
    leftOver[0].style.left = left + "px";
    leftOver[0].style.transitionDelay = "0s";
    var lTimer = setTimeout(function() {
        left = 0;
        leftOver[0].style.transitionDelay = "-0.6s";
        leftOver[0].style.left = left + "px";
        clearTimeout(lTimer);
        var node = leftOver[0].getElementsByTagName("ul")[0];
        leftOver[0].appendChild(node);
    }, 600);
}
smallBtn[1].onclick = function() {
    var right = -rLeft.offsetWidth;
    leftOver[0].style.left = right + "px";
    leftOver[0].style.transitionDelay = "0s";
    leftOver[0].style.transitionDuration = "0s";
    var newNode = leftOver[0].getElementsByTagName("ul")[3];
    var prevNode = leftOver[0].getElementsByTagName("ul")[0];
    leftOver[0].insertBefore(newNode, prevNode);
    var lTimer = setTimeout(function() {
        right = 0;
        leftOver[0].style.left = right + "px";
        leftOver[0].style.transitionDuration = "0.6s";
        clearTimeout(lTimer);
    }, 1);
}
smallBtn[2].onclick = function() {
    var left = -rRight.offsetWidth;
    rightOver[0].style.left = left + "px";
    rightOver[0].style.transitionDelay = "0s";
    var lTimer = setTimeout(function() {
        left = 0;
        rightOver[0].style.transitionDelay = "-0.6s";
        rightOver[0].style.left = left + "px";
        clearTimeout(lTimer);
        var node = rightOver[0].getElementsByTagName("ul")[0];
        rightOver[0].appendChild(node);
    }, 600);
}
smallBtn[3].onclick = function() {
    var right = -rRight.offsetWidth;
    rightOver[0].style.left = right + "px";
    rightOver[0].style.transitionDelay = "0s";
    rightOver[0].style.transitionDuration = "0s";
    var newNode = rightOver[0].getElementsByTagName("ul")[3];
    var prevNode = rightOver[0].getElementsByTagName("ul")[0];
    rightOver[0].insertBefore(newNode, prevNode);
    var lTimer = setTimeout(function() {
        right = 0;
        rightOver[0].style.left = right + "px";
        rightOver[0].style.transitionDuration = "0.6s";
        clearTimeout(lTimer);
    }, 1);
}

function currV() {
    if (myVideo[0].index > myVideo[1].index) {
        topVideo = myVideo[0];
        bottomVideo = myVideo[1];
    } else {
        topVideo = myVideo[1];
        bottomVideo = myVideo[0];
    }
}

function time() {
    endMinute = Math.round(topVideo.duration / 60);
    endSecond = Math.round(topVideo.duration % 60);
    if (endMinute < 10) {
        endMinute = "0" + endMinute;
    }
    if (endSecond < 10) {
        endSecond = "0" + endSecond;
    }
    topVideo.ontimeupdate = function() {
        startTime = Math.round(topVideo.currentTime);
        if (startTime < 60) {
            startMinute = "0";
            startSecond = startTime;
        } else {
            startMinute = Math.round(startTime / 60);
            startSecond = Math.round(startTime % 60);
        }
        if (startMinute < 10) {
            startMinute = "0" + startMinute;
        }
        if (startSecond < 10) {
            startSecond = "0" + startSecond;
        }
        timeLabel.innerHTML = startMinute + ":" + startSecond + " / " + endMinute + ":" + endSecond;
    }
    timeLabel.innerHTML = startMinute + ":" + startSecond + " / " + endMinute + ":" + endSecond;
}

function isEnd() {
    if (topVideo.ended) {
        iconPP.className = "icon-now-pause fs40";
    }
}
currV();
isEnd();

myVideo[0].onclick = function() {
    time();
    if (myVideo[0].paused) {
        iconPP.className = "icon-now-play fs40";
        myVideo[0].play();
    } else {
        iconPP.className = "icon-now-pause fs40";
        myVideo[0].pause();
    }
}
myVideo[1].onclick = function() {
    time();
    if (myVideo[1].paused) {
        iconPP.className = "icon-now-play fs40";
        myVideo[1].play();
    } else {
        iconPP.className = "icon-now-pause fs40";
        myVideo[1].pause();
    }
}

pausePlay.onmouseover = function() {
    pausePlay.style.background = "#666";
}
pausePlay.onmouseout = function() {
    pausePlay.style.background = "transparent";
}
pausePlay.onclick = function() {
    currV();
    time();
    if (topVideo.paused) {
        iconPP.className = "icon-now-play fs40";
        topVideo.play();
    } else {
        iconPP.className = "icon-now-pause fs40";
        topVideo.pause();
    }
    clickNum++;
}

rvLi[0].onmouseover = function() {
    for (var i = upTriangle.length - 1; i >= 0; i--) {
        upTriangle[i].className = "icon-triangle-up";
    }
    upTriangle[0].className = "icon-triangle-up dis-block";
    myVideo[1].className = "visi-hidden";
    myVideo[0].className = "visi-visible";
    myVideo[0].index = 1;
    myVideo[1].index = 0;
    currV();
    videoFullScreen();
    if (topVideo.paused) {
        iconPP.className = "icon-now-pause fs40";
    } else {
        iconPP.className = "icon-now-play fs40";
    }
    if (topVideo.currentTime) {
        time();
    } else {
        timeLabel.innerHTML = "";
    }
}
rvLi[2].onmouseover = function() {
    for (var i = upTriangle.length - 1; i >= 0; i--) {
        upTriangle[i].className = "icon-triangle-up";
    }
    upTriangle[1].className = "icon-triangle-up dis-block";
    myVideo[0].className = "visi-hidden";
    myVideo[1].className = "visi-visible";
    myVideo[1].index = 1;
    myVideo[0].index = 0;
    currV();
    videoFullScreen();
    if (topVideo.paused) {
        iconPP.className = "icon-now-pause fs40";
    } else {
        iconPP.className = "icon-now-play fs40";
    }
    if (topVideo.currentTime) {
        time();
    } else {
        timeLabel.innerHTML = "";
    }
}

share.onclick = function() {
    if (shareCont.className == "share-cont dis-none") {
        shareCont.className = "share-cont dis-block";
    } else {
        shareCont.className = "share-cont dis-none";
    }
}

clarity.onmouseover = function() {
    clarityCont.className = "clarity-cont dis-block";
    clarityCont.onmouseover = function() {
        clarityCont.className = "clarity-cont dis-block";
    }
    clarityCont.onmouseout = function() {
        clarityCont.className = "clarity-cont dis-none";
    }
}
clarity.onmouseout = function() {
    clarityCont.className = "clarity-cont dis-none";
}
for (var i = clarityA.length - 1; i >= 0; i--) {
    clarityA[i].index = i;
    clarityA[i].onclick = function() {
        aNum = this.index;
        for (var i = clarityA.length - 1; i >= 0; i--) {
            clarityA[i].style.color = "#fff";
        }
        clarityA[aNum].style.color = "#666";
        clarity.innerHTML = clarityA[aNum].innerHTML;
        clarityCont.className = "clarity-cont dis-none";
    }
}

volume.onmouseover = function() {
    volumeCont.className = "volume-cont dis-block";
    volumeCont.onmouseover = function() {
        volumeCont.className = "volume-cont dis-block";
    }
    volumeCont.onmouseout = function() {
        volumeCont.className = "volume-cont dis-none";
    }
    volume.onclick = function() {
        currV();
        if (topVideo.muted || newHeight == 0) {
            newHeight = 60;
            topVideo.volume = newHeight / 100;
            volumeValue.style.height = newHeight + "px";
            volume.className = "icon-voiced fs26"
        } else {
            newHeight = 0;
            topVideo.volume = newHeight / 100;
            volumeValue.style.height = newHeight + "px";
            volume.className = "icon-no-voiced fs26"
        }
    }
}
volume.onmouseout = function() {
    volumeCont.className = "volume-cont dis-none";
}
var newY = 0;
var downFlag = false;
var oldHeight = newHeight = 60;
volumeBtn.onmousedown = function(event) {
    var e = event || window.event;
    oldY = e.clientY;
    downFlag = true;
    volumeCont.onmousemove = function(event) {
        if (downFlag) {
            var e = event || window.event;
            newY = e.clientY;
            newHeight = oldHeight - newY + oldY;
            volumeValue.style.height = newHeight + "px";
        }
    }
    volumeCont.onmouseout = function() {
        downFlag = false;
        oldHeight = newHeight;
        volumeCont.className = "volume-cont dis-none";
    }
    volumeBtn.onmouseup = function() {
        downFlag = false;
        oldHeight = newHeight;
    }
    currV();
    if (newHeight >= 100) {
        newHeight = 100;
    }
    if (newHeight <= 0) {
        newHeight = 0;
    }
    topVideo.volume = newHeight / 100;
    if (topVideo.muted || newHeight == 0) {
        volume.className = "icon-no-voiced fs26"
    } else {
        volume.className = "icon-voiced fs26"
    }
}
volumeCont.onclick = function(event) {
    var oldY = 1774;
    var e = event || window.event;
    newY = e.pageY;
    newHeight = 100 - newY + oldY;
    volumeValue.style.height = newHeight + "px";
    currV();
    if (newHeight >= 100) {
        newHeight = 100;
    }
    if (newHeight <= 0) {
        newHeight = 0;
    }
    topVideo.volume = newHeight / 100;
    if (topVideo.muted || newHeight == 0) {
        volume.className = "icon-no-voiced fs26"
    } else {
        volume.className = "icon-voiced fs26"
    }
}

var fullFlag = false;
fullScreen.onclick = function() {
    if (fullFlag) {
        fullFlag = false;
    } else {
        fullFlag = true;
    }
    videoFullScreen();
}

function videoFullScreen() {
    if (fullFlag) {
        topVideo.style.cssText = "width: 710px;height: 400px;left: 60%;top: -200px;"
        videoCtrl.style.cssText = "width: 710px;top: 350px;left: 60%;top: 150px;"
        timeLabel.style.cssText = "margin-Right: 350px";
        fullScreen.className = "icon-exit-full-screen fs26"
    } else {
        topVideo.style.cssText = ""
        videoCtrl.style.cssText = ""
        timeLabel.style.cssText = ""
        fullScreen.className = "icon-full-screen fs26"
    }
}

rcA[0].onmouseover = function() {
    rvUl[0].className = "z-index1";
    rvUl[1].className = "";
    rcA[0].className = "charts-curr";
    rcA[1].className = " ";
}
rcA[1].onmouseover = function() {
    rvUl[1].className = "z-index1";
    rvUl[0].className = "";
    rcA[1].className = "charts-curr";
    rcA[0].className = " ";
}

for (var i = brandLi.length - 1; i >= 0; i--) {
    brandLi[i].index = i;
    brandLi[i].onmouseover = function() {
        var brandNum = this.index;
        brandLi[brandNum].getElementsByTagName("div")[0].className = "brand-info dis-block";
    }
    brandLi[i].onmouseout = function() {
        var brandNum = this.index;
        brandLi[brandNum].getElementsByTagName("div")[0].className = "brand-info dis-none";
    }
}

pfSelect.onmouseover = function() {
    optionList.className = "option-list dis-block"
    selectIcon.className = "icon-triangle-up";
}
pfSelect.onmouseout = function() {
    optionList.className = "option-list dis-none"
    selectIcon.className = "icon-triangle-down";
}
for (var i = option.length - 1; i >= 0; i--) {
    option[i].index = i;
    option[i].onclick = function() {
        var optionNum = this.index;
        pfName.innerHTML = option[optionNum].innerHTML;
        pfName.setAttribute("kindid", option[optionNum].getAttribute("kindid"));
    }
}
pfBtn.onclick = function() {}

function clickBtn() {
    var phoneClass = new Array();
    for (var i = phoneLi.length - 1; i >= 0; i--) {
        phoneClass[i] = phoneLi[i].className;
    }

    function checkClass(pClass) {
        return pClass == "pick-phone-li";
    }
    if (phoneClass.every(checkClass)) {
        searchBtn.className = "search-btn cursor-stop";
    } else {
        searchBtn.className = "search-btn search-btn-curr";
    }
}
clickBtn();

function type() {
    for (var i = typeLi.length - 1; i >= 0; i--) {
        typeLi[i].className = "pick-phone-li";
        typeLi[i].getElementsByTagName("span")[0].className = "fs12 dis-none";
    }
    typeLi[typeNum].className = "pick-phone-li phone-li-curr";
    typeLi[typeNum].getElementsByTagName("span")[0].className = "fs12 dis-block";
}
for (var i = typeLi.length - 1; i >= 0; i--) {
    typeLi[i].index = i;
    typeFlag = true;
    typeLi[i].onclick = function() {
        if (typeFlag) {
            typeFlag = false;
            typeNum = this.index;
            type();
            clickBtn();
        } else {
            typeNum = this.index;
            if (typeLi[typeNum].className == "pick-phone-li phone-li-curr") {
                typeFlag = true;
                typeLi[typeNum].className = "pick-phone-li";
                typeLi[typeNum].getElementsByTagName("span")[0].className = "fs12 dis-none";
                clickBtn();
            } else {
                type();
            }
        }
    }
}

function price() {
    for (var i = priceLi.length - 1; i >= 0; i--) {
        priceLi[i].className = "pick-phone-li";
        priceLi[i].getElementsByTagName("span")[0].className = "fs12 dis-none";
    }
    priceLi[priceNum].className = "pick-phone-li phone-li-curr";
    priceLi[priceNum].getElementsByTagName("span")[0].className = "fs12 dis-block";
}
for (var i = priceLi.length - 1; i >= 0; i--) {
    priceLi[i].index = i;
    priceFlag = true;
    priceLi[i].onclick = function() {
        if (priceFlag) {
            priceFlag = false;
            priceNum = this.index;
            price();
            clickBtn();
        } else {
            priceNum = this.index;
            if (priceLi[priceNum].className == "pick-phone-li phone-li-curr") {
                priceFlag = true;
                priceLi[priceNum].className = "pick-phone-li";
                priceLi[priceNum].getElementsByTagName("span")[0].className = "fs12 dis-none";
                clickBtn();
            } else {
                price();
            }
        }
    }
}
searchBtn.onclick = function() {
    if (searchBtn.className == "search-btn search-btn-curr") {
        searchCont.style.left = "394px";
    }
}
backBtn.onclick = function() {
    searchCont.style.left = "-442px";
}

function detectZoom() {
    var ratio = 0,
        screen = window.screen,
        ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    } else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
            ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
    }

    if (ratio) {
        ratio = Math.round(ratio * 100);
    }

    return ratio;
}
var oldRatio = detectZoom();
window.onresize = function() {
    var newRatio = detectZoom();
    if (newRatio < oldRatio) {
        var temp = (oldRatio - newRatio) / 10;
        footer.style.height = footer.offsetHeight + 16 * temp + "px";
        oldRatio = newRatio;
    } else {
        if (newRatio < 120) {
            var temp = (newRatio - oldRatio) / 10;
            footer.style.height = footer.offsetHeight - 16 * temp + "px";
            oldRatio = newRatio;
        } else {
            footer.style.height = footer.offsetHeight + "px";
        }
    }
}