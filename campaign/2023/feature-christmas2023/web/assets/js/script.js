// 変数に URL を格納
const gift_img_URLs = [
    'https://cake.jp/item/3402722/',
    'https://www.sp-mall.jp/shop/g/gB1-503429-1/',
    'https://sakemuseum.com/products/3657700-01/',
    'https://www.nipponham-giftnet.jp/shopdetail/000000008001'
];

// ボタン遷移先URL
const gift_button_URLs = [
    'https://point.epark.jp/coupon/24bd2afe/',
    'https://point.epark.jp/coupon/14952dc0/',
    'https://point.epark.jp/coupon/84cf9b08/',
    'https://point.epark.jp/coupon/df250b39/'
];

// JavaScript 関数を定義
function openURLInNewWindow(url) {
    // 格納した URL を新しいウィンドウで開く
    window.open(url, '_blank');
}

// 画像URLを開く関数
function giftImgURL(index) {
    openURLInNewWindow(gift_img_URLs[index]);
}

// ボタン遷移先URLを新しいウィンドウで開く関数
function giftButtonURL(index) {
    openURLInNewWindow(gift_button_URLs[index]);
}
