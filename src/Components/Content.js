export let contents=[
    {
        Title:'Login',
        Method:'create',
        API:'/userauth/login/',
        Description:'Takes a set of user credentials returns an access web tokens to authenticate of those credentials ',
        RequestType:'POST',
        Payload:'',
        parameters:'',
        
       

    },
    {
        Title: 'Verify',
        Method: 'create',
        API: '/user-token/verify/',
        Description: 'takes a token of a website to see if the token is valid or not',
        RequestType: 'POST',
        Payload: 'token',
        Params: ''
      },
      {
        Title: 'Refresh',
        Method: 'create',
        API: '/user-token/refresh/',
        Description: 'refresh token is a credential method that lets a client application get new access tokens without having to ask the user to log in again',
        RequestType: 'POST',
        Payload: 'refresh',
        Params: ''
      },
      {
        Title: 'Forget Password',
        Method: 'create',
        API: '/userauth/resetpassword/',
        Description: 'takes a list of questions and asks a user to answer the questions they asked before, and after the questions are answered, the password is reset',
        RequestType: 'GET',
        Payload: '',
        Params: ''
      },
      {
        Title: 'Profile',
        Method: 'Read',
        API: '/usermanagement/generalprofile/',
        Description: 'shows the profile page of the logged-in user',
        RequestType: 'GET',
        Payload: '',
        Params: ''
      },
      {
        Title: 'Course List',
        Method: 'List',
        API: '/coursematerial/course/',
        Description: 'shows the list of courses the user has engaged in',
        RequestType: 'GET',
        Payload: '',
        Params: 'limit\noffset'
      },
      {
        Title: 'Notification',
        Method: 'List',
        API: '/notification/notification/',
        Description: 'shows the list of notifications the user has received in the process',
        RequestType: 'GET',
        Payload: '',
        Params: 'limit\noffset'
      },      
]


