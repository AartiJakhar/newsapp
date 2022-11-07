import React, { Component } from "react";
// import Newsitem from './Newsitem';
import Newsitem02 from "./Newsitem02";
import Spinner from "./Spinner";
import "../App.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  // constructor tb run krta k jbbhi is class ka koi object bnta h so add super()
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  
  
  async componentDidMount() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e4d75497bbc41068032110f923f027e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(40);
    let data = await fetch(url); 
    this.props.setProgress(70);
    let parsedData = await data.json();
    this.props.setProgress(100);
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      loading: false,
      // page:this.state.page,
      totalResults: parsedData.totalResults,
    });
    document.title =`NEWS-${this.props.category}`

  }
  

  fetchMoreData = async() => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=8e4d75497bbc41068032110f923f027e&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

    this.setState({
      loading: false,
   
      articles: this.state.articles.concat(parsedData.articles) ,
      page: this.state.page + 1,
  });
    }}

  render() {
    return (
      <div>
        <h1 className="h1" style={{marginTop:'4rem'}}>NEWS - Top Headlines from {this.props.category} </h1>
        {/* {this.state.loading && <Spinner />} */}
        <div className=" d-flex align-content-start flex-wrap  justify-content-center">
          { this.state.articles.map((element) => {
            return (
              <div key={element.url}>
                  <Newsitem02
                    imageUrl={
                      element.urlToImage
                      ? element.urlToImage
                      : "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    title={
                      element.title
                      ? element.title.slice(0, 50)
                      : element.description
                    }
                    description={
                      element.description
                      ? element.description.slice(0, 40)
                      : element.title
                    }
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={this.state.loading &&<Spinner/>}
            />
       
      </div>
    );
  }
}

// export default News
