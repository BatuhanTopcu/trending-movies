import { combineReducers } from "redux";
import { weekReducer } from "./week/weekReducer";
import { dayReducer } from "./day/dayReducer";
import { singleReducer } from "./single/singleReducer";
import { searchReducer } from "./search/searchReducer";
import { gridswReducer } from "./gridsw/gridswReducer";

const rootReducer = combineReducers({
  week: weekReducer,
  day: dayReducer,
  single: singleReducer,
  search: searchReducer,
  grid: gridswReducer,
});

export default rootReducer;
