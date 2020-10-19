import React from 'react';
import 'isomorphic-fetch';

const Home = ({ repositories }) => (
  <div>
    {repositories.map((repository) => {
      <h1 key={repository.id}>{repository.name}</h1>;
    })}
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
  const repositories = response.json();

  return { repositories };
};

export default Home;
