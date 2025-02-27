import React, { useEffect, useRef } from "react";
import maplibre from "maplibre-gl";  // import MapLibre GL
import pin from '@/assets/images/pin.svg';  // Path to your custom pin image

const MapComponent = ({ lat, lng }) => {
  const mapContainer = useRef(null);  // reference for map container

  useEffect(() => {
    // Initialize the map after the component mounts
    const map = new maplibre.Map({
      container: mapContainer.current, // container ID
      style: 'https://demotiles.maplibre.org/style.json', // Style URL
      center: [lng, lat], // Set the map center to lat, lng
      zoom: 2, // initial zoom level
      minZoom: 2, // Set minimum zoom level to prevent zooming out too far
      maxZoom: 18, 
    });

    // Create a custom marker using the pin image
    const markerElement = document.createElement('div');
    markerElement.style.backgroundImage = `url(${pin})`;
    markerElement.style.backgroundSize = 'contain';
    markerElement.style.width = '40px';
    markerElement.style.height = '40px';
    markerElement.style.position = 'absolute';

    // Create the marker and add it to the map
    new maplibre.Marker(markerElement)
      .setLngLat([lng, lat])
      .addTo(map);

      map.fitBounds([
        [lng - 0.1, lat - 0.1], // bottom-left corner of the bounds
        [lng + 0.1, lat + 0.1], // top-right corner of the bounds
      ], {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
        maxZoom: 18,
      });

    // Cleanup map instance when component unmounts
    return () => {
      map.remove();
    };
  }, [lat, lng]); // Re-run map creation whenever lat/lng changes

  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
};

export default MapComponent;
