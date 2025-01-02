import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { userFilterContext } from "../context/filterContext";

const Sorts = () => {
  const { setGridView, setListView, grid_view, sortingProdcut, filter_data } =
    userFilterContext();
  // console.log(all_data);
  return (
    <div className="sort">
      <div className="sort_options">
        <button onClick={setGridView} className={grid_view ? "active_opt" : ""}>
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={!grid_view ? "active_opt" : ""}
          id="sort_icon"
        >
          <FaList />
        </button>
      </div>
      <div className="pro_len">
        <p> {filter_data.length} products remain</p>
      </div>
      <div>
        <form action="#" className="sort_sec">
          <select name="sort" onClick={sortingProdcut}>
            <option value="highest">price: highest</option>
            <option value="lowest">price: lowest</option>
            <option value="a-z">product: a-z</option>
            <option value="z-a">product: z-a</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sorts;
