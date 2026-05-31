import "./tagbutton.css";
export default function Content({ title, children }) {
  return (
    <div>
      {title == null || title == "" ? (
        <div></div>
      ) : (
        <button className="tagbutton">
          {title}
          {children}
        </button>
      )}
    </div>
  );
}
