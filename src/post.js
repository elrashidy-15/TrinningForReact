export default function Post({postName = "thtis is post" , postBody = "this is post body"}) {
  return (
    <div
      style={{
        margin: "25px",
        padding: "10px",
        border: "5px solid teal",
        borderRadius: "8px",
      }}
    >
      <h2>{postName}</h2>
      <hr></hr>
      <p>{postBody}</p>
    </div>
  );
}
