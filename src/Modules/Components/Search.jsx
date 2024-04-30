import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../Services/ContextApi/Context";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";

const Search = () => {
  const searchConteniner = useRef();
  const { post } = useContext(Context);
  const [search, setSearch] = useState(post);

  const SubmitEvent = (event) => {
    event.preventDefault();
  };

  function filter(event) {
    if (event.target.value) {
      setSearch(
        post.filter((f) => f.title.toLowerCase().includes(event.target.value))
      );

      console.log("lotus");
    } else {
      setSearch([]);
    }
  }

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (
        searchConteniner.current &&
        !searchConteniner.current.contains(event.target)
      ) {
        console.log(searchConteniner.current);
        setSearch([]);
      }
    });
    // document.addEventListener("mousedown", (event) => {
    //   if(!searchConteniner.current.contains(event.target)){
    //     setSearch([]);
    //   }
    // });
  });

  const filterfun = debounce(filter, 1000);

  return (
    <div>
      <form className="d-flex" onSubmit={SubmitEvent}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={filterfun}
        />
        {/* <button className="btn btn-submit" type="submit" >Search</button> */}
      </form>
      <div className="position-absolute bg-white shadow" ref={searchConteniner}>
        {search.map((data) => (
          <p className="px-3" key={data.id}>
            <Link to={`/${data.id}`}>{data.title}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Search;
