var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_QuickWKT_2 = new ol.format.GeoJSON();
var features_QuickWKT_2 = format_QuickWKT_2.readFeatures(json_QuickWKT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuickWKT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuickWKT_2.addFeatures(features_QuickWKT_2);
var lyr_QuickWKT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuickWKT_2, 
                style: style_QuickWKT_2,
                popuplayertitle: 'QuickWKT',
                interactive: true,
                title: '<img src="styles/legend/QuickWKT_2.png" /> QuickWKT'
            });
var format_1quickwkt_3 = new ol.format.GeoJSON();
var features_1quickwkt_3 = format_1quickwkt_3.readFeatures(json_1quickwkt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1quickwkt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1quickwkt_3.addFeatures(features_1quickwkt_3);
var lyr_1quickwkt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1quickwkt_3, 
                style: style_1quickwkt_3,
                popuplayertitle: 'Контур населенного пункта Интернет-картография Пр 1 — quickwkt',
                interactive: true,
                title: '<img src="styles/legend/1quickwkt_3.png" /> Контур населенного пункта Интернет-картография Пр 1 — quickwkt'
            });
var format_Clab1_4 = new ol.format.GeoJSON();
var features_Clab1_4 = format_Clab1_4.readFeatures(json_Clab1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clab1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clab1_4.addFeatures(features_Clab1_4);
var lyr_Clab1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clab1_4, 
                style: style_Clab1_4,
                popuplayertitle: 'C — lab1',
                interactive: true,
                title: '<img src="styles/legend/Clab1_4.png" /> C — lab1'
            });
var format_building_5 = new ol.format.GeoJSON();
var features_building_5 = format_building_5.readFeatures(json_building_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_5.addFeatures(features_building_5);
var lyr_building_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_5, 
                style: style_building_5,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_5.png" /> building'
            });
var format_1building_6 = new ol.format.GeoJSON();
var features_1building_6 = format_1building_6.readFeatures(json_1building_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1building_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1building_6.addFeatures(features_1building_6);
var lyr_1building_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1building_6, 
                style: style_1building_6,
                popuplayertitle: 'Строения Интернет-картография Пр 1 — building',
                interactive: true,
                title: '<img src="styles/legend/1building_6.png" /> Строения Интернет-картография Пр 1 — building'
            });
var format_highway_7 = new ol.format.GeoJSON();
var features_highway_7 = format_highway_7.readFeatures(json_highway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_7.addFeatures(features_highway_7);
var lyr_highway_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_7, 
                style: style_highway_7,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_7.png" /> highway'
            });
var format_1highway_8 = new ol.format.GeoJSON();
var features_1highway_8 = format_1highway_8.readFeatures(json_1highway_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1highway_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1highway_8.addFeatures(features_1highway_8);
var lyr_1highway_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1highway_8, 
                style: style_1highway_8,
                popuplayertitle: 'Дороги отметка Интернет-картография Пр 1 — highway',
                interactive: true,
                title: '<img src="styles/legend/1highway_8.png" /> Дороги отметка Интернет-картография Пр 1 — highway'
            });
var format_highway_9 = new ol.format.GeoJSON();
var features_highway_9 = format_highway_9.readFeatures(json_highway_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_9.addFeatures(features_highway_9);
var lyr_highway_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_9, 
                style: style_highway_9,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_9.png" /> highway'
            });
var format_1highway_10 = new ol.format.GeoJSON();
var features_1highway_10 = format_1highway_10.readFeatures(json_1highway_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1highway_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1highway_10.addFeatures(features_1highway_10);
var lyr_1highway_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1highway_10, 
                style: style_1highway_10,
                popuplayertitle: 'Дороги Интернет-картография Пр 1 — highway',
                interactive: true,
                title: '<img src="styles/legend/1highway_10.png" /> Дороги Интернет-картография Пр 1 — highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_QuickWKT_2.setVisible(true);lyr_1quickwkt_3.setVisible(true);lyr_Clab1_4.setVisible(true);lyr_building_5.setVisible(true);lyr_1building_6.setVisible(true);lyr_highway_7.setVisible(true);lyr_1highway_8.setVisible(true);lyr_highway_9.setVisible(true);lyr_1highway_10.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_YandexSatellite_1,lyr_QuickWKT_2,lyr_1quickwkt_3,lyr_Clab1_4,lyr_building_5,lyr_1building_6,lyr_highway_7,lyr_1highway_8,lyr_highway_9,lyr_1highway_10];
lyr_QuickWKT_2.set('fieldAliases', {'name': 'name', });
lyr_1quickwkt_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_Clab1_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:addr': 'source:addr', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', });
lyr_1building_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:addr': 'source:addr', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'shelter': 'shelter', });
lyr_1highway_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'shelter': 'shelter', });
lyr_highway_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'bicycle': 'bicycle', 'ref': 'ref', 'lanes': 'lanes', 'surface': 'surface', 'name': 'name', });
lyr_1highway_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'bicycle': 'bicycle', 'ref': 'ref', 'lanes': 'lanes', 'surface': 'surface', 'name': 'name', });
lyr_QuickWKT_2.set('fieldImages', {'name': 'TextEdit', });
lyr_1quickwkt_3.set('fieldImages', {'fid': '', 'name': '', });
lyr_Clab1_4.set('fieldImages', {'fid': '', 'name': '', });
lyr_building_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'source:addr': '', 'addr:street': '', 'addr:housenumber': '', });
lyr_1building_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'source:addr': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': '', });
lyr_highway_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'shelter': '', });
lyr_1highway_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'shelter': '', });
lyr_highway_9.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'bicycle': '', 'ref': '', 'lanes': '', 'surface': '', 'name': '', });
lyr_1highway_10.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'bicycle': '', 'ref': '', 'lanes': '', 'surface': '', 'name': '', });
lyr_QuickWKT_2.set('fieldLabels', {'name': 'no label', });
lyr_1quickwkt_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_Clab1_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:addr': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', });
lyr_1building_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:addr': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'shelter': 'no label', });
lyr_1highway_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'shelter': 'no label', });
lyr_highway_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'bicycle': 'no label', 'ref': 'no label', 'lanes': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_1highway_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'bicycle': 'no label', 'ref': 'no label', 'lanes': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_1highway_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});