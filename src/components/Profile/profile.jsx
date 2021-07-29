import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Profile/profile.css";

function Profile(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios
        .get("http://localhost:5000/collections/user")
        .then((response) => {
          console.log(response);
          setUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  });

  console.log(user);

  return (
    <div>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                alt=""
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">Strangebella22</h1>

              <button className="btn profile-edit-btn">Edit Profile</button>

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">164</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">188</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">206</span> following
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Bellatrix</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="gallery">
            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=586&q=80"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 56
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1615962122149-ef6987cf19f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 89
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 5
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1539103377911-4909a1eae382?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Gallery</span>
                <i className="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 42
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Video</span>
                <i className="fas fa-video" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 38
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Gallery</span>
                <i className="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 47
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 94
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 3
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Gallery</span>
                <i className="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 52
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 4
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 66
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Gallery</span>
                <i className="fas fa-clone" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 45
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 34
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 1
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 41
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 0
                  </li>
                </ul>
              </div>
            </div>

            <div className="gallery-item" tabindex="0">
              <img
                src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
                className="gallery-image"
                alt=""
              />

              <div className="gallery-item-type">
                <span className="visually-hidden">Video</span>
                <i className="fas fa-video" aria-hidden="true"></i>
              </div>

              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <span className="visually-hidden">Likes:</span>
                    <i className="fas fa-heart" aria-hidden="true"></i> 30
                  </li>
                  <li className="gallery-item-comments">
                    <span className="visually-hidden">Comments:</span>
                    <i className="fas fa-comment" aria-hidden="true"></i> 2
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="loader"></div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
