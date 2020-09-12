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
  };

  // getData
  componentDidMount() {
    let name = items.about.name;
    let role = items.about.role;
    let info = items.about.info;
    let picture = items.about.picture;
    let networks = items.about.networks;
    let projects = items.projects;

    this.setState({
      name,
      role,
      info,
      picture,
      networks,
      projects,
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
