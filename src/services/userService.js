const BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL

const userService = {
  createUser: async (user) => {
    const response = await fetch(`${BASE_URL}/user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    return response.json();
  },

  editUser: async (email, updatedUser) => {
    const response = await fetch(`${BASE_URL}/user/edit?email=${email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

    if (!response.ok) {
      throw new Error('Failed to edit user');
    }

    return response.json();
  },

  deleteUser: async (email) => {
    const response = await fetch(`${BASE_URL}/user/delete?email=${email}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete user');
    }

    return response.json();
  },

  getAllUsers: async () => {
    const response = await fetch(`${BASE_URL}/user/getAll`);

    if (!response.ok) {
      throw new Error('Failed to get users');
    }
    const data = await response.json(); 
    return data;
  },
};

export default userService;
