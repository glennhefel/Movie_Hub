import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('/api/media')
    .then((res) => {
      if (!res.ok) throw new Error('Fetch failed');
      return res.json();
    })
    .then((data) => {
      console.log('Fetched media:', data);
      setMedia(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching media:', err);
      setLoading(false);
    });
}, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4">Entertainment Galore</h1>
      <hr className="mb-4" />
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {loading ? (
          <p>Loading...</p>
        ) : media.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-info text-center">No media items found.</div>
          </div>
        ) : (
          media.map((item) => (
            <div className="col" key={item._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.poster}
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {item.title.length > 30 ? item.title.slice(0, 27) + '...' : item.title}
                  </h5>
                  <div className="text-center mt-2">
                    <span className="rating-badge">
                      ★ {item.average_rating?.toFixed(1) || 'N/A'}
                    </span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="comment-count-badge">
                      Reviews: {item.total_votes || 0}
                    </span>
                  </div>
                </div>
                <div className="card-footer bg-transparent text-center">
                  <Link to={`/media/${item._id}`} className="btn btn-outline-primary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;