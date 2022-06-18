// Import stylesheets
import './style.css';
import {
  Map,
  TileLayer,
  layerGroup,
  Control,
  Marker,
  Icon,
  GeoJSON,
} from 'leaflet';

// Write Javascript code!
// const appDiv = document.getElementById('map');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const map = new Map('map');
console.log(1);
const layer = new TileLayer(
  'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
  {
    subdomains: '1234',
  }
);
const tdtoneLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
const tdttwoLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
const tdtthrLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/img_w/wmts?layer=img&style=default&TILEMATRIXSET=w&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=tiles&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&tk=c2190c0317e3b3e264124b7fc7a9ec7d'
);
// layer.addTo(map);
// map.setView([39.958, 116.395], 16);
tdtoneLayer.addTo(map); //默认展示第一个
// map.setView([39.9522, 116.3949], 10);
map.setView([39.95090487138684, 116.39014720916748], 13);

// const items = document.getElementsByName('base');
// items.forEach((item) => {
//   item.onclick = (evt) => {
//     switch (evt.target.value) {
//       case 'amap':
//         tdttwoLayer.removeFrom(map);
//         tdtthrLayer.removeFrom(map);
//         tdtoneLayer.addTo(map);
//         break;
//       case 'tdt':
//         tdtoneLayer.removeFrom(map);
//         tdtthrLayer.removeFrom(map);
//         tdttwoLayer.addTo(map);
//         break;
//       case 'tdtyx':
//         tdtoneLayer.removeFrom(map);
//         tdttwoLayer.removeFrom(map);
//         tdtthrLayer.addTo(map);
//         break;
//     }
//   };
// });

const layerControl = new Control.Layers(
  { 天地图1: tdtoneLayer, 天地图2: tdttwoLayer, 天地图3: tdtthrLayer },
  {},
  { collapsed: false }
);
layerControl.addTo(map);

//单个添加点位
// const marker1 = new Marker([39.94758202338572, 116.38795852661131], {
//   icon: new Icon({
//     iconUrl:
//       'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//   }),
// });

// const marker2 = new Marker([39.95286642741858, 116.3911235332489], {
//   icon: new Icon({
//     iconUrl:
//       'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//   }),
// });
// marker1.addTo(map);
// marker2.addTo(map);

const svg1 =
  '<svg t="1655472467612" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="200" height="200"><path d="M794.7 178C638.8 25 385.9 25 230 178 74 331.1 74 579.3 230 732.4l282.4 226.8 282.4-226.8c155.9-153.1 155.9-401.3-0.1-554.4zM512.4 623.2c-94.5 0-171.1-75.2-171.1-168s76.6-168 171.1-168 171.1 75.2 171.1 168-76.6 168-171.1 168z" p-id="2154" fill="#00FF00"></path></svg>';

const geoData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [116.3911235332489, 39.95286642741858],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [116.38795852661131, 39.94758202338572],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [116.39014720916748, 39.95090487138684],
      },
    },
  ],
};
const geoData2 = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [116.41508102416992, 39.97014789511233],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [116.39722824096681, 39.97146345961307],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [116.4255952835083, 39.966957546049215],
      },
    },
  ],
};
//多个点位批量添加
const layerGroup2 = new GeoJSON(geoData, {
  pointToLayer: (geoJsonPoint, latlng) => {
    return new Marker(latlng, {
      icon: new Icon({
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }),
    });
  },
});
layerGroup2.addTo(map);

const layerGroup3 = new GeoJSON(geoData2, {
  pointToLayer: (geoJsonPoint, latlng) => {
    return new Marker(latlng, {
      icon: new Icon({
        iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg1),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }),
    });
  },
});
layerGroup3.addTo(map);

const check2 = document.getElementById('check2');
const check3 = document.getElementById('check3');
check2.onchange = (evt) => {
  if (evt.target.checked) {
    layerGroup2.addTo(map);
  } else {
    layerGroup2.removeFrom(map);
  }
};
check3.onchange = (evt) => {
  if (evt.target.checked) {
    layerGroup3.addTo(map);
  } else {
    layerGroup3.removeFrom(map);
  }
};
