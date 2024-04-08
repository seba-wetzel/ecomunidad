/*
Links de interes:
(explica el porque no andaba sin el mapID)
https://developers.google.com/maps/documentation/javascript/advanced-markers/migration?hl=es-419
*/

import { FC, useEffect, useState } from "react";

export interface MarcadorProps {
  position: google.maps.LatLngLiteral;
  map?: google.maps.Map | undefined;
  draggable?: boolean;
  onDragEnd?: (
    position: google.maps.marker.AdvancedMarkerElement["position"]
  ) => void;
}
const Marcador: FC<MarcadorProps> = ({
  position,
  map,
  draggable,
  onDragEnd,
}) => {
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    async function loadMarker() {
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      setMarker(
        new AdvancedMarkerElement({
          map,
          position,
          title: "hola",
          zIndex: 10,
          gmpDraggable: draggable ?? false,
        })
      );
    }
    loadMarker();
  }, [map, position, draggable]);

  useEffect(() => {
    if (marker) {
      marker.addListener("dragend", () => {
        if (typeof onDragEnd === "function") {
          onDragEnd(marker.position);
        }
      });
    }
  }, [marker, onDragEnd]);

  return null;
};

export default Marcador;
