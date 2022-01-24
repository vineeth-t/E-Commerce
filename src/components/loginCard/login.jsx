import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth, useStateContext } from "../../contexts";
import { loginHandler } from "../axios";
import "./loginCard.css";

export function loginAsAdmin(event,authDispatch,state,navigate){
  authDispatch({ type: "SET_USER_NAME", payload: "admin@gmail.com" });
  authDispatch({ type: "SET_PASSWORD", payload: "admin@A1" });
  loginHandler(event, {
    state,
    userName: "admin@gmail.com",
    password: "admin@A1",
    authDispatch,
    navigate,
  });
}
export function Login() {
  const {
    authState: { userName, password },
    authDispatch,
  } = useAuth();
  const { dispatch } = useStateContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const loginDetails = { state, userName, password, authDispatch, navigate };
  return (
    <>
      <form
        className="loginCard"
        onSubmit={(event) => loginHandler(event, loginDetails, dispatch)}
      >
        <div>
          <label> UserName : </label>
          <input
            type="text"
            onChange={(event) =>
              authDispatch({
                type: "SET_USER_NAME",
                payload: event.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            onChange={(event) =>
              authDispatch({
                type: "SET_PASSWORD",
                payload: event.target.value,
              })
            }
          />
        </div>
        <button className="btn-logIn">LogIn</button>
        <button
          className="btn-logIn"
          onClick={(event) => loginAsAdmin(event,authDispatch,state,navigate)}
        >
          LogIn With Test Credentials
        </button>
        <div>
          New user?
          <Link to="/signUp">
            <span className="signUp">SignUp</span>
          </Link>
        </div>
      </form>
    </>
  );
}
