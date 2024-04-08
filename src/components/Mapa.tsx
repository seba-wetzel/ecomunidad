"use client";
import Marcador from "@/components/Marcador";
import { apiKey } from "@/lib/google/googleConfig";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import {
  Children,
  ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { MapaSkeleton } from "./MapaSkeleton";
const ErrorComponent = (): ReactElement => <div>Something went wrong</div>;

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <ErrorComponent />;
  return <MapaSkeleton />;
};

function MyMapComponent({
  center,
  zoom,
  children,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children?: ReactElement;
}) {
  const [map, setMap] = useState<google.maps.Map>();

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function loadMap() {
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      if (!ref.current) return;
      setMap(
        new Map(ref.current, {
          center,
          zoom,
          controlSize: 24,
          streetViewControl: false,
          mapTypeControl: false,
          clickableIcons: false,
          fullscreenControl: true,
          mapId: "DEMO_MAP_ID",
        })
      );
    }
    loadMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full min-h-full  rounded-xl" ref={ref} id="map" />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return cloneElement(child, { map });
        }
      })}
    </>
  );
}
export interface MapaProps {
  apiKey: string;
  render?: (status: Status) => ReactElement;
  children?: ReactElement;
  center: google.maps.LatLngLiteral;
  zoom?: number;
  area?: google.maps.LatLngBoundsLiteral;
}
const Mapa = (): ReactElement => (
  <div className="h-[250px] w-full">
    <Wrapper apiKey={apiKey} render={render} libraries={["maps", "marker"]}>
      <MyMapComponent
        zoom={15}
        center={{
          lng: -58.3812772,
          lat: -34.8854021,
        }}
      >
        <Marcador
          position={{
            lng: -58.3812772,
            lat: -34.8854021,
          }}
          draggable
        />
      </MyMapComponent>
    </Wrapper>
  </div>
);

export default Mapa;
