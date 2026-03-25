# campaign/index.html まとめ

## 概要

- 対象ファイル: `campaign/index.html`
- 役割: EPARK の「キャンペーン・特集」一覧ページを表示する静的 HTML
- 参照スタイル: `campaign/css/style.css`, `campaign/css/lp.css`
- 主な画像格納先: `campaign/images/banner/`
- 2026-03-25 時点の掲載件数: 23件

このページは JavaScript で一覧を生成しておらず、`<ul class="banner-panel-list">` 配下にバナー情報を直接並べる実装です。新規掲載・差し替え・終了対応は、基本的に `index.html` のバナー要素を直接更新します。

## ページ構成

1. `head`
2. `header.header`
3. `div.bread_crumb`
4. `section.campaign-list`
5. `footer#footer`

### head

- タイトル: `キャンペーン・特集｜EPARK`
- canonical / OGP / Twitter Card 設定あり
- `description`、`keywords`、`og:description`、`og:image`、`twitter:description`、`twitter:image:src` は空
- 外部スクリプト:
  - jQuery 3.2.1
  - `https://img.polymorphicads.jp/api/polyAds.js`
  - Google Tag Manager (`GTM-NSW8QL`)

### header

- EPARK ロゴを表示
- ロゴリンク先: `https://epark.jp/`

### パンくず

- `EPARK > キャンペーン・特集`
- 先頭の `EPARK` は `/` へのリンク

### キャンペーン一覧

- `section.campaign-list > ul.banner-panel-list > li.banner-panel-list-item` の繰り返し
- 各項目の基本構造
  - リンク (`a.banner-panel-list-item--link`)
  - バナー画像 (`img.banner-panel-list-item--image`)
  - 説明文 (`p.banner-panel-list-item--text`)
- すべて `target="_blank"` で外部ページを開く
- 画像は `loading="lazy"` を指定

### footer

- 運営会社
- 会員規約
- 利用規約
- プライバシーポリシー
- コピーライト年は JavaScript で当年を出力

## レイアウトとスタイルの要点

- `style.css`
  - 共通スタイル、ヘッダー、パンくず、フッターを担当
  - フォントはメイリオ基準
- `lp.css`
  - キャンペーン一覧のカードレイアウトを担当
  - PC は 3 カラム表示
  - SP は画像 43% + テキストの横並び表示
  - `.publish-end` を `li.banner-panel-list-item` に付与すると、クリック不可 + 「終了しました」オーバーレイを表示可能

## 掲載中バナー一覧

| No. | タイトル / alt | リンク先 | 画像 |
| --- | --- | --- | --- |
| 1 | 【リラク・】得とく | `https://mitsuraku.jp/lpe/tktk50/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=tktk50&utm_term=202503&utm_content=toprecommend` | `./images/banner/rae_tokutoku_720x432_250218.png` |
| 2 | 【EPARK】Premium Club | `https://premiumclub.epark.jp/?utm_source=epark.jp&utm_medium=banner&utm_campaign=premiumclub&utm_term=2025&utm_content=toprecommend` | `./images/banner/epc_251229_720x432.png` |
| 3 | 【ヘアサロン】Ozmall 新生活応援キャンペーン | `https://www.ozmall.co.jp/countprogram/entry/?affiliateId=556&entryPageId=0&entryPageUrl=/hairsalon/feature/44820/&scid=salp01057beha` | `./images/banner/New-life-support__2603_720×432.jpg` |
| 4 | 【接骨・鍼灸】ギフト券抽選キャンペーン | `https://karadarefre.jp/cp/hanamatsuri_lottery_campaign_26?site_code=faspa&utm_source=epark.jp&utm_medium=banner&utm_content=toprecommend&utm_campaign=hanamatsuri_lottery_campaign_26` | `./images/banner/skt_720x432_2603.png` |
| 5 | 【薬局】Amazonギフトカード | `https://www.kusurinomadoguchi.com/questionnaire/campaign/all-users2-2102?utm_source=epark.jp&utm_medium=eparkcampaign&utm_campaign=all-users2-2102` | `./images/banner/ksr_240920_720-432.png` |
| 6 | 【ヘアサロン】楽天 スーパーDEAL | `https://beauty.rakuten.co.jp/cnt/topics/campaign/superdeal/?scid=af_epk_bty_superdeal` | `./images/banner/rtb_superdeal_720x432_2511.png` |
| 7 | 【リラク・エステ】すごとく | `https://mitsuraku.jp/lpe/sgtk02/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=sgtk02&utm_term=202405&utm_content=toprecommend` | `./images/banner/rae_sgtk_720x432_202405.jpg` |
| 8 | 【接骨・鍼灸】2,000円以下の施術メニュー掲載施設特集 | `https://karadarefre.jp/cp/menu_introduction?site_code=faspa&utm_source=epark.jp&utm_medium=banner&utm_content=toprecommend&utm_campaign=menu_introduction` | `./images/banner/skt_2,000yen_720x432_250401.png` |
| 9 | 【車検】15周年突入記念 | `https://otakara-shaken.com/campaign/15th_campaign/` | `./images/banner/otakara-shaken_15th_720×432_251104.png` |
| 10 | 【ヘアサロン】楽天 アワード | `https://beauty.rakuten.co.jp/cnt/topics/campaign/beautyaward/?scid=af_epk_bty_award` | `./images/banner/rtb_award_720x432_2511.png` |
| 11 | ギフト券｜接骨・鍼灸 | `https://karadarefre.jp/cp/kuchikomi_campaign_discount?site_code=faspa&utm_source=epark.jp&utm_medium=banner&utm_content=toprecommend&utm_campaign=kuchikomi_campaign_discount` | `./images/banner/skt_kuchikomi500_720×432_241219.png` |
| 12 | 【ヘアサロン】Ozmall | `https://epark.jp/news/317/` | `./images/banner/oz_720x432_250620.png` |
| 13 | 【ヘアサロン】楽天 大人女性のショートヘア特集 | `https://beauty.rakuten.co.jp/rakulab/magazine/articles/2025/0507_01/?scid=af_epk_bty_rakurabo` | `./images/banner/rtb_rakulab_720x432_2511.png` |
| 14 | 【リラク・エステ】体験レポート特集 | `https://mitsuraku.jp/exrepo_sp/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=exrepo&utm_term=202504&utm_content=toprecommend` | `./images/banner/rae_exrepo_720×432_v2_250501.png` |
| 15 | 【リラク・エステ】トライアル | `https://mitsuraku.jp/lpe/trycp2208/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=trycp2208&utm_term=202511&utm_content=toprecommend` | `./images/banner/rae_trycp_720x432_251121.png` |
| 16 | 【リラク・エステ】ゴールドパスポート | `https://mitsuraku.jp/lpe/rae_gdpt2410/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=rae_gdpt2410&utm_term=202410&utm_content=toprecommend` | `./images/banner/rae_gp_720x432_20241007.png` |
| 17 | 【リラク・есте】お誕生日割 | `https://mitsuraku.jp/lpe/bdc_rae2407/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=bdc_rae&utm_term=202410&utm_content=toprecommend` | `./images/banner/rae_240920_720_432.png` |
| 18 | 【リラク・エステ】初回特典 | `https://mitsuraku.jp/lpe/rae_hw18/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=rae_hw18&utm_term=202306&utm_content=toprecommend&_ga=2.264951503.1717029540.1705884818-1246351350.1698114716` | `./images/banner/feature_riraku_cp_202306.png` |
| 19 | 【リラク・エステ】リラくじ | `https://mitsuraku.jp/lpe/mnc_raelottery/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=mnc_raelottery&utm_term=202407&utm_content=toprecommend` | `./images/banner/rae_lottery_720x432_2408.png` |
| 20 | 【リラク・エステ】サンキュークーポン | `https://mitsuraku.jp/lpe/thanks_2310/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=thanks_2310&utm_term=202503&utm_content=toprecommend` | `./images/banner/rae_thanks_720x432_250401.png` |
| 21 | 【リラク・エステ】サンキュークーポン | `https://mitsuraku.jp/pages/eprae_cp/?media=faspa&utm_source=epark.jp&utm_medium=banner&utm_campaign=eprae_cp&utm_term=202507&utm_content=toprecommend` | `./images/banner/rae_ep_cp_720×432_250801.png` |
| 22 | 【くすりの窓口】動画キャンペーン | `https://www.kusurinomadoguchi.com/questionnaire/campaign/epk-enq-movie-app-2102?utm_source=epark.jp&utm_medium=eparknews&utm_campaign=movie-app-2310` | `./images/banner/pharmacy_20230929_2.png` |
| 23 | 【EPARK】サービス向上アンケート | `https://www.epark.jp/event/lp/questionnaire/` | `./images/banner/questionnaire_740x432.png` |

## 更新時の手順

1. `campaign/index.html` の対象 `li.banner-panel-list-item` を追加・修正・削除する
2. 必要なバナー画像を `campaign/images/banner/` に配置する
3. `alt`、説明文、リンク先の UTM を合わせて更新する
4. 終了済み表示にしたい場合は、対象 `li` に `publish-end` クラスを付ける
5. 表示確認時は PC / SP の両方でレイアウト崩れを確認する

## 補足メモ

- 一覧順がそのまま表示順になるため、上にあるほど目立つ
- バナー情報はコメントで番号管理されているが、自動採番ではない
- `No.17` のコメント・`alt` に `【リラク・есте】` というキリル文字混在の表記があり、表記ゆれの可能性がある
- OGP / meta description は未設定項目が残っているため、SEO や SNS 連携を強化する場合は別途見直し余地あり
