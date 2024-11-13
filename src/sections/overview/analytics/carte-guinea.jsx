import React  from 'react';
import { scaleLinear } from 'd3-scale';
import { Geography, Geographies, ComposableMap } from "react-simple-maps";


// Données de statistiques par région
const data = {
  'Conakry': 120,
  'Kindia': 80,
  'Mamou': 50,
  // Ajoutez les autres régions avec leurs statistiques ici
};

// Définir une échelle de couleurs en fonction des statistiques
const colorScale = scaleLinear()
  .domain([0, Math.max(...Object.values(data))])
  .range(["#D3E5FF", "#08306B"]);

// URL du fichier GeoJSON de la Guinée
const geoUrl = "https://geojson.io/#map=6.85/9.944/-11.407";

export function GuineaMap() {
  return (
    <ComposableMap projection="geoMercator" width={800} height={600}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const regionName = geo.properties.NAME_1; // Vérifiez l'attribut du GeoJSON pour le nom des régions
            const regionData = data[regionName] || 0;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={colorScale(regionData)}
                onMouseEnter={() => {
                  // Optionnel : Afficher les infos de la région
                  console.log(`${regionName}: ${regionData}`);
                }}
                style={{
                  default: { outline: 'none' },
                  hover: { fill: "#F53", outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}


