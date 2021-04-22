import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmitSearch: PropTypes.func,
};
PostFiltersForm.defaultProps = {
  onSubmitSearch: null,
};
function PostFiltersForm({ onSubmitSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSubmitSearch) {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        const formValues = { searchTerm: e.target.value };
        onSubmitSearch(formValues);
      }, 500);
    }
  };
  return (
    <form action="">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        name=""
        id=""
      />
    </form>
  );
}

export default PostFiltersForm;
