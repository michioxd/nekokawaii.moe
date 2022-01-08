'use-strict';
(window.onload = function() {
    function fetchImg() {
        var xhr = new XMLHttpRequest();
        // jsonファイルから画像データをフェッチします
        xhr.open('GET', '/img.json');
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var data = JSON.parse(xhr.responseText);
                for (var i = 0; i < data.length; i++) {
                    // それを追加してください！
                    document.querySelector('#app').insertAdjacentHTML("beforeend", '<li><img src="/neko_static/' + data[i] + '" alt=""></li>');
                }
                setTimeout(function() {
                    $('#app').innerHTML = '';
                    fetchImg();
                }, 1400000);
            }
        }
    }
    fetchImg();

    // ばかばか＞～＜
    document.addEventListener('contextmenu', (event) => {
        console.log('nah enjoy nekomimi :(');
        event.preventDefault();
    });
    document.addEventListener('keyup', (event) => {
        if (event.keyCode === 66 && event.ctrlKey) {
            document.body.innerHTML = `
            <div class="all-img">
                <h2>~ 全画像 / all images ~</h2>
                <ul id="loadder">
                    Please wait...
                </ul>
                <h4>nekomimi.moe by <a href="https://michiois.live" target="_blank">michiois.live</a></h4>
            </div>
            `;
            var xhr = new XMLHttpRequest();
            // jsonファイルから画像データをフェッチします
            xhr.open('GET', '/img.json');
            xhr.send(null);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    document.querySelector('#loadder').innerHTML = '';
                    var data = JSON.parse(xhr.responseText);
                    for (var i = 0; i < data.length; i++) {
                        // それを追加してください！
                        document.querySelector('#loadder').insertAdjacentHTML("beforeend", '<li><a target="_blank" href="/neko_static/' + data[i] + '" alt="">' + data[i] + '</a></li>');
                    }

                }
            }
        }
    });
});