// export function sayA() {
//   console.log('A');
//   let a = 'A';
//   return a;
// }
// export async function getPosts() {
//   await fetch(`http://localhost:4000/posts`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log('data', data.data);
//       let x = data.data;
//     })
//     .catch((error) => {
//       console.log('error', error);
//     });
// }

// const UserContextProvider = ({ children }) => {
//     const [user, setUser] = useState(initUserState)   
    
//     const decoded = LoggedInUser()
//     console.log('decodedxx', decoded);
//     const posts = getPost()
//     console.log('post', posts);
//     console.log('user', user);
  
//       return (
//           <UserContext.Provider value={{ user, setUser }}>
//             {children}
//           </UserContext.Provider>
//         );
//   }