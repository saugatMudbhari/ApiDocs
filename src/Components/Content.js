export let contents = [
  {
    title: 'Login',
    description: 'Takes a set of user credentials returns an access web tokens to authenticate of those credentials ',
    method: 'create',
    requestType: 'POST',
    api: '/userauth/login/',
    payload: '',
    params: '',
    languages: [{
      language: 'javascript',
      code: `fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });`,
      
    },
    {
      language: 'PHP',
      code: `<?php
      $apiUrl = 'https://api.example.com/data';
      $response = file_get_contents($apiUrl);
      if ($response === false) {
          echo 'Failed to fetch data from the api';
      } else {
          $data = json_decode($response, true);

          print_r($data);
      }
      ?>`,
    },
  ]  
  },
  {
    title: 'Verify',
    description: 'takes a token of a website to see if the token is valid or not',
    method: 'create',
    requestType: 'POST',
    api: '/user-token/verify/',
    payload: 'token',
    params: '',
  },
  {
    title: 'Refresh',
    description: 'refresh token is a credential method that lets a client application get new access tokens without having to ask the user to log in again',
    method: 'create',
    api: '/user-token/refresh/',
    requestType: 'POST',
    payload: 'refresh',
    params: '',
  },
  {
    title: 'Forget Password',
    description: 'takes a list of questions and asks a user to answer the questions they asked before, and after the questions are answered, the password is reset',
    method: 'create',
    requestType: 'GET',
    api: '/userauth/resetpassword/',
    payload: '',
    params: '',
  },
  {
    title: 'Profile',
    description: 'shows the profile page of the logged-in user',
    method: 'Read',
    requestType: 'GET',
    api: '/usermanagement/generalprofile/',
    payload: '',
    params: '',
  },
  {
    title: 'Course List',
    description: 'shows the list of courses the user has engaged in',
    method: 'List',
    requestType: 'GET',
    api: '/coursematerial/course/',
    payload: '',
    params: 'limit\noffset',
  },
  {
    title: 'Notification',
    description: 'shows the list of notifications the user has received in the process',
    method: 'List',
    requestType: 'GET',
    api: '/notification/notification/',
    payload: '',
    params: 'limit\noffset',
  },
]


