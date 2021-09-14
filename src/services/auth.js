import axios from 'axios';

export const signUserIn = async (email, phone, password) => {
  const data = {
    // username: username,
    // password: password,
    email: email,
    phone: '',
    password: password,
  };
  try {
    console.log('data === ', data);
    // console.log(`${base}/login`)
    const response = await axios.post(
      'http://api.aimplatfarm.com/api/v1/rest/user/login',
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('login user ===> ', response);
    return response;
  } catch (error) {
    return error;
  }
};

export const createUser = async (email, phone, password) => {
  const data = {
    // username: username,
    // password: password,
    email: email,
    phone: '',
    password: password,
  };
  try {
    console.log('data === ', data);
    // console.log(`${base}/login`)
    const response = await axios.post(
      'http://api.aimplatfarm.com/api/v1/rest/user/addUser',
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('login user ===> ', response);
    return response;
  } catch (error) {
    return error;
  }
};
