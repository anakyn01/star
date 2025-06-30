

const LoginTop = () => {
    return(
<nav className="navbar navbar-expand-sm border border-bottom">
  <div className="container-fluid">
    <ul className="navbar-nav d-flex align-items-center">
      <li className="nav-item">
        <a className="nav-link active" href="http://localhost:3000/01_login">
        <img src="/star/images/riderlog_logo.svg" className="text-center w-147 h-24"/>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link fw-bold" href="http://localhost:3000/06_dash/00_dash/1">차량관제 시스템</a>
      </li>
    </ul>
  </div>
</nav>
    );
}
export default LoginTop;