import Content from "./content";
export default function Aside() {
  const Category = [
    {
      id: 1,
      title: "اخر الزيارات",
      c: (
        <div>
          <span>1</span>
        </div>
      ),
    },
    {
      id: 2,
      title: "المقروء",
      c: (
        <div>
          <span>2</span>
        </div>
      ),
    },
    { id: 3, title: "كل المعروض", c: null },
    {
      id: 4,
      title: "الكل",
      c: (
        <div>
          <span>🤣🤣🤣🤣🤣🙌</span>
        </div>
      ),
    },
  ];
  const categorylist = Category.map((cat) => {
    return (
      <Content key={cat.id} title={cat.title}>
        {cat.c}
      </Content>
    );
  });
  return (
    <div
      style={{
        margin: "25px",
        border: "5px solid teal",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        height: "fit-content",
      }}
    >
      {categorylist}
      {/* <Content title="اخر الزيارات">
        <div>
          <span>1</span>
        </div>
      </Content>
      <Content title="المقروء">
        <div>
          <span>2</span>
        </div>
      </Content>
      <Content title="كل المعروض"></Content>
      <Content title="الكل">🤣🤣🤣🤣🤣🙌</Content>
      <Content title="" />
      <Content /> */}
    </div>
  );
}
