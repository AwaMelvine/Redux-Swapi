import React from "react";
import { connect } from "react-redux";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import { CharacterList } from "../components";
import { fetchCharacters } from "../actions";

const override = css`
  display: block;
  margin: 0 auto;
`;

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div className="sweet-loading">
          <BounceLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            margin={500}
            color={"#19e9d7"}
            loading={this.props.fetching}
          />
        </div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
