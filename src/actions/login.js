import{ LOGIN_STATUS } from '../actionCreators/index';

export const login=(url)=>{
    localStorage.setItem("authToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1ODY4OTIwMDQsImV4cCI6MTYxODQyODAwNCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Aowgnx5FEp0jWDVxYa8hvC8v9p72c3KdBsqDtTYiDMA");
    return {
        type: LOGIN_STATUS,
        payload:{ email:"test@gmail.com" }
    }
}

export const logout=(url)=>{
    localStorage.removeItem("authToken");
    return {
        type: LOGIN_STATUS,
        payload:null
    }
}