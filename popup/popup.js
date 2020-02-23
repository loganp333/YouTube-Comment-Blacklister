(function() {
    chrome.storage.local.get('blockedWords', function (result) {
        setTimeout(function(){document.getElementById("blockedWords").value = result.blockedWords}, 500);
    });

})();

const updateWords = () => {
    let words = document.getElementById("blockedWords").value.split(', ');
    chrome.storage.local.set({blockedWords: words});
};

window.addEventListener('load', function load(event){
    let updateBtn = document.getElementById('updateBtn');
    updateBtn.addEventListener('click', function() { updateWords() });
});