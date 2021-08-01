export default function Header() {
  const username = JSON.parse(localStorage.getItem("specificUser"));

  let breakdown = "There is no user";
  if (username) {
    breakdown = username[0].username;
  }
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
      //{" "}
      <div>
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

              <div className="gallery-item-type">
                <span className="visually-hidden">Video</span>
                <i className="fas fa-video" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
