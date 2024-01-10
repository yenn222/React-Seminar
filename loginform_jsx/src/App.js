import './App.css';

function LoginPage() {
  return (
      <div className="container">
        <h2 className="title">Loginpage</h2>
        <form autoComplete="off">
          <div className="input">
            <input type="text" id="id" name="id" size="40" placeholder="아이디를 입력해주세요" />
          </div>
          <br />
          <div className="pw">
          </div>
          <div className="pwinput">
            <input type="password" id="password" name="password" size="40" placeholder="패스워드를 입력해주세요" />
            <hr />
          </div>
          <div className="loginbutton">
            <button type="submit">login</button>
          </div>
          <label>sign up here</label>
        </form>
      </div>
  );
}

export default LoginPage;

