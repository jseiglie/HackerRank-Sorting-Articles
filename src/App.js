import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

const votesCompare = (a, b) => {
  if (a.upvotes > b.upvotes) {
    return -1;
  }
  if (a.upvotes < b.upvotes) {
    return 1;
  }
  return 0;
};

function byVotes(articles) {
  return articles.sort(votesCompare);
}

function datesComparison(a, b) {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);
  if (aDate > bDate) {
    return -1;
  }
  if (aDate < bDate) {
    return 1;
  }
  return 0;
}

function byDate(articles) {
  return articles.sort(datesComparison);
}

function App({ articles }) {
  const [sortedArticles, setSortedArticles] = useState(byVotes(articles));
  const handleMostVoted = () =>
    setSortedArticles([...byVotes(sortedArticles)]);

  const handleMostRecent = () => {
    setSortedArticles([...byDate(sortedArticles)]);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => handleMostVoted()}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => handleMostRecent()}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
}

export default App;
