import React, { Component } from "react";
import items from "./data";

const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    name: "",
    role: "",
    info: "",
    picture: "",
    networks: [],
    projects: [],
    cssSkills: [],
    jsSkills: [],
    backendSkills: [],
    drawings: [],
  };

  // getData
  componentDidMount() {
    let name = items.about.name;
    let role = items.about.role;
    let info = items.about.info;
    let picture = items.about.picture;
    let networks = items.about.networks;
    let projects = items.projects;
    let cssSkills = items.skills.css;
    let jsSkills = items.skills.javascript;
    let backendSkills = items.skills.backend;
    let drawings = items.drawings;

    this.setState({
      name,
      role,
      info,
      picture,
      networks,
      projects,
      cssSkills,
      jsSkills,
      backendSkills,
      drawings,
    });
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer, DataContext };
