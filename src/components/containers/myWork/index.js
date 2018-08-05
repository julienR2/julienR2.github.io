import React, { PureComponent } from 'react';
import Masonry from 'react-masonry-component';
import { Col } from 'reactstrap';
import _ from 'lodash';

import Section from '../../dumbs/section';
import Button from '../../dumbs/button';

import styles from './styles.module.scss';

export default class MyWork extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      filters: [],
      selectedFilter: 'All',
    };
  }

  componentDidMount() {
    fetch('/projects.json')
      .then(response => response.json())
      .then(projects => this.setState({
        projects,
        filters: ['All', ..._.uniq(_.flatten(projects.map(project => project.keywords)))],
      }));
  }

  onFilterSelect = filter => () => {
    console.log('filter', filter);
    this.setState({ selectedFilter: filter });
  };

  render() {
    const { projects, filters, selectedFilter } = this.state;
    const childElements = projects.map(({ title }) => (
      <Col xs="12" sm="6" md="4" lg="3" key={title}>
        <div className={styles.project}>
          {title}
        </div>
      </Col>
    ));
    console.log('selectedFilter', selectedFilter);
    return (
      <div>
        <Section
          title="My Works"
          subtitle="I've had the oportunity to work on many differents projects and technologies.<br />Here are some of them !"
          className={styles.section}
        >
          <div>
            {filters.map(filter => (
              <Button
                key={filter}
                type="white"
                className={styles.filter}
                active={selectedFilter === filter}
                onClick={this.onFilterSelect(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
          <Masonry
            className={styles.projects}
          >
            {childElements}
          </Masonry>
        </Section>
      </div>
    );
  }
}
