var style_CaracterizaodasComunidades_3 = function(feature, resolution) {
    var texto = feature.get('texto') || '';
    
    var numero = texto.match(/^(\d+)\./);
    if (!numero || parseInt(numero[1]) > 30) return null;

    var coresVerdes = [
        '#00441b', '#006d2c', '#238b45', '#41ae76', '#66c2a4',
        '#78c679', '#31a354', '#006837', '#4daf4a', '#a1d99b',
        '#74c476', '#238b45', '#006d2c', '#005a32', '#41ab5d',
        '#addd8e', '#d0f0c0', '#b7e4c7', '#7fcdbb', '#2ca25f',
        '#1b9e77', '#a6dba0', '#5aae61', '#1a9850', '#66bd63',
        '#a6d96a', '#d9ef8b', '#ffffbf', '#006837', '#2e8b57'
    ];
    
    var index = parseInt(numero[1]) - 1;
    var cor = coresVerdes[index];

    return [new ol.style.Style({
        fill: new ol.style.Fill({ color: cor + 'B3' }), // B3 = 70%
        stroke: new ol.style.Stroke({ color: '#00441b', width: 0.8 }),
        text: new ol.style.Text({
            font: '11px sans-serif',
            fill: new ol.style.Fill({ color: '#000000' }),
            text: resolution < 30 ? texto : '',
            overflow: true
        })
    })];
};
