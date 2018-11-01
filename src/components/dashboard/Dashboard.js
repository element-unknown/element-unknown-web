import React, { Component } from 'react';
import NewsArticle from '../news/NewsArticle';

export class Dashboard extends Component {
  state = {
    articles: [, <NewsArticle />, <NewsArticle />, <NewsArticle />]
  }

  loadMore = (e) => {
    e.preventDefault();
    this.setState({
      articles: [...this.state.articles, <NewsArticle />, <NewsArticle />, <NewsArticle />]
    })
  }

  render() {
    return (
      <div className="container section">
        <div className="row">
          <div className="col s12 l8">
            {this.state.articles}
            <div className="center">
              <a href="#" className="center" onClick={this.loadMore}>Load More</a>
            </div>
            {}
          </div>
          <div className="col s12 l4">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Notifications Title</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum maiores dicta autem temporibus harum aliquam totam aperiam perspiciatis nesciunt. Laboriosam possimus itaque provident dolorum repellendus et ratione ab id!</p>
              </div>
              <div className="card-action center">
                <a href="#">Read More</a>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <span className="card-title">Updates Title</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum maiores dicta autem temporibus harum aliquam totam aperiam perspiciatis nesciunt. Laboriosam possimus itaque provident dolorum repellendus et ratione ab id!</p>
              </div>
              <div className="card-action center">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
