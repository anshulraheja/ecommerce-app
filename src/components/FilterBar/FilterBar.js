import './FilterBar.css'
import { useDb } from '../../context/Dbcontext'
import { useFilterContext } from '../../context/filter-context'
const FilterBar = () => {
    const { DbState } = useDb();
    const { subCategories } = DbState;
    const { filterState, filterDispatch } = useFilterContext();
    const { sortBy, max_price, rating, categories: { shoes } } = filterState;

    return (

        <div>
            <div className="filter-container">
                <div className="filter-header">
                    <span><h3>FILTERS</h3></span>
                    <button onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}>Clear</button>
                </div>
                <div>
                    <h4 className="sub-filter-header">Price</h4>
                    <span className="max-price">Max Price: {max_price}</span>
                    <input type="range" min={0} max={6000} className="slider" step={500}
                        value={max_price}
                        onMouseUp={(e) =>
                            filterDispatch({ type: "PRICE", payload: e.target.value })}
                        onChange={(e) => filterDispatch({ type: "MAX_PRICE", payload: e.target.value })}
                    />
                </div>
                <div>
                    <h4 className="sub-filter-header">Category</h4>
                    {
                        subCategories.length > 0 && (subCategories.map(({ _id, subCategoryName }) => {
                            return (
                                <div key={_id}>
                                    <label htmlFor={_id} >
                                        <input type="checkbox" id={_id} name="category"
                                            onChange={e =>
                                                filterDispatch({
                                                    type: subCategoryName.toUpperCase(),
                                                })
                                            }
                                        // checked={subCategoryName.toLowerCase()}
                                        />
                                        {subCategoryName}
                                    </label>
                                </div>
                            )
                        }))
                    }
                </div>
                <div>
                    <h4 className="sub-filter-header">Rating</h4>

                    <label htmlFor="one">
                        <input type="radio" id="one" name="rating" value="1"
                            checked={rating === "1"}
                            onChange={(e) =>
                                filterDispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
                            } />
                        1 star and above
                    </label>
                    <label htmlFor="two">
                        <input type="radio" id="two" name="rating" value="2"
                            checked={rating === "2"}
                            onChange={(e) =>
                                filterDispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
                            } />
                        2 star and above
                    </label>
                    <label htmlFor="three">
                        <input type="radio" id="three" name="rating" value="3"
                            checked={rating === "3"}
                            onChange={(e) =>
                                filterDispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
                            } />
                        3 star and above
                    </label>
                    <label htmlFor="four">
                        <input type="radio" id="four" name="rating" value="4"
                            checked={rating === "4"}
                            onChange={(e) =>
                                filterDispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
                            } />
                        4 star and above
                    </label>
                </div>
                <div>
                    <h4 className="sub-filter-header">Sort By</h4>
                    <label htmlFor="lowToHigh">
                        <input type="radio" id="lowToHigh" name="sortby" value="lowToHigh"
                            onChange={() =>
                                filterDispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: "LOW_TO_HIGH"
                                })
                            }
                            checked={sortBy === "LOW_TO_HIGH" ? true : false}
                        />
                        Low to High
                    </label>
                    <label htmlFor="highToLow">
                        <input type="radio" id="highToLow" name="sortby" value="highToLow"
                            onChange={() =>
                                filterDispatch({
                                    type: "SORT_BY_PRICE",
                                    payload: "HIGH_TO_LOW"
                                })
                            }
                            checked={sortBy === "HIGH_TO_LOW" ? true : false}
                        />
                        High to Low
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FilterBar