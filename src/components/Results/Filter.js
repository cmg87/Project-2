import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.filterData = {};
    }

    handleClick(){
        // Gather selected sex value
        let sex = document.getElementById("sex");
        this.filterData["sex"] = sex.options[sex.selectedIndex].value;

        // Gather selected age value
        let age = document.getElementById("age");
        this.filterData["age"] = age.options[age.selectedIndex].value;

        // Gather selected income value
        let income = document.getElementById("inc");
        this.filterData["inc"] = income.options[income.selectedIndex].value;

        // Gather selected race value
        let race = document.getElementById("racem1");
        this.filterData["racem1"] = race.options[race.selectedIndex].value;

        // Gather selected education value
        let education = document.getElementById("educ2");
        this.filterData["educ2"] = education.options[education.selectedIndex].value;

        console.log(this.filterData);

        this.props.filterState(this.filterData);

    }

    render() {
        return(
            <Panel id="filterPanel">
              <Panel.Heading>
                <Panel.Title toggle>
                  Filter Options <span className="glyphicon glyphicon-chevron-down"></span>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  <Table className="borderless">
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Sex</ControlLabel>
                            <FormControl componentClass="select" placeholder="select sex" id="sex">
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                            </FormControl>
                          </FormGroup>
                        </td>
                        <td>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Age</ControlLabel>
                            <FormControl componentClass="select" placeholder="select age" id="age">
                              <option value="29">Under 30</option>
                              <option value="49">30 - 49</option>
                              <option value="64">50 - 64</option>
                              <option value="65">Over 64</option>
                            </FormControl>
                          </FormGroup>
                        </td>
                        <td>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Income</ControlLabel>
                            <FormControl componentClass="select" placeholder="select income" id="inc">
                              <option value="1">Less than $10,000</option>
                              <option value="2">10 to under $20,000</option>
                              <option value="3">20 to under $30,000</option>
                              <option value="4">30 to under $40,000</option>
                              <option value="5">40 to under $50,000</option>
                              <option value="6">50 to under $75,000</option>
                              <option value="7">75 to under $100,000</option>
                              <option value="8">100 to under $150,000</option>
                              <option value="9">$150,000 or more</option>
                            </FormControl>
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Race</ControlLabel>
                            <FormControl componentClass="select" placeholder="select income" id="racem1">
                              <option value="1">White</option>
                              <option value="2">Black or African-American</option>
                              <option value="3">Asian or Asian-American</option>
                              <option value="5">Native American</option>
                              <option value="6">Pacific Islander</option>
                              <option value="7">Hispanic/Latino</option>
                              <option value="4">Other</option>
                            </FormControl>
                          </FormGroup>
                        </td>
                        <td>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Education</ControlLabel>
                            <FormControl componentClass="select" placeholder="select education" id="educ2">
                              <option value="1">Less than high school </option>
                              <option value="2">High school incomplete </option>
                              <option value="3">High school graduate </option>
                              <option value="4">Some college, no degree </option>
                              <option value="5">Two-year associate degree</option>
                              <option value="6">our-year college or university degree</option>
                              <option value="7">Some postgraduate or professional schooling</option>
                              <option value="8">Postgraduate or professional degree</option>
                            </FormControl>
                          </FormGroup>
                        </td>
                        <td>
                          <p>&nbsp;</p>
                          <Button bsStyle="primary" id="filterSubmit" onClick={() => {this.handleClick()}}>Submit</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
        )
    }
}

export default Filter;