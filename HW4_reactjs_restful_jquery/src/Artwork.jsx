import './style.css';
import React from 'react';
import ArtworkComponent from './components/ArtworkComponent';

function Artwork() {

  return (
    <main id="main">
      <div id="artwork" class="paddsection">

        {/* Header */}
        <div class="container">
          <div class="section-title text-center">
            <h2>My Artwork</h2>
          </div>
        </div>

        {/* Artworks */}
        <div class="container">
          <div class="row artwork-container">
            {/* 010 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1DC_wGXQwnNuvn-T__1tmYW96d1WKVfxJ"
              title="Jo Soo-min (조수민)"
              detail="2021.02.07 (2021.02.15 liked by Soo-min)"
            />
            {/* 009 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1lVDwCgCXToT7Ms2gr9CnSiPevk-ixDHR"
              title="Margot Robbie"
              detail="2020.02.29"
            />
            {/* 008 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1XtPrqRgWuqdHckelMm8WFw_5y4HQC4cg"
              title="(G)I-DLE Yuqi (宋雨琦)"
              detail="2018.09.24"
            />
            {/* 007 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=15PUmWJeNIo-MaPVzmC5cZgp0IJ-j9OqP"
              title="Krystal (정수정)"
              detail="2017.08.07"
            />
            {/* 006 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1e78cXmWf0AJIfFcjn80Hk7Ym1mCSOweK"
              title="Jung Da-Bin (정다빈)"
              detail="2017.06.22 (2017.07.06 liked by Da-Bin)"
            />
            {/* 005 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1qKvmIFktZli0CmCbgNztcl-p2AF8uBxv"
              title="Kim So-Hyun (김소현)"
              detail="2017.05.02"
            />
            {/* 004 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1X0yofKnvxbNQOl0LONy2OqzXIrgX5sKj"
              title="Kim You-Jung (김유정)"
              detail="2017.02.17"
            />
            {/* 003 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1vsLxhBd429TvjbBRB4yDjQkkNqjsPuSt"
              title="Chloë Grace Moretz"
              detail="2017.01.13"
            />          
            {/* 002 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1U__S4L9rg9uaN-ddOp809lDYmbeCHrmV"
              title="Kim So-Hyun (김소현)"
              detail="2017.01.12"
            />
            {/* 001 */}
            <ArtworkComponent 
              link="https://drive.google.com/uc?export=view&id=1A1vnX8bmXbXSzCsfAaxXJbMuwq6ZzCym"
              title="Chloë Grace Moretz"
              detail="2016.09.28 (2016.10.01 liked by Chloë)"
            />             
          </div>
        </div>
      </div>

    </main>

  );
}

export default Artwork;
