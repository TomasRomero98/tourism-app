"use client";

import { useState } from "react";

export default function Dashboard() {
  const [switchTab, setSwitchTab] = useState(false);

  return (
    <main>
      <section>
        <h2>proximas excursiones</h2>

        {/* carrousel */}
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Burger"
            />
          </div>
        </div>
        <article>{/*trip preview cards*/}</article>
      </section>
      <section>
        <button onClick={() => setSwitchTab(true)}>Agenda</button>
        <button onClick={() => setSwitchTab(false)}>
          Todas las excursiones
        </button>
        {switchTab ? (
          <article>Argenda</article>
        ) : (
          <article>Excursiones</article>
        )}
      </section>
    </main>
  );
}
