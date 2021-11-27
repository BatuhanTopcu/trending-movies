import { connect } from "react-redux";
import { gridsw_switch } from "../app/gridsw/gridswActions";

const GridSwitch = ({ grid, gridsw }) => {
  return (
    <div className="flex bg-blue-600 w-min rounded-lg">
      <button
        className={`${
          grid
            ? "bg-gray-400 text-gray-800 cursor-pointer"
            : "bg-gray-100 text-blue-600 cursor-default"
        } p-1 rounded-l-md tr shadow-md`}
        onClick={() => gridsw(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        className={`${
          grid
            ? "bg-gray-100 text-blue-600 cursor-default"
            : "bg-gray-400 text-gray-800 cursor-pointer"
        } p-1 rounded-r-md tr shadow-md`}
        onClick={() => gridsw(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    grid: state.grid.grid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gridsw: (value) => dispatch(gridsw_switch(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridSwitch);
