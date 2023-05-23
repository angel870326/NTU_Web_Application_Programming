import './style.css';
import React, { useEffect, useState } from 'react';
import { getUser, getRepositories } from './services//githubApi';

const GitHubProfile = () => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await getUser('angel870326');
        const repositoriesResponse = await getRepositories('angel870326');
        setUser(userResponse);
        setRepositories(repositoriesResponse);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Loading GitHub data...</div>;
  }

  const formatDate = date => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <main id="main">
      <div id="github" class="paddsection">

        {/* Header */}
        <div class="container">
          <div class="section-title text-center">
            <h2>Github Profile</h2>
          </div>
        </div>

        {/* Contents */}
        <div class="container">
          <div class="flex-container">
            <div class="flex-item">
              <img class="profile-photo" src={user.avatar_url} alt="Profile"/>
            </div>
            <div class="flex-item">
              <h4>{user.name}<br/>@{user.login}</h4>
              <p>{user.bio}</p>
            </div>
          </div>
          <div class="repo">
            <h4>Repositories</h4>
            <ul>
              {repositories.map(repo => (
                <li key={repo.id}>{repo.name} (Last updated: {formatDate(repo.updated_at)})</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
};

export default GitHubProfile;










// function Artwork() {

//   return (
//     <main id="main">
//       <div id="artwork" class="paddsection">

//         {/* Header */}
//         <div class="container">
//           <div class="section-title text-center">
//             <h2>My Artwork</h2>
//           </div>
//         </div>

//         {/* Artworks */}
//         <div class="container">
          
//         </div>
//       </div>

//     </main>

//   );
// }


