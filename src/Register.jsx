import React, { Component } from "react";
import "./styles/register.css";

// const Register = () => (
//   <div>
//     <div className="form-box border rounded-3 p-3">
//       <div className="p-3">
//         <h3>Registration Page</h3>
//       </div>

//       <form method="post" onSubmit={handleSubmit}>
//         <div className="row my-3">
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//             <small id="emailHelp" className="form-text text-muted">
//               We'll never share your email with anyone else.
//             </small>
//           </div>
//         </div>

//         <div className="row my-3">
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//         </div>

//         <div className="my-3 d-flex justify-content-center">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>

//       </form>
//     </div>
//   </div>

// );

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("form has been submitted: ");
    console.log(this.state.email + " - " + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="form-box border rounded-3 p-3">
          <div className="p-3">
            <h3>Registration Page</h3>
          </div>

          <form method="post" onSubmit={this.handleSubmit}>
            <div className="row my-3">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={this.state.email} 
                  onChange={this.emailChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>

            <div className="row my-3">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={this.state.password} 
                  onChange={this.passwordChange}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="my-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const Register = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Register;
