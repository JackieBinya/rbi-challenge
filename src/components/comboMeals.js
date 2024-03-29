import React from 'react';
import { connect } from 'react-redux';
import { getMenu, getSections, getItems } from '../actions/actions';
import Items from './items';

const ComboMeals = props => {
  return (
    <>
      {
        (window.onload = () => {
          props.getMenu();
          props.getItems();
          return props.getSections();
        })
      }
      <Items sectionId="f1a1695f-3af4-461c-96a0-4e98bff7e716" />
    </>
  );
};

export default connect(
  null,
  { getItems, getMenu, getSections }
)(ComboMeals);
