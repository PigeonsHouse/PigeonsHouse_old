import React from 'react';
import Header from './Header';
import Content from './Content';
import './Top.css'
import type { ContentProps } from './ContentProps';

class Top extends React.Component{
  private contentgroup: ContentProps[]=[
    {classification: {
      title: "Magic Adventure(共同制作)",
      contentText: (
        <div>
          <h2>GENRE: GAME</h2>
          <p>
            初めてきちんと完成させたゲーム．
          </p>
          作品URL: <a href='https://unityroom.com/games/magic_action_game_c3'>Magic Adventure</a>
        </div>
      )
    }},
    {classification: {
      title: "水嵩 ﾐｽﾞｶｻ",
      contentText: (
        <div>
          <h2>GENRE: GAME</h2>
          <p>
            UnityRoom主催の1WeekGameJamでの作品．初めて一人で作ったゲーム．
          </p>
          作品URL: <a href='https://unityroom.com/games/vow_game_pigeon-house'>Mizukasa</a>
        </div>
      )
    }},
    {classification: {
      title: "ロックマン.EXE Bot",
      contentText: (
        <div>
          <h2>GENRE: WEB</h2>
          <p>
            C3部内のSNS，Mastodon内で稼働しているBot．C3部員の生活に役立ったり立たなかったりする機能が搭載している．
          </p>
          作品URL: <a href='https://mastodon.compositecomputer.club/@Rockmanexe'>RockmanEXEBot</a>
        </div>
      )
    }},
    {classification: {
      title: "Trelloちゃん Bot",
      contentText: (
        <div>
          <h2>GENRE: WEB</h2>
          <p>
            C3部内のSNS，Mastodon内で稼働しているBot．部内で利用しているイベント管理アプリ「Trello」と連携して連絡してくれる真面目な方のBot．
          </p>
          作品URL: <a href='https://mastodon.compositecomputer.club/@trello'>TrelloChanBot</a>
        </div>
      )
    }},
    {classification: {
      title: "0.0046%の確率でポケモンを捕まえるサトシ",
      contentText: (
        <div>
          <h2>GENRE: WEB</h2>
          <p>
            C3部内のSNS，Mastodon内で稼働しているBot．Botの名前の通り．約2.5ヶ月に1度ポケモンをゲットする確率になっています．
          </p>
          作品URL: <a href='https://mastodon.compositecomputer.club/@pokeget'>SatoshiBot</a>
        </div>
      )
    }},
  ]
  render(){
    return (
      <div>
        <Header />
        <body className='contentBody'>
          <p>
            このサイトは鳩屋敷が運営するホームページもといポートフォリオです．<br />
            <a href='https://twitter.com/PigeonsHouse'>Twitter</a> <br />
            <a href='https://mastodon.compositecomputer.club/@Pigeon_house2020'>Mastodon</a>
          </p>
          {
            this.contentgroup.map((fc, idx) => {
              return (
                <Content key={idx.toString()} classification={fc.classification} />
              )
            })
          }
        </body>
      </div>
    )
  }
}

export default Top;
