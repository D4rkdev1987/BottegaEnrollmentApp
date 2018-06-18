import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    street_address: "",
    City: "",
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street_address: "",
      street_address2: "",
      city: "",
      state: "",
      zip: "",
      month: "",
      day: "",
      year: "",
      gender: "",
      military_service: "",
      Education_level: "",
      coding_experience: "",
      employment_status: "",
      current_income: "",
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street_address: "",
      street_address2: "",
      city: "",
      state: "",
      zip: "",
      month: "",
      day: "",
      year: "",
      gender: "",
      military_service: "",
      Education_level: "",
      coding_experience: "",
      employment_status: "",
      current_income: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstName"
          type="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        
        <input
          name="lastName"
          type="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />

        <input
          name="phone"
          type="phone"
          placeholder="phone"
          value={this.state.phone}
          onChange={e => this.change(e)}
        />

        <br />
        <br />
        <input
          name="street_address"
          type="street_address"
          placeholder="street_address"
          value={this.state.street_address}
          onChange={e => this.change(e)}
        />

        <br />
        <br />
        <input
          name="street_address2"
          type="street_address2"
          placeholder="street address"
          value={this.state.street_address2}
          onChange={e => this.change(e)}
        />

        <br />
        <br />
        <input
          name="city"
          type="city"
          placeholder="city"
          value={this.state.city}
          onChange={e => this.change(e)}
        />
        
        <input
          name="state"
          type="state"
          placeholder="state"
          value={this.state.state}
          onChange={e => this.change(e)}
        />
        
        <input
          name="zip"
          type="zip"
          placeholder="zip"
          value={this.state.zip}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <input
          name="month"
          type="month"
          placeholder="month"
          value={this.state.month}
          onChange={e => this.change(e)}
        />

        <input
          name="day"
          type="day"
          placeholder="day"
          value={this.state.day}
          onChange={e => this.change(e)}
        />

        <input
          name="year"
          type="year"
          placeholder="year"
          value={this.state.year}
          onChange={e => this.change(e)}
        />
        <br />
        <br />

         <input
          name="gender"
          type="gender"
          placeholder="gender"
          value={this.state.gender}
          onChange={e => this.change(e)}
        />

        <input
          name="military_service"
          type="military_service"
          placeholder="military service"
          value={this.state.military_service}
          onChange={e => this.change(e)}
        />
        <br />
        <br />

        <input
          name="Education_level"
          type="Education_level"
          placeholder="Education level"
          value={this.state.Education_level}
          onChange={e => this.change(e)}
        />

        <input
          name="coding_experience"
          type="coding_experience"
          placeholder="coding experience"
          value={this.state.coding_experience}
          onChange={e => this.change(e)}
        />
        <br />
        <br />

        <input
          name="employment_status"
          type="employment_status"
          placeholder="employment status"
          value={this.state.employment_status}
          onChange={e => this.change(e)}
        />

        <input
          name="current_income"
          type="current_income"
          placeholder="current income"
          value={this.state.current_income}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;