var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: 'Граница_района',
                interactive: false,
                title: '<img src="styles/legend/__1.png" /> Граница_района'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Дороги',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> Дороги'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Строения',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Строения'
            });

lyr_OSMStandard_0.setVisible(true);lyr___1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr___1,lyr__2,lyr__3];
lyr___1.set('fieldAliases', {'id': 'id', });
lyr__2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'maxheight': 'maxheight', 'bus_bay': 'bus_bay', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'tactile_pa': 'tactile_pa', 'handrail': 'handrail', 'man_made': 'man_made', 'embankment': 'embankment', 'hgv': 'hgv', 'maxspeed_f': 'maxspeed_f', 'maxspeed_b': 'maxspeed_b', 'old_ref': 'old_ref', 'descriptio': 'descriptio', 'crossing': 'crossing', 'lanes_back': 'lanes_back', 'addr_postc': 'addr_postc', 'covered': 'covered', 'footway': 'footway', 'informal': 'informal', 'tracktype': 'tracktype', 'tunnel': 'tunnel', 'check_date': 'check_date', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'name_ru': 'name_ru', 'loc_name': 'loc_name', 'service': 'service', 'maxweight_': 'maxweight_', 'layer': 'layer', 'bridge': 'bridge', 'width': 'width', 'lanes_forw': 'lanes_forw', 'access': 'access', 'incline': 'incline', 'living_str': 'living_str', 'turn_lanes': 'turn_lanes', 'turn_lan_1': 'turn_lan_1', 'sidewalk': 'sidewalk', 'junction': 'junction', 'int_ref': 'int_ref', 'oneway': 'oneway', 'lane_marki': 'lane_marki', 'smoothness': 'smoothness', 'old_name': 'old_name', 'maxspeed_t': 'maxspeed_t', 'source_max': 'source_max', 'ref': 'ref', 'postal_cod': 'postal_cod', 'name_etymo': 'name_etymo', 'name': 'name', 'lit': 'lit', 'surface': 'surface', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'id': 'id', });
lyr__3.set('fieldAliases', {'osm_id': 'osm_id', 'building': 'building', 'amenity': 'amenity', 'addr_city': 'addr_city', 'address': 'address', });
lyr___1.set('fieldImages', {'id': 'TextEdit', });
lyr__2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'maxheight': 'TextEdit', 'bus_bay': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'tactile_pa': 'TextEdit', 'handrail': 'TextEdit', 'man_made': 'TextEdit', 'embankment': 'TextEdit', 'hgv': 'TextEdit', 'maxspeed_f': 'TextEdit', 'maxspeed_b': 'TextEdit', 'old_ref': 'TextEdit', 'descriptio': 'TextEdit', 'crossing': 'TextEdit', 'lanes_back': 'TextEdit', 'addr_postc': 'TextEdit', 'covered': 'TextEdit', 'footway': 'TextEdit', 'informal': 'TextEdit', 'tracktype': 'TextEdit', 'tunnel': 'TextEdit', 'check_date': 'TextEdit', 'destinatio': 'TextEdit', 'destinat_1': 'TextEdit', 'name_ru': 'TextEdit', 'loc_name': 'TextEdit', 'service': 'TextEdit', 'maxweight_': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'width': 'TextEdit', 'lanes_forw': 'TextEdit', 'access': 'TextEdit', 'incline': 'TextEdit', 'living_str': 'TextEdit', 'turn_lanes': 'TextEdit', 'turn_lan_1': 'TextEdit', 'sidewalk': 'TextEdit', 'junction': 'TextEdit', 'int_ref': 'TextEdit', 'oneway': 'TextEdit', 'lane_marki': 'TextEdit', 'smoothness': 'TextEdit', 'old_name': 'TextEdit', 'maxspeed_t': 'TextEdit', 'source_max': 'TextEdit', 'ref': 'TextEdit', 'postal_cod': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'lit': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'id': 'TextEdit', });
lyr__3.set('fieldImages', {'osm_id': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_city': 'TextEdit', 'address': 'TextEdit', });
lyr___1.set('fieldLabels', {'id': 'no label', });
lyr__2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'maxheight': 'no label', 'bus_bay': 'no label', 'motor_vehi': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'tactile_pa': 'no label', 'handrail': 'no label', 'man_made': 'no label', 'embankment': 'no label', 'hgv': 'no label', 'maxspeed_f': 'no label', 'maxspeed_b': 'no label', 'old_ref': 'no label', 'descriptio': 'no label', 'crossing': 'no label', 'lanes_back': 'no label', 'addr_postc': 'no label', 'covered': 'no label', 'footway': 'no label', 'informal': 'no label', 'tracktype': 'no label', 'tunnel': 'no label', 'check_date': 'no label', 'destinatio': 'no label', 'destinat_1': 'no label', 'name_ru': 'no label', 'loc_name': 'no label', 'service': 'no label', 'maxweight_': 'no label', 'layer': 'no label', 'bridge': 'no label', 'width': 'no label', 'lanes_forw': 'no label', 'access': 'no label', 'incline': 'no label', 'living_str': 'no label', 'turn_lanes': 'no label', 'turn_lan_1': 'no label', 'sidewalk': 'no label', 'junction': 'no label', 'int_ref': 'no label', 'oneway': 'no label', 'lane_marki': 'no label', 'smoothness': 'no label', 'old_name': 'no label', 'maxspeed_t': 'no label', 'source_max': 'no label', 'ref': 'no label', 'postal_cod': 'no label', 'name_etymo': 'no label', 'name': 'no label', 'lit': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'id': 'no label', });
lyr__3.set('fieldLabels', {'osm_id': 'hidden field', 'building': 'hidden field', 'amenity': 'hidden field', 'addr_city': 'hidden field', 'address': 'header label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});