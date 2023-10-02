function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.href.includes('style1.css')) {
        themeStyle.href = 'style2.css';
        document.getElementById('toggle-light-mode').style.display = 'none';
        document.getElementById('toggle-dark-mode').style.display = 'block';
    } else {
        themeStyle.href = 'style1.css';
        document.getElementById('toggle-dark-mode').style.display = 'none';
        document.getElementById('toggle-light-mode').style.display = 'block';
    }
}

function openmenu() {
    document.querySelector('.list').style.right = '0';
}

function closemenu() {
    document.querySelector('.list').style.right = '-250px';
}
function copyToClipBoard(){
    const text="hari.100.hks@outlook.com";
    navigator.clipboard.writeText(text);
    document.getElementById('clipboard').style.display='none';
    document.getElementById('check').style.display='block';
    setTimeout(setback,3000);
}
function setback(){
    document.getElementById('check').style.display='none';
    document.getElementById('clipboard').style.display='block';
}
window.onload = function() {
window.scrollTo(0, 0);
};
