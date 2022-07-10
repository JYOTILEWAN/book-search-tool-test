import "./Book.css";
import NoPreviewImage from "../../assets/no-preview.png";
const Book = ({ title, author, publishedIn, lccn }) => {
  const imgSrc = lccn
    ? `https://covers.openlibrary.org/b/lccn/${lccn[0]}-S.jpg`
    : NoPreviewImage;

  return (
    <section className="book-container" aria-label={title}>
      <img className="book-cover" alt="book cover" src={imgSrc} />
      <article>
        <h1 className="book-title">{title ? title : "N/A"}</h1> 
        <p className="author-name" title="author name">
          Author : <strong>{author ? author[0] : "N/A"}</strong>
        </p>
        <p className="publication-date" title="publish date">
          Published on : <strong>{publishedIn ? publishedIn[0] : "N/A"}</strong>
        </p>
      </article>
    </section>
  );
};

export default Book;
