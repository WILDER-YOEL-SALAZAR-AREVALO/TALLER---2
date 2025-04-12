var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_GEOLOGIA_CAJAMARCA_1 = new ol.format.GeoJSON();
var features_GEOLOGIA_CAJAMARCA_1 = format_GEOLOGIA_CAJAMARCA_1.readFeatures(json_GEOLOGIA_CAJAMARCA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGIA_CAJAMARCA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIA_CAJAMARCA_1.addFeatures(features_GEOLOGIA_CAJAMARCA_1);
var lyr_GEOLOGIA_CAJAMARCA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGIA_CAJAMARCA_1, 
                style: style_GEOLOGIA_CAJAMARCA_1,
                popuplayertitle: 'GEOLOGIA_CAJAMARCA',
                interactive: true,
    title: 'GEOLOGIA_CAJAMARCA<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_0.png" /> Ad-c<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_1.png" /> Ao-b<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_2.png" /> C_poblados<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_3.png" /> Fv2-a<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_4.png" /> Fv3-a<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_5.png" /> Fvs-a<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_6.png" /> Lagunas<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_7.png" /> Ll-a<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_8.png" /> Llo-b<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_9.png" /> Reservorio<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_10.png" /> Rios polyg<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_11.png" /> V-a<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_12.png" /> Vc-d<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_13.png" /> Vc-e<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_14.png" /> Vs1-d<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_15.png" /> Vs1-e<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_16.png" /> Vs2-d<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_17.png" /> Vs2-e<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_18.png" /> Vs3-d<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_19.png" /> Vs3-e<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_20.png" /> Vsa-b<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_21.png" /> VsA1-d<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_22.png" /> VsA1-e<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_23.png" /> VsA2-d<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_24.png" /> VsA2-e<br />\
    <img src="styles/legend/GEOLOGIA_CAJAMARCA_1_25.png" /> Vso-c<br />' });
var format_DEPARTAMENTO_CAJAMARCA_2 = new ol.format.GeoJSON();
var features_DEPARTAMENTO_CAJAMARCA_2 = format_DEPARTAMENTO_CAJAMARCA_2.readFeatures(json_DEPARTAMENTO_CAJAMARCA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTO_CAJAMARCA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTO_CAJAMARCA_2.addFeatures(features_DEPARTAMENTO_CAJAMARCA_2);
var lyr_DEPARTAMENTO_CAJAMARCA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTO_CAJAMARCA_2, 
                style: style_DEPARTAMENTO_CAJAMARCA_2,
                popuplayertitle: 'DEPARTAMENTO_CAJAMARCA',
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTO_CAJAMARCA_2.png" /> DEPARTAMENTO_CAJAMARCA'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_GEOLOGIA_CAJAMARCA_1.setVisible(true);lyr_DEPARTAMENTO_CAJAMARCA_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_GEOLOGIA_CAJAMARCA_1,lyr_DEPARTAMENTO_CAJAMARCA_2];
lyr_GEOLOGIA_CAJAMARCA_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_DEPARTAMENTO_CAJAMARCA_2.set('fieldAliases', {'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_1': 'NAME_1', });
lyr_GEOLOGIA_CAJAMARCA_1.set('fieldImages', {'OBJECTID': 'Hidden', 'SIMBOLO_': 'TextEdit', 'REGION': 'TextEdit', 'FORMAS_DEL': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_DEPARTAMENTO_CAJAMARCA_2.set('fieldImages', {'ISO': 'Hidden', 'NAME_0': 'Hidden', 'NAME_1': 'TextEdit', });
lyr_GEOLOGIA_CAJAMARCA_1.set('fieldLabels', {'SIMBOLO_': 'inline label - always visible', 'REGION': 'inline label - always visible', 'FORMAS_DEL': 'inline label - always visible', 'Area': 'inline label - always visible', 'Perimetro': 'inline label - always visible', });
lyr_DEPARTAMENTO_CAJAMARCA_2.set('fieldLabels', {'NAME_1': 'inline label - always visible', });
lyr_DEPARTAMENTO_CAJAMARCA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});