import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import BackHome from "../components/BackHome";
import YoutubeEmbed from "../components/YoutubeEmbed";
import NotFound from "../components/NotFound";
import Similar from "../components/Similar";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setSingleId,
  fetchSingleMovie,
  emptySingle,
  fetchSimilarMovies,
  fetchCredits,
  fetchVideos,
} from "../app/single/singleActions";
import Loading from "../components/Loading";

function MovieDetails({
  fetchSingleMovie,
  fetchSimilar,
  single,
  emptySingle,
  setSingleId,
  fetchCredits,
  fetchVideos,
}) {
  const { movieID } = useParams();
  const [moreCast, setmoreCast] = useState(false);
  const [moreVideo, setmoreVideo] = useState(false);
  const [trailers, setTrailers] = useState([]);
  const [otherVideos, setOtherVideos] = useState([]);

  useEffect(() => {
    if (!single.video) {
      return;
    }
    setTrailers(
      single.video.filter((video) => {
        return video.type === "Trailer";
      })
    );
    setOtherVideos(
      single.video.filter((video) => {
        return video.type !== "Trailer";
      })
    );
  }, [single.video]);

  const moreCastButton = () => {
    setmoreCast(!moreCast);
  };

  const moreVideoButton = () => {
    setmoreVideo(!moreVideo);
  };

  useEffect(() => {
    emptySingle();
    setSingleId(movieID);
    fetchSingleMovie();
    if (single.error) {
      return;
    }
    fetchSimilar();
    fetchCredits();
    fetchVideos();
  }, [movieID]);

  useEffect(() => {
    console.log(single.error);
  }, [single.error]);

  if (
    (single.loading || single.singleMovie.length === 0) &&
    single.error.length === 0
  ) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  } else if (single.error.length > 0) {
    return (
      <Layout>
        <NotFound />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <BackHome />
        <div className="mainpad flex flex-col gap-4 py-4 mb-10">
          {single.singleMovie.backdrop !==
            "https://image.tmdb.org/t/p/originalnull" && (
            <div className="w-full h-40 rounded-2xl overflow-hidden shadow-2xl fadeLoad">
              <img
                src={single.singleMovie.backdrop}
                className="object-cover w-full h-full"
                alt={single.singleMovie.title}
              />
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4">
            {single.singleMovie.poster !==
              "https://image.tmdb.org/t/p/w500null" && (
              <div className="w-40 lg:w-56 rounded-2xl overflow-hidden md:flex-shrink-0 fadeLoad">
                <img
                  src={single.singleMovie.poster}
                  className="object-cover w-full h-full"
                  alt={single.singleMovie.title}
                />
              </div>
            )}

            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold montagu">
                  {single.singleMovie.title}
                  <span className="text-2xl md:text-3xl xl:text-4xl font-normal">
                    ({single.singleMovie.date.substring(0, 4)})
                  </span>
                </h1>
                {single.singleMovie.vote !== 0 && (
                  <h1 className="text-2xl md:text-3xl xl:text-4xl montagu">
                    {single.singleMovie.vote}/
                    <span className="font-semibold">10</span>
                  </h1>
                )}
              </div>
              <h1 className="shippori">{single.singleMovie.tagline}</h1>
              <div className="flex gap-1 flex-wrap">
                {single.singleMovie.genres.map((genre, i) => (
                  <p
                    key={i}
                    className="text-gray-600 bg-gray-300 rounded-lg px-2 shippori"
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
              <p className="text-gray-600 bg-gray-200 rounded-lg p-2 w-full noto">
                {single.singleMovie.overview}
              </p>
              <h1 className="text-lg shippori">
                Release Date:
                <span className="font-semibold">
                  {" "}
                  {single.singleMovie.date.substring(8, 10) +
                    "/" +
                    single.singleMovie.date.substring(5, 7) +
                    "/" +
                    single.singleMovie.date.substring(0, 4)}
                </span>
              </h1>
              {single.singleMovie.producer.length !== 0 && (
                <div className="flex flex-row gap-2 flex-wrap">
                  <h1 className="text-base md:text-lg shippori">Producers: </h1>
                  {single.singleMovie.producer.map((producer) => (
                    <div className="h-4 md:h-6" key={producer.name}>
                      {!producer.logo_path ? (
                        <h1 className="shippori">{producer.name}</h1>
                      ) : (
                        <img
                          src={
                            "https://image.tmdb.org/t/p/w500" +
                            producer.logo_path
                          }
                          className="object-cover w-full h-full hover:opacity-60 tr"
                          alt={producer.name}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {single.credits.length !== 0 && (
            <div className="flex flex-row gap-2 flex-wrap">
              <h1 className="text-base md:text-lg shippori">Cast: </h1>
              {single.credits.slice(0, moreCast ? 20 : 6).map((cast) => (
                <div
                  className="shippori text-lg bg-gray-100 rounded-lg px-1 flex shadow-sm fadeLoad"
                  key={cast.id}
                >
                  <h1 className="font-bold text-sm md:text-base">
                    {cast.name}
                    <span className="mx-1 font-normal">as</span>
                    {cast.character}
                  </h1>
                </div>
              ))}
              {single.credits.length > 6 && (
                <h1
                  onClick={() => moreCastButton()}
                  className={`${
                    moreCast
                      ? "bg-blue-900 text-blue-200 hover:bg-blue-600 hover:text-blue-100"
                      : "bg-gray-900 text-gray-200 hover:bg-gray-600 hover:text-gray-100"
                  }  rounded-lg shippori px-2 font-bold text-sm md:text-base shadow-sm select-none cursor-pointer tr`}
                >
                  SHOW {moreCast ? "LESS" : "MORE"}
                </h1>
              )}
            </div>
          )}
          {trailers.length !== 0 && (
            <div>
              <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-700 via-gray-900 to-black">
                TRAILERS
              </h1>
              <div className="flex flex-wrap gap-4">
                {trailers.map((video) => (
                  <YoutubeEmbed id={video.key} key={video.key} />
                ))}
              </div>
            </div>
          )}
          {otherVideos.length !== 0 && (
            <div>
              <div className="flex gap-2">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-700 via-gray-900 to-black">
                  OTHER VIDEOS
                </h1>
                {otherVideos.length > 4 && (
                  <div
                    onClick={() => moreVideoButton()}
                    className={`${
                      moreVideo
                        ? "bg-blue-900 text-blue-200 hover:bg-blue-600 hover:text-blue-100"
                        : "bg-gray-900 text-gray-200 hover:bg-gray-600 hover:text-gray-100"
                    } rounded-lg cursor-pointer tr center m-1`}
                  >
                    <h1 className="shippori px-2 font-bold text-sm md:text-base shadow-sm select-none  ">
                      SHOW {moreVideo ? "LESS" : "MORE"}
                    </h1>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                {otherVideos.slice(0, moreVideo ? 20 : 4).map((video) => (
                  <YoutubeEmbed id={video.key} key={video.key} />
                ))}
              </div>
            </div>
          )}
          {single.similarMovies.length !== 0 && (
            <div>
              <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-700 via-gray-900 to-black">
                SIMILAR MOVIES
              </h1>
              <div className="grid grid-cols-4 gap-1 md:grid-cols-8 md:gap-4">
                {single.similarMovies.slice(0, 8).map((movie) => (
                  <Similar movie={movie} key={movie.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    single: state.single,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleMovie: () => dispatch(fetchSingleMovie()),
    setSingleId: (id) => dispatch(setSingleId(id)),
    emptySingle: () => dispatch(emptySingle()),
    fetchSimilar: () => dispatch(fetchSimilarMovies()),
    fetchCredits: () => dispatch(fetchCredits()),
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
