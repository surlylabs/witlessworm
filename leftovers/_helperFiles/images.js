function IMAGES_preload() {
	var d=document; if(d.images){ if(!d.IMAGES_p) d.IMAGES_p=new Array();
		var i,j=d.IMAGES_p.length,a=IMAGES_preload.arguments; for(i=0; i<a.length; i++)
		if(a[i].indexOf("#")!=0){ d.IMAGES_p[j]=new Image; d.IMAGES_p[j++].src=a[i]; } }
}

function IMAGES_swapRestore() {
	var i,x,a=document.IMAGES_sr; for(i=0; a && i<a.length && (x=a[i]) && x.oSrc; i++) x.src=x.oSrc;
}

function IMAGES_findObj(n,d) {
	var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0 && parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p); }
	if(!(x=d[n]) && d.all) x=d.all[n]; for(i=0; !x && i<d.forms.length; i++) x=d.forms[i][n];
	for(i=0; !x && d.layers && i<d.layers.length; i++) x=IMAGES_findObj(n,d.layers[i].document);
	if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function IMAGES_swap() {
	var i,j=0,x,a=IMAGES_swap.arguments; document.IMAGES_sr=new Array; for(i=0; i<(a.length-1); i+=2)
		if((x=IMAGES_findObj(a[i]))!=null){ document.IMAGES_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+1]; }
}
