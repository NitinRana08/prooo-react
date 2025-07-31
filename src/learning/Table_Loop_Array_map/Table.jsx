function Table() {
  const userData = [
    { name: 'nitin rana', age: 11, email: 'nitinr822@gmail.com', id: 'nitin rana' },
    { name: 'sharad rana', age: 21, email: 'sharadr822@gmail.com', id: 'sharad rana' },
    { name: 'raj rana', age: 19, email: 'rajr822@gmail.com', id: 'raj rana' },
    { name: 'nikhil rana', age: 24, email: 'nikhilr822@gmail.com', id: 'nikhil rana' },
  ];

  return (
    <>
      <h1>HOLA</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
