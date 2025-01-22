import './LoginLogout.css'

function LoginLogout({ptype}) {
  return (
    <div className="container">
      <div className="main">
        <div className="navigation">
          <span>Navigation</span>
          <button>{ptype}</button>
        </div>
        <div className="content">
          <span>Public Views</span>
        </div>
        <div className="footer">
          <button>Footer</button>
        </div>
      </div>
    </div>
  );
}

export default LoginLogout;
