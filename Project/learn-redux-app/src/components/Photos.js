import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPhoto } from "../store/actions/photoActions";
import PropTypes from "prop-types";

const Photos = ({ photos, getPhoto }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getPhoto();
      setLoading(false);
    }, 1000);
  }, []);

  const isLoading = () => (
    <div class="lds-ellipsis text-center">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  const isLoadPhoto = () =>
    photos.map((photo) => (
      <div className="col-3 py-1">
        <img src={photo.thumbnailUrl} />
      </div>
    ));

  return (
    <div className="photo-list">
      <div className="container">
        <div className="row text-center">
          {loading ? isLoading() : isLoadPhoto()}
        </div>
      </div>
    </div>
  );
};

Photos.propTypes = {
  getPhoto: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  photos: state.photos.photos,
});

const mapDispatchToProps = { getPhoto };

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
