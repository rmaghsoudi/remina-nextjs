function Dashboard({ user }) {
  return (
    <div>
      <h3>{user.username}'s Dashboard</h3>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.API_URL}/users/1`);
  const user = await res.json();

  // By returning { props: { user } }, the Dashboard component
  // will receive `user` as a prop at build time
  return {
    props: {
      user,
    },
  };
}

export default Dashboard;
