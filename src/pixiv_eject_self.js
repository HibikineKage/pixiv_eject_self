(()=>{
    // pixiv上かどうかURLを判定
    if(location.hostname !== 'www.pixiv.net') {
        alert("このリンクをブックマークに登録し、pixiv上で実行してください");
    } else {
        // pixivの作品リストにはそれぞれimage-itemというクラス名が付いてるのでまとめて取得
        const imageItems = document.getElementsByClassName('image-item');
        // それぞれの要素をfor文で回す
        for (const imageItem of imageItems) {
            // 属性からidを抽出して、pixivのユーザIDの変数(偶然見つけた)と比較
            const image = imageItem.getElementsByClassName('_thumbnail')[0];
            const userID = image.getAttribute('data-user-id');
            if (userID === pixiv.user.id) {
                // 見えなくする
                imageItem.style.display = 'none';
            }
        }
    }
})();
