import React from 'react';
import Header from './Header';
import Content from './Content';
import './Top.css'
import type { ContentProps } from './ContentProps';

class Top extends React.Component{
  private contentgroup: ContentProps[]=[
  {
    classification: {
      title: "うんち！www",
      contentText: (
        <div>
          <p>うんちんちん</p>
        </div>
      )
    }
  },
  {
    classification: {
      title: "unchi! lol",
      contentText: (
        <div>
          <p>poopenis</p>
        </div>
      )
    }
  },
  ]
  render(){
    return (
      <div>
        <Header />
        <body className='contentBody'>
          <p>
            このサイトは鳩屋敷が運営するホームページです．
          </p>
          <Content classification={this.contentgroup[0].classification}/>
          <Content classification={this.contentgroup[1].classification}/>
        </body>
      </div>
    )
  }
}

export default Top;
