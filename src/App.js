import "./App.css";
import Header from "./header";
import Post from "./post";
import Aside from "./sidebar";

const showCategory = true;
function App() {
  const posts = [
    {
      id: 1,
      postName: "اكادمية ترميز",
      postBody: "اكادمية مخصصه لتعليم البرمجه",
    },
    {
      id: 2,
      postName: "hello world",
      postBody: "this is jxs",
    },
    {
      id: 3,
      postName: "اكادمية ترميز",
      postBody: "body of second post",
    },
    {
      id: 4,
      postName: "third post",
      postBody: "body of third post",
    },
    {
      id: 5,
      postName: "test post",
      postBody: "test for post",
    },
  ];
  const postslist = posts.map((post) => {
    return <Post key={post.id} postName={post.postName} />;
  });
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
          }}
        >
          <div style={{ width: "70%" }}>
            {postslist}
          </div>
          <div style={{ width: "30%" }}>
            <AppSideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
function AppSideMenu() {
  if (showCategory === true) {
    return <Aside />;
  } else {
    return null;
  }
}

export default App;
