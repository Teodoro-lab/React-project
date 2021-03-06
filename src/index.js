import React from "react";
import ReactDom from "react-dom";

//CSS
import './index.css'

const books = [
  {
    id: 1,
    author: "Charlie Mackesy",
    title: "The Boy, the Mole, the Fox and the Horse",
    img: "https://images-na.ssl-images-amazon.com/images/I/418D9yYGB3L._AC_SX184_.jpg"

  },
  {
    id: 2,
    author: "Jesica Uribe",
    title: "Barack Obama",
    img: "https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._AC_SX184_.jpg"
  },
  {
    id: 3,
    author: "Brandon Stanton",
    title: "Humans",
    img: "https://images-na.ssl-images-amazon.com/images/I/51B-BOBtQtL._AC_SX184_.jpg",
  },
  { 
    id: 4,
    author: "John Grisham",
    title: "A Timer For Mercy",
    img: "https://images-na.ssl-images-amazon.com/images/I/51Q4FT2AIfL._AC_SX184_.jpg"
  },
]
const BookList = () => {
  return(
  <div className="bookBox">
    <h1>This is a book list</h1>
      {books.map((book) =>{
          //const { author, title, img } = book;
          return <Book key = {book.id} book = {book}/> //hacer la asginación a book me permite enviar {book} al componente sin tener errores con la deconstrucción
      })} {/* También podemos usar en estar parte <Book {...book}/> y cambiar en el componente a solo proops*/}
  </div>
  );
}

const Book = (proops) => { //tambien se puede usar en lugar de proops la sintaxis ({author, title, img, children})
  const {title, author, img, children} = proops.book;
  return(
    <article className="book">
      <h1>{title}</h1>
      <h3>{author}</h3>
      <img src={img} alt="" />
    </article>  
  );
}; 

/* ESTA PARTE TE PERMITIA RENDERIZAR LOS ATIBUTOS DE LOS OBJETOS UNO POR UNO, PERO NECESITAMOS HACER EtoC
const BookList = () => {
  return(
  <div className="bookBox">
    <h1>This is a book list</h1>
    <Book
      title = {bookOne.title}
      author = {bookOne.author}
      img = {bookOne.img}
    >
    </Book>
    <Book
      title = {bookTwo.title}
      author = {bookTwo.author}
      img = {bookTwo.img}
    >
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nam accusamus corrupti dolorum, ipsam consequatur odit esse inventore aspernatur deserunt, sequi reiciendis optio tempora sed debitis veritatis? Laboriosam, magnam labore!</p>
    </Book>
  </div>
  );
};*/


// const Book = (proops) => { //tambien se puede usar en lugar de proops la sintaxis ({author, title, img, children})
//   const {title, author, img, children} = proops;
//   return(
//     <article className="book">
//       <h1>{proops.title}</h1>
//       <h3>{proops.author}</h3>
//       {/*proops.children*/}
//       <img src={proops.img} alt=""/>
      
//     </article>  
//   );
// }; 

// const Author = () => {
//   return(
//     <h4 style = {{marginTop: '.01rem', letterSpacing: '3px'}}>HaverBeke</h4>
//   );
// };

// const Title = () => {return(<h3>Eloquent JavaScript</h3>)};

// const Image = () => {
//   return(
//     <img src="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg" alt="Facebook"/>
//   );
// };

ReactDom.render(<BookList />, document.getElementById('root'))