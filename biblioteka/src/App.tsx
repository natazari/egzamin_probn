import { useState } from 'react'

import './App.css'


function App() {
 

  return (
    <>
   
  <body className="bg-light">
    <div>
  
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-book-half me-2"></i>
            e-Księgarnia
          </a>

          <button className="btn btn-outline-light position-relative">
            <i className="bi bi-cart3"></i>
            <span
              id="headerCount"
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              3
            </span>
          </button>
        </div>
      </nav>

      <div className="container py-4">
        <div className="row g-4">
      
          <main className="col-lg-9">

            <section className="card mb-3">
              <div className="card-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="searchInput"
                    className="form-control"
                    placeholder="Szukaj książki po tytule lub autorze..."
                  />

                  <button className="btn btn-secondary">
                    <i className="bi bi-x"></i>
                  </button>
                </div>

          
                <div id="categoryFilter" className="btn-group flex-wrap" role="group">
                  <button className="btn btn-primary btn-sm">Wszystkie</button>
                  <button className="btn btn-outline-secondary btn-sm">kategoria 1</button>
                  <button className="btn btn-outline-secondary btn-sm">kategoria 2</button>
                </div>
              </div>
            </section>

            <section id="bookGrid" className="row g-3">
              <h2>Książki (liczba_wyświetlanych_książek)</h2>

            
              <div className="col-12 text-center text-secondary py-5">
                Nie znaleziono pasujących książek.
              </div>

        
              <div className="col-6 col-md-4 col-xl-3">
                <article className="card h-100 shadow-sm">
                  <img
                    src="covers/3afaf9d27dd541ee917b065bf5cae3bb.webp"
                    className="card-img-top"
                    alt="tytuł_książki"
                   
                  />

                  <div className="card-body">
                    <small className="text-secondary">
                      nazwa_kategorii
                    </small>

                    <h6 className="card-title mt-1">
                      tytuł_książki
                    </h6>

                    <p className="text-secondary small mb-2">
                      Nazwisko Imię Autora
                    </p>

                    <h6 className="text-primary">
                      <s className="text-danger">
                        32.10 zł
                      </s>
                      21.00 zł
                    </h6>

                    <p className="text-secondary small mb-1">
                      Dostępne 10 sztuk
                    </p>

                    <div className="d-flex gap-1">
                      <button className="btn btn-primary btn-sm flex-grow-1">
                        Dodaj do koszyka
                      </button>
                    </div>
                  </div>
                </article>
              </div>

          
              <div className="col-6 col-md-4 col-xl-3">
                <article className="card h-100 shadow-sm">
                  <img
                    src="covers/6e525cd533574df18889912c58679e58.webp"
                    className="card-img-top"
                    alt="tytuł_książki"
                    
                  />

                  <div className="card-body">
                    <small className="text-secondary">
                      nazwa_kategorii
                    </small>

                    <h6 className="card-title mt-1">
                      tytuł_książki
                    </h6>

                    <p className="text-secondary small mb-2">
                      Autor 1, Autor 2
                    </p>

                    <h6 className="text-primary">
                      123.45 zł
                    </h6>

                    <p className="text-secondary small mb-1">
                      Dostępne 0 sztuk
                    </p>

                    <div className="d-flex gap-1">
                      <button className="btn btn-primary btn-sm flex-grow-1" disabled>
                        Dodaj do koszyka
                      </button>
                    </div>
                  </div>
                </article>
              </div>

            </section>
          </main>

         
          <div className="aside" >
            <div className="card sticky-top">

              <header className="card-header bg-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Twój koszyk</h5>

                <button className="btn btn-link btn-sm text-secondary">
                  Wyczyść
                </button>
              </header>

              <div className="card-body">
                
                <section id="cartItems">

                
                  <article className="d-flex gap-2 border-bottom py-2">
                    <img src="covers/3afaf9d27dd541ee917b065bf5cae3bb.webp"
                      className="rounded"
                     
                      alt="tytuł_książki"
                    />

                    <div className="flex-grow-1">
                      <div className="small fw-bold">
                        tytuł_książki
                      </div>

                      <div className="small text-primary">
                        0.00 zł
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-1">
                        <div className="btn-group btn-group-sm">
                          <button className="btn btn-outline-secondary">
                            -
                          </button>

                          <button className="btn btn-light" disabled>
                            ilość_sztuk
                          </button>

                          <button className="btn btn-outline-secondary">
                            +
                          </button>
                        </div>

                        <button className="btn btn-link text-danger p-0">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </article>

             
                  <div className="text-center text-secondary py-4">
                    <i className="bi bi-cart3 fs-1"></i>
                    <p className="mb-0">Twój koszyk jest pusty!</p>
                  </div>
                </section>

                <hr />

          
                <div className="d-flex justify-content-between mb-2">
                  <span>Wartość koszyka:</span>
                  <span id="subtotalPrice">0.00 zł</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Rabat:</span>
                  <span id="discountAmount">0.00 zł</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Koszty dostawy:</span>
                  <span id="shippingCost">0.00 zł</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Do zapłaty:</span>
                  <span id="totalPrice">0.00 zł</span>
                </div>

                <button id="cartCheckout" className="btn btn-primary w-100">
                  Zapłać
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </body>
    </>
  )
}

export default App
