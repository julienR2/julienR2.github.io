import React, { PureComponent } from 'react';
import Masonry from 'react-masonry-component';
import _ from 'lodash';

import Section from '../../dumbs/section';
import Button from '../../dumbs/button';
import Project from '../../dumbs/project';

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

  onFilterSelect = filter => () => this.setState({ selectedFilter: filter });

  render() {
    const { projects, filters, selectedFilter } = this.state;
    const childElements = _.compact(projects.map((project) => {
      if (selectedFilter === 'All' || _.indexOf(project.keywords, selectedFilter) !== -1) {
        return <Project data={project} key={project.title} />;
      }

      return null;
    }));

    return (
      <div>
        <Section
          title="My Works"
          subtitle="I've had the oportunity to work on many differents projects and technologies.<br />Here are some of them !"
          className={styles.section}
        >
          <div className={styles.filters}>
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
