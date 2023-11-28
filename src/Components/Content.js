export let contents = [
  {
    title: 'Login',
    method: 'create',
    API: '/userauth/login/',
    description: 'Takes a set of user credentials returns an access web tokens to authenticate of those credentials ',
    RequestType: 'POST',
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
          echo 'Failed to fetch data from the API';
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
    method: 'create',
    API: '/user-token/verify/',
    description: 'takes a token of a website to see if the token is valid or not',
    RequestType: 'POST',
    payload: 'token',
    params: '',
  },
  {
    title: 'Refresh',
    method: 'create',
    API: '/user-token/refresh/',
    description: 'refresh token is a credential method that lets a client application get new access tokens without having to ask the user to log in again',
    RequestType: 'POST',
    payload: 'refresh',
    params: '',
  },
  {
    title: 'Forget Password',
    method: 'create',
    API: '/userauth/resetpassword/',
    description: 'takes a list of questions and asks a user to answer the questions they asked before, and after the questions are answered, the password is reset',
    RequestType: 'GET',
    payload: '',
    params: '',
  },
  {
    title: 'Profile',
    method: 'Read',
    API: '/usermanagement/generalprofile/',
    description: 'shows the profile page of the logged-in user',
    RequestType: 'GET',
    payload: '',
    params: '',
  },
  {
    title: 'Course List',
    method: 'List',
    API: '/coursematerial/course/',
    description: 'shows the list of courses the user has engaged in',
    RequestType: 'GET',
    payload: '',
    params: 'limit\noffset',
  },
  {
    title: 'Notification',
    method: 'List',
    API: '/notification/notification/',
    description: 'shows the list of notifications the user has received in the process',
    RequestType: 'GET',
    payload: '',
    params: 'limit\noffset',
  },
]


