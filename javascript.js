document.oncontextmenu = new Function("return false;");
//FIREWORK
{//<--bisa dihapus
    if(document.getElementById){showerCol=new Array("#000000","#ff0000","#ffffff","#000000","#00ff00","#ff00ff","#ffffff","#ffa500","#000000","#fff000"),launchCol=new Array("#ffff00","#ff00ff","#00ffff","#ffffff","#ff8000"),runSpeed=70;var yPos=200,xPos=200,explosionSize=200,launchColour="#ffff80",timer=null,dims=1,evn=360/14;firework=new Array;var ieType="number"!=typeof window.innerWidth,ieRef=ieType&&document.compatMode&&-1!=document.compatMode.indexOf("CSS")?document.documentElement:document.body;for(thisStep=0,step=5,i=0;i<14;i++)document.write('<div id="sparks'+i+'" style="position:absolute;top:0px;left:0px;height:1px;width:1px;font-size:1px;background-color:'+launchColour+'"></div>'),firework[i]=document.getElementById("sparks"+i).style;function winDims(){winH=ieType?ieRef.clientHeight:window.innerHeight,winW=ieType?ieRef.clientWidth:window.innerWidth,bestFit=winW>=winH?winH:winW}function Reset(){var e=ieType?ieRef.scrollTop:window.pageYOffset;for(thisStep=-1,launchColour=launchCol[Math.floor(Math.random()*launchCol.length)],explosionSize=Math.round(100+Math.random()*(bestFit/4)),yPos=explosionSize+Math.round(Math.random()*(winH-2.2*explosionSize))+e,xPos=explosionSize+Math.round(Math.random()*(winW-2.2*explosionSize)),dims=1,i=0;i<14;i++)firework[i].backgroundColor=launchColour,firework[i].width=dims+"px",firework[i].height=dims+"px",firework[i].fontSize=dims+"px";Fireworks()}function Fireworks(){for(thisStep+=step,timer=setTimeout("Fireworks()",runSpeed),i=0;i<14;i++)firework[i].top=yPos+explosionSize*Math.sin(i*evn*Math.PI/180)*Math.sin(thisStep/100)+"px",firework[i].left=xPos+explosionSize*Math.cos(i*evn*Math.PI/180)*Math.sin(thisStep/100)+"px",thisStep>100&&(dims=explosionSize<150?1:Math.round(1+2*Math.random()),firework[i].backgroundColor=showerCol[Math.floor(Math.random()*showerCol.length)],firework[i].width=dims+"px",firework[i].height=dims+"px",firework[i].fontSize=dims+"px");thisStep>160&&(clearTimeout(timer),Reset())}winDims(),window.onresize=new Function("winDims()"),window.onload=Fireworks}
    }