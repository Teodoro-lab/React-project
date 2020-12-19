const Book = (proops) => { //tambien se puede usar en lugar de proops la sintaxis ({author, title, img, children})
  const {title, author, img, children} = proops.book;
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello!");
  };

  return(
    <article className="book">
      <h1 onClick={() => alert("15$")}><a>{title}</a></h1>
      <h3>{author}</h3>
      <img src={img} alt="" />
      <button type="button" onClick={clickHandler}>
        reference
      </button>

    </article>  
  );
}; 

export default Book
