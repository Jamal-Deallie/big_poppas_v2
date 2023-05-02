import Map, { Marker } from 'react-map-gl';
import Image from 'next/image';
import styles from '@/styles/components/Map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

type MapProps = { latitude?: number; longitude?: number };

export default function RenderedMap({}: MapProps) {
  return (
    <Map
      scrollZoom={false}
      initialViewState={{
        latitude: 40.692829,
        longitude: -73.972458,
        zoom: 14,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}>
      <Marker longitude={-73.972458} latitude={40.692829}>
        <div className={styles['logo']}>
          <Image
            src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002133/big_poppas/logo_em3eg7.svg'}
            alt='logo'
            fill
            sizes={'100vw'}
            priority
          />
        </div>
      </Marker>
    </Map>
  );
}
