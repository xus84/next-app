const Users = (props) => {
  return (
    <>
      <h3>Users</h3>
      <ul>
        {props.users.map((user) => (
          <li class="container mx-auto py-4 flex justify-center" key={user.id}>
            <div>
              <h5>
                {user.first_name} {user.last_name}
              </h5>
              <p>Email: {user.email}</p>
            </div>

            <img
              src={user.avatar}
              alt={user.first_name + user.last_name}
              style={{ borderRadius: "50%" }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
