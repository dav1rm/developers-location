import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Developer from '../Developer/index';

import { Container } from './styles';

class DeveloperList extends Component {
  state = {
    developers: [
      {
        login: 'diego3g',
        id: 2254731,
        node_id: 'MDQ6VXNlcjIyNTQ3MzE=',
        avatar_url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/diego3g',
        html_url: 'https://github.com/diego3g',
        followers_url: 'https://api.github.com/users/diego3g/followers',
        following_url: 'https://api.github.com/users/diego3g/following{/other_user}',
        gists_url: 'https://api.github.com/users/diego3g/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/diego3g/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/diego3g/subscriptions',
        organizations_url: 'https://api.github.com/users/diego3g/orgs',
        repos_url: 'https://api.github.com/users/diego3g/repos',
        events_url: 'https://api.github.com/users/diego3g/events{/privacy}',
        received_events_url: 'https://api.github.com/users/diego3g/received_events',
        type: 'User',
        site_admin: false,
        name: 'Diego Fernandes',
        company: '@RocketSeat ',
        blog: 'http://rocketseat.com.br',
        location: 'Brasil',
        email: null,
        hireable: null,
        bio:
          'CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.',
        public_repos: 47,
        public_gists: 126,
        followers: 1022,
        following: 9,
        created_at: '2012-08-31T11:46:00Z',
        updated_at: '2019-02-25T21:37:57Z',
      },
      {
        login: 'diego3g',
        id: 2254732,
        node_id: 'MDQ6VXNlcjIyNTQ3MzE=',
        avatar_url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/diego3g',
        html_url: 'https://github.com/diego3g',
        followers_url: 'https://api.github.com/users/diego3g/followers',
        following_url: 'https://api.github.com/users/diego3g/following{/other_user}',
        gists_url: 'https://api.github.com/users/diego3g/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/diego3g/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/diego3g/subscriptions',
        organizations_url: 'https://api.github.com/users/diego3g/orgs',
        repos_url: 'https://api.github.com/users/diego3g/repos',
        events_url: 'https://api.github.com/users/diego3g/events{/privacy}',
        received_events_url: 'https://api.github.com/users/diego3g/received_events',
        type: 'User',
        site_admin: false,
        name: 'Diego Fernandes',
        company: '@RocketSeat ',
        blog: 'http://rocketseat.com.br',
        location: 'Brasil',
        email: null,
        hireable: null,
        bio:
          'CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.',
        public_repos: 47,
        public_gists: 126,
        followers: 1022,
        following: 9,
        created_at: '2012-08-31T11:46:00Z',
        updated_at: '2019-02-25T21:37:57Z',
      },
      {
        login: 'diego3g',
        id: 2254733,
        node_id: 'MDQ6VXNlcjIyNTQ3MzE=',
        avatar_url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/diego3g',
        html_url: 'https://github.com/diego3g',
        followers_url: 'https://api.github.com/users/diego3g/followers',
        following_url: 'https://api.github.com/users/diego3g/following{/other_user}',
        gists_url: 'https://api.github.com/users/diego3g/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/diego3g/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/diego3g/subscriptions',
        organizations_url: 'https://api.github.com/users/diego3g/orgs',
        repos_url: 'https://api.github.com/users/diego3g/repos',
        events_url: 'https://api.github.com/users/diego3g/events{/privacy}',
        received_events_url: 'https://api.github.com/users/diego3g/received_events',
        type: 'User',
        site_admin: false,
        name: 'Diego Fernandes',
        company: '@RocketSeat ',
        blog: 'http://rocketseat.com.br',
        location: 'Brasil',
        email: null,
        hireable: null,
        bio:
          'CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.',
        public_repos: 47,
        public_gists: 126,
        followers: 1022,
        following: 9,
        created_at: '2012-08-31T11:46:00Z',
        updated_at: '2019-02-25T21:37:57Z',
      },
    ],
  };

  render() {
    return (
      <Container>
        {this.state.developers.map(developer => (
          <Developer key={developer.id} developer={developer} />
        ))}
      </Container>
    );
  }
}

export default DeveloperList;
