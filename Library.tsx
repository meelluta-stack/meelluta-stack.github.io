import React from "react";
import { books, Book } from "../data/books";
import { videos, Video } from "../data/videos";
import { links, ResourceLink } from "../data/links";

const Library: React.FC = () => {
  return (
    <div className="library-page">

      {/* Seção Acervo Interno */}
      <section>
        <h2>Acervo Interno</h2>
        {books.length === 0 ? (
          <p>Nenhum livro disponível no momento.</p>
        ) : (
          books.map((book: Book) => (
            <div key={book.id} className="book-item">
              <h3>{book.title}</h3>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Data:</strong> {book.date}</p>
              <p><strong>Temática:</strong> {book.theme}</p>
              <a href={book.link} target="_blank" rel="noopener noreferrer">Abrir arquivo</a>
            </div>
          ))
        )}
      </section>

      {/* Seção Mídias Digitais */}
      <section>
        <h2>Mídias Digitais</h2>
        {videos.length === 0 ? (
          <p>Nenhum vídeo disponível no momento.</p>
        ) : (
          videos.map((video: Video) => (
            <div key={video.id} className="video-item">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              {video.embed ? (
                <iframe
                  width="560"
                  height="315"
                  src={video.link.replace("watch?v=", "embed/")}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <a href={video.link} target="_blank" rel="noopener noreferrer">Assistir no site original</a>
              )}
            </div>
          ))
        )}
      </section>

      {/* Seção Bases de Dados e Instituições (existente) */}
      <section>
        <h2>Bases de Dados e Instituições</h2>
        {links.map((link: ResourceLink) => (
          <div key={link.id} className="link-item">
            <p><strong>{link.category}:</strong> <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a></p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Library;
