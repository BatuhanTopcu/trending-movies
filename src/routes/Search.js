import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import ScrollTop from "../components/ScrollTop";
import { connect } from "react-redux";
import {
  fetchSearchMovies,
  setSearchTerm,
  emptySearch,
} from "../app/search/searchActions";
import Loading from "../components/Loading";

function Search({ fetchSearch, search, emptySearch, setSearchTerm }) {
  const { searchKey } = useParams();

  useEffect(() => {
    emptySearch();
    setSearchTerm(searchKey);
    fetchSearch();
  }, [searchKey]);

  if (search.loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (search.searchResults.length === 0) {
    return (
      <Layout>
        <div className="px-4 2xl:px-60 py-4 flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-black">
            SEARCH RESULTS
          </h1>
          <h1 className="text-4xl font-extrabold">
            CAN'T FIND ANYTHING RELATED TO "{searchKey}"
          </h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <ScrollTop />
      <div className="px-4 2xl:px-60 py-4 flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-black">
          SEARCH RESULTS
        </h1>
        <div className="moviegrid">
          {search.searchResults.map((movie, index) => (
            <MovieCard
              index={index}
              key={movie.id}
              title={movie.title}
              likes={movie.vote}
              image={movie.poster}
              date={movie.date}
              overview={movie.overview}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: () => dispatch(fetchSearchMovies()),
    setSearchTerm: (term) => dispatch(setSearchTerm(term)),
    emptySearch: () => dispatch(emptySearch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
