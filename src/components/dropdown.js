import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { useClickAway } from "react-use";



const Dropdown = ({ data, onChange, defaultValue, onChangeFilter }) => {

  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState(defaultValue);
  
  const ref = useRef(null);

  useClickAway(ref, () => {
    setVisible(false);
  });

  useEffect(() => {
    if(filter.id === "all"){
      onChangeFilter({id:undefined, name:undefined})
    }else{
      onChangeFilter(filter)
    }
  }, [filter])


  const changeR = (id, data) => {
    const newFilter = {id:id, name:data}
    setFilter(newFilter);
  };

  return (
    <div className="flex">
      <div>
        <span className="pr-4">Filtrer</span>
        <div className="relative inline-block">
          <div>
            <button
              ref={ref}
              type="button"
              className="inline-flex justify-center w-full px-4 py-3 font-bold text-gray-700 rounded-md bg-secondary hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => setVisible(!visible)}
            >
              {filter.name}
              <svg
                className="w-5 h-5 mt-1 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={cn(
              "origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",
              visible
                ? "transform opacity-100 scale-100"
                : "transform opacity-0 scale-95"
            )}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                  key={"default"}
                  onClick={() => changeR("all", defaultValue.name)}
                  href="#"
                  className="block px-4 py-2 text-sm text-right text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                 {defaultValue.name}
                </a>
              {data.map((data) => (
                <a
                  key={data._id}
                  onClick={() => changeR(data._id, data.name)}
                  href="#"
                  className="block px-4 py-2 text-sm text-right text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {data.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
