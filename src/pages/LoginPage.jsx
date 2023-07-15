import { useState } from "react";

const initForm = {
  user_name: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <header className="row col">
        <h1>Login Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <form>
            <div className="mb-3">
              <label htmlFor="inputUserName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUserName"
                aria-describedby="emailHelp"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Iniciar Sesion
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default LoginPage;
