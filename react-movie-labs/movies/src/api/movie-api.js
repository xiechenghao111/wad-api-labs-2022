export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const addFavorite = (username, newFavorite) => {
    return fetch(`/api/users/${username}/favorites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, newFavorite: newFavorite })
    }).then(res => res.json())
  };
  
  export const getFavorites = async (username) => {
    return fetch(`/api/users/${username}/favorites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'get'}).then(res => res.json())
  };

  export const deleteFavorite = (username, newFavorite) => {
    return fetch(`/api/users/${username}/movie/${newFavorite}/favourites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ newFavorite })
    }).then(res => res.json())
  };

 