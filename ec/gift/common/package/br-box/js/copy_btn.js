const clipboard = new ClipboardJS('.copy_btn'); //clipboard.min.jsが動作する要素をクラス名で指定

// Select all .copy-value items
const btns = document.querySelectorAll('.copy_btn');

// Remove .tooptip class by mouseout
for(let i=0;i<btns.length;i++){
	btns[i].addEventListener('mouseleave',clearTooltip);
}
function clearTooltip(e){
	e.currentTarget.setAttribute('class','copy_btn');
}

// Add .tooltip class when it's clicked
function showTooltip(elem){
	elem.setAttribute('class','copy_btn tooltip');
}

clipboard.on('success', function(e) {
	showTooltip(e.trigger);
});